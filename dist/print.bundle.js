/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js-files/test-driven-development-functions.js":
/*!*******************************************************!*\
  !*** ./js-files/test-driven-development-functions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculator: () => (/* binding */ calculator),\n/* harmony export */   capitalize: () => (/* binding */ capitalize),\n/* harmony export */   reverseString: () => (/* binding */ reverseString)\n/* harmony export */ });\n/* eslint no-console: [\"error\", { allow: [\"log\"] }] */\n\nfunction capitalize(text) {\n  const firstLetter = text.slice(0, 1).toUpperCase();\n  return firstLetter + text.substring(1, text.length);\n}\n\nfunction reverseString(text) {\n  const arrText = text.split('');\n  const reversedArrText = arrText.reverse();\n  return reversedArrText.join('');\n}\n\nfunction calculator(num1, oper, num2) {\n  switch(oper) {\n    case '+':\n      return num1+num2;\n    case '-':\n      return num1-num2;\n    case '*':\n      return num1*num2;\n    case '/':\n      return num1/num2;\n    default:\n      return NaN;\n  }\n}\n\n\n\n\n\n\n//# sourceURL=webpack://javascript-practice/./js-files/test-driven-development-functions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js-files/test-driven-development-functions.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;