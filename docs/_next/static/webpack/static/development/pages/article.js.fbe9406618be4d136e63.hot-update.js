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
      lineNumber: 13
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
      lineNumber: 14
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
      lineNumber: 32
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
      href: href,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
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

/***/ })

})
//# sourceMappingURL=article.js.fbe9406618be4d136e63.hot-update.js.map