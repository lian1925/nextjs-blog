webpackHotUpdate("static/development/pages/blog-post.js",{

/***/ "./pages/blog-post/index.js":
/*!**********************************!*\
  !*** ./pages/blog-post/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/_styled-jsx@3.1.0@styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/_react@16.6.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/_next@7.0.2@next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_blog_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/blog/Page */ "./src/components/blog/Page/index.js");
/* harmony import */ var _src_components_blog_PagePreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/blog/PagePreview */ "./src/components/blog/PagePreview/index.js");
/* harmony import */ var _src_utils_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/utils/date */ "./src/utils/date.js");
/* harmony import */ var _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blog/dist/index.json */ "./blog/dist/index.json");
var _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../blog/dist/index.json */ "./blog/dist/index.json", 1);
/* harmony import */ var _blog_dist_summary_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blog/dist/summary.json */ "./blog/dist/summary.json");
var _blog_dist_summary_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../blog/dist/summary.json */ "./blog/dist/summary.json", 1);
var _jsxFileName = "/Users/huahua/Documents/lian/react/hello-next/pages/blog-post/index.js";









var getPageJson = function getPageJson(router) {
  var pageJson = {};

  if (router.asPath) {
    pageJson = __webpack_require__("./blog sync recursive ^\\.\\/dist.*\\.json$")("./dist".concat(router.asPath.split("/article").join(""), ".json"));
  }

  return pageJson;
};

var Index = function Index(props) {
  var pageJson = getPageJson(props.router);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3954607902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3954607902",
    css: ".content a{color:#0365a5;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px solid #dfdfdf;-webkit-transition:all 300ms ease;transition:all 300ms ease;}a:hover,a:focus{border-bottom-color:currentColor;}code{background-color:#eee;line-height:1;border-radius:2px;padding:1px;}code:not(.hljs){border:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWFodWEvRG9jdW1lbnRzL2xpYW4vcmVhY3QvaGVsbG8tbmV4dC9wYWdlcy9ibG9nLXBvc3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0J5QixBQUd5QixBQU9tQixBQUdYLEFBTUEsY0FmRCxRQVVQLEFBTWhCLFdBVEEsR0FJb0Isa0JBQ04sVUFYb0IsRUFZbEMsOEJBWDRCLDREQUM1QiIsImZpbGUiOiIvVXNlcnMvaHVhaHVhL0RvY3VtZW50cy9saWFuL3JlYWN0L2hlbGxvLW5leHQvcGFnZXMvYmxvZy1wb3N0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcImNvbXBvbmVudHMvYmxvZy9QYWdlXCI7XG5pbXBvcnQgUGFnZVByZXZpZXcgZnJvbSBcImNvbXBvbmVudHMvYmxvZy9QYWdlUHJldmlld1wiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCJ1dGlscy9kYXRlXCI7XG5cbmltcG9ydCBDT05GSUcgZnJvbSBcImJsb2cvZGlzdC9pbmRleC5qc29uXCI7XG5pbXBvcnQgU1VNTUFSWV9KU09OIGZyb20gXCJibG9nL2Rpc3Qvc3VtbWFyeS5qc29uXCI7XG5cbmNvbnN0IGdldFBhZ2VKc29uID0gcm91dGVyID0+IHtcbiAgbGV0IHBhZ2VKc29uID0ge307XG4gIGlmIChyb3V0ZXIuYXNQYXRoKSB7XG4gICAgcGFnZUpzb24gPSByZXF1aXJlKGAuLi8uLi9ibG9nL2Rpc3Qke3JvdXRlci5hc1BhdGhcbiAgICAgIC5zcGxpdChcIi9hcnRpY2xlXCIpXG4gICAgICAuam9pbihcIlwiKX0uanNvbmApO1xuICB9XG4gIHJldHVybiBwYWdlSnNvbjtcbn07XG5jb25zdCBJbmRleCA9IHByb3BzID0+IHtcbiAgY29uc3QgcGFnZUpzb24gPSBnZXRQYWdlSnNvbihwcm9wcy5yb3V0ZXIpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuY29udGVudCBhIHtcbiAgICAgICAgICBjb2xvcjogIzAzNjVhNTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlcixcbiAgICAgICAgYTpmb2N1cyB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgICB9XG4gICAgICAgIGNvZGUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgfVxuICAgICAgICBjb2RlOm5vdCguaGxqcykge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxQYWdlXG4gICAgICAgIHNpdGVUaXRsZT17YCR7Q09ORklHLnNpdGVUaXRsZX0gLSAke3BhZ2VKc29uLnRpdGxlfWB9XG4gICAgICAgIGhlcm9UaXRsZT17Q09ORklHLnNpdGVUaXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e0NPTkZJRy5kZXNjcmlwdGlvbn1cbiAgICAgICAgc3R5bGVzaGVldHM9e0NPTkZJRy5zdHlsZXNoZWV0c31cbiAgICAgICAgdG9wTGlua3M9e0NPTkZJRy50b3BMaW5rc31cbiAgICAgICAgYmFja2dyb3VuZENsYXNzPXtDT05GSUcuYmFja2dyb3VuZENsYXNzfVxuICAgICAgICBib2R5PXtCb2R5KHBhZ2VKc29uKX1cbiAgICAgICAgY29weXJpZ2h0PXtDT05GSUcuY29weXJpZ2h0fVxuICAgICAgICBzaXRlSWQ9e0NPTkZJRy5zaXRlSWR9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gQm9keShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjZW50ZXIgbXc2IHBhMyBwYTQtbnNcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtdDAgbGgtdGl0bGVcIj57cHJvcHMudGl0bGV9PC9oMT5cbiAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy5ib2R5SHRtbCB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEluZGV4KTtcbiJdfQ== */\n/*@ sourceURL=/Users/huahua/Documents/lian/react/hello-next/pages/blog-post/index.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_blog_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    siteTitle: "".concat(_blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.siteTitle, " - ").concat(pageJson.title),
    heroTitle: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.siteTitle,
    description: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.description,
    stylesheets: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.stylesheets,
    topLinks: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.topLinks,
    backgroundClass: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.backgroundClass,
    body: Body(pageJson),
    copyright: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.copyright,
    siteId: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.siteId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
};

function Body(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content center mw6 pa3 pa4-ns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "mt0 lh-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: props.bodyHtml
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Index));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/blog-post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/_webpack@4.20.2@webpack/buildin/harmony-module.js */ "./node_modules/_webpack@4.20.2@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=blog-post.js.b8a24ca7a6c6eddf7fc3.hot-update.js.map