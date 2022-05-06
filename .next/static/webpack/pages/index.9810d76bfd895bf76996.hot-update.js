webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/HOC/authRoute.jsx":
/*!*********************************!*\
  !*** ./pages/HOC/authRoute.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_API_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/API/Api */ "./store/API/Api.js");





var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\pages\\HOC\\authRoute.jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// HOC/withAuth.jsx




var authRoute = function authRoute(WrappedComponent) {
  var _s = $RefreshSig$();

  return _s(function (props) {
    _s();

    var Router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
        verified = _useState[0],
        setVerified = _useState[1];

    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])( /*#__PURE__*/Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var accessToken, whoami, data;
      return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              accessToken = _store_API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN;
              console; // if no accessToken was found,then we redirect to "/" page.

              if (accessToken) {
                _context2.next = 6;
                break;
              }

              Router.replace("/admin/login");
              _context2.next = 11;
              break;

            case 6:
              // we call the api that verifies the token.
              whoami = /*#__PURE__*/function () {
                var _ref2 = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                  var url, config, data;
                  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          url = _store_API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].BASE_URL + "/whoami";
                          console.log(_store_API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN);
                          config = {
                            headers: {
                              Authorization: "Bearer " + _store_API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN
                            }
                          };
                          _context.next = 5;
                          return axios.get(url, config).then(function (res) {
                            return res.data;
                          });

                        case 5:
                          data = _context.sent;
                          return _context.abrupt("return", data);

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function whoami() {
                  return _ref2.apply(this, arguments);
                };
              }();

              _context2.next = 9;
              return whoami(_store_API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].BASE_URL);

            case 9:
              data = _context2.sent;

              // if token was verified we set the state.
              if (data.verified) {
                setVerified(data.account);
              } else {
                // If the token was fraud we first remove it from localStorage and then redirect to "/"
                localStorage.removeItem("accessToken");
                Router.replace("/admin/login");
              }

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })), []);

    if (verified) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(WrappedComponent, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, _this);
    } else {
      return null;
    }
  }, "irrnzWYVzfxH8jqgFP57yP7xP7c=", false, function () {
    return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (authRoute);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSE9DL2F1dGhSb3V0ZS5qc3giXSwibmFtZXMiOlsiYXV0aFJvdXRlIiwiV3JhcHBlZENvbXBvbmVudCIsInByb3BzIiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ2ZXJpZmllZCIsInNldFZlcmlmaWVkIiwidXNlRWZmZWN0IiwiYWNjZXNzVG9rZW4iLCJBUEkiLCJUT0tFTiIsImNvbnNvbGUiLCJyZXBsYWNlIiwid2hvYW1pIiwidXJsIiwiQkFTRV9VUkwiLCJsb2ciLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJhY2NvdW50IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLGdCQUFELEVBQXNCO0FBQUE7O0FBQ3ZDLFlBQU8sVUFBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ2pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGlCLG9CQUVlQyxzREFBUSxDQUFDLEtBQUQsQ0FGdkI7QUFBQSxRQUVWQyxRQUZVO0FBQUEsUUFFQUMsV0FGQTs7QUFJakJDLDJEQUFTLGtZQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIQyx5QkFERyxHQUNXQyxrREFBRyxDQUFDQyxLQURmO0FBRU1DLHFCQUFPLENBRmIsQ0FHVDs7QUFIUyxrQkFJSkgsV0FKSTtBQUFBO0FBQUE7QUFBQTs7QUFLUk4sb0JBQU0sQ0FBQ1UsT0FBUCxDQUFlLGNBQWY7QUFMUTtBQUFBOztBQUFBO0FBT1I7QUFDTUMsb0JBUkU7QUFBQSwrWUFRTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsNkJBRFEsR0FDRkwsa0RBQUcsQ0FBQ00sUUFBSixHQUFlLFNBRGI7QUFFZEosaUNBQU8sQ0FBQ0ssR0FBUixDQUFZUCxrREFBRyxDQUFDQyxLQUFoQjtBQUNNTyxnQ0FIUSxHQUdDO0FBQ2RDLG1DQUFPLEVBQUU7QUFDUkMsMkNBQWEsRUFBRSxZQUFZVixrREFBRyxDQUFDQztBQUR2QjtBQURLLDJCQUhEO0FBQUE7QUFBQSxpQ0FRS1UsS0FBSyxDQUFDQyxHQUFOLENBQVVQLEdBQVYsRUFBZUcsTUFBZixFQUF1QkssSUFBdkIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3ZELG1DQUFPQSxHQUFHLENBQUNDLElBQVg7QUFDQSwyQkFGa0IsQ0FSTDs7QUFBQTtBQVFSQSw4QkFSUTtBQUFBLDJEQVlQQSxJQVpPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJQOztBQUFBLGdDQVFGWCxNQVJFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBc0JXQSxNQUFNLENBQUNKLGtEQUFHLENBQUNNLFFBQUwsQ0F0QmpCOztBQUFBO0FBc0JGUyxrQkF0QkU7O0FBdUJSO0FBQ0Esa0JBQUlBLElBQUksQ0FBQ25CLFFBQVQsRUFBbUI7QUFDbEJDLDJCQUFXLENBQUNrQixJQUFJLENBQUNDLE9BQU4sQ0FBWDtBQUNBLGVBRkQsTUFFTztBQUNOO0FBQ0FDLDRCQUFZLENBQUNDLFVBQWIsQ0FBd0IsYUFBeEI7QUFDQXpCLHNCQUFNLENBQUNVLE9BQVAsQ0FBZSxjQUFmO0FBQ0E7O0FBOUJPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQsSUFnQ04sRUFoQ00sQ0FBVDs7QUFrQ0EsUUFBSVAsUUFBSixFQUFjO0FBQ2IsMEJBQU8scUVBQUMsZ0JBQUQsb0JBQXNCSixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDQSxLQUZELE1BRU87QUFDTixhQUFPLElBQVA7QUFDQTtBQUNELEdBM0NEO0FBQUEsWUFDZ0JFLHFEQURoQjtBQUFBO0FBNENBLENBN0NEOztBQStDZUosd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTgxMGQ3NmJmZDg5NWJmNzY5OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhPQy93aXRoQXV0aC5qc3hcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi8uLi9zdG9yZS9BUEkvQXBpXCI7XHJcblxyXG5jb25zdCBhdXRoUm91dGUgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xyXG5cdHJldHVybiAocHJvcHMpID0+IHtcclxuXHRcdGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdFx0Y29uc3QgW3ZlcmlmaWVkLCBzZXRWZXJpZmllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdFx0dXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYWNjZXNzVG9rZW4gPSBBUEkuVE9LRU47XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGVcclxuXHRcdFx0Ly8gaWYgbm8gYWNjZXNzVG9rZW4gd2FzIGZvdW5kLHRoZW4gd2UgcmVkaXJlY3QgdG8gXCIvXCIgcGFnZS5cclxuXHRcdFx0aWYgKCFhY2Nlc3NUb2tlbikge1xyXG5cdFx0XHRcdFJvdXRlci5yZXBsYWNlKFwiL2FkbWluL2xvZ2luXCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHdlIGNhbGwgdGhlIGFwaSB0aGF0IHZlcmlmaWVzIHRoZSB0b2tlbi5cclxuXHRcdFx0XHRjb25zdCB3aG9hbWkgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB1cmwgPSBBUEkuQkFTRV9VUkwgKyBcIi93aG9hbWlcIjtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKEFQSS5UT0tFTik7XHJcblx0XHRcdFx0XHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIEFQSS5UT0tFTixcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgd2hvYW1pKEFQSS5CQVNFX1VSTCk7XHJcblx0XHRcdFx0Ly8gaWYgdG9rZW4gd2FzIHZlcmlmaWVkIHdlIHNldCB0aGUgc3RhdGUuXHJcblx0XHRcdFx0aWYgKGRhdGEudmVyaWZpZWQpIHtcclxuXHRcdFx0XHRcdHNldFZlcmlmaWVkKGRhdGEuYWNjb3VudCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIElmIHRoZSB0b2tlbiB3YXMgZnJhdWQgd2UgZmlyc3QgcmVtb3ZlIGl0IGZyb20gbG9jYWxTdG9yYWdlIGFuZCB0aGVuIHJlZGlyZWN0IHRvIFwiL1wiXHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFjY2Vzc1Rva2VuXCIpO1xyXG5cdFx0XHRcdFx0Um91dGVyLnJlcGxhY2UoXCIvYWRtaW4vbG9naW5cIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LCBbXSk7XHJcblxyXG5cdFx0aWYgKHZlcmlmaWVkKSB7XHJcblx0XHRcdHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhSb3V0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==