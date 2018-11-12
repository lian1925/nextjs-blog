webpackHotUpdate("static/development/pages/cartoon.js",{

/***/ "./src/components/cartoon/Main.js":
/*!****************************************!*\
  !*** ./src/components/cartoon/Main.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.6.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/_styled-components@4.0.3@styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/_next@7.0.2@next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/_next@7.0.2@next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/huahua/Documents/lian/react/hello-next/src/components/cartoon/Main.js";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 1, import



var ReactMarkdown = __webpack_require__(/*! react-markdown */ "./node_modules/_react-markdown@4.0.3@react-markdown/lib/react-markdown.js");

 // import articles from "./article";

var article = __webpack_require__(/*! ./article */ "./src/components/cartoon/article.js");

var articles = article.articles;

console.log(articles);
var PRE_ONE = -1;
var NEXT_ONE = 1; // var Remarkable = require("remarkable");
// var md = new Remarkable();

var getPageJson = function getPageJson(router) {
  var pageJson = {};
  var id = 0;

  if (router.query && router.query.id) {
    id = router.query.id;
  }

  pageJson = articles.filter(function (item) {
    if (item.id == id) {
      return true;
    } else {
      return false;
    }
  });
  pageJson[0].sum = articles.length;
  return pageJson[0];
}; // 2, dom


var Index = function Index(props) {
  var data = _objectSpread({}, articles[0], {
    sum: articles.length
  });

  data = getPageJson(props.router); // console.log(page);

  var goTo = function goTo(state) {
    var id = data.id + state;
    if (id < 0) id = 0;
    if (id >= data.sum) id = data.sum - 1;
    var as = "/cartoon/" + id;
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
      pathname: "/cartoon",
      query: {
        id: id
      }
    }, as);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\u9898\u76EE\uFF1A", data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return goTo(PRE_ONE);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "| < "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u4F4D\u7F6E\uFF1A", data.id + 1, "/", data.sum), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return goTo(NEXT_ONE);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, " > | ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactMarkdown, {
    source: data.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\u53D1\u8868\u4E8E\uFF1A", data.updateTime)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Index)); // 3,style

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Main__Container",
  componentId: "sc-10hloyq-0"
})(["width:100%;background-color:white;border:1.5px solid #071419;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;padding:10px;p{padding-left:20px;margin-bottom:0;}h2{font-size:18px;}"]);
var Tab = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Main__Tab",
  componentId: "sc-10hloyq-1"
})(["margin-bottom:10px;display:flex;justify-content:center;span{margin:0 20px;}button{padding:0 15px;border-radius:5px;font-weight:bolder;cursor:pointer;}button:hover{background-color:#6e7b91;}button:after{border:none;}*:focus{outline:0 !important;}"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Main__Content",
  componentId: "sc-10hloyq-2"
})(["display:flex;flex-direction:column;justify-content:center;margin-bottom:20px;pre{text-align:center;line-height:30px;font-size:16px;}img{width:500px;border:1.5px solid black;border-radius:15px;}p{color:#333;text-align:right;font-size:12px;}"]);

/***/ })

})
//# sourceMappingURL=cartoon.js.402ea748bd0730aeb1d2.hot-update.js.map