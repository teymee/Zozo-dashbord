import { actionTypes } from './action';

export const initState = {
    isLoggedIn: null,
    isRegistered: false,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: action.isLogin },
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
