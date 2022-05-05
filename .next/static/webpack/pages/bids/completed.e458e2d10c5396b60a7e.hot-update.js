webpackHotUpdate_N_E("pages/bids/completed",{

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
  } else if (!bidEvent.approved) {
    button = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: approveEvent,
          className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.createEventButton,
          children: "Approve"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: cancelEvent,
          className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.declineEventButton,
          children: "Delcine"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this)]
    }, void 0, true);
  } else if (!bidEvent.approved) {}

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: num + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: bidEvent.product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: Object(_store_API_Api__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])(bidEvent.start_time)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: bidEvent.access_amount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: bidEvent.minimum_amount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: Object(_store_API_Api__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])(bidEvent.createdAt)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, this), button, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "bidEvent",
        id: bidEvent.id
      }, num + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvQmlkQ29sdW1uLmpzIl0sIm5hbWVzIjpbIkJpZENvbHVtbiIsImJpZEV2ZW50IiwibnVtIiwidHlwZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXBwcm92ZUV2ZW50IiwiYWN0aW9uQXBwcm92ZUV2ZW50IiwiaWQiLCJjYW5jZWxFdmVudCIsImFjdGlvbkNhbmNlbEV2ZW50IiwiYnV0dG9uIiwiZW5kZWQiLCJhcHByb3ZlZCIsInN0eWxlcyIsImNyZWF0ZUV2ZW50QnV0dG9uIiwiZGVjbGluZUV2ZW50QnV0dG9uIiwicHJvZHVjdCIsIm5hbWUiLCJkYXRlRm9ybWF0Iiwic3RhcnRfdGltZSIsImFjY2Vzc19hbW91bnQiLCJtaW5pbXVtX2Ftb3VudCIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsT0FBNEM7QUFBQTs7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQUEsTUFBYkMsR0FBYSxRQUFiQSxHQUFhO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzNDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlOLFFBQVo7O0FBRUEsTUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUMxQkYsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBSCxZQUFRLENBQUNLLDRFQUFrQixDQUFDUixRQUFRLENBQUNTLEVBQVYsQ0FBbkIsQ0FBUjtBQUNBLEdBSEQ7O0FBS0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QkwsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBSCxZQUFRLENBQUNRLDJFQUFpQixDQUFDWCxRQUFRLENBQUNTLEVBQVYsQ0FBbEIsQ0FBUjtBQUNBLEdBSEQ7O0FBS0EsTUFBSUcsTUFBSjs7QUFDQSxNQUFJWixRQUFRLENBQUNhLEtBQWIsRUFBb0I7QUFDbkJELFVBQU0sR0FBRyxJQUFUO0FBQ0EsR0FGRCxNQUVPLElBQUksQ0FBQ1osUUFBUSxDQUFDYyxRQUFkLEVBQXdCO0FBQzlCRixVQUFNLGdCQUNMO0FBQUEsOEJBQ0M7QUFBQSwrQkFDQztBQUFRLGlCQUFPLEVBQUVMLFlBQWpCO0FBQStCLG1CQUFTLEVBQUVRLCtFQUFNLENBQUNDLGlCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQU1DO0FBQUEsK0JBQ0M7QUFBUSxpQkFBTyxFQUFFTixXQUFqQjtBQUE4QixtQkFBUyxFQUFFSywrRUFBTSxDQUFDRSxrQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkQ7QUFBQSxvQkFERDtBQWNBLEdBZk0sTUFlQSxJQUFLLENBQUNqQixRQUFRLENBQUNjLFFBQWYsRUFBd0IsQ0FFOUI7O0FBRUQsc0JBQ0M7QUFBQSw0QkFDQztBQUFBLGdCQUFLYixHQUFHLEdBQUc7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLDZCQUNDO0FBQUEsa0JBQVNELFFBQVEsQ0FBQ2tCLE9BQVQsQ0FBaUJDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFLQztBQUFBLGdCQUFLQyxpRUFBVSxDQUFDcEIsUUFBUSxDQUFDcUIsVUFBVjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU1DO0FBQUEsZ0JBQUtyQixRQUFRLENBQUNzQjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORCxlQU9DO0FBQUEsZ0JBQUt0QixRQUFRLENBQUN1QjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQVFDO0FBQUEsZ0JBQUtILGlFQUFVLENBQUNwQixRQUFRLENBQUN3QixTQUFWO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELEVBaUJFWixNQWpCRixlQWtCQztBQUFBLDZCQUNDLHFFQUFDLGlGQUFEO0FBQWdCLFlBQUksRUFBQyxVQUFyQjtBQUFnQyxVQUFFLEVBQUVaLFFBQVEsQ0FBQ1M7QUFBN0MsU0FBc0RSLEdBQUcsR0FBRyxDQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWtDQTs7R0F0RVFGLFM7VUFDU0ssdUQ7OztLQURUTCxTO0FBd0VNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iaWRzL2NvbXBsZXRlZC5lNDU4ZTJkMTBjNTM5NmI2MGE3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRHJvcGRvd25BY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9lbGVtZW50cy9iYXNpYy9Ecm9wZG93bkFjdGlvblwiO1xyXG5pbXBvcnQgeyBkYXRlRm9ybWF0IH0gZnJvbSBcIn4vc3RvcmUvQVBJL0FwaVwiO1xyXG5pbXBvcnQgeyBhY3Rpb25BcHByb3ZlRXZlbnQsIGFjdGlvbkNhbmNlbEV2ZW50IH0gZnJvbSBcIn4vc3RvcmUvYmlkL2FjdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9UYWJsZUV4dHJhU3R5bGVzL2V4dHJhU3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEJpZENvbHVtbih7IGJpZEV2ZW50LCBudW0sIHR5cGUgfSkge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHRjb25zb2xlLmxvZyhiaWRFdmVudCk7XHJcblxyXG5cdGNvbnN0IGFwcHJvdmVFdmVudCA9ICgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwiYXBwcm92ZSBldmVudFwiKTtcclxuXHRcdGRpc3BhdGNoKGFjdGlvbkFwcHJvdmVFdmVudChiaWRFdmVudC5pZCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNhbmNlbEV2ZW50ID0gKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coXCIgQ2FuY2VsIGV2ZW50XCIpO1xyXG5cdFx0ZGlzcGF0Y2goYWN0aW9uQ2FuY2VsRXZlbnQoYmlkRXZlbnQuaWQpKTtcclxuXHR9O1xyXG5cclxuXHRsZXQgYnV0dG9uO1xyXG5cdGlmIChiaWRFdmVudC5lbmRlZCkge1xyXG5cdFx0YnV0dG9uID0gbnVsbDtcclxuXHR9IGVsc2UgaWYgKCFiaWRFdmVudC5hcHByb3ZlZCkge1xyXG5cdFx0YnV0dG9uID0gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17YXBwcm92ZUV2ZW50fSBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVFdmVudEJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdEFwcHJvdmVcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtjYW5jZWxFdmVudH0gY2xhc3NOYW1lPXtzdHlsZXMuZGVjbGluZUV2ZW50QnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0RGVsY2luZVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC90ZD5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH0gZWxzZSBpZiAgKCFiaWRFdmVudC5hcHByb3ZlZCl7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8dHI+XHJcblx0XHRcdDx0ZD57bnVtICsgMX08L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PHN0cm9uZz57YmlkRXZlbnQucHJvZHVjdC5uYW1lfTwvc3Ryb25nPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+e2RhdGVGb3JtYXQoYmlkRXZlbnQuc3RhcnRfdGltZSl9PC90ZD5cclxuXHRcdFx0PHRkPntiaWRFdmVudC5hY2Nlc3NfYW1vdW50fTwvdGQ+XHJcblx0XHRcdDx0ZD57YmlkRXZlbnQubWluaW11bV9hbW91bnR9PC90ZD5cclxuXHRcdFx0PHRkPntkYXRlRm9ybWF0KGJpZEV2ZW50LmNyZWF0ZWRBdCl9PC90ZD5cclxuXHRcdFx0ey8qIDx0ZD57YmFkZ2VWaWV3fTwvdGQ+ICovfVxyXG5cclxuXHRcdFx0ey8qIDx0ZD5cclxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2FwcHJvdmVFdmVudH0gY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlRXZlbnRCdXR0b259PlxyXG5cdFx0XHRcdFx0QXBwcm92ZVxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L3RkPiAqL31cclxuXHJcblx0XHRcdHtidXR0b259XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8RHJvcGRvd25BY3Rpb24gdHlwZT1cImJpZEV2ZW50XCIgaWQ9e2JpZEV2ZW50LmlkfSBrZXk9e251bSArIDF9IC8+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdHsvKiB7IWJpZEV2ZW50LmVuZGVkICYmIChcclxuXHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2NhbmNlbEV2ZW50fSBjbGFzc05hbWU9e3N0eWxlcy5kZWNsaW5lRXZlbnRCdXR0b259PlxyXG5cdFx0XHRcdFx0XHREZWxjaW5lXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PERyb3Bkb3duQWN0aW9uIHR5cGU9XCJiaWRFdmVudFwiIGlkPXtiaWRFdmVudC5pZH0ga2V5PXtudW0gKyAxfSAvPlxyXG5cdFx0XHQ8L3RkPiAqL31cclxuXHRcdDwvdHI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlkQ29sdW1uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9