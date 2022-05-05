module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/layouts/DefaultLayout.jsx":
/*!**********************************************!*\
  !*** ./components/layouts/DefaultLayout.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Head */ "./components/layouts/modules/Head.jsx");
/* harmony import */ var _components_shared_headers_HeaderMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/shared/headers/HeaderMobile */ "./components/shared/headers/HeaderMobile.jsx");
/* harmony import */ var _components_shared_drawers_DrawerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/drawers/DrawerMenu */ "./components/shared/drawers/DrawerMenu.jsx");

var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\layouts\\DefaultLayout.jsx";





const DefaultLayout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "martfury",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_headers_HeaderMobile__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_drawers_DrawerMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "loader-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "loader-section section-left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "loader-section section-right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./components/layouts/modules/Head.jsx":
/*!*********************************************!*\
  !*** ./components/layouts/modules/Head.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\layouts\\modules\\Head.jsx";



const StyleSheets = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "format-detection",
    content: "telephone=no"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "author",
    content: "nouthemes"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "keywords",
    content: "Martfury, react, ecommerce, Template"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "description",
    content: "Martfury - React eCommerce Template"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
    children: "Martfury | React eCommerce Admin Template"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    href: "https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;subset=latin-ext",
    rel: "stylesheet"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "stylesheet",
    href: "/fonts/Linearicons/Font/demo-files/demo.css"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "stylesheet",
    href: "/fonts/font-awesome/css/font-awesome.min.css"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/css/bootstrap.min.css"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (StyleSheets);

/***/ }),

/***/ "./components/shared/drawers/DrawerMenu.jsx":
/*!**************************************************!*\
  !*** ./components/shared/drawers/DrawerMenu.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/app/action */ "./store/app/action.js");
/* harmony import */ var _components_shared_menus_MenuSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/menus/MenuSidebar */ "./components/shared/menus/MenuSidebar.jsx");

var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\drawers\\DrawerMenu.jsx";





const DrawerMenu = ({
  isDrawerMenu
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const handleCloseDrawer = () => {
    dispatch(Object(_store_app_action__WEBPACK_IMPORTED_MODULE_3__["toggleDrawerMenu"])(false));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
    className: `ps-drawer--mobile ${isDrawerMenu && 'active'}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ps-drawer__header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: " Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "ps-drawer__close",
        onClick: handleCloseDrawer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "icon icon-cross"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ps-drawer__content",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_menus_MenuSidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state.app)(DrawerMenu));

/***/ }),

/***/ "./components/shared/headers/HeaderMobile.jsx":
/*!****************************************************!*\
  !*** ./components/shared/headers/HeaderMobile.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/app/action */ "./store/app/action.js");

var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\headers\\HeaderMobile.jsx";




const HeaderMobile = ({
  isDrawerMenu
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const handleOpenDrawer = () => {
    dispatch(Object(_store_app_action__WEBPACK_IMPORTED_MODULE_3__["toggleDrawerMenu"])(true));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: "header--mobile",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header__left",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "ps-drawer-toggle",
        onClick: handleOpenDrawer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "icon icon-menu"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header__center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "ps-logo",
        href: "#",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/img/logo.png",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header__right",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "header__site-link",
        href: "#",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "icon-exit-right"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state.app)(HeaderMobile));

/***/ }),

/***/ "./components/shared/menus/MenuSidebar.jsx":
/*!*************************************************!*\
  !*** ./components/shared/menus/MenuSidebar.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\components\\shared\\menus\\MenuSidebar.jsx";




const MenuSidebar = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const menuItems = [{
    text: "Dashboard",
    url: "/",
    icon: "icon-home"
  }, {
    text: "Categories",
    url: "/categories",
    icon: "icon-users2"
  }, {
    text: "Products",
    url: "/products",
    icon: "icon-database"
  }, {
    text: "Pending Auctions",
    url: "/bids/pending",
    icon: "icon-cog"
  }, {
    text: "Approved Auctions",
    url: "/bids/approved",
    icon: "icon-cog"
  }, {
    text: "Ongoing Auctions",
    url: "/bids/ongoing",
    icon: "icon-cog"
  }, {
    text: "Completed Auctions",
    url: "/bids/completed",
    icon: "icon-cog"
  }, {
    text: "Orders",
    url: "/orders",
    icon: "icon-bag2"
  }, {
    text: "Customers",
    url: "/customers",
    icon: "icon-users2"
  }, {
    text: "Merchants",
    url: "/merchants",
    icon: "icon-users2"
  }, // {
  // 	text: "Shipping",
  // 	url: "/shipping",
  // 	icon: "icon-cog",
  // },
  // {
  // 	text: "Cashout Requests",
  // 	url: "/cashout_requests",
  // 	icon: "icon-cog",
  // },
  // {
  // 	text: "Approved Cashouts",
  // 	url: "/approved_cashouts",
  // 	icon: "icon-cog",
  // },
  {
    text: "Settings",
    url: "/settings",
    icon: "icon-cog"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "menu",
    children: menuItems.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: router.pathname === item.url ? "active" : "",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: item.url,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: item.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 8
          }, undefined), item.text]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 6
      }, undefined)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MenuSidebar);

/***/ }),

/***/ "./node_modules/antd/dist/antd.min.css":
/*!*********************************************!*\
  !*** ./node_modules/antd/dist/antd.min.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout.jsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/store */ "./store/store.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.min.css */ "./node_modules/antd/dist/antd.min.css");
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\HP\\Downloads\\Gigs\\Zozo\\admin template\\martfury-admin-react\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function App({
  Component,
  pageProps
}) {
  const getLayout = Component.getLayout || (page => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: page
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 43
  }, this));

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTimeout(function () {
      document.getElementById('__next').classList.add('loaded');
    }, 100);
  }, []);
  return getLayout( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 22
  }, this));
}

/* harmony default export */ __webpack_exports__["default"] = (_store_store__WEBPACK_IMPORTED_MODULE_3__["wrapper"].withRedux(App));

/***/ }),

/***/ "./store/API/Api.js":
/*!**************************!*\
  !*** ./store/API/Api.js ***!
  \**************************/
/*! exports provided: API, dateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
const API = {
  ADMIN_BASE_URL: "http://smart-park.xyz/api/v1/admin",
  BASE_URL: "http://smart-park.xyz/api/v1",
  MERCHANT_ADMIN_BASE_URL: "http://smart-park.xyz/api/v1/merchant",
  TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImFjY291bnRfdHlwZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjQ3NTU3MjM3LCJleHAiOjE2NDc1NjQ0Mzd9.6FEDmVDucC6iiRM4LaYWco5suG8J_QLx9rgqnrVr89E"
};
const dateFormat = timeFormat => {
  const event = new Date(timeFormat);
  const time = event.toString();
  const totalStringLength = time.length;
  const stringToSlice = time.indexOf("G");
  const finalDate = time.slice(0, stringToSlice);
  console.log(totalStringLength);
  return finalDate;
};

/***/ }),

/***/ "./store/app/action.js":
/*!*****************************!*\
  !*** ./store/app/action.js ***!
  \*****************************/
/*! exports provided: actionTypes, toggleDrawerMenu, toggleDrawerMenuSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDrawerMenu", function() { return toggleDrawerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDrawerMenuSuccess", function() { return toggleDrawerMenuSuccess; });
const actionTypes = {
  TOGGLE_DRAWER_MENU: 'TOGGLE_DRAWER_MENU',
  TOGGLE_DRAWER_MENU_SUCCESS: 'TOGGLE_DRAWER_MENU_SUCCESS'
};
function toggleDrawerMenu(payload) {
  return {
    type: actionTypes.TOGGLE_DRAWER_MENU,
    payload
  };
}
function toggleDrawerMenuSuccess(payload) {
  return {
    type: actionTypes.TOGGLE_DRAWER_MENU_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/app/reducer.js":
/*!******************************!*\
  !*** ./store/app/reducer.js ***!
  \******************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/app/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isDrawerMenu: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].TOGGLE_DRAWER_MENU_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isDrawerMenu: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/app/saga.js":
/*!***************************!*\
  !*** ./store/app/saga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/app/action.js");



function* toggleDrawerMenuSaga({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["toggleDrawerMenuSuccess"])(payload));
  } catch (err) {
    console.error(err);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].TOGGLE_DRAWER_MENU, toggleDrawerMenuSaga)]);
}

/***/ }),

/***/ "./store/auth/action.js":
/*!******************************!*\
  !*** ./store/auth/action.js ***!
  \******************************/
/*! exports provided: actionTypes, login, loginSuccess, register, registerSuccess, logOut, logOutSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOutSuccess", function() { return logOutSuccess; });
const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION'
};
function login(loginCred) {
  return {
    type: actionTypes.LOGIN_REQUEST,
    loginCred
  };
}
function loginSuccess(isLogin) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    isLogin
  };
}
function register(registerCred) {
  return {
    type: actionTypes.REGISTER_REQUEST,
    registerCred
  };
}
function registerSuccess(isRegistered) {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    isRegistered
  };
}
function logOut() {
  return {
    type: actionTypes.LOGOUT
  };
}
function logOutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}

/***/ }),

/***/ "./store/auth/reducer.js":
/*!*******************************!*\
  !*** ./store/auth/reducer.js ***!
  \*******************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  isLoggedIn: false,
  isRegistered: false
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        isLoggedIn: true
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].REGISTER_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        isRegistered: true
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGOUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        isLoggedIn: false
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/auth/saga.js":
/*!****************************!*\
  !*** ./store/auth/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");






const modalSuccess = type => {
  antd__WEBPACK_IMPORTED_MODULE_2__["notification"][type]({
    message: "Welcome back",
    description: "You are login successful!"
  });
};

const modalWarning = type => {
  antd__WEBPACK_IMPORTED_MODULE_2__["notification"][type]({
    message: "Good bye!",
    description: "Your account has been logged out!"
  });
};

const loginAdmin = async loginCred => {
  console.log(loginCred);
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].BASE_URL + "login";
  console.log(url);
  const data = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(url, loginCred).then(response => {
    console.log(response.data);
    localStorage.setItem("token", JSON.stringify(response.data.token));
    return response.data;
  }).catch(err => {
    console.log(err);
  });
  return data;
};

const registerAdmin = async registerCred => {
  console.log(registerCred); // const url = "https://zozo-auction.herokuapp.com/api/v1/merchant/create"

  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/admin/create";
  console.log(url);
  const data = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(url, registerCred).then(response => {
    console.log(response.data.token);
    localStorage.setItem("token", JSON.stringify(response.data.token));
    return response.data;
  }).catch(err => {
    console.log(err);
  });
  return data;
};

function* loginSaga(payload) {
  try {
    const isLogin = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loginAdmin, payload.loginCred);

    if (isLogin) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["loginSuccess"])());
      modalSuccess("success");
    }
  } catch (err) {
    console.log(err);
  }
}

function* registerSaga(payload) {
  try {
    console.log(payload.registerCred);
    const isRegistered = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(registerAdmin, payload.registerCred);

    if (isRegistered) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["registerSuccess"])());
      modalSuccess("success");
    }
  } catch (err) {
    console.log(err);
  }
}

function* logOutSaga() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["logOutSuccess"])());
    modalWarning("warning");
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].LOGIN_REQUEST, loginSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].REGISTER_REQUEST, registerSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].LOGOUT, logOutSaga)]);
}

/***/ }),

/***/ "./store/bid/action.js":
/*!*****************************!*\
  !*** ./store/bid/action.js ***!
  \*****************************/
/*! exports provided: actionTypes, actionCreateBidEvent, actionCreateBidEventSuccess, actionAdminFetchAuctions, actionAdminFetchAuctionsSuccess, actionApproveEvent, actionApproveEventSuccess, actionCancelEvent, actionCancelEventSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCreateBidEvent", function() { return actionCreateBidEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCreateBidEventSuccess", function() { return actionCreateBidEventSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionAdminFetchAuctions", function() { return actionAdminFetchAuctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionAdminFetchAuctionsSuccess", function() { return actionAdminFetchAuctionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionApproveEvent", function() { return actionApproveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionApproveEventSuccess", function() { return actionApproveEventSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCancelEvent", function() { return actionCancelEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionCancelEventSuccess", function() { return actionCancelEventSuccess; });
const actionTypes = {
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
    event
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
    status
  };
}
function actionAdminFetchAuctionsSuccess(auctions) {
  console.log(auctions);
  return {
    type: actionTypes.ADMIN_FETCH_BID_EVENTS_SUCCESS,
    auctions
  };
}
function actionApproveEvent(event_id) {
  console.log(event_id);
  return {
    type: actionTypes.APPROVE_BID_EVENT,
    event_id
  };
}
function actionApproveEventSuccess(isApproved) {
  console.log(isApproved);
  return {
    type: actionTypes.APPROVE_BID_EVENT_SUCCESS,
    isApproved
  };
}
function actionCancelEvent(event_id) {
  console.log(event_id);
  return {
    type: actionTypes.CANCEL_BID_EVENT,
    event_id
  };
}
function actionCancelEventSuccess(isCancelled) {
  console.log(isCancelled);
  return {
    type: actionTypes.CANCEL_BID_EVENT_SUCCESS,
    isCancelled
  };
}

/***/ }),

/***/ "./store/bid/reducer.js":
/*!******************************!*\
  !*** ./store/bid/reducer.js ***!
  \******************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/bid/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  bids: null,
  pendingBids: null,
  approvedBids: null,
  bidPostLoading: true,
  bidGetLoading: true,
  bidDeleteLoading: true,
  deletedMsg: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CREATE_BID_EVENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        bidPostLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].ADMIN_FETCH_BID_EVENTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        bids: action.auctions,
        bidGetLoading: false
      });
    // case actionTypes.bidGORY_DELETE_SUCCESS:
    // 	return {
    // 		...state,
    // 		...{ deletedMsg: action.deletedMsg, bidDeleteLoading: false },
    // 	};

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/bid/saga.js":
/*!***************************!*\
  !*** ./store/bid/saga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./store/bid/action.js");




const config = {
  headers: {
    Authorization: "Bearer " + _API_Api__WEBPACK_IMPORTED_MODULE_2__["API"].TOKEN
  }
}; //POST CREAT BID EVENT

const sagaCreateBidEvent = async event => {
  console.log("saga func");
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_2__["API"].MERCHANT_ADMIN_BASE_URL + "/bidding";
  const config = {
    headers: {
      Authorization: "Bearer " + _API_Api__WEBPACK_IMPORTED_MODULE_2__["API"].TOKEN
    }
  };
  const data = axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, event, config).then(response => {
    console.log(response.data);
    return response.data;
  });
  return data;
};

const sagaAdminFetchBidEvent = async status => {
  let data;

  if (status === "pending") {
    const url = _API_Api__WEBPACK_IMPORTED_MODULE_2__["API"].ADMIN_BASE_URL + "/bidding";
    console.log(status);
    data = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, config).then(response => {
      const pendingBids = response.data.bidding_event.filter(bid => {
        return bid.approved === false;
      });
      return pendingBids;
    });
  } else if (status === "approved") {
    const url = _API_Api__WEBPACK_IMPORTED_MODULE_2__["API"].ADMIN_BASE_URL + "/bidding";
    console.log(status);
    data = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, config).then(response => {
      console.log(response.data.bidding_event);
      const approvedBids = response.data.bidding_event.filter(bid => {
        return bid.approved === true;
      });
      return approvedBids;
    });
  } else {
    const url = _API_Api__WEBPACK_IMPORTED_MODULE_2__["API"].ADMIN_BASE_URL + "/bidding/status";
    const eventStatus = {
      status
    };
    console.log(eventStatus);
    data = axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, eventStatus, config).then(response => {
      console.log(response.data);
      return response.data.bidding_event;
    });
  }

  return data;
};

const sagaApproveBidEvent = async event_id => {
  console.log("saga func");
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_2__["API"].ADMIN_BASE_URL + "/bidding/approve/" + event_id;
  const config = {
    headers: {
      Authorization: "Bearer " + _API_Api__WEBPACK_IMPORTED_MODULE_2__["API"].TOKEN
    }
  };
  console.log(url);
  const data = axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, event_id, config).then(response => {
    console.log(response.data);
    return response.data;
  });
  return data;
};

const sagaCancelBidEvent = async event_id => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_2__["API"].ADMIN_BASE_URL + "/bidding/cancel/" + event_id;
  const config = {
    headers: {
      Authorization: "Bearer " + _API_Api__WEBPACK_IMPORTED_MODULE_2__["API"].TOKEN
    }
  };
  console.log(url);
  const data = axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, event_id, config).then(response => {
    console.log(response.data);
    return response.data;
  });
  return data;
};

function* createBidEvent(payload) {
  try {
    const isEventAdded = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(sagaCreateBidEvent, payload.event);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["actionCreateBidEventSuccess"])(isEventAdded));
  } catch (err) {
    console.log(err);
  }
}

function* adminFetchBidEvent(payload) {
  try {
    const getAllBidEvent = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(sagaAdminFetchBidEvent, payload.status);
    console.log(getAllBidEvent);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["actionAdminFetchAuctionsSuccess"])(getAllBidEvent));
  } catch (err) {
    console.log(err);
  }
}

function* approveBidEvent(payload) {
  try {
    const isApproved = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(sagaApproveBidEvent, payload.event_id);
    console.log(isApproved);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["actionApproveEventSuccess"])(isApproved));
  } catch (err) {
    console.log(err);
  }
}

function* cancelBidEvent(payload) {
  try {
    const isCancelled = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(sagaCancelBidEvent, payload.event_id);
    console.log(isCancelled);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["actionCancelEventSuccess"])(isCancelled));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].CREATE_BID_EVENT, createBidEvent)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].ADMIN_FETCH_BID_EVENTS, adminFetchBidEvent)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].APPROVE_BID_EVENT, approveBidEvent)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].CANCEL_BID_EVENT, approveBidEvent)]);
}

/***/ }),

/***/ "./store/category/action.js":
/*!**********************************!*\
  !*** ./store/category/action.js ***!
  \**********************************/
/*! exports provided: actionTypes, addCategory, addCategorySuccess, fetchCategory, fetchCategorySuccess, deleteActionCategory, deleteCategorySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCategory", function() { return addCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCategorySuccess", function() { return addCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategory", function() { return fetchCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategorySuccess", function() { return fetchCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteActionCategory", function() { return deleteActionCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategorySuccess", function() { return deleteCategorySuccess; });
const actionTypes = {
  CATEGORY_POST: "CATEGORY_POST",
  CATEGORY_POST_SUCCESS: "CATEGORY_POST_SUCCESS",
  CATEGORY_GET: "CATEGORY_GET",
  CATEGORY_GET_SUCCESS: "CATEGORY_GET_SUCCESS",
  CATEGORY_DELETE: "CATEGORY_DELETE",
  CATEGORY_DELETE_SUCCESS: "CATEGORY_DELETE_SUCCESS"
};
function addCategory(category) {
  return {
    type: actionTypes.CATEGORY_POST,
    category
  };
}
function addCategorySuccess() {
  console.log("Category added syccesfully");
  return {
    type: actionTypes.CATEGORY_POST_SUCCESS
  };
}
function fetchCategory() {
  return {
    type: actionTypes.CATEGORY_GET
  };
}
function fetchCategorySuccess(categories) {
  return {
    type: actionTypes.CATEGORY_GET_SUCCESS,
    categories
  };
}
function deleteActionCategory(id) {
  console.log(id);
  return {
    type: actionTypes.CATEGORY_DELETE,
    id
  };
}
function deleteCategorySuccess(deletedMsg) {
  console.log(deletedMsg);
  return {
    type: actionTypes.CATEGORY_DELETE_SUCCESS,
    deletedMsg
  };
}

/***/ }),

/***/ "./store/category/reducer.js":
/*!***********************************!*\
  !*** ./store/category/reducer.js ***!
  \***********************************/
/*! exports provided: initialState, initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/category/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  category: null,
  catePostLoading: true,
  cateGetLoading: true,
  cateDeleteLoading: true,
  deletedMsg: null
};
const initState = {
  isLoggedIn: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CATEGORY_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        catePostLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CATEGORY_GET_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        category: action.categories,
        cateGetLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CATEGORY_DELETE_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        deletedMsg: action.deletedMsg,
        cateDeleteLoading: false
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/category/saga.js":
/*!********************************!*\
  !*** ./store/category/saga.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/category/action.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");






const modalSuccess = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"][type]({
    message: "Successful",
    description: "Category Added Successfully"
  });
};

const modalDeleteSuccess = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"][type]({
    message: "Successful",
    description: "Category Deleted Successfully"
  });
}; // NEW
// ADD CATEGORY


const sagaAddCategory = async cate => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/category/create";
  const config = {
    headers: {
      Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].TOKEN
    }
  };
  const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, cate, config).then(response => {
    return response.data;
  }).catch(err => {
    console.log(err + "adding to category");
  });
  return data;
}; //FETCH CATEGORIES


const sagaFetchCategories = async () => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/category";
  const config = {
    headers: {
      Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].TOKEN
    }
  };
  const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, config).then(response => {
    return response.data.category;
  }).catch(err => {
    console.log(err + "fetching categories");
  });
  return data;
}; //DELETECATEGORIES


const sagaDeleteCategories = async id => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/category/id/" + id;
  const config = {
    headers: {
      Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].TOKEN
    }
  };
  const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(url, config).then(response => {
    return response.data.message;
  }).catch(err => {
    console.log(err + "deleting categories");
  });
  return data;
};

function* postCategory(payload) {
  try {
    const isCateAdded = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagaAddCategory, payload.category);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["addCategorySuccess"])(isCateAdded));
    modalSuccess("success");
  } catch (err) {
    console.log(err);
  }
}

function* getCategory() {
  try {
    const categories = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagaFetchCategories);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["fetchCategorySuccess"])(categories));
  } catch (err) {
    console.log(err);
  }
}

function* deleteCategory(payload) {
  try {
    const isDeleted = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagaDeleteCategories, payload.id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["deleteCategorySuccess"])(isDeleted));
    modalDeleteSuccess("success");
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].CATEGORY_POST, postCategory)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].CATEGORY_GET, getCategory)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].CATEGORY_DELETE, deleteCategory)]); // yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}

/***/ }),

/***/ "./store/customer/action.js":
/*!**********************************!*\
  !*** ./store/customer/action.js ***!
  \**********************************/
/*! exports provided: actionTypes, actionGetAllCustomers, actionSuccessGetAllCustomers, actionUpgradeCustomer, actionUpgradeCustomerSuccess, actionGetSingleCustomer, actionSuccessGetSingleCustomer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionGetAllCustomers", function() { return actionGetAllCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSuccessGetAllCustomers", function() { return actionSuccessGetAllCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionUpgradeCustomer", function() { return actionUpgradeCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionUpgradeCustomerSuccess", function() { return actionUpgradeCustomerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionGetSingleCustomer", function() { return actionGetSingleCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSuccessGetSingleCustomer", function() { return actionSuccessGetSingleCustomer; });
const actionTypes = {
  GET_ALL_CUSTOMERS: "GET_ALL_CUSTOMERS",
  GET_ALL_CUSTOMERS_SUCCESS: "GET_ALL_CUSTOMERS_SUCCESS",
  GET_SINGLE_CUSTOMER_SUCCESS: "GET_SINGLE_CUSTOMER_SUCCESS",
  GET_SINGLE_CUSTOMER: "GET_SINGLE_CUSTOMER",
  UPGRADE_CUSTOMER: "UPGRADE_CUSTOMER",
  UPGRADE_CUSTOMER_SUCCESS: "UPGRADE_CUSTOMER_SUCCESS"
};
const actionGetAllCustomers = () => {
  return {
    type: actionTypes.GET_ALL_CUSTOMERS
  };
};
const actionSuccessGetAllCustomers = customers => {
  console.log(customers);
  return {
    type: actionTypes.GET_ALL_CUSTOMERS_SUCCESS,
    customers
  };
};
const actionUpgradeCustomer = customer_id => {
  console.log(customer_id);
  return {
    type: actionTypes.UPGRADE_CUSTOMER,
    customer_id
  };
};
const actionUpgradeCustomerSuccess = isUpgraded => {
  console.log(isUpgraded);
  return {
    type: actionTypes.UPGRADE_CUSTOMER_SUCCESS,
    isUpgraded
  };
}; //GET SINGLE CUSTOMER

const actionGetSingleCustomer = customer_id => {
  console.log(customer_id);
  return {
    type: actionTypes.GET_SINGLE_CUSTOMER,
    customer_id
  };
};
const actionSuccessGetSingleCustomer = customer_details => {
  console.log(customer_details);
  return {
    type: actionTypes.GET_SINGLE_CUSTOMER_SUCCESS,
    customer_details
  };
};

/***/ }),

/***/ "./store/customer/reducer.js":
/*!***********************************!*\
  !*** ./store/customer/reducer.js ***!
  \***********************************/
/*! exports provided: initialState, initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/customer/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  customers: null,
  customerPostLoading: true,
  customerGetLoading: true,
  customerDeleteLoading: true,
  deletedMsg: null,
  customerDetails: null,
  singleCustomerGetLoading: true
};
const initState = {
  isLoggedIn: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // case actionTypes.customers_POST_SUCCESS:
    // 	return {
    // 		...state,
    // 		...{ customerPostLoading: false },
    // 	};
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ALL_CUSTOMERS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        customers: action.customers,
        customerGetLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_SINGLE_CUSTOMER_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        customerDetails: action.customer_details,
        singleCustomerGetLoading: false
      });
    // case actionTypes.customers_DELETE_SUCCESS:
    // 	return {
    // 		...state,
    // 		...{ deletedMsg: action.deletedMsg, customerDeleteLoading: false },
    // 	};

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/customer/saga.js":
/*!********************************!*\
  !*** ./store/customer/saga.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/customer/action.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");




 // NEW

const config = {
  headers: {
    Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].TOKEN
  }
}; //FETCH ALL CUSTOMERS

const sagaFetchCustomers = async () => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/customer";
  const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, config).then(response => {
    return response.data.customer;
  }).catch(err => {
    console.log(err + "fetching Customers");
  });
  return data;
}; //FETCH SINGLE CUSTOMER


const sagaFetchSingleCustomer = async customer_id => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/customer/" + customer_id;
  console.log(url);
  const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, config).then(response => {
    return response.data.customer;
  }).catch(err => {
    console.log(err + "fetching single customer");
  });
  return data;
}; //UPGRADE CUSTOMER


const sagaUpgradeCustomer = async customer_id => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].BASE_URL + "/customer/upgrade";
  const customer = {
    account_id: customer_id.toString()
  };
  const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, customer, config).then(response => {
    console.log(response.data);
    return response.data;
  });
  return data;
}; // function* postCategory(payload) {
// 	try {
// 		const isCateAdded = yield call(sagaAddCategory, payload.category);
// 		yield put(addCategorySuccess(isCateAdded));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }


function* getAllCustomers() {
  try {
    const Customers = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagaFetchCustomers);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["actionSuccessGetAllCustomers"])(Customers));
  } catch (err) {
    console.log(err);
  }
}

function* getSingleCustomer({
  customer_id
}) {
  try {
    const customer = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagaFetchSingleCustomer, customer_id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["actionSuccessGetSingleCustomer"])(customer));
  } catch (err) {
    console.log(err);
  }
}

function* upgradeCustomer(payload) {
  try {
    const isUpgraded = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagaUpgradeCustomer, payload.customer_id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(actionUpgradeCustomerSuccess(isUpgraded));
  } catch (err) {
    console.log(err);
  }
} // function* deleteCategory(payload) {
// 	try {
// 		const isDeleted = yield call(sagaDeleteCategories, payload.id);
// 		yield put(deleteCategorySuccess(isDeleted));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }


function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_ALL_CUSTOMERS, getAllCustomers)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_SINGLE_CUSTOMER, getSingleCustomer)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].UPGRADE_CUSTOMER, upgradeCustomer)]);
}

/***/ }),

/***/ "./store/merchant/action.js":
/*!**********************************!*\
  !*** ./store/merchant/action.js ***!
  \**********************************/
/*! exports provided: actionTypes, actionGetAllMechants, actionSuccessGetAllMechants, actionGetSingleMechant, actionSuccessGetSingleMechant, actionVerifyMechant, actionSuccessVerifyMechant, actionUpgradeMerchant, actionUpgradeMerchantSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionGetAllMechants", function() { return actionGetAllMechants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSuccessGetAllMechants", function() { return actionSuccessGetAllMechants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionGetSingleMechant", function() { return actionGetSingleMechant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSuccessGetSingleMechant", function() { return actionSuccessGetSingleMechant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionVerifyMechant", function() { return actionVerifyMechant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSuccessVerifyMechant", function() { return actionSuccessVerifyMechant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionUpgradeMerchant", function() { return actionUpgradeMerchant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionUpgradeMerchantSuccess", function() { return actionUpgradeMerchantSuccess; });
const actionTypes = {
  GET_ALL_MERCHANTS: "GET_ALL_MERCHANTS",
  GET_ALL_MERCHANTS_SUCCESS: "GET_ALL_MERCHANTS_SUCCESS",
  GET_SINGLE_MERCHANT: "GET_SINGLE_MERCHANT",
  GET_SINGLE_MERCHANT_SUCCESS: "GET_SINGLE_MERCHANT_SUCCESS",
  VERIFY_MERCHANT: "VERIFY_MERCHANT",
  VERIFY_MERCHANT_SUCCESS: "VERIFY_MERCHANT_SUCCESS",
  UPGRADE_MERCHANT: "UPGRADE_MERCHANT",
  UPGRADE_MERCHANT_SUCCESS: "UPGRADE_MERCHANT_SUCCESS"
};
const actionGetAllMechants = () => {
  return {
    type: actionTypes.GET_ALL_MERCHANTS
  };
};
const actionSuccessGetAllMechants = merchants => {
  console.log(merchants);
  return {
    type: actionTypes.GET_ALL_MERCHANTS_SUCCESS,
    merchants
  };
}; //GET SINGLE MERCHANT

const actionGetSingleMechant = merchant_id => {
  console.log(merchant_id);
  return {
    type: actionTypes.GET_SINGLE_MERCHANT,
    merchant_id
  };
};
const actionSuccessGetSingleMechant = merchants_details => {
  console.log(merchants_details);
  return {
    type: actionTypes.GET_SINGLE_MERCHANT_SUCCESS,
    merchants_details
  };
}; //VERIFY ACCOUNT

const actionVerifyMechant = id => {
  return {
    type: actionTypes.VERIFY_MERCHANT,
    id
  };
};
const actionSuccessVerifyMechant = isVerifed => {
  console.log(isVerifed);
  return {
    type: actionTypes.VERIFY_MERCHANT_SUCCESS,
    isVerifed
  };
};
const actionUpgradeMerchant = merchant_id => {
  console.log(merchant_id);
  return {
    type: actionTypes.UPGRADE_MERCHANT,
    merchant_id
  };
};
const actionUpgradeMerchantSuccess = isUpgraded => {
  console.log(isUpgraded);
  return {
    type: actionTypes.UPGRADE_MERCHANT_SUCCESS,
    isUpgraded
  };
};

/***/ }),

/***/ "./store/merchant/reducer.js":
/*!***********************************!*\
  !*** ./store/merchant/reducer.js ***!
  \***********************************/
/*! exports provided: initialState, initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/merchant/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  merchants: null,
  merchantPostLoading: true,
  merchantGetLoading: true,
  singleMerchantGetLoading: true,
  merchantDeleteLoading: true,
  deletedMsg: null,
  merchantDetails: null
};
const initState = {
  isLoggedIn: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // case actionTypes.merchants_POST_SUCCESS:
    // 	return {
    // 		...state,
    // 		...{ merchantPostLoading: false },
    // 	};
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ALL_MERCHANTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        merchants: action.merchants,
        merchantGetLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_SINGLE_MERCHANT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        merchantDetails: action.merchants_details,
        singleMerchantGetLoading: false
      });
    // case actionTypes.merchants_DELETE_SUCCESS:
    // 	return {
    // 		...state,
    // 		...{ deletedMsg: action.deletedMsg, merchantDeleteLoading: false },
    // 	};

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/merchant/saga.js":
/*!********************************!*\
  !*** ./store/merchant/saga.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/merchant/action.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");




 // NEW

const config = {
  headers: {
    Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].TOKEN
  }
}; //FETCH ALL MERCHANTS

const sagaFetchMerchants = async () => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/merchant";
  const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, config).then(response => {
    return response.data.merchant;
  }).catch(err => {
    console.log(err + "fetching merchants");
  });
  return data;
}; //FETCH SINGLE MERCHANT


const sagaFetchSingleMerchant = async merchant_id => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/merchant/" + merchant_id;
  const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, config).then(response => {
    return response.data.merchant;
  }).catch(err => {
    console.log(err + "fetching single merchant");
  });
  return data;
}; //VERIFY ALL ACCOUNT


const sagaVerifyMerchant = async id => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/account/verify";
  const user = {
    account_id: id.toString()
  };
  const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, user, config).then(response => {
    console.log(response.data);
    return response.data;
  }).catch(err => {
    console.log(err + "Verify Merchant");
  });
  return data;
}; //UPGRADE  MERCHANT


const sagaUpgradeMerchant = async merchant_id => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].ADMIN_BASE_URL + "/admin/upgrade";
  const merchant = {
    account_id: merchant_id.toString()
  };
  const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, merchant, config).then(response => {
    console.log(response.data);
    return response.data;
  });
  return data;
}; // function* postCategory(payload) {
// 	try {
// 		const isCateAdded = yield call(sagaAddCategory, payload.category);
// 		yield put(addCategorySuccess(isCateAdded));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }


function* getAllMechants() {
  try {
    const merchants = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagaFetchMerchants);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["actionSuccessGetAllMechants"])(merchants));
  } catch (err) {
    console.log(err);
  }
}

function* getSingleMechant({
  merchant_id
}) {
  try {
    const merchant = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagaFetchSingleMerchant, merchant_id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["actionSuccessGetSingleMechant"])(merchant));
  } catch (err) {
    console.log(err);
  }
}

function* verifyMerchant(payload) {
  try {
    const merchants = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagaVerifyMerchant, payload.id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["actionSuccessVerifyMechant"])(merchants));
  } catch (err) {
    console.log(err);
  }
}

function* upgradeMerchant(payload) {
  try {
    const isUpgraded = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagaUpgradeMerchant, payload.merchant_id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(actionUpgradeMerchantSuccess(isUpgraded));
  } catch (err) {
    console.log(err);
  }
} // function* deleteCategory(payload) {
// 	try {
// 		const isDeleted = yield call(sagaDeleteCategories, payload.id);
// 		yield put(deleteCategorySuccess(isDeleted));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }


function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_ALL_MERCHANTS, getAllMechants)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_SINGLE_MERCHANT, getSingleMechant)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].VERIFY_MERCHANT, verifyMerchant)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].UPGRADE_MERCHANT, upgradeMerchant)]);
}

/***/ }),

/***/ "./store/product/action.js":
/*!*********************************!*\
  !*** ./store/product/action.js ***!
  \*********************************/
/*! exports provided: actionTypes, addProduct, addProductSuccess, getMerchantProduct, getMerchantProductSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductSuccess", function() { return addProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMerchantProduct", function() { return getMerchantProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMerchantProductSuccess", function() { return getMerchantProductSuccess; });
const actionTypes = {
  PRODUCT_POST: "PRODUCT_POST",
  PRODUCT_POST_SUCCESS: "PRODUCT_POST_SUCCESS",
  MERCHANT_PRODUCT_GET: "MERCHANT_PRODUCT_GET",
  MERCHANT_PRODUCT_GET_SUCCESS: "MERCHANT_PRODUCT_GET_SUCCESS",
  PRODUCT_DELETE: "PRODUCT_DELETE",
  PRODUCT_DELETE_SUCCESS: "PRODUCT_DELETE_SUCCESS"
};
function addProduct(product) {
  console.log("add product action"); // console.log(product);

  return {
    type: actionTypes.PRODUCT_POST,
    product
  };
}
function addProductSuccess(productMsg) {
  const isAddedMsg = " Product added successfully";
  console.log(isAddedMsg);
  return {
    type: actionTypes.PRODUCT_POST_SUCCESS,
    isAddedMsg
  };
}
function getMerchantProduct(id) {
  console.log("get specific merchant product action");
  return {
    type: actionTypes.MERCHANT_PRODUCT_GET,
    id
  };
}
function getMerchantProductSuccess(merchantProducts) {
  console.log(merchantProducts);
  return {
    type: actionTypes.MERCHANT_PRODUCT_GET_SUCCESS,
    merchantProducts
  };
}

/***/ }),

/***/ "./store/product/reducer.js":
/*!**********************************!*\
  !*** ./store/product/reducer.js ***!
  \**********************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/product/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  product: null,
  productPostLoading: true,
  productGetLoading: true,
  productDeleteLoading: true,
  deletedMsg: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].PRODUCT_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        productPostLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].MERCHANT_PRODUCT_GET_SUCCESS:
      // console.log(action.product+ " reducer")
      return _objectSpread(_objectSpread({}, state), {
        product: action.merchantProducts,
        productGetLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].PRODUCT_DELETE_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        deletedMsg: action.deletedMsg,
        productDeleteLoading: false
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/product/saga.js":
/*!*******************************!*\
  !*** ./store/product/saga.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/product/action.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _API_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../API/Api */ "./store/API/Api.js");






const modalSuccess = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"][type]({
    message: "Successful",
    description: "Product Added successful!"
  });
}; // POST PRODUCT


const sagaAddProduct = async product => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].MERCHANT_ADMIN_BASE_URL + "/product/add";
  const config = {
    headers: {
      Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].TOKEN
    }
  };
  const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, product, config).then(response => {
    console.log("saga add product" + response);
    return response.data.product.name;
  });
  return data;
}; //GET SPECIFIC MERCHANT'S PRODUCT


const sagaGetMerchantProducts = async id => {
  const url = _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].MERCHANT_ADMIN_BASE_URL + "/product/all/" + id;
  const config = {
    headers: {
      Authorization: "Bearer" + _API_Api__WEBPACK_IMPORTED_MODULE_4__["API"].TOKEN
    }
  };
  const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, config).then(response => {
    return response.data.products;
  });
  return data;
};

function* postProduct(payload) {
  try {
    const isProductAdded = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagaAddProduct, payload.product);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["addProductSuccess"])(isProductAdded));
    modalSuccess("success");
  } catch (err) {
    console.log(err + "adding product saga");
  }
}

function* getMerchantProduct(payload) {
  try {
    const merchantProducts = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sagaGetMerchantProducts, payload.id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getMerchantProductSuccess"])(merchantProducts));
  } catch (err) {
    console.log(err + "getting merchant product saga"); // alert(err + "getting merchant product saga");
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].PRODUCT_POST, postProduct)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].MERCHANT_PRODUCT_GET, getMerchantProduct)]); // yield all([takeEvery(actionTypes.PRODUCT_DELETE, deletePRODUCT)]);
  // yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}

/***/ }),

/***/ "./store/rootReducer.js":
/*!******************************!*\
  !*** ./store/rootReducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/reducer */ "./store/auth/reducer.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/reducer */ "./store/app/reducer.js");
/* harmony import */ var _category_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/reducer */ "./store/category/reducer.js");
/* harmony import */ var _product_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/reducer */ "./store/product/reducer.js");
/* harmony import */ var _bid_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bid/reducer */ "./store/bid/reducer.js");
/* harmony import */ var _merchant_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merchant/reducer */ "./store/merchant/reducer.js");
/* harmony import */ var _customer_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer/reducer */ "./store/customer/reducer.js");








/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  app: _app_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  category: _category_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  product: _product_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  bid: _bid_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  merchant: _merchant_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  customer: _customer_reducer__WEBPACK_IMPORTED_MODULE_7__["default"]
}));

/***/ }),

/***/ "./store/rootSaga.js":
/*!***************************!*\
  !*** ./store/rootSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/saga */ "./store/app/saga.js");
/* harmony import */ var _auth_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/saga */ "./store/auth/saga.js");
/* harmony import */ var _category_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/saga */ "./store/category/saga.js");
/* harmony import */ var _product_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/saga */ "./store/product/saga.js");
/* harmony import */ var _bid_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bid/saga */ "./store/bid/saga.js");
/* harmony import */ var _merchant_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merchant/saga */ "./store/merchant/saga.js");
/* harmony import */ var _customer_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer/saga */ "./store/customer/saga.js");








function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_app_saga__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_auth_saga__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_category_saga__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_product_saga__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_bid_saga__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_merchant_saga__WEBPACK_IMPORTED_MODULE_6__["default"])(), Object(_customer_saga__WEBPACK_IMPORTED_MODULE_7__["default"])()]);
}

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootReducer */ "./store/rootReducer.js");
/* harmony import */ var _rootSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rootSaga */ "./store/rootSaga.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__);








const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const makeStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_4__["default"], bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_rootSaga__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__["createWrapper"])(makeStore, {
  debug: false
});
/*
const persistConfig = {
    key: 'martfury',
    storage,
    whitelist: ['cart', 'compare', 'auth', 'wishlist'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        initialState,
        bindMiddleware([sagaMiddleware])
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;
*/

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvRGVmYXVsdExheW91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXRzL21vZHVsZXMvSGVhZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvZHJhd2Vycy9EcmF3ZXJNZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlck1vYmlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvbWVudXMvTWVudVNpZGViYXIuanN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQVBJL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hcHAvYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FwcC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FwcC9zYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2F1dGgvYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2F1dGgvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hdXRoL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYmlkL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9iaWQvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9iaWQvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jYXRlZ29yeS9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY2F0ZWdvcnkvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jYXRlZ29yeS9zYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2N1c3RvbWVyL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jdXN0b21lci9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2N1c3RvbWVyL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvbWVyY2hhbnQvYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL21lcmNoYW50L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvbWVyY2hhbnQvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9wcm9kdWN0L2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9wcm9kdWN0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcHJvZHVjdC9zYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3Jvb3RTYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJEZWZhdWx0TGF5b3V0IiwiY2hpbGRyZW4iLCJTdHlsZVNoZWV0cyIsIkRyYXdlck1lbnUiLCJpc0RyYXdlck1lbnUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaGFuZGxlQ2xvc2VEcmF3ZXIiLCJ0b2dnbGVEcmF3ZXJNZW51IiwiY29ubmVjdCIsInN0YXRlIiwiYXBwIiwiSGVhZGVyTW9iaWxlIiwiaGFuZGxlT3BlbkRyYXdlciIsIk1lbnVTaWRlYmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwibWVudUl0ZW1zIiwidGV4dCIsInVybCIsImljb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwYXRobmFtZSIsInByZWZldGNoZWQiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsIndpbmRvdyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORF9FUlJPUiIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwic3NnNDA0IiwicGFnZSIsIm1vZCIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInZhbGlkYXRlIiwicGFyc2VkRGVzdGluYXRpb24iLCJoYWRMb2NhbGUiLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwic3RyT3JBcnJheSIsImNvbXBpbGVOb25QYXRoIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsImdldExheW91dCIsInVzZUVmZmVjdCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsIkFQSSIsIkFETUlOX0JBU0VfVVJMIiwiQkFTRV9VUkwiLCJNRVJDSEFOVF9BRE1JTl9CQVNFX1VSTCIsIlRPS0VOIiwiZGF0ZUZvcm1hdCIsInRpbWVGb3JtYXQiLCJ0aW1lIiwidG9TdHJpbmciLCJ0b3RhbFN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInN0cmluZ1RvU2xpY2UiLCJpbmRleE9mIiwiZmluYWxEYXRlIiwic2xpY2UiLCJsb2ciLCJhY3Rpb25UeXBlcyIsIlRPR0dMRV9EUkFXRVJfTUVOVSIsIlRPR0dMRV9EUkFXRVJfTUVOVV9TVUNDRVNTIiwicGF5bG9hZCIsInR5cGUiLCJ0b2dnbGVEcmF3ZXJNZW51U3VjY2VzcyIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0b2dnbGVEcmF3ZXJNZW51U2FnYSIsInB1dCIsInJvb3RTYWdhIiwidGFrZUV2ZXJ5IiwiTE9HSU5fUkVRVUVTVCIsIkxPR0lOX1NVQ0NFU1MiLCJSRUdJU1RFUl9SRVFVRVNUIiwiUkVHSVNURVJfU1VDQ0VTUyIsIkxPR09VVCIsIkxPR09VVF9TVUNDRVNTIiwiQ0hFQ0tfQVVUSE9SSVpBVElPTiIsImxvZ2luIiwibG9naW5DcmVkIiwibG9naW5TdWNjZXNzIiwiaXNMb2dpbiIsInJlZ2lzdGVyIiwicmVnaXN0ZXJDcmVkIiwicmVnaXN0ZXJTdWNjZXNzIiwiaXNSZWdpc3RlcmVkIiwibG9nT3V0IiwibG9nT3V0U3VjY2VzcyIsImluaXRTdGF0ZSIsImlzTG9nZ2VkSW4iLCJtb2RhbFN1Y2Nlc3MiLCJub3RpZmljYXRpb24iLCJkZXNjcmlwdGlvbiIsIm1vZGFsV2FybmluZyIsImxvZ2luQWRtaW4iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwiY2F0Y2giLCJyZWdpc3RlckFkbWluIiwibG9naW5TYWdhIiwiY2FsbCIsInJlZ2lzdGVyU2FnYSIsImxvZ091dFNhZ2EiLCJDUkVBVEVfQklEX0VWRU5UIiwiQ1JFQVRFX0JJRF9FVkVOVF9TVUNDRVNTIiwiQURNSU5fRkVUQ0hfQklEX0VWRU5UUyIsIkFETUlOX0ZFVENIX0JJRF9FVkVOVFNfU1VDQ0VTUyIsIkFQUFJPVkVfQklEX0VWRU5UIiwiQVBQUk9WRV9CSURfRVZFTlRfU1VDQ0VTUyIsIkNBTkNFTF9CSURfRVZFTlQiLCJDQU5DRUxfQklEX0VWRU5UX1NVQ0NFU1MiLCJhY3Rpb25DcmVhdGVCaWRFdmVudCIsImFjdGlvbkNyZWF0ZUJpZEV2ZW50U3VjY2VzcyIsImlzQ3JlYXRlZCIsImFjdGlvbkFkbWluRmV0Y2hBdWN0aW9ucyIsInN0YXR1cyIsImFjdGlvbkFkbWluRmV0Y2hBdWN0aW9uc1N1Y2Nlc3MiLCJhdWN0aW9ucyIsImFjdGlvbkFwcHJvdmVFdmVudCIsImV2ZW50X2lkIiwiYWN0aW9uQXBwcm92ZUV2ZW50U3VjY2VzcyIsImlzQXBwcm92ZWQiLCJhY3Rpb25DYW5jZWxFdmVudCIsImFjdGlvbkNhbmNlbEV2ZW50U3VjY2VzcyIsImlzQ2FuY2VsbGVkIiwiYmlkcyIsInBlbmRpbmdCaWRzIiwiYXBwcm92ZWRCaWRzIiwiYmlkUG9zdExvYWRpbmciLCJiaWRHZXRMb2FkaW5nIiwiYmlkRGVsZXRlTG9hZGluZyIsImRlbGV0ZWRNc2ciLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInNhZ2FDcmVhdGVCaWRFdmVudCIsInNhZ2FBZG1pbkZldGNoQmlkRXZlbnQiLCJiaWRkaW5nX2V2ZW50IiwiZmlsdGVyIiwiYmlkIiwiYXBwcm92ZWQiLCJldmVudFN0YXR1cyIsInNhZ2FBcHByb3ZlQmlkRXZlbnQiLCJzYWdhQ2FuY2VsQmlkRXZlbnQiLCJjcmVhdGVCaWRFdmVudCIsImlzRXZlbnRBZGRlZCIsImFkbWluRmV0Y2hCaWRFdmVudCIsImdldEFsbEJpZEV2ZW50IiwiYXBwcm92ZUJpZEV2ZW50IiwiY2FuY2VsQmlkRXZlbnQiLCJDQVRFR09SWV9QT1NUIiwiQ0FURUdPUllfUE9TVF9TVUNDRVNTIiwiQ0FURUdPUllfR0VUIiwiQ0FURUdPUllfR0VUX1NVQ0NFU1MiLCJDQVRFR09SWV9ERUxFVEUiLCJDQVRFR09SWV9ERUxFVEVfU1VDQ0VTUyIsImFkZENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJhZGRDYXRlZ29yeVN1Y2Nlc3MiLCJmZXRjaENhdGVnb3J5IiwiZmV0Y2hDYXRlZ29yeVN1Y2Nlc3MiLCJjYXRlZ29yaWVzIiwiZGVsZXRlQWN0aW9uQ2F0ZWdvcnkiLCJkZWxldGVDYXRlZ29yeVN1Y2Nlc3MiLCJjYXRlUG9zdExvYWRpbmciLCJjYXRlR2V0TG9hZGluZyIsImNhdGVEZWxldGVMb2FkaW5nIiwibW9kYWxEZWxldGVTdWNjZXNzIiwic2FnYUFkZENhdGVnb3J5IiwiY2F0ZSIsInNhZ2FGZXRjaENhdGVnb3JpZXMiLCJzYWdhRGVsZXRlQ2F0ZWdvcmllcyIsImRlbGV0ZSIsInBvc3RDYXRlZ29yeSIsImlzQ2F0ZUFkZGVkIiwiZ2V0Q2F0ZWdvcnkiLCJkZWxldGVDYXRlZ29yeSIsImlzRGVsZXRlZCIsIkdFVF9BTExfQ1VTVE9NRVJTIiwiR0VUX0FMTF9DVVNUT01FUlNfU1VDQ0VTUyIsIkdFVF9TSU5HTEVfQ1VTVE9NRVJfU1VDQ0VTUyIsIkdFVF9TSU5HTEVfQ1VTVE9NRVIiLCJVUEdSQURFX0NVU1RPTUVSIiwiVVBHUkFERV9DVVNUT01FUl9TVUNDRVNTIiwiYWN0aW9uR2V0QWxsQ3VzdG9tZXJzIiwiYWN0aW9uU3VjY2Vzc0dldEFsbEN1c3RvbWVycyIsImN1c3RvbWVycyIsImFjdGlvblVwZ3JhZGVDdXN0b21lciIsImN1c3RvbWVyX2lkIiwiYWN0aW9uVXBncmFkZUN1c3RvbWVyU3VjY2VzcyIsImlzVXBncmFkZWQiLCJhY3Rpb25HZXRTaW5nbGVDdXN0b21lciIsImFjdGlvblN1Y2Nlc3NHZXRTaW5nbGVDdXN0b21lciIsImN1c3RvbWVyX2RldGFpbHMiLCJjdXN0b21lclBvc3RMb2FkaW5nIiwiY3VzdG9tZXJHZXRMb2FkaW5nIiwiY3VzdG9tZXJEZWxldGVMb2FkaW5nIiwiY3VzdG9tZXJEZXRhaWxzIiwic2luZ2xlQ3VzdG9tZXJHZXRMb2FkaW5nIiwic2FnYUZldGNoQ3VzdG9tZXJzIiwiY3VzdG9tZXIiLCJzYWdhRmV0Y2hTaW5nbGVDdXN0b21lciIsInNhZ2FVcGdyYWRlQ3VzdG9tZXIiLCJhY2NvdW50X2lkIiwiZ2V0QWxsQ3VzdG9tZXJzIiwiQ3VzdG9tZXJzIiwiZ2V0U2luZ2xlQ3VzdG9tZXIiLCJ1cGdyYWRlQ3VzdG9tZXIiLCJHRVRfQUxMX01FUkNIQU5UUyIsIkdFVF9BTExfTUVSQ0hBTlRTX1NVQ0NFU1MiLCJHRVRfU0lOR0xFX01FUkNIQU5UIiwiR0VUX1NJTkdMRV9NRVJDSEFOVF9TVUNDRVNTIiwiVkVSSUZZX01FUkNIQU5UIiwiVkVSSUZZX01FUkNIQU5UX1NVQ0NFU1MiLCJVUEdSQURFX01FUkNIQU5UIiwiVVBHUkFERV9NRVJDSEFOVF9TVUNDRVNTIiwiYWN0aW9uR2V0QWxsTWVjaGFudHMiLCJhY3Rpb25TdWNjZXNzR2V0QWxsTWVjaGFudHMiLCJtZXJjaGFudHMiLCJhY3Rpb25HZXRTaW5nbGVNZWNoYW50IiwibWVyY2hhbnRfaWQiLCJhY3Rpb25TdWNjZXNzR2V0U2luZ2xlTWVjaGFudCIsIm1lcmNoYW50c19kZXRhaWxzIiwiYWN0aW9uVmVyaWZ5TWVjaGFudCIsImFjdGlvblN1Y2Nlc3NWZXJpZnlNZWNoYW50IiwiaXNWZXJpZmVkIiwiYWN0aW9uVXBncmFkZU1lcmNoYW50IiwiYWN0aW9uVXBncmFkZU1lcmNoYW50U3VjY2VzcyIsIm1lcmNoYW50UG9zdExvYWRpbmciLCJtZXJjaGFudEdldExvYWRpbmciLCJzaW5nbGVNZXJjaGFudEdldExvYWRpbmciLCJtZXJjaGFudERlbGV0ZUxvYWRpbmciLCJtZXJjaGFudERldGFpbHMiLCJzYWdhRmV0Y2hNZXJjaGFudHMiLCJtZXJjaGFudCIsInNhZ2FGZXRjaFNpbmdsZU1lcmNoYW50Iiwic2FnYVZlcmlmeU1lcmNoYW50IiwidXNlciIsInNhZ2FVcGdyYWRlTWVyY2hhbnQiLCJnZXRBbGxNZWNoYW50cyIsImdldFNpbmdsZU1lY2hhbnQiLCJ2ZXJpZnlNZXJjaGFudCIsInVwZ3JhZGVNZXJjaGFudCIsIlBST0RVQ1RfUE9TVCIsIlBST0RVQ1RfUE9TVF9TVUNDRVNTIiwiTUVSQ0hBTlRfUFJPRFVDVF9HRVQiLCJNRVJDSEFOVF9QUk9EVUNUX0dFVF9TVUNDRVNTIiwiUFJPRFVDVF9ERUxFVEUiLCJQUk9EVUNUX0RFTEVURV9TVUNDRVNTIiwiYWRkUHJvZHVjdCIsInByb2R1Y3QiLCJhZGRQcm9kdWN0U3VjY2VzcyIsInByb2R1Y3RNc2ciLCJpc0FkZGVkTXNnIiwiZ2V0TWVyY2hhbnRQcm9kdWN0IiwiZ2V0TWVyY2hhbnRQcm9kdWN0U3VjY2VzcyIsIm1lcmNoYW50UHJvZHVjdHMiLCJwcm9kdWN0UG9zdExvYWRpbmciLCJwcm9kdWN0R2V0TG9hZGluZyIsInByb2R1Y3REZWxldGVMb2FkaW5nIiwic2FnYUFkZFByb2R1Y3QiLCJzYWdhR2V0TWVyY2hhbnRQcm9kdWN0cyIsInByb2R1Y3RzIiwicG9zdFByb2R1Y3QiLCJpc1Byb2R1Y3RBZGRlZCIsImNvbWJpbmVSZWR1Y2VycyIsIkFwcFNhZ2EiLCJBdXRoU2FnYSIsIkNhdGVnb3J5U2FnYSIsIlByb2R1Y3RTYWdhIiwiQmlkU2FnYSIsIk1lcmNoYW50U2FnYSIsIkN1c3RvbWVyU2FnYSIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJtYWtlU3RvcmUiLCJjb250ZXh0Iiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7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QUNULFNBQUQsRUFBWTtBQUFFVSxPQUFLLEVBQUU7QUFBVCxDQUFaLENBQTdCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJy4vbW9kdWxlcy9IZWFkJztcbmltcG9ydCBIZWFkZXJNb2JpbGUgZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlck1vYmlsZSc7XG5pbXBvcnQgRHJhd2VyTWVudSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL2RyYXdlcnMvRHJhd2VyTWVudSc7XG5cbmNvbnN0IERlZmF1bHRMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cIm1hcnRmdXJ5XCI+XG4gICAgICAgICAgICA8SGVhZCAvPlxuICAgICAgICAgICAgPEhlYWRlck1vYmlsZSAvPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPERyYXdlck1lbnUgLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLXNlY3Rpb24gc2VjdGlvbi1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItc2VjdGlvbiBzZWN0aW9uLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgU3R5bGVTaGVldHMgPSAoKSA9PiAoXG4gICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZm9ybWF0LWRldGVjdGlvblwiIGNvbnRlbnQ9XCJ0ZWxlcGhvbmU9bm9cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgICB7Lyo8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9zdGF0aWMvaW1nL2ZhdmkucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL2ltZy9mYXZpLnBuZ1wiIHNpemVzPVwiMzJ4MzJcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvaW1nL2ZhdmkucG5nXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvbi1wcmVjb21wb3NlZFwiIGhyZWY9XCIvc3RhdGljL2ltZy9mYXZpLnBuZ1wiIC8+Ki99XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwibm91dGhlbWVzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIk1hcnRmdXJ5LCByZWFjdCwgZWNvbW1lcmNlLCBUZW1wbGF0ZVwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD1cIk1hcnRmdXJ5IC0gUmVhY3QgZUNvbW1lcmNlIFRlbXBsYXRlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPk1hcnRmdXJ5IHwgUmVhY3QgZUNvbW1lcmNlIEFkbWluIFRlbXBsYXRlPC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9V29yaytTYW5zOjMwMCw0MDAsNTAwLDYwMCw3MDAmYW1wO2FtcDtzdWJzZXQ9bGF0aW4tZXh0XCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiL2ZvbnRzL0xpbmVhcmljb25zL0ZvbnQvZGVtby1maWxlcy9kZW1vLmNzc1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cIi9mb250cy9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICA8L0hlYWQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZVNoZWV0cztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHRvZ2dsZURyYXdlck1lbnUgfSBmcm9tICd+L3N0b3JlL2FwcC9hY3Rpb24nO1xuaW1wb3J0IE1lbnVTaWRlYmFyIGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvbWVudXMvTWVudVNpZGViYXInO1xuXG5jb25zdCBEcmF3ZXJNZW51ID0gKHsgaXNEcmF3ZXJNZW51IH0pID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2VEcmF3ZXIgPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZURyYXdlck1lbnUoZmFsc2UpKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e2Bwcy1kcmF3ZXItLW1vYmlsZSAke2lzRHJhd2VyTWVudSAmJiAnYWN0aXZlJ31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtZHJhd2VyX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDQ+IE1lbnU8L2g0PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHMtZHJhd2VyX19jbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRHJhd2VyfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNyb3NzXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWRyYXdlcl9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxNZW51U2lkZWJhciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZS5hcHApKERyYXdlck1lbnUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdG9nZ2xlRHJhd2VyTWVudSB9IGZyb20gJ34vc3RvcmUvYXBwL2FjdGlvbic7XG5cbmNvbnN0IEhlYWRlck1vYmlsZSA9ICh7IGlzRHJhd2VyTWVudSB9KSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhhbmRsZU9wZW5EcmF3ZXIgPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZURyYXdlck1lbnUodHJ1ZSkpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXItLW1vYmlsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xlZnRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBzLWRyYXdlci10b2dnbGVcIiBvbkNsaWNrPXtoYW5kbGVPcGVuRHJhd2VyfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHMtbG9nb1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9sb2dvLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXJfX3NpdGUtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tZXhpdC1yaWdodFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZS5hcHApKEhlYWRlck1vYmlsZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgTWVudVNpZGViYXIgPSAoKSA9PiB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBtZW51SXRlbXMgPSBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJEYXNoYm9hcmRcIixcblx0XHRcdHVybDogXCIvXCIsXG5cdFx0XHRpY29uOiBcImljb24taG9tZVwiLFxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkNhdGVnb3JpZXNcIixcblx0XHRcdHVybDogXCIvY2F0ZWdvcmllc1wiLFxuXHRcdFx0aWNvbjogXCJpY29uLXVzZXJzMlwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQcm9kdWN0c1wiLFxuXHRcdFx0dXJsOiBcIi9wcm9kdWN0c1wiLFxuXHRcdFx0aWNvbjogXCJpY29uLWRhdGFiYXNlXCIsXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdHRleHQ6IFwiUGVuZGluZyBBdWN0aW9uc1wiLFxuXHRcdFx0dXJsOiBcIi9iaWRzL3BlbmRpbmdcIixcblx0XHRcdGljb246IFwiaWNvbi1jb2dcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiQXBwcm92ZWQgQXVjdGlvbnNcIixcblx0XHRcdHVybDogXCIvYmlkcy9hcHByb3ZlZFwiLFxuXHRcdFx0aWNvbjogXCJpY29uLWNvZ1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJPbmdvaW5nIEF1Y3Rpb25zXCIsXG5cdFx0XHR1cmw6IFwiL2JpZHMvb25nb2luZ1wiLFxuXHRcdFx0aWNvbjogXCJpY29uLWNvZ1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDb21wbGV0ZWQgQXVjdGlvbnNcIixcblx0XHRcdHVybDogXCIvYmlkcy9jb21wbGV0ZWRcIixcblx0XHRcdGljb246IFwiaWNvbi1jb2dcIixcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJPcmRlcnNcIixcblx0XHRcdHVybDogXCIvb3JkZXJzXCIsXG5cdFx0XHRpY29uOiBcImljb24tYmFnMlwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDdXN0b21lcnNcIixcblx0XHRcdHVybDogXCIvY3VzdG9tZXJzXCIsXG5cdFx0XHRpY29uOiBcImljb24tdXNlcnMyXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIk1lcmNoYW50c1wiLFxuXHRcdFx0dXJsOiBcIi9tZXJjaGFudHNcIixcblx0XHRcdGljb246IFwiaWNvbi11c2VyczJcIixcblx0XHR9LFxuXHRcdC8vIHtcblx0XHQvLyBcdHRleHQ6IFwiU2hpcHBpbmdcIixcblx0XHQvLyBcdHVybDogXCIvc2hpcHBpbmdcIixcblx0XHQvLyBcdGljb246IFwiaWNvbi1jb2dcIixcblx0XHQvLyB9LFxuXHRcdC8vIHtcblx0XHQvLyBcdHRleHQ6IFwiQ2FzaG91dCBSZXF1ZXN0c1wiLFxuXHRcdC8vIFx0dXJsOiBcIi9jYXNob3V0X3JlcXVlc3RzXCIsXG5cdFx0Ly8gXHRpY29uOiBcImljb24tY29nXCIsXG5cdFx0Ly8gfSxcblx0XHQvLyB7XG5cdFx0Ly8gXHR0ZXh0OiBcIkFwcHJvdmVkIENhc2hvdXRzXCIsXG5cdFx0Ly8gXHR1cmw6IFwiL2FwcHJvdmVkX2Nhc2hvdXRzXCIsXG5cdFx0Ly8gXHRpY29uOiBcImljb24tY29nXCIsXG5cdFx0Ly8gfSxcblxuXHRcdHtcblx0XHRcdHRleHQ6IFwiU2V0dGluZ3NcIixcblx0XHRcdHVybDogXCIvc2V0dGluZ3NcIixcblx0XHRcdGljb246IFwiaWNvbi1jb2dcIixcblx0XHR9LFxuXHRdO1xuXG5cdHJldHVybiAoXG5cdFx0PHVsIGNsYXNzTmFtZT1cIm1lbnVcIj5cblx0XHRcdHttZW51SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuXHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRrZXk9e2luZGV4fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBpdGVtLnVybCA/IFwiYWN0aXZlXCIgOiBcIlwifVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj17aXRlbS51cmx9PlxuXHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17aXRlbS5pY29ufT48L2k+XG5cdFx0XHRcdFx0XHRcdHtpdGVtLnRleHR9XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVTaWRlYmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdywgbG9jYWxlIH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcikge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaWRsZVRpbWVvdXQ8VD4obXM6IG51bWJlciwgZXJyOiBFcnJvcik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIpLCBtcykpXG4gIClcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIGlkbGVUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICAgICksXG4gIF0pXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGUpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0PFJvdXRlTG9hZGVyRW50cnk+KFxuICAgICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlKSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8XG4gIHN0cmluZyxcbiAge1xuICAgIGlkOiBzdHJpbmdcbiAgICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbiAgfVxuPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SID0gJ1NTRyBEYXRhIE5PVF9GT1VORCdcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgcmVsb2FkaW5nIGluIGRldmVsb3BtZW50IGZyb20gZmFsbGJhY2sgcmV0dXJuaW5nIDIwMFxuICAgICAgICAvLyB0byBvbi1kZW1hbmQtZW50cnktaGFuZGxlciBjYXVzaW5nIGl0IHRvIHJlbG9hZCBwZXJpb2RpY2FsbHlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFNTR19EQVRBX05PVF9GT1VORF9FUlJPUilcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aCxcbiAgICAgIH0gPSByZXF1aXJlKCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lKVxuICAgICAgfVxuXG4gICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcywgZmFsc2UpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHNzZzQwNCA9IGVyci5tZXNzYWdlID09PSBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1JcblxuICAgICAgaWYgKHNzZzQwNCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBtb2Q6IGFueVxuICAgICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzLCBtb2QgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgICAnLzQwNCdcbiAgICAgICAgICApKVxuXG4gICAgICAgICAgLy8gVE9ETzogc2hvdWxkIHdlIHRvbGVyYXRlIHRoZXNlIHByb3BzIG1pc3NpbmcgYW5kIHN0aWxsIHJlbmRlciB0aGVcbiAgICAgICAgICAvLyBwYWdlIGluc3RlYWQgb2YgZmFsbGluZyBiYWNrIHRvIF9lcnJvcj9cbiAgICAgICAgICBpZiAobW9kICYmIG1vZC5fX05fU1NHKSB7XG4gICAgICAgICAgICBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZignLzQwNCcsICcvNDA0JywgdHJ1ZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgLy8gbm9uLWZhdGFsIGZhbGxiYWNrIHRvIF9lcnJvclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICAgIGVycm9yOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChzaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcbiAgICAgICAgLm5vcm1hbGl6ZUxvY2FsZVBhdGggYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKS5ub3JtYWxpemVMb2NhbGVQYXRoXG5cbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXNQYXRoLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlTm9uUGF0aCh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoJzonKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyYW1zKSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhgOiR7a2V5fWApKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcKmAsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcP2AsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT05gXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwrYCwgJ2cnKSwgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUExVU2ApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX0oPyFcXFxcdylgLCAnZycpLFxuICAgICAgICAgIGAtLUVTQ0FQRURfUEFSQU1fQ09MT04ke2tleX1gXG4gICAgICAgIClcbiAgICB9XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZVxuICAgIC5yZXBsYWNlKC8oOnxcXCp8XFw/fFxcK3xcXCh8XFwpfFxce3xcXH0pL2csICdcXFxcJDEnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUExVUy9nLCAnKycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9DT0xPTi9nLCAnOicpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTi9nLCAnPycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1MvZywgJyonKVxuXG4gIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAvLyBjb3JyZWN0bHlcbiAgcmV0dXJuIHBhdGhUb1JlZ2V4cFxuICAgIC5jb21waWxlKGAvJHt2YWx1ZX1gLCB7IHZhbGlkYXRlOiBmYWxzZSB9KShwYXJhbXMpXG4gICAgLnN1YnN0cigxKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgLy8gY2xvbmUgcXVlcnkgc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBvcmlnaW5hbFxuICBxdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5KVxuICBjb25zdCBoYWRMb2NhbGUgPSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuICBkZWxldGUgcXVlcnkuX19uZXh0RGVmYXVsdExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gY29tcGlsZU5vblBhdGgodmFsdWUsIHBhcmFtcylcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBsZXQgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIC8vIHJlbW92ZSBpbnRlcm5hbCBwYXJhbSBmb3IgaTE4blxuICBpZiAoaGFkTG9jYWxlKSB7XG4gICAgcGFyYW1LZXlzID0gcGFyYW1LZXlzLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gJ25leHRJbnRlcm5hbExvY2FsZScpXG4gIH1cblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgKHBhcnNlZERlc3RpbmF0aW9uIGFzIGFueSkuc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9sYXlvdXRzL0RlZmF1bHRMYXlvdXQnO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJ34vc3RvcmUvc3RvcmUnO1xuaW1wb3J0ICd+L3N0eWxlcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQubWluLmNzcyc7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICBjb25zdCBnZXRMYXlvdXQgPVxuICAgICAgICBDb21wb25lbnQuZ2V0TGF5b3V0IHx8ICgocGFnZSkgPT4gPERlZmF1bHRMYXlvdXQgY2hpbGRyZW49e3BhZ2V9IC8+KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX25leHQnKS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGdldExheW91dCg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiIsImV4cG9ydCBjb25zdCBBUEkgPSB7XHJcblx0QURNSU5fQkFTRV9VUkw6IFwiaHR0cDovL3NtYXJ0LXBhcmsueHl6L2FwaS92MS9hZG1pblwiLFxyXG5cdEJBU0VfVVJMOiBcImh0dHA6Ly9zbWFydC1wYXJrLnh5ei9hcGkvdjFcIixcclxuXHRNRVJDSEFOVF9BRE1JTl9CQVNFX1VSTDogXCJodHRwOi8vc21hcnQtcGFyay54eXovYXBpL3YxL21lcmNoYW50XCIsXHJcblx0VE9LRU46XHJcblx0XHRcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk1Td2laVzFoYVd3aU9pSnFiMmh1Wkc5bFFHZHRZV2xzTG1OdmJTSXNJbUZqWTI5MWJuUmZkSGx3WlNJNkltTjFjM1J2YldWeUlpd2lhV0YwSWpveE5qUTNOVFUzTWpNM0xDSmxlSEFpT2pFMk5EYzFOalEwTXpkOS42RkVEbVZEdWNDNmlpUk00TGFZV2NvNXN1RzhKX1FMeDlyZ3FuclZyODlFXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZUZvcm1hdCA9ICh0aW1lRm9ybWF0KSA9PiB7XHJcblx0Y29uc3QgZXZlbnQgPSBuZXcgRGF0ZSh0aW1lRm9ybWF0KTtcclxuXHRjb25zdCB0aW1lID0gZXZlbnQudG9TdHJpbmcoKTtcclxuXHJcblx0Y29uc3QgdG90YWxTdHJpbmdMZW5ndGggPSB0aW1lLmxlbmd0aDtcclxuXHRjb25zdCBzdHJpbmdUb1NsaWNlID0gdGltZS5pbmRleE9mKFwiR1wiKTtcclxuXHRjb25zdCBmaW5hbERhdGUgPSB0aW1lLnNsaWNlKDAsIHN0cmluZ1RvU2xpY2UpO1xyXG5cdGNvbnNvbGUubG9nKHRvdGFsU3RyaW5nTGVuZ3RoKVxyXG5cdHJldHVybiBmaW5hbERhdGU7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgICBUT0dHTEVfRFJBV0VSX01FTlU6ICdUT0dHTEVfRFJBV0VSX01FTlUnLFxuICAgIFRPR0dMRV9EUkFXRVJfTUVOVV9TVUNDRVNTOiAnVE9HR0xFX0RSQVdFUl9NRU5VX1NVQ0NFU1MnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURyYXdlck1lbnUocGF5bG9hZCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlRPR0dMRV9EUkFXRVJfTUVOVSwgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRHJhd2VyTWVudVN1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlRPR0dMRV9EUkFXRVJfTUVOVV9TVUNDRVNTLCBwYXlsb2FkIH07XG59XG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc0RyYXdlck1lbnU6IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlRPR0dMRV9EUkFXRVJfTUVOVV9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0RyYXdlck1lbnU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIHRvZ2dsZURyYXdlck1lbnVTdWNjZXNzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5mdW5jdGlvbiogdG9nZ2xlRHJhd2VyTWVudVNhZ2EoeyBwYXlsb2FkIH0pIHtcbiAgICB0cnkge1xuICAgICAgICB5aWVsZCBwdXQodG9nZ2xlRHJhd2VyTWVudVN1Y2Nlc3MocGF5bG9hZCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlRPR0dMRV9EUkFXRVJfTUVOVSwgdG9nZ2xlRHJhd2VyTWVudVNhZ2EpLFxuICAgIF0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xuICAgIExPR0lOX1JFUVVFU1Q6ICdMT0dJTl9SRVFVRVNUJyxcbiAgICBMT0dJTl9TVUNDRVNTOiAnTE9HSU5fU1VDQ0VTUycsXG4gICAgUkVHSVNURVJfUkVRVUVTVDogJ1JFR0lTVEVSX1JFUVVFU1QnLFxuICAgIFJFR0lTVEVSX1NVQ0NFU1M6ICdSRUdJU1RFUl9TVUNDRVNTJyxcbiAgICBMT0dPVVQ6ICdMT0dPVVQnLFxuICAgIExPR09VVF9TVUNDRVNTOiAnTE9HT1VUX1NVQ0NFU1MnLFxuICAgIENIRUNLX0FVVEhPUklaQVRJT046ICdDSEVDS19BVVRIT1JJWkFUSU9OJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbihsb2dpbkNyZWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9SRVFVRVNULCBsb2dpbkNyZWR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW5TdWNjZXNzKGlzTG9naW4pIHtcbiAgICBcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9TVUNDRVNTLCBpc0xvZ2luIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcihyZWdpc3RlckNyZWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5SRUdJU1RFUl9SRVFVRVNULCByZWdpc3RlckNyZWR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTdWNjZXNzKGlzUmVnaXN0ZXJlZCkge1xuICAgIFxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlJFR0lTVEVSX1NVQ0NFU1MsIGlzUmVnaXN0ZXJlZH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dPdXQoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HT1VUIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dPdXRTdWNjZXNzKCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR09VVF9TVUNDRVNTIH07XG59XG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICBpc1JlZ2lzdGVyZWQ6IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkxPR0lOX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgaXNMb2dnZWRJbjogdHJ1ZSB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVHSVNURVJfU1VDQ0VTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgLi4ueyBpc1JlZ2lzdGVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkxPR09VVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGlzTG9nZ2VkSW46IGZhbHNlIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgeyBhY3Rpb25UeXBlcywgbG9naW5TdWNjZXNzLCBsb2dPdXRTdWNjZXNzLCByZWdpc3RlclN1Y2Nlc3MgfSBmcm9tIFwiLi9hY3Rpb25cIjtcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9BUEkvQXBpXCI7XG5cblxuY29uc3QgbW9kYWxTdWNjZXNzID0gKHR5cGUpID0+IHtcblx0bm90aWZpY2F0aW9uW3R5cGVdKHtcblx0XHRtZXNzYWdlOiBcIldlbGNvbWUgYmFja1wiLFxuXHRcdGRlc2NyaXB0aW9uOiBcIllvdSBhcmUgbG9naW4gc3VjY2Vzc2Z1bCFcIixcblx0fSk7XG59O1xuXG5jb25zdCBtb2RhbFdhcm5pbmcgPSAodHlwZSkgPT4ge1xuXHRub3RpZmljYXRpb25bdHlwZV0oe1xuXHRcdG1lc3NhZ2U6IFwiR29vZCBieWUhXCIsXG5cdFx0ZGVzY3JpcHRpb246IFwiWW91ciBhY2NvdW50IGhhcyBiZWVuIGxvZ2dlZCBvdXQhXCIsXG5cdH0pO1xufTtcblxuY29uc3QgbG9naW5BZG1pbiA9IGFzeW5jIChsb2dpbkNyZWQpID0+IHtcblx0Y29uc29sZS5sb2cobG9naW5DcmVkKTtcblx0Y29uc3QgdXJsID0gQVBJLkJBU0VfVVJMICsgXCJsb2dpblwiO1xuXG5cdGNvbnNvbGUubG9nKHVybClcblx0Y29uc3QgZGF0YSA9IGF4aW9zXG5cdFx0LnBvc3QodXJsLCBsb2dpbkNyZWQpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YS50b2tlbikpO1xuXHRcdFx0XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyQWRtaW4gPSBhc3luYyAocmVnaXN0ZXJDcmVkKSA9PiB7XG5cdGNvbnNvbGUubG9nKHJlZ2lzdGVyQ3JlZCk7XG5cdC8vIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly96b3pvLWF1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvbWVyY2hhbnQvY3JlYXRlXCJcblx0Y29uc3QgdXJsID0gQVBJLkFETUlOX0JBU0VfVVJMICsgXCIvYWRtaW4vY3JlYXRlXCI7XG5cdGNvbnNvbGUubG9nKHVybClcblxuXHRjb25zdCBkYXRhID0gYXhpb3Ncblx0XHQucG9zdCh1cmwsIHJlZ2lzdGVyQ3JlZClcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhLnRva2VuKSk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGF0YTtcbn07XG5cblxuXG5mdW5jdGlvbiogbG9naW5TYWdhKHBheWxvYWQpIHtcblx0dHJ5IHtcblx0XHRjb25zdCBpc0xvZ2luID0geWllbGQgY2FsbChsb2dpbkFkbWluLCBwYXlsb2FkLmxvZ2luQ3JlZCk7XG5cdFx0aWYgKGlzTG9naW4pIHtcblx0XHRcdHlpZWxkIHB1dChsb2dpblN1Y2Nlc3MoKSk7XG5cdFx0XHRtb2RhbFN1Y2Nlc3MoXCJzdWNjZXNzXCIpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyKTtcblx0fVxufVxuXG5mdW5jdGlvbiogcmVnaXN0ZXJTYWdhKHBheWxvYWQpIHtcblx0dHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2cocGF5bG9hZC5yZWdpc3RlckNyZWQpXG5cdFx0Y29uc3QgaXNSZWdpc3RlcmVkID0geWllbGQgY2FsbChyZWdpc3RlckFkbWluLCBwYXlsb2FkLnJlZ2lzdGVyQ3JlZCk7XG5cdFx0aWYgKGlzUmVnaXN0ZXJlZCkge1xuXHRcdFx0eWllbGQgcHV0KHJlZ2lzdGVyU3VjY2VzcygpKTtcblx0XHRcdG1vZGFsU3VjY2VzcyhcInN1Y2Nlc3NcIik7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uKiBsb2dPdXRTYWdhKCkge1xuXHR0cnkge1xuXHRcdHlpZWxkIHB1dChsb2dPdXRTdWNjZXNzKCkpO1xuXHRcdG1vZGFsV2FybmluZyhcIndhcm5pbmdcIik7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUubG9nKGVycik7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dJTl9SRVFVRVNULCBsb2dpblNhZ2EpXSk7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUkVHSVNURVJfUkVRVUVTVCwgcmVnaXN0ZXJTYWdhKV0pO1xuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dPVVQsIGxvZ091dFNhZ2EpXSk7XG59XG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICAgIENSRUFURV9CSURfRVZFTlQ6IFwiQ1JFQVRFX0JJRF9FVkVOVFwiLFxyXG4gICAgICBDUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1M6IFwiQ1JFQVRFX0JJRF9FVkVOVF9TVUNDRVNTXCIsXHJcbiAgICAgIEFETUlOX0ZFVENIX0JJRF9FVkVOVFM6IFwiQURNSU5fRkVUQ0hfQklEX0VWRU5UU1wiLFxyXG4gICAgICBBRE1JTl9GRVRDSF9CSURfRVZFTlRTX1NVQ0NFU1M6IFwiQURNSU5fRkVUQ0hfQklEX0VWRU5UU19TVUNDRVNTXCIsXHJcbiAgICAgIEFQUFJPVkVfQklEX0VWRU5UOiBcIkFQUFJPVkVfQklEX0VWRU5UXCIsXHJcbiAgICAgIEFQUFJPVkVfQklEX0VWRU5UX1NVQ0NFU1M6IFwiQVBQUk9WRV9CSURfRVZFTlRfU1VDQ0VTU1wiLFxyXG4gICAgICBDQU5DRUxfQklEX0VWRU5UOiBcIkNBTkNFTF9CSURfRVZFTlRcIixcclxuICAgICAgQ0FOQ0VMX0JJRF9FVkVOVF9TVUNDRVNTOiBcIkNBTkNFTF9CSURfRVZFTlRfU1VDQ0VTU1wiLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ3JlYXRlQmlkRXZlbnQgKGV2ZW50KXtcclxuICAgICAgcmV0dXJue3R5cGU6YWN0aW9uVHlwZXMuQ1JFQVRFX0JJRF9FVkVOVCwgZXZlbnR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DcmVhdGVCaWRFdmVudFN1Y2Nlc3MgKGlzQ3JlYXRlZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVkIGJpZCcgKyBpc0NyZWF0ZWQpXHJcbiAgICAgIHJldHVybnt0eXBlOmFjdGlvblR5cGVzLkNSRUFURV9CSURfRVZFTlRfU1VDQ0VTU31cclxufVxyXG5cclxuLy9BRE1JTlxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQWRtaW5GZXRjaEF1Y3Rpb25zIChzdGF0dXMpe1xyXG4gICAgICByZXR1cm4ge3R5cGU6YWN0aW9uVHlwZXMuQURNSU5fRkVUQ0hfQklEX0VWRU5UUywgc3RhdHVzfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQWRtaW5GZXRjaEF1Y3Rpb25zU3VjY2VzcyAoYXVjdGlvbnMpe1xyXG4gICAgICBjb25zb2xlLmxvZyhhdWN0aW9ucylcclxuICAgICAgcmV0dXJuIHt0eXBlOmFjdGlvblR5cGVzLkFETUlOX0ZFVENIX0JJRF9FVkVOVFNfU1VDQ0VTUywgYXVjdGlvbnN9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25BcHByb3ZlRXZlbnQgKGV2ZW50X2lkKXtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnRfaWQpXHJcbiAgICAgIHJldHVybiB7dHlwZTphY3Rpb25UeXBlcy5BUFBST1ZFX0JJRF9FVkVOVCwgZXZlbnRfaWR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25BcHByb3ZlRXZlbnRTdWNjZXNzIChpc0FwcHJvdmVkKXtcclxuICAgICAgY29uc29sZS5sb2coaXNBcHByb3ZlZClcclxuICAgICAgcmV0dXJuIHt0eXBlOmFjdGlvblR5cGVzLkFQUFJPVkVfQklEX0VWRU5UX1NVQ0NFU1MsIGlzQXBwcm92ZWR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DYW5jZWxFdmVudCAoZXZlbnRfaWQpe1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudF9pZClcclxuICAgICAgcmV0dXJuIHt0eXBlOmFjdGlvblR5cGVzLkNBTkNFTF9CSURfRVZFTlQsIGV2ZW50X2lkfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ2FuY2VsRXZlbnRTdWNjZXNzIChpc0NhbmNlbGxlZCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlzQ2FuY2VsbGVkKVxyXG4gICAgICByZXR1cm4ge3R5cGU6YWN0aW9uVHlwZXMuQ0FOQ0VMX0JJRF9FVkVOVF9TVUNDRVNTLCBpc0NhbmNlbGxlZH1cclxufSIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGJpZHM6IG51bGwsXHJcbiAgICAgIHBlbmRpbmdCaWRzOm51bGwsXHJcbiAgICAgIGFwcHJvdmVkQmlkczpudWxsLFxyXG5cdGJpZFBvc3RMb2FkaW5nOiB0cnVlLFxyXG5cdGJpZEdldExvYWRpbmc6IHRydWUsXHJcblx0YmlkRGVsZXRlTG9hZGluZzogdHJ1ZSxcclxuXHRkZWxldGVkTXNnOiBudWxsLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBhY3Rpb25UeXBlcy5DUkVBVEVfQklEX0VWRU5UX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4ueyBiaWRQb3N0TG9hZGluZzogZmFsc2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHRjYXNlIGFjdGlvblR5cGVzLiBBRE1JTl9GRVRDSF9CSURfRVZFTlRTX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4ueyBiaWRzOiBhY3Rpb24uYXVjdGlvbnMsIGJpZEdldExvYWRpbmc6IGZhbHNlIH0sXHJcblx0XHRcdH07XHJcblx0XHRcdFxyXG5cdFx0Ly8gY2FzZSBhY3Rpb25UeXBlcy5iaWRHT1JZX0RFTEVURV9TVUNDRVNTOlxyXG5cdFx0Ly8gXHRyZXR1cm4ge1xyXG5cdFx0Ly8gXHRcdC4uLnN0YXRlLFxyXG5cdFx0Ly8gXHRcdC4uLnsgZGVsZXRlZE1zZzogYWN0aW9uLmRlbGV0ZWRNc2csIGJpZERlbGV0ZUxvYWRpbmc6IGZhbHNlIH0sXHJcblx0XHQvLyBcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9BUEkvQXBpXCI7XHJcbmltcG9ydCB7XHJcblx0YWN0aW9uQWRtaW5GZXRjaEF1Y3Rpb25zU3VjY2VzcyxcclxuXHRhY3Rpb25BcHByb3ZlRXZlbnRTdWNjZXNzLFxyXG5cdGFjdGlvbkNhbmNlbEV2ZW50U3VjY2VzcyxcclxuXHRhY3Rpb25DcmVhdGVCaWRFdmVudFN1Y2Nlc3MsXHJcblx0YWN0aW9uVHlwZXMsXHJcbn0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0aGVhZGVyczoge1xyXG5cdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBBUEkuVE9LRU4sXHJcblx0fSxcclxufTtcclxuXHJcbi8vUE9TVCBDUkVBVCBCSUQgRVZFTlRcclxuY29uc3Qgc2FnYUNyZWF0ZUJpZEV2ZW50ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcblx0Y29uc29sZS5sb2coXCJzYWdhIGZ1bmNcIik7XHJcblx0Y29uc3QgdXJsID0gQVBJLk1FUkNIQU5UX0FETUlOX0JBU0VfVVJMICsgXCIvYmlkZGluZ1wiO1xyXG5cdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBBUEkuVE9LRU4sXHJcblx0XHR9LFxyXG5cdH07XHJcblx0Y29uc3QgZGF0YSA9IGF4aW9zLnBvc3QodXJsLCBldmVudCwgY29uZmlnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBzYWdhQWRtaW5GZXRjaEJpZEV2ZW50ID0gYXN5bmMgKHN0YXR1cykgPT4ge1xyXG5cdGxldCBkYXRhO1xyXG5cdGlmIChzdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XHJcblx0XHRjb25zdCB1cmwgPSBBUEkuQURNSU5fQkFTRV9VUkwgKyBcIi9iaWRkaW5nXCI7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coc3RhdHVzKTtcclxuXHRcdGRhdGEgPSBheGlvcy5nZXQodXJsLCBjb25maWcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHBlbmRpbmdCaWRzID0gcmVzcG9uc2UuZGF0YS5iaWRkaW5nX2V2ZW50LmZpbHRlcigoYmlkKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGJpZC5hcHByb3ZlZCA9PT0gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcGVuZGluZ0JpZHM7XHJcblx0XHR9KTtcclxuXHR9IGVsc2UgaWYgKHN0YXR1cyA9PT0gXCJhcHByb3ZlZFwiKSB7XHJcblx0XHRjb25zdCB1cmwgPSBBUEkuQURNSU5fQkFTRV9VUkwgKyBcIi9iaWRkaW5nXCI7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coc3RhdHVzKTtcclxuXHRcdGRhdGEgPSBheGlvcy5nZXQodXJsLCBjb25maWcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuYmlkZGluZ19ldmVudCk7XHJcblx0XHRcdGNvbnN0IGFwcHJvdmVkQmlkcyA9IHJlc3BvbnNlLmRhdGEuYmlkZGluZ19ldmVudC5maWx0ZXIoKGJpZCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBiaWQuYXBwcm92ZWQgPT09IHRydWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gYXBwcm92ZWRCaWRzO1xyXG5cdFx0fSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0IHVybCA9IEFQSS5BRE1JTl9CQVNFX1VSTCArIFwiL2JpZGRpbmcvc3RhdHVzXCI7XHJcblxyXG5cdFx0Y29uc3QgZXZlbnRTdGF0dXMgPSB7XHJcblx0XHRcdHN0YXR1cyxcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc29sZS5sb2coZXZlbnRTdGF0dXMpO1xyXG5cdFx0ZGF0YSA9IGF4aW9zLnBvc3QodXJsLCBldmVudFN0YXR1cywgY29uZmlnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEuYmlkZGluZ19ldmVudDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBzYWdhQXBwcm92ZUJpZEV2ZW50ID0gYXN5bmMgKGV2ZW50X2lkKSA9PiB7XHJcblx0Y29uc29sZS5sb2coXCJzYWdhIGZ1bmNcIik7XHJcblx0Y29uc3QgdXJsID0gQVBJLkFETUlOX0JBU0VfVVJMICsgXCIvYmlkZGluZy9hcHByb3ZlL1wiICsgZXZlbnRfaWQ7XHJcblx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIEFQSS5UT0tFTixcclxuXHRcdH0sXHJcblx0fTtcclxuXHRjb25zb2xlLmxvZyh1cmwpO1xyXG5cdGNvbnN0IGRhdGEgPSBheGlvcy5wb3N0KHVybCwgZXZlbnRfaWQsIGNvbmZpZykudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3Qgc2FnYUNhbmNlbEJpZEV2ZW50ID0gYXN5bmMgKGV2ZW50X2lkKSA9PiB7XHJcblx0XHJcblx0Y29uc3QgdXJsID0gQVBJLkFETUlOX0JBU0VfVVJMICsgXCIvYmlkZGluZy9jYW5jZWwvXCIgKyBldmVudF9pZDtcclxuXHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgQVBJLlRPS0VOLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cdGNvbnNvbGUubG9nKHVybCk7XHJcblx0Y29uc3QgZGF0YSA9IGF4aW9zLnBvc3QodXJsLCBldmVudF9pZCwgY29uZmlnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24qIGNyZWF0ZUJpZEV2ZW50KHBheWxvYWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgaXNFdmVudEFkZGVkID0geWllbGQgY2FsbChzYWdhQ3JlYXRlQmlkRXZlbnQsIHBheWxvYWQuZXZlbnQpO1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvbkNyZWF0ZUJpZEV2ZW50U3VjY2Vzcyhpc0V2ZW50QWRkZWQpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRtaW5GZXRjaEJpZEV2ZW50KHBheWxvYWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgZ2V0QWxsQmlkRXZlbnQgPSB5aWVsZCBjYWxsKHNhZ2FBZG1pbkZldGNoQmlkRXZlbnQsIHBheWxvYWQuc3RhdHVzKTtcclxuXHRcdGNvbnNvbGUubG9nKGdldEFsbEJpZEV2ZW50KTtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25BZG1pbkZldGNoQXVjdGlvbnNTdWNjZXNzKGdldEFsbEJpZEV2ZW50KSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGFwcHJvdmVCaWRFdmVudChwYXlsb2FkKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGlzQXBwcm92ZWQgPSB5aWVsZCBjYWxsKHNhZ2FBcHByb3ZlQmlkRXZlbnQsIHBheWxvYWQuZXZlbnRfaWQpO1xyXG5cdFx0Y29uc29sZS5sb2coaXNBcHByb3ZlZCk7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9uQXBwcm92ZUV2ZW50U3VjY2Vzcyhpc0FwcHJvdmVkKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGNhbmNlbEJpZEV2ZW50KHBheWxvYWQpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgaXNDYW5jZWxsZWQgPSB5aWVsZCBjYWxsKHNhZ2FDYW5jZWxCaWRFdmVudCwgcGF5bG9hZC5ldmVudF9pZCk7XHJcblx0XHRjb25zb2xlLmxvZyhpc0NhbmNlbGxlZCk7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9uQ2FuY2VsRXZlbnRTdWNjZXNzKGlzQ2FuY2VsbGVkKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5DUkVBVEVfQklEX0VWRU5ULCBjcmVhdGVCaWRFdmVudCldKTtcclxuXHR5aWVsZCBhbGwoW1xyXG5cdFx0dGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkFETUlOX0ZFVENIX0JJRF9FVkVOVFMsIGFkbWluRmV0Y2hCaWRFdmVudCksXHJcblx0XSk7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQVBQUk9WRV9CSURfRVZFTlQsIGFwcHJvdmVCaWRFdmVudCldKTtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5DQU5DRUxfQklEX0VWRU5ULCBhcHByb3ZlQmlkRXZlbnQpXSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG5cdENBVEVHT1JZX1BPU1Q6IFwiQ0FURUdPUllfUE9TVFwiLFxyXG5cdENBVEVHT1JZX1BPU1RfU1VDQ0VTUzogXCJDQVRFR09SWV9QT1NUX1NVQ0NFU1NcIixcclxuXHRDQVRFR09SWV9HRVQ6IFwiQ0FURUdPUllfR0VUXCIsXHJcblx0Q0FURUdPUllfR0VUX1NVQ0NFU1M6IFwiQ0FURUdPUllfR0VUX1NVQ0NFU1NcIixcclxuXHRDQVRFR09SWV9ERUxFVEU6IFwiQ0FURUdPUllfREVMRVRFXCIsXHJcblx0Q0FURUdPUllfREVMRVRFX1NVQ0NFU1M6IFwiQ0FURUdPUllfREVMRVRFX1NVQ0NFU1NcIixcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXRlZ29yeShjYXRlZ29yeSkge1xyXG5cdHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkNBVEVHT1JZX1BPU1QsIGNhdGVnb3J5IH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXRlZ29yeVN1Y2Nlc3MoKSB7XHJcblx0Y29uc29sZS5sb2coXCJDYXRlZ29yeSBhZGRlZCBzeWNjZXNmdWxseVwiKVxyXG5cdHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkNBVEVHT1JZX1BPU1RfU1VDQ0VTUyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDYXRlZ29yeSgpIHtcclxuXHRyZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5DQVRFR09SWV9HRVQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ2F0ZWdvcnlTdWNjZXNzKGNhdGVnb3JpZXMpIHtcclxuXHRcclxuXHRyZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5DQVRFR09SWV9HRVRfU1VDQ0VTUywgY2F0ZWdvcmllcyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQWN0aW9uQ2F0ZWdvcnkoaWQpIHtcclxuXHRjb25zb2xlLmxvZyhpZCk7XHJcblx0cmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuQ0FURUdPUllfREVMRVRFLCBpZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnlTdWNjZXNzKGRlbGV0ZWRNc2cpIHtcclxuXHRjb25zb2xlLmxvZyhkZWxldGVkTXNnKTtcclxuXHRyZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5DQVRFR09SWV9ERUxFVEVfU1VDQ0VTUywgZGVsZXRlZE1zZyB9O1xyXG59XHJcbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGNhdGVnb3J5OiBudWxsLFxyXG5cdGNhdGVQb3N0TG9hZGluZzogdHJ1ZSxcclxuXHRjYXRlR2V0TG9hZGluZzogdHJ1ZSxcclxuXHRjYXRlRGVsZXRlTG9hZGluZzogdHJ1ZSxcclxuXHRkZWxldGVkTXNnOiBudWxsLFxyXG59O1xyXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0ge1xyXG5cdGlzTG9nZ2VkSW46IGZhbHNlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBhY3Rpb25UeXBlcy5DQVRFR09SWV9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4ueyBjYXRlUG9zdExvYWRpbmc6IGZhbHNlIH0sXHJcblx0XHRcdH07XHJcblx0XHRcdFxyXG5cdFx0Y2FzZSBhY3Rpb25UeXBlcy5DQVRFR09SWV9HRVRfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi57IGNhdGVnb3J5OiBhY3Rpb24uY2F0ZWdvcmllcywgY2F0ZUdldExvYWRpbmc6IGZhbHNlIH0sXHJcblx0XHRcdH07XHJcblx0XHRcdFxyXG5cdFx0Y2FzZSBhY3Rpb25UeXBlcy5DQVRFR09SWV9ERUxFVEVfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi57IGRlbGV0ZWRNc2c6IGFjdGlvbi5kZWxldGVkTXNnLCBjYXRlRGVsZXRlTG9hZGluZzogZmFsc2UgfSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRhY3Rpb25UeXBlcyxcclxuXHRhZGRDYXRlZ29yeVN1Y2Nlc3MsXHJcblx0ZmV0Y2hDYXRlZ29yeVN1Y2Nlc3MsXHJcblx0ZGVsZXRlQ2F0ZWdvcnlTdWNjZXNzLFxyXG59IGZyb20gXCIuL2FjdGlvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9BUEkvQXBpXCI7XHJcblxyXG5cclxuY29uc3QgbW9kYWxTdWNjZXNzID0gKHR5cGUpID0+IHtcclxuXHRub3RpZmljYXRpb25bdHlwZV0oe1xyXG5cdFx0bWVzc2FnZTogXCJTdWNjZXNzZnVsXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJDYXRlZ29yeSBBZGRlZCBTdWNjZXNzZnVsbHlcIixcclxuXHR9KTtcclxufTtcclxuXHJcblxyXG5jb25zdCBtb2RhbERlbGV0ZVN1Y2Nlc3MgPSAodHlwZSkgPT4ge1xyXG5cdG5vdGlmaWNhdGlvblt0eXBlXSh7XHJcblx0XHRtZXNzYWdlOiBcIlN1Y2Nlc3NmdWxcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIkNhdGVnb3J5IERlbGV0ZWQgU3VjY2Vzc2Z1bGx5XCIsXHJcblx0fSk7XHJcbn07XHJcblxyXG4vLyBORVdcclxuLy8gQUREIENBVEVHT1JZXHJcbmNvbnN0IHNhZ2FBZGRDYXRlZ29yeSA9IGFzeW5jIChjYXRlKSA9PiB7XHJcblx0Y29uc3QgdXJsID0gQVBJLkFETUlOX0JBU0VfVVJMICsgXCIvY2F0ZWdvcnkvY3JlYXRlXCI7XHJcblx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBcIkJlYXJlclwiICsgQVBJLlRPS0VOLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3NcclxuXHRcdC5wb3N0KHVybCwgY2F0ZSwgY29uZmlnKVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVyciArIFwiYWRkaW5nIHRvIGNhdGVnb3J5XCIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuLy9GRVRDSCBDQVRFR09SSUVTXHJcbmNvbnN0IHNhZ2FGZXRjaENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgdXJsID0gQVBJLkFETUlOX0JBU0VfVVJMICsgXCIvY2F0ZWdvcnlcIjtcclxuXHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyXCIgKyBBUEkuVE9LRU4sXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xyXG5cdFx0LmdldCh1cmwsIGNvbmZpZylcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YS5jYXRlZ29yeTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIgKyBcImZldGNoaW5nIGNhdGVnb3JpZXNcIik7XHJcblx0XHR9KTtcclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG4vL0RFTEVURUNBVEVHT1JJRVNcclxuY29uc3Qgc2FnYURlbGV0ZUNhdGVnb3JpZXMgPSBhc3luYyAoaWQpID0+IHtcclxuXHRjb25zdCB1cmwgPSBBUEkuQURNSU5fQkFTRV9VUkwgKyBcIi9jYXRlZ29yeS9pZC9cIiArIGlkO1xyXG5cdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXJcIiArIEFQSS5UT0tFTixcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zXHJcblx0XHQuZGVsZXRlKHVybCwgY29uZmlnKVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLm1lc3NhZ2U7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyICsgXCJkZWxldGluZyBjYXRlZ29yaWVzXCIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHBvc3RDYXRlZ29yeShwYXlsb2FkKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGlzQ2F0ZUFkZGVkID0geWllbGQgY2FsbChzYWdhQWRkQ2F0ZWdvcnksIHBheWxvYWQuY2F0ZWdvcnkpO1xyXG5cdFx0eWllbGQgcHV0KGFkZENhdGVnb3J5U3VjY2Vzcyhpc0NhdGVBZGRlZCkpO1xyXG5cdFx0bW9kYWxTdWNjZXNzKFwic3VjY2Vzc1wiKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0Q2F0ZWdvcnkoKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGNhdGVnb3JpZXMgPSB5aWVsZCBjYWxsKHNhZ2FGZXRjaENhdGVnb3JpZXMpO1xyXG5cdFx0eWllbGQgcHV0KGZldGNoQ2F0ZWdvcnlTdWNjZXNzKGNhdGVnb3JpZXMpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogZGVsZXRlQ2F0ZWdvcnkocGF5bG9hZCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBpc0RlbGV0ZWQgPSB5aWVsZCBjYWxsKHNhZ2FEZWxldGVDYXRlZ29yaWVzLCBwYXlsb2FkLmlkKTtcclxuXHRcdHlpZWxkIHB1dChkZWxldGVDYXRlZ29yeVN1Y2Nlc3MoaXNEZWxldGVkKSk7XHJcblx0XHRtb2RhbERlbGV0ZVN1Y2Nlc3MoXCJzdWNjZXNzXCIpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5DQVRFR09SWV9QT1NULCBwb3N0Q2F0ZWdvcnkpXSk7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0FURUdPUllfR0VULCBnZXRDYXRlZ29yeSldKTtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5DQVRFR09SWV9ERUxFVEUsIGRlbGV0ZUNhdGVnb3J5KV0pO1xyXG5cdC8vIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkxPR09VVCwgbG9nT3V0U2FnYSldKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPXtcclxuICAgICAgR0VUX0FMTF9DVVNUT01FUlM6IFwiR0VUX0FMTF9DVVNUT01FUlNcIixcclxuICAgICAgR0VUX0FMTF9DVVNUT01FUlNfU1VDQ0VTUzogXCJHRVRfQUxMX0NVU1RPTUVSU19TVUNDRVNTXCIsXHJcbiAgICAgIEdFVF9TSU5HTEVfQ1VTVE9NRVJfU1VDQ0VTUzogXCJHRVRfU0lOR0xFX0NVU1RPTUVSX1NVQ0NFU1NcIixcclxuICAgICAgR0VUX1NJTkdMRV9DVVNUT01FUjogXCJHRVRfU0lOR0xFX0NVU1RPTUVSXCIsXHJcbiAgICAgIFVQR1JBREVfQ1VTVE9NRVI6IFwiVVBHUkFERV9DVVNUT01FUlwiLFxyXG4gICAgICBVUEdSQURFX0NVU1RPTUVSX1NVQ0NFU1M6IFwiVVBHUkFERV9DVVNUT01FUl9TVUNDRVNTXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25HZXRBbGxDdXN0b21lcnMgPSAoKT0+e1xyXG4gICAgICByZXR1cm4ge3R5cGU6IGFjdGlvblR5cGVzLkdFVF9BTExfQ1VTVE9NRVJTfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uU3VjY2Vzc0dldEFsbEN1c3RvbWVycyA9IChjdXN0b21lcnMpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1c3RvbWVycylcclxuICAgICAgcmV0dXJuIHt0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX0NVU1RPTUVSU19TVUNDRVNTLGN1c3RvbWVyc31cclxufVxyXG5leHBvcnQgY29uc3QgYWN0aW9uVXBncmFkZUN1c3RvbWVyID0gKGN1c3RvbWVyX2lkKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhjdXN0b21lcl9pZClcclxuICAgICAgcmV0dXJuIHt0eXBlOiBhY3Rpb25UeXBlcy5VUEdSQURFX0NVU1RPTUVSLCBjdXN0b21lcl9pZH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblVwZ3JhZGVDdXN0b21lclN1Y2Nlc3MgPSAoaXNVcGdyYWRlZCk9PntcclxuICAgICAgY29uc29sZS5sb2coaXNVcGdyYWRlZClcclxuICAgICAgcmV0dXJuIHt0eXBlOiBhY3Rpb25UeXBlcy5VUEdSQURFX0NVU1RPTUVSX1NVQ0NFU1MsaXNVcGdyYWRlZH1cclxufVxyXG5cclxuLy9HRVQgU0lOR0xFIENVU1RPTUVSXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25HZXRTaW5nbGVDdXN0b21lciA9IChjdXN0b21lcl9pZCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhjdXN0b21lcl9pZClcclxuXHRyZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfU0lOR0xFX0NVU1RPTUVSLCBjdXN0b21lcl9pZH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uU3VjY2Vzc0dldFNpbmdsZUN1c3RvbWVyID0gIChjdXN0b21lcl9kZXRhaWxzKSA9PiB7XHJcblx0Y29uc29sZS5sb2cgKGN1c3RvbWVyX2RldGFpbHMpO1xyXG5cdHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9TSU5HTEVfQ1VTVE9NRVJfU1VDQ0VTUywgY3VzdG9tZXJfZGV0YWlscyB9O1xyXG59OyIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGN1c3RvbWVyczogbnVsbCxcclxuXHRjdXN0b21lclBvc3RMb2FkaW5nOiB0cnVlLFxyXG5cdGN1c3RvbWVyR2V0TG9hZGluZzogdHJ1ZSxcclxuXHRjdXN0b21lckRlbGV0ZUxvYWRpbmc6IHRydWUsXHJcblx0ZGVsZXRlZE1zZzogbnVsbCxcclxuXHRjdXN0b21lckRldGFpbHM6bnVsbCxcclxuXHRzaW5nbGVDdXN0b21lckdldExvYWRpbmc6IHRydWUsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBpbml0U3RhdGUgPSB7XHJcblx0aXNMb2dnZWRJbjogZmFsc2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHQvLyBjYXNlIGFjdGlvblR5cGVzLmN1c3RvbWVyc19QT1NUX1NVQ0NFU1M6XHJcblx0XHQvLyBcdHJldHVybiB7XHJcblx0XHQvLyBcdFx0Li4uc3RhdGUsXHJcblx0XHQvLyBcdFx0Li4ueyBjdXN0b21lclBvc3RMb2FkaW5nOiBmYWxzZSB9LFxyXG5cdFx0Ly8gXHR9O1xyXG5cdFx0XHRcclxuXHRcdGNhc2UgYWN0aW9uVHlwZXMuR0VUX0FMTF9DVVNUT01FUlNfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi57IGN1c3RvbWVyczogYWN0aW9uLmN1c3RvbWVycywgY3VzdG9tZXJHZXRMb2FkaW5nOiBmYWxzZSB9LFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Y2FzZSBhY3Rpb25UeXBlcy5HRVRfU0lOR0xFX0NVU1RPTUVSX1NVQ0NFU1M6XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0Li4ueyBjdXN0b21lckRldGFpbHM6IGFjdGlvbi5jdXN0b21lcl9kZXRhaWxzLCBzaW5nbGVDdXN0b21lckdldExvYWRpbmc6IGZhbHNlIH0sXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHQvLyBjYXNlIGFjdGlvblR5cGVzLmN1c3RvbWVyc19ERUxFVEVfU1VDQ0VTUzpcclxuXHRcdC8vIFx0cmV0dXJuIHtcclxuXHRcdC8vIFx0XHQuLi5zdGF0ZSxcclxuXHRcdC8vIFx0XHQuLi57IGRlbGV0ZWRNc2c6IGFjdGlvbi5kZWxldGVkTXNnLCBjdXN0b21lckRlbGV0ZUxvYWRpbmc6IGZhbHNlIH0sXHJcblx0XHQvLyBcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiXHJcblxyXG5pbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRhY3Rpb25UeXBlcyxcclxuXHRhY3Rpb25HZXRBbGxDdXN0b21lcnMsXHJcblx0YWN0aW9uU3VjY2Vzc0dldEFsbEN1c3RvbWVycyxcclxuXHRhY3Rpb25TdWNjZXNzR2V0U2luZ2xlQ3VzdG9tZXIsXHJcbn0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcclxuXHJcbi8vIE5FV1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG5cdGhlYWRlcnM6IHtcclxuXHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyXCIgKyBBUEkuVE9LRU4sXHJcblx0fSxcclxufTtcclxuXHJcbi8vRkVUQ0ggQUxMIENVU1RPTUVSU1xyXG5jb25zdCBzYWdhRmV0Y2hDdXN0b21lcnMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgdXJsID0gQVBJLkFETUlOX0JBU0VfVVJMICsgXCIvY3VzdG9tZXJcIjtcclxuXHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zXHJcblx0XHQuZ2V0KHVybCwgY29uZmlnKVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLmN1c3RvbWVyO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVyciArIFwiZmV0Y2hpbmcgQ3VzdG9tZXJzXCIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuLy9GRVRDSCBTSU5HTEUgQ1VTVE9NRVJcclxuY29uc3Qgc2FnYUZldGNoU2luZ2xlQ3VzdG9tZXIgPSBhc3luYyAoY3VzdG9tZXJfaWQpID0+IHtcclxuXHRjb25zdCB1cmwgPSBBUEkuQURNSU5fQkFTRV9VUkwgKyBcIi9jdXN0b21lci9cIitjdXN0b21lcl9pZDtcclxuXHJcblx0Y29uc29sZS5sb2codXJsKVxyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xyXG5cdFx0LmdldCh1cmwsIGNvbmZpZylcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEuY3VzdG9tZXI7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyICsgXCJmZXRjaGluZyBzaW5nbGUgY3VzdG9tZXJcIik7XHJcblx0XHR9KTtcclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG4vL1VQR1JBREUgQ1VTVE9NRVJcclxuY29uc3Qgc2FnYVVwZ3JhZGVDdXN0b21lciA9IGFzeW5jIChjdXN0b21lcl9pZCk9PntcclxuXHRjb25zdCB1cmwgPSBBUEkuQkFTRV9VUkwgKyBcIi9jdXN0b21lci91cGdyYWRlXCJcclxuXHRjb25zdCBjdXN0b21lciA9IHtcclxuXHRcdGFjY291bnRfaWQ6IGN1c3RvbWVyX2lkLnRvU3RyaW5nKClcclxuXHQgIH1cclxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIGN1c3RvbWVyLCBjb25maWcpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG5cdH0pXHJcblxyXG5cdHJldHVybiBkYXRhXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uKiBwb3N0Q2F0ZWdvcnkocGF5bG9hZCkge1xyXG4vLyBcdHRyeSB7XHJcbi8vIFx0XHRjb25zdCBpc0NhdGVBZGRlZCA9IHlpZWxkIGNhbGwoc2FnYUFkZENhdGVnb3J5LCBwYXlsb2FkLmNhdGVnb3J5KTtcclxuLy8gXHRcdHlpZWxkIHB1dChhZGRDYXRlZ29yeVN1Y2Nlc3MoaXNDYXRlQWRkZWQpKTtcclxuLy8gXHR9IGNhdGNoIChlcnIpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGVycik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogZ2V0QWxsQ3VzdG9tZXJzKCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBDdXN0b21lcnMgPSB5aWVsZCBjYWxsKHNhZ2FGZXRjaEN1c3RvbWVycyk7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9uU3VjY2Vzc0dldEFsbEN1c3RvbWVycyhDdXN0b21lcnMpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0U2luZ2xlQ3VzdG9tZXIoe2N1c3RvbWVyX2lkfSkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBjdXN0b21lciA9IHlpZWxkIGNhbGwoc2FnYUZldGNoU2luZ2xlQ3VzdG9tZXIsIGN1c3RvbWVyX2lkKTtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25TdWNjZXNzR2V0U2luZ2xlQ3VzdG9tZXIgKGN1c3RvbWVyKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHVwZ3JhZGVDdXN0b21lcihwYXlsb2FkKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGlzVXBncmFkZWQgPSB5aWVsZCBjYWxsKHNhZ2FVcGdyYWRlQ3VzdG9tZXIsIHBheWxvYWQuY3VzdG9tZXJfaWQpO1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvblVwZ3JhZGVDdXN0b21lclN1Y2Nlc3MoaXNVcGdyYWRlZCkpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuLy8gZnVuY3Rpb24qIGRlbGV0ZUNhdGVnb3J5KHBheWxvYWQpIHtcclxuLy8gXHR0cnkge1xyXG4vLyBcdFx0Y29uc3QgaXNEZWxldGVkID0geWllbGQgY2FsbChzYWdhRGVsZXRlQ2F0ZWdvcmllcywgcGF5bG9hZC5pZCk7XHJcbi8vIFx0XHR5aWVsZCBwdXQoZGVsZXRlQ2F0ZWdvcnlTdWNjZXNzKGlzRGVsZXRlZCkpO1xyXG4vLyBcdH0gY2F0Y2ggKGVycikge1xyXG4vLyBcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfQUxMX0NVU1RPTUVSUywgZ2V0QWxsQ3VzdG9tZXJzKV0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9TSU5HTEVfQ1VTVE9NRVIsIGdldFNpbmdsZUN1c3RvbWVyKV0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlVQR1JBREVfQ1VTVE9NRVIsIHVwZ3JhZGVDdXN0b21lcildKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcblx0R0VUX0FMTF9NRVJDSEFOVFM6IFwiR0VUX0FMTF9NRVJDSEFOVFNcIixcclxuXHRHRVRfQUxMX01FUkNIQU5UU19TVUNDRVNTOiBcIkdFVF9BTExfTUVSQ0hBTlRTX1NVQ0NFU1NcIixcclxuICAgICAgR0VUX1NJTkdMRV9NRVJDSEFOVDogXCJHRVRfU0lOR0xFX01FUkNIQU5UXCIsXHJcblx0R0VUX1NJTkdMRV9NRVJDSEFOVF9TVUNDRVNTOiBcIkdFVF9TSU5HTEVfTUVSQ0hBTlRfU1VDQ0VTU1wiLFxyXG5cdFZFUklGWV9NRVJDSEFOVDogXCJWRVJJRllfTUVSQ0hBTlRcIixcclxuXHRWRVJJRllfTUVSQ0hBTlRfU1VDQ0VTUzogXCJWRVJJRllfTUVSQ0hBTlRfU1VDQ0VTU1wiLFxyXG5cdFVQR1JBREVfTUVSQ0hBTlQ6IFwiVVBHUkFERV9NRVJDSEFOVFwiLFxyXG5cdFVQR1JBREVfTUVSQ0hBTlRfU1VDQ0VTUzogXCJVUEdSQURFX01FUkNIQU5UX1NVQ0NFU1NcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25HZXRBbGxNZWNoYW50cyA9ICgpID0+IHtcclxuXHRyZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX01FUkNIQU5UUyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50cyA9IChtZXJjaGFudHMpID0+IHtcclxuXHRjb25zb2xlLmxvZyhtZXJjaGFudHMpO1xyXG5cdHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9BTExfTUVSQ0hBTlRTX1NVQ0NFU1MsIG1lcmNoYW50cyB9O1xyXG59O1xyXG5cclxuLy9HRVQgU0lOR0xFIE1FUkNIQU5UXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25HZXRTaW5nbGVNZWNoYW50ID0gKG1lcmNoYW50X2lkKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1lcmNoYW50X2lkKVxyXG5cdHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9TSU5HTEVfTUVSQ0hBTlQsIG1lcmNoYW50X2lkfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25TdWNjZXNzR2V0U2luZ2xlTWVjaGFudCA9IChtZXJjaGFudHNfZGV0YWlscykgPT4ge1xyXG5cdGNvbnNvbGUubG9nKG1lcmNoYW50c19kZXRhaWxzKTtcclxuXHRyZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfU0lOR0xFX01FUkNIQU5UX1NVQ0NFU1MsIG1lcmNoYW50c19kZXRhaWxzIH07XHJcbn07XHJcblxyXG4vL1ZFUklGWSBBQ0NPVU5UXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25WZXJpZnlNZWNoYW50ID0gKGlkKSA9PiB7XHJcblx0cmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuVkVSSUZZX01FUkNIQU5ULCBpZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblN1Y2Nlc3NWZXJpZnlNZWNoYW50ID0gKGlzVmVyaWZlZCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKGlzVmVyaWZlZCk7XHJcblx0cmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuVkVSSUZZX01FUkNIQU5UX1NVQ0NFU1MsIGlzVmVyaWZlZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblVwZ3JhZGVNZXJjaGFudCA9IChtZXJjaGFudF9pZCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKG1lcmNoYW50X2lkKTtcclxuXHRyZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5VUEdSQURFX01FUkNIQU5ULCBtZXJjaGFudF9pZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblVwZ3JhZGVNZXJjaGFudFN1Y2Nlc3MgPSAoaXNVcGdyYWRlZCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKGlzVXBncmFkZWQpO1xyXG5cdHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlVQR1JBREVfTUVSQ0hBTlRfU1VDQ0VTUywgaXNVcGdyYWRlZCB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gXCIuL2FjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtZXJjaGFudHM6IG51bGwsXHJcblx0bWVyY2hhbnRQb3N0TG9hZGluZzogdHJ1ZSxcclxuXHRtZXJjaGFudEdldExvYWRpbmc6IHRydWUsXHJcblx0c2luZ2xlTWVyY2hhbnRHZXRMb2FkaW5nOiB0cnVlLFxyXG5cdG1lcmNoYW50RGVsZXRlTG9hZGluZzogdHJ1ZSxcclxuXHRkZWxldGVkTXNnOiBudWxsLFxyXG5cdG1lcmNoYW50RGV0YWlsczpudWxsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBpbml0U3RhdGUgPSB7XHJcblx0aXNMb2dnZWRJbjogZmFsc2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHQvLyBjYXNlIGFjdGlvblR5cGVzLm1lcmNoYW50c19QT1NUX1NVQ0NFU1M6XHJcblx0XHQvLyBcdHJldHVybiB7XHJcblx0XHQvLyBcdFx0Li4uc3RhdGUsXHJcblx0XHQvLyBcdFx0Li4ueyBtZXJjaGFudFBvc3RMb2FkaW5nOiBmYWxzZSB9LFxyXG5cdFx0Ly8gXHR9O1xyXG5cdFx0XHRcclxuXHRcdGNhc2UgYWN0aW9uVHlwZXMuR0VUX0FMTF9NRVJDSEFOVFNfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi57IG1lcmNoYW50czogYWN0aW9uLm1lcmNoYW50cywgbWVyY2hhbnRHZXRMb2FkaW5nOiBmYWxzZSB9LFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Y2FzZSBhY3Rpb25UeXBlcy5HRVRfU0lOR0xFX01FUkNIQU5UX1NVQ0NFU1M6XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0Li4ueyBtZXJjaGFudERldGFpbHM6IGFjdGlvbi5tZXJjaGFudHNfZGV0YWlscywgc2luZ2xlTWVyY2hhbnRHZXRMb2FkaW5nOiBmYWxzZSB9LFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFxyXG5cdFx0Ly8gY2FzZSBhY3Rpb25UeXBlcy5tZXJjaGFudHNfREVMRVRFX1NVQ0NFU1M6XHJcblx0XHQvLyBcdHJldHVybiB7XHJcblx0XHQvLyBcdFx0Li4uc3RhdGUsXHJcblx0XHQvLyBcdFx0Li4ueyBkZWxldGVkTXNnOiBhY3Rpb24uZGVsZXRlZE1zZywgbWVyY2hhbnREZWxldGVMb2FkaW5nOiBmYWxzZSB9LFxyXG5cdFx0Ly8gXHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdGFjdGlvblR5cGVzLFxyXG5cdGFjdGlvbkdldEFsbE1lY2hhbnRzLFxyXG5cdGFjdGlvblN1Y2Nlc3NHZXRBbGxNZWNoYW50cyxcclxuXHRhY3Rpb25TdWNjZXNzVmVyaWZ5TWVjaGFudCxcclxuXHRhY3Rpb25TdWNjZXNzR2V0U2luZ2xlTWVjaGFudCxcclxufSBmcm9tIFwiLi9hY3Rpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vQVBJL0FwaVwiO1xyXG5cclxuLy8gTkVXXHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0aGVhZGVyczoge1xyXG5cdFx0QXV0aG9yaXphdGlvbjogXCJCZWFyZXJcIiArIEFQSS5UT0tFTixcclxuXHR9LFxyXG59O1xyXG5cclxuLy9GRVRDSCBBTEwgTUVSQ0hBTlRTXHJcbmNvbnN0IHNhZ2FGZXRjaE1lcmNoYW50cyA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCB1cmwgPSBBUEkuQURNSU5fQkFTRV9VUkwgKyBcIi9tZXJjaGFudFwiO1xyXG5cclxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3NcclxuXHRcdC5nZXQodXJsLCBjb25maWcpXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEubWVyY2hhbnQ7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyICsgXCJmZXRjaGluZyBtZXJjaGFudHNcIik7XHJcblx0XHR9KTtcclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG4vL0ZFVENIIFNJTkdMRSBNRVJDSEFOVFxyXG5jb25zdCBzYWdhRmV0Y2hTaW5nbGVNZXJjaGFudCA9IGFzeW5jIChtZXJjaGFudF9pZCkgPT4ge1xyXG5cdGNvbnN0IHVybCA9IEFQSS5BRE1JTl9CQVNFX1VSTCArIFwiL21lcmNoYW50L1wiK21lcmNoYW50X2lkO1xyXG5cclxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXhpb3NcclxuXHRcdC5nZXQodXJsLCBjb25maWcpXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLm1lcmNoYW50O1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVyciArIFwiZmV0Y2hpbmcgc2luZ2xlIG1lcmNoYW50XCIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuXHJcbi8vVkVSSUZZIEFMTCBBQ0NPVU5UXHJcbmNvbnN0IHNhZ2FWZXJpZnlNZXJjaGFudCA9IGFzeW5jIChpZCkgPT4ge1xyXG5cdGNvbnN0IHVybCA9IEFQSS5BRE1JTl9CQVNFX1VSTCArIFwiL2FjY291bnQvdmVyaWZ5XCI7XHJcblxyXG5cdFxyXG5cdGNvbnN0IHVzZXIgPSB7XHJcblx0XHRhY2NvdW50X2lkOiBpZC50b1N0cmluZygpXHJcblx0fVxyXG5cdFxyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xyXG5cdFx0LnBvc3QodXJsLCB1c2VyLCBjb25maWcpXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyICsgXCJWZXJpZnkgTWVyY2hhbnRcIik7XHJcblx0XHR9KTtcclxuXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG4vL1VQR1JBREUgIE1FUkNIQU5UXHJcbmNvbnN0IHNhZ2FVcGdyYWRlTWVyY2hhbnQgPSBhc3luYyAobWVyY2hhbnRfaWQpPT57XHJcblx0Y29uc3QgdXJsID0gQVBJLkFETUlOX0JBU0VfVVJMICsgXCIvYWRtaW4vdXBncmFkZVwiXHJcblx0Y29uc3QgbWVyY2hhbnQgPSB7XHJcblx0XHRhY2NvdW50X2lkOiBtZXJjaGFudF9pZC50b1N0cmluZygpXHJcblx0ICB9XHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBtZXJjaGFudCwgY29uZmlnKS50aGVuKChyZXNwb25zZSk9PntcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHR9KVxyXG5cclxuXHRyZXR1cm4gZGF0YVxyXG59XHJcbi8vIGZ1bmN0aW9uKiBwb3N0Q2F0ZWdvcnkocGF5bG9hZCkge1xyXG4vLyBcdHRyeSB7XHJcbi8vIFx0XHRjb25zdCBpc0NhdGVBZGRlZCA9IHlpZWxkIGNhbGwoc2FnYUFkZENhdGVnb3J5LCBwYXlsb2FkLmNhdGVnb3J5KTtcclxuLy8gXHRcdHlpZWxkIHB1dChhZGRDYXRlZ29yeVN1Y2Nlc3MoaXNDYXRlQWRkZWQpKTtcclxuLy8gXHR9IGNhdGNoIChlcnIpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGVycik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogZ2V0QWxsTWVjaGFudHMoKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IG1lcmNoYW50cyA9IHlpZWxkIGNhbGwoc2FnYUZldGNoTWVyY2hhbnRzKTtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25TdWNjZXNzR2V0QWxsTWVjaGFudHMobWVyY2hhbnRzKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldFNpbmdsZU1lY2hhbnQoe21lcmNoYW50X2lkfSkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBtZXJjaGFudCA9IHlpZWxkIGNhbGwoc2FnYUZldGNoU2luZ2xlTWVyY2hhbnQsIG1lcmNoYW50X2lkKTtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25TdWNjZXNzR2V0U2luZ2xlTWVjaGFudCAobWVyY2hhbnQpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogdmVyaWZ5TWVyY2hhbnQocGF5bG9hZCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBtZXJjaGFudHMgPSB5aWVsZCBjYWxsKHNhZ2FWZXJpZnlNZXJjaGFudCwgcGF5bG9hZC5pZCk7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9uU3VjY2Vzc1ZlcmlmeU1lY2hhbnQobWVyY2hhbnRzKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHVwZ3JhZGVNZXJjaGFudChwYXlsb2FkKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGlzVXBncmFkZWQgPSB5aWVsZCBjYWxsKHNhZ2FVcGdyYWRlTWVyY2hhbnQsIHBheWxvYWQubWVyY2hhbnRfaWQpO1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvblVwZ3JhZGVNZXJjaGFudFN1Y2Nlc3MoaXNVcGdyYWRlZCkpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uKiBkZWxldGVDYXRlZ29yeShwYXlsb2FkKSB7XHJcbi8vIFx0dHJ5IHtcclxuLy8gXHRcdGNvbnN0IGlzRGVsZXRlZCA9IHlpZWxkIGNhbGwoc2FnYURlbGV0ZUNhdGVnb3JpZXMsIHBheWxvYWQuaWQpO1xyXG4vLyBcdFx0eWllbGQgcHV0KGRlbGV0ZUNhdGVnb3J5U3VjY2Vzcyhpc0RlbGV0ZWQpKTtcclxuLy8gXHR9IGNhdGNoIChlcnIpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKGVycik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0FMTF9NRVJDSEFOVFMsIGdldEFsbE1lY2hhbnRzKV0pO1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9TSU5HTEVfTUVSQ0hBTlQsIGdldFNpbmdsZU1lY2hhbnQpXSk7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuVkVSSUZZX01FUkNIQU5ULCB2ZXJpZnlNZXJjaGFudCldKTtcclxuXHR5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5VUEdSQURFX01FUkNIQU5ULCB1cGdyYWRlTWVyY2hhbnQpXSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG5cdFBST0RVQ1RfUE9TVDogXCJQUk9EVUNUX1BPU1RcIixcclxuXHRQUk9EVUNUX1BPU1RfU1VDQ0VTUzogXCJQUk9EVUNUX1BPU1RfU1VDQ0VTU1wiLFxyXG5cdE1FUkNIQU5UX1BST0RVQ1RfR0VUOiBcIk1FUkNIQU5UX1BST0RVQ1RfR0VUXCIsXHJcblx0TUVSQ0hBTlRfUFJPRFVDVF9HRVRfU1VDQ0VTUzogXCJNRVJDSEFOVF9QUk9EVUNUX0dFVF9TVUNDRVNTXCIsXHJcblx0UFJPRFVDVF9ERUxFVEU6IFwiUFJPRFVDVF9ERUxFVEVcIixcclxuXHRQUk9EVUNUX0RFTEVURV9TVUNDRVNTOiBcIlBST0RVQ1RfREVMRVRFX1NVQ0NFU1NcIixcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9kdWN0KHByb2R1Y3QpIHtcclxuXHRjb25zb2xlLmxvZyhcImFkZCBwcm9kdWN0IGFjdGlvblwiKTtcclxuXHQvLyBjb25zb2xlLmxvZyhwcm9kdWN0KTtcclxuXHRyZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5QUk9EVUNUX1BPU1QsIHByb2R1Y3QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2R1Y3RTdWNjZXNzKHByb2R1Y3RNc2cpIHtcclxuXHRjb25zdCBpc0FkZGVkTXNnID0gXCIgUHJvZHVjdCBhZGRlZCBzdWNjZXNzZnVsbHlcIjtcclxuXHRjb25zb2xlLmxvZyhpc0FkZGVkTXNnKVxyXG5cclxuXHRyZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5QUk9EVUNUX1BPU1RfU1VDQ0VTUywgaXNBZGRlZE1zZyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVyY2hhbnRQcm9kdWN0KGlkKSB7XHJcblx0Y29uc29sZS5sb2coXCJnZXQgc3BlY2lmaWMgbWVyY2hhbnQgcHJvZHVjdCBhY3Rpb25cIik7XHJcblxyXG5cdHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLk1FUkNIQU5UX1BST0RVQ1RfR0VULCBpZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVyY2hhbnRQcm9kdWN0U3VjY2VzcyhtZXJjaGFudFByb2R1Y3RzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1lcmNoYW50UHJvZHVjdHMpXHJcblx0cmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTUVSQ0hBTlRfUFJPRFVDVF9HRVRfU1VDQ0VTUywgbWVyY2hhbnRQcm9kdWN0cyB9O1xyXG59XHJcbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICBwcm9kdWN0OiBudWxsLFxyXG5cdHByb2R1Y3RQb3N0TG9hZGluZzogdHJ1ZSxcclxuXHRwcm9kdWN0R2V0TG9hZGluZzogdHJ1ZSxcclxuXHRwcm9kdWN0RGVsZXRlTG9hZGluZzogdHJ1ZSxcclxuXHRkZWxldGVkTXNnOiBudWxsLFxyXG59XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGFjdGlvblR5cGVzLlBST0RVQ1RfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdC4uLnsgcHJvZHVjdFBvc3RMb2FkaW5nOiBmYWxzZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRcclxuXHRcdGNhc2UgYWN0aW9uVHlwZXMuTUVSQ0hBTlRfUFJPRFVDVF9HRVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uLnByb2R1Y3QrIFwiIHJlZHVjZXJcIilcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi57IHByb2R1Y3Q6IGFjdGlvbi5tZXJjaGFudFByb2R1Y3RzLCBwcm9kdWN0R2V0TG9hZGluZzogZmFsc2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHRjYXNlIGFjdGlvblR5cGVzLlBST0RVQ1RfREVMRVRFX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4ueyBkZWxldGVkTXNnOiBhY3Rpb24uZGVsZXRlZE1zZywgcHJvZHVjdERlbGV0ZUxvYWRpbmc6IGZhbHNlIH0sXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRhY3Rpb25UeXBlcyxcclxuXHRhZGRQcm9kdWN0LFxyXG5cdGFkZFByb2R1Y3RTdWNjZXNzLFxyXG5cdGZldGNoUFJPRFVDVFN1Y2Nlc3MsXHJcblx0ZGVsZXRlUFJPRFVDVFN1Y2Nlc3MsXHJcbiAgICAgIGdldE1lcmNoYW50UHJvZHVjdFN1Y2Nlc3MsXHJcbn0gZnJvbSBcIi4vYWN0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL0FQSS9BcGlcIjtcclxuXHJcblxyXG5jb25zdCBtb2RhbFN1Y2Nlc3MgPSAodHlwZSkgPT4ge1xyXG5cdG5vdGlmaWNhdGlvblt0eXBlXSh7XHJcblx0XHRtZXNzYWdlOiBcIlN1Y2Nlc3NmdWxcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIlByb2R1Y3QgQWRkZWQgc3VjY2Vzc2Z1bCFcIixcclxuXHR9KTtcclxufTtcclxuXHJcbi8vIFBPU1QgUFJPRFVDVFxyXG5jb25zdCBzYWdhQWRkUHJvZHVjdCA9IGFzeW5jIChwcm9kdWN0KSA9PiB7XHJcblx0Y29uc3QgdXJsID0gQVBJLk1FUkNIQU5UX0FETUlOX0JBU0VfVVJMICsgXCIvcHJvZHVjdC9hZGRcIjtcclxuXHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IFwiQmVhcmVyXCIgKyBBUEkuVE9LRU4sXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xyXG5cdFx0LnBvc3QodXJsLCBwcm9kdWN0LCBjb25maWcpXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJzYWdhIGFkZCBwcm9kdWN0XCIgKyByZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLnByb2R1Y3QubmFtZTtcclxuXHRcdH0pXHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vR0VUIFNQRUNJRklDIE1FUkNIQU5UJ1MgUFJPRFVDVFxyXG5jb25zdCBzYWdhR2V0TWVyY2hhbnRQcm9kdWN0cyA9IGFzeW5jIChpZCkgPT4ge1xyXG5cdGNvbnN0IHVybCA9IEFQSS5NRVJDSEFOVF9BRE1JTl9CQVNFX1VSTCArIFwiL3Byb2R1Y3QvYWxsL1wiICsgaWQ7XHJcblx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBcIkJlYXJlclwiICsgQVBJLlRPS0VOLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkYXRhID0gIGF3YWl0IGF4aW9zLmdldCh1cmwsIGNvbmZpZykudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLnByb2R1Y3RzXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGRhdGFcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBwb3N0UHJvZHVjdChwYXlsb2FkKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGlzUHJvZHVjdEFkZGVkID0geWllbGQgY2FsbChzYWdhQWRkUHJvZHVjdCwgcGF5bG9hZC5wcm9kdWN0KTtcclxuXHRcdHlpZWxkIHB1dChhZGRQcm9kdWN0U3VjY2Vzcyhpc1Byb2R1Y3RBZGRlZCkpO1xyXG5cdFx0bW9kYWxTdWNjZXNzKFwic3VjY2Vzc1wiKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVyciArIFwiYWRkaW5nIHByb2R1Y3Qgc2FnYVwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRNZXJjaGFudFByb2R1Y3QocGF5bG9hZCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBtZXJjaGFudFByb2R1Y3RzID0geWllbGQgY2FsbChzYWdhR2V0TWVyY2hhbnRQcm9kdWN0cywgcGF5bG9hZC5pZCk7XHJcblx0XHR5aWVsZCBwdXQoZ2V0TWVyY2hhbnRQcm9kdWN0U3VjY2VzcyhtZXJjaGFudFByb2R1Y3RzKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciArIFwiZ2V0dGluZyBtZXJjaGFudCBwcm9kdWN0IHNhZ2FcIik7XHJcblx0XHQvLyBhbGVydChlcnIgKyBcImdldHRpbmcgbWVyY2hhbnQgcHJvZHVjdCBzYWdhXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlBST0RVQ1RfUE9TVCwgcG9zdFByb2R1Y3QpXSk7XHJcblx0eWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuTUVSQ0hBTlRfUFJPRFVDVF9HRVQsIGdldE1lcmNoYW50UHJvZHVjdCldKTtcclxuXHQvLyB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5QUk9EVUNUX0RFTEVURSwgZGVsZXRlUFJPRFVDVCldKTtcclxuXHQvLyB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dPVVQsIGxvZ091dFNhZ2EpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGgvcmVkdWNlcic7XG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwL3JlZHVjZXInO1xuaW1wb3J0IGNhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnkvcmVkdWNlcic7XG5pbXBvcnQgcHJvZHVjdCBmcm9tICcuL3Byb2R1Y3QvcmVkdWNlcic7XG5pbXBvcnQgYmlkIGZyb20gJy4vYmlkL3JlZHVjZXInO1xuaW1wb3J0IG1lcmNoYW50IGZyb20gJy4vbWVyY2hhbnQvcmVkdWNlcic7XG5pbXBvcnQgY3VzdG9tZXIgZnJvbSAnLi9jdXN0b21lci9yZWR1Y2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICBhdXRoLFxuICAgIGFwcCxcbiAgICBjYXRlZ29yeSxcbiAgICBwcm9kdWN0LFxuICAgIGJpZCxcbiAgICBtZXJjaGFudCxcbiAgICBjdXN0b21lclxufSk7XG4iLCJpbXBvcnQgeyBhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgQXBwU2FnYSBmcm9tIFwiLi9hcHAvc2FnYVwiO1xuaW1wb3J0IEF1dGhTYWdhIGZyb20gXCIuL2F1dGgvc2FnYVwiO1xuaW1wb3J0IENhdGVnb3J5U2FnYSBmcm9tIFwiLi9jYXRlZ29yeS9zYWdhXCI7XG5pbXBvcnQgUHJvZHVjdFNhZ2EgZnJvbSBcIi4vcHJvZHVjdC9zYWdhXCI7XG5pbXBvcnQgQmlkU2FnYSBmcm9tIFwiLi9iaWQvc2FnYVwiO1xuaW1wb3J0IE1lcmNoYW50U2FnYSBmcm9tIFwiLi9tZXJjaGFudC9zYWdhXCI7XG5pbXBvcnQgQ3VzdG9tZXJTYWdhIGZyb20gXCIuL2N1c3RvbWVyL3NhZ2FcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuXHR5aWVsZCBhbGwoW1xuXHRcdEFwcFNhZ2EoKSxcblx0XHRBdXRoU2FnYSgpLFxuXHRcdENhdGVnb3J5U2FnYSgpLFxuXHRcdFByb2R1Y3RTYWdhKCksXG5cdFx0QmlkU2FnYSgpLFxuXHRcdE1lcmNoYW50U2FnYSgpLFxuXHRcdEN1c3RvbWVyU2FnYSgpLFxuXHRdKTtcbn1cbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3RSZWR1Y2VyJztcbmltcG9ydCByb290U2FnYSBmcm9tICcuL3Jvb3RTYWdhJztcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKSk7XG5cbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG5cbiAgICByZXR1cm4gc3RvcmU7XG59O1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiBmYWxzZSB9KTtcblxuLypcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XG4gICAga2V5OiAnbWFydGZ1cnknLFxuICAgIHN0b3JhZ2UsXG4gICAgd2hpdGVsaXN0OiBbJ2NhcnQnLCAnY29tcGFyZScsICdhdXRoJywgJ3dpc2hsaXN0J10sXG59O1xuXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcm9vdFJlZHVjZXIpO1xuXG5mdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgICAgcGVyc2lzdGVkUmVkdWNlcixcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKVxuICAgICk7XG5cbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG4gICAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcbiovXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==