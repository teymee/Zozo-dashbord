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
  APPROVE_BID_EVENT_SUCCESS: "APPROVE_BID_EVENT_SUCCESS"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYmlkL2FjdGlvbi5qcyJdLCJuYW1lcyI6WyJhY3Rpb25UeXBlcyIsIkNSRUFURV9CSURfRVZFTlQiLCJDUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1MiLCJBRE1JTl9GRVRDSF9CSURfRVZFTlRTIiwiQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTIiwiQVBQUk9WRV9CSURfRVZFTlQiLCJBUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTIiwiYWN0aW9uQ3JlYXRlQmlkRXZlbnQiLCJldmVudCIsInR5cGUiLCJhY3Rpb25DcmVhdGVCaWRFdmVudFN1Y2Nlc3MiLCJpc0NyZWF0ZWQiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9uQWRtaW5GZXRjaEF1Y3Rpb25zIiwic3RhdHVzIiwiYWN0aW9uQWRtaW5GZXRjaEF1Y3Rpb25zU3VjY2VzcyIsImF1Y3Rpb25zIiwiYWN0aW9uQXBwcm92ZUV2ZW50IiwiZXZlbnRfaWQiLCJhY3Rpb25BcHByb3ZlRXZlbnRTdWNjZXNzIiwiaXNBcHByb3ZlZCIsImFjdGlvbkNhbmNlbEV2ZW50IiwiQ0FOQ0VMX0JJRF9FVkVOVCIsImFjdGlvbkNhbmNlbEV2ZW50U3VjY2VzcyIsIkNBTkNFTF9CSURfRVZFTlRfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsV0FBVyxHQUFHO0FBQ3JCQyxrQkFBZ0IsRUFBRSxrQkFERztBQUVyQkMsMEJBQXdCLEVBQUUsMEJBRkw7QUFHckJDLHdCQUFzQixFQUFFLHdCQUhIO0FBSXJCQyxnQ0FBOEIsRUFBRSxnQ0FKWDtBQUtyQkMsbUJBQWlCLEVBQUUsbUJBTEU7QUFNckJDLDJCQUF5QixFQUFFO0FBTk4sQ0FBcEI7QUFTQSxTQUFTQyxvQkFBVCxDQUErQkMsS0FBL0IsRUFBcUM7QUFDdEMsU0FBTTtBQUFDQyxRQUFJLEVBQUNULFdBQVcsQ0FBQ0MsZ0JBQWxCO0FBQW9DTyxTQUFLLEVBQUxBO0FBQXBDLEdBQU47QUFDTDtBQUVNLFNBQVNFLDJCQUFULENBQXNDQyxTQUF0QyxFQUFnRDtBQUNqREMsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQWdCRixTQUE1QjtBQUNBLFNBQU07QUFBQ0YsUUFBSSxFQUFDVCxXQUFXLENBQUNFO0FBQWxCLEdBQU47QUFDTCxDLENBRUQ7O0FBQ08sU0FBU1ksd0JBQVQsQ0FBbUNDLE1BQW5DLEVBQTBDO0FBQzNDLFNBQU87QUFBQ04sUUFBSSxFQUFDVCxXQUFXLENBQUNHLHNCQUFsQjtBQUEwQ1ksVUFBTSxFQUFOQTtBQUExQyxHQUFQO0FBQ0w7QUFFTSxTQUFTQywrQkFBVCxDQUEwQ0MsUUFBMUMsRUFBbUQ7QUFDcERMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSSxRQUFaO0FBQ0EsU0FBTztBQUFDUixRQUFJLEVBQUNULFdBQVcsQ0FBQ0ksOEJBQWxCO0FBQWtEYSxZQUFRLEVBQVJBO0FBQWxELEdBQVA7QUFDTDtBQUVNLFNBQVNDLGtCQUFULENBQTZCQyxRQUE3QixFQUFzQztBQUN2Q1AsU0FBTyxDQUFDQyxHQUFSLENBQVlNLFFBQVo7QUFDQSxTQUFPO0FBQUNWLFFBQUksRUFBQ1QsV0FBVyxDQUFDSyxpQkFBbEI7QUFBcUNjLFlBQVEsRUFBUkE7QUFBckMsR0FBUDtBQUNMO0FBRU0sU0FBU0MseUJBQVQsQ0FBb0NDLFVBQXBDLEVBQStDO0FBQ2hEVCxTQUFPLENBQUNDLEdBQVIsQ0FBWVEsVUFBWjtBQUNBLFNBQU87QUFBQ1osUUFBSSxFQUFDVCxXQUFXLENBQUNNLHlCQUFsQjtBQUE2Q2UsY0FBVSxFQUFWQTtBQUE3QyxHQUFQO0FBQ0w7QUFFTSxTQUFTQyxpQkFBVCxDQUE0QkgsUUFBNUIsRUFBcUM7QUFDdENQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTSxRQUFaO0FBQ0EsU0FBTztBQUFDVixRQUFJLEVBQUNULFdBQVcsQ0FBQ3VCLGdCQUFsQjtBQUFvQ0osWUFBUSxFQUFSQTtBQUFwQyxHQUFQO0FBQ0w7QUFFTSxTQUFTSyx3QkFBVCxDQUFtQ0gsVUFBbkMsRUFBOEM7QUFDL0NULFNBQU8sQ0FBQ0MsR0FBUixDQUFZUSxVQUFaO0FBQ0EsU0FBTztBQUFDWixRQUFJLEVBQUNULFdBQVcsQ0FBQ3lCLHdCQUFsQjtBQUE0Q0osY0FBVSxFQUFWQTtBQUE1QyxHQUFQO0FBQ0wiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43ZjBjNDcyOGY0ZGQzNmFmNzM1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgICBDUkVBVEVfQklEX0VWRU5UOiBcIkNSRUFURV9CSURfRVZFTlRcIixcclxuICAgICAgQ1JFQVRFX0JJRF9FVkVOVF9TVUNDRVNTOiBcIkNSRUFURV9CSURfRVZFTlRfU1VDQ0VTU1wiLFxyXG4gICAgICBBRE1JTl9GRVRDSF9CSURfRVZFTlRTOiBcIkFETUlOX0ZFVENIX0JJRF9FVkVOVFNcIixcclxuICAgICAgQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTOiBcIkFETUlOX0ZFVENIX0JJRF9FVkVOVFNfU1VDQ0VTU1wiLFxyXG4gICAgICBBUFBST1ZFX0JJRF9FVkVOVDogXCJBUFBST1ZFX0JJRF9FVkVOVFwiLFxyXG4gICAgICBBUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTOiBcIkFQUFJPVkVfQklEX0VWRU5UX1NVQ0NFU1NcIixcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNyZWF0ZUJpZEV2ZW50IChldmVudCl7XHJcbiAgICAgIHJldHVybnt0eXBlOmFjdGlvblR5cGVzLkNSRUFURV9CSURfRVZFTlQsIGV2ZW50fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ3JlYXRlQmlkRXZlbnRTdWNjZXNzIChpc0NyZWF0ZWQpe1xyXG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRlZCBiaWQnICsgaXNDcmVhdGVkKVxyXG4gICAgICByZXR1cm57dHlwZTphY3Rpb25UeXBlcy5DUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1N9XHJcbn1cclxuXHJcbi8vQURNSU5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkFkbWluRmV0Y2hBdWN0aW9ucyAoc3RhdHVzKXtcclxuICAgICAgcmV0dXJuIHt0eXBlOmFjdGlvblR5cGVzLkFETUlOX0ZFVENIX0JJRF9FVkVOVFMsIHN0YXR1c31cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkFkbWluRmV0Y2hBdWN0aW9uc1N1Y2Nlc3MgKGF1Y3Rpb25zKXtcclxuICAgICAgY29uc29sZS5sb2coYXVjdGlvbnMpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5BRE1JTl9GRVRDSF9CSURfRVZFTlRTX1NVQ0NFU1MsIGF1Y3Rpb25zfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQXBwcm92ZUV2ZW50IChldmVudF9pZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50X2lkKVxyXG4gICAgICByZXR1cm4ge3R5cGU6YWN0aW9uVHlwZXMuQVBQUk9WRV9CSURfRVZFTlQsIGV2ZW50X2lkfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQXBwcm92ZUV2ZW50U3VjY2VzcyAoaXNBcHByb3ZlZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlzQXBwcm92ZWQpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5BUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTLCBpc0FwcHJvdmVkfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ2FuY2VsRXZlbnQgKGV2ZW50X2lkKXtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnRfaWQpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5DQU5DRUxfQklEX0VWRU5ULCBldmVudF9pZH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNhbmNlbEV2ZW50U3VjY2VzcyAoaXNBcHByb3ZlZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlzQXBwcm92ZWQpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5DQU5DRUxfQklEX0VWRU5UX1NVQ0NFU1MsIGlzQXBwcm92ZWR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9