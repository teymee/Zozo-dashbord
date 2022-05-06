webpackHotUpdate_N_E("pages/admin/login",{

/***/ "./pages/admin/login.js":
/*!******************************!*\
  !*** ./pages/admin/login.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/auth/action */ "./store/auth/action.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.module.css */ "./pages/admin/auth.module.css");
/* harmony import */ var _auth_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth_module_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\pages\\admin\\login.js",
    _s = $RefreshSig$();







function LoginAdmin() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.auth;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  var loginAdmin = function loginAdmin(e) {
    e.preventDefault();
    var loginCred = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    dispatch(Object(_store_auth_action__WEBPACK_IMPORTED_MODULE_3__["login"])(loginCred));
    setTimeout(function () {
      console.log(isLoggedIn);
      router.push("/");
    }, 2000); // if(isLoggedIn){
    // 	setTimeout(()=>{
    // 		router.push('/')
    // 	},2000)
    // 	console.log("user logged in")
    // }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _auth_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.authForm,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _auth_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "LOGIN"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: loginAdmin,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Email:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            required: true,
            name: "email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Password:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            required: true,
            name: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, this);
}

_s(LoginAdmin, "8pV5Mi9f0y9OKn2lE2v0CDkXI04=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = LoginAdmin;
/* harmony default export */ __webpack_exports__["default"] = (LoginAdmin);

var _c;

$RefreshReg$(_c, "LoginAdmin");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW5BZG1pbiIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsImlzTG9nZ2VkSW4iLCJsb2dpbkFkbWluIiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9naW5DcmVkIiwiZW1haWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwibG9naW4iLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJzdHlsZXMiLCJhdXRoRm9ybSIsImNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFDckIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRnFCLHFCQUdFQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUhiO0FBQUEsTUFHYkMsVUFIYSxnQkFHYkEsVUFIYTs7QUFJckIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxTQUFTLEdBQUc7QUFDakJDLFdBQUssRUFBRUgsQ0FBQyxDQUFDSSxNQUFGLENBQVNELEtBQVQsQ0FBZUUsS0FETDtBQUVqQkMsY0FBUSxFQUFFTixDQUFDLENBQUNJLE1BQUYsQ0FBU0UsUUFBVCxDQUFrQkQ7QUFGWCxLQUFsQjtBQUtBWixZQUFRLENBQUNjLGdFQUFLLENBQUNMLFNBQUQsQ0FBTixDQUFSO0FBQ0FNLGNBQVUsQ0FBQyxZQUFNO0FBQ2hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWVosVUFBWjtBQUNDUCxZQUFNLENBQUNvQixJQUFQLENBQVksR0FBWjtBQUNBLEtBSFEsRUFHTixJQUhNLENBQVYsQ0FSeUIsQ0FjekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FwQkQ7O0FBc0JBLHNCQUNDO0FBQUssYUFBUyxFQUFFQyx1REFBTSxDQUFDQyxRQUF2QjtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFFRCx1REFBTSxDQUFDRSxTQUF2QjtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUFNLGdCQUFRLEVBQUVmLFVBQWhCO0FBQUEsZ0NBQ0M7QUFBQSxrQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQU8sZ0JBQUksRUFBQyxPQUFaO0FBQW9CLG9CQUFRLE1BQTVCO0FBQTZCLGdCQUFJLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFNQztBQUFBLGtDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFBTyxnQkFBSSxFQUFDLFVBQVo7QUFBdUIsb0JBQVEsTUFBL0I7QUFBZ0MsZ0JBQUksRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORCxlQVdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9CQTs7R0E5Q1FULFU7VUFDT0UscUQsRUFDRUUsdUQsRUFDTUMsdUQ7OztLQUhmTCxVO0FBZ0RNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9sb2dpbi4wNTc4MTQ4NTg2NDNlNWYzYTllZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tIFwifi9zdG9yZS9hdXRoL2FjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hdXRoLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIExvZ2luQWRtaW4oKSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cdGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuXHRjb25zdCBsb2dpbkFkbWluID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IGxvZ2luQ3JlZCA9IHtcclxuXHRcdFx0ZW1haWw6IGUudGFyZ2V0LmVtYWlsLnZhbHVlLFxyXG5cdFx0XHRwYXNzd29yZDogZS50YXJnZXQucGFzc3dvcmQudmFsdWUsXHJcblx0XHR9O1xyXG5cdFxyXG5cdFx0ZGlzcGF0Y2gobG9naW4obG9naW5DcmVkKSk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coaXNMb2dnZWRJbik7XHJcblx0XHRcdFx0cm91dGVyLnB1c2goXCIvXCIpO1xyXG5cdFx0XHR9LCAyMDAwKTtcclxuXHJcblx0XHJcblx0XHQvLyBpZihpc0xvZ2dlZEluKXtcclxuXHRcdC8vIFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0Ly8gXHRcdHJvdXRlci5wdXNoKCcvJylcclxuXHRcdC8vIFx0fSwyMDAwKVxyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhcInVzZXIgbG9nZ2VkIGluXCIpXHJcblx0XHQvLyB9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aEZvcm19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PGgyPkxPR0lOPC9oMj5cclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17bG9naW5BZG1pbn0+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+RW1haWw6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIHJlcXVpcmVkIG5hbWU9XCJlbWFpbFwiIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkIG5hbWU9XCJwYXNzd29yZFwiIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8YnV0dG9uPkxvZ2luPC9idXR0b24+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luQWRtaW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=