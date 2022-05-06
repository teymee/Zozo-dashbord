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
        isLoggedIn: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRTdGF0ZSIsImlzTG9nZ2VkSW4iLCJpc1JlZ2lzdGVyZWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWN0aW9uVHlwZXMiLCJMT0dJTl9TVUNDRVNTIiwiUkVHSVNURVJfU1VDQ0VTUyIsIkxPR09VVF9TVUNDRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsU0FBUyxHQUFHO0FBQ3JCQyxZQUFVLEVBQUUsSUFEUztBQUVyQkMsY0FBWSxFQUFFO0FBRk8sQ0FBbEI7O0FBS1AsU0FBU0MsT0FBVCxHQUE0QztBQUFBLE1BQTNCQyxLQUEyQix1RUFBbkJKLFNBQW1CO0FBQUEsTUFBUkssTUFBUTs7QUFDeEMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0MsbURBQVcsQ0FBQ0MsYUFBakI7QUFDSSw2Q0FDT0osS0FEUCxHQUVPO0FBQUVILGtCQUFVLEVBQUU7QUFBZCxPQUZQOztBQUlBLFNBQUtNLG1EQUFXLENBQUNFLGdCQUFqQjtBQUNJLDZDQUNPTCxLQURQLEdBRU87QUFBRUYsb0JBQVksRUFBRTtBQUFoQixPQUZQOztBQUlSLFNBQUtLLG1EQUFXLENBQUNHLGNBQWpCO0FBQ0ksNkNBQ09OLEtBRFAsR0FFTztBQUFFSCxrQkFBVSxFQUFFO0FBQWQsT0FGUDs7QUFJSjtBQUNJLGFBQU9HLEtBQVA7QUFqQlI7QUFtQkg7O0FBRWNELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzg2NzNlNWE0NzlkOTExN2Y4YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0ge1xuICAgIGlzTG9nZ2VkSW46IG51bGwsXG4gICAgaXNSZWdpc3RlcmVkOiBmYWxzZSxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dJTl9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGlzTG9nZ2VkSW46IHRydWUgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlJFR0lTVEVSX1NVQ0NFU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIC4uLnsgaXNSZWdpc3RlcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dPVVRfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBpc0xvZ2dlZEluOiBmYWxzZSB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9