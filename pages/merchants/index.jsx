import React, { useEffect } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import Pagination from "~/components/elements/basic/Pagination";
import TableCustomerItems from "~/components/shared/tables/TableCustomerItems";
import FormSearchSimple from "~/components/shared/forms/FormSearchSimple";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import { connect, useDispatch } from "react-redux";
import { toggleDrawerMenu } from "~/store/app/action";
import { Select } from "antd";
import { useSelector } from "react-redux";
import { actionGetAllMechants } from "~/store/merchant/action";
import protectedRoute from "../HOC/protectedRoute";

const { Option } = Select;
const CustomersPage = () => {
	const dispatch = useDispatch();
	const { merchants, merchantGetLoading } = useSelector(
		(state) => state.merchant
	);
	useEffect(() => {
		dispatch(actionGetAllMechants());
	}, []);
	return (
		<ContainerDefault title="Merchants">
			<HeaderDashboard
				title="Customers"
				description="Martfury Customer Listing"
			/>
			<section className="ps-items-listing">
				<div className="ps-section__header simple">
					{/* <div className="ps-section__filter">
                        <FormSearchSimple />
                    </div>
                    <div className="ps-section__actions">
                        <a className="ps-btn success" href="#">
                            <i className="icon icon-plus mr-2"></i>Add Customer
                        </a>
                    </div> */}
				</div>
				<div className="ps-section__header">
					<div className="ps-section__filter">
						<form className="ps-form--filter" action="index.html" method="get">
							<div className="ps-form__left">
								<div className="form-group">
									<Select
										placeholder="Select Category"
										className="ps-ant-dropdown"
										listItemHeight={20}
									>
										<Option value="clothing-and-apparel">
											Clothing & Apparel
										</Option>
										<Option value="garden-and-kitchen">Garden & Kitchen</Option>
									</Select>
								</div>
								<div className="form-group">
									<Select
										placeholder="Select Category"
										className="ps-ant-dropdown"
										listItemHeight={20}
									>
										<Option value="simple-product">Simple Product</Option>
										<Option value="groupped-product">Groupped product</Option>
									</Select>
								</div>
								<div className="form-group">
									<Select
										placeholder="Status"
										className="ps-ant-dropdown"
										listItemHeight={20}
									>
										<Option value="active">Active</Option>
										<Option value="in-active">InActive</Option>
									</Select>
								</div>
							</div>
							<div className="ps-form__right">
								<button className="ps-btn ps-btn--gray">
									<i className="icon icon-funnel mr-2"></i>
									Filter
								</button>
							</div>
						</form>
					</div>
					<div className="ps-section__search">
						<form
							className="ps-form--search-simple"
							action="index.html"
							method="get"
						>
							<input
								className="form-control"
								type="text"
								placeholder="Search product"
							/>
							<button>
								<i className="icon icon-magnifier"></i>
							</button>
						</form>
					</div>
				</div>
				<div className="ps-section__content">
				{/* <TableCustomerItems type={"merchant"} users={merchants} /> */}
					{ !merchantGetLoading && <TableCustomerItems type="merchant" users={merchants} />}
				</div>
				<div className="ps-section__footer">
					<p>Show 10 in 30 items.</p>
					<Pagination />
				</div>
			</section>
		</ContainerDefault>
	);
};
export default protectedRoute(connect((state) => state.app)(CustomersPage));
