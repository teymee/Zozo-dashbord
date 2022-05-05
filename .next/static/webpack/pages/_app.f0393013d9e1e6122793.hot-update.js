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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYmlkL2FjdGlvbi5qcyJdLCJuYW1lcyI6WyJhY3Rpb25UeXBlcyIsIkNSRUFURV9CSURfRVZFTlQiLCJDUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1MiLCJBRE1JTl9GRVRDSF9CSURfRVZFTlRTIiwiQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTIiwiQVBQUk9WRV9CSURfRVZFTlQiLCJBUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTIiwiQ0FOQ0VMX0JJRF9FVkVOVFQiLCJhY3Rpb25DcmVhdGVCaWRFdmVudCIsImV2ZW50IiwidHlwZSIsImFjdGlvbkNyZWF0ZUJpZEV2ZW50U3VjY2VzcyIsImlzQ3JlYXRlZCIsImNvbnNvbGUiLCJsb2ciLCJhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnMiLCJzdGF0dXMiLCJhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnNTdWNjZXNzIiwiYXVjdGlvbnMiLCJhY3Rpb25BcHByb3ZlRXZlbnQiLCJldmVudF9pZCIsImFjdGlvbkFwcHJvdmVFdmVudFN1Y2Nlc3MiLCJpc0FwcHJvdmVkIiwiYWN0aW9uQ2FuY2VsRXZlbnQiLCJDQU5DRUxfQklEX0VWRU5UIiwiYWN0aW9uQ2FuY2VsRXZlbnRTdWNjZXNzIiwiQ0FOQ0VMX0JJRF9FVkVOVF9TVUNDRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsV0FBVyxHQUFHO0FBQ3JCQyxrQkFBZ0IsRUFBRSxrQkFEQTtBQUVsQkMsMEJBQXdCLEVBQUUsMEJBRlI7QUFHbEJDLHdCQUFzQixFQUFFLHdCQUhOO0FBSWxCQyxnQ0FBOEIsRUFBRSxnQ0FKZDtBQUtsQkMsbUJBQWlCLEVBQUUsbUJBTEQ7QUFNbEJDLDJCQUF5QixFQUFFLDJCQU5UO0FBT2xCQyxtQkFBaUIsRUFBRTtBQVBELGdDQVFTLDJCQVJULENBQWpCO0FBV0EsU0FBU0Msb0JBQVQsQ0FBK0JDLEtBQS9CLEVBQXFDO0FBQ3RDLFNBQU07QUFBQ0MsUUFBSSxFQUFDVixXQUFXLENBQUNDLGdCQUFsQjtBQUFvQ1EsU0FBSyxFQUFMQTtBQUFwQyxHQUFOO0FBQ0w7QUFFTSxTQUFTRSwyQkFBVCxDQUFzQ0MsU0FBdEMsRUFBZ0Q7QUFDakRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFnQkYsU0FBNUI7QUFDQSxTQUFNO0FBQUNGLFFBQUksRUFBQ1YsV0FBVyxDQUFDRTtBQUFsQixHQUFOO0FBQ0wsQyxDQUVEOztBQUNPLFNBQVNhLHdCQUFULENBQW1DQyxNQUFuQyxFQUEwQztBQUMzQyxTQUFPO0FBQUNOLFFBQUksRUFBQ1YsV0FBVyxDQUFDRyxzQkFBbEI7QUFBMENhLFVBQU0sRUFBTkE7QUFBMUMsR0FBUDtBQUNMO0FBRU0sU0FBU0MsK0JBQVQsQ0FBMENDLFFBQTFDLEVBQW1EO0FBQ3BETCxTQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBWjtBQUNBLFNBQU87QUFBQ1IsUUFBSSxFQUFDVixXQUFXLENBQUNJLDhCQUFsQjtBQUFrRGMsWUFBUSxFQUFSQTtBQUFsRCxHQUFQO0FBQ0w7QUFFTSxTQUFTQyxrQkFBVCxDQUE2QkMsUUFBN0IsRUFBc0M7QUFDdkNQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTSxRQUFaO0FBQ0EsU0FBTztBQUFDVixRQUFJLEVBQUNWLFdBQVcsQ0FBQ0ssaUJBQWxCO0FBQXFDZSxZQUFRLEVBQVJBO0FBQXJDLEdBQVA7QUFDTDtBQUVNLFNBQVNDLHlCQUFULENBQW9DQyxVQUFwQyxFQUErQztBQUNoRFQsU0FBTyxDQUFDQyxHQUFSLENBQVlRLFVBQVo7QUFDQSxTQUFPO0FBQUNaLFFBQUksRUFBQ1YsV0FBVyxDQUFDTSx5QkFBbEI7QUFBNkNnQixjQUFVLEVBQVZBO0FBQTdDLEdBQVA7QUFDTDtBQUVNLFNBQVNDLGlCQUFULENBQTRCSCxRQUE1QixFQUFxQztBQUN0Q1AsU0FBTyxDQUFDQyxHQUFSLENBQVlNLFFBQVo7QUFDQSxTQUFPO0FBQUNWLFFBQUksRUFBQ1YsV0FBVyxDQUFDd0IsZ0JBQWxCO0FBQW9DSixZQUFRLEVBQVJBO0FBQXBDLEdBQVA7QUFDTDtBQUVNLFNBQVNLLHdCQUFULENBQW1DSCxVQUFuQyxFQUE4QztBQUMvQ1QsU0FBTyxDQUFDQyxHQUFSLENBQVlRLFVBQVo7QUFDQSxTQUFPO0FBQUNaLFFBQUksRUFBQ1YsV0FBVyxDQUFDMEIsd0JBQWxCO0FBQTRDSixjQUFVLEVBQVZBO0FBQTVDLEdBQVA7QUFDTCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmYwMzkzMDEzZDllMWU2MTIyNzkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICAgIENSRUFURV9CSURfRVZFTlQ6IFwiQ1JFQVRFX0JJRF9FVkVOVFwiLFxyXG4gICAgICBDUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1M6IFwiQ1JFQVRFX0JJRF9FVkVOVF9TVUNDRVNTXCIsXHJcbiAgICAgIEFETUlOX0ZFVENIX0JJRF9FVkVOVFM6IFwiQURNSU5fRkVUQ0hfQklEX0VWRU5UU1wiLFxyXG4gICAgICBBRE1JTl9GRVRDSF9CSURfRVZFTlRTX1NVQ0NFU1M6IFwiQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTXCIsXHJcbiAgICAgIEFQUFJPVkVfQklEX0VWRU5UOiBcIkFQUFJPVkVfQklEX0VWRU5UXCIsXHJcbiAgICAgIEFQUFJPVkVfQklEX0VWRU5UX1NVQ0NFU1M6IFwiQVBQUk9WRV9CSURfRVZFTlRfU1VDQ0VTU1wiLFxyXG4gICAgICBDQU5DRUxfQklEX0VWRU5UVDogXCJBUFBST1ZFX0JJRF9FVkVOVFwiLFxyXG4gICAgICBBUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTOiBcIkFQUFJPVkVfQklEX0VWRU5UX1NVQ0NFU1NcIixcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNyZWF0ZUJpZEV2ZW50IChldmVudCl7XHJcbiAgICAgIHJldHVybnt0eXBlOmFjdGlvblR5cGVzLkNSRUFURV9CSURfRVZFTlQsIGV2ZW50fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ3JlYXRlQmlkRXZlbnRTdWNjZXNzIChpc0NyZWF0ZWQpe1xyXG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRlZCBiaWQnICsgaXNDcmVhdGVkKVxyXG4gICAgICByZXR1cm57dHlwZTphY3Rpb25UeXBlcy5DUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1N9XHJcbn1cclxuXHJcbi8vQURNSU5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkFkbWluRmV0Y2hBdWN0aW9ucyAoc3RhdHVzKXtcclxuICAgICAgcmV0dXJuIHt0eXBlOmFjdGlvblR5cGVzLkFETUlOX0ZFVENIX0JJRF9FVkVOVFMsIHN0YXR1c31cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkFkbWluRmV0Y2hBdWN0aW9uc1N1Y2Nlc3MgKGF1Y3Rpb25zKXtcclxuICAgICAgY29uc29sZS5sb2coYXVjdGlvbnMpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5BRE1JTl9GRVRDSF9CSURfRVZFTlRTX1NVQ0NFU1MsIGF1Y3Rpb25zfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQXBwcm92ZUV2ZW50IChldmVudF9pZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50X2lkKVxyXG4gICAgICByZXR1cm4ge3R5cGU6YWN0aW9uVHlwZXMuQVBQUk9WRV9CSURfRVZFTlQsIGV2ZW50X2lkfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQXBwcm92ZUV2ZW50U3VjY2VzcyAoaXNBcHByb3ZlZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlzQXBwcm92ZWQpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5BUFBST1ZFX0JJRF9FVkVOVF9TVUNDRVNTLCBpc0FwcHJvdmVkfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ2FuY2VsRXZlbnQgKGV2ZW50X2lkKXtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnRfaWQpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5DQU5DRUxfQklEX0VWRU5ULCBldmVudF9pZH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNhbmNlbEV2ZW50U3VjY2VzcyAoaXNBcHByb3ZlZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlzQXBwcm92ZWQpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5DQU5DRUxfQklEX0VWRU5UX1NVQ0NFU1MsIGlzQXBwcm92ZWR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9