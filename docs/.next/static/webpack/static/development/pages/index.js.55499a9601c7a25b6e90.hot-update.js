webpackHotUpdate("static/development/pages/index.js",{

/***/ "../modules/basecoat-core/dist/basecoat.core.js":
false,

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
  console.log("Button: ", basecoat_core_src___WEBPACK_IMPORTED_MODULE_1__["Button"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Welcome to Next.js!");
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.55499a9601c7a25b6e90.hot-update.js.map