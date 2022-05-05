webpackHotUpdate_N_E("pages/bids/approved",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQVBJL0FwaS5qcyJdLCJuYW1lcyI6WyJBUEkiLCJBRE1JTl9CQVNFX1VSTCIsIkJBU0VfVVJMIiwiTUVSQ0hBTlRfQURNSU5fQkFTRV9VUkwiLCJUT0tFTiIsImRhdGVGb3JtYXQiLCJ0aW1lRm9ybWF0IiwiZXZlbnQiLCJEYXRlIiwidGltZSIsInRvU3RyaW5nIiwidG90YWxTdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJzdHJpbmdUb1NsaWNlIiwiaW5kZXhPZiIsImZpbmFsRGF0ZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsR0FBRyxHQUFHO0FBQ2xCQyxnQkFBYyxFQUFFLG9DQURFO0FBRWxCQyxVQUFRLEVBQUUsOEJBRlE7QUFHbEJDLHlCQUF1QixFQUFFLHVDQUhQO0FBSWxCQyxPQUFLLEVBQ0o7QUFMaUIsQ0FBWjtBQVFBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFVBQUQsRUFBZ0I7QUFDekMsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosQ0FBU0YsVUFBVCxDQUFkO0FBQ0EsTUFBTUcsSUFBSSxHQUFFRixLQUFLLENBQUNHLFFBQU4sRUFBWjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHRixJQUFJLENBQUNHLE1BQS9CO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSixJQUFJLENBQUNLLE9BQUwsQ0FBYSxHQUFiLENBQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHTixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNILGFBQWQsQ0FBbEI7QUFHQSxTQUFPRSxTQUFQO0FBQ0EsQ0FWTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iaWRzL2FwcHJvdmVkLjM2M2UzNDMzZGI1ZTgzYTI1MzBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJID0ge1xyXG5cdEFETUlOX0JBU0VfVVJMOiBcImh0dHA6Ly9zbWFydC1wYXJrLnh5ei9hcGkvdjEvYWRtaW5cIixcclxuXHRCQVNFX1VSTDogXCJodHRwOi8vc21hcnQtcGFyay54eXovYXBpL3YxXCIsXHJcblx0TUVSQ0hBTlRfQURNSU5fQkFTRV9VUkw6IFwiaHR0cDovL3NtYXJ0LXBhcmsueHl6L2FwaS92MS9tZXJjaGFudFwiLFxyXG5cdFRPS0VOOlxyXG5cdFx0XCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNU3dpWlcxaGFXd2lPaUpxYjJodVpHOWxRR2R0WVdsc0xtTnZiU0lzSW1GalkyOTFiblJmZEhsd1pTSTZJbU4xYzNSdmJXVnlJaXdpYVdGMElqb3hOalEzTlRVM01qTTNMQ0psZUhBaU9qRTJORGMxTmpRME16ZDkuNkZFRG1WRHVjQzZpaVJNNExhWVdjbzVzdUc4Sl9RTHg5cmdxbnJWcjg5RVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGVGb3JtYXQgPSAodGltZUZvcm1hdCkgPT4ge1xyXG5cdGNvbnN0IGV2ZW50ID0gbmV3IERhdGUodGltZUZvcm1hdCk7XHJcbiBjb25zdCB0aW1lPSBldmVudC50b1N0cmluZygpO1xyXG5cclxuXHRjb25zdCB0b3RhbFN0cmluZ0xlbmd0aCA9IHRpbWUubGVuZ3RoO1xyXG5cdGNvbnN0IHN0cmluZ1RvU2xpY2UgPSB0aW1lLmluZGV4T2YoXCJHXCIpO1xyXG5cdGNvbnN0IGZpbmFsRGF0ZSA9IHRpbWUuc2xpY2UoMCwgc3RyaW5nVG9TbGljZSk7XHJcblx0XHJcblxyXG5cdHJldHVybiBmaW5hbERhdGU7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=