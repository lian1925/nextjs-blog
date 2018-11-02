webpackHotUpdate("static/development/pages/blog-post.js",{

/***/ "./blog sync recursive ^\\.\\/dist.*\\.json$":
/*!**************************************!*\
  !*** ./blog sync ^\.\/dist.*\.json$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dist/index.json": "./blog/dist/index.json",
	"./dist/post/2018/one.json": "./blog/dist/post/2018/one.json",
	"./dist/post/2018/three.json": "./blog/dist/post/2018/three.json",
	"./dist/post/2018/two.json": "./blog/dist/post/2018/two.json",
	"./dist/summary.json": "./blog/dist/summary.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./blog sync recursive ^\\.\\/dist.*\\.json$";

/***/ }),

/***/ "./blog/dist/post/2018/three.json":
/*!****************************************!*\
  !*** ./blog/dist/post/2018/three.json ***!
  \****************************************/
/*! exports provided: title, date, tag, bodyContent, bodyHtml, preview, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"title":"软件工程师生存指南","date":"2018-10-12T00:00:00.000Z","tag":["工作"],"bodyContent":"1 故事名称\n\n2 计划\n每天创作一个故事，两天出版一个故事\n\n3 主角\n程序员：学历高，兢兢业业的上班族\n狗： 萌物\n直播男：不爱拘束，无固定工作，爱折腾，自制力差，尝试新事物，但容易放弃\n神秘女：\n\n4 故事卖点\n\n5 分工与准备\n构思：lian\n漫画：kk\n\n第一次任务 (2天)\nkk: 塑造主角的漫画形象\n构思： 场景，主角性格，3-5小故事\n\n第一次出版 (11.06)","bodyHtml":"<p>1 故事名称</p>\n<p>2 计划\n每天创作一个故事，两天出版一个故事</p>\n<p>3 主角\n程序员：学历高，兢兢业业的上班族\n狗： 萌物\n直播男：不爱拘束，无固定工作，爱折腾，自制力差，尝试新事物，但容易放弃\n神秘女：</p>\n<p>4 故事卖点</p>\n<p>5 分工与准备\n构思：lian\n漫画：kk</p>\n<p>第一次任务 (2天)\nkk: 塑造主角的漫画形象\n构思： 场景，主角性格，3-5小故事</p>\n<p>第一次出版 (11.06)</p>\n","preview":"1 故事名称\n\n2 计划\n每天创作一个故事，两天出版一个故事\n\n3 主角\n程序员：学历高，兢兢业业的上班族\n狗： 萌物\n直播男：不爱拘束，无固定工作，爱折腾，自制力差，尝试新事物，但容易放弃\n神秘女：\n\n4","dir":"blog/dist/post/2018","base":"three.json","ext":".json","sourceBase":"three.md","sourceExt":".md"};

/***/ }),

/***/ "./blog/dist/summary.json":
/*!********************************!*\
  !*** ./blog/dist/summary.json ***!
  \********************************/
/*! exports provided: fileMap, sourceFileArray, default */
/***/ (function(module) {

module.exports = {"fileMap":{"blog/dist/post/2018/two.json":{"title":"two","date":"2018-10-12T00:00:00.000Z","tag":["收集"],"preview":"生活","dir":"blog/dist/post/2018","base":"two.json","ext":".json","sourceBase":"two.md","sourceExt":".md"},"blog/dist/index.json":{"siteTitle":"小小的花园","description":"种子，松土，浇水，发芽，开花，结果","topLinks":[{"text":"Blog","href":"/article"},{"text":"Github","href":"/"}],"copyright":"Lian","stylesheets":["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],"backgroundClass":"bg-dark-gray","siteId":"","dir":"blog/dist","base":"index.json","ext":".json","sourceBase":"index.md","sourceExt":".md"},"blog/dist/post/2018/one.json":{"title":"软件工程师生存指南","date":"2018-10-12T00:00:00.000Z","tag":["工作"],"preview":"","dir":"blog/dist/post/2018","base":"one.json","ext":".json","sourceBase":"one.md","sourceExt":".md"},"blog/dist/post/2018/three.json":{"title":"软件工程师生存指南","date":"2018-10-12T00:00:00.000Z","tag":["工作"],"preview":"1 故事名称\n\n2 计划\n每天创作一个故事，两天出版一个故事\n\n3 主角\n程序员：学历高，兢兢业业的上班族\n狗： 萌物\n直播男：不爱拘束，无固定工作，爱折腾，自制力差，尝试新事物，但容易放弃\n神秘女：\n\n4","dir":"blog/dist/post/2018","base":"three.json","ext":".json","sourceBase":"three.md","sourceExt":".md"}},"sourceFileArray":["blog/article/index.md","blog/article/post/2018/one.md","blog/article/post/2018/three.md","blog/article/post/2018/two.md"]};

/***/ })

})
//# sourceMappingURL=blog-post.js.a204864f771d5d61691e.hot-update.js.map