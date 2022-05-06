webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/auth/saga.js":
/*!****************************!*\
  !*** ./store/auth/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");



var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loginSaga),
    _marked2 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(registerSaga),
    _marked3 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOutSaga),
    _marked4 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);







var modalSuccess = function modalSuccess(type) {
  antd__WEBPACK_IMPORTED_MODULE_4__["notification"][type]({
    message: "Welcome back",
    description: "You are login successful!"
  });
};

var modalWarning = function modalWarning(type) {
  antd__WEBPACK_IMPORTED_MODULE_4__["notification"][type]({
    message: "Good bye!",
    description: "Your account has been logged out!"
  });
};

var loginAdmin = /*#__PURE__*/function () {
  var _ref = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(loginCred) {
    var url, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(loginCred);
            url = _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].BASE_URL + "/login";
            console.log(url);
            data = axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, loginCred).then(function (response) {
              console.log(response.data);
              localStorage.setItem("token", response.data.token);
              return response.data;
            })["catch"](function (err) {
              console.log(err);
            });
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loginAdmin(_x) {
    return _ref.apply(this, arguments);
  };
}();

var registerAdmin = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(registerCred) {
    var url, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(registerCred); // const url = "https://zozo-auction.herokuapp.com/api/v1/merchant/create"

            url = _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].ADMIN_BASE_URL + "/admin/create";
            console.log(url);
            data = axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, registerCred).then(function (response) {
              console.log(response.data.token);
              localStorage.setItem("token", response.data.token);
              return response.data;
            })["catch"](function (err) {
              console.log(err);
            });
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function registerAdmin(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

function loginSaga(payload) {
  var isLogin;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loginSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loginAdmin, payload.loginCred);

        case 3:
          isLogin = _context3.sent;

          if (!isLogin) {
            _context3.next = 8;
            break;
          }

          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_5__["loginSuccess"])());

        case 7:
          modalSuccess("success");

        case 8:
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function registerSaga(payload) {
  var isRegistered;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function registerSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          console.log(payload.registerCred);
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(registerAdmin, payload.registerCred);

        case 4:
          isRegistered = _context4.sent;

          if (!isRegistered) {
            _context4.next = 9;
            break;
          }

          _context4.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_5__["registerSuccess"])());

        case 8:
          modalSuccess("success");

        case 9:
          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2, null, [[0, 11]]);
}

function logOutSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOutSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_5__["logOutSuccess"])());

        case 3:
          modalWarning("warning");
          _context5.next = 9;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked3, null, [[0, 6]]);
}

function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].LOGIN_REQUEST, loginSaga)]);

        case 2:
          _context6.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].REGISTER_REQUEST, registerSaga)]);

        case 4:
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].LOGOUT, logOutSaga)]);

        case 6:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked4);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC9zYWdhLmpzIl0sIm5hbWVzIjpbImxvZ2luU2FnYSIsInJlZ2lzdGVyU2FnYSIsImxvZ091dFNhZ2EiLCJyb290U2FnYSIsIm1vZGFsU3VjY2VzcyIsInR5cGUiLCJub3RpZmljYXRpb24iLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJtb2RhbFdhcm5pbmciLCJsb2dpbkFkbWluIiwibG9naW5DcmVkIiwiY29uc29sZSIsImxvZyIsInVybCIsIkFQSSIsIkJBU0VfVVJMIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsImVyciIsInJlZ2lzdGVyQWRtaW4iLCJyZWdpc3RlckNyZWQiLCJBRE1JTl9CQVNFX1VSTCIsInBheWxvYWQiLCJjYWxsIiwiaXNMb2dpbiIsInB1dCIsImxvZ2luU3VjY2VzcyIsImlzUmVnaXN0ZXJlZCIsInJlZ2lzdGVyU3VjY2VzcyIsImxvZ091dFN1Y2Nlc3MiLCJhbGwiLCJ0YWtlRXZlcnkiLCJhY3Rpb25UeXBlcyIsIkxPR0lOX1JFUVVFU1QiLCJSRUdJU1RFUl9SRVFVRVNUIiwiTE9HT1VUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bU1BOERVQSxTO29NQVlBQyxZO29NQWFBQyxVO29NQVNlQyxROztBQWhHekI7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFHQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDOUJDLG1EQUFZLENBQUNELElBQUQsQ0FBWixDQUFtQjtBQUNsQkUsV0FBTyxFQUFFLGNBRFM7QUFFbEJDLGVBQVcsRUFBRTtBQUZLLEdBQW5CO0FBSUEsQ0FMRDs7QUFPQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSixJQUFELEVBQVU7QUFDOUJDLG1EQUFZLENBQUNELElBQUQsQ0FBWixDQUFtQjtBQUNsQkUs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O0FBR1FPLHNCQUhSOztBQUFBLGVBSU1BLFlBSk47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFLRyxpQkFBTUYsOERBQUcsQ0FBQ0csK0RBQWUsRUFBaEIsQ0FBVDs7QUFMSDtBQU1HL0Isc0JBQVksQ0FBQyxTQUFELENBQVo7O0FBTkg7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNFUSxpQkFBTyxDQUFDQyxHQUFSOztBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWFBLFNBQVVYLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRSxpQkFBTThCLDhEQUFHLENBQUNJLDZEQUFhLEVBQWQsQ0FBVDs7QUFGRjtBQUdFM0Isc0JBQVksQ0FBQyxTQUFELENBQVo7QUFIRjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtFRyxpQkFBTyxDQUFDQyxHQUFSOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNlLFNBQVVWLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QsaUJBQU1rQyw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNDLGFBQWIsRUFBNEJ4QyxTQUE1QixDQUFWLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBRVgsaUJBQU1xQyw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNFLGdCQUFiLEVBQStCeEMsWUFBL0IsQ0FBVixDQUFELENBQVQ7O0FBRlc7QUFBQTtBQUdkLGlCQUFNb0MsOERBQUcsQ0FBQyxDQUFDQyxvRUFBUyxDQUFDQyxtREFBVyxDQUFDRyxNQUFiLEVBQXFCeEMsVUFBckIsQ0FBVixDQUFELENBQVQ7O0FBSGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43ZWRhMjBlMzhjZmI1NDE0Yzk1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCB7IGFjdGlvblR5cGVzLCBsb2dpblN1Y2Nlc3MsIGxvZ091dFN1Y2Nlc3MsIHJlZ2lzdGVyU3VjY2VzcyB9IGZyb20gXCIuL2FjdGlvblwiO1xuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcblxuXG5jb25zdCBtb2RhbFN1Y2Nlc3MgPSAodHlwZSkgPT4ge1xuXHRub3RpZmljYXRpb25bdHlwZV0oe1xuXHRcdG1lc3NhZ2U6IFwiV2VsY29tZSBiYWNrXCIsXG5cdFx0ZGVzY3JpcHRpb246IFwiWW91IGFyZSBsb2dpbiBzdWNjZXNzZnVsIVwiLFxuXHR9KTtcbn07XG5cbmNvbnN0IG1vZGFsV2FybmluZyA9ICh0eXBlKSA9PiB7XG5cdG5vdGlmaWNhdGlvblt0eXBlXSh7XG5cdFx0bWVzc2FnZTogXCJHb29kIGJ5ZSFcIixcblx0XHRkZXNjcmlwdGlvbjogXCJZb3VyIGFjY291bnQgaGFzIGJlZW4gbG9nZ2VkIG91dCFcIixcblx0fSk7XG59O1xuXG5jb25zdCBsb2dpbkFkbWluID0gYXN5bmMgKGxvZ2luQ3JlZCkgPT4ge1xuXHRjb25zb2xlLmxvZyhsb2dpbkNyZWQpO1xuXHRjb25zdCB1cmwgPSBBUEkuQkFTRV9VUkwgKyBcIi9sb2dpblwiO1xuXG5cdGNvbnNvbGUubG9nKHVybClcblx0Y29uc3QgZGF0YSA9IGF4aW9zXG5cdFx0LnBvc3QodXJsLCBsb2dpbkNyZWQpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS50b2tlbik7XG5cdFx0XHRcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0fSk7XG5cdHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgcmVnaXN0ZXJBZG1pbiA9IGFzeW5jIChyZWdpc3RlckNyZWQpID0+IHtcblx0Y29uc29sZS5sb2cocmVnaXN0ZXJDcmVkKTtcblx0Ly8gY29uc3QgdXJsID0gXCJodHRwczovL3pvem8tYXVjdGlvbi5oZXJva3VhcHAuY29tL2FwaS92MS9tZXJjaGFudC9jcmVhdGVcIlxuXHRjb25zdCB1cmwgPSBBUEkuQURNSU5fQkFTRV9VUkwgKyBcIi9hZG1pbi9jcmVhdGVcIjtcblx0Y29uc29sZS5sb2codXJsKVxuXG5cdGNvbnN0IGRhdGEgPSBheGlvc1xuXHRcdC5wb3N0KHVybCwgcmVnaXN0ZXJDcmVkKVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS50b2tlbik7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHR9KTtcblx0cmV0dXJuIGRhdGE7XG59O1xuXG5cblxuZnVuY3Rpb24qIGxvZ2luU2FnYShwYXlsb2FkKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgaXNMb2dpbiA9IHlpZWxkIGNhbGwobG9naW5BZG1pbiwgcGF5bG9hZC5sb2dpbkNyZWQpO1xuXHRcdGlmIChpc0xvZ2luKSB7XG5cdFx0XHR5aWVsZCBwdXQobG9naW5TdWNjZXNzKCkpO1xuXHRcdFx0bW9kYWxTdWNjZXNzKFwic3VjY2Vzc1wiKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUubG9nKGVycik7XG5cdH1cbn1cblxuZnVuY3Rpb24qIHJlZ2lzdGVyU2FnYShwYXlsb2FkKSB7XG5cdHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBheWxvYWQucmVnaXN0ZXJDcmVkKVxuXHRcdGNvbnN0IGlzUmVnaXN0ZXJlZCA9IHlpZWxkIGNhbGwocmVnaXN0ZXJBZG1pbiwgcGF5bG9hZC5yZWdpc3RlckNyZWQpO1xuXHRcdGlmIChpc1JlZ2lzdGVyZWQpIHtcblx0XHRcdHlpZWxkIHB1dChyZWdpc3RlclN1Y2Nlc3MoKSk7XG5cdFx0XHRtb2RhbFN1Y2Nlc3MoXCJzdWNjZXNzXCIpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyKTtcblx0fVxufVxuXG5mdW5jdGlvbiogbG9nT3V0U2FnYSgpIHtcblx0dHJ5IHtcblx0XHR5aWVsZCBwdXQobG9nT3V0U3VjY2VzcygpKTtcblx0XHRtb2RhbFdhcm5pbmcoXCJ3YXJuaW5nXCIpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuTE9HSU5fUkVRVUVTVCwgbG9naW5TYWdhKV0pO1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlJFR0lTVEVSX1JFUVVFU1QsIHJlZ2lzdGVyU2FnYSldKTtcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuTE9HT1VULCBsb2dPdXRTYWdhKV0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==