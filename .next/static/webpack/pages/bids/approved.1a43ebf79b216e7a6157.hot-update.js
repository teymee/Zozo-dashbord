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
    console.log('approve event');
    dispatch(Object(_store_bid_action__WEBPACK_IMPORTED_MODULE_5__["actionApproveEvent"])(bidEvent.id));
  };

  var cancelEvent = function cancelEvent() {
    console.log(' Cancel event');
    dispatch(Object(_store_bid_action__WEBPACK_IMPORTED_MODULE_5__["actionCancelEvent"])(bidEvent.id));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: num + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: bidEvent.product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: Object(_store_API_Api__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])(bidEvent.start_time)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: bidEvent.access_amount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: bidEvent.minimum_amount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: Object(_store_API_Api__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])(bidEvent.createdAt)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: approveEvent,
        className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.createEventButton,
        children: "Approve"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: cancelEvent,
        className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.declineEventButton,
        children: "Delcine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "bidEvent",
        id: bidEvent.id
      }, num + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvQmlkQ29sdW1uLmpzIl0sIm5hbWVzIjpbIkJpZENvbHVtbiIsImJpZEV2ZW50IiwibnVtIiwidHlwZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXBwcm92ZUV2ZW50IiwiYWN0aW9uQXBwcm92ZUV2ZW50IiwiaWQiLCJjYW5jZWxFdmVudCIsImFjdGlvbkNhbmNlbEV2ZW50IiwicHJvZHVjdCIsIm5hbWUiLCJkYXRlRm9ybWF0Iiwic3RhcnRfdGltZSIsImFjY2Vzc19hbW91bnQiLCJtaW5pbXVtX2Ftb3VudCIsImNyZWF0ZWRBdCIsInN0eWxlcyIsImNyZWF0ZUV2ZW50QnV0dG9uIiwiZGVjbGluZUV2ZW50QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULE9BQTBDO0FBQUE7O0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLEdBQVksUUFBWkEsR0FBWTtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUN6QyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFaOztBQUVLLE1BQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUk7QUFDbkJGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUgsWUFBUSxDQUFDSyw0RUFBa0IsQ0FBQ1IsUUFBUSxDQUFDUyxFQUFWLENBQW5CLENBQVI7QUFDTCxHQUhEOztBQUtMLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUk7QUFDYkwsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBSCxZQUFRLENBQUNRLDJFQUFpQixDQUFDWCxRQUFRLENBQUNTLEVBQVYsQ0FBbEIsQ0FBUjtBQUNMLEdBSE47O0FBT0Esc0JBQ0M7QUFBQSw0QkFDQztBQUFBLGdCQUFLUixHQUFHLEdBQUc7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLDZCQUNDO0FBQUEsa0JBQVNELFFBQVEsQ0FBQ1ksT0FBVCxDQUFpQkM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQUtDO0FBQUEsZ0JBQUtDLGlFQUFVLENBQUNkLFFBQVEsQ0FBQ2UsVUFBVjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU1DO0FBQUEsZ0JBQUtmLFFBQVEsQ0FBQ2dCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5ELGVBT0M7QUFBQSxnQkFBS2hCLFFBQVEsQ0FBQ2lCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBELGVBUUM7QUFBQSxnQkFBS0gsaUVBQVUsQ0FBQ2QsUUFBUSxDQUFDa0IsU0FBVjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRCxlQVdDO0FBQUEsNkJBQ0M7QUFBUSxlQUFPLEVBQUVYLFlBQWpCO0FBQStCLGlCQUFTLEVBQUVZLCtFQUFNLENBQUNDLGlCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRCxlQWNDO0FBQUEsNkJBQ0M7QUFBUSxlQUFPLEVBQUVWLFdBQWpCO0FBQThCLGlCQUFTLEVBQUVTLCtFQUFNLENBQUNFLGtCQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRCxlQWlCQztBQUFBLDZCQUNDLHFFQUFDLGlGQUFEO0FBQWdCLFlBQUksRUFBQyxVQUFyQjtBQUFnQyxVQUFFLEVBQUVyQixRQUFRLENBQUNTO0FBQTdDLFNBQXNEUixHQUFHLEdBQUcsQ0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF1QkE7O0dBdkNRRixTO1VBQ1NLLHVEOzs7S0FEVEwsUztBQXlDTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmlkcy9hcHByb3ZlZC4xYTQzZWJmNzliMjE2ZTdhNjE1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRHJvcGRvd25BY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9lbGVtZW50cy9iYXNpYy9Ecm9wZG93bkFjdGlvblwiO1xyXG5pbXBvcnQgeyBkYXRlRm9ybWF0IH0gZnJvbSBcIn4vc3RvcmUvQVBJL0FwaVwiO1xyXG5pbXBvcnQgeyBhY3Rpb25BcHByb3ZlRXZlbnQsIGFjdGlvbkNhbmNlbEV2ZW50IH0gZnJvbSBcIn4vc3RvcmUvYmlkL2FjdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9UYWJsZUV4dHJhU3R5bGVzL2V4dHJhU3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEJpZENvbHVtbih7YmlkRXZlbnQsIG51bSwgdHlwZX0pIHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc29sZS5sb2coYmlkRXZlbnQpXHJcblxyXG4gICAgICBjb25zdCBhcHByb3ZlRXZlbnQgPSAoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXBwcm92ZSBldmVudCcpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbkFwcHJvdmVFdmVudChiaWRFdmVudC5pZCkpXHJcbiAgICAgIH1cclxuXHJcblx0Y29uc3QgY2FuY2VsRXZlbnQgPSAoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnIENhbmNlbCBldmVudCcpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbkNhbmNlbEV2ZW50KGJpZEV2ZW50LmlkKSlcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8dHI+XHJcblx0XHRcdDx0ZD57bnVtICsgMX08L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PHN0cm9uZz57YmlkRXZlbnQucHJvZHVjdC5uYW1lfTwvc3Ryb25nPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+e2RhdGVGb3JtYXQoYmlkRXZlbnQuc3RhcnRfdGltZSl9PC90ZD5cclxuXHRcdFx0PHRkPntiaWRFdmVudC5hY2Nlc3NfYW1vdW50fTwvdGQ+XHJcblx0XHRcdDx0ZD57YmlkRXZlbnQubWluaW11bV9hbW91bnR9PC90ZD5cclxuXHRcdFx0PHRkPntkYXRlRm9ybWF0KGJpZEV2ZW50LmNyZWF0ZWRBdCl9PC90ZD5cclxuXHRcdFx0ey8qIDx0ZD57YmFkZ2VWaWV3fTwvdGQ+ICovfVxyXG5cdFx0XHRcclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17YXBwcm92ZUV2ZW50fSBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVFdmVudEJ1dHRvbn0+QXBwcm92ZTwvYnV0dG9uPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtjYW5jZWxFdmVudH0gY2xhc3NOYW1lPXtzdHlsZXMuZGVjbGluZUV2ZW50QnV0dG9ufT5EZWxjaW5lPC9idXR0b24+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8RHJvcGRvd25BY3Rpb24gdHlwZT1cImJpZEV2ZW50XCIgaWQ9e2JpZEV2ZW50LmlkfSBrZXk9e251bSArIDF9IC8+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHQ8L3RyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpZENvbHVtbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==