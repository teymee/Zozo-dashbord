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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC9zYWdhLmpzIl0sIm5hbWVzIjpbImxvZ2luU2FnYSIsInJlZ2lzdGVyU2FnYSIsImxvZ091dFNhZ2EiLCJyb290U2FnYSIsIm1vZGFsU3VjY2VzcyIsInR5cGUiLCJub3RpZmljYXRpb24iLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJtb2RhbFdhcm5pbmciLCJsb2dpbkFkbWluIiwibG9naW5DcmVkIiwiY29uc29sZSIsImxvZyIsInVybCIsIkFQSSIsIkJBU0VfVVJMIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsImVyciIsInJlZ2lzdGVyQWRtaW4iLCJyZWdpc3RlckNyZWQiLCJBRE1JTl9CQVNFX1VSTCIsInBheWxvYWQiLCJjYWxsIiwiaXNMb2dpbiIsInB1dCIsImxvZ2luU3VjY2VzcyIsImlzUmVnaXN0ZXJlZCIsInJlZ2lzdGVyU3VjY2VzcyIsImxvZ091dFN1Y2Nlc3MiLCJhbGwiLCJ0YWtlRXZlcnkiLCJhY3Rpb25UeXBlcyIsIkxPR0lOX1JFUVVFU1QiLCJSRUdJU1RFUl9SRVFVRVNUIiwiTE9HT1VUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bU1BOERVQSxTO29NQVlBQyxZO29NQWFBQyxVO29NQVNlQyxROztBQWhHekI7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFHQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDOUJDLG1EQUFZLENBQUNELElBQUQsQ0FBWixDQUFtQjtBQUNsQkUsV0FBTyxFQUFFLGNBRFM7QUFFbEJDLGVBQVcsRUFBRTtBQUZLLEdBQW5CO0FBSUEsQ0FMRDs7QUFPQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSixJQUFELEVBQVU7QUFDOUJDLG1EQUFZLENBQUNELElBQUQsQ0FBWixDQUFtQjtBQUNsQkUs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QUFBQTtBQUtHLGlCQUFNRiw4REFBRyxDQUFDRywrREFBZSxFQUFoQixDQUFUOztBQUxIO0FBTUcvQixzQkFBWSxDQUFDLFNBQUQsQ0FBWjs7QUFOSDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU0VRLGlCQUFPLENBQUNDLEdBQVI7O0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYUEsU0FBVVgsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVFLGlCQUFNOEIsOERBQUcsQ0FBQ0ksNkRBQWEsRUFBZCxDQUFUOztBQUZGO0FBR0UzQixzQkFBWSxDQUFDLFNBQUQsQ0FBWjtBQUhGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS0VHLGlCQUFPLENBQUNDLEdBQVI7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU2UsU0FBVVYsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxpQkFBTWtDLDhEQUFHLENBQUMsQ0FBQ0Msb0VBQVMsQ0FBQ0MsbURBQVcsQ0FBQ0MsYUFBYixFQUE0QnhDLFNBQTVCLENBQVYsQ0FBRCxDQUFUOztBQURjO0FBQUE7QUFFWCxpQkFBTXFDLDhEQUFHLENBQUMsQ0FBQ0Msb0VBQVMsQ0FBQ0MsbURBQVcsQ0FBQ0UsZ0JBQWIsRUFBK0J4QyxZQUEvQixDQUFWLENBQUQsQ0FBVDs7QUFGVztBQUFBO0FBR2QsaUJBQU1vQyw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNHLE1BQWIsRUFBcUJ4QyxVQUFyQixDQUFWLENBQUQsQ0FBVDs7QUFIYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmUyM2QwODA5NjVkODRiYmE0N2I5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIGxvZ2luU3VjY2VzcywgbG9nT3V0U3VjY2VzcywgcmVnaXN0ZXJTdWNjZXNzIH0gZnJvbSBcIi4vYWN0aW9uXCI7XG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vQVBJL0FwaVwiO1xuXG5cbmNvbnN0IG1vZGFsU3VjY2VzcyA9ICh0eXBlKSA9PiB7XG5cdG5vdGlmaWNhdGlvblt0eXBlXSh7XG5cdFx0bWVzc2FnZTogXCJXZWxjb21lIGJhY2tcIixcblx0XHRkZXNjcmlwdGlvbjogXCJZb3UgYXJlIGxvZ2luIHN1Y2Nlc3NmdWwhXCIsXG5cdH0pO1xufTtcblxuY29uc3QgbW9kYWxXYXJuaW5nID0gKHR5cGUpID0+IHtcblx0bm90aWZpY2F0aW9uW3R5cGVdKHtcblx0XHRtZXNzYWdlOiBcIkdvb2QgYnllIVwiLFxuXHRcdGRlc2NyaXB0aW9uOiBcIllvdXIgYWNjb3VudCBoYXMgYmVlbiBsb2dnZWQgb3V0IVwiLFxuXHR9KTtcbn07XG5cbmNvbnN0IGxvZ2luQWRtaW4gPSBhc3luYyAobG9naW5DcmVkKSA9PiB7XG5cdGNvbnNvbGUubG9nKGxvZ2luQ3JlZCk7XG5cdGNvbnN0IHVybCA9IEFQSS5CQVNFX1VSTCArIFwiL2xvZ2luXCI7XG5cblx0Y29uc29sZS5sb2codXJsKVxuXHRjb25zdCBkYXRhID0gYXhpb3Ncblx0XHQucG9zdCh1cmwsIGxvZ2luQ3JlZClcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuXHRcdFx0XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyQWRtaW4gPSBhc3luYyAocmVnaXN0ZXJDcmVkKSA9PiB7XG5cdGNvbnNvbGUubG9nKHJlZ2lzdGVyQ3JlZCk7XG5cdC8vIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly96b3pvLWF1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvbWVyY2hhbnQvY3JlYXRlXCJcblx0Y29uc3QgdXJsID0gQVBJLkFETUlOX0JBU0VfVVJMICsgXCIvYWRtaW4vY3JlYXRlXCI7XG5cdGNvbnNvbGUubG9nKHVybClcblxuXHRjb25zdCBkYXRhID0gYXhpb3Ncblx0XHQucG9zdCh1cmwsIHJlZ2lzdGVyQ3JlZClcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXNwb25zZS5kYXRhLnRva2VuKTtcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0fSk7XG5cdHJldHVybiBkYXRhO1xufTtcblxuXG5cbmZ1bmN0aW9uKiBsb2dpblNhZ2EocGF5bG9hZCkge1xuXHR0cnkge1xuXHRcdGNvbnN0IGlzTG9naW4gPSB5aWVsZCBjYWxsKGxvZ2luQWRtaW4sIHBheWxvYWQubG9naW5DcmVkKTtcblx0XHRpZiAoaXNMb2dpbikge1xuXHRcdFx0eWllbGQgcHV0KGxvZ2luU3VjY2VzcygpKTtcblx0XHRcdG1vZGFsU3VjY2VzcyhcInN1Y2Nlc3NcIik7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uKiByZWdpc3RlclNhZ2EocGF5bG9hZCkge1xuXHR0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkLnJlZ2lzdGVyQ3JlZClcblx0XHRjb25zdCBpc1JlZ2lzdGVyZWQgPSB5aWVsZCBjYWxsKHJlZ2lzdGVyQWRtaW4sIHBheWxvYWQucmVnaXN0ZXJDcmVkKTtcblx0XHRpZiAoaXNSZWdpc3RlcmVkKSB7XG5cdFx0XHR5aWVsZCBwdXQocmVnaXN0ZXJTdWNjZXNzKCkpO1xuXHRcdFx0bW9kYWxTdWNjZXNzKFwic3VjY2Vzc1wiKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUubG9nKGVycik7XG5cdH1cbn1cblxuZnVuY3Rpb24qIGxvZ091dFNhZ2EoKSB7XG5cdHRyeSB7XG5cdFx0eWllbGQgcHV0KGxvZ091dFN1Y2Nlc3MoKSk7XG5cdFx0bW9kYWxXYXJuaW5nKFwid2FybmluZ1wiKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkxPR0lOX1JFUVVFU1QsIGxvZ2luU2FnYSldKTtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5SRUdJU1RFUl9SRVFVRVNULCByZWdpc3RlclNhZ2EpXSk7XG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkxPR09VVCwgbG9nT3V0U2FnYSldKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=