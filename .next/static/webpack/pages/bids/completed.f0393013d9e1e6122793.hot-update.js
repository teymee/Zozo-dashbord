webpackHotUpdate_N_E("pages/bids/completed",{

/***/ "./store/bid/action.js":
/*!*****************************!*\
  !*** ./store/bid/action.js ***!
  \*****************************/
/*! exports provided: actionTypes, actionCreateBidEvent, actionCreateBidEventSuccess, actionAdminFetchAuctions, actionAdminFetchAuctionsSuccess, actionApproveEvent, actionApproveEventSuccess, actionCancelEvent, actionCancelEventSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCreateBidEvent", function() { return actionCreateBidEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCreateBidEventSuccess", function() { return actionCreateBidEventSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionAdminFetchAuctions", function() { return actionAdminFetchAuctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionAdminFetchAuctionsSuccess", function() { return actionAdminFetchAuctionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionApproveEvent", function() { return actionApproveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionApproveEventSuccess", function() { return actionApproveEventSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCancelEvent", function() { return actionCancelEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCancelEventSuccess", function() { return actionCancelEventSuccess; });
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

var actionTypes = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
  CREATE_BID_EVENT: "CREATE_BID_EVENT",
  CREATE_BID_EVENT_SUCCESS: "CREATE_BID_EVENT_SUCCESS",
  ADMIN_FETCH_BID_EVENTS: "ADMIN_FETCH_BID_EVENTS",
  ADMIN_FETCH_BID_EVENTS_SUCCESS: "ADMIN_FETCH_BID_EVENTS_SUCCESS",
  APPROVE_BID_EVENT: "APPROVE_BID_EVENT",
  APPROVE_BID_EVENT_SUCCESS: "APPROVE_BID_EVENT_SUCCESS",
  CANCEL_BID_EVENTT: "APPROVE_BID_EVENT"
}, "APPROVE_BID_EVENT_SUCCESS", "APPROVE_BID_EVENT_SUCCESS");
function actionCreateBidEvent(event) {
  return {
    type: actionTypes.CREATE_BID_EVENT,
    event: event
  };
}
function actionCreateBidEventSuccess(isCreated) {
  console.log('created bid' + isCreated);
  return {
    type: actionTypes.CREATE_BID_EVENT_SUCCESS
  };
} //ADMIN

function actionAdminFetchAuctions(status) {
  return {
    type: actionTypes.ADMIN_FETCH_BID_EVENTS,
    status: status
  };
}
function actionAdminFetchAuctionsSuccess(auctions) {
  console.log(auctions);
  return {
    type: actionTypes.ADMIN_FETCH_BID_EVENTS_SUCCESS,
    auctions: auctions
  };
}
function actionApproveEvent(event_id) {
  console.log(event_id);
  return {
    type: actionTypes.APPROVE_BID_EVENT,
    event_id: event_id
  };
}
function actionApproveEventSuccess(isApproved) {
  console.log(isApproved);
  return {
    type: actionTypes.APPROVE_BID_EVENT_SUCCESS,
    isApproved: isApproved
  };
}
function actionCancelEvent(event_id) {
  console.log(event_id);
  return {
    type: actionTypes.CANCEL_BID_EVENT,
    event_id: event_id
  };
}
function actionCancelEventSuccess(isApproved) {
  console.log(isApproved);
  return {
    type: actionTypes.CANCEL_BID_EVENT_SUCCESS,
    isApproved: isApproved
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYmlkL2FjdGlvbi5qcyJdLCJuYW1lcyI6WyJhY3Rpb25UeXBlcyIsIkNSRUFURV9CSURfRVZFTlQiLCJDUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1MiLCJBRE1JTl9GRVRDSF9CSURfRVZFTlRTIiwiQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTIiwiQVBQUk9WRV9CSURfRVZFTlQiLCJBUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTIiwiQ0FOQ0VMX0JJRF9FVkVOVFQiLCJhY3Rpb25DcmVhdGVCaWRFdmVudCIsImV2ZW50IiwidHlwZSIsImFjdGlvbkNyZWF0ZUJpZEV2ZW50U3VjY2VzcyIsImlzQ3JlYXRlZCIsImNvbnNvbGUiLCJsb2ciLCJhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnMiLCJzdGF0dXMiLCJhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnNTdWNjZXNzIiwiYXVjdGlvbnMiLCJhY3Rpb25BcHByb3ZlRXZlbnQiLCJldmVudF9pZCIsImFjdGlvbkFwcHJvdmVFdmVudFN1Y2Nlc3MiLCJpc0FwcHJvdmVkIiwiYWN0aW9uQ2FuY2VsRXZlbnQiLCJDQU5DRUxfQklEX0VWRU5UIiwiYWN0aW9uQ2FuY2VsRXZlbnRTdWNjZXNzIiwiQ0FOQ0VMX0JJRF9FVkVOVF9TVUNDRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsV0FBVyxHQUFHO0FBQ3JCQyxrQkFBZ0IsRUFBRSxrQkFEQTtBQUVsQkMsMEJBQXdCLEVBQUUsMEJBRlI7QUFHbEJDLHdCQUFzQixFQUFFLHdCQUhOO0FBSWxCQyxnQ0FBOEIsRUFBRSxnQ0FKZDtBQUtsQkMsbUJBQWlCLEVBQUUsbUJBTEQ7QUFNbEJDLDJCQUF5QixFQUFFLDJCQU5UO0FBT2xCQyxtQkFBaUIsRUFBRTtBQVBELGdDQVFTLDJCQVJULENBQWpCO0FBV0EsU0FBU0Msb0JBQVQsQ0FBK0JDLEtBQS9CLEVBQXFDO0FBQ3RDLFNBQU07QUFBQ0MsUUFBSSxFQUFDVixXQUFXLENBQUNDLGdCQUFsQjtBQUFvQ1EsU0FBSyxFQUFMQTtBQUFwQyxHQUFOO0FBQ0w7QUFFTSxTQUFTRSwyQkFBVCxDQUFzQ0MsU0FBdEMsRUFBZ0Q7QUFDakRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFnQkYsU0FBNUI7QUFDQSxTQUFNO0FBQUNGLFFBQUksRUFBQ1YsV0FBVyxDQUFDRTtBQUFsQixHQUFOO0FBQ0wsQyxDQUVEOztBQUNPLFNBQVNhLHdCQUFULENBQW1DQyxNQUFuQyxFQUEwQztBQUMzQyxTQUFPO0FBQUNOLFFBQUksRUFBQ1YsV0FBVyxDQUFDRyxzQkFBbEI7QUFBMENhLFVBQU0sRUFBTkE7QUFBMUMsR0FBUDtBQUNMO0FBRU0sU0FBU0MsK0JBQVQsQ0FBMENDLFFBQTFDLEVBQW1EO0FBQ3BETCxTQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBWjtBQUNBLFNBQU87QUFBQ1IsUUFBSSxFQUFDVixXQUFXLENBQUNJLDhCQUFsQjtBQUFrRGMsWUFBUSxFQUFSQTtBQUFsRCxHQUFQO0FBQ0w7QUFFTSxTQUFTQyxrQkFBVCxDQUE2QkMsUUFBN0IsRUFBc0M7QUFDdkNQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTSxRQUFaO0FBQ0EsU0FBTztBQUFDVixRQUFJLEVBQUNWLFdBQVcsQ0FBQ0ssaUJBQWxCO0FBQXFDZSxZQUFRLEVBQVJBO0FBQXJDLEdBQVA7QUFDTDtBQUVNLFNBQVNDLHlCQUFULENBQW9DQyxVQUFwQyxFQUErQztBQUNoRFQsU0FBTyxDQUFDQyxHQUFSLENBQVlRLFVBQVo7QUFDQSxTQUFPO0FBQUNaLFFBQUksRUFBQ1YsV0FBVyxDQUFDTSx5QkFBbEI7QUFBNkNnQixjQUFVLEVBQVZBO0FBQTdDLEdBQVA7QUFDTDtBQUVNLFNBQVNDLGlCQUFULENBQTRCSCxRQUE1QixFQUFxQztBQUN0Q1AsU0FBTyxDQUFDQyxHQUFSLENBQVlNLFFBQVo7QUFDQSxTQUFPO0FBQUNWLFFBQUksRUFBQ1YsV0FBVyxDQUFDd0IsZ0JBQWxCO0FBQW9DSixZQUFRLEVBQVJBO0FBQXBDLEdBQVA7QUFDTDtBQUVNLFNBQVNLLHdCQUFULENBQW1DSCxVQUFuQyxFQUE4QztBQUMvQ1QsU0FBTyxDQUFDQyxHQUFSLENBQVlRLFVBQVo7QUFDQSxTQUFPO0FBQUNaLFFBQUksRUFBQ1YsV0FBVyxDQUFDMEIsd0JBQWxCO0FBQTRDSixjQUFVLEVBQVZBO0FBQTVDLEdBQVA7QUFDTCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iaWRzL2NvbXBsZXRlZC5mMDM5MzAxM2Q5ZTFlNjEyMjc5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgICBDUkVBVEVfQklEX0VWRU5UOiBcIkNSRUFURV9CSURfRVZFTlRcIixcclxuICAgICAgQ1JFQVRFX0JJRF9FVkVOVF9TVUNDRVNTOiBcIkNSRUFURV9CSURfRVZFTlRfU1VDQ0VTU1wiLFxyXG4gICAgICBBRE1JTl9GRVRDSF9CSURfRVZFTlRTOiBcIkFETUlOX0ZFVENIX0JJRF9FVkVOVFNcIixcclxuICAgICAgQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTOiBcIkFETUlOX0ZFVENIX0JJRF9FVkVOVFNfU1VDQ0VTU1wiLFxyXG4gICAgICBBUFBST1ZFX0JJRF9FVkVOVDogXCJBUFBST1ZFX0JJRF9FVkVOVFwiLFxyXG4gICAgICBBUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTOiBcIkFQUFJPVkVfQklEX0VWRU5UX1NVQ0NFU1NcIixcclxuICAgICAgQ0FOQ0VMX0JJRF9FVkVOVFQ6IFwiQVBQUk9WRV9CSURfRVZFTlRcIixcclxuICAgICAgQVBQUk9WRV9CSURfRVZFTlRfU1VDQ0VTUzogXCJBUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DcmVhdGVCaWRFdmVudCAoZXZlbnQpe1xyXG4gICAgICByZXR1cm57dHlwZTphY3Rpb25UeXBlcy5DUkVBVEVfQklEX0VWRU5ULCBldmVudH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNyZWF0ZUJpZEV2ZW50U3VjY2VzcyAoaXNDcmVhdGVkKXtcclxuICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZWQgYmlkJyArIGlzQ3JlYXRlZClcclxuICAgICAgcmV0dXJue3R5cGU6YWN0aW9uVHlwZXMuQ1JFQVRFX0JJRF9FVkVOVF9TVUNDRVNTfVxyXG59XHJcblxyXG4vL0FETUlOXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnMgKHN0YXR1cyl7XHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5BRE1JTl9GRVRDSF9CSURfRVZFTlRTLCBzdGF0dXN9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnNTdWNjZXNzIChhdWN0aW9ucyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGF1Y3Rpb25zKVxyXG4gICAgICByZXR1cm4ge3R5cGU6YWN0aW9uVHlwZXMuQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTLCBhdWN0aW9uc31cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkFwcHJvdmVFdmVudCAoZXZlbnRfaWQpe1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudF9pZClcclxuICAgICAgcmV0dXJuIHt0eXBlOmFjdGlvblR5cGVzLkFQUFJPVkVfQklEX0VWRU5ULCBldmVudF9pZH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkFwcHJvdmVFdmVudFN1Y2Nlc3MgKGlzQXBwcm92ZWQpe1xyXG4gICAgICBjb25zb2xlLmxvZyhpc0FwcHJvdmVkKVxyXG4gICAgICByZXR1cm4ge3R5cGU6YWN0aW9uVHlwZXMuQVBQUk9WRV9CSURfRVZFTlRfU1VDQ0VTUywgaXNBcHByb3ZlZH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNhbmNlbEV2ZW50IChldmVudF9pZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50X2lkKVxyXG4gICAgICByZXR1cm4ge3R5cGU6YWN0aW9uVHlwZXMuQ0FOQ0VMX0JJRF9FVkVOVCwgZXZlbnRfaWR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DYW5jZWxFdmVudFN1Y2Nlc3MgKGlzQXBwcm92ZWQpe1xyXG4gICAgICBjb25zb2xlLmxvZyhpc0FwcHJvdmVkKVxyXG4gICAgICByZXR1cm4ge3R5cGU6YWN0aW9uVHlwZXMuQ0FOQ0VMX0JJRF9FVkVOVF9TVUNDRVNTLCBpc0FwcHJvdmVkfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==