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
    _marked4 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(cancelBidEvent),
    _marked5 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);





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
            url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/bidding/cancel/" + event_id;
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

function cancelBidEvent(payload) {
  var isApproved;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function cancelBidEvent$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(sagaApproveBidEvent, payload.event_id);

        case 3:
          isApproved = _context8.sent;
          console.log(isApproved);
          _context8.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_5__["actionApproveEventSuccess"])(isApproved));

        case 7:
          _context8.next = 12;
          break;

        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);

        case 12:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked4, null, [[0, 9]]);
}

function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].CREATE_BID_EVENT, createBidEvent)]);

        case 2:
          _context9.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].ADMIN_FETCH_BID_EVENTS, adminFetchBidEvent)]);

        case 4:
          _context9.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].APPROVE_BID_EVENT, approveBidEvent)]);

        case 6:
          _context9.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].CANCEL_BID_EVENT, approveBidEvent)]);

        case 8:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYmlkL3NhZ2EuanMiXSwibmFtZXMiOlsiY3JlYXRlQmlkRXZlbnQiLCJhZG1pbkZldGNoQmlkRXZlbnQiLCJhcHByb3ZlQmlkRXZlbnQiLCJjYW5jZWxCaWRFdmVudCIsInJvb3RTYWdhIiwiY29uZmlnIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBUEkiLCJUT0tFTiIsInNhZ2FDcmVhdGVCaWRFdmVudCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInVybCIsIk1FUkNIQU5UX0FETUlOX0JBU0VfVVJMIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsInNhZ2FBZG1pbkZldGNoQmlkRXZlbnQiLCJzdGF0dXMiLCJBRE1JTl9CQVNFX1VSTCIsImdldCIsInBlbmRpbmdCaWRzIiwiYmlkZGluZ19ldmVudCIsImZpbHRlciIsImJpZCIsImFwcHJvdmVkIiwiYXBwcm92ZWRCaWRzIiwiZXZlbnRTdGF0dXMiLCJzYWdhQXBwcm92ZUJpZEV2ZW50IiwiZXZlbnRfaWQiLCJzYWdhQ2FuY2VsQmlkRXZlbnQiLCJwYXlsb2FkIiwiY2FsbCIsImlzRXZlbnRBZGRlZCIsInB1dCIsImFjdGlvbkNyZWF0ZUJpZEV2ZW50U3VjY2VzcyIsImdldEFsbEJpZEV2ZW50IiwiYWN0aW9uQWRtaW5GZXRjaEF1Y3Rpb25zU3VjY2VzcyIsImlzQXBwcm92ZWQiLCJhY3Rpb25BcHByb3ZlRXZlbnRTdWNjZXNzIiwiYWxsIiwidGFrZUV2ZXJ5IiwiYWN0aW9uVHlwZXMiLCJDUkVBVEVfQklEX0VWRU5UIiwiQURNSU5fRkVUQ0hfQklEX0VWRU5UUyIsIkFQUFJPVkVfQklEX0VWRU5UIiwiQ0FOQ0VMX0JJRF9FVkVOVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bU1BNEdVQSxjO29NQVNBQyxrQjtvTUFVQUMsZTtvTUFVQUMsYztvTUFXZUMsUTs7QUFwSnpCO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUMsTUFBTSxHQUFHO0FBQ2RDLFNBQU8sRUFBRTtBQUNSQyxpQkFBYSxFQUFFLFlBQVlDLDRDQUFHLENBQUNDO0FBRHZCO0FBREssQ0FBZixDLENBTUE7O0FBQ0EsSUFBTUMsa0JBQWtCO0FBQUEsZ1lBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNNQyxlQUZvQixHQUVkTiw0Q0FBRyxDQUFDTyx1QkFBSixHQUE4QixVQUZoQjtBQUdwQlYsa0JBSG9CLEdBR1g7QUFDZEMscUJBQU8sRUFBRTtBQUNSQyw2QkFBYSxFQUFFLFlBQVlDLDRDQUFHLENBQUNDO0FBRHZCO0FBREssYUFIVztBQVFwQk8sZ0JBUm9CLEdBUWJDLDRDQUFLLENBQUNDLElBQU4sQ0FBV0osR0FBWCxFQUFnQkgsS0FBaEIsRUFBdUJOLE1BQXZCLEVBQStCYyxJQUEvQixDQUFvQyxVQUFDQyxRQUFELEVBQWM7QUFDOURSLHFCQUFPLENBQUNDLEdBQVIsQ0FBWU8sUUFBUSxDQUFDSixJQUFyQjtBQUNBLHFCQUFPSSxRQUFRLENBQUNKLElBQWhCO0FBQ0EsYUFIWSxDQVJhO0FBQUEsNkNBYW5CQSxJQWJtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFsQk4sa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQWdCQSxJQUFNVyxzQkFBc0I7QUFBQSxpWUFBRyxrQkFBT0MsTUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRTlCLGdCQUFJQSxNQUFNLEtBQUssU0FBZixFQUEwQjtBQUNuQlIsaUJBRG1CLEdBQ2JOLDRDQUFHLENBQUNlLGNBQUosR0FBcUIsVUFEUjtBQUd6QlgscUJBQU8sQ0FBQ0MsR0FBUixDQUFZUyxNQUFaO0FBQ0FOLGtCQUFJLEdBQUdDLDRDQUFLLENBQUNPLEdBQU4sQ0FBVVYsR0FBVixFQUFlVCxNQUFmLEVBQXVCYyxJQUF2QixDQUE0QixVQUFDQyxRQUFELEVBQWM7QUFDaEQsb0JBQU1LLFdBQVcsR0FBR0wsUUFBUSxDQUFDSixJQUFULENBQWNVLGFBQWQsQ0FBNEJDLE1BQTVCLENBQW1DLFVBQUNDLEdBQUQsRUFBUztBQUMvRCx5QkFBT0EsR0FBRyxDQUFDQyxRQUFKLEtBQWlCLEtBQXhCO0FBQ0EsaUJBRm1CLENBQXBCO0FBR0EsdUJBQU9KLFdBQVA7QUFDQSxlQUxNLENBQVA7QUFNQSxhQVZELE1BVU8sSUFBSUgsTUFBTSxLQUFLLFVBQWYsRUFBMkI7QUFDM0JSLGtCQUQyQixHQUNyQk4sNENBQUcsQ0FBQ2UsY0FBSixHQUFxQixVQURBO0FBR2pDWCxxQkFBTyxDQUFDQyxHQUFSLENBQVlTLE1BQVo7QUFDQU4sa0JBQUksR0FBR0MsNENBQUssQ0FBQ08sR0FBTixDQUFVVixJQUFWLEVBQWVULE1BQWYsRUFBdUJjLElBQXZCLENBQTRCLFVBQUNDLFFBQUQsRUFBYztBQUNoRFIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZTyxRQUFRLENBQUNKLElBQVQsQ0FBY1UsYUFBMUI7QUFDQSxvQkFBTUksWUFBWSxHQUFHVixRQUFRLENBQUNKLElBQVQsQ0FBY1UsYUFBZCxDQUE0QkMsTUFBNUIsQ0FBbUMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hFLHlCQUFPQSxHQUFHLENBQUNDLFFBQUosS0FBaUIsSUFBeEI7QUFDQSxpQkFGb0IsQ0FBckI7QUFHQSx1QkFBT0MsWUFBUDtBQUNBLGVBTk0sQ0FBUDtBQU9BLGFBWE0sTUFXQTtBQUNBaEIsbUJBREEsR0FDTU4sNENBQUcsQ0FBQ2UsY0FBSixHQUFxQixpQkFEM0I7QUFHQVEseUJBSEEsR0FHYztBQUNuQlQsc0JBQU0sRUFBTkE7QUFEbUIsZUFIZDtBQU9OVixxQkFBTyxDQUFDQyxHQUFSLENBQVlrQixXQUFaO0FBQ0FmLGtCQUFJLEdBQUdDLDRDQUFLLENBQUNDLElBQU4sQ0FBV0osS0FBWCxFQUFnQmlCLFdBQWhCLEVBQTZCMUIsTUFBN0IsRUFBcUNjLElBQXJDLENBQTBDLFVBQUNDLFFBQUQsRUFBYztBQUM5RFIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZTyxRQUFRLENBQUNKLElBQXJCO0FBQ0EsdUJBQU9JLFFBQVEsQ0FBQ0osSUFBVCxDQUFjVSxhQUFyQjtBQUNBLGVBSE0sQ0FBUDtBQUlBOztBQW5DNkIsOENBcUN2QlYsSUFyQ3VCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXRCSyxzQkFBc0I7QUFBQTtBQUFBO0FBQUEsR0FBNUI7O0FBd0NBLElBQU1XLG1CQUFtQjtBQUFBLGlZQUFHLGtCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMzQnJCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ01DLGVBRnFCLEdBRWZOLDRDQUFHLENBQUNlLGNBQUosR0FBcUIsbUJBQXJCLEdBQTJDVSxRQUY1QjtBQUdyQjVCLGtCQUhxQixHQUdaO0FBQ2RDLHFCQUFPLEVBQUU7QUFDUkMsNkJBQWEsRUFBRSxZQUFZQyw0Q0FBRyxDQUFDQztBQUR2QjtBQURLLGFBSFk7QUFRM0JHLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWjtBQUNNRSxnQkFUcUIsR0FTZEMsNENBQUssQ0FBQ0MsSUFBTixDQUFXSixHQUFYLEVBQWdCbUIsUUFBaEIsRUFBMEI1QixNQUExQixFQUFrQ2MsSUFBbEMsQ0FBdUMsVUFBQ0MsUUFBRCxFQUFjO0FBQ2pFUixxQkFBTyxDQUFDQyxHQUFSLENBQVlPLFFBQVEsQ0FBQ0osSUFBckI7QUFDQSxxQkFBT0ksUUFBUSxDQUFDSixJQUFoQjtBQUNBLGFBSFksQ0FUYztBQUFBLDhDQWNwQkEsSUFkb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbkJnQixtQkFBbUI7QUFBQTtBQUFBO0FBQUEsR0FBekI7O0FBaUJBLElBQU1FLGtCQUFrQjtBQUFBLGlZQUFHLGtCQUFPRCxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVwQm5CLGVBRm9CLEdBRWROLDRDQUFHLENBQUNlLGNBQUosR0FBcUIsa0JBQXJCLEdBQTBDVSxRQUY1QjtBQUdwQjVCLGtCQUhvQixHQUdYO0FBQ2RDLHFCQUFPLEVBQUU7QUFDUkMsNkJBQWEsRUFBRSxZQUFZQyw0Q0FBRyxDQUFDQztBQUR2QjtBQURLLGFBSFc7QUFRMUJHLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWjtBQUNNRSxnQkFUb0IsR0FTYkMsNENBQUssQ0FBQ0MsSUFBTixDQUFXSixHQUFYLEVBQWdCbUIsUUFBaEIsRUFBMEI1QixNQUExQixFQUFrQ2MsSUFBbEMsQ0FBdUMsVUFBQ0MsUUFBRCxFQUFjO0FBQ2pFUixxQkFBTyxDQUFDQyxHQUFSLENBQVlPLFFBQVEsQ0FBQ0osSUFBckI7QUFDQSxxQkFBT0ksUUFBUSxDQUFDSixJQUFoQjtBQUNBLGFBSFksQ0FUYTtBQUFBLDhDQWNuQkEsSUFkbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbEJrQixrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBa0JBLFNBQVVsQyxjQUFWLENBQXlCbUMsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV1QixpQkFBTUMsK0RBQUksQ0FBQzFCLGtCQUFELEVBQXFCeUIsT0FBTyxDQUFDeEIsS0FBN0IsQ0FBVjs7QUFGdkI7QUFFUTBCLHNCQUZSO0FBQUE7QUFHRSxpQkFBTUMsOERBQUcsQ0FBQ0MsMkVBQTJCLENBQUNGLFlBQUQsQ0FBNUIsQ0FBVDs7QUFIRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS0V6QixpQkFBTyxDQUFDQyxHQUFSOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLFNBQVVaLGtCQUFWLENBQTZCa0MsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV5QixpQkFBTUMsK0RBQUksQ0FBQ2Ysc0JBQUQsRUFBeUJjLE9BQU8sQ0FBQ2IsTUFBakMsQ0FBVjs7QUFGekI7QUFFUWtCLHdCQUZSO0FBR0U1QixpQkFBTyxDQUFDQyxHQUFSLENBQVkyQixjQUFaO0FBSEY7QUFJRSxpQkFBTUYsOERBQUcsQ0FBQ0csK0VBQStCLENBQUNELGNBQUQsQ0FBaEMsQ0FBVDs7QUFKRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTUU1QixpQkFBTyxDQUFDQyxHQUFSOztBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVBLFNBQVVYLGVBQVYsQ0FBMEJpQyxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXFCLGlCQUFNQywrREFBSSxDQUFDSixtQkFBRCxFQUFzQkcsT0FBTyxDQUFDRixRQUE5QixDQUFWOztBQUZyQjtBQUVRUyxvQkFGUjtBQUdFOUIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZNkIsVUFBWjtBQUhGO0FBSUUsaUJBQU1KLDhEQUFHLENBQUNLLHlFQUF5QixDQUFDRCxVQUFELENBQTFCLENBQVQ7O0FBSkY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1FOUIsaUJBQU8sQ0FBQ0MsR0FBUjs7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVQSxTQUFVVixjQUFWLENBQXlCZ0MsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVxQixpQkFBTUMsK0RBQUksQ0FBQ0osbUJBQUQsRUFBc0JHLE9BQU8sQ0FBQ0YsUUFBOUIsQ0FBVjs7QUFGckI7QUFFUVMsb0JBRlI7QUFHRTlCLGlCQUFPLENBQUNDLEdBQVIsQ0FBWTZCLFVBQVo7QUFIRjtBQUlFLGlCQUFNSiw4REFBRyxDQUFDSyx5RUFBeUIsQ0FBQ0QsVUFBRCxDQUExQixDQUFUOztBQUpGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNRTlCLGlCQUFPLENBQUNDLEdBQVI7O0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV2UsU0FBVVQsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxpQkFBTXdDLDhEQUFHLENBQUMsQ0FBQ0Msb0VBQVMsQ0FBQ0MsbURBQVcsQ0FBQ0MsZ0JBQWIsRUFBK0IvQyxjQUEvQixDQUFWLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBRWQsaUJBQU00Qyw4REFBRyxDQUFDLENBQ1RDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNFLHNCQUFiLEVBQXFDL0Msa0JBQXJDLENBREEsQ0FBRCxDQUFUOztBQUZjO0FBQUE7QUFLZCxpQkFBTTJDLDhEQUFHLENBQUMsQ0FBQ0Msb0VBQVMsQ0FBQ0MsbURBQVcsQ0FBQ0csaUJBQWIsRUFBZ0MvQyxlQUFoQyxDQUFWLENBQUQsQ0FBVDs7QUFMYztBQUFBO0FBTWQsaUJBQU0wQyw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNJLGdCQUFiLEVBQStCaEQsZUFBL0IsQ0FBVixDQUFELENBQVQ7O0FBTmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kMTA3YzYyZDIyNTgxMTNhOTE2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vQVBJL0FwaVwiO1xyXG5pbXBvcnQge1xyXG5cdGFjdGlvbkFkbWluRmV0Y2hBdWN0aW9uc1N1Y2Nlc3MsXHJcblx0YWN0aW9uQXBwcm92ZUV2ZW50U3VjY2VzcyxcclxuXHRhY3Rpb25DcmVhdGVCaWRFdmVudFN1Y2Nlc3MsXHJcblx0YWN0aW9uVHlwZXMsXHJcbn0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0aGVhZGVyczoge1xyXG5cdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBBUEkuVE9LRU4sXHJcblx0fSxcclxufTtcclxuXHJcbi8vUE9TVCBDUkVBVCBCSUQgRVZFTlRcclxuY29uc3Qgc2FnYUNyZWF0ZUJpZEV2ZW50ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcblx0Y29uc29sZS5sb2coXCJzYWdhIGZ1bmNcIik7XHJcblx0Y29uc3QgdXJsID0gQVBJLk1FUkNIQU5UX0FETUlOX0JBU0VfVVJMICsgXCIvYmlkZGluZ1wiO1xyXG5cdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBBUEkuVE9LRU4sXHJcblx0XHR9LFxyXG5cdH07XHJcblx0Y29uc3QgZGF0YSA9IGF4aW9zLnBvc3QodXJsLCBldmVudCwgY29uZmlnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBzYWdhQWRtaW5GZXRjaEJpZEV2ZW50ID0gYXN5bmMgKHN0YXR1cykgPT4ge1xyXG5cdGxldCBkYXRhO1xyXG5cdGlmIChzdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XHJcblx0XHRjb25zdCB1cmwgPSBBUEkuQURNSU5fQkFTRV9VUkwgKyBcIi9iaWRkaW5nXCI7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coc3RhdHVzKTtcclxuXHRcdGRhdGEgPSBheGlvcy5nZXQodXJsLCBjb25maWcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHBlbmRpbmdCaWRzID0gcmVzcG9uc2UuZGF0YS5iaWRkaW5nX2V2ZW50LmZpbHRlcigoYmlkKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGJpZC5hcHByb3ZlZCA9PT0gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcGVuZGluZ0JpZHM7XHJcblx0XHR9KTtcclxuXHR9IGVsc2UgaWYgKHN0YXR1cyA9PT0gXCJhcHByb3ZlZFwiKSB7XHJcblx0XHRjb25zdCB1cmwgPSBBUEkuQURNSU5fQkFTRV9VUkwgKyBcIi9iaWRkaW5nXCI7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coc3RhdHVzKTtcclxuXHRcdGRhdGEgPSBheGlvcy5nZXQodXJsLCBjb25maWcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuYmlkZGluZ19ldmVudCk7XHJcblx0XHRcdGNvbnN0IGFwcHJvdmVkQmlkcyA9IHJlc3BvbnNlLmRhdGEuYmlkZGluZ19ldmVudC5maWx0ZXIoKGJpZCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBiaWQuYXBwcm92ZWQgPT09IHRydWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gYXBwcm92ZWRCaWRzO1xyXG5cdFx0fSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0IHVybCA9IEFQSS5BRE1JTl9CQVNFX1VSTCArIFwiL2JpZGRpbmcvc3RhdHVzXCI7XHJcblxyXG5cdFx0Y29uc3QgZXZlbnRTdGF0dXMgPSB7XHJcblx0XHRcdHN0YXR1cyxcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc29sZS5sb2coZXZlbnRTdGF0dXMpO1xyXG5cdFx0ZGF0YSA9IGF4aW9zLnBvc3QodXJsLCBldmVudFN0YXR1cywgY29uZmlnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEuYmlkZGluZ19ldmVudDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBzYWdhQXBwcm92ZUJpZEV2ZW50ID0gYXN5bmMgKGV2ZW50X2lkKSA9PiB7XHJcblx0Y29uc29sZS5sb2coXCJzYWdhIGZ1bmNcIik7XHJcblx0Y29uc3QgdXJsID0gQVBJLkFETUlOX0JBU0VfVVJMICsgXCIvYmlkZGluZy9hcHByb3ZlL1wiICsgZXZlbnRfaWQ7XHJcblx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIEFQSS5UT0tFTixcclxuXHRcdH0sXHJcblx0fTtcclxuXHRjb25zb2xlLmxvZyh1cmwpO1xyXG5cdGNvbnN0IGRhdGEgPSBheGlvcy5wb3N0KHVybCwgZXZlbnRfaWQsIGNvbmZpZykudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3Qgc2FnYUNhbmNlbEJpZEV2ZW50ID0gYXN5bmMgKGV2ZW50X2lkKSA9PiB7XHJcblx0XHJcblx0Y29uc3QgdXJsID0gQVBJLkFETUlOX0JBU0VfVVJMICsgXCIvYmlkZGluZy9jYW5jZWwvXCIgKyBldmVudF9pZDtcclxuXHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgQVBJLlRPS0VOLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cdGNvbnNvbGUubG9nKHVybCk7XHJcblx0Y29uc3QgZGF0YSA9IGF4aW9zLnBvc3QodXJsLCBldmVudF9pZCwgY29uZmlnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24qIGNyZWF0ZUJpZEV2ZW50KHBheWxvYWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgaXNFdmVudEFkZGVkID0geWllbGQgY2FsbChzYWdhQ3JlYXRlQmlkRXZlbnQsIHBheWxvYWQuZXZlbnQpO1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvbkNyZWF0ZUJpZEV2ZW50U3VjY2Vzcyhpc0V2ZW50QWRkZWQpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRtaW5GZXRjaEJpZEV2ZW50KHBheWxvYWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgZ2V0QWxsQmlkRXZlbnQgPSB5aWVsZCBjYWxsKHNhZ2FBZG1pbkZldGNoQmlkRXZlbnQsIHBheWxvYWQuc3RhdHVzKTtcclxuXHRcdGNvbnNvbGUubG9nKGdldEFsbEJpZEV2ZW50KTtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnNTdWNjZXNzKGdldEFsbEJpZEV2ZW50KSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGFwcHJvdmVCaWRFdmVudChwYXlsb2FkKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGlzQXBwcm92ZWQgPSB5aWVsZCBjYWxsKHNhZ2FBcHByb3ZlQmlkRXZlbnQsIHBheWxvYWQuZXZlbnRfaWQpO1xyXG5cdFx0Y29uc29sZS5sb2coaXNBcHByb3ZlZCk7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9uQXBwcm92ZUV2ZW50U3VjY2Vzcyhpc0FwcHJvdmVkKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGNhbmNlbEJpZEV2ZW50KHBheWxvYWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgaXNBcHByb3ZlZCA9IHlpZWxkIGNhbGwoc2FnYUFwcHJvdmVCaWRFdmVudCwgcGF5bG9hZC5ldmVudF9pZCk7XHJcblx0XHRjb25zb2xlLmxvZyhpc0FwcHJvdmVkKTtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25BcHByb3ZlRXZlbnRTdWNjZXNzKGlzQXBwcm92ZWQpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNSRUFURV9CSURfRVZFTlQsIGNyZWF0ZUJpZEV2ZW50KV0pO1xyXG5cdHlpZWxkIGFsbChbXHJcblx0XHR0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQURNSU5fRkVUQ0hfQklEX0VWRU5UUywgYWRtaW5GZXRjaEJpZEV2ZW50KSxcclxuXHRdKTtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5BUFBST1ZFX0JJRF9FVkVOVCwgYXBwcm92ZUJpZEV2ZW50KV0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNBTkNFTF9CSURfRVZFTlQsIGFwcHJvdmVCaWRFdmVudCldKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9