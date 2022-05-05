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
      customers = _useSelector.customers,
      customerGetLoading = _useSelector.customerGetLoading;

  if (customerGetLoading) {
    var _userList = users.map(function (user, index) {
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

_s(TableCustomerItems, "AE5PeeBRdcdxsG6DllWvVrSp0xI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL1RhYmxlQ3VzdG9tZXJJdGVtcy5qc3giXSwibmFtZXMiOlsiVGFibGVDdXN0b21lckl0ZW1zIiwidXNlcnMiLCJ0eXBlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImN1c3RvbWVyIiwiY3VzdG9tZXJzIiwiY3VzdG9tZXJHZXRMb2FkaW5nIiwidXNlckxpc3QiLCJtYXAiLCJ1c2VyIiwiaW5kZXgiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxxQkFDTEMsK0RBQVcsQ0FDcEQsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsUUFBakI7QUFBQSxHQURvRCxDQUROO0FBQUEsTUFDdkNDLFNBRHVDLGdCQUN2Q0EsU0FEdUM7QUFBQSxNQUM1QkMsa0JBRDRCLGdCQUM1QkEsa0JBRDRCOztBQUsvQyxNQUFHQSxrQkFBSCxFQUF1QjtBQUV0QixRQUFNQyxTQUFRLEdBQUdQLEtBQUssQ0FBQ1EsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQyxVQUFJQyxJQUFKOztBQUVBLFVBQUlWLElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQ3hCVSxZQUFJLGdCQUFHLHFFQUFDLHFFQUFEO0FBQWdCLGNBQUksRUFBRUYsSUFBdEI7QUFBd0MsYUFBRyxFQUFFQztBQUE3QyxXQUFpQ0EsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNBLE9BRkQsTUFFTyxJQUFJVCxJQUFJLEtBQUssVUFBYixFQUF5QjtBQUMvQlUsWUFBSSxnQkFBRyxxRUFBQyxxRUFBRDtBQUFnQixjQUFJLEVBQUVGLElBQXRCO0FBQXdDLGFBQUcsRUFBRUM7QUFBN0MsV0FBaUNBLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDQTs7QUFDRCxhQUFPQyxJQUFQO0FBQ0EsS0FUZ0IsQ0FBakI7QUFVQTs7QUFDRCxzQkFDQztBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDJCQUNDO0FBQU8sZUFBUyxFQUFDLGdCQUFqQjtBQUFBLDhCQUNDO0FBQUEsK0JBQ0M7QUFBQSxrQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZELGVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEQsZUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRCxlQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxELGVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkQsZUFPQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFZQztBQUFBLGtCQUFRSjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFrQkEsQ0FwQ0Q7O0dBQU1SLGtCO1VBQ3FDRyx1RDs7O0tBRHJDSCxrQjtBQXNDU0EsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tZXJzLmFjZTVmYTA2YTYzMmJjYjI2N2I0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHJvcGRvd25BY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9lbGVtZW50cy9iYXNpYy9Ecm9wZG93bkFjdGlvblwiO1xuaW1wb3J0IEN1c3RvbWVyQ29sdW1uIGZyb20gXCIuL3RhYmxlLWNvbHVtbnMvQ3VzdG9tZXJDb2x1bW5cIjtcbmltcG9ydCBNZXJjaGFudENvbHVtbiBmcm9tIFwiLi90YWJsZS1jb2x1bW5zL01lcmNoYW50Q29sdW1uXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBUYWJsZUN1c3RvbWVySXRlbXMgPSAoeyB1c2VycywgdHlwZSB9KSA9PiB7XG5cdGNvbnN0IHsgY3VzdG9tZXJzLCBjdXN0b21lckdldExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxuXHRcdChzdGF0ZSkgPT4gc3RhdGUuY3VzdG9tZXJcblx0KTtcblxuXHRpZihjdXN0b21lckdldExvYWRpbmcgKXtcblxuXHRcdGNvbnN0IHVzZXJMaXN0ID0gdXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT4ge1xuXHRcdFx0bGV0IGRhdGE7XG5cdFxuXHRcdFx0aWYgKHR5cGUgPT09IFwibWVyY2hhbnRcIikge1xuXHRcdFx0XHRkYXRhID0gPE1lcmNoYW50Q29sdW1uIHVzZXI9e3VzZXJ9IGtleT17aW5kZXh9IG51bT17aW5kZXh9IC8+O1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlID09PSBcImN1c3RvbWVyXCIpIHtcblx0XHRcdFx0ZGF0YSA9IDxDdXN0b21lckNvbHVtbiB1c2VyPXt1c2VyfSBrZXk9e2luZGV4fSBudW09e2luZGV4fSAvPjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgcHMtdGFibGVcIj5cblx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdDx0aD5JRDwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+UGhvbmU8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPkVtYWlsPC90aD5cblx0XHRcdFx0XHRcdDx0aD5Ub3RhbCBBdWN0aW9uczwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+U3RhdHVzPC90aD5cblx0XHRcdFx0XHRcdDx0aD5WZXJpZnkvVXBncmFkZTwvdGg+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0PHRib2R5Pnt1c2VyTGlzdH08L3Rib2R5PlxuXHRcdFx0PC90YWJsZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ3VzdG9tZXJJdGVtcztcbiJdLCJzb3VyY2VSb290IjoiIn0=