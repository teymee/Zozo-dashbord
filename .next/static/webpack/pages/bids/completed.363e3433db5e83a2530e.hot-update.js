webpackHotUpdate_N_E("pages/bids/completed",{

/***/ "./store/API/Api.js":
/*!**************************!*\
  !*** ./store/API/Api.js ***!
  \**************************/
/*! exports provided: API, dateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
var API = {
  ADMIN_BASE_URL: "http://smart-park.xyz/api/v1/admin",
  BASE_URL: "http://smart-park.xyz/api/v1",
  MERCHANT_ADMIN_BASE_URL: "http://smart-park.xyz/api/v1/merchant",
  TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImFjY291bnRfdHlwZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjQ3NTU3MjM3LCJleHAiOjE2NDc1NjQ0Mzd9.6FEDmVDucC6iiRM4LaYWco5suG8J_QLx9rgqnrVr89E"
};
var dateFormat = function dateFormat(timeFormat) {
  var event = new Date(timeFormat);
  var time = event.toString();
  var totalStringLength = time.length;
  var stringToSlice = time.indexOf("G");
  var finalDate = time.slice(0, stringToSlice);
  return finalDate;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQVBJL0FwaS5qcyJdLCJuYW1lcyI6WyJBUEkiLCJBRE1JTl9CQVNFX1VSTCIsIkJBU0VfVVJMIiwiTUVSQ0hBTlRfQURNSU5fQkFTRV9VUkwiLCJUT0tFTiIsImRhdGVGb3JtYXQiLCJ0aW1lRm9ybWF0IiwiZXZlbnQiLCJEYXRlIiwidGltZSIsInRvU3RyaW5nIiwidG90YWxTdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJzdHJpbmdUb1NsaWNlIiwiaW5kZXhPZiIsImZpbmFsRGF0ZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsR0FBRyxHQUFHO0FBQ2xCQyxnQkFBYyxFQUFFLG9DQURFO0FBRWxCQyxVQUFRLEVBQUUsOEJBRlE7QUFHbEJDLHlCQUF1QixFQUFFLHVDQUhQO0FBSWxCQyxPQUFLLEVBQ0o7QUFMaUIsQ0FBWjtBQVFBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFVBQUQsRUFBZ0I7QUFDekMsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosQ0FBU0YsVUFBVCxDQUFkO0FBQ0EsTUFBTUcsSUFBSSxHQUFFRixLQUFLLENBQUNHLFFBQU4sRUFBWjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHRixJQUFJLENBQUNHLE1BQS9CO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSixJQUFJLENBQUNLLE9BQUwsQ0FBYSxHQUFiLENBQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHTixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNILGFBQWQsQ0FBbEI7QUFHQSxTQUFPRSxTQUFQO0FBQ0EsQ0FWTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iaWRzL2NvbXBsZXRlZC4zNjNlMzQzM2RiNWU4M2EyNTMwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSSA9IHtcclxuXHRBRE1JTl9CQVNFX1VSTDogXCJodHRwOi8vc21hcnQtcGFyay54eXovYXBpL3YxL2FkbWluXCIsXHJcblx0QkFTRV9VUkw6IFwiaHR0cDovL3NtYXJ0LXBhcmsueHl6L2FwaS92MVwiLFxyXG5cdE1FUkNIQU5UX0FETUlOX0JBU0VfVVJMOiBcImh0dHA6Ly9zbWFydC1wYXJrLnh5ei9hcGkvdjEvbWVyY2hhbnRcIixcclxuXHRUT0tFTjpcclxuXHRcdFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TVN3aVpXMWhhV3dpT2lKcWIyaHVaRzlsUUdkdFlXbHNMbU52YlNJc0ltRmpZMjkxYm5SZmRIbHdaU0k2SW1OMWMzUnZiV1Z5SWl3aWFXRjBJam94TmpRM05UVTNNak0zTENKbGVIQWlPakUyTkRjMU5qUTBNemQ5LjZGRURtVkR1Y0M2aWlSTTRMYVlXY281c3VHOEpfUUx4OXJncW5yVnI4OUVcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRlRm9ybWF0ID0gKHRpbWVGb3JtYXQpID0+IHtcclxuXHRjb25zdCBldmVudCA9IG5ldyBEYXRlKHRpbWVGb3JtYXQpO1xyXG4gY29uc3QgdGltZT0gZXZlbnQudG9TdHJpbmcoKTtcclxuXHJcblx0Y29uc3QgdG90YWxTdHJpbmdMZW5ndGggPSB0aW1lLmxlbmd0aDtcclxuXHRjb25zdCBzdHJpbmdUb1NsaWNlID0gdGltZS5pbmRleE9mKFwiR1wiKTtcclxuXHRjb25zdCBmaW5hbERhdGUgPSB0aW1lLnNsaWNlKDAsIHN0cmluZ1RvU2xpY2UpO1xyXG5cdFxyXG5cclxuXHRyZXR1cm4gZmluYWxEYXRlO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9