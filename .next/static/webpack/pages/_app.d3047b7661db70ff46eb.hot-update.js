webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/bid/saga.js":
/*!***************************!*\
  !*** ./store/bid/saga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action */ "./store/bid/action.js");



var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(createBidEvent),
    _marked2 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(adminFetchBidEvent),
    _marked3 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(approveBidEvent),
    _marked4 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);





var config = {
  headers: {
    Authorization: "Bearer " + _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].TOKEN
  }
}; //POST CREAT BID EVENT

var sagaCreateBidEvent = /*#__PURE__*/function () {
  var _ref = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
    var url, config, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("saga func");
            url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].MERCHANT_ADMIN_BASE_URL + "/bidding";
            config = {
              headers: {
                Authorization: "Bearer " + _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].TOKEN
              }
            };
            data = axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, event, config).then(function (response) {
              console.log(response.data);
              return response.data;
            });
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sagaCreateBidEvent(_x) {
    return _ref.apply(this, arguments);
  };
}();

var sagaAdminFetchBidEvent = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(status) {
    var data, url, _url, _url2, eventStatus;

    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (status === "pending") {
              url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/bidding";
              console.log(status);
              data = axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, config).then(function (response) {
                var pendingBids = response.data.bidding_event.filter(function (bid) {
                  return bid.approved === false;
                });
                return pendingBids;
              });
            } else if (status === "approved") {
              _url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/bidding";
              console.log(status);
              data = axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_url, config).then(function (response) {
                console.log(response.data.bidding_event);
                var approvedBids = response.data.bidding_event.filter(function (bid) {
                  return bid.approved === true;
                });
                return approvedBids;
              });
            } else {
              _url2 = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/bidding/status";
              eventStatus = {
                status: status
              };
              console.log(eventStatus);
              data = axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(_url2, eventStatus, config).then(function (response) {
                console.log(response.data);
                return response.data.bidding_event;
              });
            }

            return _context2.abrupt("return", data);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function sagaAdminFetchBidEvent(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var sagaApproveBidEvent = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event_id) {
    var url, config, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log("saga func");
            url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/bidding/approve/" + event_id;
            config = {
              headers: {
                Authorization: "Bearer " + _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].TOKEN
              }
            };
            console.log(url);
            data = axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, event_id, config).then(function (response) {
              console.log(response.data);
              return response.data;
            });
            return _context3.abrupt("return", data);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function sagaApproveBidEvent(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var sagaCancelBidEvent = /*#__PURE__*/function () {
  var _ref4 = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(event_id) {
    var url, config, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/bidding/approve/" + event_id;
            config = {
              headers: {
                Authorization: "Bearer " + _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].TOKEN
              }
            };
            console.log(url);
            data = axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, event_id, config).then(function (response) {
              console.log(response.data);
              return response.data;
            });
            return _context4.abrupt("return", data);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function sagaCancelBidEvent(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

function createBidEvent(payload) {
  var isEventAdded;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function createBidEvent$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(sagaCreateBidEvent, payload.event);

        case 3:
          isEventAdded = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_5__["actionCreateBidEventSuccess"])(isEventAdded));

        case 6:
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function adminFetchBidEvent(payload) {
  var getAllBidEvent;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function adminFetchBidEvent$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(sagaAdminFetchBidEvent, payload.status);

        case 3:
          getAllBidEvent = _context6.sent;
          console.log(getAllBidEvent);
          _context6.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_5__["actionAdminFetchAuctionsSuccess"])(getAllBidEvent));

        case 7:
          _context6.next = 12;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}

function approveBidEvent(payload) {
  var isApproved;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function approveBidEvent$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(sagaApproveBidEvent, payload.event_id);

        case 3:
          isApproved = _context7.sent;
          console.log(isApproved);
          _context7.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_5__["actionApproveEventSuccess"])(isApproved));

        case 7:
          _context7.next = 12;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].CREATE_BID_EVENT, createBidEvent)]);

        case 2:
          _context8.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].ADMIN_FETCH_BID_EVENTS, adminFetchBidEvent)]);

        case 4:
          _context8.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].APPROVE_BID_EVENT, approveBidEvent)]);

        case 6:
        case "end":
          return _context8.stop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYmlkL3NhZ2EuanMiXSwibmFtZXMiOlsiY3JlYXRlQmlkRXZlbnQiLCJhZG1pbkZldGNoQmlkRXZlbnQiLCJhcHByb3ZlQmlkRXZlbnQiLCJyb290U2FnYSIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQVBJIiwiVE9LRU4iLCJzYWdhQ3JlYXRlQmlkRXZlbnQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJNRVJDSEFOVF9BRE1JTl9CQVNFX1VSTCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzYWdhQWRtaW5GZXRjaEJpZEV2ZW50Iiwic3RhdHVzIiwiQURNSU5fQkFTRV9VUkwiLCJnZXQiLCJwZW5kaW5nQmlkcyIsImJpZGRpbmdfZXZlbnQiLCJmaWx0ZXIiLCJiaWQiLCJhcHByb3ZlZCIsImFwcHJvdmVkQmlkcyIsImV2ZW50U3RhdHVzIiwic2FnYUFwcHJvdmVCaWRFdmVudCIsImV2ZW50X2lkIiwic2FnYUNhbmNlbEJpZEV2ZW50IiwicGF5bG9hZCIsImNhbGwiLCJpc0V2ZW50QWRkZWQiLCJwdXQiLCJhY3Rpb25DcmVhdGVCaWRFdmVudFN1Y2Nlc3MiLCJnZXRBbGxCaWRFdmVudCIsImFjdGlvbkFkbWluRmV0Y2hBdWN0aW9uc1N1Y2Nlc3MiLCJpc0FwcHJvdmVkIiwiYWN0aW9uQXBwcm92ZUV2ZW50U3VjY2VzcyIsImFsbCIsInRha2VFdmVyeSIsImFjdGlvblR5cGVzIiwiQ1JFQVRFX0JJRF9FVkVOVCIsIkFETUlOX0ZFVENIX0JJRF9FVkVOVFMiLCJBUFBST1ZFX0JJRF9FVkVOVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bU1BNEdVQSxjO29NQVNBQyxrQjtvTUFVQUMsZTtvTUFVZUMsUTs7QUF6SXpCO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUMsTUFBTSxHQUFHO0FBQ2RDLFNBQU8sRUFBRTtBQUNSQyxpQkFB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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWxsLCBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcclxuaW1wb3J0IHtcclxuXHRhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnNTdWNjZXNzLFxyXG5cdGFjdGlvbkFwcHJvdmVFdmVudFN1Y2Nlc3MsXHJcblx0YWN0aW9uQ3JlYXRlQmlkRXZlbnRTdWNjZXNzLFxyXG5cdGFjdGlvblR5cGVzLFxyXG59IGZyb20gXCIuL2FjdGlvblwiO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG5cdGhlYWRlcnM6IHtcclxuXHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgQVBJLlRPS0VOLFxyXG5cdH0sXHJcbn07XHJcblxyXG4vL1BPU1QgQ1JFQVQgQklEIEVWRU5UXHJcbmNvbnN0IHNhZ2FDcmVhdGVCaWRFdmVudCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKFwic2FnYSBmdW5jXCIpO1xyXG5cdGNvbnN0IHVybCA9IEFQSS5NRVJDSEFOVF9BRE1JTl9CQVNFX1VSTCArIFwiL2JpZGRpbmdcIjtcclxuXHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgQVBJLlRPS0VOLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cdGNvbnN0IGRhdGEgPSBheGlvcy5wb3N0KHVybCwgZXZlbnQsIGNvbmZpZykudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3Qgc2FnYUFkbWluRmV0Y2hCaWRFdmVudCA9IGFzeW5jIChzdGF0dXMpID0+IHtcclxuXHRsZXQgZGF0YTtcclxuXHRpZiAoc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xyXG5cdFx0Y29uc3QgdXJsID0gQVBJLkFETUlOX0JBU0VfVVJMICsgXCIvYmlkZGluZ1wiO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKHN0YXR1cyk7XHJcblx0XHRkYXRhID0gYXhpb3MuZ2V0KHVybCwgY29uZmlnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBwZW5kaW5nQmlkcyA9IHJlc3BvbnNlLmRhdGEuYmlkZGluZ19ldmVudC5maWx0ZXIoKGJpZCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBiaWQuYXBwcm92ZWQgPT09IGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHBlbmRpbmdCaWRzO1xyXG5cdFx0fSk7XHJcblx0fSBlbHNlIGlmIChzdGF0dXMgPT09IFwiYXBwcm92ZWRcIikge1xyXG5cdFx0Y29uc3QgdXJsID0gQVBJLkFETUlOX0JBU0VfVVJMICsgXCIvYmlkZGluZ1wiO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKHN0YXR1cyk7XHJcblx0XHRkYXRhID0gYXhpb3MuZ2V0KHVybCwgY29uZmlnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmJpZGRpbmdfZXZlbnQpO1xyXG5cdFx0XHRjb25zdCBhcHByb3ZlZEJpZHMgPSByZXNwb25zZS5kYXRhLmJpZGRpbmdfZXZlbnQuZmlsdGVyKChiaWQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gYmlkLmFwcHJvdmVkID09PSB0cnVlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGFwcHJvdmVkQmlkcztcclxuXHRcdH0pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zdCB1cmwgPSBBUEkuQURNSU5fQkFTRV9VUkwgKyBcIi9iaWRkaW5nL3N0YXR1c1wiO1xyXG5cclxuXHRcdGNvbnN0IGV2ZW50U3RhdHVzID0ge1xyXG5cdFx0XHRzdGF0dXMsXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKGV2ZW50U3RhdHVzKTtcclxuXHRcdGRhdGEgPSBheGlvcy5wb3N0KHVybCwgZXZlbnRTdGF0dXMsIGNvbmZpZykudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLmJpZGRpbmdfZXZlbnQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3Qgc2FnYUFwcHJvdmVCaWRFdmVudCA9IGFzeW5jIChldmVudF9pZCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKFwic2FnYSBmdW5jXCIpO1xyXG5cdGNvbnN0IHVybCA9IEFQSS5BRE1JTl9CQVNFX1VSTCArIFwiL2JpZGRpbmcvYXBwcm92ZS9cIiArIGV2ZW50X2lkO1xyXG5cdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBBUEkuVE9LRU4sXHJcblx0XHR9LFxyXG5cdH07XHJcblx0Y29uc29sZS5sb2codXJsKTtcclxuXHRjb25zdCBkYXRhID0gYXhpb3MucG9zdCh1cmwsIGV2ZW50X2lkLCBjb25maWcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuXHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmNvbnN0IHNhZ2FDYW5jZWxCaWRFdmVudCA9IGFzeW5jIChldmVudF9pZCkgPT4ge1xyXG5cdFxyXG5cdGNvbnN0IHVybCA9IEFQSS5BRE1JTl9CQVNFX1VSTCArIFwiL2JpZGRpbmcvYXBwcm92ZS9cIiArIGV2ZW50X2lkO1xyXG5cdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBBUEkuVE9LRU4sXHJcblx0XHR9LFxyXG5cdH07XHJcblx0Y29uc29sZS5sb2codXJsKTtcclxuXHRjb25zdCBkYXRhID0gYXhpb3MucG9zdCh1cmwsIGV2ZW50X2lkLCBjb25maWcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuXHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gZGF0YTtcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiogY3JlYXRlQmlkRXZlbnQocGF5bG9hZCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBpc0V2ZW50QWRkZWQgPSB5aWVsZCBjYWxsKHNhZ2FDcmVhdGVCaWRFdmVudCwgcGF5bG9hZC5ldmVudCk7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9uQ3JlYXRlQmlkRXZlbnRTdWNjZXNzKGlzRXZlbnRBZGRlZCkpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZG1pbkZldGNoQmlkRXZlbnQocGF5bG9hZCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBnZXRBbGxCaWRFdmVudCA9IHlpZWxkIGNhbGwoc2FnYUFkbWluRmV0Y2hCaWRFdmVudCwgcGF5bG9hZC5zdGF0dXMpO1xyXG5cdFx0Y29uc29sZS5sb2coZ2V0QWxsQmlkRXZlbnQpO1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvbkFkbWluRmV0Y2hBdWN0aW9uc1N1Y2Nlc3MoZ2V0QWxsQmlkRXZlbnQpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogYXBwcm92ZUJpZEV2ZW50KHBheWxvYWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgaXNBcHByb3ZlZCA9IHlpZWxkIGNhbGwoc2FnYUFwcHJvdmVCaWRFdmVudCwgcGF5bG9hZC5ldmVudF9pZCk7XHJcblx0XHRjb25zb2xlLmxvZyhpc0FwcHJvdmVkKTtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25BcHByb3ZlRXZlbnRTdWNjZXNzKGlzQXBwcm92ZWQpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ1JFQVRFX0JJRF9FVkVOVCwgY3JlYXRlQmlkRXZlbnQpXSk7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdHRha2VFdmVyeShhY3Rpb25UeXBlcy5BRE1JTl9GRVRDSF9CSURfRVZFTlRTLCBhZG1pbkZldGNoQmlkRXZlbnQpLFxyXG5cdF0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkFQUFJPVkVfQklEX0VWRU5ULCBhcHByb3ZlQmlkRXZlbnQpXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==