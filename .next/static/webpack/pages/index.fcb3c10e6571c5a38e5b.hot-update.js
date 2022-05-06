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
              accessToken = _store_API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN; // if no accessToken was found,then we redirect to "/" page.

              if (accessToken) {
                _context2.next = 5;
                break;
              }

              Router.replace("/admin/login");
              _context2.next = 10;
              break;

            case 5:
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

              _context2.next = 8;
              return whoami(_store_API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].BASE_URL);

            case 8:
              data = _context2.sent;

              // if token was verified we set the state.
              if (data.verified) {
                setVerified(data.account);
              } else {
                // If the token was fraud we first remove it from localStorage and then redirect to "/"
                localStorage.removeItem("accessToken");
                Router.replace("/admin/login");
              }

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })), []);

    if (verified) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(WrappedComponent, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 14
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSE9DL2F1dGhSb3V0ZS5qc3giXSwibmFtZXMiOlsiYXV0aFJvdXRlIiwiV3JhcHBlZENvbXBvbmVudCIsInByb3BzIiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ2ZXJpZmllZCIsInNldFZlcmlmaWVkIiwidXNlRWZmZWN0IiwiYWNjZXNzVG9rZW4iLCJBUEkiLCJUT0tFTiIsInJlcGxhY2UiLCJ3aG9hbWkiLCJ1cmwiLCJCQVNFX1VSTCIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJhY2NvdW50IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLGdCQUFELEVBQXNCO0FBQUE7O0FBQ3RDLFlBQU8sVUFBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ2hCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGdCLG9CQUVnQkMsc0RBQVEsQ0FBQyxLQUFELENBRnhCO0FBQUEsUUFFVEMsUUFGUztBQUFBLFFBRUNDLFdBRkQ7O0FBSWhCQywyREFBUyxrWUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRkMseUJBREUsR0FDWUMsa0RBQUcsQ0FBQ0MsS0FEaEIsRUFFUjs7QUFGUSxrQkFHSEYsV0FIRztBQUFBO0FBQUE7QUFBQTs7QUFJTk4sb0JBQU0sQ0FBQ1MsT0FBUCxDQUFlLGNBQWY7QUFKTTtBQUFBOztBQUFBO0FBTU47QUFDTUMsb0JBUEE7QUFBQSwrWUFPUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTEMsNkJBREssR0FDQ0osa0RBQUcsQ0FBQ0ssUUFBSixHQUFhLFNBRGQ7QUFFWEMsaUNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxrREFBRyxDQUFDQyxLQUFoQjtBQUNNTyxnQ0FISyxHQUdJO0FBQ1RDLG1DQUFPLEVBQUU7QUFDSEMsMkNBQWEsRUFBRSxZQUFZVixrREFBRyxDQUFDQztBQUQ1QjtBQURBLDJCQUhKO0FBQUE7QUFBQSxpQ0FRUVUsS0FBSyxDQUFDQyxHQUFOLENBQVVSLEdBQVYsRUFBZUksTUFBZixFQUF1QkssSUFBdkIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2xELG1DQUFPQSxHQUFHLENBQUNDLElBQVg7QUFDTCwyQkFGa0IsQ0FSUjs7QUFBQTtBQVFMQSw4QkFSSztBQUFBLDJEQVlKQSxJQVpJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBUOztBQUFBLGdDQU9BWixNQVBBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBcUJhQSxNQUFNLENBQUNILGtEQUFHLENBQUNLLFFBQUwsQ0FyQm5COztBQUFBO0FBcUJBVSxrQkFyQkE7O0FBc0JOO0FBQ0Esa0JBQUlBLElBQUksQ0FBQ25CLFFBQVQsRUFBbUI7QUFDakJDLDJCQUFXLENBQUNrQixJQUFJLENBQUNDLE9BQU4sQ0FBWDtBQUNELGVBRkQsTUFFTztBQUNMO0FBQ0FDLDRCQUFZLENBQUNDLFVBQWIsQ0FBd0IsYUFBeEI7QUFDQXpCLHNCQUFNLENBQUNTLE9BQVAsQ0FBZSxjQUFmO0FBQ0Q7O0FBN0JLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQsSUErQk4sRUEvQk0sQ0FBVDs7QUFpQ0EsUUFBSU4sUUFBSixFQUFjO0FBQ1osMEJBQU8scUVBQUMsZ0JBQUQsb0JBQXNCSixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLElBQVA7QUFDRDtBQUNGLEdBMUNEO0FBQUEsWUFDaUJFLHFEQURqQjtBQUFBO0FBMkNELENBNUNEOztBQThDZUosd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmNiM2MxMGU2NTcxYzVhMzhlNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhPQy93aXRoQXV0aC5qc3hcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi8uLi9zdG9yZS9BUEkvQXBpXCI7XHJcblxyXG5jb25zdCBhdXRoUm91dGUgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xyXG4gIHJldHVybiAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3ZlcmlmaWVkLCBzZXRWZXJpZmllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBBUEkuVE9LRU47XHJcbiAgICAgIC8vIGlmIG5vIGFjY2Vzc1Rva2VuIHdhcyBmb3VuZCx0aGVuIHdlIHJlZGlyZWN0IHRvIFwiL1wiIHBhZ2UuXHJcbiAgICAgIGlmICghYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9hZG1pbi9sb2dpblwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB3ZSBjYWxsIHRoZSBhcGkgdGhhdCB2ZXJpZmllcyB0aGUgdG9rZW4uXHJcbiAgICAgICAgY29uc3Qgd2hvYW1pID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBBUEkuQkFTRV9VUkwrXCIvd2hvYW1pXCI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEFQSS5UT0tFTilcclxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgQVBJLlRPS0VOLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3aG9hbWkoQVBJLkJBU0VfVVJMKTtcclxuICAgICAgICAvLyBpZiB0b2tlbiB3YXMgdmVyaWZpZWQgd2Ugc2V0IHRoZSBzdGF0ZS5cclxuICAgICAgICBpZiAoZGF0YS52ZXJpZmllZCkge1xyXG4gICAgICAgICAgc2V0VmVyaWZpZWQoZGF0YS5hY2NvdW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIHRva2VuIHdhcyBmcmF1ZCB3ZSBmaXJzdCByZW1vdmUgaXQgZnJvbSBsb2NhbFN0b3JhZ2UgYW5kIHRoZW4gcmVkaXJlY3QgdG8gXCIvXCJcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9hZG1pbi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgaWYgKHZlcmlmaWVkKSB7XHJcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhSb3V0ZTsiXSwic291cmNlUm9vdCI6IiJ9