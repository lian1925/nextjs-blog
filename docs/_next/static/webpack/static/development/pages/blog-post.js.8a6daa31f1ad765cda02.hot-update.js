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









var ReactMarkdown = __webpack_require__(/*! react-markdown */ "./node_modules/_react-markdown@4.0.3@react-markdown/lib/react-markdown.js");

var getPageJson = function getPageJson(router) {
  var pageJson = {};

  if (router.asPath) {
    var url = router.asPath.split("/article").join("");
    url = url.charAt(url.length - 1) !== "/" ? url : url.slice(0, -1);
    pageJson = __webpack_require__("./blog sync recursive ^\\.\\/dist.*\\.json$")("./dist".concat(url, ".json"));
  }

  return pageJson;
};

var Index = function Index(props) {
  var pageJson = getPageJson(props.router);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3954607902"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3954607902",
    css: ".content a{color:#0365a5;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px solid #dfdfdf;-webkit-transition:all 300ms ease;transition:all 300ms ease;}a:hover,a:focus{border-bottom-color:currentColor;}code{background-color:#eee;line-height:1;border-radius:2px;padding:1px;}code:not(.hljs){border:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWFodWEvRG9jdW1lbnRzL2xpYW4vcmVhY3QvaGVsbG8tbmV4dC9wYWdlcy9ibG9nLXBvc3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ5QixBQUd5QixBQU9tQixBQUdYLEFBTUEsY0FmRCxRQVVQLEFBTWhCLFdBVEEsR0FJb0Isa0JBQ04sVUFYb0IsRUFZbEMsOEJBWDRCLDREQUM1QiIsImZpbGUiOiIvVXNlcnMvaHVhaHVhL0RvY3VtZW50cy9saWFuL3JlYWN0L2hlbGxvLW5leHQvcGFnZXMvYmxvZy1wb3N0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcImNvbXBvbmVudHMvYmxvZy9QYWdlXCI7XG5pbXBvcnQgUGFnZVByZXZpZXcgZnJvbSBcImNvbXBvbmVudHMvYmxvZy9QYWdlUHJldmlld1wiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCJ1dGlscy9kYXRlXCI7XG5cbmltcG9ydCBDT05GSUcgZnJvbSBcImJsb2cvZGlzdC9pbmRleC5qc29uXCI7XG5pbXBvcnQgU1VNTUFSWV9KU09OIGZyb20gXCJibG9nL2Rpc3Qvc3VtbWFyeS5qc29uXCI7XG5jb25zdCBSZWFjdE1hcmtkb3duID0gcmVxdWlyZShcInJlYWN0LW1hcmtkb3duXCIpO1xuXG5jb25zdCBnZXRQYWdlSnNvbiA9IHJvdXRlciA9PiB7XG4gIGxldCBwYWdlSnNvbiA9IHt9O1xuICBpZiAocm91dGVyLmFzUGF0aCkge1xuICAgIGxldCB1cmwgPSByb3V0ZXIuYXNQYXRoLnNwbGl0KFwiL2FydGljbGVcIikuam9pbihcIlwiKTtcbiAgICB1cmwgPSB1cmwuY2hhckF0KHVybC5sZW5ndGggLSAxKSAhPT0gXCIvXCIgPyB1cmwgOiB1cmwuc2xpY2UoMCwgLTEpO1xuICAgIHBhZ2VKc29uID0gcmVxdWlyZShgLi4vLi4vYmxvZy9kaXN0JHt1cmx9Lmpzb25gKTtcbiAgfVxuICByZXR1cm4gcGFnZUpzb247XG59O1xuY29uc3QgSW5kZXggPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHBhZ2VKc29uID0gZ2V0UGFnZUpzb24ocHJvcHMucm91dGVyKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmNvbnRlbnQgYSB7XG4gICAgICAgICAgY29sb3I6ICMwMzY1YTU7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIsXG4gICAgICAgIGE6Zm9jdXMge1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICAgIH1cbiAgICAgICAgY29kZTpub3QoLmhsanMpIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8UGFnZVxuICAgICAgICBzaXRlVGl0bGU9e2Ake0NPTkZJRy5zaXRlVGl0bGV9IC0gJHtwYWdlSnNvbi50aXRsZX1gfVxuICAgICAgICBoZXJvVGl0bGU9e0NPTkZJRy5zaXRlVGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtDT05GSUcuZGVzY3JpcHRpb259XG4gICAgICAgIHN0eWxlc2hlZXRzPXtDT05GSUcuc3R5bGVzaGVldHN9XG4gICAgICAgIHRvcExpbmtzPXtDT05GSUcudG9wTGlua3N9XG4gICAgICAgIGJhY2tncm91bmRDbGFzcz17Q09ORklHLmJhY2tncm91bmRDbGFzc31cbiAgICAgICAgYm9keT17Qm9keShwYWdlSnNvbil9XG4gICAgICAgIGNvcHlyaWdodD17Q09ORklHLmNvcHlyaWdodH1cbiAgICAgICAgc2l0ZUlkPXtDT05GSUcuc2l0ZUlkfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIEJvZHkocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgY2VudGVyIG13NiBwYTMgcGE0LW5zXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibXQwIGxoLXRpdGxlXCI+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMuYm9keUh0bWwgfX0gLz5cbiAgICAgIHsvKiA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Byb3BzLmJvZHlDb250ZW50fSAvPiwgKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXgpO1xuIl19 */\n/*@ sourceURL=/Users/huahua/Documents/lian/react/hello-next/pages/blog-post/index.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_blog_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    siteTitle: "".concat(_blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.siteTitle, " - ").concat(pageJson.title),
    heroTitle: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.siteTitle,
    description: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.description,
    stylesheets: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.stylesheets,
    topLinks: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.topLinks,
    backgroundClass: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.backgroundClass,
    body: Body(pageJson),
    copyright: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.copyright,
    siteId: _blog_dist_index_json__WEBPACK_IMPORTED_MODULE_6__.siteId
  }));
};

function Body(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content center mw6 pa3 pa4-ns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "mt0 lh-title"
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: props.bodyHtml
    }
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
//# sourceMappingURL=blog-post.js.8a6daa31f1ad765cda02.hot-update.js.map