import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "~/store/auth/action";
import { useRouter } from "next/router";
import styles from "./auth.module.css";
import protectedRoute from "../HOC/protectedRoute";
import authRoute from "../HOC/authRoute";

function LoginAdmin() {
	const router = useRouter();
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector((state) => state.auth);
	const loginAdmin = (e) => {
		e.preventDefault();
		const loginCred = {
			email: e.target.email.value,
			password: e.target.password.value,
		};
		console.log("Admin Login");
		dispatch(login({ loginCred, router }));
		console.log(isLoggedIn);
	};

	return (
		<div className={styles.authForm}>
			<div className={styles.container}>
				<h2>LOGIN</h2>
				<form onSubmit={loginAdmin}>
					<div>
						<label>Email:</label>
						<input type="email" required name="email" />
					</div>

					<div>
						<label>Password:</label>
						<input type="password" required name="password" />
					</div>

					<button>Login</button>
				</form>
			</div>
		</div>
	);
}
export default authRoute(LoginAdmin);
// export default protectedRoute(LoginAdmin);
