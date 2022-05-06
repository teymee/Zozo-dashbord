// HOC/withAuth.jsx
import { useRouter } from "next/router";

import { API } from "../../store/API/Api";

const privateRoute = (WrappedComponent) => {
	return (props) => {
		const Router = useRouter();
		const accessToken = API.TOKEN;

		if (!accessToken) {
			return <WrappedComponent {...props} />;
		} else {
			Router.back();
			// return null;
		}
	};
};

export default privateRoute;
