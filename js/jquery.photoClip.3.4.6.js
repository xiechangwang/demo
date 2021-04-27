/*!
 * PhotoClip - 涓€娆炬墜鍔块┍鍔ㄧ殑瑁佸浘鎻掍欢
 * @version v3.4.6
 * @author baijunjie
 * @license MIT
 * 
 * git - https://github.com/baijunjie/PhotoClip.js.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("hammerjs"), require("iscroll/build/iscroll-zoom"), require("lrz"));
	else if(typeof define === 'function' && define.amd)
		define(["hammerjs", "iscroll", "lrz"], factory);
	else if(typeof exports === 'object')
		exports["PhotoClip"] = factory(require("hammerjs"), require("iscroll/build/iscroll-zoom"), require("lrz"));
	else
		root["PhotoClip"] = factory(root["Hammer"], root["IScroll"], root["lrz"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  // 鍒ゆ柇瀵硅薄鏄惁涓烘暟缁�
  module.exports = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  // 鍒ゆ柇鏄惁涓轰竴涓璞�
  module.exports = function (obj) {
    return _typeof(obj) === 'object';
  };
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  // 鍒ゆ柇鏄惁涓烘暟瀛楃被鍨�
  module.exports = function (num) {
    return typeof num === 'number';
  };
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  /**
   * 璁╅殣钘忓厓绱犳纭墽琛岀▼搴忥紙IE9鍙婁互涓婃祻瑙堝櫒锛�
   * @param elems  {DOM|Array} DOM鍏冪礌鎴栬€匘OM鍏冪礌缁勬垚鐨勬暟缁�
   * @param func   {Function}  闇€瑕佹墽琛岀殑绋嬪簭鍑芥暟
   * @param target {Object}    鎵ц绋嬪簭鏃跺嚱鏁颁腑 this 鐨勬寚鍚�
   */
  var defaultDisplayMap = {};

  module.exports = function (elems, func, target) {
    if (_typeof(elems) !== 'object') {
      elems = [];
    }

    if (typeof elems.length === 'undefined') {
      elems = [elems];
    }

    var hideElems = [],
        hideElemsDisplay = [];

    for (var i = 0, elem; elem = elems[i++];) {
      while (elem instanceof HTMLElement) {
        var nodeName = elem.nodeName;

        if (!elem.getClientRects().length) {
          hideElems.push(elem);
          hideElemsDisplay.push(elem.style.display);
          var display = defaultDisplayMap[nodeName];

          if (!display) {
            var temp = document.createElement(nodeName);
            document.body.appendChild(temp);
            display = window.getComputedStyle(temp).display;
            temp.parentNode.removeChild(temp);
            if (display === 'none') display = 'block';
            defaultDisplayMap[nodeName] = display;
          }

          elem.style.display = display;
        }

        if (nodeName === 'BODY') break;
        elem = elem.parentNode;
      }
    }

    if (typeof func === 'function') func.call(target || this);
    var l = hideElems.length;

    while (l--) {
      hideElems.pop().style.display = hideElemsDisplay.pop();
    }
  };
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(5), __webpack_require__(6), __webpack_require__(7), __webpack_require__(8), __webpack_require__(9), __webpack_require__(10), __webpack_require__(2), __webpack_require__(0), __webpack_require__(14), __webpack_require__(15), __webpack_require__(16), __webpack_require__(3), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19), __webpack_require__(20), __webpack_require__(22)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _hammerjs, _iscrollZoom, _lrz, _bind, _destroy2, _extend, _isNumber, _isArray, _isPercent, _createElement, _removeElement, _hideAction, _support, _css, _attr, _$, utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _hammerjs = _interopRequireDefault(_hammerjs);
  _iscrollZoom = _interopRequireDefault(_iscrollZoom);
  _lrz = _interopRequireDefault(_lrz);
  _bind = _interopRequireDefault(_bind);
  _destroy2 = _interopRequireDefault(_destroy2);
  _extend = _interopRequireDefault(_extend);
  _isNumber = _interopRequireDefault(_isNumber);
  _isArray = _interopRequireDefault(_isArray);
  _isPercent = _interopRequireDefault(_isPercent);
  _createElement = _interopRequireDefault(_createElement);
  _removeElement = _interopRequireDefault(_removeElement);
  _hideAction = _interopRequireDefault(_hideAction);
  _support = _interopRequireDefault(_support);
  _css = _interopRequireDefault(_css);
  _attr = _interopRequireDefault(_attr);
  _$ = _interopRequireDefault(_$);
  utils = _interopRequireWildcard(utils);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var is_mobile = !!navigator.userAgent.match(/mobile/i),
      is_android = !!navigator.userAgent.match(/android/i),
      // 娴嬭瘯娴忚鍣ㄦ槸鍚︽敮鎸� Transition 鍔ㄧ敾锛屼互鍙婃敮鎸佺殑鍓嶇紑
  supportTransition = (0, _support.default)('transition'),
      prefix = (0, _support.default)('transform'),
      noop = function noop() {};

  var defaultOptions = {
    size: [100, 100],
    adaptive: '',
    outputSize: [0, 0],
    outputType: 'jpg',
    outputQuality: .8,
    maxZoom: 1,
    rotateFree: !is_android,
    view: '',
    file: '',
    ok: '',
    img: '',
    loadStart: noop,
    loadComplete: noop,
    loadError: noop,
    done: noop,
    fail: noop,
    lrzOption: {
      width: is_android ? 1000 : undefined,
      height: is_android ? 1000 : undefined,
      quality: .7
    },
    style: {
      maskColor: 'rgba(0,0,0,.5)',
      maskBorder: '2px dashed #ddd',
      jpgFillColor: '#fff'
    },
    errorMsg: {
      noSupport: '鎮ㄧ殑娴忚鍣ㄧ増鏈繃浜庨檲鏃э紝鏃犳硶鏀寔瑁佸浘鍔熻兘锛岃鏇存崲鏂扮殑娴忚鍣紒',
      imgError: '涓嶆敮鎸佽鍥剧墖鏍煎紡锛岃閫夋嫨甯歌鏍煎紡鐨勫浘鐗囨枃浠讹紒',
      imgHandleError: '鍥剧墖澶勭悊澶辫触锛佽鏇存崲鍏跺畠鍥剧墖灏濊瘯銆�',
      imgLoadError: '鍥剧墖璇诲彇澶辫触锛佽鏇存崲鍏跺畠鍥剧墖灏濊瘯銆�',
      noImg: '娌℃湁鍙鍓殑鍥剧墖锛�',
      clipError: '鎴浘澶辫触锛佸綋鍓嶅浘鐗囨簮鏂囦欢鍙兘瀛樺湪璺ㄥ煙闂锛岃纭繚鍥剧墖涓庡簲鐢ㄥ悓婧愩€傚鏋滄偍鏄湪鏈湴鐜涓嬫墽琛屾湰绋嬪簭锛岃鏇存崲鑷虫湇鍔″櫒鐜銆�'
    }
  };

  var PhotoClip =
  /*#__PURE__*/
  function () {
    function PhotoClip(container, options) {
      _classCallCheck(this, PhotoClip);

      container = (0, _$.default)(container); // 鑾峰彇瀹瑰櫒

      if (container && container.length) {
        this._$container = container[0];
      } else {
        return;
      }

      this._options = (0, _extend.default)(true, {}, defaultOptions, options);

      if (prefix === undefined) {
        this._options.errorMsg.noSupport && alert(this._options.errorMsg.noSupport);
      }

      this._init();
    }

    _createClass(PhotoClip, [{
      key: "_init",
      value: function _init() {
        var _this = this;

        var options = this._options; // options 棰勮

        if ((0, _isNumber.default)(options.size)) {
          options.size = [options.size, options.size];
        } else if ((0, _isArray.default)(options.size)) {
          if (!(0, _isNumber.default)(options.size[0]) || options.size[0] <= 0) options.size[0] = defaultOptions.size[0];
          if (!(0, _isNumber.default)(options.size[1]) || options.size[1] <= 0) options.size[1] = defaultOptions.size[1];
        } else {
          options.size = (0, _extend.default)({}, defaultOptions.size);
        }

        if ((0, _isNumber.default)(options.outputSize)) {
          options.outputSize = [options.outputSize, 0];
        } else if ((0, _isArray.default)(options.outputSize)) {
          if (!(0, _isNumber.default)(options.outputSize[0]) || options.outputSize[0] < 0) options.outputSize[0] = defaultOptions.outputSize[0];
          if (!(0, _isNumber.default)(options.outputSize[1]) || options.outputSize[1] < 0) options.outputSize[1] = defaultOptions.outputSize[1];
        } else {
          options.outputSize = (0, _extend.default)({}, defaultOptions.outputSize);
        }

        if (options.outputType === 'jpg') {
          options.outputType = 'image/jpeg';
        } else {
          // 濡傛灉涓嶆槸 jpg锛屽垯鍏ㄩ儴鎸� png 鏉ュ寰�
          options.outputType = 'image/png';
        } // 鍙橀噺鍒濆鍖�


        if ((0, _isArray.default)(options.adaptive)) {
          this._widthIsPercent = options.adaptive[0] && (0, _isPercent.default)(options.adaptive[0]) ? options.adaptive[0] : false;
          this._heightIsPercent = options.adaptive[1] && (0, _isPercent.default)(options.adaptive[1]) ? options.adaptive[1] : false;
        }

        this._outputWidth = options.outputSize[0];
        this._outputHeight = options.outputSize[1];
        this._canvas = document.createElement('canvas'); // 鍥剧墖瑁佸壀鐢ㄥ埌鐨勭敾甯�

        this._iScroll = null; // 鍥剧墖鐨剆croll瀵硅薄锛屽寘鍚浘鐗囩殑浣嶇疆涓庣缉鏀句俊鎭�

        this._hammerManager = null; // hammer 绠＄悊瀵硅薄

        this._clipWidth = 0;
        this._clipHeight = 0;
        this._clipSizeRatio = 1; // 鎴彇妗嗗楂樻瘮

        this._$img = null; // 鍥剧墖鐨凞OM瀵硅薄

        this._imgLoaded = false; // 鍥剧墖鏄惁宸茬粡鍔犺浇瀹屾垚

        this._containerWidth = 0;
        this._containerHeight = 0;
        this._viewList = null; // 鏈€缁堟埅鍥惧悗鍛堢幇鐨勮鍥惧鍣ㄧ殑DOM鏁扮粍

        this._fileList = null; // file 鎺т欢鐨凞OM鏁扮粍

        this._okList = null; // 鎴浘鎸夐挳鐨凞OM鏁扮粍

        this._$mask = null;
        this._$mask_left = null;
        this._$mask_right = null;
        this._$mask_right = null;
        this._$mask_bottom = null;
        this._$clip_frame = null;
        this._$clipLayer = null; // 瑁佸壀灞傦紝鍖呭惈绉诲姩灞�

        this._$moveLayer = null; // 绉诲姩灞傦紝鍖呭惈鏃嬭浆灞�

        this._$rotateLayer = null; // 鏃嬭浆灞�

        this._moveLayerWidth = 0; // 绉诲姩灞傜殑瀹藉害(涓嶈窡闅弒cale鍙戠敓鍙樺寲)

        this._moveLayerHeight = 0; // 绉诲姩灞傜殑楂樺害(涓嶈窡闅弒cale鍙戠敓鍙樺寲)

        this._moveLayerPaddingLeft = 0; // 褰撳浘鐗囧搴﹀皬浜庤鍓瀹藉害鏃讹紝绉诲姩灞傜殑琛ュ伩宸﹁竟璺�(涓嶈窡闅弒cale鍙戠敓鍙樺寲)

        this._moveLayerPaddingTop = 0; // 褰撳浘鐗囬珮搴﹀皬浜庤鍓楂樺害鏃讹紝绉诲姩灞傜殑琛ュ伩椤惰竟璺�(涓嶈窡闅弒cale鍙戠敓鍙樺寲)

        this._atRotation = false; // 鏃嬭浆灞傛槸鍚︽鍦ㄦ棆杞腑

        this._rotateLayerWidth = 0; // 鏃嬭浆灞傛墍鍛堢幇鐭╁舰鐨勫搴�(涓嶈窡闅弒cale鍙戠敓鍙樺寲)

        this._rotateLayerHeight = 0; // 鏃嬭浆灞傛墍鍛堢幇鐭╁舰鐨勯珮搴�(涓嶈窡闅弒cale鍙戠敓鍙樺寲)

        this._rotateLayerX = 0; // 鏃嬭浆灞傜殑褰撳墠X鍧愭爣(涓嶈窡闅弒cale鍙戠敓鍙樺寲)

        this._rotateLayerY = 0; // 鏃嬭浆灞傜殑褰撳墠Y鍧愭爣(涓嶈窡闅弒cale鍙戠敓鍙樺寲)

        this._rotateLayerOriginX = 0; // 鏃嬭浆灞傜殑鏃嬭浆鍙傝€冪偣X(涓嶈窡闅弒cale鍙戠敓鍙樺寲)

        this._rotateLayerOriginY = 0; // 鏃嬭浆灞傜殑鏃嬭浆鍙傝€冪偣Y(涓嶈窡闅弒cale鍙戠敓鍙樺寲)

        this._curAngle = 0; // 鏃嬭浆灞傜殑褰撳墠瑙掑害

        (0, _bind.default)(this, '_resetScroll', '_rotateCW90', '_fileOnChangeHandle', '_clipImg', '_resize', 'size', 'load', 'clear', 'rotate', 'scale', 'clip', 'destroy');

        this._initElements();

        this._initScroll();

        this._initRotationEvent();

        this._initFile();

        this._resize();

        window.addEventListener('resize', this._resize);

        if (this._okList = (0, _$.default)(options.ok)) {
          this._okList.forEach(function ($ok) {
            $ok.addEventListener('click', _this._clipImg);
          });
        }

        if (this._options.img) {
          this._lrzHandle(this._options.img);
        }
      }
    }, {
      key: "_initElements",
      value: function _initElements() {
        // 鍒濆鍖栧鍣�
        var $container = this._$container,
            style = $container.style,
            containerOriginStyle = {};
        containerOriginStyle['user-select'] = style['user-select'];
        containerOriginStyle['overflow'] = style['overflow'];
        containerOriginStyle['position'] = style['position'];
        this._containerOriginStyle = containerOriginStyle;
        (0, _css.default)($container, {
          'user-select': 'none',
          'overflow': 'hidden'
        });

        if ((0, _css.default)($container, 'position') === 'static') {
          (0, _css.default)($container, 'position', 'relative');
        } // 鍒涘缓瑁佸壀灞�


        this._$clipLayer = (0, _createElement.default)($container, 'photo-clip-layer', {
          'position': 'absolute',
          'left': '50%',
          'top': '50%'
        });
        this._$moveLayer = (0, _createElement.default)(this._$clipLayer, 'photo-clip-move-layer');
        this._$rotateLayer = (0, _createElement.default)(this._$moveLayer, 'photo-clip-rotate-layer'); // 鍒涘缓閬僵

        var $mask = this._$mask = (0, _createElement.default)($container, 'photo-clip-mask', {
          'position': 'absolute',
          'left': 0,
          'top': 0,
          'width': '100%',
          'height': '100%',
          'pointer-events': 'none'
        });
        var options = this._options,
            maskColor = options.style.maskColor,
            maskBorder = options.style.maskBorder;
        this._$mask_left = (0, _createElement.default)($mask, 'photo-clip-mask-left', {
          'position': 'absolute',
          'left': 0,
          'right': '50%',
          'top': '50%',
          'bottom': '50%',
          'width': 'auto',
          'background-color': maskColor
        });
        this._$mask_right = (0, _createElement.default)($mask, 'photo-clip-mask-right', {
          'position': 'absolute',
          'left': '50%',
          'right': 0,
          'top': '50%',
          'bottom': '50%',
          'background-color': maskColor
        });
        this._$mask_top = (0, _createElement.default)($mask, 'photo-clip-mask-top', {
          'position': 'absolute',
          'left': 0,
          'right': 0,
          'top': 0,
          'bottom': '50%',
          'background-color': maskColor
        });
        this._$mask_bottom = (0, _createElement.default)($mask, 'photo-clip-mask-bottom', {
          'position': 'absolute',
          'left': 0,
          'right': 0,
          'top': '50%',
          'bottom': 0,
          'background-color': maskColor
        }); // 鍒涘缓鎴彇妗�

        this._$clip_frame = (0, _createElement.default)($mask, 'photo-clip-area', {
          'border': maskBorder,
          'position': 'absolute',
          'left': '50%',
          'top': '50%'
        }); // 鍒濆鍖栬鍥惧鍣�

        this._viewList = (0, _$.default)(options.view);

        if (this._viewList) {
          var viewOriginStyleList = [];

          this._viewList.forEach(function ($view, i) {
            var style = $view.style,
                viewOriginStyle = {};
            viewOriginStyle['background-repeat'] = style['background-repeat'];
            viewOriginStyle['background-position'] = style['background-position'];
            viewOriginStyle['background-size'] = style['background-size'];
            viewOriginStyleList[i] = viewOriginStyle;
            (0, _css.default)($view, {
              'background-repeat': 'no-repeat',
              'background-position': 'center',
              'background-size': 'contain'
            });
          });

          this._viewOriginStyleList = viewOriginStyleList;
        }
      }
    }, {
      key: "_initScroll",
      value: function _initScroll() {
        var _this2 = this;

        this._iScroll = new _iscrollZoom.default(this._$clipLayer, {
          zoom: true,
          scrollX: true,
          scrollY: true,
          freeScroll: true,
          mouseWheel: true,
          disablePointer: true,
          // important to disable the pointer events that causes the issues
          disableTouch: false,
          // false if you want the slider to be usable with touch devices
          disableMouse: false,
          // false if you want the slider to be usable with a mouse (desktop)
          wheelAction: 'zoom',
          bounceTime: 300
        });

        this._iScroll.on('zoomEnd', function () {
          _this2._calcScale();

          _this2._resizeMoveLayer();

          _this2._refreshScroll();
        });
      } // 閲嶇疆 iScroll

    }, {
      key: "_resetScroll",
      value: function _resetScroll() {
        var iScroll = this._iScroll;

        this._calcScale();

        var scale = iScroll.scale = iScroll.options.startZoom;

        this._resizeMoveLayer(); // 閲嶇疆鏃嬭浆灞�


        this._rotateLayerX = 0;
        this._rotateLayerY = 0;
        this._curAngle = 0;
        setTransform(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, this._curAngle); // 鍒濆鍖栧眳涓�

        iScroll.scrollTo((this._clipWidth - this._moveLayerWidth * scale) * .5, (this._clipHeight - this._moveLayerHeight * scale) * .5);

        this._refreshScroll();
      } // 鍒锋柊 iScroll
      // duration 琛ㄧず绉诲姩灞傝秴鍑哄鍣ㄦ椂鐨勫浣嶅姩鐢绘寔缁椂闀�

    }, {
      key: "_refreshScroll",
      value: function _refreshScroll(duration) {
        duration = duration || 0;
        var iScroll = this._iScroll,
            scale = iScroll.scale,
            iScrollOptions = iScroll.options;
        var lastScale = Math.max(iScrollOptions.zoomMin, Math.min(iScrollOptions.zoomMax, scale));

        if (lastScale !== scale) {
          iScroll.zoom(lastScale, undefined, undefined, duration);
        }

        iScroll.refresh(duration);
      } // 璋冩暣绉诲姩灞�

    }, {
      key: "_resizeMoveLayer",
      value: function _resizeMoveLayer() {
        var iScroll = this._iScroll,
            iScrollOptions = iScroll.options,
            scale = Math.max(iScrollOptions.zoomMin, Math.min(iScrollOptions.zoomMax, iScroll.scale));
        var width = this._rotateLayerWidth,
            height = this._rotateLayerHeight,
            clipWidth = this._clipWidth / scale,
            clipHeight = this._clipHeight / scale,
            ltClipArea = false;

        if (clipWidth > width) {
          ltClipArea = true;
          var offset = clipWidth - width;
          width += offset * 2;
          iScroll.x += (this._moveLayerPaddingLeft - offset) * scale;
          this._moveLayerPaddingLeft = offset;
        } else {
          this._moveLayerPaddingLeft = 0;
        }

        if (clipHeight > height) {
          ltClipArea = true;

          var _offset = clipHeight - height;

          height += _offset * 2;
          iScroll.y += (this._moveLayerPaddingTop - _offset) * scale;
          this._moveLayerPaddingTop = _offset;
        } else {
          this._moveLayerPaddingTop = 0;
        }

        if (ltClipArea) {
          setTransform(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, this._curAngle);
          iScroll.scrollTo(iScroll.x, iScroll.y);
        }

        if (this._moveLayerWidth === width && this._moveLayerHeight === height) return;
        this._moveLayerWidth = width;
        this._moveLayerHeight = height;
        (0, _css.default)(this._$moveLayer, {
          'width': width,
          'height': height
        }); // 鍦ㄧЩ鍔ㄨ澶囦笂锛屽挨鍏舵槸Android璁惧锛屽綋涓轰竴涓厓绱犻噸缃簡瀹介珮鏃�
        // 璇ュ厓绱犵殑 offsetWidth/offsetHeight銆乧lientWidth/clientHeight 绛夊睘鎬у苟涓嶄細绔嬪嵆鏇存柊锛屽鑷寸浉鍏崇殑js绋嬪簭鍑虹幇閿欒
        // iscroll 鍦ㄥ埛鏂版柟娉曚腑姝ｆ槸浣跨敤浜� offsetWidth/offsetHeight 鏉ヨ幏鍙杝croller鍏冪礌($moveLayer)鐨勫楂�
        // 鍥犳闇€瑕佹墜鍔ㄥ皢鍏冪礌閲嶆柊娣诲姞杩涙枃妗ｏ紝杩娇娴忚鍣ㄥ己鍒舵洿鏂板厓绱犵殑瀹介珮

        this._$clipLayer.appendChild(this._$moveLayer);
      }
    }, {
      key: "_calcScale",
      value: function _calcScale() {
        var iScroll = this._iScroll,
            iScrollOptions = iScroll.options,
            width = this._rotateLayerWidth,
            height = this._rotateLayerHeight,
            maxZoom = this._options.maxZoom;

        if (width && height) {
          iScrollOptions.zoomMin = Math.min(1, utils.getScale(this._clipWidth, this._clipHeight, width, height));
          iScrollOptions.zoomMax = maxZoom;
          iScrollOptions.startZoom = Math.min(maxZoom, utils.getScale(this._containerWidth, this._containerHeight, width, height));
        } else {
          iScrollOptions.zoomMin = 1;
          iScrollOptions.zoomMax = 1;
          iScrollOptions.startZoom = 1;
        } // console.log('zoomMin', iScrollOptions.zoomMin);
        // console.log('zoomMax', iScrollOptions.zoomMax);
        // console.log('startZoom', iScrollOptions.startZoom);

      }
    }, {
      key: "_initRotationEvent",
      value: function _initRotationEvent() {
        var _this3 = this;

        if (is_mobile) {
          this._hammerManager = new _hammerjs.default.Manager(this._$moveLayer);

          this._hammerManager.add(new _hammerjs.default.Rotate());

          var rotateFree = this._options.rotateFree,
              bounceTime = this._iScroll.options.bounceTime;
          var startTouch, startAngle, curAngle;

          this._hammerManager.on('rotatestart', function (e) {
            if (_this3._atRotation) return;
            startTouch = true;

            if (rotateFree) {
              startAngle = (e.rotation - _this3._curAngle) % 360;

              _this3._rotateLayerRotateReady(e.center);
            } else {
              startAngle = e.rotation;
            }
          });

          this._hammerManager.on('rotatemove', function (e) {
            if (!startTouch) return;
            curAngle = e.rotation - startAngle;
            rotateFree && _this3._rotateLayerRotate(curAngle);
          });

          this._hammerManager.on('rotateend rotatecancel', function (e) {
            if (!startTouch) return;
            startTouch = false;

            if (!rotateFree) {
              curAngle %= 360;
              if (curAngle > 180) curAngle -= 360;else if (curAngle < -180) curAngle += 360;

              if (curAngle > 30) {
                _this3._rotateBy(90, bounceTime, e.center);
              } else if (curAngle < -30) {
                _this3._rotateBy(-90, bounceTime, e.center);
              }

              return;
            } // 鎺ヨ繎鏁�90搴︽柟鍚戞椂锛岃繘琛屾牎姝�


            var angle = curAngle % 360;
            if (angle < 0) angle += 360;

            if (angle < 10) {
              curAngle += -angle;
            } else if (angle > 80 && angle < 100) {
              curAngle += 90 - angle;
            } else if (angle > 170 && angle < 190) {
              curAngle += 180 - angle;
            } else if (angle > 260 && angle < 280) {
              curAngle += 270 - angle;
            } else if (angle > 350) {
              curAngle += 360 - angle;
            }

            _this3._rotateLayerRotateFinish(curAngle, bounceTime);
          });
        } else {
          this._$moveLayer.addEventListener('dblclick', this._rotateCW90);
        }
      }
    }, {
      key: "_rotateCW90",
      value: function _rotateCW90(e) {
        this._rotateBy(90, this._iScroll.options.bounceTime, {
          x: e.clientX,
          y: e.clientY
        });
      }
    }, {
      key: "_rotateBy",
      value: function _rotateBy(angle, duration, center) {
        this._rotateTo(this._curAngle + angle, duration, center);
      }
    }, {
      key: "_rotateTo",
      value: function _rotateTo(angle, duration, center) {
        if (this._atRotation) return;

        this._rotateLayerRotateReady(center); // 鏃嬭浆灞傛棆杞粨鏉�


        this._rotateLayerRotateFinish(angle, duration);
      } // 鏃嬭浆灞傛棆杞噯澶�

    }, {
      key: "_rotateLayerRotateReady",
      value: function _rotateLayerRotateReady(center) {
        var scale = this._iScroll.scale;
        var coord; // 鏃嬭浆鍙傝€冪偣鍦ㄧЩ鍔ㄥ眰涓殑鍧愭爣

        if (!center) {
          coord = utils.loaclToLoacl(this._$moveLayer, this._$clipLayer, this._clipWidth * .5, this._clipHeight * .5);
        } else {
          coord = utils.globalToLoacl(this._$moveLayer, center.x, center.y);
        } // 鐢变簬寰楀埌鐨勫潗鏍囨槸鍦ㄧ缉鏀惧悗鍧愭爣绯讳笂鐨勫潗鏍囷紝鍥犳闇€瑕侀櫎浠ョ缉鏀炬瘮渚�


        coord.x /= scale;
        coord.y /= scale; // 鏃嬭浆鍙傝€冪偣鐩稿浜庢棆杞眰闆朵綅锛堟棆杞眰鏃嬭浆鍓嶅乏涓婅锛夌殑鍧愭爣

        var coordBy0 = {
          x: coord.x - (this._rotateLayerX + this._moveLayerPaddingLeft),
          y: coord.y - (this._rotateLayerY + this._moveLayerPaddingTop)
        }; // 姹傚嚭鏃嬭浆灞傛棆杞墠鐨勬棆杞弬鑰冪偣
        // 杩欎釜鍙傝€冪偣灏辨槸鏃嬭浆涓績鐐规槧灏勫湪鏃嬭浆灞傚浘鐗囦笂鐨勫潗鏍�
        // 杩欎釜浣嶇疆琛ㄧず鏃嬭浆灞傛棆杞墠锛岃鐐规墍瀵瑰簲鐨勫潗鏍�

        var origin = utils.pointRotate(coordBy0, -this._curAngle);
        this._rotateLayerOriginX = origin.x;
        this._rotateLayerOriginY = origin.y; // 璁剧疆鍙傝€冪偣锛岀畻鍑烘柊鍙傝€冪偣浣滅敤涓嬬殑鏃嬭浆灞備綅绉伙紝鐒跺悗杩涜琛ュ樊

        var rect = this._$rotateLayer.getBoundingClientRect();

        setOrigin(this._$rotateLayer, this._rotateLayerOriginX, this._rotateLayerOriginY);

        var newRect = this._$rotateLayer.getBoundingClientRect();

        this._rotateLayerX += (rect.left - newRect.left) / scale;
        this._rotateLayerY += (rect.top - newRect.top) / scale;
        setTransform(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, this._curAngle);
      } // 鏃嬭浆灞傛棆杞�

    }, {
      key: "_rotateLayerRotate",
      value: function _rotateLayerRotate(angle) {
        setTransform(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, angle);
        this._curAngle = angle;
      } // 鏃嬭浆灞傛棆杞粨鏉�

    }, {
      key: "_rotateLayerRotateFinish",
      value: function _rotateLayerRotateFinish(angle, duration) {
        var _this4 = this;

        setTransform(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, angle);
        var iScroll = this._iScroll,
            scale = iScroll.scale,
            iScrollOptions = iScroll.options; // 鑾峰彇鏃嬭浆鍚庣殑鐭╁舰

        var rect = this._$rotateLayer.getBoundingClientRect(); // 鏇存柊鏃嬭浆灞傚綋鍓嶆墍鍛堢幇鐭╁舰鐨勫楂�


        this._rotateLayerWidth = rect.width / scale;
        this._rotateLayerHeight = rect.height / scale; // 褰撳弬鑰冪偣涓洪浂鏃讹紝鑾峰彇浣嶇Щ鍚庣殑鐭╁舰

        setOrigin(this._$rotateLayer, 0, 0);

        var rectByOrigin0 = this._$rotateLayer.getBoundingClientRect(); // 鑾峰彇鏃嬭浆鍓嶏紙闆跺害锛夌殑鐭╁舰


        setTransform(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, 0);

        var rectByAngle0 = this._$rotateLayer.getBoundingClientRect(); // 褰撳弬鑰冪偣涓洪浂鏃讹紝鏃嬭浆灞傛棆杞悗锛屽湪褰㈡垚鐨勬柊鐭╁舰涓紝鏃嬭浆灞傞浂浣嶏紙鏃嬭浆灞傛棆杞墠宸︿笂瑙掞級鐨勬柊鍧愭爣


        this._rotateLayerX = (rectByAngle0.left - rectByOrigin0.left) / scale;
        this._rotateLayerY = (rectByAngle0.top - rectByOrigin0.top) / scale;

        this._calcScale();

        this._resizeMoveLayer(); // 鑾峰彇绉诲姩灞傜殑鐭╁舰


        var moveLayerRect = this._$moveLayer.getBoundingClientRect(); // 姹傚嚭绉诲姩灞備笌鏃嬭浆灞備箣闂寸殑浣嶇疆鍋忕Щ
        // 鐢变簬鐩存帴搴旂敤鍦ㄧЩ鍔ㄥ眰锛屽洜姝や笉闇€瑕佹牴鎹缉鏀炬崲绠�
        // 娉ㄦ剰锛岃繖閲岀殑鍋忕Щ鏈夊彲鑳借繕鍖呭惈缂╂斁杩囬噺鏃跺鍑烘潵鐨勫亸绉�


        var offset = {
          x: rect.left - this._moveLayerPaddingLeft * scale - moveLayerRect.left,
          y: rect.top - this._moveLayerPaddingTop * scale - moveLayerRect.top
        };
        iScroll.scrollTo(iScroll.x + offset.x, iScroll.y + offset.y);

        this._refreshScroll(iScroll.options.bounceTime); // 鐢变簬 offset 鍙兘杩樺寘鍚缉鏀捐繃閲忔椂澶氬嚭鏉ョ殑鍋忕Щ
        // 鍥犳锛岃繖閲屽垽鏂槸鍚︾缉鏀捐繃閲�


        var lastScale = Math.max(iScrollOptions.zoomMin, Math.min(iScrollOptions.zoomMax, scale));

        if (lastScale !== scale) {
          // 褰撶缉鏀捐繃閲忔椂锛屽皢 offset 鎹㈢畻涓烘渶缁堢殑姝ｅ父姣斾緥瀵瑰簲鐨勫€�
          offset.x = offset.x / scale * lastScale;
          offset.y = offset.y / scale * lastScale;
        } // 鐢变簬鍙屾寚鏃嬭浆鏃朵篃浼撮殢鐫€缂╂斁锛屽洜姝よ繖閲屼唬鐮佹墽琛屽畬鍚庯紝灏嗕細鎵ц iscroll 鐨� _zoomEnd
        // 鑰岃鏂规硶浼氬熀浜� touchstart 鏃惰褰曠殑浣嶇疆閲嶆柊璁＄畻 x銆亂锛岃繖灏嗗鑷存墜鎸囩寮€灞忓箷鍚庯紝绉诲姩灞傚張浼氬悜鍥炵Щ鍔ㄤ竴娈佃窛绂�
        // 鎵€浠ヨ繖閲屼篃瑕佸皢 startX銆乻tartY 杩欎袱涓€艰繘琛岃ˉ宸紝鑰岃繖涓樊鍊煎繀椤绘槸鏈€缁堢殑姝ｅ父姣斾緥瀵瑰簲鐨勫€�


        iScroll.startX += offset.x;
        iScroll.startY += offset.y;

        if (angle !== this._curAngle && duration && (0, _isNumber.default)(duration) && supportTransition !== undefined) {
          // 璁＄畻鏃嬭浆灞傚弬鑰冪偣锛岃涓洪浂浣嶅墠鍚庣殑鍋忕Щ閲�
          offset = {
            x: (rectByOrigin0.left - rect.left) / scale,
            y: (rectByOrigin0.top - rect.top) / scale
          }; // 灏嗘棆杞弬鑰冪偣璁惧洖鍓嶅€硷紝鍚屾椂璋冩暣鍋忕Щ閲忥紝淇濊瘉瑙嗗浘浣嶇疆涓嶅彉锛屽噯澶囧紑濮嬪姩鐢�

          setOrigin(this._$rotateLayer, this._rotateLayerOriginX, this._rotateLayerOriginY);
          var targetX = this._rotateLayerX + this._moveLayerPaddingLeft + offset.x,
              targetY = this._rotateLayerY + this._moveLayerPaddingTop + offset.y;
          setTransform(this._$rotateLayer, targetX, targetY, this._curAngle); // 寮€濮嬫棆杞�

          this._atRotation = true;
          setTransition(this._$rotateLayer, targetX, targetY, angle, duration, function () {
            _this4._atRotation = false;

            _this4._rotateFinishUpdataElem(angle);
          });
        } else {
          this._rotateFinishUpdataElem(angle);
        }
      } // 鏃嬭浆缁撴潫鏇存柊鐩稿叧鍏冪礌

    }, {
      key: "_rotateFinishUpdataElem",
      value: function _rotateFinishUpdataElem(angle) {
        setOrigin(this._$rotateLayer, this._rotateLayerOriginX = 0, this._rotateLayerOriginY = 0);
        setTransform(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, this._curAngle = angle % 360);
      }
    }, {
      key: "_initFile",
      value: function _initFile() {
        var _this5 = this;

        var options = this._options;

        if (this._fileList = (0, _$.default)(options.file)) {
          this._fileList.forEach(function ($file) {
            // 绉诲姩绔鏋滆缃� 'accept'锛屼細浣跨浉鍐屾墦寮€缂撴參锛屽洜姝よ繖閲屽彧涓洪潪绉诲姩绔缃�
            if (!is_mobile) {
              (0, _attr.default)($file, 'accept', 'image/jpeg, image/x-png, image/png, image/gif');
            }

            $file.addEventListener('change', _this5._fileOnChangeHandle);
          });
        }
      }
    }, {
      key: "_fileOnChangeHandle",
      value: function _fileOnChangeHandle(e) {
        var files = e.target.files;

        if (files.length) {
          this._lrzHandle(files[0]);
        }
      }
    }, {
      key: "_lrzHandle",
      value: function _lrzHandle(src) {
        var _this6 = this;

        var options = this._options,
            errorMsg = options.errorMsg;

        if (_typeof(src) === 'object' && src.type && !/image\/\w+/.test(src.type)) {
          options.loadError.call(this, errorMsg.imgError);
          return false;
        }

        this._imgLoaded = false;
        options.loadStart.call(this, src);

        try {
          (0, _lrz.default)(src, options.lrzOption).then(function (rst) {
            // 澶勭悊鎴愬姛浼氭墽琛�
            _this6._clearImg();

            _this6._createImg(rst.base64);
          }).catch(function (err) {
            // 澶勭悊澶辫触浼氭墽琛�
            options.loadError.call(_this6, errorMsg.imgHandleError, err);
          });
        } catch (err) {
          options.loadError.call(this, errorMsg.imgHandleError, err);
          throw err;
        }
      }
    }, {
      key: "_clearImg",
      value: function _clearImg() {
        if (!this._$img) return; // 鍒犻櫎鏃х殑鍥剧墖浠ラ噴鏀惧唴瀛橈紝闃叉IOS璁惧鐨� webview 宕╂簝

        this._$img.onload = null;
        this._$img.onerror = null;
        (0, _removeElement.default)(this._$img);
        this._$img = null;
        this._imgLoaded = false;
      }
    }, {
      key: "_createImg",
      value: function _createImg(src) {
        var _this7 = this;

        var options = this._options,
            errorMsg = options.errorMsg;
        this._$img = new Image();
        (0, _css.default)(this._$img, {
          'display': 'block',
          'user-select': 'none',
          'pointer-events': 'none'
        });

        this._$img.onload = function (e) {
          var img = e.target;
          _this7._imgLoaded = true;
          options.loadComplete.call(_this7, img);

          _this7._$rotateLayer.appendChild(img);

          _this7._rotateLayerWidth = img.naturalWidth;
          _this7._rotateLayerHeight = img.naturalHeight;
          (0, _css.default)(_this7._$rotateLayer, {
            'width': _this7._rotateLayerWidth,
            'height': _this7._rotateLayerHeight
          });
          (0, _hideAction.default)([img, _this7._$moveLayer], _this7._resetScroll);
        };

        this._$img.onerror = function (e) {
          options.loadError.call(_this7, errorMsg.imgLoadError, e);
        };

        (0, _attr.default)(this._$img, 'src', src);
      }
    }, {
      key: "_clipImg",
      value: function _clipImg() {
        var options = this._options,
            errorMsg = options.errorMsg;

        if (!this._imgLoaded) {
          options.fail.call(this, errorMsg.noImg);
          return;
        }

        var local = utils.loaclToLoacl(this._$moveLayer, this._$clipLayer),
            scale = this._iScroll.scale,
            ctx = this._canvas.getContext('2d');

        var scaleX = 1,
            scaleY = 1;

        if (this._outputWidth || this._outputHeight) {
          this._canvas.width = this._outputWidth;
          this._canvas.height = this._outputHeight;
          scaleX = this._outputWidth / this._clipWidth * scale;
          scaleY = this._outputHeight / this._clipHeight * scale;
        } else {
          this._canvas.width = this._clipWidth / scale;
          this._canvas.height = this._clipHeight / scale;
        }

        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        ctx.fillStyle = options.outputType === 'image/png' ? 'transparent' : options.style.jpgFillColor;
        ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        ctx.save();
        ctx.scale(scaleX, scaleY);
        ctx.translate(this._rotateLayerX + this._moveLayerPaddingLeft - local.x / scale, this._rotateLayerY + this._moveLayerPaddingTop - local.y / scale);
        ctx.rotate(this._curAngle * Math.PI / 180);
        ctx.drawImage(this._$img, 0, 0);
        ctx.restore();

        try {
          var dataURL = this._canvas.toDataURL(options.outputType, options.outputQuality);

          if (this._viewList) {
            this._viewList.forEach(function ($view) {
              (0, _css.default)($view, 'background-image', "url(".concat(dataURL, ")"));
            });
          }

          options.done.call(this, dataURL);
          return dataURL;
        } catch (err) {
          options.fail.call(this, errorMsg.clipError);
          throw err;
        }
      }
    }, {
      key: "_resize",
      value: function _resize(width, height) {
        (0, _hideAction.default)(this._$container, function () {
          this._containerWidth = this._$container.offsetWidth;
          this._containerHeight = this._$container.offsetHeight;
        }, this);
        var size = this._options.size,
            oldClipWidth = this._clipWidth,
            oldClipHeight = this._clipHeight;
        if ((0, _isNumber.default)(width)) size[0] = width;
        if ((0, _isNumber.default)(height)) size[1] = height;

        if (this._widthIsPercent || this._heightIsPercent) {
          var ratio = size[0] / size[1];

          if (this._widthIsPercent) {
            this._clipWidth = this._containerWidth / 100 * parseFloat(this._widthIsPercent);

            if (!this._heightIsPercent) {
              this._clipHeight = this._clipWidth / ratio;
            }
          }

          if (this._heightIsPercent) {
            this._clipHeight = this._containerHeight / 100 * parseFloat(this._heightIsPercent);

            if (!this._widthIsPercent) {
              this._clipWidth = this._clipHeight * ratio;
            }
          }
        } else {
          this._clipWidth = size[0];
          this._clipHeight = size[1];
        }

        var clipWidth = this._clipWidth,
            clipHeight = this._clipHeight;
        this._clipSizeRatio = clipWidth / clipHeight;

        if (this._outputWidth && !this._outputHeight) {
          this._outputHeight = this._outputWidth / this._clipSizeRatio;
        }

        if (this._outputHeight && !this._outputWidth) {
          this._outputWidth = this._outputHeight * this._clipSizeRatio;
        }

        (0, _css.default)(this._$clipLayer, {
          'width': clipWidth,
          'height': clipHeight,
          'margin-left': -clipWidth / 2,
          'margin-top': -clipHeight / 2
        });
        (0, _css.default)(this._$mask_left, {
          'margin-right': clipWidth / 2,
          'margin-top': -clipHeight / 2,
          'margin-bottom': -clipHeight / 2
        });
        (0, _css.default)(this._$mask_right, {
          'margin-left': clipWidth / 2,
          'margin-top': -clipHeight / 2,
          'margin-bottom': -clipHeight / 2
        });
        (0, _css.default)(this._$mask_top, {
          'margin-bottom': clipHeight / 2
        });
        (0, _css.default)(this._$mask_bottom, {
          'margin-top': clipHeight / 2
        });
        (0, _css.default)(this._$clip_frame, {
          'width': clipWidth,
          'height': clipHeight
        });
        (0, _css.default)(this._$clip_frame, prefix + 'transform', 'translate(-50%, -50%)');

        if (clipWidth !== oldClipWidth || clipHeight !== oldClipHeight) {
          this._calcScale();

          this._resizeMoveLayer();

          this._refreshScroll();

          var iScroll = this._iScroll,
              scale = iScroll.scale,
              offsetX = (clipWidth - oldClipWidth) * .5 * scale,
              offsetY = (clipHeight - oldClipHeight) * .5 * scale;
          iScroll.scrollBy(offsetX, offsetY);
        }
      }
      /**
       * 璁剧疆鎴彇妗嗙殑瀹介珮
       * 濡傛灉璁剧疆浜� adaptive 閫夐」锛屽垯璇ユ柟娉曚粎鐢ㄤ簬淇敼鎴彇妗嗙殑瀹介珮姣斾緥
       * @param  {Number} width  鎴彇妗嗙殑瀹藉害
       * @param  {Number} height 鎴彇妗嗙殑楂樺害
       * @return {PhotoClip}     杩斿洖 PhotoClip 鐨勫疄渚嬪璞�
       */

    }, {
      key: "size",
      value: function size(width, height) {
        this._resize(width, height);

        return this;
      }
      /**
       * 鍔犺浇涓€寮犲浘鐗�
       * @param  {String|Object} src 鍥剧墖鐨� url锛屾垨鑰呭浘鐗囩殑 file 鏂囦欢瀵硅薄
       * @return {PhotoClip}         杩斿洖 PhotoClip 鐨勫疄渚嬪璞�
       */

    }, {
      key: "load",
      value: function load(src) {
        this._lrzHandle(src);

        return this;
      }
      /**
       * 娓呴櫎褰撳墠鍥剧墖
       * @return {PhotoClip}  杩斿洖 PhotoClip 鐨勫疄渚嬪璞�
       */

    }, {
      key: "clear",
      value: function clear() {
        this._clearImg();

        this._resetScroll();

        if (this._fileList) {
          this._fileList.forEach(function ($file) {
            $file.value = '';
          });
        }

        return this;
      }
      /**
       * 鍥剧墖鏃嬭浆鍒版寚瀹氳搴�
       * @param  {Number} angle      鍙€夈€傛棆杞殑瑙掑害
       * @param  {Number} duration   鍙€夈€傛棆杞姩鐢荤殑鏃堕暱锛屽鏋滀负 0 鎴� false锛屽垯琛ㄧず娌℃湁杩囨浮鍔ㄧ敾
       * @return {PhotoClip|Number}  杩斿洖 PhotoClip 鐨勫疄渚嬪璞°€傚鏋滃弬鏁颁负绌猴紝鍒欒繑鍥炲綋鍓嶇殑鏃嬭浆瑙掑害
       */

    }, {
      key: "rotate",
      value: function rotate(angle, duration) {
        if (angle === undefined) return this._curAngle;

        this._rotateTo(angle, duration);

        return this;
      }
      /**
       * 鍥剧墖缂╂斁鍒版寚瀹氭瘮渚嬶紝濡傛灉瓒呭嚭缂╂斁鑼冨洿锛屽垯浼氳缂╂斁鍒板彲缂╂斁鏋侀檺
       * @param  {Number} zoom       鍙€夈€傜缉鏀炬瘮渚嬶紝鍙栧€煎湪 0 - 1 涔嬮棿
       * @param  {Number} duration   鍙€夈€傜缉鏀惧姩鐢荤殑鏃堕暱锛屽鏋滀负 0 鎴� false锛屽垯琛ㄧず娌℃湁杩囨浮鍔ㄧ敾
       * @return {PhotoClip|Number}  杩斿洖 PhotoClip 鐨勫疄渚嬪璞°€傚鏋滃弬鏁颁负绌猴紝鍒欒繑鍥炲綋鍓嶇殑缂╂斁姣斾緥
       */

    }, {
      key: "scale",
      value: function scale(zoom, duration) {
        if (zoom === undefined) return this._iScroll.scale;

        this._iScroll.zoom(zoom, undefined, undefined, duration);

        return this;
      }
      /**
       * 鎴浘
       * @return {String}  杩斿洖鎴彇鍚庡浘鐗囩殑 Base64 瀛楃涓�
       */

    }, {
      key: "clip",
      value: function clip() {
        return this._clipImg();
      }
      /**
       * 閿€姣�
       * @return {Undefined}  鏃犺繑鍥炲€�
       */

    }, {
      key: "destroy",
      value: function destroy() {
        var _this8 = this;

        window.removeEventListener('resize', this._resize);

        this._$container.removeChild(this._$clipLayer);

        this._$container.removeChild(this._$mask);

        (0, _css.default)(this._$container, this._containerOriginStyle);

        if (this._iScroll) {
          this._iScroll.destroy();
        }

        if (this._hammerManager) {
          this._hammerManager.off('rotatemove');

          this._hammerManager.off('rotateend');

          this._hammerManager.destroy();
        } else {
          this._$moveLayer.removeEventListener('dblclick', this._rotateCW90);
        }

        if (this._$img) {
          this._$img.onload = null;
          this._$img.onerror = null;
        }

        if (this._viewList) {
          this._viewList.forEach(function ($view, i) {
            (0, _css.default)($view, _this8._viewOriginStyleList[i]);
          });
        }

        if (this._fileList) {
          this._fileList.forEach(function ($file) {
            $file.removeEventListener('change', _this8._fileOnChangeHandle);
            $file.value = null;
          });
        }

        if (this._okList) {
          this._okList.forEach(function ($ok) {
            $ok.removeEventListener('click', _this8._clipImg);
          });
        }

        (0, _destroy2.default)(this);
      }
    }]);

    return PhotoClip;
  }();

  _exports.default = PhotoClip;
  ; // 璁剧疆鍙樻崲娉ㄥ唽鐐�

  function setOrigin($obj, originX, originY) {
    originX = (originX || 0).toFixed(2);
    originY = (originY || 0).toFixed(2);
    (0, _css.default)($obj, prefix + 'transform-origin', originX + 'px ' + originY + 'px');
  } // 璁剧疆鍙樻崲鍧愭爣涓庢棆杞搴�


  function setTransform($obj, x, y, angle) {
    // translate(x, y) 涓潗鏍囩殑灏忔暟鐐逛綅鏁拌繃澶氫細寮曞彂 bug
    // 鍥犳杩欓噷闇€瑕佷繚鐣欎袱浣嶅皬鏁�
    x = x.toFixed(2);
    y = y.toFixed(2);
    angle = angle.toFixed(2);
    (0, _css.default)($obj, prefix + 'transform', 'translateZ(0) translate(' + x + 'px,' + y + 'px) rotate(' + angle + 'deg)');
  } // 璁剧疆鍙樻崲鍔ㄧ敾


  function setTransition($obj, x, y, angle, dur, fn) {
    // 杩欓噷闇€瑕佸厛璇诲彇涔嬪墠璁剧疆濂界殑transform鏍峰紡锛屽己鍒舵祻瑙堝櫒灏嗚鏍峰紡鍊兼覆鏌撳埌鍏冪礌
    // 鍚﹀垯娴忚鍣ㄥ彲鑳藉嚭浜庢€ц兘鑰冭檻锛屽皢鏆傜紦鏍峰紡娓叉煋锛岀瓑鍒颁箣鍚庢墍鏈夋牱寮忚缃畬鎴愬悗鍐嶇粺涓€娓叉煋
    // 杩欐牱灏变細瀵艰嚧涔嬪墠璁剧疆鐨勪綅绉讳篃琚簲鐢ㄥ埌鍔ㄧ敾涓�
    (0, _css.default)($obj, prefix + 'transform'); // 杩欓噷搴旂敤鐨勭紦鍔ㄤ笌 iScroll 鐨勯粯璁ょ紦鍔ㄧ浉鍚�

    (0, _css.default)($obj, prefix + 'transition', prefix + 'transform ' + dur + 'ms cubic-bezier(0.1, 0.57, 0.1, 1)');
    setTransform($obj, x, y, angle);
    setTimeout(function () {
      (0, _css.default)($obj, prefix + 'transition', '');
      fn();
    }, dur);
  }

  module.exports = exports.default;
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  module.exports = function (context) {
    for (var _len = arguments.length, methods = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      methods[_key - 1] = arguments[_key];
    }

    methods.forEach(function (method) {
      context[method] = context[method].bind(context);
    });
  };
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  module.exports = function (context) {
    // 娓呴櫎鎵€鏈夊睘鎬�
    Object.getOwnPropertyNames(context).forEach(function (prop) {
      delete context[prop];
    });
    context.__proto__ = Object.prototype;
  };
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  var isArray = __webpack_require__(0);

  var isObject = __webpack_require__(1);

  var isBoolean = __webpack_require__(11);

  var isFunction = __webpack_require__(12);

  var isPlainObject = __webpack_require__(13);

  module.exports = function extend() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        target = arguments[0] || {},
        toString = Object.prototype.toString,
        i = 1,
        length = arguments.length,
        deep = false; // 澶勭悊娣辨嫹璐�

    if (isBoolean(target)) {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (!isObject(target) && !isFunction(target)) {
      target = {};
    } // 濡傛灉娌℃湁鍚堝苟鐨勫璞★紝鍒欒〃绀� target 涓哄悎骞跺璞★紝灏� target 鍚堝苟缁欏綋鍓嶅嚱鏁扮殑鎸佹湁鑰�


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name]; // 闃叉姝诲惊鐜�

          if (target === copy) {
            continue;
          } // 娣辨嫹璐濆璞℃垨鑰呮暟缁�


          if (deep && copy && ((copyIsArray = isArray(copy)) || isPlainObject(copy))) {
            if (copyIsArray) {
              copyIsArray = false;
              src = src && isArray(src) ? src : [];
            } else {
              src = src && isPlainObject(src) ? src : {};
            }

            target[name] = extend(deep, src, copy);
          } else if (copy !== undefined) {
            // 浠呭拷鐣ユ湭瀹氫箟鐨勫€�
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  // 鍒ゆ柇鏄惁涓哄竷灏斿€�
  module.exports = function (bool) {
    return typeof bool === 'boolean';
  };
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  // 鍒ゆ柇鏄惁涓哄嚱鏁�
  module.exports = function (func) {
    return typeof func === 'function';
  };
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  // 鍒ゆ柇瀵硅薄鏄惁涓虹函绮圭殑瀵硅薄锛堥€氳繃 "{}" 鎴栬€� "new Object" 鍒涘缓鐨勶級
  module.exports = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  // 鍒ゆ柇鏄惁涓虹櫨鍒嗘瘮
  module.exports = function (value) {
    return /%$/.test(value + '');
  };
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  // 鍒涘缓鍏冪礌
  module.exports = function (parentNode, className, id, prop) {
    var elem = document.createElement('DIV');

    if (_typeof(className) === 'object') {
      prop = className;
      className = null;
    }

    if (_typeof(id) === 'object') {
      prop = id;
      id = null;
    }

    if (_typeof(prop) === 'object') {
      for (var p in prop) {
        elem.style[p] = prop[p];
      }
    }

    if (className) elem.className = className;
    if (id) elem.id = id;
    parentNode.appendChild(elem);
    return elem;
  };
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  // 绉婚櫎鍏冪礌
  module.exports = function (elem) {
    elem.parentNode && elem.parentNode.removeChild(elem);
  };
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  // 杩斿洖鎸囧畾灞炴€у湪褰撳墠娴忚鍣ㄤ腑鐨勫吋瀹瑰墠缂€
  // 濡傛灉鏃犻渶鍏煎鍓嶇紑锛屽垯杩斿洖涓€涓┖瀛楃涓�
  // all 鏄竴涓竷灏斿€硷紝濡傛灉涓� true锛屽垯浼氳繑鍥炲寘鍚墠缂€鐨勫睘鎬у悕
  module.exports = function (prop, all) {
    var returnProp = all ? prop : '';
    var testElem = document.documentElement;
    if (prop in testElem.style) return returnProp;
    var testProp = prop.charAt(0).toUpperCase() + prop.substr(1),
        prefixs = ['Webkit', 'Moz', 'ms', 'O'];

    for (var i = 0, prefix; prefix = prefixs[i++];) {
      if (prefix + testProp in testElem.style) {
        return '-' + prefix.toLowerCase() + '-' + returnProp;
      }
    }

    return returnProp;
  };
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  // 璁剧疆鏍峰紡
  var isObject = __webpack_require__(1);

  var isNumber = __webpack_require__(2);

  var cssNumber = {
    'animationIterationCount': true,
    'columnCount': true,
    'fillOpacity': true,
    'flexGrow': true,
    'flexShrink': true,
    'fontWeight': true,
    'lineHeight': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'widows': true,
    'zIndex': true,
    'zoom': true
  };

  module.exports = function (elem, prop, value) {
    if (isObject(prop)) {
      for (var p in prop) {
        value = prop[p];
        if (isNumber(value) && !cssNumber[prop]) value += 'px';
        elem.style[p] = value;
      }

      return elem;
    }

    if (value === undefined) {
      return window.getComputedStyle(elem)[prop];
    } else {
      if (isNumber(value) && !cssNumber[prop]) value += 'px';
      elem.style[prop] = value;
      return elem;
    }
  };
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  // 璁剧疆灞炴€�
  module.exports = function (elem, prop, value) {
    if (_typeof(prop) === 'object') {
      for (var p in prop) {
        elem[p] = prop[p];
      }

      return elem;
    }

    if (value === undefined) {
      return elem[prop];
    } else {
      elem[prop] = value;
      return elem;
    }
  };
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var toArray = __webpack_require__(21); // 鑾峰彇鍏冪礌锛圛E8鍙婁互涓婃祻瑙堝櫒锛�


  module.exports = function (selector, context) {
    if (selector instanceof HTMLElement) {
      return [selector];
    } else if (_typeof(selector) === 'object' && selector.length) {
      return toArray(selector);
    } else if (!selector || typeof selector !== 'string') {
      return [];
    }

    if (typeof context === 'string') {
      context = document.querySelector(context);
    }

    if (!(context instanceof HTMLElement)) {
      context = document;
    }

    return toArray(context.querySelectorAll(selector));
  };
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  // 绫讳技鏁扮粍瀵硅薄杞暟缁�
  module.exports = function (obj) {
    return Array.prototype.map.call(obj, function (n) {
      return n;
    });
  };
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _hideAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getScale = getScale;
  _exports.pointRotate = pointRotate;
  _exports.angleToRadian = angleToRadian;
  _exports.loaclToLoacl = loaclToLoacl;
  _exports.globalToLoacl = globalToLoacl;
  _hideAction = _interopRequireDefault(_hideAction);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // 鑾峰彇鏈€澶х缉鏀炬瘮渚�
  function getScale(w1, h1, w2, h2) {
    var sx = w1 / w2;
    var sy = h1 / h2;
    return sx > sy ? sx : sy;
  } // 璁＄畻涓€涓偣缁曞師鐐规棆杞悗鐨勬柊鍧愭爣


  function pointRotate(point, angle) {
    var radian = angleToRadian(angle),
        sin = Math.sin(radian),
        cos = Math.cos(radian);
    return {
      x: cos * point.x - sin * point.y,
      y: cos * point.y + sin * point.x
    };
  } // 瑙掑害杞姬搴�


  function angleToRadian(angle) {
    return angle / 180 * Math.PI;
  } // 璁＄畻layerTwo涓婄殑x銆亂鍧愭爣鍦╨ayerOne涓婄殑鍧愭爣


  function loaclToLoacl(layerOne, layerTwo, x, y) {
    x = x || 0;
    y = y || 0;
    var layerOneRect, layerTwoRect;
    (0, _hideAction.default)([layerOne, layerTwo], function () {
      layerOneRect = layerOne.getBoundingClientRect();
      layerTwoRect = layerTwo.getBoundingClientRect();
    });
    return {
      x: layerTwoRect.left - layerOneRect.left + x,
      y: layerTwoRect.top - layerOneRect.top + y
    };
  } // 璁＄畻鐩稿浜庣獥鍙ｇ殑x銆亂鍧愭爣鍦╨ayer涓婄殑鍧愭爣


  function globalToLoacl(layer, x, y) {
    x = x || 0;
    y = y || 0;
    var layerRect;
    (0, _hideAction.default)(layer, function () {
      layerRect = layer.getBoundingClientRect();
    });
    return {
      x: x - layerRect.left,
      y: y - layerRect.top
    };
  }
});

/***/ })
/******/ ]);
});