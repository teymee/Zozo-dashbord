module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/admin/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/HOC/privateRoute.jsx":
/*!************************************!*\
  !*** ./pages/HOC/privateRoute.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_API_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/API/Api */ "./store/API/Api.js");

var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\pages\\HOC\\privateRoute.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// HOC/withAuth.jsx



const privateRoute = WrappedComponent => {
  return props => {
    const Router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
    const accessToken = _store_API_Api__WEBPACK_IMPORTED_MODULE_2__["API"].TOKEN;

    if (!accessToken) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WrappedComponent, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, undefined);
    } else {
      Router.back(); // return null;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (privateRoute);

/***/ }),

/***/ "./pages/admin/auth.module.css":
/*!*************************************!*\
  !*** ./pages/admin/auth.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"authForm": "auth_authForm__3DBY0",
	"container": "auth_container__30JYd"
};


/***/ }),

/***/ "./pages/admin/register.js":
/*!*********************************!*\
  !*** ./pages/admin/register.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.module.css */ "./pages/admin/auth.module.css");
/* harmony import */ var _auth_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store/auth/action */ "./store/auth/action.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _HOC_privateRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../HOC/privateRoute */ "./pages/HOC/privateRoute.jsx");

var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\pages\\admin\\register.js";








function Register() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    isRegistered
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.auth);

  const registerAdmin = e => {
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
        zip_code: e.target.zip_code.value
      },
      account_type: "admin"
    };
    console.log("Admin Register");
    dispatch(Object(_store_auth_action__WEBPACK_IMPORTED_MODULE_4__["register"])(registerCred));
    setTimeout(() => {
      router.push("/");
    }, 7000);

    if (isRegistered) {
      console.log("user registered");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _auth_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.authForm,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _auth_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "REGISTER"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: registerAdmin,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Firstname:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            required: true,
            name: "firstname"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Lastname:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            required: true,
            name: "lastname"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Email:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            required: true,
            name: "email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Phone number:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "tel",
            required: true,
            name: "phone"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Street:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            required: true,
            name: "street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "City:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            required: true,
            name: "city"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Zip Code:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            required: true,
            name: "zip_code"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "State:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            required: true,
            name: "state"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Country:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            required: true,
            name: "country"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Password:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            required: true,
            name: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_privateRoute__WEBPACK_IMPORTED_MODULE_6__["default"])(Register));

/***/ }),

/***/ "./store/API/Api.js":
/*!**************************!*\
  !*** ./store/API/Api.js ***!
  \**************************/
/*! exports provided: API, dateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
const ISSERVER = true;
let token;

if (!ISSERVER) {
  // Access localStorage
  token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
}

const API = {
  ADMIN_BASE_URL: "http://smart-park.xyz/api/v1/admin",
  BASE_URL: "http://smart-park.xyz/api/v1",
  MERCHANT_ADMIN_BASE_URL: "http://smart-park.xyz/api/v1/merchant",
  TOKEN: token
};
const dateFormat = timeFormat => {
  const event = new Date(timeFormat);
  const time = event.toString();
  const totalStringLength = time.length;
  const stringToSlice = time.indexOf("G");
  const finalDate = time.slice(0, stringToSlice);
  console.log(totalStringLength);
  return finalDate;
};

/***/ }),

/***/ "./store/auth/action.js":
/*!******************************!*\
  !*** ./store/auth/action.js ***!
  \******************************/
/*! exports provided: actionTypes, login, loginSuccess, register, registerSuccess, logOut, logOutSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOutSuccess", function() { return logOutSuccess; });
const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION'
};
function login(loginCred) {
  return {
    type: actionTypes.LOGIN_REQUEST,
    loginCred
  };
}
function loginSuccess(isLogin) {
  console.log(isLogin);
  return {
    type: actionTypes.LOGIN_SUCCESS,
    isLogin
  };
}
function register(registerCred) {
  return {
    type: actionTypes.REGISTER_REQUEST,
    registerCred
  };
}
function registerSuccess(isRegistered) {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    isRegistered
  };
}
function logOut() {
  return {
    type: actionTypes.LOGOUT
  };
}
function logOutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvSE9DL3ByaXZhdGVSb3V0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vYXV0aC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2FkbWluL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0FQSS9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYXV0aC9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsicHJpdmF0ZVJvdXRlIiwiV3JhcHBlZENvbXBvbmVudCIsInByb3BzIiwiUm91dGVyIiwidXNlUm91dGVyIiwiYWNjZXNzVG9rZW4iLCJBUEkiLCJUT0tFTiIsImJhY2siLCJSZWdpc3RlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJpc1JlZ2lzdGVyZWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInJlZ2lzdGVyQWRtaW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJyZWdpc3RlckNyZWQiLCJmaXJzdF9uYW1lIiwidGFyZ2V0IiwiZmlyc3RuYW1lIiwidmFsdWUiLCJsYXN0X25hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwaG9uZV9udW1iZXIiLCJwaG9uZSIsImFkZHJlc3MiLCJzdHJlZXQiLCJjaXR5IiwiY291bnRyeSIsInppcF9jb2RlIiwiYWNjb3VudF90eXBlIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyIiwic2V0VGltZW91dCIsInB1c2giLCJzdHlsZXMiLCJhdXRoRm9ybSIsImNvbnRhaW5lciIsIklTU0VSVkVSIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQURNSU5fQkFTRV9VUkwiLCJCQVNFX1VSTCIsIk1FUkNIQU5UX0FETUlOX0JBU0VfVVJMIiwiZGF0ZUZvcm1hdCIsInRpbWVGb3JtYXQiLCJldmVudCIsIkRhdGUiLCJ0aW1lIiwidG9TdHJpbmciLCJ0b3RhbFN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInN0cmluZ1RvU2xpY2UiLCJpbmRleE9mIiwiZmluYWxEYXRlIiwic2xpY2UiLCJhY3Rpb25UeXBlcyIsIkxPR0lOX1JFUVVFU1QiLCJMT0dJTl9TVUNDRVNTIiwiUkVHSVNURVJfUkVRVUVTVCIsIlJFR0lTVEVSX1NVQ0NFU1MiLCJMT0dPVVQiLCJMT0dPVVRfU1VDQ0VTUyIsIkNIRUNLX0FVVEhPUklaQVRJT04iLCJsb2dpbiIsImxvZ2luQ3JlZCIsInR5cGUiLCJsb2dpblN1Y2Nlc3MiLCJpc0xvZ2luIiwicmVnaXN0ZXJTdWNjZXNzIiwibG9nT3V0IiwibG9nT3V0U3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVB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dCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FkbWluL3JlZ2lzdGVyLmpzXCIpO1xuIiwiLy8gSE9DL3dpdGhBdXRoLmpzeFxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi8uLi9zdG9yZS9BUEkvQXBpXCI7XHJcblxyXG5jb25zdCBwcml2YXRlUm91dGUgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xyXG5cdHJldHVybiAocHJvcHMpID0+IHtcclxuXHRcdGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdFx0Y29uc3QgYWNjZXNzVG9rZW4gPSBBUEkuVE9LRU47XHJcblxyXG5cdFx0aWYgKCFhY2Nlc3NUb2tlbikge1xyXG5cdFx0XHRyZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFJvdXRlci5iYWNrKCk7XHJcblx0XHRcdC8vIHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcml2YXRlUm91dGU7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImF1dGhGb3JtXCI6IFwiYXV0aF9hdXRoRm9ybV9fM0RCWTBcIixcblx0XCJjb250YWluZXJcIjogXCJhdXRoX2NvbnRhaW5lcl9fMzBKWWRcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hdXRoLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tIFwifi9zdG9yZS9hdXRoL2FjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHByaXZhdGVSb3V0ZSBmcm9tIFwiLi4vSE9DL3ByaXZhdGVSb3V0ZVwiO1xyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IHsgaXNSZWdpc3RlcmVkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG5cdGNvbnN0IHJlZ2lzdGVyQWRtaW4gPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgcmVnaXN0ZXJDcmVkID0ge1xyXG5cdFx0XHRmaXJzdF9uYW1lOiBlLnRhcmdldC5maXJzdG5hbWUudmFsdWUsXHJcblx0XHRcdGxhc3RfbmFtZTogZS50YXJnZXQubGFzdG5hbWUudmFsdWUsXHJcblx0XHRcdGVtYWlsOiBlLnRhcmdldC5lbWFpbC52YWx1ZSxcclxuXHRcdFx0cGFzc3dvcmQ6IGUudGFyZ2V0LnBhc3N3b3JkLnZhbHVlLFxyXG5cdFx0XHRwaG9uZV9udW1iZXI6IGUudGFyZ2V0LnBob25lLnZhbHVlLFxyXG5cdFx0XHRhZGRyZXNzOiB7XHJcblx0XHRcdFx0c3RyZWV0OiBlLnRhcmdldC5zdHJlZXQudmFsdWUsXHJcblx0XHRcdFx0Y2l0eTogZS50YXJnZXQuY2l0eS52YWx1ZSxcclxuXHRcdFx0XHRjb3VudHJ5OiBlLnRhcmdldC5jb3VudHJ5LnZhbHVlLFxyXG5cdFx0XHRcdHN0YXRlOiBlLnRhcmdldC5zdGF0ZS52YWx1ZSxcclxuXHRcdFx0XHR6aXBfY29kZTogZS50YXJnZXQuemlwX2NvZGUudmFsdWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdGFjY291bnRfdHlwZTogXCJhZG1pblwiLFxyXG5cdFx0fTtcclxuXHRcdGNvbnNvbGUubG9nKFwiQWRtaW4gUmVnaXN0ZXJcIik7XHJcblx0XHRkaXNwYXRjaChyZWdpc3RlcihyZWdpc3RlckNyZWQpKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRyb3V0ZXIucHVzaChcIi9cIik7XHJcblx0XHR9LCA3MDAwKTtcclxuXHRcdGlmIChpc1JlZ2lzdGVyZWQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJ1c2VyIHJlZ2lzdGVyZWRcIik7XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRoRm9ybX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0XHQ8aDI+UkVHSVNURVI8L2gyPlxyXG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtyZWdpc3RlckFkbWlufT5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5GaXJzdG5hbWU6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgbmFtZT1cImZpcnN0bmFtZVwiIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5MYXN0bmFtZTo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBuYW1lPVwibGFzdG5hbWVcIiAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+RW1haWw6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIHJlcXVpcmVkIG5hbWU9XCJlbWFpbFwiIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5QaG9uZSBudW1iZXI6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZWxcIiByZXF1aXJlZCBuYW1lPVwicGhvbmVcIiAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+U3RyZWV0OjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIG5hbWU9XCJzdHJlZXRcIiAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+Q2l0eTo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBuYW1lPVwiY2l0eVwiIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5aaXAgQ29kZTo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBuYW1lPVwiemlwX2NvZGVcIiAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+U3RhdGU6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgbmFtZT1cInN0YXRlXCIgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5Db3VudHJ5OjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIG5hbWU9XCJjb3VudHJ5XCIgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5QYXNzd29yZDo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxidXR0b24+UmVnaXN0ZXI8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXZhdGVSb3V0ZShSZWdpc3Rlcik7XHJcbiIsImNvbnN0IElTU0VSVkVSID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxubGV0IHRva2VuO1xyXG5pZiAoIUlTU0VSVkVSKSB7XHJcblx0Ly8gQWNjZXNzIGxvY2FsU3RvcmFnZVxyXG5cdHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikgOiBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVBJID0ge1xyXG5cdEFETUlOX0JBU0VfVVJMOiBcImh0dHA6Ly9zbWFydC1wYXJrLnh5ei9hcGkvdjEvYWRtaW5cIixcclxuXHRCQVNFX1VSTDogXCJodHRwOi8vc21hcnQtcGFyay54eXovYXBpL3YxXCIsXHJcblx0TUVSQ0hBTlRfQURNSU5fQkFTRV9VUkw6IFwiaHR0cDovL3NtYXJ0LXBhcmsueHl6L2FwaS92MS9tZXJjaGFudFwiLFxyXG5cdFRPS0VOOiB0b2tlbixcclxuXHR9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGVGb3JtYXQgPSAodGltZUZvcm1hdCkgPT4ge1xyXG5cdGNvbnN0IGV2ZW50ID0gbmV3IERhdGUodGltZUZvcm1hdCk7XHJcblx0Y29uc3QgdGltZSA9IGV2ZW50LnRvU3RyaW5nKCk7XHJcblxyXG5cdGNvbnN0IHRvdGFsU3RyaW5nTGVuZ3RoID0gdGltZS5sZW5ndGg7XHJcblx0Y29uc3Qgc3RyaW5nVG9TbGljZSA9IHRpbWUuaW5kZXhPZihcIkdcIik7XHJcblx0Y29uc3QgZmluYWxEYXRlID0gdGltZS5zbGljZSgwLCBzdHJpbmdUb1NsaWNlKTtcclxuXHRjb25zb2xlLmxvZyh0b3RhbFN0cmluZ0xlbmd0aClcclxuXHRyZXR1cm4gZmluYWxEYXRlO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gICAgTE9HSU5fUkVRVUVTVDogJ0xPR0lOX1JFUVVFU1QnLFxuICAgIExPR0lOX1NVQ0NFU1M6ICdMT0dJTl9TVUNDRVNTJyxcbiAgICBSRUdJU1RFUl9SRVFVRVNUOiAnUkVHSVNURVJfUkVRVUVTVCcsXG4gICAgUkVHSVNURVJfU1VDQ0VTUzogJ1JFR0lTVEVSX1NVQ0NFU1MnLFxuICAgIExPR09VVDogJ0xPR09VVCcsXG4gICAgTE9HT1VUX1NVQ0NFU1M6ICdMT0dPVVRfU1VDQ0VTUycsXG4gICAgQ0hFQ0tfQVVUSE9SSVpBVElPTjogJ0NIRUNLX0FVVEhPUklaQVRJT04nLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKGxvZ2luQ3JlZCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX1JFUVVFU1QsIGxvZ2luQ3JlZH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpblN1Y2Nlc3MoaXNMb2dpbikge1xuICAgIGNvbnNvbGUubG9nKGlzTG9naW4pXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HSU5fU1VDQ0VTUywgaXNMb2dpbiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIocmVnaXN0ZXJDcmVkKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUkVHSVNURVJfUkVRVUVTVCwgcmVnaXN0ZXJDcmVkfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU3VjY2Vzcyhpc1JlZ2lzdGVyZWQpIHtcbiAgICBcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5SRUdJU1RFUl9TVUNDRVNTLCBpc1JlZ2lzdGVyZWR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nT3V0KCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR09VVCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nT3V0U3VjY2VzcygpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5MT0dPVVRfU1VDQ0VTUyB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=