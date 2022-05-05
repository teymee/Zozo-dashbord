webpackHotUpdate_N_E("pages/index",{

/***/ "./components/shared/menus/MenuSidebar.jsx":
/*!*************************************************!*\
  !*** ./components/shared/menus/MenuSidebar.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\menus\\MenuSidebar.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var MenuSidebar = function MenuSidebar() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var menuItems = [{
    text: "Dashboard",
    url: "/",
    icon: "icon-home"
  }, {
    text: "Categories",
    url: "/categories",
    icon: "icon-users2"
  }, {
    text: "Products",
    url: "/products",
    icon: "icon-database"
  }, {
    text: "Pending Auctions",
    url: "/bids/pending",
    icon: "icon-cog"
  }, {
    text: "Approved Auctions",
    url: "/bids/approved",
    icon: "icon-cog"
  }, {
    text: "Ongoing Auctions",
    url: "/bids/ongoing",
    icon: "icon-cog"
  }, {
    text: "Completed Auctions",
    url: "/bids/completed",
    icon: "icon-cog"
  }, {
    text: "Orders",
    url: "/orders",
    icon: "icon-bag2"
  }, {
    text: "Customers",
    url: "/customers",
    icon: "icon-users2"
  }, {
    text: "Merchants",
    url: "/merchants",
    icon: "icon-users2"
  }, // {
  // 	text: "Shipping",
  // 	url: "/shipping",
  // 	icon: "icon-cog",
  // },
  // {
  // 	text: "Cashout Requests",
  // 	url: "/cashout_requests",
  // 	icon: "icon-cog",
  // },
  // {
  // 	text: "Approved Cashouts",
  // 	url: "/approved_cashouts",
  // 	icon: "icon-cog",
  // },
  {
    text: "Settings",
    url: "/settings",
    icon: "icon-cog"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "menu",
    children: menuItems.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: router.pathname === item.url ? "active" : "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: item.url,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: item.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 8
            }, _this), item.text]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 6
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 3
  }, _this);
};

_s(MenuSidebar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = MenuSidebar;
/* harmony default export */ __webpack_exports__["default"] = (MenuSidebar);

var _c;

$RefreshReg$(_c, "MenuSidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVudXMvTWVudVNpZGViYXIuanN4Il0sIm5hbWVzIjpbIk1lbnVTaWRlYmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwibWVudUl0ZW1zIiwidGV4dCIsInVybCIsImljb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsQ0FDakI7QUFDQ0MsUUFBSSxFQUFFLFdBRFA7QUFFQ0MsT0FBRyxFQUFFLEdBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0FEaUIsRUFPakI7QUFDQ0YsUUFBSSxFQUFFLFlBRFA7QUFFQ0MsT0FBRyxFQUFFLGFBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0FQaUIsRUFZakI7QUFDQ0YsUUFBSSxFQUFFLFVBRFA7QUFFQ0MsT0FBRyxFQUFFLFdBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0FaaUIsRUFrQmpCO0FBQ0NGLFFBQUksRUFBRSxrQkFEUDtBQUVDQyxPQUFHLEVBQUUsZUFGTjtBQUdDQyxRQUFJLEVBQUU7QUFIUCxHQWxCaUIsRUF1QmpCO0FBQ0NGLFFBQUksRUFBRSxtQkFEUDtBQUVDQyxPQUFHLEVBQUUsZ0JBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0F2QmlCLEVBNEJqQjtBQUNDRixRQUFJLEVBQUUsa0JBRFA7QUFFQ0MsT0FBRyxFQUFFLGVBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0E1QmlCLEVBaUNqQjtBQUNDRixRQUFJLEVBQUUsb0JBRFA7QUFFQ0MsT0FBRyxFQUFFLGlCQUZOO0FBR0NDLFFBQUksRUFBRTtBQUhQLEdBakNpQixFQXdDakI7QUFDQ0YsUUFBSSxFQUFFLFFBRFA7QUFFQ0MsT0FBRyxFQUFFLFNBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0F4Q2lCLEVBNkNqQjtBQUNDRixRQUFJLEVBQUUsV0FEUDtBQUVDQyxPQUFHLEVBQUUsWUFGTjtBQUdDQyxRQUFJLEVBQUU7QUFIUCxHQTdDaUIsRUFrRGpCO0FBQ0NGLFFBQUksRUFBRSxXQURQO0FBRUNDLE9BQUcsRUFBRSxZQUZOO0FBR0NDLFFBQUksRUFBRTtBQUhQLEdBbERpQixFQXVEakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQ0YsUUFBSSxFQUFFLFVBRFA7QUFFQ0MsT0FBRyxFQUFFLFdBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0F2RWlCLENBQWxCO0FBOEVBLHNCQUNDO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQSxjQUNFSCxTQUFTLENBQUNJLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSwwQkFDZDtBQUVDLGlCQUFTLEVBQUVSLE1BQU0sQ0FBQ1MsUUFBUCxLQUFvQkYsSUFBSSxDQUFDSCxHQUF6QixHQUErQixRQUEvQixHQUEwQyxFQUZ0RDtBQUFBLCtCQUlDLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFRyxJQUFJLENBQUNILEdBQWpCO0FBQUEsaUNBQ0M7QUFBQSxvQ0FDQztBQUFHLHVCQUFTLEVBQUVHLElBQUksQ0FBQ0Y7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxFQUVFRSxJQUFJLENBQUNKLElBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpELFNBQ01LLEtBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjO0FBQUEsS0FBZDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWlCQSxDQWpHRDs7R0FBTVQsVztVQUNVRSxxRDs7O0tBRFZGLFc7QUFtR1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJmNjFiNmVmODJhMzc0NDFhZTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgTWVudVNpZGViYXIgPSAoKSA9PiB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBtZW51SXRlbXMgPSBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJEYXNoYm9hcmRcIixcblx0XHRcdHVybDogXCIvXCIsXG5cdFx0XHRpY29uOiBcImljb24taG9tZVwiLFxuXHRcdH0sXG5cdFx0XG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDYXRlZ29yaWVzXCIsXG5cdFx0XHR1cmw6IFwiL2NhdGVnb3JpZXNcIixcblx0XHRcdGljb246IFwiaWNvbi11c2VyczJcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiUHJvZHVjdHNcIixcblx0XHRcdHVybDogXCIvcHJvZHVjdHNcIixcblx0XHRcdGljb246IFwiaWNvbi1kYXRhYmFzZVwiLFxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlBlbmRpbmcgQXVjdGlvbnNcIixcblx0XHRcdHVybDogXCIvYmlkcy9wZW5kaW5nXCIsXG5cdFx0XHRpY29uOiBcImljb24tY29nXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkFwcHJvdmVkIEF1Y3Rpb25zXCIsXG5cdFx0XHR1cmw6IFwiL2JpZHMvYXBwcm92ZWRcIixcblx0XHRcdGljb246IFwiaWNvbi1jb2dcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiT25nb2luZyBBdWN0aW9uc1wiLFxuXHRcdFx0dXJsOiBcIi9iaWRzL29uZ29pbmdcIixcblx0XHRcdGljb246IFwiaWNvbi1jb2dcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiQ29tcGxldGVkIEF1Y3Rpb25zXCIsXG5cdFx0XHR1cmw6IFwiL2JpZHMvY29tcGxldGVkXCIsXG5cdFx0XHRpY29uOiBcImljb24tY29nXCIsXG5cdFx0fSxcblx0XG5cdFx0XG5cdFx0e1xuXHRcdFx0dGV4dDogXCJPcmRlcnNcIixcblx0XHRcdHVybDogXCIvb3JkZXJzXCIsXG5cdFx0XHRpY29uOiBcImljb24tYmFnMlwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDdXN0b21lcnNcIixcblx0XHRcdHVybDogXCIvY3VzdG9tZXJzXCIsXG5cdFx0XHRpY29uOiBcImljb24tdXNlcnMyXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIk1lcmNoYW50c1wiLFxuXHRcdFx0dXJsOiBcIi9tZXJjaGFudHNcIixcblx0XHRcdGljb246IFwiaWNvbi11c2VyczJcIixcblx0XHR9LFxuXHRcdC8vIHtcblx0XHQvLyBcdHRleHQ6IFwiU2hpcHBpbmdcIixcblx0XHQvLyBcdHVybDogXCIvc2hpcHBpbmdcIixcblx0XHQvLyBcdGljb246IFwiaWNvbi1jb2dcIixcblx0XHQvLyB9LFxuXHRcdC8vIHtcblx0XHQvLyBcdHRleHQ6IFwiQ2FzaG91dCBSZXF1ZXN0c1wiLFxuXHRcdC8vIFx0dXJsOiBcIi9jYXNob3V0X3JlcXVlc3RzXCIsXG5cdFx0Ly8gXHRpY29uOiBcImljb24tY29nXCIsXG5cdFx0Ly8gfSxcblx0XHQvLyB7XG5cdFx0Ly8gXHR0ZXh0OiBcIkFwcHJvdmVkIENhc2hvdXRzXCIsXG5cdFx0Ly8gXHR1cmw6IFwiL2FwcHJvdmVkX2Nhc2hvdXRzXCIsXG5cdFx0Ly8gXHRpY29uOiBcImljb24tY29nXCIsXG5cdFx0Ly8gfSxcblx0XG5cdFx0e1xuXHRcdFx0dGV4dDogXCJTZXR0aW5nc1wiLFxuXHRcdFx0dXJsOiBcIi9zZXR0aW5nc1wiLFxuXHRcdFx0aWNvbjogXCJpY29uLWNvZ1wiLFxuXHRcdH0sXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxuXHRcdFx0e21lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG5cdFx0XHRcdDxsaVxuXHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IGl0ZW0udXJsID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TGluayBocmVmPXtpdGVtLnVybH0+XG5cdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtpdGVtLmljb259PjwvaT5cblx0XHRcdFx0XHRcdFx0e2l0ZW0udGV4dH1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpKX1cblx0XHQ8L3VsPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudVNpZGViYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9