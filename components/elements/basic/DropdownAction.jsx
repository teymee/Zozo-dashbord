import React from "react";
import { Dropdown, Menu } from "antd";
import { useDispatch } from "react-redux";
import { deleteActionCategory } from "~/store/category/action";
import Link from "next/link";

const DropdownAction = ({ type, id }) => {
	const dispatch = useDispatch();
	console.log(type)
	let url =""
	if(type === "customer"){
		url = '/user/customer/'+id
	}else if(type === "merchant"){
		url = '/user/merchant/'+id
	}
   
	const deleteCategory = () => {
		switch (type) {
			case "category":
				dispatch(deleteActionCategory(id));
                console.log(type)
				break;
		}
	};

	const menuView = (
		<Menu>
			<Menu.Item key={0}>
				<Link href={url}>
				<p className="dropdown-item">
					<i className="icon-pencil mr-2"></i>
					View
				</p>
				</Link>
			</Menu.Item>
			<Menu.Item key={0} onClick={deleteCategory}>
				<p className="dropdown-item" >
					<i className="icon-trash2 mr-2"></i>
					Delete
				</p>
			</Menu.Item>
		</Menu>
	);
	return (
		<Dropdown overlay={menuView} className="ps-dropdown">
			<p onClick={(e) => e.preventDefault()} className="ps-dropdown__toggle">
				<i className="icon-ellipsis"></i>
			</p>
		</Dropdown>
	);
};

export default DropdownAction;
