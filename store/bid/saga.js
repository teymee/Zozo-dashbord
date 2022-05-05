import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { API } from "../API/Api";
import {
	actionAdminFetchAuctionsSuccess,
	actionApproveEventSuccess,
	actionCancelEventSuccess,
	actionCreateBidEventSuccess,
	actionTypes,
} from "./action";

const config = {
	headers: {
		Authorization: "Bearer " + API.TOKEN,
	},
};

//POST CREAT BID EVENT
const sagaCreateBidEvent = async (event) => {
	console.log("saga func");
	const url = API.MERCHANT_ADMIN_BASE_URL + "/bidding";
	const config = {
		headers: {
			Authorization: "Bearer " + API.TOKEN,
		},
	};
	const data = axios.post(url, event, config).then((response) => {
		console.log(response.data);
		return response.data;
	});

	return data;
};

const sagaAdminFetchBidEvent = async (status) => {
	let data;
	if (status === "pending") {
		const url = API.ADMIN_BASE_URL + "/bidding";

		console.log(status);
		data = axios.get(url, config).then((response) => {
			const pendingBids = response.data.bidding_event.filter((bid) => {
				return bid.approved === false;
			});
			return pendingBids;
		});
	} else if (status === "approved") {
		const url = API.ADMIN_BASE_URL + "/bidding";

		console.log(status);
		data = axios.get(url, config).then((response) => {
			console.log(response.data.bidding_event);
			const approvedBids = response.data.bidding_event.filter((bid) => {
				return bid.approved === true;
			});
			return approvedBids;
		});
	} else {
		const url = API.ADMIN_BASE_URL + "/bidding/status";

		const eventStatus = {
			status,
		};

		console.log(eventStatus);
		data = axios.post(url, eventStatus, config).then((response) => {
			console.log(response.data);
			return response.data.bidding_event;
		});
	}

	return data;
};

const sagaApproveBidEvent = async (event_id) => {
	console.log("saga func");
	const url = API.ADMIN_BASE_URL + "/bidding/approve/" + event_id;
	const config = {
		headers: {
			Authorization: "Bearer " + API.TOKEN,
		},
	};
	console.log(url);
	const data = axios.post(url, event_id, config).then((response) => {
		console.log(response.data);
		return response.data;
	});

	return data;
};

const sagaCancelBidEvent = async (event_id) => {
	
	const url = API.ADMIN_BASE_URL + "/bidding/cancel/" + event_id;
	const config = {
		headers: {
			Authorization: "Bearer " + API.TOKEN,
		},
	};
	console.log(url);
	const data = axios.post(url, event_id, config).then((response) => {
		console.log(response.data);
		return response.data;
	});

	return data;
};


function* createBidEvent(payload) {
	try {
		const isEventAdded = yield call(sagaCreateBidEvent, payload.event);
		yield put(actionCreateBidEventSuccess(isEventAdded));
	} catch (err) {
		console.log(err);
	}
}

function* adminFetchBidEvent(payload) {
	try {
		const getAllBidEvent = yield call(sagaAdminFetchBidEvent, payload.status);
		console.log(getAllBidEvent);
		yield put(actionAdminFetchAuctionsSuccess(getAllBidEvent));
	} catch (err) {
		console.log(err);
	}
}

function* approveBidEvent(payload) {
	try {
		const isApproved = yield call(sagaApproveBidEvent, payload.event_id);
		console.log(isApproved);
		yield put(actionApproveEventSuccess(isApproved));
	} catch (err) {
		console.log(err);
	}
}

function* cancelBidEvent(payload) {
	try {
		const isCancelled = yield call(sagaCancelBidEvent, payload.event_id);
		console.log(isCancelled);
		yield put(actionCancelEventSuccess(isCancelled));
	} catch (err) {
		console.log(err);
	}
}


export default function* rootSaga() {
	yield all([takeEvery(actionTypes.CREATE_BID_EVENT, createBidEvent)]);
	yield all([
		takeEvery(actionTypes.ADMIN_FETCH_BID_EVENTS, adminFetchBidEvent),
	]);
	yield all([takeEvery(actionTypes.APPROVE_BID_EVENT, approveBidEvent)]);
	yield all([takeEvery(actionTypes.CANCEL_BID_EVENT, approveBidEvent)]);
}
