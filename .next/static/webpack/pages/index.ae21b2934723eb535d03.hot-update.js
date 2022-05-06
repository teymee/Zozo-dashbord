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
              accessToken = _store_API_Api__WEBPACK_IMPORTED_MODULE_7__["API"].TOKEN; // if no accessToken was found,then we redirect to "/" page.

              if (accessToken) {
                _context2.next = 6;
                break;
              }

              Router.replace("/admin/login");
              console.log(accessToken);
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
                          })["catch"]();

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
                setVerified(true);
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
        lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSE9DL2F1dGhSb3V0ZS5qc3giXSwibmFtZXMiOlsiYXV0aFJvdXRlIiwiV3JhcHBlZENvbXBvbmVudCIsInByb3BzIiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ2ZXJpZmllZCIsInNldFZlcmlmaWVkIiwidXNlRWZmZWN0IiwiYWNjZXNzVG9rZW4iLCJBUEkiLCJUT0tFTiIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwid2hvYW1pIiwidXJsIiwiQkFTRV9VUkwiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLGdCQUFELEVBQXNCO0FBQUE7O0FBQ3ZDLFlBQU8sVUFBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ2pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGlCLG9CQUVlQyxzREFBUSxDQUFDLEtBQUQsQ0FGdkI7QUFBQSxRQUVWQyxRQUZVO0FBQUEsUUFFQUMsV0FGQTs7QUFJakJDLDJEQUFTLGtZQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIQyx5QkFERyxHQUNXQyxrREFBRyxDQUFDQyxLQURmLEVBR1Q7O0FBSFMsa0JBSUpGLFdBSkk7QUFBQTtBQUFBO0FBQUE7O0FBS1JOLG9CQUFNLENBQUNTLE9BQVAsQ0FBZSxjQUFmO0FBQ29CQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlMLFdBQVo7QUFOWjtBQUFBOztBQUFBO0FBUVI7QUFDTU0sb0JBVEU7QUFBQSwrWUFTTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsNkJBRFEsR0FDRk4sa0RBQUcsQ0FBQ08sUUFBSixHQUFlLFNBRGI7QUFFZEosaUNBQU8sQ0FBQ0MsR0FBUixDQUFZSixrREFBRyxDQUFDQyxLQUFoQjtBQUNNTyxnQ0FIUSxHQUdDO0FBQ2RDLG1DQUFPLEVBQUU7QUFDUkMsMkNBQWEsRUFBRSxZQUFZVixrREFBRyxDQUFDQztBQUR2QjtBQURLLDJCQUhEO0FBQUE7QUFBQSxpQ0FRS1UsNENBQUssQ0FBQ0MsR0FBTixDQUFVTixHQUFWLEVBQWVFLE1BQWYsRUFBdUJLLElBQXZCLENBQTRCLFVBQUNDLEdBQUQsRUFBUztBQUN2RCxtQ0FBT0EsR0FBRyxDQUFDQyxJQUFYO0FBQ0EsMkJBRmtCLFlBUkw7O0FBQUE7QUFRUkEsOEJBUlE7QUFBQSwyREFZUEEsSUFaTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUUDs7QUFBQSxnQ0FTRlYsTUFURTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQXVCV0EsTUFBTSxDQUFDTCxrREFBRyxDQUFDTyxRQUFMLENBdkJqQjs7QUFBQTtBQXVCRlEsa0JBdkJFOztBQXdCUjtBQUNBLGtCQUFJQSxJQUFJLENBQUNuQixRQUFULEVBQW1CO0FBQ2xCQywyQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBLGVBRkQsTUFFTztBQUNOO0FBQ0FtQiw0QkFBWSxDQUFDQyxVQUFiLENBQXdCLGFBQXhCO0FBQ0F4QixzQkFBTSxDQUFDUyxPQUFQLENBQWUsY0FBZjtBQUNBOztBQS9CTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFELElBaUNOLEVBakNNLENBQVQ7O0FBbUNBLFFBQUlOLFFBQUosRUFBYztBQUViLDBCQUFPLHFFQUFDLGdCQUFELG9CQUFzQkosS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0EsS0FIRCxNQUdPO0FBQ04sYUFBTyxJQUFQO0FBQ0E7QUFDRCxHQTdDRDtBQUFBLFlBQ2dCRSxxREFEaEI7QUFBQTtBQThDQSxDQS9DRDs7QUFpRGVKLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFlMjFiMjkzNDcyM2ViNTM1ZDAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIT0Mvd2l0aEF1dGguanN4XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vLi4vc3RvcmUvQVBJL0FwaVwiO1xyXG5cclxuY29uc3QgYXV0aFJvdXRlID0gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcclxuXHRyZXR1cm4gKHByb3BzKSA9PiB7XHJcblx0XHRjb25zdCBSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRcdGNvbnN0IFt2ZXJpZmllZCwgc2V0VmVyaWZpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRcdHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFjY2Vzc1Rva2VuID0gQVBJLlRPS0VOO1xyXG4gICAgICAgICAgICAgICBcclxuXHRcdFx0Ly8gaWYgbm8gYWNjZXNzVG9rZW4gd2FzIGZvdW5kLHRoZW4gd2UgcmVkaXJlY3QgdG8gXCIvXCIgcGFnZS5cclxuXHRcdFx0aWYgKCFhY2Nlc3NUb2tlbikge1xyXG5cdFx0XHRcdFJvdXRlci5yZXBsYWNlKFwiL2FkbWluL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY2Nlc3NUb2tlbilcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyB3ZSBjYWxsIHRoZSBhcGkgdGhhdCB2ZXJpZmllcyB0aGUgdG9rZW4uXHJcblx0XHRcdFx0Y29uc3Qgd2hvYW1pID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgdXJsID0gQVBJLkJBU0VfVVJMICsgXCIvd2hvYW1pXCI7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhBUEkuVE9LRU4pO1xyXG5cdFx0XHRcdFx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBBUEkuVE9LRU4sXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXMuZGF0YTtcclxuXHRcdFx0XHRcdH0pLmNhdGNoKClcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCB3aG9hbWkoQVBJLkJBU0VfVVJMKTtcclxuXHRcdFx0XHQvLyBpZiB0b2tlbiB3YXMgdmVyaWZpZWQgd2Ugc2V0IHRoZSBzdGF0ZS5cclxuXHRcdFx0XHRpZiAoZGF0YS52ZXJpZmllZCkge1xyXG5cdFx0XHRcdFx0c2V0VmVyaWZpZWQodHJ1ZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIElmIHRoZSB0b2tlbiB3YXMgZnJhdWQgd2UgZmlyc3QgcmVtb3ZlIGl0IGZyb20gbG9jYWxTdG9yYWdlIGFuZCB0aGVuIHJlZGlyZWN0IHRvIFwiL1wiXHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFjY2Vzc1Rva2VuXCIpO1xyXG5cdFx0XHRcdFx0Um91dGVyLnJlcGxhY2UoXCIvYWRtaW4vbG9naW5cIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LCBbXSk7XHJcblxyXG5cdFx0aWYgKHZlcmlmaWVkKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoUm91dGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=