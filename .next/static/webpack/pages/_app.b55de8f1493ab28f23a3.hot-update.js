webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/merchant/saga.js":
/*!********************************!*\
  !*** ./store/merchant/saga.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ "./store/merchant/action.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");



var _marked = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postCategory),
    _marked2 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getCategory),
    _marked3 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteCategory),
    _marked4 = /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);

// import { all, call, put, takeEvery } from "redux-saga/effects";
// import { notification } from "antd";
// import axios from "axios";
// import { API } from "../API/Api";
// import rootSaga from "../rootSaga";
// import {
// 	actionTypes,
//       actionGetAllMechants,
//       actionSuccessGetAllMechants
// } from "./action";
// const config = {
//       headers: {
//             Authorization: "Bearer" + API.TOKEN,
//       },
// };
// const sagaFetchAllMerchant = async()=>{
//       const url = API.BASE_URL + "/merchant";
// 	const data = await axios
// 		.get(url, config)
// 		.then((response) => {
// 			return response.data.merchant;
// 		})
// 		.catch((err) => {
// 			console.log(err + "fetching  merchants");
// 		});
// 	return data;
// }
// function* getAllMerchant(){
//       try{
//             const merchants = yield call(sagaFetchAllMerchant)
//             yield put(actionSuccessGetAllMechants(merchants))
//       }catch(err){
//             console.log(err)
//       }
// }
// export default function* rootSaga() {
//       yield all([takeEvery(actionTypes.GET_ALL_MERCHANTS, getAllMerchant)]);
// }




 // NEW
//FETCH CATEGORIES

var sagaFetchCategories = /*#__PURE__*/function () {
  var _ref = Object(C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var url, config, data;
    return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].BASE_URL + "/category";
            config = {
              headers: {
                Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_6__["API"].TOKEN
              }
            };
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url, config).then(function (response) {
              return response.data.category;
            })["catch"](function (err) {
              console.log(err + "fetching categories");
            });

          case 4:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sagaFetchCategories() {
    return _ref.apply(this, arguments);
  };
}();

function postCategory(payload) {
  var isCateAdded;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postCategory$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaAddCategory, payload.category);

        case 3:
          isCateAdded = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(addCategorySuccess(isCateAdded));

        case 6:
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function getCategory() {
  var categories;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getCategory$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaFetchCategories);

        case 3:
          categories = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(fetchCategorySuccess(categories));

        case 6:
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function deleteCategory(payload) {
  var isDeleted;
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteCategory$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(sagaDeleteCategories, payload.id);

        case 3:
          isDeleted = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(deleteCategorySuccess(isDeleted));

        case 6:
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function rootSaga() {
  return C_Users_HP_Downloads_Gigs_Zozo_admin_template_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].CATEGORY_POST, postCategory)]);

        case 2:
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].CATEGORY_GET, getCategory)]);

        case 4:
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].CATEGORY_DELETE, deleteCategory)]);

        case 6:
        case "end":
          return _context5.stop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWVyY2hhbnQvc2FnYS5qcyJdLCJuYW1lcyI6WyJwb3N0Q2F0ZWdvcnkiLCJnZXRDYXRlZ29yeSIsImRlbGV0ZUNhdGVnb3J5Iiwicm9vdFNhZ2EiLCJzYWdhRmV0Y2hDYXRlZ29yaWVzIiwidXJsIiwiQVBJIiwiQkFTRV9VUkwiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIlRPS0VOIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0ZWdvcnkiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNhbGwiLCJzYWdhQWRkQ2F0ZWdvcnkiLCJpc0NhdGVBZGRlZCIsInB1dCIsImFkZENhdGVnb3J5U3VjY2VzcyIsImNhdGVnb3JpZXMiLCJmZXRjaENhdGVnb3J5U3VjY2VzcyIsInNhZ2FEZWxldGVDYXRlZ29yaWVzIiwiaWQiLCJpc0RlbGV0ZWQiLCJkZWxldGVDYXRlZ29yeVN1Y2Nlc3MiLCJhbGwiLCJ0YWtlRXZlcnkiLCJhY3Rpb25UeXBlcyIsIkNBVEVHT1JZX1BPU1QiLCJDQVRFR09SWV9HRVQiLCJDQVRFR09SWV9ERUxFVEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttTUEyRlVBLFk7b01BU0FDLFc7b01BU0FDLGM7b01BU2VDLFE7O0FBdEh6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBS0E7Q0FHQTtBQUdBOztBQUNBLElBQU1DLG1CQUFtQjtBQUFBLGdZQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQkMsZUFEcUIsR0FDZkMsNENBQUcsQ0FBQ0MsUUFBSixHQUFlLFdBREE7QUFFckJDLGtCQUZxQixHQUVaO0FBQ2RDLHFCQUFPLEVBQUU7QUFDUkMsNkJBQWEsRUFBRSxXQUFXSiw0Q0FBRyxDQUFDSztBQUR0QjtBQURLLGFBRlk7QUFBQTtBQUFBLG1CQVFSQyw0Q0FBSyxDQUN0QkMsR0FEaUIsQ0FDYlIsR0FEYSxFQUNSRyxNQURRLEVBRWpCTSxJQUZpQixDQUVaLFVBQUNDLFFBQUQsRUFBYztBQUNuQixxQkFBT0EsUUFBUSxDQUFDQyxJQUFULENBQWNDLFFBQXJCO0FBQ0EsYUFKaUIsV0FLWCxVQUFDQyxHQUFELEVBQVM7QUFDZkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLEdBQUcscUJBQWxCO0FBQ0EsYUFQaUIsQ0FSUTs7QUFBQTtBQVFyQkYsZ0JBUnFCO0FBQUEsNkNBaUJwQkEsSUFqQm9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQW5CWixtQkFBbUI7QUFBQTtBQUFBO0FBQUEsR0FBekI7O0FBc0JBLFNBQVVKLFlBQVYsQ0FBdUJxQixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXNCLGlCQUFNQywrREFBSSxDQUFDQyxlQUFELEVBQWtCRixPQUFPLENBQUNKLFFBQTFCLENBQVY7O0FBRnRCO0FBRVFPLHFCQUZSO0FBQUE7QUFHRSxpQkFBTUMsOERBQUcsQ0FBQ0Msa0JBQWtCLENBQUNGLFdBQUQsQ0FBbkIsQ0FBVDs7QUFIRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS0VMLGlCQUFPLENBQUNDLEdBQVI7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU0EsU0FBVW5CLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVxQixpQkFBTXFCLCtEQUFJLENBQUNsQixtQkFBRCxDQUFWOztBQUZyQjtBQUVRdUIsb0JBRlI7QUFBQTtBQUdFLGlCQUFNRiw4REFBRyxDQUFDRyxvQkFBb0IsQ0FBQ0QsVUFBRCxDQUFyQixDQUFUOztBQUhGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLRVIsaUJBQU8sQ0FBQ0MsR0FBUjs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQSxTQUFVbEIsY0FBVixDQUF5Qm1CLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFb0IsaUJBQU1DLCtEQUFJLENBQUNPLG9CQUFELEVBQXVCUixPQUFPLENBQUNTLEVBQS9CLENBQVY7O0FBRnBCO0FBRVFDLG1CQUZSO0FBQUE7QUFHRSxpQkFBTU4sOERBQUcsQ0FBQ08scUJBQXFCLENBQUNELFNBQUQsQ0FBdEIsQ0FBVDs7QUFIRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS0VaLGlCQUFPLENBQUNDLEdBQVI7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU2UsU0FBVWpCLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QsaUJBQU04Qiw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNDLGFBQWIsRUFBNEJwQyxZQUE1QixDQUFWLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBRWQsaUJBQU1pQyw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNFLFlBQWIsRUFBMkJwQyxXQUEzQixDQUFWLENBQUQsQ0FBVDs7QUFGYztBQUFBO0FBR2QsaUJBQU1nQyw4REFBRyxDQUFDLENBQUNDLG9FQUFTLENBQUNDLG1EQUFXLENBQUNHLGVBQWIsRUFBOEJwQyxjQUE5QixDQUFWLENBQUQsQ0FBVDs7QUFIYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI1NWRlOGYxNDkzYWIyOGYyM2EzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG4vLyBpbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9BUEkvQXBpXCI7XHJcbi8vIGltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vcm9vdFNhZ2FcIjtcclxuLy8gaW1wb3J0IHtcclxuLy8gXHRhY3Rpb25UeXBlcyxcclxuLy8gICAgICAgYWN0aW9uR2V0QWxsTWVjaGFudHMsXHJcbi8vICAgICAgIGFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50c1xyXG4vLyB9IGZyb20gXCIuL2FjdGlvblwiO1xyXG5cclxuLy8gY29uc3QgY29uZmlnID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyXCIgKyBBUEkuVE9LRU4sXHJcbi8vICAgICAgIH0sXHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBzYWdhRmV0Y2hBbGxNZXJjaGFudCA9IGFzeW5jKCk9PntcclxuXHJcbi8vICAgICAgIGNvbnN0IHVybCA9IEFQSS5CQVNFX1VSTCArIFwiL21lcmNoYW50XCI7XHJcblx0XHJcblxyXG4vLyBcdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xyXG4vLyBcdFx0LmdldCh1cmwsIGNvbmZpZylcclxuLy8gXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4vLyBcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YS5tZXJjaGFudDtcclxuLy8gXHRcdH0pXHJcbi8vIFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG4vLyBcdFx0XHRjb25zb2xlLmxvZyhlcnIgKyBcImZldGNoaW5nICBtZXJjaGFudHNcIik7XHJcbi8vIFx0XHR9KTtcclxuXHJcbi8vIFx0cmV0dXJuIGRhdGE7XHJcbi8vIH1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiogZ2V0QWxsTWVyY2hhbnQoKXtcclxuLy8gICAgICAgdHJ5e1xyXG5cclxuLy8gICAgICAgICAgICAgY29uc3QgbWVyY2hhbnRzID0geWllbGQgY2FsbChzYWdhRmV0Y2hBbGxNZXJjaGFudClcclxuLy8gICAgICAgICAgICAgeWllbGQgcHV0KGFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50cyhtZXJjaGFudHMpKVxyXG4vLyAgICAgICB9Y2F0Y2goZXJyKXtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4vLyAgICAgICB9XHJcblxyXG4vLyB9XHJcblxyXG4gXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuLy8gICAgICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0FMTF9NRVJDSEFOVFMsIGdldEFsbE1lcmNoYW50KV0pO1xyXG5cclxuLy8gfVxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRhY3Rpb25UeXBlcyxcclxuXHRhY3Rpb25HZXRBbGxNZWNoYW50cyxcclxuICAgICAgYWN0aW9uU3VjY2Vzc0dldEFsbE1lY2hhbnRzXHJcbn0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcclxuXHJcbi8vIE5FV1xyXG5cclxuXHJcbi8vRkVUQ0ggQ0FURUdPUklFU1xyXG5jb25zdCBzYWdhRmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IHVybCA9IEFQSS5CQVNFX1VSTCArIFwiL2NhdGVnb3J5XCI7XHJcblx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBcIkJlYXJlclwiICsgQVBJLlRPS0VOLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3NcclxuXHRcdC5nZXQodXJsLCBjb25maWcpXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEuY2F0ZWdvcnk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyICsgXCJmZXRjaGluZyBjYXRlZ29yaWVzXCIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiogcG9zdENhdGVnb3J5KHBheWxvYWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgaXNDYXRlQWRkZWQgPSB5aWVsZCBjYWxsKHNhZ2FBZGRDYXRlZ29yeSwgcGF5bG9hZC5jYXRlZ29yeSk7XHJcblx0XHR5aWVsZCBwdXQoYWRkQ2F0ZWdvcnlTdWNjZXNzKGlzQ2F0ZUFkZGVkKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldENhdGVnb3J5KCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBjYXRlZ29yaWVzID0geWllbGQgY2FsbChzYWdhRmV0Y2hDYXRlZ29yaWVzKTtcclxuXHRcdHlpZWxkIHB1dChmZXRjaENhdGVnb3J5U3VjY2VzcyhjYXRlZ29yaWVzKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGRlbGV0ZUNhdGVnb3J5KHBheWxvYWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgaXNEZWxldGVkID0geWllbGQgY2FsbChzYWdhRGVsZXRlQ2F0ZWdvcmllcywgcGF5bG9hZC5pZCk7XHJcblx0XHR5aWVsZCBwdXQoZGVsZXRlQ2F0ZWdvcnlTdWNjZXNzKGlzRGVsZXRlZCkpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5DQVRFR09SWV9QT1NULCBwb3N0Q2F0ZWdvcnkpXSk7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0FURUdPUllfR0VULCBnZXRDYXRlZ29yeSldKTtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5DQVRFR09SWV9ERUxFVEUsIGRlbGV0ZUNhdGVnb3J5KV0pO1xyXG5cdC8vIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkxPR09VVCwgbG9nT3V0U2FnYSldKTtcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9