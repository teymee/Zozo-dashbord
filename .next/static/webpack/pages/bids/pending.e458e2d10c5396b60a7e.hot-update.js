webpackHotUpdate_N_E("pages/bids/pending",{

/***/ "./components/shared/tables/table-columns/BidColumn.js":
/*!*************************************************************!*\
  !*** ./components/shared/tables/table-columns/BidColumn.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/elements/basic/DropdownAction */ "./components/elements/basic/DropdownAction.jsx");
/* harmony import */ var _store_API_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store/API/Api */ "./store/API/Api.js");
/* harmony import */ var _store_bid_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/store/bid/action */ "./store/bid/action.js");
/* harmony import */ var _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TableExtraStyles/extraStyles.module.css */ "./components/shared/tables/TableExtraStyles/extraStyles.module.css");
/* harmony import */ var _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\tables\\table-columns\\BidColumn.js",
    _s = $RefreshSig$();








function BidColumn(_ref) {
  _s();

  var bidEvent = _ref.bidEvent,
      num = _ref.num,
      type = _ref.type;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  console.log(bidEvent);

  var approveEvent = function approveEvent() {
    console.log("approve event");
    dispatch(Object(_store_bid_action__WEBPACK_IMPORTED_MODULE_5__["actionApproveEvent"])(bidEvent.id));
  };

  var cancelEvent = function cancelEvent() {
    console.log(" Cancel event");
    dispatch(Object(_store_bid_action__WEBPACK_IMPORTED_MODULE_5__["actionCancelEvent"])(bidEvent.id));
  };

  var button;

  if (bidEvent.ended) {
    button = null;
  } else if (!bidEvent.approved) {
    button = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: approveEvent,
          className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.createEventButton,
          children: "Approve"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: cancelEvent,
          className: _TableExtraStyles_extraStyles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.declineEventButton,
          children: "Delcine"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this)]
    }, void 0, true);
  } else if (!bidEvent.approved) {}

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: num + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: bidEvent.product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: Object(_store_API_Api__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])(bidEvent.start_time)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: bidEvent.access_amount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: bidEvent.minimum_amount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: Object(_store_API_Api__WEBPACK_IMPORTED_MODULE_4__["dateFormat"])(bidEvent.createdAt)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, this), button, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_basic_DropdownAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "bidEvent",
        id: bidEvent.id
      }, num + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 3
  }, this);
}

_s(BidColumn, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = BidColumn;
/* harmony default export */ __webpack_exports__["default"] = (BidColumn);

var _c;

$RefreshReg$(_c, "BidColumn");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvdGFibGVzL3RhYmxlLWNvbHVtbnMvQmlkQ29sdW1uLmpzIl0sIm5hbWVzIjpbIkJpZENvbHVtbiIsImJpZEV2ZW50IiwibnVtIiwidHlwZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYXBwcm92ZUV2ZW50IiwiYWN0aW9uQXBwcm92ZUV2ZW50IiwiaWQiLCJjYW5jZWxFdmVudCIsImFjdGlvbkNhbmNlbEV2ZW50IiwiYnV0dG9uIiwiZW5kZWQiLCJhcHByb3ZlZCIsInN0eWxlcyIsImNyZWF0ZUV2ZW50QnV0dG9uIiwiZGVjbGluZUV2ZW50QnV0dG9uIiwicHJvZHVjdCIsIm5hbWUiLCJkYXRlRm9ybWF0Iiwic3RhcnRfdGltZSIsImFjY2Vzc19hbW91bnQiLCJtaW5pbXVtX2Ftb3VudCIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsT0FBNEM7QUFBQTs7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQUEsTUFBYkMsR0FBYSxRQUFiQSxHQUFhO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzNDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlOLFFBQVo7O0FBRUEsTUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUMxQkYsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBSCxZQUFRLENBQUNLLDRFQUFrQixDQUFDUixRQUFRLENBQUNTLEVBQVYsQ0FBbkIsQ0FBUjtBQUNBLEdBSEQ7O0FBS0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QkwsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBSCxZQUFRLENBQUNRLDJFQUFpQixDQUFDWCxRQUFRLENBQUNTLEVBQVYsQ0FBbEIsQ0FBUjtBQUNBLEdBSEQ7O0FBS0EsTUFBSUcsTUFBSjs7QUFDQSxNQUFJWixRQUFRLENBQUNhLEtBQWIsRUFBb0I7QUFDbkJELFVBQU0sR0FBRyxJQUFUO0FBQ0EsR0FGRCxNQUVPLElBQUksQ0FBQ1osUUFBUSxDQUFDYyxRQUFkLEVBQXdCO0FBQzlCRixVQUFNLGdCQUNMO0FBQUEsOEJBQ0M7QUFBQSwrQkFDQztBQUFRLGlCQUFPLEVBQUVMLFlBQWpCO0FBQStCLG1CQUFTLEVBQUVRLCtFQUFNLENBQUNDLGlCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQU1DO0FBQUEsK0JBQ0M7QUFBUSxpQkFBTyxFQUFFTixXQUFqQjtBQUE4QixtQkFBUyxFQUFFSywrRUFBTSxDQUFDRSxrQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkQ7QUFBQSxvQkFERDtBQWNBLEdBZk0sTUFlQSxJQUFLLENBQUNqQixRQUFRLENBQUNjLFFBQWYsRUFBd0IsQ0FFOUI7O0FBRUQsc0JBQ0M7QUFBQSw0QkFDQztBQUFBLGdCQUFLYixHQUFHLEdBQUc7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLDZCQUNDO0FBQUEsa0JBQVNELFFBQVEsQ0FBQ2tCLE9BQVQsQ0FBaUJDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFLQztBQUFBLGdCQUFLQyxpRUFBVSxDQUFDcEIsUUFBUSxDQUFDcUIsVUFBVjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU1DO0FBQUEsZ0JBQUtyQixRQUFRLENBQUNzQjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORCxlQU9DO0FBQUEsZ0JBQUt0QixRQUFRLENBQUN1QjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQVFDO0FBQUEsZ0JBQUtILGlFQUFVLENBQUNwQixRQUFRLENBQUN3QixTQUFWO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELEVBaUJFWixNQWpCRixlQWtCQztBQUFBLDZCQUNDLHFFQUFDLGlGQUFEO0FBQWdCLFlBQUksRUFBQyxVQUFyQjtBQUFnQyxVQUFFLEVBQUVaLFFBQVEsQ0FBQ1M7QUFBN0MsU0FBc0RSLEdBQUcsR0FBRyxDQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWtDQTs7R0F0RVFGLFM7VUFDU0ssdUQ7OztLQURUTCxTO0FBd0VNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iaWRzL3BlbmRpbmcuZTQ1OGUyZDEwYzUzOTZiNjBhN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IERyb3Bkb3duQWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZWxlbWVudHMvYmFzaWMvRHJvcGRvd25BY3Rpb25cIjtcclxuaW1wb3J0IHsgZGF0ZUZvcm1hdCB9IGZyb20gXCJ+L3N0b3JlL0FQSS9BcGlcIjtcclxuaW1wb3J0IHsgYWN0aW9uQXBwcm92ZUV2ZW50LCBhY3Rpb25DYW5jZWxFdmVudCB9IGZyb20gXCJ+L3N0b3JlL2JpZC9hY3Rpb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vVGFibGVFeHRyYVN0eWxlcy9leHRyYVN0eWxlcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBCaWRDb2x1bW4oeyBiaWRFdmVudCwgbnVtLCB0eXBlIH0pIHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc29sZS5sb2coYmlkRXZlbnQpO1xyXG5cclxuXHRjb25zdCBhcHByb3ZlRXZlbnQgPSAoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcImFwcHJvdmUgZXZlbnRcIik7XHJcblx0XHRkaXNwYXRjaChhY3Rpb25BcHByb3ZlRXZlbnQoYmlkRXZlbnQuaWQpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjYW5jZWxFdmVudCA9ICgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwiIENhbmNlbCBldmVudFwiKTtcclxuXHRcdGRpc3BhdGNoKGFjdGlvbkNhbmNlbEV2ZW50KGJpZEV2ZW50LmlkKSk7XHJcblx0fTtcclxuXHJcblx0bGV0IGJ1dHRvbjtcclxuXHRpZiAoYmlkRXZlbnQuZW5kZWQpIHtcclxuXHRcdGJ1dHRvbiA9IG51bGw7XHJcblx0fSBlbHNlIGlmICghYmlkRXZlbnQuYXBwcm92ZWQpIHtcclxuXHRcdGJ1dHRvbiA9IChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2FwcHJvdmVFdmVudH0gY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlRXZlbnRCdXR0b259PlxyXG5cdFx0XHRcdFx0XHRBcHByb3ZlXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17Y2FuY2VsRXZlbnR9IGNsYXNzTmFtZT17c3R5bGVzLmRlY2xpbmVFdmVudEJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdERlbGNpbmVcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvdGQ+XHJcblx0XHRcdDwvPlxyXG5cdFx0KTtcclxuXHR9IGVsc2UgaWYgICghYmlkRXZlbnQuYXBwcm92ZWQpe1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PHRyPlxyXG5cdFx0XHQ8dGQ+e251bSArIDF9PC90ZD5cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxzdHJvbmc+e2JpZEV2ZW50LnByb2R1Y3QubmFtZX08L3N0cm9uZz5cclxuXHRcdFx0PC90ZD5cclxuXHRcdFx0PHRkPntkYXRlRm9ybWF0KGJpZEV2ZW50LnN0YXJ0X3RpbWUpfTwvdGQ+XHJcblx0XHRcdDx0ZD57YmlkRXZlbnQuYWNjZXNzX2Ftb3VudH08L3RkPlxyXG5cdFx0XHQ8dGQ+e2JpZEV2ZW50Lm1pbmltdW1fYW1vdW50fTwvdGQ+XHJcblx0XHRcdDx0ZD57ZGF0ZUZvcm1hdChiaWRFdmVudC5jcmVhdGVkQXQpfTwvdGQ+XHJcblx0XHRcdHsvKiA8dGQ+e2JhZGdlVmlld308L3RkPiAqL31cclxuXHJcblx0XHRcdHsvKiA8dGQ+XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXthcHByb3ZlRXZlbnR9IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZUV2ZW50QnV0dG9ufT5cclxuXHRcdFx0XHRcdEFwcHJvdmVcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC90ZD4gKi99XHJcblxyXG5cdFx0XHR7YnV0dG9ufVxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdFx0PERyb3Bkb3duQWN0aW9uIHR5cGU9XCJiaWRFdmVudFwiIGlkPXtiaWRFdmVudC5pZH0ga2V5PXtudW0gKyAxfSAvPlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHR7LyogeyFiaWRFdmVudC5lbmRlZCAmJiAoXHJcblx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtjYW5jZWxFdmVudH0gY2xhc3NOYW1lPXtzdHlsZXMuZGVjbGluZUV2ZW50QnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0RGVsY2luZVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC90ZD5cclxuXHRcdFx0KX1cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHRcdDxEcm9wZG93bkFjdGlvbiB0eXBlPVwiYmlkRXZlbnRcIiBpZD17YmlkRXZlbnQuaWR9IGtleT17bnVtICsgMX0gLz5cclxuXHRcdFx0PC90ZD4gKi99XHJcblx0XHQ8L3RyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpZENvbHVtbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==