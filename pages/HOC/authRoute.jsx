// HOC/withAuth.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios"
import { API } from "../../store/API/Api";

const authRoute = (WrappedComponent) => {
	return (props) => {
		const Router = useRouter();
		const [verified, setVerified] = useState(false);

		useEffect(async () => {
			const accessToken = API.TOKEN;
               
			// if no accessToken was found,then we redirect to "/" page.
			if (!accessToken) {
				Router.replace("/admin/login");
                        console.log(accessToken)
			} else {
				// we call the api that verifies the token.
				const whoami = async () => {
					const url = API.BASE_URL + "/whoami";
					console.log(API.TOKEN);
					const config = {
						headers: {
							Authorization: "Bearer " + API.TOKEN,
						},
					};
					const data = await axios.get(url, config).then((res) => {
						return res.data;
					}).catch((err)=>{
                                    let data
                                    if(err){
                                          data = false
                                    }
                                    return data
                              })

					return data;
				};
				const data = await whoami(API.BASE_URL);
				// if token was verified we set the state.
				if (data) {
					setVerified(true);
				} else {
					// If the token was fraud we first remove it from localStorage and then redirect to "/"
					localStorage.removeItem("accessToken");
					Router.replace("/admin/login");
				}
			}
		}, []);

		if (verified) {

			return <WrappedComponent {...props} />;
		} else {
			return null;
		}
	};
};

export default authRoute;
