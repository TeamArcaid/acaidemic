/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n/* harmony import */ var _core_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n/* harmony import */ var _core_Garden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/Garden */ \"./client/core/Garden.js\");\n/* harmony import */ var _core_Garden__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_core_Garden__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n/*import Users from './user/Users'\r\nimport Signup from './user/Signup'\r\nimport Signin from './auth/Signin' \r\nimport EditProfile from './user/EditProfile'\r\nimport Profile from './user/Profile'\r\nimport PrivateRoute from './auth/PrivateRoute'\r\nimport Menu from './core/Menu' */\n\nconst MainRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\",\n    component: _core_Home__WEBPACK_IMPORTED_MODULE_2__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/menu\",\n    component: _core_Menu__WEBPACK_IMPORTED_MODULE_3__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/garden\",\n    component: (_core_Garden__WEBPACK_IMPORTED_MODULE_4___default())\n  })));\n};\n\nconst _default = MainRouter;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\client\\\\MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\client\\\\MainRouter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./client/MainRouter.js?");

/***/ }),

/***/ "./client/core/Garden.js":
/*!*******************************!*\
  !*** ./client/core/Garden.js ***!
  \*******************************/
/***/ (() => {

eval("var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n//# sourceURL=webpack://acaidemic/./client/core/Garden.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_images_monstera2_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../assets/images/monstera2.svg */ \"./client/assets/images/monstera2.svg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: \"auto\",\n    marginTop: theme.spacing(5)\n  },\n  title: {\n    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  },\n  media: {\n    minHeight: 400\n  }\n}));\nfunction Home() {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default()), {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Home Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default()), {\n    className: classes.media,\n    image: _assets_images_monstera2_svg__WEBPACK_IMPORTED_MODULE_8__.default,\n    title: \"Monstera\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n    variant: \"body2\",\n    component: \"p\"\n  }, \"Arcaid Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    variant: \"contained\",\n    component: react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link,\n    to: \"/menu\"\n  }, \"Next\")));\n}\n\n__signature__(Home, \"useStyles{classes}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\client\\\\core\\\\Home.js\");\n  reactHotLoader.register(Home, \"Home\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\client\\\\core\\\\Home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: \"auto\",\n    marginTop: theme.spacing(5)\n  },\n  title: {\n    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  },\n  name: {\n    margin: \"auto\"\n  }\n}));\nfunction menu() {\n  const classes = useStyles();\n  const [feeling, setFeeling] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(50);\n\n  const handleFeelingChange = (event, newValue) => {\n    setFeeling(newValue);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default()), {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    variant: \"h3\",\n    className: classes.title\n  }, \"Sage\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    id: \"client-name\"\n  }, \"What is your name?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: classes.name,\n    autoComplete: \"off\",\n    name: \"name\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    id: \"outlined-basic\",\n    label: \"Enter Name\",\n    variant: \"outlined\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    id: \"client-feeling\"\n  }, \"How are you feeling?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Slider, {\n    value: feeling,\n    onChange: handleFeelingChange,\n    \"aria-labelledby\": \"client-feeling\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n    id: \"client-mind\"\n  }, \"What is on your mind?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    id: \"client-mind-text\",\n    \"aria-labelledby\": \"client-feeling\",\n    multiline: true,\n    rows: 4,\n    variant: \"outlined\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    variant: \"contained\",\n    component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link,\n    to: \"/\"\n  }, \"Back\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    variant: \"contained\",\n    component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link,\n    to: \"/garden\"\n  }, \"Next\")));\n}\n\n__signature__(menu, \"useStyles{classes}\\nuseState{[feeling, setFeeling](50)}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\client\\\\core\\\\Menu.js\");\n  reactHotLoader.register(menu, \"menu\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\client\\\\core\\\\Menu.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./client/core/Menu.js?");

/***/ }),

/***/ "./client/theme.js":
/*!*************************!*\
  !*** ./client/theme.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({\n  typography: {\n    useNextVariants: true\n  },\n  palette: {\n    primary: {\n      light: '#5c67a3',\n      main: '#3f4771',\n      dark: '#2e355b',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#ff79b0',\n      main: '#ff4081',\n      dark: '#c60055',\n      contrastText: '#000'\n    },\n    openTitle: '#3f4771',\n    protectedTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.pink[400],\n    type: 'light'\n  }\n});\nconst _default = theme;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(theme, \"theme\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\client\\\\theme.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\client\\\\theme.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./client/theme.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 3000\n};\nconst _default = config;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./config/config.js?");

/***/ }),

/***/ "./server/controllers/plantcontroller.js":
/*!***********************************************!*\
  !*** ./server/controllers/plantcontroller.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ \"./server/models/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst Op = _models__WEBPACK_IMPORTED_MODULE_1__.default.Sequelize.Op;\n\nconst createOne = (req, res) => {\n  const plant = {\n    species: req.body.species,\n    stage: req.body.stage,\n    problem: req.body.problem,\n    startMood: req.body.startMood,\n    endMood: req.body.endMood,\n    userId: \"1\"\n  };\n  _models__WEBPACK_IMPORTED_MODULE_1__.default.plant.create(plant).then(data => {\n    res.send(data);\n  }).catch(err => {\n    res.status(500).send({\n      message: err.message || 'Some error'\n    });\n  });\n};\n\nconst readOne = (req, res) => {\n  const id = req.params.id;\n  _models__WEBPACK_IMPORTED_MODULE_1__.default.plant.findByPk(id).then(data => {\n    res.send(data);\n  }).catch(err => {\n    res.status(500).send({\n      message: 'Error retrieving Plant with id=' + id\n    });\n  });\n};\n\nconst readAll = (req, res) => {\n  _models__WEBPACK_IMPORTED_MODULE_1__.default.plant.findAll().then(plants => {\n    res.json(plants);\n  });\n};\n\nconst updateOne = (req, res) => {\n  const id = req.params.id;\n  _models__WEBPACK_IMPORTED_MODULE_1__.default.plant.update(req.body, {\n    where: {\n      id: id\n    }\n  }).then(num => {\n    if (num == 1) {\n      res.send({\n        message: 'Plant updated'\n      });\n    } else {\n      res.send({\n        message: `Cannot update Plant with id=${id}`\n      });\n    }\n  }).catch(err => {\n    res.status(500).send({\n      message: 'Error updating Plant with id=' + id\n    });\n  });\n};\n\nconst deleteOne = (req, res) => {\n  const id = req.params.id;\n  _models__WEBPACK_IMPORTED_MODULE_1__.default.plant.destroy({\n    where: {\n      id: id\n    }\n  }).then(num => {\n    if (num == 1) {\n      res.send({\n        message: 'Plant successfully deleted'\n      });\n    } else {\n      res.send({\n        message: `Cannot delete Plant with id=${id}.`\n      });\n    }\n  }).catch(err => {\n    res.status(500).send({\n      message: 'Could not delete Plant with id=' + id\n    });\n  });\n};\n\nconst deleteAll = (req, res) => {\n  _models__WEBPACK_IMPORTED_MODULE_1__.default.plant.destroy({\n    where: {},\n    truncate: false\n  }).then(nums => {\n    res.send({\n      message: `${nums} Plants deleted`\n    });\n  }).catch(err => {\n    res.status(500).send({\n      message: err.message || 'Some error'\n    });\n  });\n};\n\nconst _default = {\n  createOne,\n  readOne,\n  readAll,\n  updateOne,\n  deleteOne,\n  deleteAll\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Op, \"Op\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\plantcontroller.js\");\n  reactHotLoader.register(createOne, \"createOne\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\plantcontroller.js\");\n  reactHotLoader.register(readOne, \"readOne\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\plantcontroller.js\");\n  reactHotLoader.register(readAll, \"readAll\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\plantcontroller.js\");\n  reactHotLoader.register(updateOne, \"updateOne\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\plantcontroller.js\");\n  reactHotLoader.register(deleteOne, \"deleteOne\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\plantcontroller.js\");\n  reactHotLoader.register(deleteAll, \"deleteAll\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\plantcontroller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\plantcontroller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/controllers/plantcontroller.js?");

/***/ }),

/***/ "./server/controllers/questioncontroller.js":
/*!**************************************************!*\
  !*** ./server/controllers/questioncontroller.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./server/models/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst Op = _models__WEBPACK_IMPORTED_MODULE_0__.default.Sequelize.Op;\n\nconst createAll = (req, res) => {\n  const questions = [{\n    questionText: \"How is this affecting me\"\n  }, {\n    questionText: \"What is within my control, and what is not?\"\n  }, {\n    questionText: \"What will bring me comfort right now?\"\n  }, {\n    questionText: \"If there is a person/s tied to the stress, how should I deal with that situation?\"\n  }, {\n    questionText: \"What will I do to succeed?\"\n  }];\n  _models__WEBPACK_IMPORTED_MODULE_0__.default.question.bulkCreate(questions).then(() => {\n    return _models__WEBPACK_IMPORTED_MODULE_0__.default.question.findAll();\n  }).then(questions => {\n    console.log(questions);\n    res.send(questions);\n  }).catch(err => {\n    res.status(500).send({\n      message: err.message || 'Some error'\n    });\n  });\n};\n\nconst createPlantQuestion = (req, res) => {\n  const plant_question = {\n    question_id: req.body.question_id,\n    plant_id: req.body.plant_id\n  };\n  _models__WEBPACK_IMPORTED_MODULE_0__.default.plant_question.create(plant_question).then(data => {\n    res.send(data);\n  }).catch(err => {\n    res.status(500).send({\n      message: err.message || 'Some error'\n    });\n  });\n};\n\nconst _default = {\n  createAll,\n  createPlantQuestion\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Op, \"Op\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\questioncontroller.js\");\n  reactHotLoader.register(createAll, \"createAll\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\questioncontroller.js\");\n  reactHotLoader.register(createPlantQuestion, \"createPlantQuestion\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\questioncontroller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\questioncontroller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/controllers/questioncontroller.js?");

/***/ }),

/***/ "./server/controllers/usercontroller.js":
/*!**********************************************!*\
  !*** ./server/controllers/usercontroller.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./server/models/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst Op = _models__WEBPACK_IMPORTED_MODULE_0__.default.Sequelize.Op;\n\nconst create = (req, res) => {\n  const user = {\n    firstName: req.body.firstName,\n    lastName: req.body.lastName,\n    email: req.body.email\n  };\n  _models__WEBPACK_IMPORTED_MODULE_0__.default.user.create(user).then(data => {\n    res.send(data);\n  }).catch(err => {\n    res.status(500).send({\n      message: err.message || 'Some error'\n    });\n  });\n};\n\nconst _default = {\n  create\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Op, \"Op\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\usercontroller.js\");\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\usercontroller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\controllers\\\\usercontroller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/controllers/usercontroller.js?");

/***/ }),

/***/ "./server/db.config.js":
/*!*****************************!*\
  !*** ./server/db.config.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst dbConfig = {\n  HOST: \"localhost\",\n  USER: \"postgres\",\n  PASSWORD: \"acaidemic\",\n  DB: \"arcaid\",\n  dialect: \"postgres\"\n};\nconst _default = dbConfig;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(dbConfig, \"dbConfig\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\db.config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\db.config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/db.config.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst compile = app => {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__.default.env === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()((_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: (_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_plant_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/plant.routes */ \"./server/routes/plant.routes.js\");\n/* harmony import */ var _routes_question_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/question.routes */ \"./server/routes/question.routes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _client_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../client/theme */ \"./client/theme.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./models */ \"./server/models/index.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n //import cookieParser from' cookie-parser'\n\n\n\n\n\n\n\n\n/* modules for server side rendering */\n\n\n\n\n\n\n //end\n\n\n_models__WEBPACK_IMPORTED_MODULE_16__.default.sequelize.sync();\n/* comment out before building for production */\n\n\n/* ensures Express server properly handles requests to static files \r\nsuch as CSS files, images or bundled client-side JS */\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n/* comment out before building for production */\n\n_devBundle__WEBPACK_IMPORTED_MODULE_17__.default.compile(app);\n/* parse body params and attach them to req.body*/\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({\n  extended: true\n})); //app.use(cookieParser())\n\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\n/* secure apps by setting various HTTP headers */\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\n/* enable CORS - Cross Origin Resource Sharing*/\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_1___default().join(CURRENT_WORKING_DIR, 'dist')));\n/* mount routes */\n\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__.default);\napp.use('/', _routes_plant_routes__WEBPACK_IMPORTED_MODULE_8__.default);\napp.use('/', _routes_question_routes__WEBPACK_IMPORTED_MODULE_9__.default);\napp.get('*', (req, res) => {\n  const sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_14__.ServerStyleSheets();\n  const context = {};\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_11___default().renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_14__.ThemeProvider, {\n    theme: _client_theme__WEBPACK_IMPORTED_MODULE_15__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_12__.default, null)))));\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n\n  const css = sheets.toString();\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_6__.default)({\n    markup: markup,\n    css: css\n  }));\n});\n/* catch unauthorized errors */\n\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\nconst _default = app;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\express.js\");\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\express.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/express.js?");

/***/ }),

/***/ "./server/models/index.js":
/*!********************************!*\
  !*** ./server/models/index.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db.config */ \"./server/db.config.js\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./server/models/user.js\");\n/* harmony import */ var _plant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plant */ \"./server/models/plant.js\");\n/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question */ \"./server/models/question.js\");\n/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./response */ \"./server/models/response.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst sequelize = new (sequelize__WEBPACK_IMPORTED_MODULE_1___default())(_db_config__WEBPACK_IMPORTED_MODULE_0__.default.DB, _db_config__WEBPACK_IMPORTED_MODULE_0__.default.USER, _db_config__WEBPACK_IMPORTED_MODULE_0__.default.PASSWORD, {\n  host: _db_config__WEBPACK_IMPORTED_MODULE_0__.default.HOST,\n  dialect: _db_config__WEBPACK_IMPORTED_MODULE_0__.default.dialect\n});\nconst db = {};\ndb.Sequelize = (sequelize__WEBPACK_IMPORTED_MODULE_1___default());\ndb.sequelize = sequelize;\n\n\n\n\ndb.user = (0,_user__WEBPACK_IMPORTED_MODULE_2__.default)(sequelize, (sequelize__WEBPACK_IMPORTED_MODULE_1___default()));\ndb.plant = (0,_plant__WEBPACK_IMPORTED_MODULE_3__.default)(sequelize, (sequelize__WEBPACK_IMPORTED_MODULE_1___default()));\ndb.question = (0,_question__WEBPACK_IMPORTED_MODULE_4__.default)(sequelize, (sequelize__WEBPACK_IMPORTED_MODULE_1___default()));\ndb.response = (0,_response__WEBPACK_IMPORTED_MODULE_5__.default)(sequelize, (sequelize__WEBPACK_IMPORTED_MODULE_1___default()));\ndb.plant.belongsTo(db.user);\ndb.user.hasMany(db.plant);\ndb.plant.belongsToMany(db.question, {\n  through: \"plant_question\",\n  as: \"questions\",\n  foreignKey: \"plant_id\"\n});\ndb.question.belongsToMany(db.plant, {\n  through: \"plant_question\",\n  as: \"questions\",\n  foreignKey: \"question_id\"\n});\ndb.response.belongsTo(db.question, {\n  foreignKey: 'question_id',\n  as: \"question_responses\"\n});\ndb.response.belongsTo(db.plant, {\n  foreignKey: 'plant_id',\n  as: \"plant_responses\"\n});\ndb.response.belongsTo(db.user, {\n  foreignKey: \"user_id\",\n  as: \"user_responses\"\n});\nconst _default = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(sequelize, \"sequelize\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\models\\\\index.js\");\n  reactHotLoader.register(db, \"db\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\models\\\\index.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\models\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/models/index.js?");

/***/ }),

/***/ "./server/models/plant.js":
/*!********************************!*\
  !*** ./server/models/plant.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst createPlant = (sequalize, Sequelize) => {\n  const Plant = sequalize.define(\"plant\", {\n    species: {\n      type: Sequelize.STRING\n    },\n    stage: {\n      type: Sequelize.INTEGER\n    },\n    problem: {\n      type: Sequelize.STRING\n    },\n    startMood: {\n      type: Sequelize.INTEGER\n    },\n    endMood: {\n      type: Sequelize.INTEGER\n    }\n  });\n  return Plant;\n};\n\nconst _default = createPlant;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(createPlant, \"createPlant\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\models\\\\plant.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\models\\\\plant.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/models/plant.js?");

/***/ }),

/***/ "./server/models/question.js":
/*!***********************************!*\
  !*** ./server/models/question.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst createQuestion = (sequalize, Sequelize) => {\n  const Question = sequalize.define(\"question\", {\n    questionText: {\n      type: Sequelize.STRING\n    }\n  });\n  return Question;\n};\n\nconst _default = createQuestion;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(createQuestion, \"createQuestion\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\models\\\\question.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\models\\\\question.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/models/question.js?");

/***/ }),

/***/ "./server/models/response.js":
/*!***********************************!*\
  !*** ./server/models/response.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst createResponse = (sequalize, Sequelize) => {\n  const Response = sequalize.define(\"response\", {\n    response: {\n      type: Sequelize.STRING\n    }\n  });\n  return Response;\n};\n\nconst _default = createResponse;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(createResponse, \"createResponse\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\models\\\\response.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\models\\\\response.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/models/response.js?");

/***/ }),

/***/ "./server/models/user.js":
/*!*******************************!*\
  !*** ./server/models/user.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./server/models/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst createUser = (sequalize, Sequelize) => {\n  const User = sequalize.define(\"user\", {\n    firstName: {\n      type: Sequelize.STRING\n    },\n    lastName: {\n      type: Sequelize.STRING\n    },\n    email: {\n      type: Sequelize.STRING\n    }\n  });\n  return User;\n};\n\nconst _default = createUser;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(createUser, \"createUser\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\models\\\\user.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\models\\\\user.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/models/user.js?");

/***/ }),

/***/ "./server/routes/plant.routes.js":
/*!***************************************!*\
  !*** ./server/routes/plant.routes.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_plantcontroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/plantcontroller */ \"./server/controllers/plantcontroller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/v1/plants').get(_controllers_plantcontroller__WEBPACK_IMPORTED_MODULE_1__.default.readAll).post(_controllers_plantcontroller__WEBPACK_IMPORTED_MODULE_1__.default.createOne).delete(_controllers_plantcontroller__WEBPACK_IMPORTED_MODULE_1__.default.deleteAll);\nrouter.route('/api/v1/plants/:id').get(_controllers_plantcontroller__WEBPACK_IMPORTED_MODULE_1__.default.readOne).put(_controllers_plantcontroller__WEBPACK_IMPORTED_MODULE_1__.default.updateOne).delete(_controllers_plantcontroller__WEBPACK_IMPORTED_MODULE_1__.default.deleteOne);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\routes\\\\plant.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\routes\\\\plant.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/routes/plant.routes.js?");

/***/ }),

/***/ "./server/routes/question.routes.js":
/*!******************************************!*\
  !*** ./server/routes/question.routes.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_questioncontroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/questioncontroller */ \"./server/controllers/questioncontroller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/v1/questions').post(_controllers_questioncontroller__WEBPACK_IMPORTED_MODULE_1__.default.createAll);\nrouter.route('/api/v1/users/:user_id/questions/:question_id').post(_controllers_questioncontroller__WEBPACK_IMPORTED_MODULE_1__.default.createPlantQuestion);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\routes\\\\question.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\routes\\\\question.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/routes/question.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_usercontroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/usercontroller */ \"./server/controllers/usercontroller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/v1/users').post(_controllers_usercontroller__WEBPACK_IMPORTED_MODULE_1__.default.create);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\routes\\\\user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\server\\\\routes\\\\user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n_express__WEBPACK_IMPORTED_MODULE_1__.default.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s. ', _config_config__WEBPACK_IMPORTED_MODULE_0__.default.port);\n});\n\n//# sourceURL=webpack://acaidemic/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = ({\n  markup,\n  css\n}) => {\n  return `<!doctype html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"utf-8\">\n          <meta\n          name=\"viewport\"\n          content=\"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no\"\n          > \n          <title>Arcaid</title>\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n          <style>\n              a{\n                text-decoration: none;\n                color: #061d95\n              }\n          </style>\n        </head>\n        <body style=\"margin:0\">\n          <div id=\"root\">${markup}</div>\n          <style id=\"jss-server-side\">${css}</style>\n          <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n      </html>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\sojung\\\\Dropbox\\\\acaidemic\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://acaidemic/./webpack.config.client.js?");

/***/ }),

/***/ "./client/assets/images/monstera2.svg":
/*!********************************************!*\
  !*** ./client/assets/images/monstera2.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"acc2409270af2050c2a63c9624179b4d.svg\");\n\n//# sourceURL=webpack://acaidemic/./client/assets/images/monstera2.svg?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Card");;

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/CardContent");;

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/CardMedia");;

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Typography");;

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/colors");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");;

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;