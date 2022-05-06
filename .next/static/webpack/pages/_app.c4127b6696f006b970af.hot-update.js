webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/auth/reducer.js":
/*!*******************************!*\
  !*** ./store/auth/reducer.js ***!
  \*******************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initState = {
  isLoggedIn: null,
  isRegistered: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        isLoggedIn: action.isLogin
      });

    case _action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].REGISTER_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        isRegistered: true
      });

    case _action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOGOUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        isLoggedIn: false
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRTdGF0ZSIsImlzTG9nZ2VkSW4iLCJpc1JlZ2lzdGVyZWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWN0aW9uVHlwZXMiLCJMT0dJTl9TVUNDRVNTIiwiaXNMb2dpbiIsIlJFR0lTVEVSX1NVQ0NFU1MiLCJMT0dPVVRfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBRztBQUNyQkMsWUFBVSxFQUFFLElBRFM7QUFFckJDLGNBQVksRUFBRTtBQUZPLENBQWxCOztBQUtQLFNBQVNDLE9BQVQsR0FBNEM7QUFBQSxNQUEzQkMsS0FBMkIsdUVBQW5CSixTQUFtQjtBQUFBLE1BQVJLLE1BQVE7O0FBQ3hDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtDLG1EQUFXLENBQUNDLGFBQWpCO0FBQ0ksNkNBQ09KLEtBRFAsR0FFTztBQUFFSCxrQkFBVSxFQUFFSSxNQUFNLENBQUNJO0FBQXJCLE9BRlA7O0FBSUEsU0FBS0YsbURBQVcsQ0FBQ0csZ0JBQWpCO0FBQ0ksNkNBQ09OLEtBRFAsR0FFTztBQUFFRixvQkFBWSxFQUFFO0FBQWhCLE9BRlA7O0FBSVIsU0FBS0ssbURBQVcsQ0FBQ0ksY0FBakI7QUFDSSw2Q0FDT1AsS0FEUCxHQUVPO0FBQUVILGtCQUFVLEVBQUU7QUFBZCxPQUZQOztBQUlKO0FBQ0ksYUFBT0csS0FBUDtBQWpCUjtBQW1CSDs7QUFFY0Qsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNDEyN2I2Njk2ZjAwNmI5NzBhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbml0U3RhdGUgPSB7XG4gICAgaXNMb2dnZWRJbjogbnVsbCxcbiAgICBpc1JlZ2lzdGVyZWQ6IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkxPR0lOX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgaXNMb2dnZWRJbjogYWN0aW9uLmlzTG9naW4gfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlJFR0lTVEVSX1NVQ0NFU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIC4uLnsgaXNSZWdpc3RlcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dPVVRfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBpc0xvZ2dlZEluOiBmYWxzZSB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9