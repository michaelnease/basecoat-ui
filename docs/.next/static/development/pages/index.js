(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "../modules/basecoat-core/src/index.js":
/*!*********************************************!*\
  !*** ../modules/basecoat-core/src/index.js ***!
  \*********************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
// export { default as Button } from "./Button";
// import React, { Component } from "react";

// export default class index extends Component {
//   render() {
//     return (
//       <div>
//         <button>this button</button>
//       </div>
//     );
//   }
// }

const Button = () => {
  console.log("hello world");
  return "hello";
};


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmichaelnease%2FSites%2Fbasecoat-ui%2Fdocs%2Fpages%2Findex.js!./":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmichaelnease%2FSites%2Fbasecoat-ui%2Fdocs%2Fpages%2Findex.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var basecoat_core_src___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! basecoat-core/src/ */ "../modules/basecoat-core/src/index.js");
var _jsxFileName = "/Users/michaelnease/Sites/basecoat-ui/docs/pages/index.js";



function Home() {
  console.log("Button: ", Object(basecoat_core_src___WEBPACK_IMPORTED_MODULE_1__["Button"])());
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Welcome to Next.js!");
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fmichaelnease%2FSites%2Fbasecoat-ui%2Fdocs%2Fpages%2Findex.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fmichaelnease%2FSites%2Fbasecoat-ui%2Fdocs%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmichaelnease%2FSites%2Fbasecoat-ui%2Fdocs%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_1aef2d0bbc0d334d831c":
/*!*******************************************!*\
  !*** external "dll_1aef2d0bbc0d334d831c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_1aef2d0bbc0d334d831c;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map