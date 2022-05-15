webpackHotUpdate_N_E("pages/admin/login",{

/***/ "./pages/HOC/protectedRoute.jsx":
/*!**************************************!*\
  !*** ./pages/HOC/protectedRoute.jsx ***!
  \**************************************/
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
/* harmony import */ var _store_API_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/API/Api */ "./store/API/Api.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\pages\\HOC\\protectedRoute.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function protectedRoute(WrappedComponent) {
  var _this = this,
      _s = $RefreshSig$();

  return _s(function (props) {
    _s();

    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

    var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
      return state.auth;
    }),
        jwt = _useSelector.jwt;

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
        isTokenVerified = _useState[0],
        setIsTokenVerified = _useState[1];

    var accessToken = _store_API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN;
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
      var whoami = /*#__PURE__*/function () {
        var _ref = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(token) {
          var url, config, data;
          return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  url = _store_API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].BASE_URL + "/whoami";
                  config = {
                    headers: {
                      Authorization: "Bearer " + token
                    }
                  };
                  _context.next = 4;
                  return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(url, config).then(function (res) {
                    setIsTokenVerified(true);
                    return res.data;
                  })["catch"](function (err) {
                    setIsTokenVerified(false);
                    localStorage.removeItem("accessToken");
                    router.push("/admin/login");
                  });

                case 4:
                  data = _context.sent;
                  return _context.abrupt("return", data);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function whoami(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      if (!jwt) {
        router.push("/admin/login");
      } else {
        console.log(jwt.replace(/(['"])/g, ""));
        whoami(jwt.replace(/(['"])/g, ""));
      }
    }, [jwt]);

    if (isTokenVerified) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(WrappedComponent, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, _this);
    } else {
      return null;
    }
  }, "6pOd7OYyyjclyApBGw5VJeDzeLU=", false, function () {
    return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
  });
}

/* harmony default export */ __webpack_exports__["default"] = (protectedRoute);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSE9DL3Byb3RlY3RlZFJvdXRlLmpzeCJdLCJuYW1lcyI6WyJwcm90ZWN0ZWRSb3V0ZSIsIldyYXBwZWRDb21wb25lbnQiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhdXRoIiwiand0IiwidXNlU3RhdGUiLCJpc1Rva2VuVmVyaWZpZWQiLCJzZXRJc1Rva2VuVmVyaWZpZWQiLCJhY2Nlc3NUb2tlbiIsIkFQSSIsIlRPS0VOIiwidXNlRWZmZWN0Iiwid2hvYW1pIiwidG9rZW4iLCJ1cmwiLCJCQVNFX1VSTCIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxnQkFBeEIsRUFBMEM7QUFBQTtBQUFBOztBQUN6QyxZQUFPLFVBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNqQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURpQix1QkFFREMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsYUFBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEtBQUQsQ0FGVjtBQUFBLFFBRVRDLEdBRlMsZ0JBRVRBLEdBRlM7O0FBQUEsb0JBSTZCQyxzREFBUSxDQUFDLEtBQUQsQ0FKckM7QUFBQSxRQUlWQyxlQUpVO0FBQUEsUUFJT0Msa0JBSlA7O0FBS2pCLFFBQU1DLFdBQVcsR0FBR0Msa0RBQUcsQ0FBQ0MsS0FBeEI7QUFFQUMsMkRBQVMsQ0FBQyxZQUFNO0FBQ2YsVUFBTUMsTUFBTTtBQUFBLHNZQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyxxQkFEUSxHQUNGTCxrREFBRyxDQUFDTSxRQUFKLEdBQWUsU0FEYjtBQUVSQyx3QkFGUSxHQUVDO0FBQ2RDLDJCQUFPLEVBQUU7QUFDUkMsbUNBQWEsRUFBRSxZQUFZTDtBQURuQjtBQURLLG1CQUZEO0FBQUE7QUFBQSx5QkFPS00sNENBQUssQ0FDdEJDLEdBRGlCLENBQ2JOLEdBRGEsRUFDUkUsTUFEUSxFQUVqQkssSUFGaUIsQ0FFWixVQUFDQyxHQUFELEVBQVM7QUFDZGYsc0NBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBLDJCQUFPZSxHQUFHLENBQUNDLElBQVg7QUFDQSxtQkFMaUIsV0FNWCxVQUFDQyxHQUFELEVBQVM7QUFDZmpCLHNDQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFDQWtCLGdDQUFZLENBQUNDLFVBQWIsQ0FBd0IsYUFBeEI7QUFDQTNCLDBCQUFNLENBQUM0QixJQUFQLENBQVksY0FBWjtBQUNBLG1CQVZpQixDQVBMOztBQUFBO0FBT1JKLHNCQVBRO0FBQUEsbURBbUJQQSxJQW5CTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFIOztBQUFBLHdCQUFOWCxNQUFNO0FBQUE7QUFBQTtBQUFBLFNBQVo7O0FBc0JBLFVBQUksQ0FBQ1IsR0FBTCxFQUFVO0FBQ1RMLGNBQU0sQ0FBQzRCLElBQVAsQ0FBWSxjQUFaO0FBQ0EsT0FGRCxNQUVPO0FBQ05DLGVBQU8sQ0FBQ0MsR0FBUixDQUFZekIsR0FBRyxDQUFDMEIsT0FBSixDQUFZLFNBQVosRUFBdUIsRUFBdkIsQ0FBWjtBQUNBbEIsY0FBTSxDQUFDUixHQUFHLENBQUMwQixPQUFKLENBQVksU0FBWixFQUF1QixFQUF2QixDQUFELENBQU47QUFDQTtBQUNELEtBN0JRLEVBNkJOLENBQUMxQixHQUFELENBN0JNLENBQVQ7O0FBK0JBLFFBQUlFLGVBQUosRUFBcUI7QUFDcEIsMEJBQU8scUVBQUMsZ0JBQUQsb0JBQXNCUixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDQSxLQUZELE1BRU87QUFDTixhQUFPLElBQVA7QUFDQTtBQUNELEdBM0NEO0FBQUEsWUFDZ0JFLHFEQURoQixFQUVpQkMsdURBRmpCO0FBQUE7QUE0Q0E7O0FBRWNMLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2xvZ2luLmViNzUyNTlkYmIzM2YyYTVkOTk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQVBJLCB3aG9hbWkgfSBmcm9tIFwifi9zdG9yZS9BUEkvQXBpXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmZ1bmN0aW9uIHByb3RlY3RlZFJvdXRlKFdyYXBwZWRDb21wb25lbnQpIHtcclxuXHRyZXR1cm4gKHByb3BzKSA9PiB7XHJcblx0XHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRcdGNvbnN0IHsgand0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG5cclxuXHRcdGNvbnN0IFtpc1Rva2VuVmVyaWZpZWQsIHNldElzVG9rZW5WZXJpZmllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0XHRjb25zdCBhY2Nlc3NUb2tlbiA9IEFQSS5UT0tFTjtcclxuXHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB3aG9hbWkgPSBhc3luYyAodG9rZW4pID0+IHtcclxuXHRcdFx0XHRjb25zdCB1cmwgPSBBUEkuQkFTRV9VUkwgKyBcIi93aG9hbWlcIjtcclxuXHRcdFx0XHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zXHJcblx0XHRcdFx0XHQuZ2V0KHVybCwgY29uZmlnKVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRJc1Rva2VuVmVyaWZpZWQodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXMuZGF0YTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRJc1Rva2VuVmVyaWZpZWQoZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFjY2Vzc1Rva2VuXCIpO1xyXG5cdFx0XHRcdFx0XHRyb3V0ZXIucHVzaChcIi9hZG1pbi9sb2dpblwiKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGlmICghand0KSB7XHJcblx0XHRcdFx0cm91dGVyLnB1c2goXCIvYWRtaW4vbG9naW5cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coand0LnJlcGxhY2UoLyhbJ1wiXSkvZywgXCJcIikpO1xyXG5cdFx0XHRcdHdob2FtaShqd3QucmVwbGFjZSgvKFsnXCJdKS9nLCBcIlwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH0sIFtqd3RdKTtcclxuXHJcblx0XHRpZiAoaXNUb2tlblZlcmlmaWVkKSB7XHJcblx0XHRcdHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvdGVjdGVkUm91dGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=