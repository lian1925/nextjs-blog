webpackHotUpdate("static/development/pages/cartoon.js",{

/***/ "./src/components/cartoon/Comment.js":
/*!*******************************************!*\
  !*** ./src/components/cartoon/Comment.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.6.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/_styled-components@4.0.3@styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/_next@7.0.2@next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/huahua/Documents/lian/react/hello-next/src/components/cartoon/Comment.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 1, import


var CONTENT = "content";
var USER = "name";
var EMAIL = "email"; // 2, dom

var data = {
  comments: [{
    user: "Lian",
    content: "还不错",
    date: "2018年10月12日 18:54"
  }, {
    user: "Lian",
    content: "我只想补充一点，这是一种不推荐的语法。来自reactjs文档：此语法的问题是每次按钮呈现时都会创建不同的回调。在大多数情况下，这很好。",
    date: "2018年10月12日 18:54"
  }, {
    user: "Lian",
    content: "<blockquote>\n    <pre>\u5F15\u7528Lian\u7684\u53D1\u8A00\uFF1A</pre>\n    \u8FD8\u4E0D\u9519\n    </blockquote>\n    \u6211\u6765\u8BD5\u8BD5\u70B9\u8BC4\n    ",
    date: "2018年10月12日 18:54"
  }, {
    user: "Lian",
    content: "<blockquote>\n      <pre>\u5F15\u7528Lian\u7684\u53D1\u8A00\uFF1A</pre>\n      <blockquote>\n          <pre>\u5F15\u7528Lian\u7684\u53D1\u8A00\uFF1A</pre>\n          \u8FD8\u4E0D\u9519\n          </blockquote>\n          \u6211\u6765\u8BD5\u8BD5\u70B9\u8BC4\n          \n      </blockquote>\n    \u6211\u6765\u8BD5\u8BD5\u70B9\u8BC4\n    ",
    date: "2018年10月12日 18:54"
  }]
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (state, e) {
      // console.log(data);
      _this.setState(_defineProperty({}, state, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReply", function (state, e) {
      var content = "<blockquote>\n<pre>\u5F15\u7528".concat(state.user, "\u7684\u53D1\u8A00\uFF1A</pre>\n").concat(state.content, "\n</blockquote>\n\n");

      _this.setState({
        content: content
      });

      _this.inputComments.focus(); // alert(state);

    });

    _this.state = {
      content: "",
      name: "",
      email: ""
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var none_comments = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "\u2615 \u8FD8\u6CA1\u6709\u8BC4\u8BBA");
      var some_comments = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, data.comments.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: item.content,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, item.user), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "\u8BF4\uFF1A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          dangerouslySetInnerHTML: {
            __html: item.content
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Time, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, item.date, " |", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          onClick: function onClick(e) {
            return _this2.handleReply(item, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, "\u56DE\u590D")));
      }));
      var comments = data.comments.length > 0 ? some_comments : none_comments;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comments, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "\u8BC4\u8BBA"), comments), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Writting, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "\u6211\u8981\u53D1\u8868\u770B\u6CD5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "\u60A8\u7684\u8BC4\u8BBA:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        ref: function ref(input) {
          _this2.inputComments = input;
        },
        cols: "70",
        rows: "10",
        value: this.state.content,
        onChange: function onChange(e) {
          return _this2.handleChange(CONTENT, e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "\u60A8\u7684\u5927\u540D:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "isGoing",
        type: "text",
        value: this.state.name,
        onChange: function onChange(e) {
          return _this2.handleChange(USER, e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "\xAB-\u5FC5\u586B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "\u60A8\u7684\u90AE\u7BB1:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "isGoing",
        type: "text",
        value: this.state.email,
        onChange: function onChange(e) {
          return _this2.handleChange(EMAIL, e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "\xAB-\u9009\u586B\uFF0C\u4E0D\u516C\u5F00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.handleSubmit;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "\u53D1\u8868"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "\xAB-\u70B9\u51FB\u63D0\u4EA4")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index); // 3,style

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Comment__Container",
  componentId: "sc-1wm20of-0"
})(["width:780px;background-color:white;border:1.5px solid #071419;border-radius:12px;display:flex;flex-direction:column;align-items:stretch;padding:10px;margin-top:20px;p{padding:0 10px;margin-bottom:5px;}h2{font-size:18px;padding:10px;border-bottom:1px solid #071419;}*:focus{outline:0 !important;}"]);
var Writting = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Comment__Writting",
  componentId: "sc-1wm20of-1"
})(["margin:0 10px;textarea{resize:none;}span{margin-left:10px;color:#999;}button{margin-top:20px;width:130px;background:orangered;border-radius:5px;color:white;font-size:14px;border:none;cursor:pointer;}"]);
var Comments = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Comment__Comments",
  componentId: "sc-1wm20of-2"
})(["margin:0 10px;blockquote{background-color:#96a8c8;margin:5px;padding:10px;border-radius:10px;}"]);
var User = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Comment__User",
  componentId: "sc-1wm20of-3"
})(["font-size:16px;font-weight:bolder;padding:0 5px;"]);
var Time = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Comment__Time",
  componentId: "sc-1wm20of-4"
})(["font-size:14px;padding:0 20px;text-align:right;span{cursor:pointer;}"]);

/***/ })

})
//# sourceMappingURL=cartoon.js.b3bf1721959e7f30858a.hot-update.js.map