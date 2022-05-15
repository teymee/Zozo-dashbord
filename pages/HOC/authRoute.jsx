import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

function authRoute(WrappedComponent) {
	return (props) => {
		const router = useRouter()
		const { jwt } = useSelector((state) => state.auth);

	   

	

		if (!jwt) {
			return <WrappedComponent {...props} />;
		} else {
			router.push('/');
			return  null
		}
	};
}

export default authRoute;
