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
    console.log("Admin Login");
    dispatch(Object(_store_auth_action__WEBPACK_IMPORTED_MODULE_3__["login"])(loginCred));
    console.log(isLoggedIn);

    if (isLoggedIn) {
      console.log(isLoggedIn);
      setTimeout(function () {
        router.push("/");
      }, 2000);
    } // if(isLoggedIn){
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
        lineNumber: 37,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: loginAdmin,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Email:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            required: true,
            name: "email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Password:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            required: true,
            name: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW5BZG1pbiIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsImlzTG9nZ2VkSW4iLCJsb2dpbkFkbWluIiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9naW5DcmVkIiwiZW1haWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImxvZ2luIiwic2V0VGltZW91dCIsInB1c2giLCJzdHlsZXMiLCJhdXRoRm9ybSIsImNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFDckIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRnFCLHFCQUdFQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUhiO0FBQUEsTUFHYkMsVUFIYSxnQkFHYkEsVUFIYTs7QUFJckIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxTQUFTLEdBQUc7QUFDakJDLFdBQUssRUFBRUgsQ0FBQyxDQUFDSSxNQUFGLENBQVNELEtBQVQsQ0FBZUUsS0FETDtBQUVqQkMsY0FBUSxFQUFFTixDQUFDLENBQUNJLE1BQUYsQ0FBU0UsUUFBVCxDQUFrQkQ7QUFGWCxLQUFsQjtBQUlBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FmLFlBQVEsQ0FBQ2dCLGdFQUFLLENBQUNQLFNBQUQsQ0FBTixDQUFSO0FBQ0FLLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixVQUFaOztBQUNBLFFBQUlBLFVBQUosRUFBZ0I7QUFDZlMsYUFBTyxDQUFDQyxHQUFSLENBQVlWLFVBQVo7QUFDQVksZ0JBQVUsQ0FBQyxZQUFNO0FBQ2hCbkIsY0FBTSxDQUFDb0IsSUFBUCxDQUFZLEdBQVo7QUFDQSxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0EsS0Fkd0IsQ0FlekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLEdBckJEOztBQXVCQSxzQkFDQztBQUFLLGFBQVMsRUFBRUMsdURBQU0sQ0FBQ0MsUUFBdkI7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBRUQsdURBQU0sQ0FBQ0UsU0FBdkI7QUFBQSw4QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFBTSxnQkFBUSxFQUFFZixVQUFoQjtBQUFBLGdDQUNDO0FBQUEsa0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUFPLGdCQUFJLEVBQUMsT0FBWjtBQUFvQixvQkFBUSxNQUE1QjtBQUE2QixnQkFBSSxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBTUM7QUFBQSxrQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQU8sZ0JBQUksRUFBQyxVQUFaO0FBQXVCLG9CQUFRLE1BQS9CO0FBQWdDLGdCQUFJLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkQsZUFXQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFvQkE7O0dBL0NRVCxVO1VBQ09FLHFELEVBQ0VFLHVELEVBQ01DLHVEOzs7S0FIZkwsVTtBQWlETUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vbG9naW4uNDVkMzEwMzU2ZTdlNGU4M2JjMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIn4vc3RvcmUvYXV0aC9hY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYXV0aC5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBMb2dpbkFkbWluKCkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHRjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcblx0Y29uc3QgbG9naW5BZG1pbiA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBsb2dpbkNyZWQgPSB7XHJcblx0XHRcdGVtYWlsOiBlLnRhcmdldC5lbWFpbC52YWx1ZSxcclxuXHRcdFx0cGFzc3dvcmQ6IGUudGFyZ2V0LnBhc3N3b3JkLnZhbHVlLFxyXG5cdFx0fTtcclxuXHRcdGNvbnNvbGUubG9nKFwiQWRtaW4gTG9naW5cIik7XHJcblx0XHRkaXNwYXRjaChsb2dpbihsb2dpbkNyZWQpKTtcclxuXHRcdGNvbnNvbGUubG9nKGlzTG9nZ2VkSW4pO1xyXG5cdFx0aWYgKGlzTG9nZ2VkSW4pIHtcclxuXHRcdFx0Y29uc29sZS5sb2coaXNMb2dnZWRJbik7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHJvdXRlci5wdXNoKFwiL1wiKTtcclxuXHRcdFx0fSwgMjAwMCk7XHJcblx0XHR9XHJcblx0XHQvLyBpZihpc0xvZ2dlZEluKXtcclxuXHRcdC8vIFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0Ly8gXHRcdHJvdXRlci5wdXNoKCcvJylcclxuXHRcdC8vIFx0fSwyMDAwKVxyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhcInVzZXIgbG9nZ2VkIGluXCIpXHJcblx0XHQvLyB9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aEZvcm19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PGgyPkxPR0lOPC9oMj5cclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17bG9naW5BZG1pbn0+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+RW1haWw6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIHJlcXVpcmVkIG5hbWU9XCJlbWFpbFwiIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkIG5hbWU9XCJwYXNzd29yZFwiIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8YnV0dG9uPkxvZ2luPC9idXR0b24+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luQWRtaW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=