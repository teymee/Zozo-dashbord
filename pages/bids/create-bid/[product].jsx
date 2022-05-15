import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import protectedRoute from "~/pages/HOC/protectedRoute";
import { actionCreateBidEvent } from "~/store/bid/action";

function CreateBidPage() {
	const route = useRouter()
	
	const dispatch = useDispatch()
		
	const submitProduct = (e) => {
		e.preventDefault();
		
		console.log("Bid Event form submitted");
		const product_id = route.query.product;
		console.log(e.target.start_time.value)
		const bidEvent = {
			product_id,
			start_time: e.target.start_time.value,
			end_time: e.target.end_time.value,
			access_amount: e.target.access_amount.value,
			minimum_amount: e.target.minimum_amount.value,
		};
		dispatch(actionCreateBidEvent(bidEvent));
	};

	return (
		<ContainerDefault title="Create new Bid Event">
			<HeaderDashboard
				title="Create Bid Event"
				description="Martfury Create New Bid Event "
			/>
			<section className="ps-new-item">
				<form className="ps-form ps-form--new-product" onSubmit={submitProduct}>
					<div className="ps-form__content">
						<div className="row">
							<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
								<figure className="ps-block--form-box">
									<figcaption>Create Bid Event</figcaption>
									<div className="ps-block__content">
										<div className="form-group">
											<label>
												Event Start Time<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="datetime-local"
												name="start_time"
											/>
										</div>

										<div className="form-group">
											<label>
												Event End Time<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="datetime-local"
												name="end_time"
											/>
										</div>

										<div className="form-group">
											<label>
												Access Price<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="number"
												placeholder="Access Amount for Event"
												name="access_amount"
											/>
										</div>

										<div className="form-group">
											<label>
												Minimum Bid Amount<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="number"
												placeholder="Minimum Bid Amount"
												name="minimum_amount"
											/>
										</div>
									</div>
								</figure>
							</div>
						</div>
					</div>
					<div className="ps-form__bottom">
						<a className="ps-btn ps-btn--black" href="products.html">
							Back
						</a>

						<button className="ps-btn">Submit</button>
					</div>
				</form>
			</section>
		</ContainerDefault>
	);
}

export default protectedRoute(CreateBidPage);
