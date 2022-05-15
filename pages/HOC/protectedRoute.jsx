import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { API, whoami } from "~/store/API/Api";
import axios from "axios";
import { useSelector } from "react-redux";

function protectedRoute(WrappedComponent) {
	return (props) => {
		const router = useRouter();
		const { jwt } = useSelector((state) => state.auth);

		const [isTokenVerified, setIsTokenVerified] = useState(false);
		const accessToken = API.TOKEN;

		useEffect(() => {
			const whoami = async (token) => {
				const url = API.BASE_URL + "/whoami";
				const config = {
					headers: {
						Authorization: "Bearer " + token,
					},
				};
				const data = await axios
					.get(url, config)
					.then((res) => {
						setIsTokenVerified(true);
						return res.data;
					})
					.catch((err) => {
						setIsTokenVerified(false);
						localStorage.removeItem("accessToken");
						router.push("/admin/login");
					});

				return data;
			};

			if (!jwt) {
				router.push("/admin/login");
			} else {
				console.log(jwt.replace(/(['"])/g, ""));
				whoami(jwt.replace(/(['"])/g, ""));
			}
		}, [jwt]);

		if (isTokenVerified) {
			return <WrappedComponent {...props} />;
		} else {
			return null;
		}
	};
}

export default protectedRoute;
