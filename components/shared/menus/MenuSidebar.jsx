import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuSidebar = () => {
	const router = useRouter();
	const menuItems = [
		{
			text: "Dashboard",
			url: "/",
			icon: "icon-home",
		},

		{
			text: "Categories",
			url: "/categories",
			icon: "icon-users2",
		},
		{
			text: "Products",
			url: "/products",
			icon: "icon-database",
		},

		{
			text: "Pending Auctions",
			url: "/bids/pending",
			icon: "icon-cog",
		},
		{
			text: "Approved Auctions",
			url: "/bids/approved",
			icon: "icon-cog",
		},
		{
			text: "Ongoing Auctions",
			url: "/bids/ongoing",
			icon: "icon-cog",
		},
		{
			text: "Completed Auctions",
			url: "/bids/completed",
			icon: "icon-cog",
		},

		{
			text: "Orders",
			url: "/orders",
			icon: "icon-bag2",
		},
		{
			text: "Customers",
			url: "/customers",
			icon: "icon-users2",
		},
		{
			text: "Merchants",
			url: "/merchants",
			icon: "icon-users2",
		},
		// {
		// 	text: "Shipping",
		// 	url: "/shipping",
		// 	icon: "icon-cog",
		// },
		// {
		// 	text: "Cashout Requests",
		// 	url: "/cashout_requests",
		// 	icon: "icon-cog",
		// },
		// {
		// 	text: "Approved Cashouts",
		// 	url: "/approved_cashouts",
		// 	icon: "icon-cog",
		// },

		{
			text: "Settings",
			url: "/settings",
			icon: "icon-cog",
		},
	];

	return (
		<ul className="menu">
			{menuItems.map((item, index) => (
				<li
					key={index}
					className={router.pathname === item.url ? "active" : ""}
				>
					<Link href={item.url}>
						<a>
							<i className={item.icon}></i>
							{item.text}
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default MenuSidebar;
