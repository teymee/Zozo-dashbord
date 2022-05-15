import { actionTypes } from './action';

const ISSERVER = typeof window === "undefined";
let token;
if (!ISSERVER) {
	// Access localStorage
	token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
}
export const initState = {
    isLoggedIn: false,
    isRegistered: false,
    jwt:token
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true, jwt:action.isLogin.token },
            };
            case actionTypes.REGISTER_SUCCESS:
                return {
                    ...state,
                    ...{ isRegistered: true },
                };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false },
            };
        default:
            return state;
    }
}

export default reducer;
