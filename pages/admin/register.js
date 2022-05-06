import React from "react";
import styles from "./auth.module.css";
import { useDispatch } from "react-redux";
import { register } from "~/store/auth/action";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import privateRoute from "../HOC/privateRoute";

function Register() {
	const dispatch = useDispatch();
	const router = useRouter();
	const { isRegistered } = useSelector((state) => state.auth);
	const registerAdmin = (e) => {
		e.preventDefault();
		const registerCred = {
			first_name: e.target.firstname.value,
			last_name: e.target.lastname.value,
			email: e.target.email.value,
			password: e.target.password.value,
			phone_number: e.target.phone.value,
			address: {
				street: e.target.street.value,
				city: e.target.city.value,
				country: e.target.country.value,
				state: e.target.state.value,
				zip_code: e.target.zip_code.value,
			},
			account_type: "admin",
		};
		console.log("Admin Register");
		dispatch(register(registerCred));
		setTimeout(() => {
			router.push("/");
		}, 7000);
		if (isRegistered) {
			console.log("user registered");
		}
	};
	return (
		<div className={styles.authForm}>
			<div className={styles.container}>
				<h2>REGISTER</h2>
				<form onSubmit={registerAdmin}>
					<div>
						<label>Firstname:</label>
						<input type="text" required name="firstname" />
					</div>
					<div>
						<label>Lastname:</label>
						<input type="text" required name="lastname" />
					</div>
					<div>
						<label>Email:</label>
						<input type="email" required name="email" />
					</div>
					<div>
						<label>Phone number:</label>
						<input type="tel" required name="phone" />
					</div>
					<div>
						<label>Street:</label>
						<input type="text" required name="street" />
					</div>
					<div>
						<label>City:</label>
						<input type="text" required name="city" />
					</div>
					<div>
						<label>Zip Code:</label>
						<input type="text" required name="zip_code" />
					</div>
					<div>
						<label>State:</label>
						<input type="text" required name="state" />
					</div>

					<div>
						<label>Country:</label>
						<input type="text" required name="country" />
					</div>

					<div>
						<label>Password:</label>
						<input type="password" required name="password" />
					</div>

					<button>Register</button>
				</form>
			</div>
		</div>
	);
}


export default privateRoute(Register);
