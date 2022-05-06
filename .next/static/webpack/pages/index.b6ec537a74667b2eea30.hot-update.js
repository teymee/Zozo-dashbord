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
        lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSE9DL2F1dGhSb3V0ZS5qc3giXSwibmFtZXMiOlsiYXV0aFJvdXRlIiwiV3JhcHBlZENvbXBvbmVudCIsInByb3BzIiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ2ZXJpZmllZCIsInNldFZlcmlmaWVkIiwidXNlRWZmZWN0IiwiYWNjZXNzVG9rZW4iLCJBUEkiLCJUT0tFTiIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwid2hvYW1pIiwidXJsIiwiQkFTRV9VUkwiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJhY2NvdW50IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxnQkFBRCxFQUFzQjtBQUFBOztBQUN2QyxZQUFPLFVBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNqQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURpQixvQkFFZUMsc0RBQVEsQ0FBQyxLQUFELENBRnZCO0FBQUEsUUFFVkMsUUFGVTtBQUFBLFFBRUFDLFdBRkE7O0FBSWpCQywyREFBUyxrWUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSEMseUJBREcsR0FDV0Msa0RBQUcsQ0FBQ0MsS0FEZixFQUdUOztBQUhTLGtCQUlKRixXQUpJO0FBQUE7QUFBQTtBQUFBOztBQUtSTixvQkFBTSxDQUFDUyxPQUFQLENBQWUsY0FBZjtBQUNvQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxXQUFaO0FBTlo7QUFBQTs7QUFBQTtBQVFSO0FBQ01NLG9CQVRFO0FBQUEsK1lBU087QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLDZCQURRLEdBQ0ZOLGtEQUFHLENBQUNPLFFBQUosR0FBZSxTQURiO0FBRWRKLGlDQUFPLENBQUNDLEdBQVIsQ0FBWUosa0RBQUcsQ0FBQ0MsS0FBaEI7QUFDTU8sZ0NBSFEsR0FHQztBQUNkQyxtQ0FBTyxFQUFFO0FBQ1JDLDJDQUFhLEVBQUUsWUFBWVYsa0RBQUcsQ0FBQ0M7QUFEdkI7QUFESywyQkFIRDtBQUFBO0FBQUEsaUNBUUtVLDRDQUFLLENBQUNDLEdBQU4sQ0FBVU4sR0FBVixFQUFlRSxNQUFmLEVBQXVCSyxJQUF2QixDQUE0QixVQUFDQyxHQUFELEVBQVM7QUFDdkQsbUNBQU9BLEdBQUcsQ0FBQ0MsSUFBWDtBQUNBLDJCQUZrQixDQVJMOztBQUFBO0FBUVJBLDhCQVJRO0FBQUEsMkRBWVBBLElBWk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVFA7O0FBQUEsZ0NBU0ZWLE1BVEU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkF1QldBLE1BQU0sQ0FBQ0wsa0RBQUcsQ0FBQ08sUUFBTCxDQXZCakI7O0FBQUE7QUF1QkZRLGtCQXZCRTs7QUF3QlI7QUFDQSxrQkFBSUEsSUFBSSxDQUFDbkIsUUFBVCxFQUFtQjtBQUNsQkMsMkJBQVcsQ0FBQ2tCLElBQUksQ0FBQ0MsT0FBTixDQUFYO0FBQ0EsZUFGRCxNQUVPO0FBQ047QUFDQUMsNEJBQVksQ0FBQ0MsVUFBYixDQUF3QixhQUF4QjtBQUNBekIsc0JBQU0sQ0FBQ1MsT0FBUCxDQUFlLGNBQWY7QUFDQTs7QUEvQk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRCxJQWlDTixFQWpDTSxDQUFUOztBQW1DQSxRQUFJTixRQUFKLEVBQWM7QUFDYiwwQkFBTyxxRUFBQyxnQkFBRCxvQkFBc0JKLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNBLEtBRkQsTUFFTztBQUNOLGFBQU8sSUFBUDtBQUNBO0FBQ0QsR0E1Q0Q7QUFBQSxZQUNnQkUscURBRGhCO0FBQUE7QUE2Q0EsQ0E5Q0Q7O0FBZ0RlSix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNmVjNTM3YTc0NjY3YjJlZWEzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSE9DL3dpdGhBdXRoLmpzeFxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uLy4uL3N0b3JlL0FQSS9BcGlcIjtcclxuXHJcbmNvbnN0IGF1dGhSb3V0ZSA9IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XHJcblx0cmV0dXJuIChwcm9wcykgPT4ge1xyXG5cdFx0Y29uc3QgUm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0XHRjb25zdCBbdmVyaWZpZWQsIHNldFZlcmlmaWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0XHR1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY2Nlc3NUb2tlbiA9IEFQSS5UT0tFTjtcclxuICAgICAgICAgICAgICAgXHJcblx0XHRcdC8vIGlmIG5vIGFjY2Vzc1Rva2VuIHdhcyBmb3VuZCx0aGVuIHdlIHJlZGlyZWN0IHRvIFwiL1wiIHBhZ2UuXHJcblx0XHRcdGlmICghYWNjZXNzVG9rZW4pIHtcclxuXHRcdFx0XHRSb3V0ZXIucmVwbGFjZShcIi9hZG1pbi9sb2dpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjZXNzVG9rZW4pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gd2UgY2FsbCB0aGUgYXBpIHRoYXQgdmVyaWZpZXMgdGhlIHRva2VuLlxyXG5cdFx0XHRcdGNvbnN0IHdob2FtaSA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVybCA9IEFQSS5CQVNFX1VSTCArIFwiL3dob2FtaVwiO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coQVBJLlRPS0VOKTtcclxuXHRcdFx0XHRcdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgQVBJLlRPS0VOLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQodXJsLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCB3aG9hbWkoQVBJLkJBU0VfVVJMKTtcclxuXHRcdFx0XHQvLyBpZiB0b2tlbiB3YXMgdmVyaWZpZWQgd2Ugc2V0IHRoZSBzdGF0ZS5cclxuXHRcdFx0XHRpZiAoZGF0YS52ZXJpZmllZCkge1xyXG5cdFx0XHRcdFx0c2V0VmVyaWZpZWQoZGF0YS5hY2NvdW50KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHRva2VuIHdhcyBmcmF1ZCB3ZSBmaXJzdCByZW1vdmUgaXQgZnJvbSBsb2NhbFN0b3JhZ2UgYW5kIHRoZW4gcmVkaXJlY3QgdG8gXCIvXCJcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYWNjZXNzVG9rZW5cIik7XHJcblx0XHRcdFx0XHRSb3V0ZXIucmVwbGFjZShcIi9hZG1pbi9sb2dpblwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sIFtdKTtcclxuXHJcblx0XHRpZiAodmVyaWZpZWQpIHtcclxuXHRcdFx0cmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz47XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aFJvdXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9