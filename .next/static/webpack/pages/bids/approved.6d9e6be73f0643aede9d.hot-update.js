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
  } else if (bidEvent.approved || bidEvent.started) {
    console.log("approved");
    button = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: cancelEvent,
        className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.declineEventButton,
        children: "Delcine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: num + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: bidEvent.product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: Object(_store_API_Api__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])(bidEvent.start_time)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: bidEvent.access_amount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: bidEvent.minimum_amount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: Object(_store_API_Api__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])(bidEvent.createdAt)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, this), button, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "bidEvent",
        id: bidEvent.id
      }, num + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvQmlkQ29sdW1uLmpzIl0sIm5hbWVzIjpbIkJpZENvbHVtbiIsImJpZEV2ZW50IiwibnVtIiwidHlwZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXBwcm92ZUV2ZW50IiwiYWN0aW9uQXBwcm92ZUV2ZW50IiwiaWQiLCJjYW5jZWxFdmVudCIsImFjdGlvbkNhbmNlbEV2ZW50IiwiYnV0dG9uIiwiZW5kZWQiLCJhcHByb3ZlZCIsInN0eWxlcyIsImNyZWF0ZUV2ZW50QnV0dG9uIiwiZGVjbGluZUV2ZW50QnV0dG9uIiwic3RhcnRlZCIsInByb2R1Y3QiLCJuYW1lIiwiZGF0ZUZvcm1hdCIsInN0YXJ0X3RpbWUiLCJhY2Nlc3NfYW1vdW50IiwibWluaW11bV9hbW91bnQiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULE9BQTRDO0FBQUE7O0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLEdBQWEsUUFBYkEsR0FBYTtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUMzQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFaOztBQUVBLE1BQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUJGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUgsWUFBUSxDQUFDSyw0RUFBa0IsQ0FBQ1IsUUFBUSxDQUFDUyxFQUFWLENBQW5CLENBQVI7QUFDQSxHQUhEOztBQUtBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekJMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUgsWUFBUSxDQUFDUSwyRUFBaUIsQ0FBQ1gsUUFBUSxDQUFDUyxFQUFWLENBQWxCLENBQVI7QUFDQSxHQUhEOztBQUtBLE1BQUlHLE1BQUo7O0FBQ0EsTUFBSVosUUFBUSxDQUFDYSxLQUFiLEVBQW9CO0FBQ25CRCxVQUFNLEdBQUcsSUFBVDtBQUNBLEdBRkQsTUFFTyxJQUFJLENBQUNaLFFBQVEsQ0FBQ2MsUUFBZCxFQUF3QjtBQUM5QkYsVUFBTSxnQkFDTDtBQUFBLDhCQUNDO0FBQUEsK0JBQ0M7QUFBUSxpQkFBTyxFQUFFTCxZQUFqQjtBQUErQixtQkFBUyxFQUFFUSwrRUFBTSxDQUFDQyxpQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFNQztBQUFBLCtCQUNDO0FBQVEsaUJBQU8sRUFBRU4sV0FBakI7QUFBOEIsbUJBQVMsRUFBRUssK0VBQU0sQ0FBQ0Usa0JBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5EO0FBQUEsb0JBREQ7QUFjQSxHQWZNLE1BZUEsSUFBSWpCLFFBQVEsQ0FBQ2MsUUFBVCxJQUFxQmQsUUFBUSxDQUFDa0IsT0FBbEMsRUFBMkM7QUFDakRiLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQU0sVUFBTSxnQkFDTDtBQUFBLDZCQUNDO0FBQVEsZUFBTyxFQUFFRixXQUFqQjtBQUE4QixpQkFBUyxFQUFFSywrRUFBTSxDQUFDRSxrQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFPQTs7QUFFRCxzQkFDQztBQUFBLDRCQUNDO0FBQUEsZ0JBQUtoQixHQUFHLEdBQUc7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLDZCQUNDO0FBQUEsa0JBQVNELFFBQVEsQ0FBQ21CLE9BQVQsQ0FBaUJDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFLQztBQUFBLGdCQUFLQyxpRUFBVSxDQUFDckIsUUFBUSxDQUFDc0IsVUFBVjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU1DO0FBQUEsZ0JBQUt0QixRQUFRLENBQUN1QjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORCxlQU9DO0FBQUEsZ0JBQUt2QixRQUFRLENBQUN3QjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQVFDO0FBQUEsZ0JBQUtILGlFQUFVLENBQUNyQixRQUFRLENBQUN5QixTQUFWO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELEVBaUJFYixNQWpCRixlQWtCQztBQUFBLDZCQUNDLHFFQUFDLGlGQUFEO0FBQWdCLFlBQUksRUFBQyxVQUFyQjtBQUFnQyxVQUFFLEVBQUVaLFFBQVEsQ0FBQ1M7QUFBN0MsU0FBc0RSLEdBQUcsR0FBRyxDQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWtDQTs7R0E3RVFGLFM7VUFDU0ssdUQ7OztLQURUTCxTO0FBK0VNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iaWRzL2FwcHJvdmVkLjZkOWU2YmU3M2YwNjQzYWVkZTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBEcm9wZG93bkFjdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2VsZW1lbnRzL2Jhc2ljL0Ryb3Bkb3duQWN0aW9uXCI7XHJcbmltcG9ydCB7IGRhdGVGb3JtYXQgfSBmcm9tIFwifi9zdG9yZS9BUEkvQXBpXCI7XHJcbmltcG9ydCB7IGFjdGlvbkFwcHJvdmVFdmVudCwgYWN0aW9uQ2FuY2VsRXZlbnQgfSBmcm9tIFwifi9zdG9yZS9iaWQvYWN0aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL1RhYmxlRXh0cmFTdHlsZXMvZXh0cmFTdHlsZXMubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gQmlkQ29sdW1uKHsgYmlkRXZlbnQsIG51bSwgdHlwZSB9KSB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cdGNvbnNvbGUubG9nKGJpZEV2ZW50KTtcclxuXHJcblx0Y29uc3QgYXBwcm92ZUV2ZW50ID0gKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coXCJhcHByb3ZlIGV2ZW50XCIpO1xyXG5cdFx0ZGlzcGF0Y2goYWN0aW9uQXBwcm92ZUV2ZW50KGJpZEV2ZW50LmlkKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2FuY2VsRXZlbnQgPSAoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcIiBDYW5jZWwgZXZlbnRcIik7XHJcblx0XHRkaXNwYXRjaChhY3Rpb25DYW5jZWxFdmVudChiaWRFdmVudC5pZCkpO1xyXG5cdH07XHJcblxyXG5cdGxldCBidXR0b247XHJcblx0aWYgKGJpZEV2ZW50LmVuZGVkKSB7XHJcblx0XHRidXR0b24gPSBudWxsO1xyXG5cdH0gZWxzZSBpZiAoIWJpZEV2ZW50LmFwcHJvdmVkKSB7XHJcblx0XHRidXR0b24gPSAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXthcHByb3ZlRXZlbnR9IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZUV2ZW50QnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0QXBwcm92ZVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2NhbmNlbEV2ZW50fSBjbGFzc05hbWU9e3N0eWxlcy5kZWNsaW5lRXZlbnRCdXR0b259PlxyXG5cdFx0XHRcdFx0XHREZWxjaW5lXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fSBlbHNlIGlmIChiaWRFdmVudC5hcHByb3ZlZCB8fCBiaWRFdmVudC5zdGFydGVkKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImFwcHJvdmVkXCIpXHJcblx0XHRidXR0b24gPSAoXHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2NhbmNlbEV2ZW50fSBjbGFzc05hbWU9e3N0eWxlcy5kZWNsaW5lRXZlbnRCdXR0b259PlxyXG5cdFx0XHRcdFx0RGVsY2luZVxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8dHI+XHJcblx0XHRcdDx0ZD57bnVtICsgMX08L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PHN0cm9uZz57YmlkRXZlbnQucHJvZHVjdC5uYW1lfTwvc3Ryb25nPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+e2RhdGVGb3JtYXQoYmlkRXZlbnQuc3RhcnRfdGltZSl9PC90ZD5cclxuXHRcdFx0PHRkPntiaWRFdmVudC5hY2Nlc3NfYW1vdW50fTwvdGQ+XHJcblx0XHRcdDx0ZD57YmlkRXZlbnQubWluaW11bV9hbW91bnR9PC90ZD5cclxuXHRcdFx0PHRkPntkYXRlRm9ybWF0KGJpZEV2ZW50LmNyZWF0ZWRBdCl9PC90ZD5cclxuXHRcdFx0ey8qIDx0ZD57YmFkZ2VWaWV3fTwvdGQ+ICovfVxyXG5cclxuXHRcdFx0ey8qIDx0ZD5cclxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2FwcHJvdmVFdmVudH0gY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlRXZlbnRCdXR0b259PlxyXG5cdFx0XHRcdFx0QXBwcm92ZVxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L3RkPiAqL31cclxuXHJcblx0XHRcdHtidXR0b259XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8RHJvcGRvd25BY3Rpb24gdHlwZT1cImJpZEV2ZW50XCIgaWQ9e2JpZEV2ZW50LmlkfSBrZXk9e251bSArIDF9IC8+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdHsvKiB7IWJpZEV2ZW50LmVuZGVkICYmIChcclxuXHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2NhbmNlbEV2ZW50fSBjbGFzc05hbWU9e3N0eWxlcy5kZWNsaW5lRXZlbnRCdXR0b259PlxyXG5cdFx0XHRcdFx0XHREZWxjaW5lXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PERyb3Bkb3duQWN0aW9uIHR5cGU9XCJiaWRFdmVudFwiIGlkPXtiaWRFdmVudC5pZH0ga2V5PXtudW0gKyAxfSAvPlxyXG5cdFx0XHQ8L3RkPiAqL31cclxuXHRcdDwvdHI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlkQ29sdW1uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9