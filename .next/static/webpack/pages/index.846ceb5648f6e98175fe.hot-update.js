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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_API_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/API/Api */ "./store/API/Api.js");





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
              accessToken = _store_API_Api__WEBPACK_IMPORTED_MODULE_7__["API"].TOKEN;
              console.log(accessToken); // if no accessToken was found,then we redirect to "/" page.

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
                          url = _store_API_Api__WEBPACK_IMPORTED_MODULE_7__["API"].BASE_URL + "/whoami";
                          console.log(_store_API_Api__WEBPACK_IMPORTED_MODULE_7__["API"].TOKEN);
                          config = {
                            headers: {
                              Authorization: "Bearer " + _store_API_Api__WEBPACK_IMPORTED_MODULE_7__["API"].TOKEN
                            }
                          };
                          _context.next = 5;
                          return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url, config).then(function (res) {
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
              return whoami(_store_API_Api__WEBPACK_IMPORTED_MODULE_7__["API"].BASE_URL);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSE9DL2F1dGhSb3V0ZS5qc3giXSwibmFtZXMiOlsiYXV0aFJvdXRlIiwiV3JhcHBlZENvbXBvbmVudCIsInByb3BzIiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ2ZXJpZmllZCIsInNldFZlcmlmaWVkIiwidXNlRWZmZWN0IiwiYWNjZXNzVG9rZW4iLCJBUEkiLCJUT0tFTiIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwid2hvYW1pIiwidXJsIiwiQkFTRV9VUkwiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJhY2NvdW50IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxnQkFBRCxFQUFzQjtBQUFBOztBQUN2QyxZQUFPLFVBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNqQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURpQixvQkFFZUMsc0RBQVEsQ0FBQyxLQUFELENBRnZCO0FBQUEsUUFFVkMsUUFGVTtBQUFBLFFBRUFDLFdBRkE7O0FBSWpCQywyREFBUyxrWUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSEMseUJBREcsR0FDV0Msa0RBQUcsQ0FBQ0MsS0FEZjtBQUVNQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlKLFdBQVosRUFGTixDQUdUOztBQUhTLGtCQUlKQSxXQUpJO0FBQUE7QUFBQTtBQUFBOztBQUtSTixvQkFBTSxDQUFDVyxPQUFQLENBQWUsY0FBZjtBQUxRO0FBQUE7O0FBQUE7QUFPUjtBQUNNQyxvQkFSRTtBQUFBLCtZQVFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyw2QkFEUSxHQUNGTixrREFBRyxDQUFDTyxRQUFKLEdBQWUsU0FEYjtBQUVkTCxpQ0FBTyxDQUFDQyxHQUFSLENBQVlILGtEQUFHLENBQUNDLEtBQWhCO0FBQ01PLGdDQUhRLEdBR0M7QUFDZEMsbUNBQU8sRUFBRTtBQUNSQywyQ0FBYSxFQUFFLFlBQVlWLGtEQUFHLENBQUNDO0FBRHZCO0FBREssMkJBSEQ7QUFBQTtBQUFBLGlDQVFLVSw0Q0FBSyxDQUFDQyxHQUFOLENBQVVOLEdBQVYsRUFBZUUsTUFBZixFQUF1QkssSUFBdkIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3ZELG1DQUFPQSxHQUFHLENBQUNDLElBQVg7QUFDQSwyQkFGa0IsQ0FSTDs7QUFBQTtBQVFSQSw4QkFSUTtBQUFBLDJEQVlQQSxJQVpPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJQOztBQUFBLGdDQVFGVixNQVJFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBc0JXQSxNQUFNLENBQUNMLGtEQUFHLENBQUNPLFFBQUwsQ0F0QmpCOztBQUFBO0FBc0JGUSxrQkF0QkU7O0FBdUJSO0FBQ0Esa0JBQUlBLElBQUksQ0FBQ25CLFFBQVQsRUFBbUI7QUFDbEJDLDJCQUFXLENBQUNrQixJQUFJLENBQUNDLE9BQU4sQ0FBWDtBQUNBLGVBRkQsTUFFTztBQUNOO0FBQ0FDLDRCQUFZLENBQUNDLFVBQWIsQ0FBd0IsYUFBeEI7QUFDQXpCLHNCQUFNLENBQUNXLE9BQVAsQ0FBZSxjQUFmO0FBQ0E7O0FBOUJPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQsSUFnQ04sRUFoQ00sQ0FBVDs7QUFrQ0EsUUFBSVIsUUFBSixFQUFjO0FBQ2IsMEJBQU8scUVBQUMsZ0JBQUQsb0JBQXNCSixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDQSxLQUZELE1BRU87QUFDTixhQUFPLElBQVA7QUFDQTtBQUNELEdBM0NEO0FBQUEsWUFDZ0JFLHFEQURoQjtBQUFBO0FBNENBLENBN0NEOztBQStDZUosd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODQ2Y2ViNTY0OGY2ZTk4MTc1ZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhPQy93aXRoQXV0aC5qc3hcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi8uLi9zdG9yZS9BUEkvQXBpXCI7XHJcblxyXG5jb25zdCBhdXRoUm91dGUgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xyXG5cdHJldHVybiAocHJvcHMpID0+IHtcclxuXHRcdGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdFx0Y29uc3QgW3ZlcmlmaWVkLCBzZXRWZXJpZmllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdFx0dXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYWNjZXNzVG9rZW4gPSBBUEkuVE9LRU47XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY2Vzc1Rva2VuKVxyXG5cdFx0XHQvLyBpZiBubyBhY2Nlc3NUb2tlbiB3YXMgZm91bmQsdGhlbiB3ZSByZWRpcmVjdCB0byBcIi9cIiBwYWdlLlxyXG5cdFx0XHRpZiAoIWFjY2Vzc1Rva2VuKSB7XHJcblx0XHRcdFx0Um91dGVyLnJlcGxhY2UoXCIvYWRtaW4vbG9naW5cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gd2UgY2FsbCB0aGUgYXBpIHRoYXQgdmVyaWZpZXMgdGhlIHRva2VuLlxyXG5cdFx0XHRcdGNvbnN0IHdob2FtaSA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVybCA9IEFQSS5CQVNFX1VSTCArIFwiL3dob2FtaVwiO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coQVBJLlRPS0VOKTtcclxuXHRcdFx0XHRcdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgQVBJLlRPS0VOLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQodXJsLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCB3aG9hbWkoQVBJLkJBU0VfVVJMKTtcclxuXHRcdFx0XHQvLyBpZiB0b2tlbiB3YXMgdmVyaWZpZWQgd2Ugc2V0IHRoZSBzdGF0ZS5cclxuXHRcdFx0XHRpZiAoZGF0YS52ZXJpZmllZCkge1xyXG5cdFx0XHRcdFx0c2V0VmVyaWZpZWQoZGF0YS5hY2NvdW50KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHRva2VuIHdhcyBmcmF1ZCB3ZSBmaXJzdCByZW1vdmUgaXQgZnJvbSBsb2NhbFN0b3JhZ2UgYW5kIHRoZW4gcmVkaXJlY3QgdG8gXCIvXCJcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYWNjZXNzVG9rZW5cIik7XHJcblx0XHRcdFx0XHRSb3V0ZXIucmVwbGFjZShcIi9hZG1pbi9sb2dpblwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sIFtdKTtcclxuXHJcblx0XHRpZiAodmVyaWZpZWQpIHtcclxuXHRcdFx0cmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz47XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aFJvdXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9