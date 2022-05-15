webpackHotUpdate_N_E("pages/_app",{

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
var ISSERVER = false;
var token;

if (!ISSERVER) {
  // Access localStorage
  token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
}

var API = {
  ADMIN_BASE_URL: "https://smart-park.xyz/api/v1/admin",
  BASE_URL: "https://smart-park.xyz/api/v1",
  MERCHANT_ADMIN_BASE_URL: "https://smart-park.xyz/api/v1/merchant",
  TOKEN: token
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQVBJL0FwaS5qcyJdLCJuYW1lcyI6WyJJU1NFUlZFUiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkFQSSIsIkFETUlOX0JBU0VfVVJMIiwiQkFTRV9VUkwiLCJNRVJDSEFOVF9BRE1JTl9CQVNFX1VSTCIsIlRPS0VOIiwiZGF0ZUZvcm1hdCIsInRpbWVGb3JtYXQiLCJldmVudCIsIkRhdGUiLCJ0aW1lIiwidG9TdHJpbmciLCJ0b3RhbFN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInN0cmluZ1RvU2xpY2UiLCJpbmRleE9mIiwiZmluYWxEYXRlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFNQSxRQUFRLFFBQWQ7QUFDQSxJQUFJQyxLQUFKOztBQUNBLElBQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2Q7QUFDQUMsT0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsSUFBZ0NELFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFoQyxHQUFnRSxFQUF4RTtBQUNBOztBQUVNLElBQU1DLEdBQUcsR0FBRztBQUNsQkMsZ0JBQWMsRUFBRSxxQ0FERTtBQUVsQkMsVUFBUSxFQUFFLCtCQUZRO0FBR2xCQyx5QkFBdUIsRUFBRSx3Q0FIUDtBQUlsQkMsT0FBSyxFQUFFUDtBQUpXLENBQVo7QUFPQSxJQUFNUSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxVQUFELEVBQWdCO0FBQ3pDLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFKLENBQVNGLFVBQVQsQ0FBZDtBQUNBLE1BQU1HLElBQUksR0FBR0YsS0FBSyxDQUFDRyxRQUFOLEVBQWI7QUFFQSxNQUFNQyxpQkFBaUIsR0FBR0YsSUFBSSxDQUFDRyxNQUEvQjtBQUNBLE1BQU1DLGFBQWEsR0FBR0osSUFBSSxDQUFDSyxPQUFMLENBQWEsR0FBYixDQUF0QjtBQUNBLE1BQU1DLFNBQVMsR0FBR04sSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjSCxhQUFkLENBQWxCO0FBRUEsU0FBT0UsU0FBUDtBQUNBLENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kMGQ0MGJkNGNkMmE3MDFhZjhjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSVNTRVJWRVIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG5sZXQgdG9rZW47XHJcbmlmICghSVNTRVJWRVIpIHtcclxuXHQvLyBBY2Nlc3MgbG9jYWxTdG9yYWdlXHJcblx0dG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSA6IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBUEkgPSB7XHJcblx0QURNSU5fQkFTRV9VUkw6IFwiaHR0cHM6Ly9zbWFydC1wYXJrLnh5ei9hcGkvdjEvYWRtaW5cIixcclxuXHRCQVNFX1VSTDogXCJodHRwczovL3NtYXJ0LXBhcmsueHl6L2FwaS92MVwiLFxyXG5cdE1FUkNIQU5UX0FETUlOX0JBU0VfVVJMOiBcImh0dHBzOi8vc21hcnQtcGFyay54eXovYXBpL3YxL21lcmNoYW50XCIsXHJcblx0VE9LRU46IHRva2VuLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGVGb3JtYXQgPSAodGltZUZvcm1hdCkgPT4ge1xyXG5cdGNvbnN0IGV2ZW50ID0gbmV3IERhdGUodGltZUZvcm1hdCk7XHJcblx0Y29uc3QgdGltZSA9IGV2ZW50LnRvU3RyaW5nKCk7XHJcblxyXG5cdGNvbnN0IHRvdGFsU3RyaW5nTGVuZ3RoID0gdGltZS5sZW5ndGg7XHJcblx0Y29uc3Qgc3RyaW5nVG9TbGljZSA9IHRpbWUuaW5kZXhPZihcIkdcIik7XHJcblx0Y29uc3QgZmluYWxEYXRlID0gdGltZS5zbGljZSgwLCBzdHJpbmdUb1NsaWNlKTtcclxuXHJcblx0cmV0dXJuIGZpbmFsRGF0ZTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==