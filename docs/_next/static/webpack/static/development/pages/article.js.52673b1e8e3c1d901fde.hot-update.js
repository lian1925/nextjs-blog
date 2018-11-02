webpackHotUpdate("static/development/pages/article.js",{

/***/ "./pages/article/index.js":
/*!********************************!*\
  !*** ./pages/article/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.6.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_blog_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/blog/Page */ "./src/components/blog/Page/index.js");
/* harmony import */ var _src_components_blog_PagePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/blog/PagePreview */ "./src/components/blog/PagePreview/index.js");
/* harmony import */ var _src_utils_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/utils/date */ "./src/utils/date.js");
/* harmony import */ var _src_utils_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/utils/content */ "./src/utils/content.js");
/* harmony import */ var _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blog/dist/index.json */ "./blog/dist/index.json");
var _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../blog/dist/index.json */ "./blog/dist/index.json", 1);
/* harmony import */ var _blog_dist_summary_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blog/dist/summary.json */ "./blog/dist/summary.json");
var _blog_dist_summary_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../blog/dist/summary.json */ "./blog/dist/summary.json", 1);
var _jsxFileName = "/Users/huahua/Documents/lian/react/hello-next/pages/article/index.js";








function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_blog_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    siteTitle: "".concat(_blog_dist_index_json__WEBPACK_IMPORTED_MODULE_5__.siteTitle, " - Index"),
    heroTitle: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_5__.siteTitle,
    description: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_5__.description,
    stylesheets: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_5__.stylesheets,
    topLinks: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_5__.topLinks,
    backgroundClass: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_5__.backgroundClass,
    body: Body({
      summaryJson: _blog_dist_summary_json__WEBPACK_IMPORTED_MODULE_6__
    }),
    copyright: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_5__.copyright,
    siteId: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_5__.siteId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

function Body(props) {
  var postList = Object(_src_utils_content__WEBPACK_IMPORTED_MODULE_4__["filterPosts"])(props.summaryJson);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center mw6 pa3 pa4-ns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, postList.map(function (article, i) {
    var href = Object(_src_utils_content__WEBPACK_IMPORTED_MODULE_4__["makeUrl"])(article);
    var json = Object(_src_utils_content__WEBPACK_IMPORTED_MODULE_4__["completeJson"])(article);
    var date = Object(_src_utils_date__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(article.date);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_blog_PagePreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: article.title,
      preview: article.preview,
      date: date,
      json: json,
      href: href,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/article")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/_webpack@4.20.2@webpack/buildin/harmony-module.js */ "./node_modules/_webpack@4.20.2@webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/blog/PagePreview/index.js":
/*!**************************************************!*\
  !*** ./src/components/blog/PagePreview/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.6.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/_next@7.0.2@next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/huahua/Documents/lian/react/hello-next/src/components/blog/PagePreview/index.js";




function PageLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "blog-post?fullUrl=".concat(props.fulUrl),
    as: props.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "b black o-80 glow no-underline lh-solid ".concat(props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.children));
}

function PagePreview(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb4 pb2 bb b--light-gray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageLink, {
    href: props.href,
    className: "f3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.title), props.preview && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mv1 o-60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.preview, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageLink, {
    href: props.href,
    fulUrl: props.json,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, " \xBB"))), props.date && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "db ttu o-40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("time", {
    key: new Date(props.date).toISOString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.date)));
}

PagePreview.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  preview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PagePreview);

/***/ })

})
//# sourceMappingURL=article.js.52673b1e8e3c1d901fde.hot-update.js.map