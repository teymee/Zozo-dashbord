import React, { useEffect, useState } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import { connect, useDispatch } from "react-redux";
import { toggleDrawerMenu } from "~/store/app/action";
import { addProduct } from "~/store/product/action";
import { useSelector } from "react-redux";
import { fetchCategory } from "~/store/category/action";
import Router  from "next/router";
import protectedRoute from "../HOC/protectedRoute";



const CreateProductPage = () => {
	const dispatch = useDispatch();
	const [productCategory, setProductCategory] = useState([]);
	
	useEffect(() => {
		dispatch(toggleDrawerMenu(false));
		dispatch(fetchCategory());
	}, []);
	const { category, cateGetLoading, productPostLoading } = useSelector(
		(state) => state.category
	);

	let categories;
	let categoryArray = (e) => {
		const selected = [];

		let selectedOption = e.target.selectedOptions;

		for (let i = 0; i < selectedOption.length; i++) {
			selected.push(selectedOption.item(i).value);
		}

		setProductCategory(selected);
	};

	if (!cateGetLoading) {
		categories = category.map((cate, index) => {
			return (
				<option key={index} value={cate.id}>
					{" "}
					{cate.name}
				</option>
			);
		});
	}

	const submitProduct = (e) => {
		e.preventDefault();
		console.log("product submitted");
		console.log(e.target.category.value);
		const category = productCategory;

		const product = {
			merchant_id: "1",
			name: e.target.product.value,
			description: e.target.description.value,
			category,
			price: e.target.price.value,
			features: {
				width: e.target.width.value,
				height: e.target.height.value,
				color: e.target.color.value,
				weigth: e.target.weight.value,
			},
			images: {
				main: e.target.image.value,
			},
		};
		dispatch(addProduct(product));

		if(!productPostLoading){

			setTimeout(() => {
				Router.push('/products')
			}, 2000);
		}
	};

	return (
		<ContainerDefault title="Create new product">
			<HeaderDashboard
				title="Create Product"
				description="Martfury Create New Product "
			/>
			<section className="ps-new-item">
				<form className="ps-form ps-form--new-product" onSubmit={submitProduct}>
					<div className="ps-form__content">
						<div className="row">
							<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
								<figure className="ps-block--form-box">
									<figcaption style={{ color: "white" }}>General</figcaption>
									<div className="ps-block__content">
										<div className="form-group">
											<label>
												Product Name<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder="Enter product name..."
												name="product"
											/>
										</div>

										<div className="form-group">
											<label>
												Product Description<sup>*</sup>
											</label>
											<textarea
												className="form-control"
												rows="6"
												name="description"
											></textarea>
										</div>

										<div className="form-group">
											<label>
												Category<sup>*</sup>
											</label>
											<select
												className="form-control"
												name="category"
												multiple
												onChange={categoryArray}
											>
												{!cateGetLoading && categories}
											</select>
										</div>

										<div className="form-group">
											<label>
												Price<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="number"
												placeholder="Price of Product"
												name="price"
											/>
										</div>

										<div>
											<label>
												Width<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder="Width"
												name="width"
											/>
										</div>

										<div className="form-group">
											<label>
												Height<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder="Height"
												name="height"
											/>
										</div>

										<div className="form-group">
											<label>
												Color<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder="Color"
												name="color"
											/>
										</div>

										<div className="form-group">
											<label>
												Weight<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder="Weight"
												name="weight"
											/>
										</div>

										{/* <div className="form-group">
											<label>
												Reference<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder="Enter product Reference..."
											/>
										</div> */}

										{/* <div className="form-group">
											<label>
												Product Summary<sup>*</sup>
											</label>
											<textarea
												className="form-control"
												rows="6"
												placeholder="Enter product description..."
											></textarea>
										</div>
										
										<div className="form-group">
											<label>
												Sale Price<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder=""
											/>
										</div>

										<div className="form-group">
											<label>
												Sale Quantity<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder=""
											/>
										</div>

										<div className="form-group">
											<label>
												Sold Items<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder=""
											/>
										</div> */}
									</div>
								</figure>
							</div>

							{/* PRODUCT IMAGE */}

							<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
								<figure className="ps-block--form-box">
									<figcaption style={{ color: "white" }}>
										Product Images
									</figcaption>
									<div className="ps-block__content">
										<div className="form-group">
											<label>Product Thumbnail</label>
											<div className="form-group--nest">
												<input
													className="form-control mb-1"
													type="text"
													placeholder=""
													name="image"
												/>
												<button className="ps-btn ps-btn--sm">Choose</button>
											</div>
										</div>
										<div className="form-group">
											<label>Product Gallery</label>
											<div className="form-group--nest">
												<input
													className="form-control mb-1"
													type="text"
													placeholder=""
												/>
												<button className="ps-btn ps-btn--sm">Choose</button>
											</div>
										</div>
										<div className="form-group form-group--nest">
											<input
												className="form-control mb-1"
												type="text"
												placeholder=""
											/>
											<button className="ps-btn ps-btn--sm">Choose</button>
										</div>
										<div className="form-group">
											<label>Video (optional)</label>
											<input
												className="form-control"
												type="text"
												placeholder="Enter video URL"
											/>
										</div>
									</div>
								</figure>

								{/* PRODUCT FEATURES */}
								{/* <figure className="ps-block--form-box">
									<figcaption>Product Features</figcaption>
									<div className="ps-block__content">
										<div className="form-group">
											<label>
												Width<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder=""
											/>
										</div>

										<div className="form-group">
											<label>
												Height<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder=""
											/>
										</div>

										<div className="form-group">
											<label>
												Color<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder=""
											/>
										</div>

										<div className="form-group">
											<label>
												Weight<sup>*</sup>
											</label>
											<input
												className="form-control"
												type="text"
												placeholder=""
											/>
										</div>

								
									</div>
								</figure>
								<figure className="ps-block--form-box">
									<figcaption>Meta</figcaption>
									<div className="ps-block__content">
										<div className="form-group form-group--select">
											<label>Brand</label>
											<div className="form-group__content">
												<select className="ps-select" title="Brand">
													<option value="1">Brand 1</option>
													<option value="2">Brand 2</option>
													<option value="3">Brand 3</option>
													<option value="4">Brand 4</option>
												</select>
											</div>
										</div>
										<div className="form-group">
											<label>Tags</label>
											<input className="form-control" type="text" />
										</div>
									</div>
								</figure> */}
							</div>
						</div>
					</div>
					<div className="ps-form__bottom">
						<a className="ps-btn ps-btn--black" href="products.html">
							Back
						</a>
						{/* <button className="ps-btn ps-btn--gray">Cancel</button> */}
						<button className="ps-btn">Submit</button>
					</div>
				</form>
			</section>
		</ContainerDefault>
	);
};
export default protectedRoute(connect((state) => state.app)(CreateProductPage));
