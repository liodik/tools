/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _profile_gateway_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/gateway.js */ \"./src/profile/gateway.js\");\n/* harmony import */ var _profile_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/index.js */ \"./src/profile/index.js\");\n\n\n\n(0,_profile_gateway_js__WEBPACK_IMPORTED_MODULE_0__.default)('git').then(userData =>\n  (0,_profile_index_js__WEBPACK_IMPORTED_MODULE_1__.printProfile)({\n    name: userData.name,\n    company: userData.location,\n  })\n);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrMS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUE2QztBQUNLOztBQUVsRCw0REFBUztBQUNULEVBQUUsK0RBQVk7QUFDZDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoVXNlciBmcm9tICcuL3Byb2ZpbGUvZ2F0ZXdheS5qcyc7XG5pbXBvcnQgeyBwcmludFByb2ZpbGUgfSBmcm9tICcuL3Byb2ZpbGUvaW5kZXguanMnO1xuXG5mZXRjaFVzZXIoJ2dpdCcpLnRoZW4odXNlckRhdGEgPT5cbiAgcHJpbnRQcm9maWxlKHtcbiAgICBuYW1lOiB1c2VyRGF0YS5uYW1lLFxuICAgIGNvbXBhbnk6IHVzZXJEYXRhLmxvY2F0aW9uLFxuICB9KVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/profile/gateway.js":
/*!********************************!*\
  !*** ./src/profile/gateway.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ fetchUser\n/* harmony export */ });\nasync function fetchUser(userId) {\n  const response = await fetch(`https://api.github.com/users/${userId}`);\n  if (!response.ok) {\n    throw new Error('Failed to get user data');\n  }\n  return await response.json();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrMS8uL3NyYy9wcm9maWxlL2dhdGV3YXkuanM/YzIzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZiwrREFBK0QsT0FBTztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3Byb2ZpbGUvZ2F0ZXdheS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcih1c2VySWQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJJZH1gKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCB1c2VyIGRhdGEnKTtcbiAgfVxuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/profile/gateway.js\n");

/***/ }),

/***/ "./src/profile/index.js":
/*!******************************!*\
  !*** ./src/profile/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printProfile\": () => /* binding */ printProfile\n/* harmony export */ });\nconst printProfile = profileData => {\n  const { name, company } = profileData;\n  console.log(`${name} from ${company}`);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrMS8uL3NyYy9wcm9maWxlL2luZGV4LmpzP2E2OTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1AsU0FBUyxnQkFBZ0I7QUFDekIsaUJBQWlCLEtBQUssUUFBUSxRQUFRO0FBQ3RDIiwiZmlsZSI6Ii4vc3JjL3Byb2ZpbGUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJpbnRQcm9maWxlID0gcHJvZmlsZURhdGEgPT4ge1xuICBjb25zdCB7IG5hbWUsIGNvbXBhbnkgfSA9IHByb2ZpbGVEYXRhO1xuICBjb25zb2xlLmxvZyhgJHtuYW1lfSBmcm9tICR7Y29tcGFueX1gKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/profile/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;