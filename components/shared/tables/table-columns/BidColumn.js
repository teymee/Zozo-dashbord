import React from "react";
import { useDispatch } from "react-redux";
import DropdownAction from "~/components/elements/basic/DropdownAction";
import { dateFormat } from "~/store/API/Api";
import { actionApproveEvent, actionCancelEvent } from "~/store/bid/action";
import styles from "../TableExtraStyles/extraStyles.module.css";

function BidColumn({ bidEvent, num, type }) {
	const dispatch = useDispatch();
	


	const approveEvent = () => {
		console.log("approve event");
		dispatch(actionApproveEvent(bidEvent.id));
	};

	const cancelEvent = () => {
		console.log(" Cancel event");
		dispatch(actionCancelEvent(bidEvent.id));
	};

	let button
	if(type === 'approved'){
		button = null
	}else if (type === "pending") {
	button = (
			<>
				<td>
					<button onClick={approveEvent} className={styles.createEventButton}>
						Approve
					</button>
				</td>
				<td>
					<button onClick={cancelEvent} className={styles.declineEventButton}>
						Delcine
					</button>
				</td>
			</>
		);
	} else if (type === "completed") {
		button = (
			<td>
				<strong>{bidEvent.winner === null ? "No Winner" :  `${bidEvent.winner.customer.account.first_name} ${bidEvent.winner.customer.account.last_name}`  }</strong>
			</td>
		);
	}
	


	return (
		<tr>
			<td>{num + 1}</td>
			<td>
				<strong>{bidEvent.product.name}</strong>
			</td>

			<td>{bidEvent.access_amount}</td>
			<td>{bidEvent.minimum_amount}</td>
			<td>{dateFormat(bidEvent.start_time)}</td>
			<td>{dateFormat(bidEvent.end_time)}</td>
			{/* <td>{badgeView}</td> */}

			{/* <td>
				<button onClick={approveEvent} className={styles.createEventButton}>
					Approve
				</button>
			</td>
			<td>
				<button onClick={cancelEvent} className={styles.declineEventButton}>
					Delcine
				</button>
			</td> */}

			{button}
			<td>
				<DropdownAction type={type} id={bidEvent.id} key={num + 1} />
			</td>
		</tr>
	);
}

export default BidColumn;
