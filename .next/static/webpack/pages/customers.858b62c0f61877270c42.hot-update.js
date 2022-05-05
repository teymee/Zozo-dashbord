webpackHotUpdate_N_E("pages/customers",{

/***/ "./components/shared/tables/TableCustomerItems.jsx":
/*!*********************************************************!*\
  !*** ./components/shared/tables/TableCustomerItems.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/elements/basic/DropdownAction */ "./components/elements/basic/DropdownAction.jsx");
/* harmony import */ var _table_columns_CustomerColumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-columns/CustomerColumn */ "./components/shared/tables/table-columns/CustomerColumn.js");
/* harmony import */ var _table_columns_MerchantColumn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-columns/MerchantColumn */ "./components/shared/tables/table-columns/MerchantColumn.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\tables\\TableCustomerItems.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var TableCustomerItems = function TableCustomerItems(_ref) {
  _s();

  var users = _ref.users,
      type = _ref.type;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.customer;
  }),
      customerGetLoading = _useSelector.customerGetLoading;

  var userList;
  var userss = [];

  if (!customerGetLoading) {
    users = userList = users.map(function (user, index) {
      var data;

      if (type === "merchant") {
        data = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_table_columns_MerchantColumn__WEBPACK_IMPORTED_MODULE_4__["default"], {
          user: user,
          num: index
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 12
        }, _this);
      } else if (type === "customer") {
        data = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_table_columns_CustomerColumn__WEBPACK_IMPORTED_MODULE_3__["default"], {
          user: user,
          num: index
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 12
        }, _this);
      }

      return data;
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "table-responsive",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: "table ps-table",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Phone"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Total Auctions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Verify/Upgrade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: userList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, _this);
};

_s(TableCustomerItems, "1A+vtTAV5iLJB5XTWlUvpxjyb88=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = TableCustomerItems;
/* harmony default export */ __webpack_exports__["default"] = (TableCustomerItems);

var _c;

$RefreshReg$(_c, "TableCustomerItems");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL1RhYmxlQ3VzdG9tZXJJdGVtcy5qc3giXSwibmFtZXMiOlsiVGFibGVDdXN0b21lckl0ZW1zIiwidXNlcnMiLCJ0eXBlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImN1c3RvbWVyIiwiY3VzdG9tZXJHZXRMb2FkaW5nIiwidXNlckxpc3QiLCJ1c2Vyc3MiLCJtYXAiLCJ1c2VyIiwiaW5kZXgiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxxQkFDaEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsUUFBakI7QUFBQSxHQUFELENBREs7QUFBQSxNQUN2Q0Msa0JBRHVDLGdCQUN2Q0Esa0JBRHVDOztBQUcvQyxNQUFJQyxRQUFKO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsTUFBSSxDQUFDRixrQkFBTCxFQUF5QjtBQUN4QkwsU0FBSyxHQUNMTSxRQUFRLEdBQUdOLEtBQUssQ0FBQ1EsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNyQyxVQUFJQyxJQUFKOztBQUVBLFVBQUlWLElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQ3hCVSxZQUFJLGdCQUFHLHFFQUFDLHFFQUFEO0FBQWdCLGNBQUksRUFBRUYsSUFBdEI7QUFBd0MsYUFBRyxFQUFFQztBQUE3QyxXQUFpQ0EsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNBLE9BRkQsTUFFTyxJQUFJVCxJQUFJLEtBQUssVUFBYixFQUF5QjtBQUMvQlUsWUFBSSxnQkFBRyxxRUFBQyxxRUFBRDtBQUFnQixjQUFJLEVBQUVGLElBQXRCO0FBQXdDLGFBQUcsRUFBRUM7QUFBN0MsV0FBaUNBLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDQTs7QUFDRCxhQUFPQyxJQUFQO0FBQ0EsS0FUVSxDQURYO0FBV0E7O0FBQ0Qsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQSwyQkFDQztBQUFPLGVBQVMsRUFBQyxnQkFBakI7QUFBQSw4QkFDQztBQUFBLCtCQUNDO0FBQUEsa0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxlQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhELGVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkQsZUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRCxlQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5ELGVBT0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBWUM7QUFBQSxrQkFBUUw7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBa0JBLENBcENEOztHQUFNUCxrQjtVQUMwQkcsdUQ7OztLQUQxQkgsa0I7QUFzQ1NBLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbWVycy44NThiNjJjMGY2MTg3NzI3MGM0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERyb3Bkb3duQWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvRHJvcGRvd25BY3Rpb25cIjtcbmltcG9ydCBDdXN0b21lckNvbHVtbiBmcm9tIFwiLi90YWJsZS1jb2x1bW5zL0N1c3RvbWVyQ29sdW1uXCI7XG5pbXBvcnQgTWVyY2hhbnRDb2x1bW4gZnJvbSBcIi4vdGFibGUtY29sdW1ucy9NZXJjaGFudENvbHVtblwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgVGFibGVDdXN0b21lckl0ZW1zID0gKHsgdXNlcnMsIHR5cGUgfSkgPT4ge1xuXHRjb25zdCB7IGN1c3RvbWVyR2V0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jdXN0b21lcik7XG5cblx0bGV0IHVzZXJMaXN0O1xuXHRsZXQgdXNlcnNzID0gW11cblx0aWYgKCFjdXN0b21lckdldExvYWRpbmcpIHtcblx0XHR1c2VycyA9IFxuXHRcdHVzZXJMaXN0ID0gdXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT4ge1xuXHRcdFx0bGV0IGRhdGE7XG5cblx0XHRcdGlmICh0eXBlID09PSBcIm1lcmNoYW50XCIpIHtcblx0XHRcdFx0ZGF0YSA9IDxNZXJjaGFudENvbHVtbiB1c2VyPXt1c2VyfSBrZXk9e2luZGV4fSBudW09e2luZGV4fSAvPjtcblx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjdXN0b21lclwiKSB7XG5cdFx0XHRcdGRhdGEgPSA8Q3VzdG9tZXJDb2x1bW4gdXNlcj17dXNlcn0ga2V5PXtpbmRleH0gbnVtPXtpbmRleH0gLz47XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuXHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHBzLXRhYmxlXCI+XG5cdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHQ8dGg+SUQ8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPk5hbWU8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPlBob25lPC90aD5cblx0XHRcdFx0XHRcdDx0aD5FbWFpbDwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+VG90YWwgQXVjdGlvbnM8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPlN0YXR1czwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+VmVyaWZ5L1VwZ3JhZGU8L3RoPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdDx0Ym9keT57dXNlckxpc3R9PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUN1c3RvbWVySXRlbXM7XG4iXSwic291cmNlUm9vdCI6IiJ9