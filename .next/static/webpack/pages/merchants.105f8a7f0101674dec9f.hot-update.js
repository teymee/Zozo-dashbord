webpackHotUpdate_N_E("pages/merchants",{

/***/ "./components/shared/tables/table-columns/UserColumn.js":
/*!**************************************************************!*\
  !*** ./components/shared/tables/table-columns/UserColumn.js ***!
  \**************************************************************/
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
/* harmony import */ var _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TableExtraStyles/extraStyles.module.css */ "./components/shared/tables/TableExtraStyles/extraStyles.module.css");
/* harmony import */ var _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\tables\\table-columns\\UserColumn.js",
    _s = $RefreshSig$();




 // import { deleteActionCategory } from "~/store/userDetails/action";



function UserColumn(_ref) {
  _s();

  var user = _ref.user,
      num = _ref.num;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var userDetails = user.account;
  var auction = user.auctions; // const deleteProduct = () => {
  //   console.log(userDetails.id)
  // 	dispatch(deleteActionCategory(userDetails.id));
  // };

  var badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: "ps-badge success",
    children: "Ongoing"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 17
  }, this); // if (user.auction === null) {
  // 	badgeView = <span className="ps-badge gray">No Event</span>;
  // } else if (user.auction.status === "pending") {
  // 	badgeView = <span className="ps-badge success">Ongoing</span>;
  // }


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: num + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "".concat(userDetails.first_name, " ").concat(userDetails.last_name, " ")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.phone_number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.auction.length()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: badgeView
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/bids/create-bid/" + userDetails.id,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.createEventButton,
          children: "Create Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "userDetails",
        id: userDetails.id
      }, num + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, this);
}

_s(UserColumn, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = UserColumn;
/* harmony default export */ __webpack_exports__["default"] = (UserColumn);

var _c;

$RefreshReg$(_c, "UserColumn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvVXNlckNvbHVtbi5qcyJdLCJuYW1lcyI6WyJVc2VyQ29sdW1uIiwidXNlciIsIm51bSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VyRGV0YWlscyIsImFjY291bnQiLCJhdWN0aW9uIiwiYXVjdGlvbnMiLCJiYWRnZVZpZXciLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicGhvbmVfbnVtYmVyIiwiZW1haWwiLCJsZW5ndGgiLCJpZCIsInN0eWxlcyIsImNyZWF0ZUV2ZW50QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBOztBQUVBLFNBQVNBLFVBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFBQSxNQUFOQyxHQUFNLFFBQU5BLEdBQU07QUFDaEMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0osSUFBSSxDQUFDSyxPQUF6QjtBQUNBLE1BQU1DLE9BQU8sR0FBR04sSUFBSSxDQUFDTyxRQUFyQixDQUhnQyxDQUtoQztBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFJQyxTQUFTLGdCQUFFO0FBQU0sYUFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFmLENBWGdDLENBWWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLHNCQUNDO0FBQUEsNEJBQ0M7QUFBQSxnQkFBS1AsR0FBRyxHQUFHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUM7QUFBQSw2QkFDQztBQUFBLDRCQUFZRyxXQUFXLENBQUNLLFVBQXhCLGNBQXNDTCxXQUFXLENBQUNNLFNBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQUtDO0FBQUEsZ0JBQUtOLFdBQVcsQ0FBQ087QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELGVBTUM7QUFBQSxnQkFBS1AsV0FBVyxDQUFDUTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQsZUFPQztBQUFBLGdCQUFLUixXQUFXLENBQUNFLE9BQVosQ0FBb0JPLE1BQXBCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBELGVBUUM7QUFBQSxnQkFBS0w7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQsZUFTQztBQUFBLDZCQUNDLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFLHNCQUFvQkosV0FBVyxDQUFDVSxFQUE1QztBQUFBLCtCQUNDO0FBQVEsbUJBQVMsRUFBRUMsK0VBQU0sQ0FBQ0MsaUJBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURCxlQWNDO0FBQUEsNkJBQ0MscUVBQUMsaUZBQUQ7QUFBZ0IsWUFBSSxFQUFDLGFBQXJCO0FBQW1DLFVBQUUsRUFBRVosV0FBVyxDQUFDVTtBQUFuRCxTQUE0RGIsR0FBRyxHQUFHLENBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFvQkE7O0dBckNRRixVO1VBQ1NJLHVEOzs7S0FEVEosVTtBQXVDTUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVyY2hhbnRzLjEwNWY4YTdmMDEwMTY3NGRlYzlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBEcm9wZG93bkFjdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2VsZW1lbnRzL2Jhc2ljL0Ryb3Bkb3duQWN0aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL1RhYmxlRXh0cmFTdHlsZXMvZXh0cmFTdHlsZXMubW9kdWxlLmNzc1wiO1xyXG4vLyBpbXBvcnQgeyBkZWxldGVBY3Rpb25DYXRlZ29yeSB9IGZyb20gXCJ+L3N0b3JlL3VzZXJEZXRhaWxzL2FjdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBVc2VyQ29sdW1uKHsgdXNlcixudW19KSB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cdGNvbnN0IHVzZXJEZXRhaWxzID0gdXNlci5hY2NvdW50XHJcblx0Y29uc3QgYXVjdGlvbiA9IHVzZXIuYXVjdGlvbnNcclxuXHRcclxuXHQvLyBjb25zdCBkZWxldGVQcm9kdWN0ID0gKCkgPT4ge1xyXG5cdC8vICAgY29uc29sZS5sb2codXNlckRldGFpbHMuaWQpXHJcblxyXG5cdC8vIFx0ZGlzcGF0Y2goZGVsZXRlQWN0aW9uQ2F0ZWdvcnkodXNlckRldGFpbHMuaWQpKTtcclxuXHQvLyB9O1xyXG5cclxuXHRsZXQgYmFkZ2VWaWV3PSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBzdWNjZXNzXCI+T25nb2luZzwvc3Bhbj47XHJcblx0Ly8gaWYgKHVzZXIuYXVjdGlvbiA9PT0gbnVsbCkge1xyXG5cdC8vIFx0YmFkZ2VWaWV3ID0gPHNwYW4gY2xhc3NOYW1lPVwicHMtYmFkZ2UgZ3JheVwiPk5vIEV2ZW50PC9zcGFuPjtcclxuXHQvLyB9IGVsc2UgaWYgKHVzZXIuYXVjdGlvbi5zdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XHJcblx0Ly8gXHRiYWRnZVZpZXcgPSA8c3BhbiBjbGFzc05hbWU9XCJwcy1iYWRnZSBzdWNjZXNzXCI+T25nb2luZzwvc3Bhbj47XHJcblx0Ly8gfVxyXG5cdHJldHVybiAoXHJcblx0XHQ8dHI+XHJcblx0XHRcdDx0ZD57bnVtICsgMX08L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PHN0cm9uZz57YCR7dXNlckRldGFpbHMuZmlyc3RfbmFtZX0gJHt1c2VyRGV0YWlscy5sYXN0X25hbWV9IGB9PC9zdHJvbmc+XHJcblx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD57dXNlckRldGFpbHMucGhvbmVfbnVtYmVyfTwvdGQ+XHJcblx0XHRcdDx0ZD57dXNlckRldGFpbHMuZW1haWx9PC90ZD5cclxuXHRcdFx0PHRkPnt1c2VyRGV0YWlscy5hdWN0aW9uLmxlbmd0aCgpfTwvdGQ+XHJcblx0XHRcdDx0ZD57YmFkZ2VWaWV3fTwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0XHQ8TGluayBocmVmPXtcIi9iaWRzL2NyZWF0ZS1iaWQvXCIrdXNlckRldGFpbHMuaWR9PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVFdmVudEJ1dHRvbn0+Q3JlYXRlIEV2ZW50PC9idXR0b24+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PERyb3Bkb3duQWN0aW9uIHR5cGU9XCJ1c2VyRGV0YWlsc1wiIGlkPXt1c2VyRGV0YWlscy5pZH0ga2V5PXtudW0gKyAxfSAvPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0PC90cj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29sdW1uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9