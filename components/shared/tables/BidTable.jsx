import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionAdminFetchAuctions } from "~/store/bid/action";
import BidColumn from "./table-columns/BidColumn";

function BidTable({ type }) {
	const dispatch = useDispatch();
	const { bids, bidGetLoading } = useSelector((state) => state.bid);

	useEffect(() => {
		dispatch(actionAdminFetchAuctions(type));
	}, []);

	console.log(bids);

	let bidEvents;
	if (!bidGetLoading) {
		bidEvents = bids.map((bidEvent, index) => {
			return (
				<BidColumn type={type} bidEvent={bidEvent} num={index} key={index} />
			);
		});
	}

	let tableHead;
	if (type === "approved") {
		tableHead = null;
	} else if (type === "pending") {
		tableHead = (
			<>
				<th>Approve</th>
				<th>Decline</th>
			</>
		);
	}else if (type === "completed") {
		tableHead = (
			<>
				<th>Winner</th>
			</>
		);
	}

	return (
		<div className="table-responsive">
			<table className="table ps-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>

						<th>Access Amount</th>
						<th>Minimum Amount</th>

						<th>Start Time</th>
						<th>End Time</th>
						{tableHead}
					</tr>
				</thead>
				<tbody>{!bidGetLoading && bidEvents}</tbody>
			</table>
		</div>
	);
}

export default BidTable;
