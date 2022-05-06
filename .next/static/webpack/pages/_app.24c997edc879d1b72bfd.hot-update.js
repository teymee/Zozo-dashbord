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
  ADMIN_BASE_URL: "http://smart-park.xyz/api/v1/admin",
  BASE_URL: "http://smart-park.xyz/api/v1",
  MERCHANT_ADMIN_BASE_URL: "http://smart-park.xyz/api/v1/merchant",
  TOKEN: token
};
var dateFormat = function dateFormat(timeFormat) {
  var event = new Date(timeFormat);
  var time = event.toString();
  var totalStringLength = time.length;
  var stringToSlice = time.indexOf("G");
  var finalDate = time.slice(0, stringToSlice);
  console.log(totalStringLength);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQVBJL0FwaS5qcyJdLCJuYW1lcyI6WyJJU1NFUlZFUiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkFQSSIsIkFETUlOX0JBU0VfVVJMIiwiQkFTRV9VUkwiLCJNRVJDSEFOVF9BRE1JTl9CQVNFX1VSTCIsIlRPS0VOIiwiZGF0ZUZvcm1hdCIsInRpbWVGb3JtYXQiLCJldmVudCIsIkRhdGUiLCJ0aW1lIiwidG9TdHJpbmciLCJ0b3RhbFN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInN0cmluZ1RvU2xpY2UiLCJpbmRleE9mIiwiZmluYWxEYXRlIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTUEsUUFBUSxRQUFkO0FBQ0EsSUFBSUMsS0FBSjs7QUFDQSxJQUFJLENBQUNELFFBQUwsRUFBZTtBQUNkO0FBQ0FDLE9BQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLElBQWdDRCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBaEMsR0FBZ0UsRUFBeEU7QUFDQTs7QUFFTSxJQUFNQyxHQUFHLEdBQUc7QUFDbEJDLGdCQUFjLEVBQUUsb0NBREU7QUFFbEJDLFVBQVEsRUFBRSw4QkFGUTtBQUdsQkMseUJBQXVCLEVBQUUsdUNBSFA7QUFJbEJDLE9BQUssRUFBRVA7QUFKVyxDQUFaO0FBT0EsSUFBTVEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsVUFBRCxFQUFnQjtBQUN6QyxNQUFNQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTRixVQUFULENBQWQ7QUFDQSxNQUFNRyxJQUFJLEdBQUdGLEtBQUssQ0FBQ0csUUFBTixFQUFiO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUdGLElBQUksQ0FBQ0csTUFBL0I7QUFDQSxNQUFNQyxhQUFhLEdBQUdKLElBQUksQ0FBQ0ssT0FBTCxDQUFhLEdBQWIsQ0FBdEI7QUFDQSxNQUFNQyxTQUFTLEdBQUdOLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsRUFBY0gsYUFBZCxDQUFsQjtBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsaUJBQVo7QUFDQSxTQUFPSSxTQUFQO0FBQ0EsQ0FUTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjI0Yzk5N2VkYzg3OWQxYjcyYmZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJU1NFUlZFUiA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcbmxldCB0b2tlbjtcclxuaWYgKCFJU1NFUlZFUikge1xyXG5cdC8vIEFjY2VzcyBsb2NhbFN0b3JhZ2VcclxuXHR0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpIDogXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFQSSA9IHtcclxuXHRBRE1JTl9CQVNFX1VSTDogXCJodHRwOi8vc21hcnQtcGFyay54eXovYXBpL3YxL2FkbWluXCIsXHJcblx0QkFTRV9VUkw6IFwiaHR0cDovL3NtYXJ0LXBhcmsueHl6L2FwaS92MVwiLFxyXG5cdE1FUkNIQU5UX0FETUlOX0JBU0VfVVJMOiBcImh0dHA6Ly9zbWFydC1wYXJrLnh5ei9hcGkvdjEvbWVyY2hhbnRcIixcclxuXHRUT0tFTjogdG9rZW4sXHJcblx0fTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRlRm9ybWF0ID0gKHRpbWVGb3JtYXQpID0+IHtcclxuXHRjb25zdCBldmVudCA9IG5ldyBEYXRlKHRpbWVGb3JtYXQpO1xyXG5cdGNvbnN0IHRpbWUgPSBldmVudC50b1N0cmluZygpO1xyXG5cclxuXHRjb25zdCB0b3RhbFN0cmluZ0xlbmd0aCA9IHRpbWUubGVuZ3RoO1xyXG5cdGNvbnN0IHN0cmluZ1RvU2xpY2UgPSB0aW1lLmluZGV4T2YoXCJHXCIpO1xyXG5cdGNvbnN0IGZpbmFsRGF0ZSA9IHRpbWUuc2xpY2UoMCwgc3RyaW5nVG9TbGljZSk7XHJcblx0Y29uc29sZS5sb2codG90YWxTdHJpbmdMZW5ndGgpXHJcblx0cmV0dXJuIGZpbmFsRGF0ZTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==