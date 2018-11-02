webpackHotUpdate("static/development/pages/article.js",{

/***/ "./src/utils/content.js":
/*!******************************!*\
  !*** ./src/utils/content.js ***!
  \******************************/
/*! exports provided: makeUrl, filterPosts, completeJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeUrl", function() { return makeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterPosts", function() { return filterPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeJson", function() { return completeJson; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/_path-browserify@0.0.0@path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);


var makeUrl = function makeUrl(article) {
  var url = "/article".concat(article.dir.split("blog/dist").join(""), "/").concat(article.base.split(".json").join(""));
  url = url.charAt(url.length - 1) !== "/" ? url : url.slice(0, -1);
  return url;
};

var completeJson = function completeJson(article) {
  return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(article.dir, article.base);
};

var filterPosts = function filterPosts(summaryJson) {
  return summaryJson && summaryJson.fileMap && Object.keys(summaryJson.fileMap).filter(function (file) {
    if (file.indexOf("blog/dist/post") === 0) {
      return true;
    }
  }).map(function (file) {
    return summaryJson.fileMap[file];
  }).sort(function (a, b) {
    var aDate = Date.parse(a.date);
    var bDate = Date.parse(b.date);
    return bDate > aDate ? 1 : bDate < aDate ? -1 : 0;
  });
};



/***/ })

})
//# sourceMappingURL=article.js.1d071fb02fc901a2e2a4.hot-update.js.map