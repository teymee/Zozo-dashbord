webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/merchant/action.js":
/*!**********************************!*\
  !*** ./store/merchant/action.js ***!
  \**********************************/
/*! exports provided: actionTypes, actionGetAllMechants, actionSuccessGetAllMechants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionGetAllMechants", function() { return actionGetAllMechants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSuccessGetAllMechants", function() { return actionSuccessGetAllMechants; });
var actionTypes = {
  GET_ALL_MERCHANTS: "GET_ALL_MERCHANTS",
  GET_ALL_MERCHANTS_SUCCESS: "GET_ALL_MERCHANTS_SUCCESS"
};
var actionGetAllMechants = function actionGetAllMechants() {
  return {
    type: GET_ALL_MERCHANTS
  };
};
var actionSuccessGetAllMechants = function actionSuccessGetAllMechants(merchants) {
  console.log();
  return {
    type: GET_ALL_MERCHANTS_SUCCESS,
    merchants: merchants
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvYWN0aW9uLmpzIl0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwiR0VUX0FMTF9NRVJDSEFOVFMiLCJHRVRfQUxMX01FUkNIQU5UU19TVUNDRVNTIiwiYWN0aW9uR2V0QWxsTWVjaGFudHMiLCJ0eXBlIiwiYWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzIiwibWVyY2hhbnRzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsV0FBVyxHQUFFO0FBQ3BCQyxtQkFBaUIsRUFBRSxtQkFEQztBQUVwQkMsMkJBQXlCLEVBQUU7QUFGUCxDQUFuQjtBQUtBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBSTtBQUNsQyxTQUFPO0FBQUNDLFFBQUksRUFBRUg7QUFBUCxHQUFQO0FBQ0wsQ0FGTTtBQUlBLElBQU1JLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQ0MsU0FBRCxFQUFhO0FBQ2xEQyxTQUFPLENBQUNDLEdBQVI7QUFDQSxTQUFPO0FBQUNKLFFBQUksRUFBRUYseUJBQVA7QUFBa0NJLGFBQVMsRUFBVEE7QUFBbEMsR0FBUDtBQUNMLENBSE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jYTMwNzczYWQzZDliODhmZjk1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID17XHJcbiAgICAgIEdFVF9BTExfTUVSQ0hBTlRTOiBcIkdFVF9BTExfTUVSQ0hBTlRTXCIsXHJcbiAgICAgIEdFVF9BTExfTUVSQ0hBTlRTX1NVQ0NFU1M6IFwiR0VUX0FMTF9NRVJDSEFOVFNfU1VDQ0VTU1wiLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uR2V0QWxsTWVjaGFudHMgPSAoKT0+e1xyXG4gICAgICByZXR1cm4ge3R5cGU6IEdFVF9BTExfTUVSQ0hBTlRTfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzID0gKG1lcmNoYW50cyk9PntcclxuICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICByZXR1cm4ge3R5cGU6IEdFVF9BTExfTUVSQ0hBTlRTX1NVQ0NFU1MsIG1lcmNoYW50c31cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9