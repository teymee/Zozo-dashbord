webpackHotUpdate_N_E("pages/bids/completed",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYmlkL2FjdGlvbi5qcyJdLCJuYW1lcyI6WyJhY3Rpb25UeXBlcyIsIkNSRUFURV9CSURfRVZFTlQiLCJDUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1MiLCJBRE1JTl9GRVRDSF9CSURfRVZFTlRTIiwiQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTIiwiQVBQUk9WRV9CSURfRVZFTlQiLCJBUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTIiwiQ0FOQ0VMX0JJRF9FVkVOVCIsIkNBTkNFTF9CSURfRVZFTlRfU1VDQ0VTUyIsImFjdGlvbkNyZWF0ZUJpZEV2ZW50IiwiZXZlbnQiLCJ0eXBlIiwiYWN0aW9uQ3JlYXRlQmlkRXZlbnRTdWNjZXNzIiwiaXNDcmVhdGVkIiwiY29uc29sZSIsImxvZyIsImFjdGlvbkFkbWluRmV0Y2hBdWN0aW9ucyIsInN0YXR1cyIsImFjdGlvbkFkbWluRmV0Y2hBdWN0aW9uc1N1Y2Nlc3MiLCJhdWN0aW9ucyIsImFjdGlvbkFwcHJvdmVFdmVudCIsImV2ZW50X2lkIiwiYWN0aW9uQXBwcm92ZUV2ZW50U3VjY2VzcyIsImlzQXBwcm92ZWQiLCJhY3Rpb25DYW5jZWxFdmVudCIsImFjdGlvbkNhbmNlbEV2ZW50U3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsV0FBVyxHQUFHO0FBQ3JCQyxrQkFBZ0IsRUFBRSxrQkFERztBQUVyQkMsMEJBQXdCLEVBQUUsMEJBRkw7QUFHckJDLHdCQUFzQixFQUFFLHdCQUhIO0FBSXJCQyxnQ0FBOEIsRUFBRSxnQ0FKWDtBQUtyQkMsbUJBQWlCLEVBQUUsbUJBTEU7QUFNckJDLDJCQUF5QixFQUFFLDJCQU5OO0FBT3JCQyxrQkFBZ0IsRUFBRSxrQkFQRztBQVFyQkMsMEJBQXdCLEVBQUU7QUFSTCxDQUFwQjtBQVdBLFNBQVNDLG9CQUFULENBQStCQyxLQUEvQixFQUFxQztBQUN0QyxTQUFNO0FBQUNDLFFBQUksRUFBQ1gsV0FBVyxDQUFDQyxnQkFBbEI7QUFBb0NTLFNBQUssRUFBTEE7QUFBcEMsR0FBTjtBQUNMO0FBRU0sU0FBU0UsMkJBQVQsQ0FBc0NDLFNBQXRDLEVBQWdEO0FBQ2pEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBZ0JGLFNBQTVCO0FBQ0EsU0FBTTtBQUFDRixRQUFJLEVBQUNYLFdBQVcsQ0FBQ0U7QUFBbEIsR0FBTjtBQUNMLEMsQ0FFRDs7QUFDTyxTQUFTYyx3QkFBVCxDQUFtQ0MsTUFBbkMsRUFBMEM7QUFDM0MsU0FBTztBQUFDTixRQUFJLEVBQUNYLFdBQVcsQ0FBQ0csc0JBQWxCO0FBQTBDYyxVQUFNLEVBQU5BO0FBQTFDLEdBQVA7QUFDTDtBQUVNLFNBQVNDLCtCQUFULENBQTBDQyxRQUExQyxFQUFtRDtBQUNwREwsU0FBTyxDQUFDQyxHQUFSLENBQVlJLFFBQVo7QUFDQSxTQUFPO0FBQUNSLFFBQUksRUFBQ1gsV0FBVyxDQUFDSSw4QkFBbEI7QUFBa0RlLFlBQVEsRUFBUkE7QUFBbEQsR0FBUDtBQUNMO0FBRU0sU0FBU0Msa0JBQVQsQ0FBNkJDLFFBQTdCLEVBQXNDO0FBQ3ZDUCxTQUFPLENBQUNDLEdBQVIsQ0FBWU0sUUFBWjtBQUNBLFNBQU87QUFBQ1YsUUFBSSxFQUFDWCxXQUFXLENBQUNLLGlCQUFsQjtBQUFxQ2dCLFlBQVEsRUFBUkE7QUFBckMsR0FBUDtBQUNMO0FBRU0sU0FBU0MseUJBQVQsQ0FBb0NDLFVBQXBDLEVBQStDO0FBQ2hEVCxTQUFPLENBQUNDLEdBQVIsQ0FBWVEsVUFBWjtBQUNBLFNBQU87QUFBQ1osUUFBSSxFQUFDWCxXQUFXLENBQUNNLHlCQUFsQjtBQUE2Q2lCLGNBQVUsRUFBVkE7QUFBN0MsR0FBUDtBQUNMO0FBRU0sU0FBU0MsaUJBQVQsQ0FBNEJILFFBQTVCLEVBQXFDO0FBQ3RDUCxTQUFPLENBQUNDLEdBQVIsQ0FBWU0sUUFBWjtBQUNBLFNBQU87QUFBQ1YsUUFBSSxFQUFDWCxXQUFXLENBQUNPLGdCQUFsQjtBQUFvQ2MsWUFBUSxFQUFSQTtBQUFwQyxHQUFQO0FBQ0w7QUFFTSxTQUFTSSx3QkFBVCxDQUFtQ0YsVUFBbkMsRUFBOEM7QUFDL0NULFNBQU8sQ0FBQ0MsR0FBUixDQUFZUSxVQUFaO0FBQ0EsU0FBTztBQUFDWixRQUFJLEVBQUNYLFdBQVcsQ0FBQ1Esd0JBQWxCO0FBQTRDZSxjQUFVLEVBQVZBO0FBQTVDLEdBQVA7QUFDTCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iaWRzL2NvbXBsZXRlZC4zYzljYTZmOGQ5NjExMzQyMTg2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgICBDUkVBVEVfQklEX0VWRU5UOiBcIkNSRUFURV9CSURfRVZFTlRcIixcclxuICAgICAgQ1JFQVRFX0JJRF9FVkVOVF9TVUNDRVNTOiBcIkNSRUFURV9CSURfRVZFTlRfU1VDQ0VTU1wiLFxyXG4gICAgICBBRE1JTl9GRVRDSF9CSURfRVZFTlRTOiBcIkFETUlOX0ZFVENIX0JJRF9FVkVOVFNcIixcclxuICAgICAgQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTOiBcIkFETUlOX0ZFVENIX0JJRF9FVkVOVFNfU1VDQ0VTU1wiLFxyXG4gICAgICBBUFBST1ZFX0JJRF9FVkVOVDogXCJBUFBST1ZFX0JJRF9FVkVOVFwiLFxyXG4gICAgICBBUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTOiBcIkFQUFJPVkVfQklEX0VWRU5UX1NVQ0NFU1NcIixcclxuICAgICAgQ0FOQ0VMX0JJRF9FVkVOVDogXCJDQU5DRUxfQklEX0VWRU5UXCIsXHJcbiAgICAgIENBTkNFTF9CSURfRVZFTlRfU1VDQ0VTUzogXCJDQU5DRUxfQklEX0VWRU5UX1NVQ0NFU1NcIixcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNyZWF0ZUJpZEV2ZW50IChldmVudCl7XHJcbiAgICAgIHJldHVybnt0eXBlOmFjdGlvblR5cGVzLkNSRUFURV9CSURfRVZFTlQsIGV2ZW50fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ3JlYXRlQmlkRXZlbnRTdWNjZXNzIChpc0NyZWF0ZWQpe1xyXG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRlZCBiaWQnICsgaXNDcmVhdGVkKVxyXG4gICAgICByZXR1cm57dHlwZTphY3Rpb25UeXBlcy5DUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1N9XHJcbn1cclxuXHJcbi8vQURNSU5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkFkbWluRmV0Y2hBdWN0aW9ucyAoc3RhdHVzKXtcclxuICAgICAgcmV0dXJuIHt0eXBlOmFjdGlvblR5cGVzLkFETUlOX0ZFVENIX0JJRF9FVkVOVFMsIHN0YXR1c31cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkFkbWluRmV0Y2hBdWN0aW9uc1N1Y2Nlc3MgKGF1Y3Rpb25zKXtcclxuICAgICAgY29uc29sZS5sb2coYXVjdGlvbnMpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5BRE1JTl9GRVRDSF9CSURfRVZFTlRTX1NVQ0NFU1MsIGF1Y3Rpb25zfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQXBwcm92ZUV2ZW50IChldmVudF9pZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50X2lkKVxyXG4gICAgICByZXR1cm4ge3R5cGU6YWN0aW9uVHlwZXMuQVBQUk9WRV9CSURfRVZFTlQsIGV2ZW50X2lkfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQXBwcm92ZUV2ZW50U3VjY2VzcyAoaXNBcHByb3ZlZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlzQXBwcm92ZWQpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5BUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTLCBpc0FwcHJvdmVkfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ2FuY2VsRXZlbnQgKGV2ZW50X2lkKXtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnRfaWQpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5DQU5DRUxfQklEX0VWRU5ULCBldmVudF9pZH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNhbmNlbEV2ZW50U3VjY2VzcyAoaXNBcHByb3ZlZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlzQXBwcm92ZWQpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5DQU5DRUxfQklEX0VWRU5UX1NVQ0NFU1MsIGlzQXBwcm92ZWR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9