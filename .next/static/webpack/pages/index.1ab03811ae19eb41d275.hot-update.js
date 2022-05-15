webpackHotUpdate_N_E("pages/index",{

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
        router.push("/merchant/login");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSE9DL3Byb3RlY3RlZFJvdXRlLmpzeCJdLCJuYW1lcyI6WyJwcm90ZWN0ZWRSb3V0ZSIsIldyYXBwZWRDb21wb25lbnQiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhdXRoIiwiand0IiwidXNlU3RhdGUiLCJpc1Rva2VuVmVyaWZpZWQiLCJzZXRJc1Rva2VuVmVyaWZpZWQiLCJhY2Nlc3NUb2tlbiIsIkFQSSIsIlRPS0VOIiwidXNlRWZmZWN0Iiwid2hvYW1pIiwidG9rZW4iLCJ1cmwiLCJCQVNFX1VSTCIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxnQkFBeEIsRUFBMEM7QUFBQTtBQUFBOztBQUN6QyxZQUFPLFVBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNqQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURpQix1QkFFREMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsYUFBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEtBQUQsQ0FGVjtBQUFBLFFBRVRDLEdBRlMsZ0JBRVRBLEdBRlM7O0FBQUEsb0JBSTZCQyxzREFBUSxDQUFDLEtBQUQsQ0FKckM7QUFBQSxRQUlWQyxlQUpVO0FBQUEsUUFJT0Msa0JBSlA7O0FBS2pCLFFBQU1DLFdBQVcsR0FBR0Msa0RBQUcsQ0FBQ0MsS0FBeEI7QUFFQUMsMkRBQVMsQ0FBQyxZQUFNO0FBQ2YsVUFBTUMsTUFBTTtBQUFBLHNZQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyxxQkFEUSxHQUNGTCxrREFBRyxDQUFDTSxRQUFKLEdBQWUsU0FEYjtBQUVSQyx3QkFGUSxHQUVDO0FBQ2RDLDJCQUFPLEVBQUU7QUFDUkMsbUNBQWEsRUFBRSxZQUFZTDtBQURuQjtBQURLLG1CQUZEO0FBQUE7QUFBQSx5QkFPS00sNENBQUssQ0FDdEJDLEdBRGlCLENBQ2JOLEdBRGEsRUFDUkUsTUFEUSxFQUVqQkssSUFGaUIsQ0FFWixVQUFDQyxHQUFELEVBQVM7QUFDZGYsc0NBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBLDJCQUFPZSxHQUFHLENBQUNDLElBQVg7QUFDQSxtQkFMaUIsV0FNWCxVQUFDQyxHQUFELEVBQVM7QUFDZmpCLHNDQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFDQWtCLGdDQUFZLENBQUNDLFVBQWIsQ0FBd0IsYUFBeEI7QUFDQTNCLDBCQUFNLENBQUM0QixJQUFQLENBQVksY0FBWjtBQUNBLG1CQVZpQixDQVBMOztBQUFBO0FBT1JKLHNCQVBRO0FBQUEsbURBbUJQQSxJQW5CTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFIOztBQUFBLHdCQUFOWCxNQUFNO0FBQUE7QUFBQTtBQUFBLFNBQVo7O0FBc0JBLFVBQUksQ0FBQ1IsR0FBTCxFQUFVO0FBQ1RMLGNBQU0sQ0FBQzRCLElBQVAsQ0FBWSxpQkFBWjtBQUNBLE9BRkQsTUFFTztBQUNOQyxlQUFPLENBQUNDLEdBQVIsQ0FBWXpCLEdBQUcsQ0FBQzBCLE9BQUosQ0FBWSxTQUFaLEVBQXVCLEVBQXZCLENBQVo7QUFDQWxCLGNBQU0sQ0FBQ1IsR0FBRyxDQUFDMEIsT0FBSixDQUFZLFNBQVosRUFBdUIsRUFBdkIsQ0FBRCxDQUFOO0FBQ0E7QUFDRCxLQTdCUSxFQTZCTixDQUFDMUIsR0FBRCxDQTdCTSxDQUFUOztBQStCQSxRQUFJRSxlQUFKLEVBQXFCO0FBQ3BCLDBCQUFPLHFFQUFDLGdCQUFELG9CQUFzQlIsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0EsS0FGRCxNQUVPO0FBQ04sYUFBTyxJQUFQO0FBQ0E7QUFDRCxHQTNDRDtBQUFBLFlBQ2dCRSxxREFEaEIsRUFFaUJDLHVEQUZqQjtBQUFBO0FBNENBOztBQUVjTCw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYWIwMzgxMWFlMTllYjQxZDI3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFQSSwgd2hvYW1pIH0gZnJvbSBcIn4vc3RvcmUvQVBJL0FwaVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5mdW5jdGlvbiBwcm90ZWN0ZWRSb3V0ZShXcmFwcGVkQ29tcG9uZW50KSB7XHJcblx0cmV0dXJuIChwcm9wcykgPT4ge1xyXG5cdFx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0XHRjb25zdCB7IGp3dCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuXHJcblx0XHRjb25zdCBbaXNUb2tlblZlcmlmaWVkLCBzZXRJc1Rva2VuVmVyaWZpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdFx0Y29uc3QgYWNjZXNzVG9rZW4gPSBBUEkuVE9LRU47XHJcblxyXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdFx0Y29uc3Qgd2hvYW1pID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdXJsID0gQVBJLkJBU0VfVVJMICsgXCIvd2hvYW1pXCI7XHJcblx0XHRcdFx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xyXG5cdFx0XHRcdFx0LmdldCh1cmwsIGNvbmZpZylcclxuXHRcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0SXNUb2tlblZlcmlmaWVkKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0SXNUb2tlblZlcmlmaWVkKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcclxuXHRcdFx0XHRcdFx0cm91dGVyLnB1c2goXCIvYWRtaW4vbG9naW5cIik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoIWp3dCkge1xyXG5cdFx0XHRcdHJvdXRlci5wdXNoKFwiL21lcmNoYW50L2xvZ2luXCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGp3dC5yZXBsYWNlKC8oWydcIl0pL2csIFwiXCIpKTtcclxuXHRcdFx0XHR3aG9hbWkoand0LnJlcGxhY2UoLyhbJ1wiXSkvZywgXCJcIikpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCBband0XSk7XHJcblxyXG5cdFx0aWYgKGlzVG9rZW5WZXJpZmllZCkge1xyXG5cdFx0XHRyZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb3RlY3RlZFJvdXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9