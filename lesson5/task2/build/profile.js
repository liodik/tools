!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/profile/gateway.js\nasync function fetchUser(userId) {\n  const response = await fetch(`https://api.github.com/users/${userId}`);\n  if (!response.ok) {\n    throw new Error('Failed to get user data');\n  }\n  return await response.json();\n}\n\n// CONCATENATED MODULE: ./src/profile/printProfile.js\n/* harmony default export */ var printProfile = (profileData => {\n  const { name, location } = profileData;\n  console.log(`${name} from ${location}`);\n});\n\n// CONCATENATED MODULE: ./src/profile/index.js\n\n\n\nfetchUser('github').then(({ name, location }) =>\n  printProfile({\n    name,\n    location,\n  })\n);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzP2MyMzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2ZpbGUvcHJpbnRQcm9maWxlLmpzP2IyMzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2ZpbGUvaW5kZXguanM/YTY5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTztBQUNQLCtEQUErRCxPQUFPO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ05lO0FBQ2YsU0FBUyxpQkFBaUI7QUFDMUIsaUJBQWlCLEtBQUssUUFBUSxTQUFTO0FBQ3ZDLENBQUMsRUFBQzs7O0FDSHVDO0FBQ0k7O0FBRTdDLFNBQVMsa0JBQWtCLGlCQUFpQjtBQUM1QyxFQUFFLFlBQVk7QUFDZDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyKHVzZXJJZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcklkfWApO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IHVzZXIgZGF0YScpO1xuICB9XG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBwcm9maWxlRGF0YSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgbG9jYXRpb24gfSA9IHByb2ZpbGVEYXRhO1xuICBjb25zb2xlLmxvZyhgJHtuYW1lfSBmcm9tICR7bG9jYXRpb259YCk7XG59O1xuIiwiaW1wb3J0IHsgZmV0Y2hVc2VyIH0gZnJvbSAnLi9nYXRld2F5LmpzJztcbmltcG9ydCBwcmludFByb2ZpbGUgZnJvbSAnLi9wcmludFByb2ZpbGUuanMnO1xuXG5mZXRjaFVzZXIoJ2dpdGh1YicpLnRoZW4oKHsgbmFtZSwgbG9jYXRpb24gfSkgPT5cbiAgcHJpbnRQcm9maWxlKHtcbiAgICBuYW1lLFxuICAgIGxvY2F0aW9uLFxuICB9KVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);