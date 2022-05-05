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

  if (!customerGetLoading) {
    userList = users.map(function (user, index) {
      var data;

      if (type === "merchant") {
        data = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_table_columns_MerchantColumn__WEBPACK_IMPORTED_MODULE_4__["default"], {
          user: user,
          num: index
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 12
        }, _this);
      } else if (type === "customer") {
        data = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_table_columns_CustomerColumn__WEBPACK_IMPORTED_MODULE_3__["default"], {
          user: user,
          num: index
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
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
            lineNumber: 31,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Phone"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Total Auctions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Verify/Upgrade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: userList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }, _this);
};

_s(TableCustomerItems, "0rPTU/Sc/GEdwQY6t+rAqj5aLcA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL1RhYmxlQ3VzdG9tZXJJdGVtcy5qc3giXSwibmFtZXMiOlsiVGFibGVDdXN0b21lckl0ZW1zIiwidXNlcnMiLCJ0eXBlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImN1c3RvbWVyIiwiY3VzdG9tZXJHZXRMb2FkaW5nIiwidXNlckxpc3QiLCJtYXAiLCJ1c2VyIiwiaW5kZXgiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxxQkFDZkMsK0RBQVcsQ0FDMUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsUUFBakI7QUFBQSxHQUQwQyxDQURJO0FBQUEsTUFDdENDLGtCQURzQyxnQkFDdENBLGtCQURzQzs7QUFLL0MsTUFBSUMsUUFBSjs7QUFDQSxNQUFHLENBQUNELGtCQUFKLEVBQXdCO0FBRXZCQyxZQUFRLEdBQUdOLEtBQUssQ0FBQ08sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNyQyxVQUFJQyxJQUFKOztBQUVBLFVBQUlULElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQ3hCUyxZQUFJLGdCQUFHLHFFQUFDLHFFQUFEO0FBQWdCLGNBQUksRUFBRUYsSUFBdEI7QUFBd0MsYUFBRyxFQUFFQztBQUE3QyxXQUFpQ0EsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNBLE9BRkQsTUFFTyxJQUFJUixJQUFJLEtBQUssVUFBYixFQUF5QjtBQUMvQlMsWUFBSSxnQkFBRyxxRUFBQyxxRUFBRDtBQUFnQixjQUFJLEVBQUVGLElBQXRCO0FBQXdDLGFBQUcsRUFBRUM7QUFBN0MsV0FBaUNBLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDQTs7QUFDRCxhQUFPQyxJQUFQO0FBQ0EsS0FUVSxDQUFYO0FBVUE7O0FBQ0Qsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQSwyQkFDQztBQUFPLGVBQVMsRUFBQyxnQkFBakI7QUFBQSw4QkFDQztBQUFBLCtCQUNDO0FBQUEsa0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxlQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhELGVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkQsZUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRCxlQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5ELGVBT0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBWUM7QUFBQSxrQkFBUUo7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBa0JBLENBckNEOztHQUFNUCxrQjtVQUMyQkcsdUQ7OztLQUQzQkgsa0I7QUF1Q1NBLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbWVycy5jZTRlNWE3MTBmZDY1ZTRhZjM4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERyb3Bkb3duQWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvRHJvcGRvd25BY3Rpb25cIjtcbmltcG9ydCBDdXN0b21lckNvbHVtbiBmcm9tIFwiLi90YWJsZS1jb2x1bW5zL0N1c3RvbWVyQ29sdW1uXCI7XG5pbXBvcnQgTWVyY2hhbnRDb2x1bW4gZnJvbSBcIi4vdGFibGUtY29sdW1ucy9NZXJjaGFudENvbHVtblwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgVGFibGVDdXN0b21lckl0ZW1zID0gKHsgdXNlcnMsIHR5cGUgfSkgPT4ge1xuXHRjb25zdCB7ICBjdXN0b21lckdldExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxuXHRcdChzdGF0ZSkgPT4gc3RhdGUuY3VzdG9tZXJcblx0KTtcblxuXHRsZXQgdXNlckxpc3Rcblx0aWYoIWN1c3RvbWVyR2V0TG9hZGluZyApe1xuXG5cdFx0dXNlckxpc3QgPSB1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiB7XG5cdFx0XHRsZXQgZGF0YTtcblx0XG5cdFx0XHRpZiAodHlwZSA9PT0gXCJtZXJjaGFudFwiKSB7XG5cdFx0XHRcdGRhdGEgPSA8TWVyY2hhbnRDb2x1bW4gdXNlcj17dXNlcn0ga2V5PXtpbmRleH0gbnVtPXtpbmRleH0gLz47XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT09IFwiY3VzdG9tZXJcIikge1xuXHRcdFx0XHRkYXRhID0gPEN1c3RvbWVyQ29sdW1uIHVzZXI9e3VzZXJ9IGtleT17aW5kZXh9IG51bT17aW5kZXh9IC8+O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cblx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBwcy10YWJsZVwiPlxuXHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0PHRoPklEPC90aD5cblx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cblx0XHRcdFx0XHRcdDx0aD5QaG9uZTwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+RW1haWw8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPlRvdGFsIEF1Y3Rpb25zPC90aD5cblx0XHRcdFx0XHRcdDx0aD5TdGF0dXM8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPlZlcmlmeS9VcGdyYWRlPC90aD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHQ8dGJvZHk+e3VzZXJMaXN0fTwvdGJvZHk+XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVDdXN0b21lckl0ZW1zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==