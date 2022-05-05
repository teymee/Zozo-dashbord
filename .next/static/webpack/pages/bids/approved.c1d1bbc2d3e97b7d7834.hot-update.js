webpackHotUpdate_N_E("pages/bids/approved",{

/***/ "./components/shared/tables/table-columns/BidColumn.js":
/*!*************************************************************!*\
  !*** ./components/shared/tables/table-columns/BidColumn.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/elements/basic/DropdownAction */ "./components/elements/basic/DropdownAction.jsx");
/* harmony import */ var _store_API_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store/API/Api */ "./store/API/Api.js");
/* harmony import */ var _store_bid_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/store/bid/action */ "./store/bid/action.js");
/* harmony import */ var _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TableExtraStyles/extraStyles.module.css */ "./components/shared/tables/TableExtraStyles/extraStyles.module.css");
/* harmony import */ var _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\tables\\table-columns\\BidColumn.js",
    _s = $RefreshSig$();








function BidColumn(_ref) {
  _s();

  var bidEvent = _ref.bidEvent,
      num = _ref.num,
      type = _ref.type;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  console.log(bidEvent);

  var approveEvent = function approveEvent() {
    console.log("approve event");
    dispatch(Object(_store_bid_action__WEBPACK_IMPORTED_MODULE_5__["actionApproveEvent"])(bidEvent.id));
  };

  var cancelEvent = function cancelEvent() {
    console.log(" Cancel event");
    dispatch(Object(_store_bid_action__WEBPACK_IMPORTED_MODULE_5__["actionCancelEvent"])(bidEvent.id));
  };

  var button;

  if (bidEvent.ended) {
    button = null;
  } else if (bidEvent.ended) {}

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: num + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: bidEvent.product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: Object(_store_API_Api__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])(bidEvent.start_time)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: bidEvent.access_amount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: bidEvent.minimum_amount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: Object(_store_API_Api__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])(bidEvent.createdAt)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, this), button]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }, this);
}

_s(BidColumn, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = BidColumn;
/* harmony default export */ __webpack_exports__["default"] = (BidColumn);

var _c;

$RefreshReg$(_c, "BidColumn");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvQmlkQ29sdW1uLmpzIl0sIm5hbWVzIjpbIkJpZENvbHVtbiIsImJpZEV2ZW50IiwibnVtIiwidHlwZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXBwcm92ZUV2ZW50IiwiYWN0aW9uQXBwcm92ZUV2ZW50IiwiaWQiLCJjYW5jZWxFdmVudCIsImFjdGlvbkNhbmNlbEV2ZW50IiwiYnV0dG9uIiwiZW5kZWQiLCJwcm9kdWN0IiwibmFtZSIsImRhdGVGb3JtYXQiLCJzdGFydF90aW1lIiwiYWNjZXNzX2Ftb3VudCIsIm1pbmltdW1fYW1vdW50IiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULE9BQTRDO0FBQUE7O0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLEdBQWEsUUFBYkEsR0FBYTtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUMzQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFaOztBQUVBLE1BQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUJGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUgsWUFBUSxDQUFDSyw0RUFBa0IsQ0FBQ1IsUUFBUSxDQUFDUyxFQUFWLENBQW5CLENBQVI7QUFDQSxHQUhEOztBQUtBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekJMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUgsWUFBUSxDQUFDUSwyRUFBaUIsQ0FBQ1gsUUFBUSxDQUFDUyxFQUFWLENBQWxCLENBQVI7QUFDQSxHQUhEOztBQUtBLE1BQUlHLE1BQUo7O0FBQ0EsTUFBR1osUUFBUSxDQUFDYSxLQUFaLEVBQWtCO0FBQ2pCRCxVQUFNLEdBQUcsSUFBVDtBQUNBLEdBRkQsTUFFTSxJQUFHWixRQUFRLENBQUNhLEtBQVosRUFBa0IsQ0FFdkI7O0FBR0Qsc0JBQ0M7QUFBQSw0QkFDQztBQUFBLGdCQUFLWixHQUFHLEdBQUc7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLDZCQUNDO0FBQUEsa0JBQVNELFFBQVEsQ0FBQ2MsT0FBVCxDQUFpQkM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQUtDO0FBQUEsZ0JBQUtDLGlFQUFVLENBQUNoQixRQUFRLENBQUNpQixVQUFWO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELGVBTUM7QUFBQSxnQkFBS2pCLFFBQVEsQ0FBQ2tCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5ELGVBT0M7QUFBQSxnQkFBS2xCLFFBQVEsQ0FBQ21CO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBELGVBUUM7QUFBQSxnQkFBS0gsaUVBQVUsQ0FBQ2hCLFFBQVEsQ0FBQ29CLFNBQVY7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQsRUFpQkRSLE1BakJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBK0JBOztHQXJEUWIsUztVQUNTSyx1RDs7O0tBRFRMLFM7QUF1RE1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JpZHMvYXBwcm92ZWQuYzFkMWJiYzJkM2U5N2I3ZDc4MzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IERyb3Bkb3duQWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvRHJvcGRvd25BY3Rpb25cIjtcclxuaW1wb3J0IHsgZGF0ZUZvcm1hdCB9IGZyb20gXCJ+L3N0b3JlL0FQSS9BcGlcIjtcclxuaW1wb3J0IHsgYWN0aW9uQXBwcm92ZUV2ZW50LCBhY3Rpb25DYW5jZWxFdmVudCB9IGZyb20gXCJ+L3N0b3JlL2JpZC9hY3Rpb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vVGFibGVFeHRyYVN0eWxlcy9leHRyYVN0eWxlcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBCaWRDb2x1bW4oeyBiaWRFdmVudCwgbnVtLCB0eXBlIH0pIHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc29sZS5sb2coYmlkRXZlbnQpO1xyXG5cclxuXHRjb25zdCBhcHByb3ZlRXZlbnQgPSAoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcImFwcHJvdmUgZXZlbnRcIik7XHJcblx0XHRkaXNwYXRjaChhY3Rpb25BcHByb3ZlRXZlbnQoYmlkRXZlbnQuaWQpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjYW5jZWxFdmVudCA9ICgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwiIENhbmNlbCBldmVudFwiKTtcclxuXHRcdGRpc3BhdGNoKGFjdGlvbkNhbmNlbEV2ZW50KGJpZEV2ZW50LmlkKSk7XHJcblx0fTtcclxuXHJcblx0bGV0IGJ1dHRvblxyXG5cdGlmKGJpZEV2ZW50LmVuZGVkKXtcclxuXHRcdGJ1dHRvbiA9IG51bGxcclxuXHR9ZWxzZSBpZihiaWRFdmVudC5lbmRlZCl7XHJcblxyXG5cdH1cclxuXHRcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDx0cj5cclxuXHRcdFx0PHRkPntudW0gKyAxfTwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8c3Ryb25nPntiaWRFdmVudC5wcm9kdWN0Lm5hbWV9PC9zdHJvbmc+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD57ZGF0ZUZvcm1hdChiaWRFdmVudC5zdGFydF90aW1lKX08L3RkPlxyXG5cdFx0XHQ8dGQ+e2JpZEV2ZW50LmFjY2Vzc19hbW91bnR9PC90ZD5cclxuXHRcdFx0PHRkPntiaWRFdmVudC5taW5pbXVtX2Ftb3VudH08L3RkPlxyXG5cdFx0XHQ8dGQ+e2RhdGVGb3JtYXQoYmlkRXZlbnQuY3JlYXRlZEF0KX08L3RkPlxyXG5cdFx0XHR7LyogPHRkPntiYWRnZVZpZXd9PC90ZD4gKi99XHJcblx0XHRcclxuXHRcdFx0ey8qIDx0ZD5cclxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2FwcHJvdmVFdmVudH0gY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlRXZlbnRCdXR0b259PlxyXG5cdFx0XHRcdFx0QXBwcm92ZVxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L3RkPiAqL31cclxuXHJcbntidXR0b259XHJcblx0XHRcdHsvKiB7IWJpZEV2ZW50LmVuZGVkICYmIChcclxuXHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2NhbmNlbEV2ZW50fSBjbGFzc05hbWU9e3N0eWxlcy5kZWNsaW5lRXZlbnRCdXR0b259PlxyXG5cdFx0XHRcdFx0XHREZWxjaW5lXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PERyb3Bkb3duQWN0aW9uIHR5cGU9XCJiaWRFdmVudFwiIGlkPXtiaWRFdmVudC5pZH0ga2V5PXtudW0gKyAxfSAvPlxyXG5cdFx0XHQ8L3RkPiAqL31cclxuXHRcdDwvdHI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlkQ29sdW1uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9