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

  var user = _ref.user;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var userDetails = user.account;
  var auction = user.auctions; // const deleteProduct = () => {
  //   console.log(userDetails.id)
  // 	dispatch(deleteActionCategory(userDetails.id));
  // };

  var badgeView;

  if (user.auction === null) {
    badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "ps-badge gray",
      children: "No Event"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }, this);
  } else if (userDetails.auction.status === "pending") {
    badgeView = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "ps-badge success",
      children: "Ongoing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: num + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "".concat(userDetails.first_name, " ").concat(userDetails.last_name, " ")
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
      children: userDetails.phone_number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: userDetails.auction.length()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: badgeView
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/bids/create-bid/" + userDetails.id,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.createEventButton,
          children: "Create Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "userDetails",
        id: userDetails.id
      }, num + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvVXNlckNvbHVtbi5qcyJdLCJuYW1lcyI6WyJVc2VyQ29sdW1uIiwidXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VyRGV0YWlscyIsImFjY291bnQiLCJhdWN0aW9uIiwiYXVjdGlvbnMiLCJiYWRnZVZpZXciLCJzdGF0dXMiLCJudW0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicGhvbmVfbnVtYmVyIiwiZW1haWwiLCJsZW5ndGgiLCJpZCIsInN0eWxlcyIsImNyZWF0ZUV2ZW50QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBOztBQUVBLFNBQVNBLFVBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDNUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0gsSUFBSSxDQUFDSSxPQUF6QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0wsSUFBSSxDQUFDTSxRQUFyQixDQUg0QixDQUs1QjtBQUNBO0FBRUE7QUFDQTs7QUFDQSxNQUFJQyxTQUFKOztBQUNBLE1BQUlQLElBQUksQ0FBQ0ssT0FBTCxLQUFpQixJQUFyQixFQUEyQjtBQUMxQkUsYUFBUyxnQkFBRztBQUFNLGVBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFaO0FBQ0EsR0FGRCxNQUVPLElBQUlKLFdBQVcsQ0FBQ0UsT0FBWixDQUFvQkcsTUFBcEIsS0FBK0IsU0FBbkMsRUFBOEM7QUFDcERELGFBQVMsZ0JBQUc7QUFBTSxlQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVo7QUFDQTs7QUFDRCxzQkFDQztBQUFBLDRCQUNDO0FBQUEsZ0JBQUtFLEdBQUcsR0FBRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQUEsNkJBQ0M7QUFBQSw0QkFBWU4sV0FBVyxDQUFDTyxVQUF4QixjQUFzQ1AsV0FBVyxDQUFDUSxTQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFLQztBQUFBLGdCQUFLUixXQUFXLENBQUNTO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU1DO0FBQUEsZ0JBQUtULFdBQVcsQ0FBQ1U7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5ELGVBT0M7QUFBQSxnQkFBS1YsV0FBVyxDQUFDRSxPQUFaLENBQW9CUyxNQUFwQjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQVFDO0FBQUEsZ0JBQUtQO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELGVBU0M7QUFBQSw2QkFDQyxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRSxzQkFBb0JKLFdBQVcsQ0FBQ1ksRUFBNUM7QUFBQSwrQkFDQztBQUFRLG1CQUFTLEVBQUVDLCtFQUFNLENBQUNDLGlCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQsZUFjQztBQUFBLDZCQUNDLHFFQUFDLGlGQUFEO0FBQWdCLFlBQUksRUFBQyxhQUFyQjtBQUFtQyxVQUFFLEVBQUVkLFdBQVcsQ0FBQ1k7QUFBbkQsU0FBNEROLEdBQUcsR0FBRyxDQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBb0JBOztHQXBDUVYsVTtVQUNTRyx1RDs7O0tBRFRILFU7QUFzQ01BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lcmNoYW50cy5hNmIxMmEzYTA4OTZkZWI2ZmIzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRHJvcGRvd25BY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9lbGVtZW50cy9iYXNpYy9Ecm9wZG93bkFjdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9UYWJsZUV4dHJhU3R5bGVzL2V4dHJhU3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuLy8gaW1wb3J0IHsgZGVsZXRlQWN0aW9uQ2F0ZWdvcnkgfSBmcm9tIFwifi9zdG9yZS91c2VyRGV0YWlscy9hY3Rpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gVXNlckNvbHVtbih7IHVzZXJ9KSB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cdGNvbnN0IHVzZXJEZXRhaWxzID0gdXNlci5hY2NvdW50XHJcblx0Y29uc3QgYXVjdGlvbiA9IHVzZXIuYXVjdGlvbnNcclxuXHRcclxuXHQvLyBjb25zdCBkZWxldGVQcm9kdWN0ID0gKCkgPT4ge1xyXG5cdC8vICAgY29uc29sZS5sb2codXNlckRldGFpbHMuaWQpXHJcblxyXG5cdC8vIFx0ZGlzcGF0Y2goZGVsZXRlQWN0aW9uQ2F0ZWdvcnkodXNlckRldGFpbHMuaWQpKTtcclxuXHQvLyB9O1xyXG5cdGxldCBiYWRnZVZpZXc7XHJcblx0aWYgKHVzZXIuYXVjdGlvbiA9PT0gbnVsbCkge1xyXG5cdFx0YmFkZ2VWaWV3ID0gPHNwYW4gY2xhc3NOYW1lPVwicHMtYmFkZ2UgZ3JheVwiPk5vIEV2ZW50PC9zcGFuPjtcclxuXHR9IGVsc2UgaWYgKHVzZXJEZXRhaWxzLmF1Y3Rpb24uc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xyXG5cdFx0YmFkZ2VWaWV3ID0gPHNwYW4gY2xhc3NOYW1lPVwicHMtYmFkZ2Ugc3VjY2Vzc1wiPk9uZ29pbmc8L3NwYW4+O1xyXG5cdH1cclxuXHRyZXR1cm4gKFxyXG5cdFx0PHRyPlxyXG5cdFx0XHQ8dGQ+e251bSArIDF9PC90ZD5cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxzdHJvbmc+e2Ake3VzZXJEZXRhaWxzLmZpcnN0X25hbWV9ICR7dXNlckRldGFpbHMubGFzdF9uYW1lfSBgfTwvc3Ryb25nPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+e3VzZXJEZXRhaWxzLnBob25lX251bWJlcn08L3RkPlxyXG5cdFx0XHQ8dGQ+e3VzZXJEZXRhaWxzLmVtYWlsfTwvdGQ+XHJcblx0XHRcdDx0ZD57dXNlckRldGFpbHMuYXVjdGlvbi5sZW5ndGgoKX08L3RkPlxyXG5cdFx0XHQ8dGQ+e2JhZGdlVmlld308L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PExpbmsgaHJlZj17XCIvYmlkcy9jcmVhdGUtYmlkL1wiK3VzZXJEZXRhaWxzLmlkfT5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlRXZlbnRCdXR0b259PkNyZWF0ZSBFdmVudDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC90ZD5cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxEcm9wZG93bkFjdGlvbiB0eXBlPVwidXNlckRldGFpbHNcIiBpZD17dXNlckRldGFpbHMuaWR9IGtleT17bnVtICsgMX0gLz5cclxuXHRcdFx0PC90ZD5cclxuXHRcdDwvdHI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbHVtbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==