webpackHotUpdate("static/development/pages/cartoon.js",{

/***/ "./src/components/cartoon/Comment.js":
/*!*******************************************!*\
  !*** ./src/components/cartoon/Comment.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.0.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/_react@16.6.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/_styled-components@4.0.3@styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/_next@7.0.2@next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/fetch */ "./src/utils/fetch.js");

var _jsxFileName = "/Users/huahua/Documents/lian/react/hello-next/src/components/cartoon/Comment.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function () {
      _this.postCommentData();

      alert("submit");
    });

    _this.state = {
      content: "",
      name: "",
      email: ""
    };
    return _this;
  }

  _createClass(Index, [{
    key: "postCommentData",
    value: function () {
      var _postCommentData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _utils_fetch__WEBPACK_IMPORTED_MODULE_4__["default"].get("/user");

              case 2:
                result = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function postCommentData() {
        return _postCommentData.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var none_comments = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "\u2615 \u8FD8\u6CA1\u6709\u8BC4\u8BBA");
      var some_comments = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, data.comments.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: item.content,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(User, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, item.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, "\u8BF4\uFF1A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          dangerouslySetInnerHTML: {
            __html: item.content
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Time, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, item.date, " |", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          onClick: function onClick(e) {
            return _this2.handleReply(item, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "\u56DE\u590D")));
      }));
      var comments = data.comments.length > 0 ? some_comments : none_comments;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comments, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "\u8BC4\u8BBA"), comments), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Writting, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "\u6211\u8981\u53D1\u8868\u770B\u6CD5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "\u60A8\u7684\u8BC4\u8BBA:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
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
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "\u60A8\u7684\u5927\u540D:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        name: "isGoing",
        type: "text",
        value: this.state.name,
        onChange: function onChange(e) {
          return _this2.handleChange(USER, e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "\xAB-\u5FC5\u586B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "\u60A8\u7684\u90AE\u7BB1:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        name: "isGoing",
        type: "text",
        value: this.state.email,
        onChange: function onChange(e) {
          return _this2.handleChange(EMAIL, e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "\xAB-\u9009\u586B\uFF0C\u4E0D\u516C\u5F00"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.handleSubmit();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "\u53D1\u8868"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "\xAB-\u70B9\u51FB\u63D0\u4EA4")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index); // 3,style

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Comment__Container",
  componentId: "sc-1wm20of-0"
})(["width:780px;background-color:white;border:1.5px solid #071419;border-radius:12px;display:flex;flex-direction:column;align-items:stretch;padding:10px;margin-top:20px;p{padding:0 10px;margin-bottom:5px;}h2{font-size:18px;padding:10px;border-bottom:1px solid #071419;}*:focus{outline:0 !important;}"]);
var Writting = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Comment__Writting",
  componentId: "sc-1wm20of-1"
})(["margin:0 10px;textarea{resize:none;}span{margin-left:10px;color:#999;}button{margin-top:20px;width:130px;background:orangered;border-radius:5px;color:white;font-size:14px;border:none;cursor:pointer;}"]);
var Comments = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Comment__Comments",
  componentId: "sc-1wm20of-2"
})(["margin:0 10px;blockquote{background-color:#96a8c8;margin:5px;padding:10px;border-radius:10px;}"]);
var User = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Comment__User",
  componentId: "sc-1wm20of-3"
})(["font-size:16px;font-weight:bolder;padding:0 5px;"]);
var Time = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Comment__Time",
  componentId: "sc-1wm20of-4"
})(["font-size:14px;padding:0 20px;text-align:right;span{cursor:pointer;}"]);

/***/ })

})
//# sourceMappingURL=cartoon.js.7669cd8ade081065eb2a.hot-update.js.map