webpackHotUpdate_N_E("pages/_app",{

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
var actionTypes = {
  CREATE_BID_EVENT: "CREATE_BID_EVENT",
  CREATE_BID_EVENT_SUCCESS: "CREATE_BID_EVENT_SUCCESS",
  ADMIN_FETCH_BID_EVENTS: "ADMIN_FETCH_BID_EVENTS",
  ADMIN_FETCH_BID_EVENTS_SUCCESS: "ADMIN_FETCH_BID_EVENTS_SUCCESS",
  APPROVE_BID_EVENT: "APPROVE_BID_EVENT",
  APPROVE_BID_EVENT_SUCCESS: "APPROVE_BID_EVENT_SUCCESS",
  CANCEL_BID_EVENT: "CANCEL_BID_EVENT",
  CANCEL_BID_EVENT_SUCCESS: "CANCEL_BID_EVENT_SUCCESS"
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYmlkL2FjdGlvbi5qcyJdLCJuYW1lcyI6WyJhY3Rpb25UeXBlcyIsIkNSRUFURV9CSURfRVZFTlQiLCJDUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1MiLCJBRE1JTl9GRVRDSF9CSURfRVZFTlRTIiwiQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTIiwiQVBQUk9WRV9CSURfRVZFTlQiLCJBUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTIiwiQ0FOQ0VMX0JJRF9FVkVOVCIsIkNBTkNFTF9CSURfRVZFTlRfU1VDQ0VTUyIsImFjdGlvbkNyZWF0ZUJpZEV2ZW50IiwiZXZlbnQiLCJ0eXBlIiwiYWN0aW9uQ3JlYXRlQmlkRXZlbnRTdWNjZXNzIiwiaXNDcmVhdGVkIiwiY29uc29sZSIsImxvZyIsImFjdGlvbkFkbWluRmV0Y2hBdWN0aW9ucyIsInN0YXR1cyIsImFjdGlvbkFkbWluRmV0Y2hBdWN0aW9uc1N1Y2Nlc3MiLCJhdWN0aW9ucyIsImFjdGlvbkFwcHJvdmVFdmVudCIsImV2ZW50X2lkIiwiYWN0aW9uQXBwcm92ZUV2ZW50U3VjY2VzcyIsImlzQXBwcm92ZWQiLCJhY3Rpb25DYW5jZWxFdmVudCIsImFjdGlvbkNhbmNlbEV2ZW50U3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsV0FBVyxHQUFHO0FBQ3JCQyxrQkFBZ0IsRUFBRSxrQkFERztBQUVyQkMsMEJBQXdCLEVBQUUsMEJBRkw7QUFHckJDLHdCQUFzQixFQUFFLHdCQUhIO0FBSXJCQyxnQ0FBOEIsRUFBRSxnQ0FKWDtBQUtyQkMsbUJBQWlCLEVBQUUsbUJBTEU7QUFNckJDLDJCQUF5QixFQUFFLDJCQU5OO0FBT3JCQyxrQkFBZ0IsRUFBRSxrQkFQRztBQVFyQkMsMEJBQXdCLEVBQUU7QUFSTCxDQUFwQjtBQVdBLFNBQVNDLG9CQUFULENBQStCQyxLQUEvQixFQUFxQztBQUN0QyxTQUFNO0FBQUNDLFFBQUksRUFBQ1gsV0FBVyxDQUFDQyxnQkFBbEI7QUFBb0NTLFNBQUssRUFBTEE7QUFBcEMsR0FBTjtBQUNMO0FBRU0sU0FBU0UsMkJBQVQsQ0FBc0NDLFNBQXRDLEVBQWdEO0FBQ2pEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBZ0JGLFNBQTVCO0FBQ0EsU0FBTTtBQUFDRixRQUFJLEVBQUNYLFdBQVcsQ0FBQ0U7QUFBbEIsR0FBTjtBQUNMLEMsQ0FFRDs7QUFDTyxTQUFTYyx3QkFBVCxDQUFtQ0MsTUFBbkMsRUFBMEM7QUFDM0MsU0FBTztBQUFDTixRQUFJLEVBQUNYLFdBQVcsQ0FBQ0csc0JBQWxCO0FBQTBDYyxVQUFNLEVBQU5BO0FBQTFDLEdBQVA7QUFDTDtBQUVNLFNBQVNDLCtCQUFULENBQTBDQyxRQUExQyxFQUFtRDtBQUNwREwsU0FBTyxDQUFDQyxHQUFSLENBQVlJLFFBQVo7QUFDQSxTQUFPO0FBQUNSLFFBQUksRUFBQ1gsV0FBVyxDQUFDSSw4QkFBbEI7QUFBa0RlLFlBQVEsRUFBUkE7QUFBbEQsR0FBUDtBQUNMO0FBRU0sU0FBU0Msa0JBQVQsQ0FBNkJDLFFBQTdCLEVBQXNDO0FBQ3ZDUCxTQUFPLENBQUNDLEdBQVIsQ0FBWU0sUUFBWjtBQUNBLFNBQU87QUFBQ1YsUUFBSSxFQUFDWCxXQUFXLENBQUNLLGlCQUFsQjtBQUFxQ2dCLFlBQVEsRUFBUkE7QUFBckMsR0FBUDtBQUNMO0FBRU0sU0FBU0MseUJBQVQsQ0FBb0NDLFVBQXBDLEVBQStDO0FBQ2hEVCxTQUFPLENBQUNDLEdBQVIsQ0FBWVEsVUFBWjtBQUNBLFNBQU87QUFBQ1osUUFBSSxFQUFDWCxXQUFXLENBQUNNLHlCQUFsQjtBQUE2Q2lCLGNBQVUsRUFBVkE7QUFBN0MsR0FBUDtBQUNMO0FBRU0sU0FBU0MsaUJBQVQsQ0FBNEJILFFBQTVCLEVBQXFDO0FBQ3RDUCxTQUFPLENBQUNDLEdBQVIsQ0FBWU0sUUFBWjtBQUNBLFNBQU87QUFBQ1YsUUFBSSxFQUFDWCxXQUFXLENBQUNPLGdCQUFsQjtBQUFvQ2MsWUFBUSxFQUFSQTtBQUFwQyxHQUFQO0FBQ0w7QUFFTSxTQUFTSSx3QkFBVCxDQUFtQ0YsVUFBbkMsRUFBOEM7QUFDL0NULFNBQU8sQ0FBQ0MsR0FBUixDQUFZUSxVQUFaO0FBQ0EsU0FBTztBQUFDWixRQUFJLEVBQUNYLFdBQVcsQ0FBQ1Esd0JBQWxCO0FBQTRDZSxjQUFVLEVBQVZBO0FBQTVDLEdBQVA7QUFDTCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNjOWNhNmY4ZDk2MTEzNDIxODZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICAgIENSRUFURV9CSURfRVZFTlQ6IFwiQ1JFQVRFX0JJRF9FVkVOVFwiLFxyXG4gICAgICBDUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1M6IFwiQ1JFQVRFX0JJRF9FVkVOVF9TVUNDRVNTXCIsXHJcbiAgICAgIEFETUlOX0ZFVENIX0JJRF9FVkVOVFM6IFwiQURNSU5fRkVUQ0hfQklEX0VWRU5UU1wiLFxyXG4gICAgICBBRE1JTl9GRVRDSF9CSURfRVZFTlRTX1NVQ0NFU1M6IFwiQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTXCIsXHJcbiAgICAgIEFQUFJPVkVfQklEX0VWRU5UOiBcIkFQUFJPVkVfQklEX0VWRU5UXCIsXHJcbiAgICAgIEFQUFJPVkVfQklEX0VWRU5UX1NVQ0NFU1M6IFwiQVBQUk9WRV9CSURfRVZFTlRfU1VDQ0VTU1wiLFxyXG4gICAgICBDQU5DRUxfQklEX0VWRU5UOiBcIkNBTkNFTF9CSURfRVZFTlRcIixcclxuICAgICAgQ0FOQ0VMX0JJRF9FVkVOVF9TVUNDRVNTOiBcIkNBTkNFTF9CSURfRVZFTlRfU1VDQ0VTU1wiLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ3JlYXRlQmlkRXZlbnQgKGV2ZW50KXtcclxuICAgICAgcmV0dXJue3R5cGU6YWN0aW9uVHlwZXMuQ1JFQVRFX0JJRF9FVkVOVCwgZXZlbnR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DcmVhdGVCaWRFdmVudFN1Y2Nlc3MgKGlzQ3JlYXRlZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVkIGJpZCcgKyBpc0NyZWF0ZWQpXHJcbiAgICAgIHJldHVybnt0eXBlOmFjdGlvblR5cGVzLkNSRUFURV9CSURfRVZFTlRfU1VDQ0VTU31cclxufVxyXG5cclxuLy9BRE1JTlxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQWRtaW5GZXRjaEF1Y3Rpb25zIChzdGF0dXMpe1xyXG4gICAgICByZXR1cm4ge3R5cGU6YWN0aW9uVHlwZXMuQURNSU5fRkVUQ0hfQklEX0VWRU5UUywgc3RhdHVzfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQWRtaW5GZXRjaEF1Y3Rpb25zU3VjY2VzcyAoYXVjdGlvbnMpe1xyXG4gICAgICBjb25zb2xlLmxvZyhhdWN0aW9ucylcclxuICAgICAgcmV0dXJuIHt0eXBlOmFjdGlvblR5cGVzLkFETUlOX0ZFVENIX0JJRF9FVkVOVFNfU1VDQ0VTUywgYXVjdGlvbnN9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25BcHByb3ZlRXZlbnQgKGV2ZW50X2lkKXtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnRfaWQpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5BUFBST1ZFX0JJRF9FVkVOVCwgZXZlbnRfaWR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25BcHByb3ZlRXZlbnRTdWNjZXNzIChpc0FwcHJvdmVkKXtcclxuICAgICAgY29uc29sZS5sb2coaXNBcHByb3ZlZClcclxuICAgICAgcmV0dXJuIHt0eXBlOmFjdGlvblR5cGVzLkFQUFJPVkVfQklEX0VWRU5UX1NVQ0NFU1MsIGlzQXBwcm92ZWR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DYW5jZWxFdmVudCAoZXZlbnRfaWQpe1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudF9pZClcclxuICAgICAgcmV0dXJuIHt0eXBlOmFjdGlvblR5cGVzLkNBTkNFTF9CSURfRVZFTlQsIGV2ZW50X2lkfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ2FuY2VsRXZlbnRTdWNjZXNzIChpc0FwcHJvdmVkKXtcclxuICAgICAgY29uc29sZS5sb2coaXNBcHByb3ZlZClcclxuICAgICAgcmV0dXJuIHt0eXBlOmFjdGlvblR5cGVzLkNBTkNFTF9CSURfRVZFTlRfU1VDQ0VTUywgaXNBcHByb3ZlZH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=