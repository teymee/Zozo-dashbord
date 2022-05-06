export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
};

export function login(loginCred) {
    return { type: actionTypes.LOGIN_REQUEST, loginCred};
}

export function loginSuccess(isLogin) {
    console.log(isLogin)
    return { type: actionTypes.LOGIN_SUCCESS, isLogin };
}

export function register(registerCred) {
    return { type: actionTypes.REGISTER_REQUEST, registerCred};
}

export function registerSuccess(isRegistered) {
    
    return { type: actionTypes.REGISTER_SUCCESS, isRegistered};
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}
