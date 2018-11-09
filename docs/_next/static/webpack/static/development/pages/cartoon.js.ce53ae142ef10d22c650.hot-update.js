webpackHotUpdate("static/development/pages/cartoon.js",{

/***/ "./src/components/cartoon/Footer.js":
/*!******************************************!*\
  !*** ./src/components/cartoon/Footer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.6.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/_styled-components@4.0.3@styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/_next@7.0.2@next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/huahua/Documents/lian/react/hello-next/src/components/cartoon/Footer.js";

// 1, import

 // 2, dom

var Index = function Index() {
  var data = {
    recommand: [{
      image: "/static/image/favirate1.png",
      url: "/cartoon/0",
      alt: "爱心满屋飞"
    }, {
      image: "/static/image/favirate2.png",
      url: "/cartoon/1",
      alt: "懒虫快起床"
    }, {
      image: "/static/image/favirate1.png",
      url: "/cartoon/2",
      alt: "爱心满屋飞"
    }],
    copyRight: "Copyright @ 漫画小动员 | 2009-2018"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Recommand, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, data.recommand.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: item.url,
      key: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.image,
      alt: item.alt,
      title: item.alt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\u63A8\u8350\u6F2B\u753B")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CopeyRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, data.copyRight));
};

/* harmony default export */ __webpack_exports__["default"] = (Index); // 3,style

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__Container",
  componentId: "tcrsyl-0"
})(["width:100%;background-color:white;border:1.5px solid #071419;border-radius:12px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-evenly;padding:10px;margin:20px 0;"]);
var Recommand = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__Recommand",
  componentId: "tcrsyl-1"
})(["display:flex;flex-direction:column;ul{display:flex;justify-content:space-around;img{padding:0 10px;cursor:pointer;margin-bottom:0;}}p{margin:0 auto;}"]);
var CopeyRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Footer__CopeyRight",
  componentId: "tcrsyl-2"
})(["margin:20px auto;font-size:14px;margin-bottom:10px;"]);

/***/ })

})
//# sourceMappingURL=cartoon.js.ce53ae142ef10d22c650.hot-update.js.map