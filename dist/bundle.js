/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup-generator/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _utils_utilityMethods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utilityMethods.js */ \"./src/utils/utilityMethods.js\");\n/* harmony import */ var _utils_utilityVars_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utilityVars.js */ \"./src/utils/utilityVars.js\");\n/* harmony import */ var _popup_base_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup-base/index.js */ \"./src/components/popup-base/index.js\");\n\n\n\n\nclass Header extends _popup_base_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor () {\n    super();\n    let header = this;\n    header.config = {};\n  }\n  configureAttributes (options) {\n    let header = this;\n    header.config.style = _utils_utilityVars_js__WEBPACK_IMPORTED_MODULE_1__[\"defaultHeaderStyle\"];\n    const sanitizedInput = options.sanitizedInput;\n    header.config.question = sanitizedInput.question;\n\n  }\n  render () {\n    let header = this,\n      headerConfig = header.config,\n      popUpGroupEle = header.parentComponent.rootGroupElement,\n      headerGroupEle =  Object(_utils_utilityMethods_js__WEBPACK_IMPORTED_MODULE_0__[\"createELement\"])(\"div\", {}, { className: 'header-group' }),\n      headerTextEle = Object(_utils_utilityMethods_js__WEBPACK_IMPORTED_MODULE_0__[\"createELement\"])(\"span\",headerConfig.style, {\n        innerText: headerConfig.question,\n        className: 'header-text'\n      });\n    headerGroupEle.appendChild(headerTextEle);\n    popUpGroupEle.appendChild(headerGroupEle);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/header/index.js?");

/***/ }),

/***/ "./src/components/popup-base/index.js":
/*!********************************************!*\
  !*** ./src/components/popup-base/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PopupBase; });\nlet UNDEF;\nclass PopupBase {\n  constructor () {\n    let self = this;\n    self.childComponents = [];\n  }\n  configure (options) {\n    let self = this,\n      children = self.childComponents;\n    self.configureAttributes(options);\n    for (let index = 0; index < children.length; index++) {\n      const childComponent = children[index];\n      childComponent.configure(options);\n    }\n  }\n  addChildComponent (child) {\n    let self = this;\n    if (self.childComponents === UNDEF) {\n      self.childComponents = [];\n    }\n    self.childComponents.push(child);\n    child.parentComponent = self;\n  }\n  renderDecendents () {\n    let self = this,\n      children = self.childComponents;\n    self.render();\n    for (let index = 0; index < children.length; index++) {\n      const childComponent = children[index];\n      childComponent.renderDecendents();\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/components/popup-base/index.js?");

/***/ }),

/***/ "./src/components/popup/background.js":
/*!********************************************!*\
  !*** ./src/components/popup/background.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PopupBackground; });\n/* harmony import */ var _popup_base_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popup-base/index.js */ \"./src/components/popup-base/index.js\");\n/* harmony import */ var _utils_utilityMethods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utilityMethods.js */ \"./src/utils/utilityMethods.js\");\n/* harmony import */ var _utils_utilityVars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utilityVars.js */ \"./src/utils/utilityVars.js\");\n\n\n\n\nclass PopupBackground extends _popup_base_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor () {\n    super();\n    let background = this;\n    background.config = {\n      attrs: {}\n    };\n    // background.sanitizedInput = Object.assign({},SmartPopup.sanitizedInput);\n  }\n  configureAttributes (options) {\n    let background = this,\n      attrs = background.config.attrs;\n    attrs = _utils_utilityVars_js__WEBPACK_IMPORTED_MODULE_2__[\"popupBackgourndDefaultStyles\"];\n    attrs.width = options.width;\n    attrs.height = options.height;\n    background.config.attrs = attrs;\n  }\n  render () {\n    let background = this,\n      backgroundConfig = background.config,\n      parentRootEle = background.parentComponent.rootGroupElement,\n      backgroundEle = Object(_utils_utilityMethods_js__WEBPACK_IMPORTED_MODULE_1__[\"createELement\"])(\"div\", backgroundConfig.attrs, {\n        className: 'background'\n      });\n    parentRootEle.appendChild(backgroundEle);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/popup/background.js?");

/***/ }),

/***/ "./src/components/popup/index.js":
/*!***************************************!*\
  !*** ./src/components/popup/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Popup; });\n/* harmony import */ var _header_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/index.js */ \"./src/components/header/index.js\");\n/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.js */ \"./src/components/popup/background.js\");\n/* harmony import */ var _utils_utilityMethods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utilityMethods.js */ \"./src/utils/utilityMethods.js\");\n/* harmony import */ var _popup_base_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup-base/index.js */ \"./src/components/popup-base/index.js\");\n/* harmony import */ var _utils_utilityVars_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utilityVars.js */ \"./src/utils/utilityVars.js\");\n\n\n\n\n\nclass Popup extends _popup_base_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n  constructor () {\n    super();\n    let popUp = this,\n      popupHeader,\n      background;\n    popUp.config = {};\n    // popUp.config = Object.assign({}, SmartPopup.sanitizedInput);\n    popupHeader = new _header_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    background = new _background_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    popUp.addChildComponent(background);\n    popUp.addChildComponent(popupHeader);\n  }\n  configureAttributes (options) {\n    let popUp = this,\n      popUpConfig = popUp.config,\n      { targetElement, popupPosition, sanitizedInput } = options;\n    popUpConfig.targetElement = targetElement;\n    popUpConfig.width = popupPosition.width;\n    popUpConfig.height = popupPosition.height;\n    popUpConfig.sanitizedInput = sanitizedInput;\n    popUpConfig.style = _utils_utilityVars_js__WEBPACK_IMPORTED_MODULE_4__[\"popUpDivStyles\"];\n    popUpConfig.style.left = popupPosition.left + 'px';\n    popUpConfig.style.top = popupPosition.top + 'px';\n  }\n  render () {\n    let popUp = this,\n      popupConfig = popUp.config,\n      rootGroupEle = Object(_utils_utilityMethods_js__WEBPACK_IMPORTED_MODULE_2__[\"createELement\"])(\"div\", popupConfig.style, { id: 'smart-popup' }),\n      targetElement = popupConfig.targetElement;\n    popUp.rootGroupElement = rootGroupEle; \n    targetElement.appendChild(rootGroupEle);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/popup/index.js?");

/***/ }),

/***/ "./src/controllers/popup-controller/index.js":
/*!***************************************************!*\
  !*** ./src/controllers/popup-controller/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PopupController; });\n/* harmony import */ var _components_popup_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/popup/index.js */ \"./src/components/popup/index.js\");\n/* harmony import */ var _utils_utilityMethods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utilityMethods.js */ \"./src/utils/utilityMethods.js\");\n\n\n\n// this class consumes the user configuration and draws popup over element.\nclass PopupController {\n\n  constructor () {\n    let popupController = this;\n    popupController.config = {};\n    popupController.popUp = new _components_popup_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n  configure (sanitizedInput) {\n    let popupController = this,\n      popUp = popupController.popUp,\n      targetElement = Object(_utils_utilityMethods_js__WEBPACK_IMPORTED_MODULE_1__[\"findTargetEle\"])(sanitizedInput.targetele, sanitizedInput.targetid, sanitizedInput.targetname),\n      targetPosition = Object(_utils_utilityMethods_js__WEBPACK_IMPORTED_MODULE_1__[\"getPosition\"])(targetElement),\n      popupPosition = Object(_utils_utilityMethods_js__WEBPACK_IMPORTED_MODULE_1__[\"getPopupPosition\"])(targetPosition, Object(_utils_utilityMethods_js__WEBPACK_IMPORTED_MODULE_1__[\"estimatePopupPosition\"])(sanitizedInput), 'MIDDLE', 'CENTER');\n    \n    popUp.configure({ targetElement, popupPosition, sanitizedInput });\n\n  }\n  render () {\n    let popupController = this,\n      popUp = popupController.popUp;\n    popUp.renderDecendents();\n  }\n}\n\n//# sourceURL=webpack:///./src/controllers/popup-controller/index.js?");

/***/ }),

/***/ "./src/popup-generator/index.js":
/*!**************************************!*\
  !*** ./src/popup-generator/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_popup_controller_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/popup-controller/index.js */ \"./src/controllers/popup-controller/index.js\");\n/* harmony import */ var _utils_sanitizer_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sanitizer/index.js */ \"./src/utils/sanitizer/index.js\");\n/* eslint-disable no-param-reassign */\n\n\n\nvar SmartPopup = {};\nwindow.SmartPopup = SmartPopup;\n(function () {\n  SmartPopup.createSmartPopup = function createSmartPopup () {\n    SmartPopup.popUpCtrl = new _controllers_popup_controller_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  };\n  SmartPopup.appear = function appear (inputConfig) {\n    // order targetELe, targetId, targetName\n    inputConfig = {\n      \"targetid\": \"video-container\",\n      \"targetele\": {},\n      \"targetname\": \"\",\n      \"width\": \"200\",\n      \"height\": \"200\",\n      \"question\": \"which year india got Independence?\",\n      \"answer\": {\n        \"type\": \"text\"\n      }\n    };\n    SmartPopup.userInput = inputConfig;\n    SmartPopup.sanitizedInput = Object(_utils_sanitizer_index_js__WEBPACK_IMPORTED_MODULE_1__[\"sanitizeInput\"])(inputConfig);\n    let popUpCtrl = SmartPopup.popUpCtrl;\n    popUpCtrl.configure(SmartPopup.sanitizedInput);\n    popUpCtrl.render();\n  };\n})(SmartPopup);\n\n\n//# sourceURL=webpack:///./src/popup-generator/index.js?");

/***/ }),

/***/ "./src/utils/sanitizer/index.js":
/*!**************************************!*\
  !*** ./src/utils/sanitizer/index.js ***!
  \**************************************/
/*! exports provided: sanitizeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sanitizeInput\", function() { return sanitizeInput; });\nfunction sanitizeInput (InputJSON) {\n  return InputJSON;\n}\n\n\n//# sourceURL=webpack:///./src/utils/sanitizer/index.js?");

/***/ }),

/***/ "./src/utils/utilityMethods.js":
/*!*************************************!*\
  !*** ./src/utils/utilityMethods.js ***!
  \*************************************/
/*! exports provided: estimatePopupPosition, createSVGElement, findTargetEle, createELement, getPosition, getPopupPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"estimatePopupPosition\", function() { return estimatePopupPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSVGElement\", function() { return createSVGElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findTargetEle\", function() { return findTargetEle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createELement\", function() { return createELement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosition\", function() { return getPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPopupPosition\", function() { return getPopupPosition; });\n/* harmony import */ var _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilityVars.js */ \"./src/utils/utilityVars.js\");\n/* eslint-disable no-prototype-builtins */\n\nfunction createSVGElement (height, width) {\n  const SVGEle = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\"),\n    styles = \"position: absolute; left: 0; top: 0\";\n  // set width and height\n\n  SVGEle.setAttribute(\"width\", width);\n  SVGEle.setAttribute(\"height\", height);\n  SVGEle.setAttribute(\"style\", styles);\n  return SVGEle;\n}\n\nfunction findTargetEle (targetEle, targetId, targetName) {\n  let element;\n  if (isDOMElement(targetEle)) {\n    return targetEle;\n  } else if (document.getElementById(targetId)) {\n    element = document.getElementById(targetId);\n    return element;\n  } else if (document.getElementsByClassName(targetName) && document.getElementsByClassName(targetName).length > 0) {\n    element = document.getElementsByClassName(targetName);\n    return element;\n  }\n  element = document.body;\n  return element;\n}\n\nfunction estimatePopupPosition (sanitizedInput) {\n  let question = sanitizedInput.question,\n    headerArea,\n    footerArea,\n    defaultpopupWidth = 450,\n    defaultpopupHeight = 150;\n  headerArea = spanAreaCalculator(question);\n  footerArea = footerAreaCalculator();\n  if (headerArea + footerArea < (defaultpopupWidth * defaultpopupHeight)) {\n    return {\n      left: 0,\n      top: 0,\n      height: defaultpopupHeight,\n      width: defaultpopupWidth\n    };\n  }\n}\nfunction footerAreaCalculator () {\n  let buttonTextFontSize = '14',\n    buttonPaddingV = '10',\n    buttonPaddingH = '24',\n    btnArea,\n    okArea = spanAreaCalculator('OK', buttonTextFontSize),\n    cancelArea = spanAreaCalculator('CANCEL', buttonTextFontSize);\n  btnArea = okArea + cancelArea + (buttonPaddingV * 2) + (buttonPaddingH * 2);\n  \n  return btnArea;\n}\nfunction spanAreaCalculator (text, textFontSize = '12') {\n  let area,\n    position,\n    spanEle = document.createElement('span');\n  spanEle.textContent = text;\n  spanEle.style.fontSize = textFontSize + 'px';\n  spanEle.style.visibility = 'hidden';\n  document.body.appendChild(spanEle);\n  position = spanEle.getBoundingClientRect();\n  area = position.width * position.height;\n\n  document.body.removeChild(spanEle);\n  return area;\n}\nfunction isDOMElement(obj) {\n  try {\n    //Using W3 DOM2 (works for FF, Opera and Chrome)\n    return obj instanceof HTMLElement;\n  }\n  catch(e){\n    //Browsers not supporting W3 DOM2 don't have HTMLElement and\n    //an exception is thrown and we end up here. Testing some\n    //properties that all elements have (works on IE7)\n    return (typeof obj===\"object\") &&\n      (obj.nodeType===1) && (typeof obj.style === \"object\") &&\n      (typeof obj.ownerDocument ===\"object\");\n  }\n}\n\nfunction createELement (ele, styles, nodeAttrs) {\n  let element = document.createElement(ele);\n  for (const key in styles) {\n    if (styles.hasOwnProperty(key)) {\n      const value = styles[key];\n      element.style[key] = value;\n    }\n  }\n  for (const key in nodeAttrs) {\n    if (nodeAttrs.hasOwnProperty(key)) {\n      const value = nodeAttrs[key];\n      element[key] = value;\n    }\n  }\n  return element;\n}\n\n// this function is to get the x y coordinate of element hovered\nfunction getPosition (el) {\n  var pos = {\n    },\n    boundingRect = el.getBoundingClientRect();\n  pos.left = boundingRect.left + (window.pageXOffset || document.documentElement.scrollLeft);\n  pos.top = boundingRect.top + (window.pageYOffset || document.documentElement.scrollTop);\n  pos.height = boundingRect.height;\n  pos.width = boundingRect.width;\n  return pos;\n}\n\nfunction getPopupPosition (parentPosition, popupPosition, verticalAlignment, horizontalalignment) {\n  let vAlign = verticalAlignment,\n    hAlign = horizontalalignment,\n    popupBoundingRect = {\n      left: popupPosition.left,\n      top: popupPosition.top,\n      height: popupPosition.height,\n      width: popupPosition.width\n    };\n\n  if ((((popupBoundingRect.width / parentPosition.width) * 100) > _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"MAX_WIDTH_TOLERANCE_FOR_GRID\"]) ||\n    (((popupBoundingRect.height / parentPosition.height) * 100) > _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"MAX_HEIGHT_TOLERANCE_FOR_GRID\"])) {\n    vAlign = _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"MIDDLE\"];\n    hAlign = _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"CENTER\"];\n  }\n  if (vAlign.toLowerCase() === _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"TOP\"]) {\n    popupBoundingRect.top = parentPosition.height * _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"FIVE_PERCENT\"];\n  } else if (vAlign.toLowerCase() === _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"MIDDLE\"]) {\n    popupBoundingRect.top = ((parentPosition.height - popupBoundingRect.height) / 2) ;\n  } else if (vAlign.toLowerCase() === _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"BOTTOM\"]) {\n    popupBoundingRect.top = parentPosition.height - popupBoundingRect.height - (parentPosition.height * _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"FIVE_PERCENT\"]);\n  }\n  \n  if (hAlign.toLowerCase() === _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"LEFT\"]) {\n    popupBoundingRect.left = parentPosition.width * _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"FIVE_PERCENT\"];\n  } else if (hAlign.toLowerCase() === _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"CENTER\"]) {\n    popupBoundingRect.left = ((parentPosition.width - popupBoundingRect.width) / 2) ;\n  } else if (vAlign.toLowerCase() === _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"RIGHT\"]) {\n    popupBoundingRect.left = parentPosition.width - popupBoundingRect.width - (parentPosition.width * _utilityVars_js__WEBPACK_IMPORTED_MODULE_0__[\"FIVE_PERCENT\"]);\n  }\n\n  return popupBoundingRect;\n}\n\n\n\n//# sourceURL=webpack:///./src/utils/utilityMethods.js?");

/***/ }),

/***/ "./src/utils/utilityVars.js":
/*!**********************************!*\
  !*** ./src/utils/utilityVars.js ***!
  \**********************************/
/*! exports provided: LEFT, CENTER, RIGHT, TOP, MIDDLE, BOTTOM, FIVE_PERCENT, MAX_WIDTH_TOLERANCE_FOR_GRID, MAX_HEIGHT_TOLERANCE_FOR_GRID, defaultHeaderStyle, popupBackgourndDefaultStyles, popUpDivStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LEFT\", function() { return LEFT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CENTER\", function() { return CENTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RIGHT\", function() { return RIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOP\", function() { return TOP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MIDDLE\", function() { return MIDDLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOTTOM\", function() { return BOTTOM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FIVE_PERCENT\", function() { return FIVE_PERCENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_WIDTH_TOLERANCE_FOR_GRID\", function() { return MAX_WIDTH_TOLERANCE_FOR_GRID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_HEIGHT_TOLERANCE_FOR_GRID\", function() { return MAX_HEIGHT_TOLERANCE_FOR_GRID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultHeaderStyle\", function() { return defaultHeaderStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popupBackgourndDefaultStyles\", function() { return popupBackgourndDefaultStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popUpDivStyles\", function() { return popUpDivStyles; });\n\nlet MAX_WIDTH_TOLERANCE_FOR_GRID = 50,\n  MAX_HEIGHT_TOLERANCE_FOR_GRID = 50,\n  LEFT = 'left',\n  CENTER = 'center',\n  RIGHT = 'right',\n  TOP = 'top',\n  MIDDLE = 'middle',\n  BOTTOM = 'bottom',\n  FIVE_PERCENT = 0.05,\n  defaultHeaderStyle = {\n    \"font-size\": '12px',\n    \"font-family\": \"'Lato', 'Helvetica Neue', Helvetica, sans-serif\",\n    \"font-style\": \"normal\",\n    \"text-anchor\": \"start\",\n    \"font-weight\": \"normal\",\n    \"fill\": \"#000000\",\n    \"fill-opacity\": \"1\",\n    \"max-width\": \"calc(100% - 20px)\",\n    \"overflow-wrap\": \"break-word\"\n  },\n\n  popupBackgourndDefaultStyles = {\n    \"width\": \"100\",\n    \"height\": \"100\",\n    \"rx\": \"15\",\n    \"fill\": \"#efefef\"\n  },\n  popUpDivStyles = {\n    position: 'absolute',\n    left: 0,\n    top: 10,\n    width: 450,\n    height: 150,\n    background: '#efefef'\n  };\n\n\n//# sourceURL=webpack:///./src/utils/utilityVars.js?");

/***/ })

/******/ });