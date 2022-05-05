webpackHotUpdate_N_E("pages/customers",{

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
  }, {
    text: "Shipping",
    url: "/shipping",
    icon: "icon-cog"
  }, // {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVudXMvTWVudVNpZGViYXIuanN4Il0sIm5hbWVzIjpbIk1lbnVTaWRlYmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwibWVudUl0ZW1zIiwidGV4dCIsInVybCIsImljb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsQ0FDakI7QUFDQ0MsUUFBSSxFQUFFLFdBRFA7QUFFQ0MsT0FBRyxFQUFFLEdBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0FEaUIsRUFPakI7QUFDQ0YsUUFBSSxFQUFFLFlBRFA7QUFFQ0MsT0FBRyxFQUFFLGFBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0FQaUIsRUFZakI7QUFDQ0YsUUFBSSxFQUFFLFVBRFA7QUFFQ0MsT0FBRyxFQUFFLFdBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0FaaUIsRUFrQmpCO0FBQ0NGLFFBQUksRUFBRSxrQkFEUDtBQUVDQyxPQUFHLEVBQUUsZUFGTjtBQUdDQyxRQUFJLEVBQUU7QUFIUCxHQWxCaUIsRUF1QmpCO0FBQ0NGLFFBQUksRUFBRSxtQkFEUDtBQUVDQyxPQUFHLEVBQUUsZ0JBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0F2QmlCLEVBNEJqQjtBQUNDRixRQUFJLEVBQUUsa0JBRFA7QUFFQ0MsT0FBRyxFQUFFLGVBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0E1QmlCLEVBaUNqQjtBQUNDRixRQUFJLEVBQUUsb0JBRFA7QUFFQ0MsT0FBRyxFQUFFLGlCQUZOO0FBR0NDLFFBQUksRUFBRTtBQUhQLEdBakNpQixFQXdDakI7QUFDQ0YsUUFBSSxFQUFFLFFBRFA7QUFFQ0MsT0FBRyxFQUFFLFNBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0F4Q2lCLEVBNkNqQjtBQUNDRixRQUFJLEVBQUUsV0FEUDtBQUVDQyxPQUFHLEVBQUUsWUFGTjtBQUdDQyxRQUFJLEVBQUU7QUFIUCxHQTdDaUIsRUFrRGpCO0FBQ0NGLFFBQUksRUFBRSxXQURQO0FBRUNDLE9BQUcsRUFBRSxZQUZOO0FBR0NDLFFBQUksRUFBRTtBQUhQLEdBbERpQixFQXVEakI7QUFDQ0YsUUFBSSxFQUFFLFVBRFA7QUFFQ0MsT0FBRyxFQUFFLFdBRk47QUFHQ0MsUUFBSSxFQUFFO0FBSFAsR0F2RGlCLEVBNERqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0NGLFFBQUksRUFBRSxVQURQO0FBRUNDLE9BQUcsRUFBRSxXQUZOO0FBR0NDLFFBQUksRUFBRTtBQUhQLEdBdkVpQixDQUFsQjtBQThFQSxzQkFDQztBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUEsY0FDRUgsU0FBUyxDQUFDSSxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsMEJBQ2Q7QUFFQyxpQkFBUyxFQUFFUixNQUFNLENBQUNTLFFBQVAsS0FBb0JGLElBQUksQ0FBQ0gsR0FBekIsR0FBK0IsUUFBL0IsR0FBMEMsRUFGdEQ7QUFBQSwrQkFJQyxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRUcsSUFBSSxDQUFDSCxHQUFqQjtBQUFBLGlDQUNDO0FBQUEsb0NBQ0M7QUFBRyx1QkFBUyxFQUFFRyxJQUFJLENBQUNGO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsRUFFRUUsSUFBSSxDQUFDSixJQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRCxTQUNNSyxLQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYztBQUFBLEtBQWQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpQkEsQ0FqR0Q7O0dBQU1ULFc7VUFDVUUscUQ7OztLQURWRixXO0FBbUdTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b21lcnMuNTQ4MjUxOTExZmMzZmNiYTBjYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBNZW51U2lkZWJhciA9ICgpID0+IHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IG1lbnVJdGVtcyA9IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkRhc2hib2FyZFwiLFxuXHRcdFx0dXJsOiBcIi9cIixcblx0XHRcdGljb246IFwiaWNvbi1ob21lXCIsXG5cdFx0fSxcblx0XHRcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkNhdGVnb3JpZXNcIixcblx0XHRcdHVybDogXCIvY2F0ZWdvcmllc1wiLFxuXHRcdFx0aWNvbjogXCJpY29uLXVzZXJzMlwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQcm9kdWN0c1wiLFxuXHRcdFx0dXJsOiBcIi9wcm9kdWN0c1wiLFxuXHRcdFx0aWNvbjogXCJpY29uLWRhdGFiYXNlXCIsXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdHRleHQ6IFwiUGVuZGluZyBBdWN0aW9uc1wiLFxuXHRcdFx0dXJsOiBcIi9iaWRzL3BlbmRpbmdcIixcblx0XHRcdGljb246IFwiaWNvbi1jb2dcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiQXBwcm92ZWQgQXVjdGlvbnNcIixcblx0XHRcdHVybDogXCIvYmlkcy9hcHByb3ZlZFwiLFxuXHRcdFx0aWNvbjogXCJpY29uLWNvZ1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJPbmdvaW5nIEF1Y3Rpb25zXCIsXG5cdFx0XHR1cmw6IFwiL2JpZHMvb25nb2luZ1wiLFxuXHRcdFx0aWNvbjogXCJpY29uLWNvZ1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDb21wbGV0ZWQgQXVjdGlvbnNcIixcblx0XHRcdHVybDogXCIvYmlkcy9jb21wbGV0ZWRcIixcblx0XHRcdGljb246IFwiaWNvbi1jb2dcIixcblx0XHR9LFxuXHRcblx0XHRcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIk9yZGVyc1wiLFxuXHRcdFx0dXJsOiBcIi9vcmRlcnNcIixcblx0XHRcdGljb246IFwiaWNvbi1iYWcyXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkN1c3RvbWVyc1wiLFxuXHRcdFx0dXJsOiBcIi9jdXN0b21lcnNcIixcblx0XHRcdGljb246IFwiaWNvbi11c2VyczJcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiTWVyY2hhbnRzXCIsXG5cdFx0XHR1cmw6IFwiL21lcmNoYW50c1wiLFxuXHRcdFx0aWNvbjogXCJpY29uLXVzZXJzMlwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJTaGlwcGluZ1wiLFxuXHRcdFx0dXJsOiBcIi9zaGlwcGluZ1wiLFxuXHRcdFx0aWNvbjogXCJpY29uLWNvZ1wiLFxuXHRcdH0sXG5cdFx0Ly8ge1xuXHRcdC8vIFx0dGV4dDogXCJDYXNob3V0IFJlcXVlc3RzXCIsXG5cdFx0Ly8gXHR1cmw6IFwiL2Nhc2hvdXRfcmVxdWVzdHNcIixcblx0XHQvLyBcdGljb246IFwiaWNvbi1jb2dcIixcblx0XHQvLyB9LFxuXHRcdC8vIHtcblx0XHQvLyBcdHRleHQ6IFwiQXBwcm92ZWQgQ2FzaG91dHNcIixcblx0XHQvLyBcdHVybDogXCIvYXBwcm92ZWRfY2FzaG91dHNcIixcblx0XHQvLyBcdGljb246IFwiaWNvbi1jb2dcIixcblx0XHQvLyB9LFxuXHRcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlNldHRpbmdzXCIsXG5cdFx0XHR1cmw6IFwiL3NldHRpbmdzXCIsXG5cdFx0XHRpY29uOiBcImljb24tY29nXCIsXG5cdFx0fSxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDx1bCBjbGFzc05hbWU9XCJtZW51XCI+XG5cdFx0XHR7bWVudUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcblx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0XHRjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gaXRlbS51cmwgPyBcImFjdGl2ZVwiIDogXCJcIn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e2l0ZW0udXJsfT5cblx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+PC9pPlxuXHRcdFx0XHRcdFx0XHR7aXRlbS50ZXh0fVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9saT5cblx0XHRcdCkpfVxuXHRcdDwvdWw+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51U2lkZWJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=