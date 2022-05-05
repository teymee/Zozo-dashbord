import React from "react";
import DropdownAction from "~/components/elements/basic/DropdownAction";
import CustomerColumn from "./table-columns/CustomerColumn";
import MerchantColumn from "./table-columns/MerchantColumn";
import { useSelector } from "react-redux";

const TableCustomerItems = ({ users, type }) => {
	const { customers, customerGetLoading } = useSelector(
		(state) => state.customer
	);

	if(!customerGetLoading ){

		const userList = users.map((user, index) => {
			let data;
	
			if (type === "merchant") {
				data = <MerchantColumn user={user} key={index} num={index} />;
			} else if (type === "customer") {
				data = <CustomerColumn user={user} key={index} num={index} />;
			}
			return data;
		});
	}
	return (
		<div className="table-responsive">
			<table className="table ps-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Total Auctions</th>
						<th>Status</th>
						<th>Verify/Upgrade</th>
					</tr>
				</thead>
				<tbody>{userList}</tbody>
			</table>
		</div>
	);
};

export default TableCustomerItems;
