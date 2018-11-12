webpackHotUpdate("static/development/pages/cartoon.js",{

/***/ "./src/utils/fetch.js":
/*!****************************!*\
  !*** ./src/utils/fetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.0.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ "./src/utils/log.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_log__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./src/utils/constant.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/_axios@0.18.0@axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var BASE_URL = _constant__WEBPACK_IMPORTED_MODULE_2__["default"].BASE_URL,
    RESPONSE_OK = _constant__WEBPACK_IMPORTED_MODULE_2__["default"].RESPONSE_OK;
_log__WEBPACK_IMPORTED_MODULE_1___default.a.log(BASE_URL);

var Ajax = function Ajax(_ref) {
  var method = _ref.method,
      url = _ref.url,
      data = _ref.data;
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
      var token, headers;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = BASE_URL + url;
              token = "NONE-TOKEN";
              headers = {
                Authorization: token
              };
              axios__WEBPACK_IMPORTED_MODULE_3___default()({
                method: method,
                url: url,
                data: data,
                timeout: 2000,
                headers: headers
              }).then(function (res) {
                if (res.status === 200 && res.data && res.data.code === RESPONSE_OK) {
                  resolve(res.data);
                } else if (res.status === 200 && res.data && res.data.code !== RESPONSE_OK) {
                  var err = {
                    errCode: res.data.code,
                    errMsg: res.data.msg
                  };
                  reject(err);
                } else {
                  var _err = {
                    errCode: -1,
                    errMsg: "请求失败"
                  };
                  reject(_err);
                }
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }()).catch(function (error) {
    var err = {
      errCode: -1,
      errMsg: "请求失败"
    };
    reject(err);
  });
};

var get = function get(url, data) {
  url = url + "?" + Object.keys(data).map(function (k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
  }).join("&");
  return Ajax({
    url: url,
    method: "get"
  });
};

var post = function post(url, data) {
  return Ajax({
    url: url,
    data: data,
    method: "post"
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  post: post
});

/***/ })

})
//# sourceMappingURL=cartoon.js.4c54cb89a2743346000f.hot-update.js.map