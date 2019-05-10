/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/wp-content/plugins/gecko-grid-layout/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/tinycolor2/tinycolor.js":
/*!**********************************************!*\
  !*** ./node_modules/tinycolor2/tinycolor.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/grid-layout-basic.js":
/*!**********************************!*\
  !*** ./src/grid-layout-basic.js ***!
  \**********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);



/**
 * WordPress dependencies
 */






var name = 'gecko/grid-layout-basic';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Basic'),
  parent: ['gecko/grid-layout'],
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M0,0h24v24H0V0z M0,0h24v24H0V0z",
    fill: "none"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "m20 7v10h-16v-10h16m0-2h-16c-1.1 0-1.99 0.9-1.99 2l-0.01 10c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Rect"], {
    x: "11",
    y: "8",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Rect"], {
    x: "11",
    y: "11",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Rect"], {
    x: "8",
    y: "8",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Rect"], {
    x: "8",
    y: "11",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Rect"], {
    x: "5",
    y: "11",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Rect"], {
    x: "5",
    y: "8",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Rect"], {
    x: "8",
    y: "14",
    width: "8",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Rect"], {
    x: "14",
    y: "11",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Rect"], {
    x: "14",
    y: "8",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Rect"], {
    x: "17",
    y: "11",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Rect"], {
    x: "17",
    y: "8",
    width: "2",
    height: "2"
  })),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('An image grid block.'),
  category: 'common',
  supports: {
    className: true,
    inserter: true,
    reusable: false,
    html: false
  },
  styles: [{
    name: 'default',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Default'),
    isDefault: true
  }],
  attributes: {
    h: {
      type: 'number',
      "default": 1
    },
    w: {
      type: 'number',
      "default": 1
    },
    alignContent: {
      type: 'string',
      "default": 'top'
    }
  },
  transforms: {
    from: [{
      type: 'block',
      blocks: ['gecko/grid-layout-image', 'gecko/grid-layout-item'],
      transform: function transform(attributes, innerBlocks) {
        var selected = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["select"])('core/editor').getSelectedBlock(); // because innerBlocks does not work.
        // It appears that innerBlocks will be added in the future.

        var h = attributes.h,
            w = attributes.w;
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('gecko/grid-layout-basic', {
          h: h,
          w: w
        }, selected.innerBlocks);
      }
    }]
  },
  deprecated: [{
    migrate: function migrate() {},
    save: function save() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null);
    }
  }],
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className,
        insertBlocksAfter = _ref.insertBlocksAfter;
    var h = attributes.h,
        w = attributes.w,
        alignContent = attributes.alignContent;
    var styles = {
      gridColumnEnd: 'span ' + w,
      gridRowEnd: 'span ' + h,
      alignSelf: alignContent === 'center' ? 'center' : 'start'
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Grid Item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Width'),
      value: w,
      onChange: function onChange(next) {
        setAttributes({
          w: next
        });
      },
      min: 1,
      max: 12
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Span Rows'),
      value: h,
      onChange: function onChange(next) {
        setAttributes({
          h: next
        });
      },
      min: 1,
      max: 12
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["BlockControls"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
      controls: [{
        icon: 'arrow-up-alt',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Align Top'),
        isActive: alignContent === 'top',
        onClick: function onClick() {
          return setAttributes({
            alignContent: 'top'
          });
        }
      }, {
        icon: 'align-center',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Align Center'),
        isActive: alignContent === 'center',
        onClick: function onClick() {
          return setAttributes({
            alignContent: 'center'
          });
        }
      }, {
        icon: 'arrow-down-alt',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Align Bottom'),
        isActive: alignContent === 'bottom',
        onClick: function onClick() {
          return setAttributes({
            alignContent: 'bottom'
          });
        }
      }]
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gecko-grid-layout-editor-styles",
      style: styles
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "wp-block-gecko-grid-layout-editor__wrap gecko-grid-layout-basic ".concat(attributes.className, " align-content-").concat(attributes.alignContent)
    }, typeof insertBlocksAfter === 'function' //This line makes sure styles do not break
    ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"], {
      templateLock: false
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Lorem Ipsum") // This is what shows as the preview content.
    ));
  },
  save: function save() {
    // Honestly I don't want to do this but conventions are conventions.
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null));
  }
};

/***/ }),

/***/ "./src/grid-layout-image.js":
/*!**********************************!*\
  !*** ./src/grid-layout-image.js ***!
  \**********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);



/**
 * WordPress dependencies
 */







var ALLOWED_BLOCKS = ['core/paragraph', 'core/heading', 'core/button', 'core/list', 'core/quote'];
var name = 'gecko/grid-layout-image';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image'),
  parent: ['gecko/grid-layout'],
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SVG"], {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Path"], {
    d: "M0,0h24v24H0V0z",
    fill: "none"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Path"], {
    d: "m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Path"], {
    d: "m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z"
  })),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('An image Grid Block.'),
  category: 'common',
  supports: {
    className: true,
    inserter: true,
    reusable: false,
    html: false
  },
  styles: [{
    name: 'default',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Default'),
    isDefault: true
  }, {
    name: 'hover',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Hover')
  }, {
    name: 'no-caption',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('No Caption')
  }],
  attributes: {
    h: {
      type: 'number',
      "default": 1
    },
    w: {
      type: 'number',
      "default": 1
    },
    minHeight: {
      type: 'number',
      "default": 200
    },
    imgId: {
      type: 'number'
    },
    imgUrl: {
      type: 'string'
    }
  },
  transforms: {
    from: [{
      type: 'block',
      blocks: ['gecko/grid-layout-basic', 'gecko/grid-layout-item'],
      transform: function transform(attributes, innerBlocks) {
        var selected = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["select"])('core/editor').getSelectedBlock(); // because innerBlocks does not work.
        // It appears that innerBlocks will be added in the future.

        var h = attributes.h,
            w = attributes.w,
            bgMedia = attributes.bgMedia,
            bgMediaUrl = attributes.bgMediaUrl,
            mediaId = attributes.mediaId,
            mediaUrl = attributes.mediaUrl,
            minHeight = attributes.minHeight;
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["createBlock"])('gecko/grid-layout-image', {
          h: h,
          w: w,
          imgId: bgMedia || mediaId,
          imgUrl: bgMediaUrl || mediaUrl,
          minHeight: minHeight
        }, selected.innerBlocks);
      }
    }]
  },
  deprecated: [{
    migrate: function migrate() {},
    save: function save() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"].Content, null);
    }
  }],
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className,
        insertBlocksAfter = _ref.insertBlocksAfter,
        toggleSelection = _ref.toggleSelection;
    var h = attributes.h,
        w = attributes.w,
        imgId = attributes.imgId,
        imgUrl = attributes.imgUrl,
        minHeight = attributes.minHeight;
    var styles = {
      gridColumnEnd: 'span ' + w,
      gridRowEnd: 'span ' + h,
      minHeight: minHeight + 'px'
    };

    var onResizing = function onResizing(event, direction, elt, delta) {
      if (direction === 'bottom') {
        var newMinHeight = elt.clientHeight > 600 ? 600 : elt.clientHeight;
        setAttributes({
          minHeight: newMinHeight
        });
        elt.style.height = "100%";
      }

      ;
      if (direction !== 'right') return; // console.log(elt);

      var columnWidth = Math.floor(elt.parentNode.offsetWidth / w);
      var currentSpan = Math.floor(elt.parentNode.offsetWidth / columnWidth);
      var elColWidth = Math.floor(elt.clientWidth / w);
      var spans = Math.floor(elt.clientWidth / columnWidth);
      var toUpdate = Math.floor(parseInt(delta.width, 10) / columnWidth);
      var original = w - toUpdate;
      var newWidth = spans;

      if (newWidth > 12) {
        newWidth = 12;
      }

      if (newWidth < 1) {
        newWidth = 1;
      }

      setAttributes({
        w: newWidth
      });
      elt.style.width = "100%"; // }

      return;
    };

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: "Grid Item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Minimum Height'),
      value: minHeight,
      onChange: function onChange(next) {
        setAttributes({
          minHeight: next
        });
      },
      min: "50",
      max: "600",
      step: "1"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width'),
      value: w,
      onChange: function onChange(next) {
        setAttributes({
          w: next
        });
      },
      min: 1,
      max: 12
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Span Rows'),
      value: h,
      onChange: function onChange(next) {
        setAttributes({
          h: next
        });
      },
      min: 1,
      max: 12
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["BlockControls"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["MediaUpload"], {
      onSelect: function onSelect(value) {
        // console.log(value);
        setAttributes({
          imgId: value.id,
          imgUrl: value.url
        });
      },
      type: ['image'],
      value: imgId ? imgId : null,
      render: function render(_ref2) {
        var open = _ref2.open;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
          className: "components-icon-button components-toolbar__control",
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Edit image'),
          onClick: open,
          icon: "edit"
        });
      }
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gecko-grid-layout-editor-styles",
      style: styles
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ResizableBox"], {
      size: {
        width: '',
        height: '100%'
      } // minHeight = "50"
      // minWidth = "100%"
      ,
      className: "wp-block-gecko-grid-layout-editor__wrap gecko-grid-layout-image ".concat(attributes.className) // minHeight={ minHeight }
      // maxHeight={600}
      // lockAspectRatio
      ,
      enable: {
        top: false,
        right: true,
        bottom: true,
        left: false
      },
      onResizeStart: function onResizeStart(event, direction, elt, delta) {
        toggleSelection(false);
      },
      onResize: lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(onResizing, 250),
      onResizeStop: function onResizeStop(event, direction, elt, delta) {
        elt.style.width = "100%";
        if (direction !== 'bottom') return;
        var newMinHeight = elt.clientHeight > 600 ? 600 : elt.clientHeight;
        setAttributes({
          minHeight: newMinHeight
        });
        toggleSelection(true);
      }
    }, !imgId && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["MediaPlaceholder"], {
      onSelect: function onSelect(value) {
        setAttributes({
          imgId: value.id,
          imgUrl: value.url
        });
      },
      allowedTypes: ['image'],
      accept: "image/*"
    }), imgUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "gecko-grid-layout-image__image",
      src: imgUrl
    }), imgId && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figcaption", {
      className: "gecko-grid-layout-image__caption"
    }, typeof insertBlocksAfter === 'function' //This line makes sure styles do not break
    ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"], {
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Lorem Ipsum") // This is what shows as the preview content.
    )));
  },
  save: function save() {
    // Honestly I don't want to do this but conventions are conventions.
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"].Content, null));
  }
};

/***/ }),

/***/ "./src/grid-layout-item.js":
/*!*********************************!*\
  !*** ./src/grid-layout-item.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_8__);



/**
 * WordPress dependencies
 */








var name = 'gecko/grid-layout-item';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Item (deprecated)'),
  parent: ['gecko/grid-layout'],
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Path"], {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Path"], {
    d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"
  })),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('This block is deprecated. Please use basic or image block instead.'),
  category: 'common',
  supports: {
    inserter: false
  },
  styles: [{
    name: 'default',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Default'),
    isDefault: true
  }, {
    name: 'hover',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Hover')
  }],
  attributes: {
    type: {
      type: 'string',
      "default": undefined
    },
    //solid, image, image-content
    h: {
      type: 'number',
      "default": 1
    },
    w: {
      type: 'number'
    },
    minHeight: {
      type: 'number',
      "default": 200
    },
    opacity: {
      type: 'number',
      "default": 1
    },
    bgMedia: {
      type: 'number'
    },
    bgMediaUrl: {
      type: 'string'
    },
    bgColor: {
      type: 'string'
    },
    bgColorSlug: {
      type: 'string'
    },
    bgColorBrightness: {
      type: 'number'
    } //light or dark

  },
  deprecated: [{
    migrate: function migrate(attributes, innerBlocks) {
      // const selected = select('core/editor').getSelectedBlock(); // because innerBlocks does not work.
      // It appears that innerBlocks will be added in the future.
      var h = attributes.h,
          w = attributes.w,
          bgMedia = attributes.bgMedia,
          bgMediaUrl = attributes.bgMediaUrl,
          minHeight = attributes.minHeight;

      if (bgMedia) {
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["createBlock"])('gecko/grid-layout-image', {
          h: h,
          w: w,
          imgId: bgMedia,
          imgUrl: bgMediaUrl,
          minHeight: minHeight
        }, innerBlocks);
      }

      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["createBlock"])('gecko/grid-layout-basic', {
        h: h,
        w: w
      }, innerBlocks);
    },
    save: function save() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"].Content, null);
    }
  }],
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className,
        insertBlocksAfter = _ref.insertBlocksAfter;
    var opacity = attributes.opacity,
        h = attributes.h,
        w = attributes.w,
        type = attributes.type,
        padding = attributes.padding,
        bgMedia = attributes.bgMedia,
        bgMediaUrl = attributes.bgMediaUrl,
        bgColor = attributes.bgColor,
        bgColorBrightness = attributes.bgColorBrightness,
        bgColorSlug = attributes.bgColorSlug,
        minHeight = attributes.minHeight;
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_8___default()('Grid Layout Idem', {
      alternative: 'Basic or Image',
      plugin: 'Gecko Grid Layout'
    });
    var styles = {
      '--background': bgColor,
      '--opacity': opacity,
      gridColumnEnd: 'span ' + w,
      gridRowEnd: 'span ' + h,
      backgroundColor: bgColor,
      backgroundImage: 'url(' + bgMediaUrl + ')',
      minHeight: minHeight + 'px'
    };
    var lightOrDark = 'light';
    if (bgColorBrightness < 130) lightOrDark = 'dark';
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: "Settings"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width'),
      value: w,
      onChange: function onChange(next) {
        setAttributes({
          w: next
        });
      },
      min: 1,
      max: 12
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Span Rows'),
      value: h,
      onChange: function onChange(next) {
        setAttributes({
          h: next
        });
      },
      min: 1,
      max: 12
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: "Style"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Minimum Height'),
      value: minHeight,
      onChange: function onChange(next) {
        setAttributes({
          minHeight: next
        });
      },
      min: "50",
      max: "600",
      step: "1"
    }), type !== "solid" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["MediaUpload"], {
      onSelect: function onSelect(value) {
        // console.log(value);
        setAttributes({
          bgMedia: value.id,
          bgMediaUrl: value.url
        });
      },
      type: ['image', 'video'],
      value: bgMedia ? bgMedia : null,
      render: function render(_ref2) {
        var open = _ref2.open;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, bgMediaUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: bgMediaUrl,
          onClick: open,
          width: "100%",
          height: "auto",
          style: {
            cursor: "pointer"
          }
        }), !bgMediaUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: 'button button-large',
          onClick: open
        }, "Choose Background"));
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      label: "Background Color",
      value: bgColor ? bgColor.color : undefined,
      onChange: function onChange(value) {
        var settings = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["select"])('core/editor').getEditorSettings();
        var colorSlug = value ? Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["getColorObjectByColorValue"])(settings.colors, value).slug : undefined;
        setAttributes({
          bgColorSlug: colorSlug
        });
        var brightness = value ? tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(value).getBrightness() : undefined;
        setAttributes({
          bgColorBrightness: brightness
        });
        setAttributes({
          bgColor: value
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gecko-grid-layout-editor-styles",
      style: styles
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "wp-block-gecko-grid-layout-editor__wrap".concat(type, " ").concat(attributes.className, " has-").concat(bgColorSlug, "-background-color is-").concat(lightOrDark, "-background")
    }, (type === 'image' || type === 'image-content') && !bgMedia && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["MediaPlaceholder"], {
      onSelect: function onSelect(value) {
        setAttributes({
          bgMedia: value.id,
          bgMediaUrl: value.url
        });
      },
      allowedTypes: ['image'],
      accept: "image/*"
    }), typeof insertBlocksAfter === 'function' && //This line makes sure styles do not break
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"], {
      templateLock: false
    })));
  },
  save: function save() {
    // Honestly I don't want to do this but conventions are conventions.
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"].Content, null));
  }
};

/***/ }),

/***/ "./src/grid-layout.js":
/*!****************************!*\
  !*** ./src/grid-layout.js ***!
  \****************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _template_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template-select */ "./src/template-select.js");



/**
 * WordPress dependencies
 */







/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 *
 * @constant
 * @type {string[]}
*/

var ALLOWED_BLOCKS = ['gecko/grid-layout-item', 'gecko/grid-layout-image', 'gecko/grid-layout-basic'];
var name = 'gecko/grid-layout';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Grid'),
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SVG"], {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Path"], {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["G"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Path"], {
    d: "M4,13 L8,13 L8,10 L4,10 L4,13 Z M4,15 L4,18 L8,18 L8,15 L4,15 Z M10,13 L14,13 L14,10 L10,10 L10,13 Z M10,15 L10,18 L14,18 L14,15 L10,15 Z M20,13 L20,10 L16,10 L16,13 L20,13 Z M20,15 L16,15 L16,18 L20,18 L20,15 Z M4,8 L8,8 L8,5 L4,5 L4,8 Z M10,8 L14,8 L14,5 L10,5 L10,8 Z M20,8 L20,5 L16,5 L16,8 L20,8 Z M4,3 L20,3 C21.1045695,3 22,3.95139491 22,5.125 L22,17.875 C22,19.0486051 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.0486051 2,17.875 L2,5.125 C2,3.95139491 2.8954305,3 4,3 Z"
  }))),
  category: 'layout',
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Use CSS Grid to build layouts and, then add whatever content blocks you’d like.'),
  supports: {
    align: ['wide', 'full'],
    html: false
  },
  deprecated: [{
    migrate: function migrate() {},
    save: function save() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null);
    }
  }],
  transforms: {
    from: [{
      type: 'block',
      blocks: ['core/columns'],
      transform: function transform(attributes) {
        var selected = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["select"])('core/editor').getSelectedBlock(); // because innerBlocks does not work.

        var columns = selected.innerBlocks;
        var count = columns.length;
        var w = Math.floor(12 / count);
        var innerBlocks = [];
        columns.map(function (column) {
          var block = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__["createBlock"])('gecko/grid-layout-basic', {
            w: w
          }, column.innerBlocks);
          innerBlocks.push(block);
        });
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__["createBlock"])('gecko/grid-layout', {}, innerBlocks);
      }
    }]
  },
  styles: [{
    name: 'default',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default'),
    isDefault: true
  }, {
    name: 'no-gap',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No Gap')
  }],
  edit: function edit(_ref) {
    var insertBlocksAfter = _ref.insertBlocksAfter,
        clientId = _ref.clientId;
    // Get the block so we can see if it had innerblocks
    var block = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["select"])('core/editor').getBlocksByClientId(clientId)[0];
    var hasInnerBlocks = block && block.innerBlocks ? block.innerBlocks.length > 0 : false;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "wp-block-gecko-grid-layout-editor"
    }, typeof insertBlocksAfter === 'function' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_template_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
      hasInnnerBlocks: hasInnerBlocks,
      allowedBlocks: ALLOWED_BLOCKS
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Preview Not Available'))));
  },
  save: function save() {
    // Honestly I don't want to do this but conventions are conventions.
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null));
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-layout */ "./src/grid-layout.js");
/* harmony import */ var _grid_layout_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-layout-item */ "./src/grid-layout-item.js");
/* harmony import */ var _grid_layout_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-layout-image */ "./src/grid-layout-image.js");
/* harmony import */ var _grid_layout_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-layout-basic */ "./src/grid-layout-basic.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_grid_layout__WEBPACK_IMPORTED_MODULE_1__["name"], _grid_layout__WEBPACK_IMPORTED_MODULE_1__["settings"]);
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_grid_layout_basic__WEBPACK_IMPORTED_MODULE_4__["name"], _grid_layout_basic__WEBPACK_IMPORTED_MODULE_4__["settings"]);
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_grid_layout_image__WEBPACK_IMPORTED_MODULE_3__["name"], _grid_layout_image__WEBPACK_IMPORTED_MODULE_3__["settings"]);
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_grid_layout_item__WEBPACK_IMPORTED_MODULE_2__["name"], _grid_layout_item__WEBPACK_IMPORTED_MODULE_2__["settings"]);
/**
 * This make sure the grid works in the editor.
 */

document.addEventListener("DOMContentLoaded", function () {
  // Create the observer
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      // On style mutation update blocks styles.
      var block = mutation.target.closest('[data-type^="gecko/grid-layout-"]');
      if (!block) return;
      var styles = mutation.target.getAttribute('style');
      block.style = styles;
    });
  }); // Add style elements to the observer

  var addStyleElementsToObserver = function addStyleElementsToObserver() {
    var styleElements = document.querySelectorAll('.gecko-grid-layout-editor-styles');
    if (!styleElements.length > 0) return;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = styleElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;
        observer.observe(element, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }; // Add the styles to grid layout items for editor.


  function applyAllGridItemStyles() {
    var blocks = document.querySelectorAll('[data-type^="gecko/grid-layout-"]');
    if (!blocks.length > 0) return;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = blocks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var block = _step2.value;
        applyGridItemStyle(block);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  function applyGridItemStyle(block) {
    // if (typeof block.querySelector !== 'function') return;
    var styles = block.querySelector('.gecko-grid-layout-editor-styles').getAttribute('style');
    block.style = styles;
  } // Add the styles to grid layout items for editor.


  function newGridInserted(e) {
    if (typeof e.target.querySelectorAll !== 'function') return;
    var blocks = e.target.querySelectorAll('[data-type^="gecko/grid-layout-"]');
    if (!blocks.length > 0) return; // console.log('node added', e);

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = blocks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var block = _step3.value;
        // console.log('style', block);
        applyGridItemStyle(block);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }

  var newBlockObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (!mutation.addedNodes) return;

      for (var i = 0; i < mutation.addedNodes.length; i++) {
        // do things to your newly added nodes here
        var node = mutation.addedNodes[i];
        if (typeof node.matches !== 'function') return;
        if (!node.matches('[data-type^="gecko/grid-layout-"]')) return;
        return applyGridItemStyle(node);
      }
    });
  });
  newBlockObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  });
  applyAllGridItemStyles();
  document.addEventListener("DOMNodeInserted", newGridInserted);
  document.addEventListener("DOMNodeInserted", addStyleElementsToObserver);
});

/***/ }),

/***/ "./src/template-preview.js":
/*!*********************************!*\
  !*** ./src/template-preview.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Preview; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);







 // import { Fragment } from '@wordpress/element';

var Preview =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Preview, _React$PureComponent);

  function Preview() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Preview);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Preview).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Preview, [{
    key: "render",
    value: function render() {
      var layout = this.props.layout;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "gecko-grid-layout-template-preview"
      }, layout.map(function (block, key) {
        var styles = {
          gridColumnEnd: 'span ' + block[1].w,
          gridRowEnd: 'span ' + block[1].h
        };
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: key,
          className: "gecko-grid-layout-template-preview__item",
          style: styles
        });
      }));
    }
  }]);

  return Preview;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);



/***/ }),

/***/ "./src/template-select.js":
/*!********************************!*\
  !*** ./src/template-select.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateSelect; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _template_preview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./template-preview */ "./src/template-preview.js");











 // Custom Templates to choose from.

 // Custom Templates to choose from.
// import { Fragment } from '@wordpress/element';

var TemplateSelect =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TemplateSelect, _React$Component);

  function TemplateSelect(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TemplateSelect);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TemplateSelect).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "setTemplate", function (template) {
      _this.setState({
        selected: template
      });
    });

    _this.state = {
      selected: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TemplateSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          hasInnnerBlocks = _this$props.hasInnnerBlocks,
          allowedBlocks = _this$props.allowedBlocks;
      var selected = this.state.selected;
      var blankTemplate = [['gecko/grid-layout-basic', {
        w: 6
      }]];

      if (!hasInnnerBlocks && !selected) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "gecko-grid-layout-template-select"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Choose a Template')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('This is a starting point. Templates make it easy to choose a layout. Blocks can be changed once they are selected.')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "gecko-grid-layout-template-select__templates"
        }, Object(_templates__WEBPACK_IMPORTED_MODULE_11__["default"])().map(function (template, key) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            key: key,
            className: "gecko-grid-layout-template-select__template",
            onClick: function onClick() {
              return _this2.setTemplate(template.layout);
            }
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_template_preview__WEBPACK_IMPORTED_MODULE_12__["default"], {
            layout: template.layout
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, template.label));
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "gecko-grid-layout-template-select__template",
          onClick: function onClick() {
            return _this2.setTemplate(blankTemplate);
          }
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_template_preview__WEBPACK_IMPORTED_MODULE_12__["default"], {
          layout: blankTemplate
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Create New')))));
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["InnerBlocks"], {
        template: selected,
        templateLock: false,
        allowedBlocks: allowedBlocks
      });
    }
  }]);

  return TemplateSelect;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTemplates; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


function getTemplates() {
  var templates = [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('2 Columns'),
    layout: [['gecko/grid-layout-basic', {
      w: 6
    }], ['gecko/grid-layout-basic', {
      w: 6
    }]]
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('3 Columns'),
    layout: [['gecko/grid-layout-basic', {
      w: 4
    }], ['gecko/grid-layout-basic', {
      w: 4
    }], ['gecko/grid-layout-basic', {
      w: 4
    }]]
  }];
  return Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])('gecko.grid-layout.templates', templates);
}

/***/ }),

/***/ "@wordpress/blocks":
/*!***********************************!*\
  !*** external "window.wp.blocks" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.blocks;

/***/ }),

/***/ "@wordpress/components":
/*!***************************************!*\
  !*** external "window.wp.components" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.components;

/***/ }),

/***/ "@wordpress/data":
/*!*********************************!*\
  !*** external "window.wp.data" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.data;

/***/ }),

/***/ "@wordpress/deprecated":
/*!***************************************!*\
  !*** external "window.wp.deprecated" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.deprecated;

/***/ }),

/***/ "@wordpress/editor":
/*!***********************************!*\
  !*** external "window.wp.editor" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.editor;

/***/ }),

/***/ "@wordpress/element":
/*!************************************!*\
  !*** external "window.wp.element" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.element;

/***/ }),

/***/ "@wordpress/hooks":
/*!**********************************!*\
  !*** external "window.wp.hooks" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.hooks;

/***/ }),

/***/ "@wordpress/i18n":
/*!*********************************!*\
  !*** external "window.wp.i18n" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.i18n;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueWNvbG9yMi90aW55Y29sb3IuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC1sYXlvdXQtYmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQtbGF5b3V0LWltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmlkLWxheW91dC1pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmlkLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlLXByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5ibG9ja3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5kYXRhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmRlcHJlY2F0ZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuZWRpdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmVsZW1lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuaTE4blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsibmFtZSIsInNldHRpbmdzIiwidGl0bGUiLCJfXyIsInBhcmVudCIsImljb24iLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5Iiwic3VwcG9ydHMiLCJjbGFzc05hbWUiLCJpbnNlcnRlciIsInJldXNhYmxlIiwiaHRtbCIsInN0eWxlcyIsImxhYmVsIiwiaXNEZWZhdWx0IiwiYXR0cmlidXRlcyIsImgiLCJ0eXBlIiwidyIsImFsaWduQ29udGVudCIsInRyYW5zZm9ybXMiLCJmcm9tIiwiYmxvY2tzIiwidHJhbnNmb3JtIiwiaW5uZXJCbG9ja3MiLCJzZWxlY3RlZCIsInNlbGVjdCIsImdldFNlbGVjdGVkQmxvY2siLCJjcmVhdGVCbG9jayIsImRlcHJlY2F0ZWQiLCJtaWdyYXRlIiwic2F2ZSIsImVkaXQiLCJzZXRBdHRyaWJ1dGVzIiwiaW5zZXJ0QmxvY2tzQWZ0ZXIiLCJncmlkQ29sdW1uRW5kIiwiZ3JpZFJvd0VuZCIsImFsaWduU2VsZiIsIm5leHQiLCJpc0FjdGl2ZSIsIm9uQ2xpY2siLCJBTExPV0VEX0JMT0NLUyIsIm1pbkhlaWdodCIsImltZ0lkIiwiaW1nVXJsIiwiYmdNZWRpYSIsImJnTWVkaWFVcmwiLCJtZWRpYUlkIiwibWVkaWFVcmwiLCJ0b2dnbGVTZWxlY3Rpb24iLCJvblJlc2l6aW5nIiwiZXZlbnQiLCJkaXJlY3Rpb24iLCJlbHQiLCJkZWx0YSIsIm5ld01pbkhlaWdodCIsImNsaWVudEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0IiwiY29sdW1uV2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJwYXJlbnROb2RlIiwib2Zmc2V0V2lkdGgiLCJjdXJyZW50U3BhbiIsImVsQ29sV2lkdGgiLCJjbGllbnRXaWR0aCIsInNwYW5zIiwidG9VcGRhdGUiLCJwYXJzZUludCIsIndpZHRoIiwib3JpZ2luYWwiLCJuZXdXaWR0aCIsInZhbHVlIiwiaWQiLCJ1cmwiLCJvcGVuIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiZGVib3VuY2UiLCJ1bmRlZmluZWQiLCJvcGFjaXR5IiwiYmdDb2xvciIsImJnQ29sb3JTbHVnIiwiYmdDb2xvckJyaWdodG5lc3MiLCJwYWRkaW5nIiwiYWx0ZXJuYXRpdmUiLCJwbHVnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsaWdodE9yRGFyayIsImN1cnNvciIsImNvbG9yIiwiZ2V0RWRpdG9yU2V0dGluZ3MiLCJjb2xvclNsdWciLCJnZXRDb2xvck9iamVjdEJ5Q29sb3JWYWx1ZSIsImNvbG9ycyIsInNsdWciLCJicmlnaHRuZXNzIiwidGlueWNvbG9yIiwiZ2V0QnJpZ2h0bmVzcyIsImFsaWduIiwiY29sdW1ucyIsImNvdW50IiwibGVuZ3RoIiwibWFwIiwiY29sdW1uIiwiYmxvY2siLCJwdXNoIiwiY2xpZW50SWQiLCJnZXRCbG9ja3NCeUNsaWVudElkIiwiaGFzSW5uZXJCbG9ja3MiLCJyZWdpc3RlckJsb2NrVHlwZSIsImdyaWQiLCJncmlkSXRlbUJhc2ljIiwiZ3JpZEl0ZW1JbWFnZSIsImdyaWRJdGVtIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZm9yRWFjaCIsIm11dGF0aW9uIiwidGFyZ2V0IiwiY2xvc2VzdCIsImdldEF0dHJpYnV0ZSIsImFkZFN0eWxlRWxlbWVudHNUb09ic2VydmVyIiwic3R5bGVFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwib2JzZXJ2ZSIsImF0dHJpYnV0ZUZpbHRlciIsImFwcGx5QWxsR3JpZEl0ZW1TdHlsZXMiLCJhcHBseUdyaWRJdGVtU3R5bGUiLCJxdWVyeVNlbGVjdG9yIiwibmV3R3JpZEluc2VydGVkIiwiZSIsIm5ld0Jsb2NrT2JzZXJ2ZXIiLCJhZGRlZE5vZGVzIiwiaSIsIm5vZGUiLCJtYXRjaGVzIiwiYm9keSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJjaGFyYWN0ZXJEYXRhIiwiUHJldmlldyIsImxheW91dCIsInByb3BzIiwia2V5IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiVGVtcGxhdGVTZWxlY3QiLCJ0ZW1wbGF0ZSIsInNldFN0YXRlIiwic3RhdGUiLCJoYXNJbm5uZXJCbG9ja3MiLCJhbGxvd2VkQmxvY2tzIiwiYmxhbmtUZW1wbGF0ZSIsInRlbXBsYXRlcyIsInNldFRlbXBsYXRlIiwiQ29tcG9uZW50IiwiZ2V0VGVtcGxhdGVzIiwiYXBwbHlGaWx0ZXJzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7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QUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxLQUFLLGtCQUFrQixZQUFZLGtCQUFrQjtBQUNyRDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixZQUFZOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDakUsK0JBQStCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNqRSwrQkFBK0IsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNqRiwrQkFBK0IsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNqRjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsVUFBVSxPQUFPLFVBQVUsT0FBTyxTQUFTO0FBQ25GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLElBQUksS0FBNkI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUEwQztBQUNuRCxJQUFJLG1DQUFPLGFBQWEsa0JBQWtCO0FBQUEsb0dBQUM7QUFDM0M7QUFDQTtBQUNBLEtBQUssRUFFSjs7QUFFRCxDQUFDOzs7Ozs7Ozs7Ozs7QUMxcUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBOzs7QUFHQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxJQUFJLEdBQUcseUJBQWI7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDdkJDLE9BQUssRUFBRUMsMERBQUUsQ0FBRSxPQUFGLENBRGM7QUFHdkJDLFFBQU0sRUFBRSxDQUFDLG1CQUFELENBSGU7QUFLdkJDLE1BQUksRUFBRSwyREFBQyx5REFBRDtBQUFLLFdBQU8sRUFBQyxXQUFiO0FBQXlCLFNBQUssRUFBQztBQUEvQixLQUE0RCwyREFBQywwREFBRDtBQUFNLEtBQUMsRUFBQyxpQ0FBUjtBQUEwQyxRQUFJLEVBQUM7QUFBL0MsSUFBNUQsRUFBb0gsMkRBQUMsMERBQUQ7QUFBTSxLQUFDLEVBQUM7QUFBUixJQUFwSCxFQUFvUCwyREFBQywwREFBRDtBQUFNLEtBQUMsRUFBQyxJQUFSO0FBQWEsS0FBQyxFQUFDLEdBQWY7QUFBbUIsU0FBSyxFQUFDLEdBQXpCO0FBQTZCLFVBQU0sRUFBQztBQUFwQyxJQUFwUCxFQUE4UiwyREFBQywwREFBRDtBQUFNLEtBQUMsRUFBQyxJQUFSO0FBQWEsS0FBQyxFQUFDLElBQWY7QUFBb0IsU0FBSyxFQUFDLEdBQTFCO0FBQThCLFVBQU0sRUFBQztBQUFyQyxJQUE5UixFQUF5VSwyREFBQywwREFBRDtBQUFNLEtBQUMsRUFBQyxHQUFSO0FBQVksS0FBQyxFQUFDLEdBQWQ7QUFBa0IsU0FBSyxFQUFDLEdBQXhCO0FBQTRCLFVBQU0sRUFBQztBQUFuQyxJQUF6VSxFQUFrWCwyREFBQywwREFBRDtBQUFNLEtBQUMsRUFBQyxHQUFSO0FBQVksS0FBQyxFQUFDLElBQWQ7QUFBbUIsU0FBSyxFQUFDLEdBQXpCO0FBQTZCLFVBQU0sRUFBQztBQUFwQyxJQUFsWCxFQUE0WiwyREFBQywwREFBRDtBQUFNLEtBQUMsRUFBQyxHQUFSO0FBQVksS0FBQyxFQUFDLElBQWQ7QUFBbUIsU0FBSyxFQUFDLEdBQXpCO0FBQTZCLFVBQU0sRUFBQztBQUFwQyxJQUE1WixFQUFzYywyREFBQywwREFBRDtBQUFNLEtBQUMsRUFBQyxHQUFSO0FBQVksS0FBQyxFQUFDLEdBQWQ7QUFBa0IsU0FBSyxFQUFDLEdBQXhCO0FBQTRCLFVBQU0sRUFBQztBQUFuQyxJQUF0YyxFQUErZSwyREFBQywwREFBRDtBQUFNLEtBQUMsRUFBQyxHQUFSO0FBQVksS0FBQyxFQUFDLElBQWQ7QUFBbUIsU0FBSyxFQUFDLEdBQXpCO0FBQTZCLFVBQU0sRUFBQztBQUFwQyxJQUEvZSxFQUF5aEIsMkRBQUMsMERBQUQ7QUFBTSxLQUFDLEVBQUMsSUFBUjtBQUFhLEtBQUMsRUFBQyxJQUFmO0FBQW9CLFNBQUssRUFBQyxHQUExQjtBQUE4QixVQUFNLEVBQUM7QUFBckMsSUFBemhCLEVBQW9rQiwyREFBQywwREFBRDtBQUFNLEtBQUMsRUFBQyxJQUFSO0FBQWEsS0FBQyxFQUFDLEdBQWY7QUFBbUIsU0FBSyxFQUFDLEdBQXpCO0FBQTZCLFVBQU0sRUFBQztBQUFwQyxJQUFwa0IsRUFBOG1CLDJEQUFDLDBEQUFEO0FBQU0sS0FBQyxFQUFDLElBQVI7QUFBYSxLQUFDLEVBQUMsSUFBZjtBQUFvQixTQUFLLEVBQUMsR0FBMUI7QUFBOEIsVUFBTSxFQUFDO0FBQXJDLElBQTltQixFQUF5cEIsMkRBQUMsMERBQUQ7QUFBTSxLQUFDLEVBQUMsSUFBUjtBQUFhLEtBQUMsRUFBQyxHQUFmO0FBQW1CLFNBQUssRUFBQyxHQUF6QjtBQUE2QixVQUFNLEVBQUM7QUFBcEMsSUFBenBCLENBTGlCO0FBT3ZCQyxhQUFXLEVBQUVILDBEQUFFLENBQUUsc0JBQUYsQ0FQUTtBQVN2QkksVUFBUSxFQUFFLFFBVGE7QUFXdkJDLFVBQVEsRUFBRTtBQUNUQyxhQUFTLEVBQUUsSUFERjtBQUVUQyxZQUFRLEVBQUUsSUFGRDtBQUdUQyxZQUFRLEVBQUUsS0FIRDtBQUlUQyxRQUFJLEVBQUU7QUFKRyxHQVhhO0FBa0J2QkMsUUFBTSxFQUFFLENBQ1A7QUFBRWIsUUFBSSxFQUFFLFNBQVI7QUFBbUJjLFNBQUssRUFBRVgsMERBQUUsQ0FBRSxTQUFGLENBQTVCO0FBQTBDWSxhQUFTLEVBQUU7QUFBckQsR0FETyxDQWxCZTtBQXNCdkJDLFlBQVUsRUFBRTtBQUNYQyxLQUFDLEVBQUU7QUFBRUMsVUFBSSxFQUFFLFFBQVI7QUFBa0IsaUJBQVM7QUFBM0IsS0FEUTtBQUVYQyxLQUFDLEVBQUU7QUFBRUQsVUFBSSxFQUFFLFFBQVI7QUFBa0IsaUJBQVM7QUFBM0IsS0FGUTtBQUdYRSxnQkFBWSxFQUFFO0FBQUVGLFVBQUksRUFBRSxRQUFSO0FBQWtCLGlCQUFTO0FBQTNCO0FBSEgsR0F0Qlc7QUE0QnZCRyxZQUFVLEVBQUU7QUFDWEMsUUFBSSxFQUFFLENBQ0w7QUFDQ0osVUFBSSxFQUFFLE9BRFA7QUFFQ0ssWUFBTSxFQUFFLENBQUMseUJBQUQsRUFBNEIsd0JBQTVCLENBRlQ7QUFHQ0MsZUFBUyxFQUFFLG1CQUFDUixVQUFELEVBQWFTLFdBQWIsRUFBNkI7QUFDdkMsWUFBTUMsUUFBUSxHQUFHQyw4REFBTSxDQUFDLGFBQUQsQ0FBTixDQUFzQkMsZ0JBQXRCLEVBQWpCLENBRHVDLENBQ29CO0FBQzNEOztBQUZ1QyxZQUdoQ1gsQ0FIZ0MsR0FHeEJELFVBSHdCLENBR2hDQyxDQUhnQztBQUFBLFlBRzdCRSxDQUg2QixHQUd4QkgsVUFId0IsQ0FHN0JHLENBSDZCO0FBSXZDLGVBQU9VLHFFQUFXLENBQUMseUJBQUQsRUFBNEI7QUFDN0NaLFdBQUMsRUFBRUEsQ0FEMEM7QUFFN0NFLFdBQUMsRUFBRUE7QUFGMEMsU0FBNUIsRUFHZk8sUUFBUSxDQUFDRCxXQUhNLENBQWxCO0FBSUE7QUFYRixLQURLO0FBREssR0E1Qlc7QUE4Q3ZCSyxZQUFVLEVBQUUsQ0FBQztBQUNaQyxXQURZLHFCQUNGLENBQUUsQ0FEQTtBQUVaQyxRQUZZLGtCQUVMO0FBQ04sYUFBTywyREFBQyw2REFBRCxDQUFhLE9BQWIsT0FBUDtBQUNBO0FBSlcsR0FBRCxDQTlDVztBQXFEdkJDLE1BckR1QixzQkFxRDJDO0FBQUEsUUFBM0RqQixVQUEyRCxRQUEzREEsVUFBMkQ7QUFBQSxRQUEvQ2tCLGFBQStDLFFBQS9DQSxhQUErQztBQUFBLFFBQWhDekIsU0FBZ0MsUUFBaENBLFNBQWdDO0FBQUEsUUFBckIwQixpQkFBcUIsUUFBckJBLGlCQUFxQjtBQUFBLFFBRWhFbEIsQ0FGZ0UsR0FLN0RELFVBTDZELENBRWhFQyxDQUZnRTtBQUFBLFFBR2hFRSxDQUhnRSxHQUs3REgsVUFMNkQsQ0FHaEVHLENBSGdFO0FBQUEsUUFJaEVDLFlBSmdFLEdBSzdESixVQUw2RCxDQUloRUksWUFKZ0U7QUFPakUsUUFBTVAsTUFBTSxHQUFHO0FBQ2R1QixtQkFBYSxFQUFFLFVBQVNqQixDQURWO0FBRWRrQixnQkFBVSxFQUFFLFVBQVVwQixDQUZSO0FBR2RxQixlQUFTLEVBQUdsQixZQUFZLEtBQUssUUFBbEIsR0FBNkIsUUFBN0IsR0FBdUM7QUFIcEMsS0FBZjtBQUtBLFdBQ0MsMkRBQUMsMkRBQUQsUUFDQywyREFBQyxtRUFBRCxRQUNDLDJEQUFDLCtEQUFEO0FBQVcsV0FBSyxFQUFDO0FBQWpCLE9BQ0MsMkRBQUMsa0VBQUQ7QUFDQyxXQUFLLEVBQUdqQiwwREFBRSxDQUFFLE9BQUYsQ0FEWDtBQUVDLFdBQUssRUFBR2dCLENBRlQ7QUFHQyxjQUFRLEVBQUcsa0JBQUVvQixJQUFGLEVBQVk7QUFDdEJMLHFCQUFhLENBQUU7QUFDZGYsV0FBQyxFQUFFb0I7QUFEVyxTQUFGLENBQWI7QUFHQSxPQVBGO0FBUUMsU0FBRyxFQUFHLENBUlA7QUFTQyxTQUFHLEVBQUc7QUFUUCxNQURELEVBWUMsMkRBQUMsa0VBQUQ7QUFDQyxXQUFLLEVBQUdwQywwREFBRSxDQUFFLFdBQUYsQ0FEWDtBQUVDLFdBQUssRUFBR2MsQ0FGVDtBQUdDLGNBQVEsRUFBRyxrQkFBRXNCLElBQUYsRUFBWTtBQUN0QkwscUJBQWEsQ0FBRTtBQUNkakIsV0FBQyxFQUFFc0I7QUFEVyxTQUFGLENBQWI7QUFHQSxPQVBGO0FBUUMsU0FBRyxFQUFHLENBUlA7QUFTQyxTQUFHLEVBQUc7QUFUUCxNQVpELENBREQsQ0FERCxFQTJCQywyREFBQywrREFBRCxRQUNDLDJEQUFDLDZEQUFEO0FBQVMsY0FBUSxFQUFFLENBQ2xCO0FBQ0NsQyxZQUFJLEVBQUUsY0FEUDtBQUVDSCxhQUFLLEVBQUVDLDBEQUFFLENBQUMsV0FBRCxDQUZWO0FBR0NxQyxnQkFBUSxFQUFFcEIsWUFBWSxLQUFLLEtBSDVCO0FBSUNxQixlQUFPLEVBQUU7QUFBQSxpQkFBTVAsYUFBYSxDQUFDO0FBQzVCZCx3QkFBWSxFQUFFO0FBRGMsV0FBRCxDQUFuQjtBQUFBO0FBSlYsT0FEa0IsRUFTbEI7QUFDQ2YsWUFBSSxFQUFFLGNBRFA7QUFFQ0gsYUFBSyxFQUFFQywwREFBRSxDQUFDLGNBQUQsQ0FGVjtBQUdDcUMsZ0JBQVEsRUFBRXBCLFlBQVksS0FBSyxRQUg1QjtBQUlDcUIsZUFBTyxFQUFFO0FBQUEsaUJBQU1QLGFBQWEsQ0FBQztBQUFDZCx3QkFBWSxFQUFFO0FBQWYsV0FBRCxDQUFuQjtBQUFBO0FBSlYsT0FUa0IsRUFlbEI7QUFDQ2YsWUFBSSxFQUFFLGdCQURQO0FBRUNILGFBQUssRUFBRUMsMERBQUUsQ0FBQyxjQUFELENBRlY7QUFHQ3FDLGdCQUFRLEVBQUVwQixZQUFZLEtBQUssUUFINUI7QUFJQ3FCLGVBQU8sRUFBRTtBQUFBLGlCQUFNUCxhQUFhLENBQUM7QUFBQ2Qsd0JBQVksRUFBRTtBQUFmLFdBQUQsQ0FBbkI7QUFBQTtBQUpWLE9BZmtCO0FBQW5CLE1BREQsQ0EzQkQsRUFvREM7QUFBSyxlQUFTLG1DQUFkO0FBQW1ELFdBQUssRUFBRVA7QUFBMUQsTUFwREQsRUFxREM7QUFBSyxlQUFTLDRFQUNzREcsVUFBVSxDQUFDUCxTQURqRSw0QkFDNEZPLFVBQVUsQ0FBQ0ksWUFEdkc7QUFBZCxPQUdHLE9BQU9lLGlCQUFQLEtBQTZCLFVBQTdCLENBQXdDO0FBQXhDLE1BQ0MsMkRBQUMsNkRBQUQ7QUFBYSxrQkFBWSxFQUFHO0FBQTVCLE1BREQsR0FFQyxvRkFMSixDQUt1QjtBQUx2QixLQXJERCxDQUREO0FBZ0VBLEdBaklzQjtBQW1JdkJILE1Bbkl1QixrQkFtSWhCO0FBQ047QUFDQSxXQUFPLHdFQUFLLDJEQUFDLDZEQUFELENBQWEsT0FBYixPQUFMLENBQVA7QUFDQTtBQXRJc0IsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CUDs7O0FBR0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFJQSxJQUFNVSxjQUFjLEdBQUcsQ0FBQyxnQkFBRCxFQUFtQixjQUFuQixFQUFtQyxhQUFuQyxFQUFrRCxXQUFsRCxFQUErRCxZQUEvRCxDQUF2QjtBQUVPLElBQU0xQyxJQUFJLEdBQUcseUJBQWI7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDdkJDLE9BQUssRUFBRUMsMERBQUUsQ0FBRSxPQUFGLENBRGM7QUFHdkJDLFFBQU0sRUFBRSxDQUFDLG1CQUFELENBSGU7QUFLdkJDLE1BQUksRUFBRSwyREFBQyx5REFBRDtBQUFLLFdBQU8sRUFBQyxXQUFiO0FBQXlCLFNBQUssRUFBQztBQUEvQixLQUE0RCwyREFBQywwREFBRDtBQUFNLEtBQUMsRUFBQyxpQkFBUjtBQUEwQixRQUFJLEVBQUM7QUFBL0IsSUFBNUQsRUFBb0csMkRBQUMsMERBQUQ7QUFBTSxLQUFDLEVBQUM7QUFBUixJQUFwRyxFQUF3TiwyREFBQywwREFBRDtBQUFNLEtBQUMsRUFBQztBQUFSLElBQXhOLENBTGlCO0FBT3ZCQyxhQUFXLEVBQUVILDBEQUFFLENBQUUsc0JBQUYsQ0FQUTtBQVN2QkksVUFBUSxFQUFFLFFBVGE7QUFXdkJDLFVBQVEsRUFBRTtBQUNUQyxhQUFTLEVBQUUsSUFERjtBQUVUQyxZQUFRLEVBQUUsSUFGRDtBQUdUQyxZQUFRLEVBQUUsS0FIRDtBQUlUQyxRQUFJLEVBQUU7QUFKRyxHQVhhO0FBa0J2QkMsUUFBTSxFQUFFLENBQ1A7QUFBRWIsUUFBSSxFQUFFLFNBQVI7QUFBbUJjLFNBQUssRUFBRVgsMERBQUUsQ0FBRSxTQUFGLENBQTVCO0FBQTBDWSxhQUFTLEVBQUU7QUFBckQsR0FETyxFQUVQO0FBQUVmLFFBQUksRUFBRSxPQUFSO0FBQWlCYyxTQUFLLEVBQUVYLDBEQUFFLENBQUUsT0FBRjtBQUExQixHQUZPLEVBR1A7QUFBRUgsUUFBSSxFQUFFLFlBQVI7QUFBc0JjLFNBQUssRUFBRVgsMERBQUUsQ0FBRSxZQUFGO0FBQS9CLEdBSE8sQ0FsQmU7QUF3QnZCYSxZQUFVLEVBQUU7QUFDWEMsS0FBQyxFQUFFO0FBQUVDLFVBQUksRUFBRSxRQUFSO0FBQWtCLGlCQUFTO0FBQTNCLEtBRFE7QUFFWEMsS0FBQyxFQUFFO0FBQUVELFVBQUksRUFBRSxRQUFSO0FBQWtCLGlCQUFTO0FBQTNCLEtBRlE7QUFHWHlCLGFBQVMsRUFBRTtBQUFFekIsVUFBSSxFQUFFLFFBQVI7QUFBa0IsaUJBQVM7QUFBM0IsS0FIQTtBQUlYMEIsU0FBSyxFQUFFO0FBQUUxQixVQUFJLEVBQUU7QUFBUixLQUpJO0FBS1gyQixVQUFNLEVBQUU7QUFBRTNCLFVBQUksRUFBRTtBQUFSO0FBTEcsR0F4Qlc7QUFnQ3ZCRyxZQUFVLEVBQUU7QUFDWEMsUUFBSSxFQUFFLENBQ0w7QUFDQ0osVUFBSSxFQUFFLE9BRFA7QUFFQ0ssWUFBTSxFQUFFLENBQUMseUJBQUQsRUFBNEIsd0JBQTVCLENBRlQ7QUFHQ0MsZUFBUyxFQUFFLG1CQUFDUixVQUFELEVBQWFTLFdBQWIsRUFBNkI7QUFDdkMsWUFBTUMsUUFBUSxHQUFHQyw4REFBTSxDQUFDLGFBQUQsQ0FBTixDQUFzQkMsZ0JBQXRCLEVBQWpCLENBRHVDLENBQ29CO0FBQzNEOztBQUZ1QyxZQUdoQ1gsQ0FIZ0MsR0FHMkJELFVBSDNCLENBR2hDQyxDQUhnQztBQUFBLFlBRzdCRSxDQUg2QixHQUcyQkgsVUFIM0IsQ0FHN0JHLENBSDZCO0FBQUEsWUFHMUIyQixPQUgwQixHQUcyQjlCLFVBSDNCLENBRzFCOEIsT0FIMEI7QUFBQSxZQUdqQkMsVUFIaUIsR0FHMkIvQixVQUgzQixDQUdqQitCLFVBSGlCO0FBQUEsWUFHTEMsT0FISyxHQUcyQmhDLFVBSDNCLENBR0xnQyxPQUhLO0FBQUEsWUFHSUMsUUFISixHQUcyQmpDLFVBSDNCLENBR0lpQyxRQUhKO0FBQUEsWUFHY04sU0FIZCxHQUcyQjNCLFVBSDNCLENBR2MyQixTQUhkO0FBSXZDLGVBQU9kLHFFQUFXLENBQUMseUJBQUQsRUFBNEI7QUFDN0NaLFdBQUMsRUFBRUEsQ0FEMEM7QUFFN0NFLFdBQUMsRUFBRUEsQ0FGMEM7QUFHN0N5QixlQUFLLEVBQUVFLE9BQU8sSUFBSUUsT0FIMkI7QUFJN0NILGdCQUFNLEVBQUVFLFVBQVUsSUFBSUUsUUFKdUI7QUFLN0NOLG1CQUFTLEVBQUVBO0FBTGtDLFNBQTVCLEVBTWZqQixRQUFRLENBQUNELFdBTk0sQ0FBbEI7QUFPQTtBQWRGLEtBREs7QUFESyxHQWhDVztBQXFEdkJLLFlBQVUsRUFBRSxDQUFDO0FBQ1pDLFdBRFkscUJBQ0YsQ0FBRSxDQURBO0FBRVpDLFFBRlksa0JBRUw7QUFDTixhQUFPLDJEQUFDLDZEQUFELENBQWEsT0FBYixPQUFQO0FBQ0E7QUFKVyxHQUFELENBckRXO0FBNER2QkMsTUE1RHVCLHNCQTRENEQ7QUFBQSxRQUE1RWpCLFVBQTRFLFFBQTVFQSxVQUE0RTtBQUFBLFFBQWhFa0IsYUFBZ0UsUUFBaEVBLGFBQWdFO0FBQUEsUUFBakR6QixTQUFpRCxRQUFqREEsU0FBaUQ7QUFBQSxRQUF0QzBCLGlCQUFzQyxRQUF0Q0EsaUJBQXNDO0FBQUEsUUFBbkJlLGVBQW1CLFFBQW5CQSxlQUFtQjtBQUFBLFFBRWpGakMsQ0FGaUYsR0FPOUVELFVBUDhFLENBRWpGQyxDQUZpRjtBQUFBLFFBR2pGRSxDQUhpRixHQU85RUgsVUFQOEUsQ0FHakZHLENBSGlGO0FBQUEsUUFJakZ5QixLQUppRixHQU85RTVCLFVBUDhFLENBSWpGNEIsS0FKaUY7QUFBQSxRQUtqRkMsTUFMaUYsR0FPOUU3QixVQVA4RSxDQUtqRjZCLE1BTGlGO0FBQUEsUUFNakZGLFNBTmlGLEdBTzlFM0IsVUFQOEUsQ0FNakYyQixTQU5pRjtBQVFsRixRQUFNOUIsTUFBTSxHQUFHO0FBQ2R1QixtQkFBYSxFQUFFLFVBQVNqQixDQURWO0FBRWRrQixnQkFBVSxFQUFFLFVBQVVwQixDQUZSO0FBR2QwQixlQUFTLEVBQUVBLFNBQVMsR0FBRztBQUhULEtBQWY7O0FBS0EsUUFBTVEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxTQUFSLEVBQW1CQyxHQUFuQixFQUF3QkMsS0FBeEIsRUFBa0M7QUFDcEQsVUFBSUYsU0FBUyxLQUFLLFFBQWxCLEVBQTJCO0FBQzFCLFlBQU1HLFlBQVksR0FBSUYsR0FBRyxDQUFDRyxZQUFKLEdBQW1CLEdBQXBCLEdBQTJCLEdBQTNCLEdBQWlDSCxHQUFHLENBQUNHLFlBQTFEO0FBQ0F2QixxQkFBYSxDQUFDO0FBQUVTLG1CQUFTLEVBQUVhO0FBQWIsU0FBRCxDQUFiO0FBQ0FGLFdBQUcsQ0FBQ0ksS0FBSixDQUFVQyxNQUFWLEdBQW1CLE1BQW5CO0FBQ0E7O0FBQUE7QUFDRCxVQUFJTixTQUFTLEtBQUssT0FBbEIsRUFBMkIsT0FOeUIsQ0FPcEQ7O0FBQ0EsVUFBTU8sV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsR0FBRyxDQUFDUyxVQUFKLENBQWVDLFdBQWYsR0FBNkI3QyxDQUF4QyxDQUFwQjtBQUNBLFVBQU04QyxXQUFXLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixHQUFHLENBQUNTLFVBQUosQ0FBZUMsV0FBZixHQUE2QkosV0FBeEMsQ0FBcEI7QUFDQSxVQUFNTSxVQUFVLEdBQUdMLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixHQUFHLENBQUNhLFdBQUosR0FBa0JoRCxDQUE3QixDQUFuQjtBQUNBLFVBQU1pRCxLQUFLLEdBQUdQLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixHQUFHLENBQUNhLFdBQUosR0FBa0JQLFdBQTdCLENBQWQ7QUFDQSxVQUFNUyxRQUFRLEdBQUdSLElBQUksQ0FBQ0MsS0FBTCxDQUFXUSxRQUFRLENBQUNmLEtBQUssQ0FBQ2dCLEtBQVAsRUFBYyxFQUFkLENBQVIsR0FBNEJYLFdBQXZDLENBQWpCO0FBQ0EsVUFBTVksUUFBUSxHQUFHckQsQ0FBQyxHQUFHa0QsUUFBckI7QUFDQSxVQUFJSSxRQUFRLEdBQUdMLEtBQWY7O0FBQ0EsVUFBSUssUUFBUSxHQUFHLEVBQWYsRUFBbUI7QUFBQ0EsZ0JBQVEsR0FBRyxFQUFYO0FBQWM7O0FBQ2xDLFVBQUlBLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQUNBLGdCQUFRLEdBQUcsQ0FBWDtBQUFhOztBQUNoQ3ZDLG1CQUFhLENBQUU7QUFDZGYsU0FBQyxFQUFFc0Q7QUFEVyxPQUFGLENBQWI7QUFHQW5CLFNBQUcsQ0FBQ0ksS0FBSixDQUFVYSxLQUFWLEdBQWtCLE1BQWxCLENBcEJvRCxDQXFCcEQ7O0FBQ0E7QUFDQSxLQXZCRDs7QUF3QkEsV0FDQywyREFBQywyREFBRCxRQUNDLDJEQUFDLG1FQUFELFFBQ0MsMkRBQUMsK0RBQUQ7QUFBVyxXQUFLLEVBQUM7QUFBakIsT0FDQywyREFBQyxrRUFBRDtBQUNDLFdBQUssRUFBR3BFLDBEQUFFLENBQUUsZ0JBQUYsQ0FEWDtBQUVDLFdBQUssRUFBR3dDLFNBRlQ7QUFHQyxjQUFRLEVBQUcsa0JBQUVKLElBQUYsRUFBWTtBQUN0QkwscUJBQWEsQ0FBRTtBQUNkUyxtQkFBUyxFQUFFSjtBQURHLFNBQUYsQ0FBYjtBQUdBLE9BUEY7QUFRQyxTQUFHLEVBQUcsSUFSUDtBQVNDLFNBQUcsRUFBRyxLQVRQO0FBVUMsVUFBSSxFQUFHO0FBVlIsTUFERCxFQWFDLDJEQUFDLGtFQUFEO0FBQ0MsV0FBSyxFQUFHcEMsMERBQUUsQ0FBRSxPQUFGLENBRFg7QUFFQyxXQUFLLEVBQUdnQixDQUZUO0FBR0MsY0FBUSxFQUFHLGtCQUFFb0IsSUFBRixFQUFZO0FBQ3RCTCxxQkFBYSxDQUFFO0FBQ2RmLFdBQUMsRUFBRW9CO0FBRFcsU0FBRixDQUFiO0FBR0EsT0FQRjtBQVFDLFNBQUcsRUFBRyxDQVJQO0FBU0MsU0FBRyxFQUFHO0FBVFAsTUFiRCxFQXdCQywyREFBQyxrRUFBRDtBQUNDLFdBQUssRUFBR3BDLDBEQUFFLENBQUUsV0FBRixDQURYO0FBRUMsV0FBSyxFQUFHYyxDQUZUO0FBR0MsY0FBUSxFQUFHLGtCQUFFc0IsSUFBRixFQUFZO0FBQ3RCTCxxQkFBYSxDQUFFO0FBQ2RqQixXQUFDLEVBQUVzQjtBQURXLFNBQUYsQ0FBYjtBQUdBLE9BUEY7QUFRQyxTQUFHLEVBQUcsQ0FSUDtBQVNDLFNBQUcsRUFBRztBQVRQLE1BeEJELENBREQsQ0FERCxFQXVDQywyREFBQywrREFBRCxRQUNDLDJEQUFDLDZEQUFELFFBQ0MsMkRBQUMsNkRBQUQ7QUFDQyxjQUFRLEVBQUUsa0JBQUNtQyxLQUFELEVBQVc7QUFDcEI7QUFDQXhDLHFCQUFhLENBQUM7QUFDYlUsZUFBSyxFQUFFOEIsS0FBSyxDQUFDQyxFQURBO0FBRWI5QixnQkFBTSxFQUFFNkIsS0FBSyxDQUFDRTtBQUZELFNBQUQsQ0FBYjtBQUlBLE9BUEY7QUFRQyxVQUFJLEVBQUUsQ0FBQyxPQUFELENBUlA7QUFTQyxXQUFLLEVBQUdoQyxLQUFELEdBQVNBLEtBQVQsR0FBZ0IsSUFUeEI7QUFVQyxZQUFNLEVBQUUsdUJBQVk7QUFBQSxZQUFWaUMsSUFBVSxTQUFWQSxJQUFVO0FBQ25CLGVBQ0MsMkRBQUMsZ0VBQUQ7QUFDQyxtQkFBUyxFQUFDLG9EQURYO0FBRUMsZUFBSyxFQUFHMUUsMERBQUUsQ0FBRSxZQUFGLENBRlg7QUFHQyxpQkFBTyxFQUFFMEUsSUFIVjtBQUlDLGNBQUksRUFBQztBQUpOLFVBREQ7QUFRQTtBQW5CRixNQURELENBREQsQ0F2Q0QsRUFnRUM7QUFBSyxlQUFTLG1DQUFkO0FBQW1ELFdBQUssRUFBRWhFO0FBQTFELE1BaEVELEVBaUVDLDJEQUFDLGtFQUFEO0FBQ0UsVUFBSSxFQUFJO0FBQ1AwRCxhQUFLLEVBQUUsRUFEQTtBQUVQWixjQUFNLEVBQUU7QUFGRCxPQURWLENBS0U7QUFDQTtBQU5GO0FBT0UsZUFBUyw0RUFDMkQzQyxVQUFVLENBQUNQLFNBRHRFLENBUFgsQ0FVRTtBQUNBO0FBQ0E7QUFaRjtBQWFFLFlBQU0sRUFBRztBQUNScUUsV0FBRyxFQUFFLEtBREc7QUFFUkMsYUFBSyxFQUFFLElBRkM7QUFHUkMsY0FBTSxFQUFFLElBSEE7QUFJUkMsWUFBSSxFQUFFO0FBSkUsT0FiWDtBQW1CRSxtQkFBYSxFQUFHLHVCQUFDN0IsS0FBRCxFQUFRQyxTQUFSLEVBQW1CQyxHQUFuQixFQUF3QkMsS0FBeEIsRUFBa0M7QUFDakRMLHVCQUFlLENBQUUsS0FBRixDQUFmO0FBQ0EsT0FyQkg7QUFzQkUsY0FBUSxFQUFJZ0Msc0RBQVEsQ0FBQy9CLFVBQUQsRUFBYSxHQUFiLENBdEJ0QjtBQXVCRSxrQkFBWSxFQUFHLHNCQUFFQyxLQUFGLEVBQVNDLFNBQVQsRUFBb0JDLEdBQXBCLEVBQXlCQyxLQUF6QixFQUFvQztBQUNsREQsV0FBRyxDQUFDSSxLQUFKLENBQVVhLEtBQVYsR0FBa0IsTUFBbEI7QUFDQSxZQUFJbEIsU0FBUyxLQUFLLFFBQWxCLEVBQTRCO0FBQzVCLFlBQU1HLFlBQVksR0FBSUYsR0FBRyxDQUFDRyxZQUFKLEdBQW1CLEdBQXBCLEdBQTBCLEdBQTFCLEdBQWdDSCxHQUFHLENBQUNHLFlBQXpEO0FBQ0F2QixxQkFBYSxDQUFFO0FBQ2RTLG1CQUFTLEVBQUVhO0FBREcsU0FBRixDQUFiO0FBR0FOLHVCQUFlLENBQUUsSUFBRixDQUFmO0FBQ0E7QUEvQkgsT0FrQ0UsQ0FBQ04sS0FBRCxJQUNBLDJEQUFDLGtFQUFEO0FBQ0MsY0FBUSxFQUFFLGtCQUFDOEIsS0FBRCxFQUFXO0FBQ25CeEMscUJBQWEsQ0FBQztBQUNiVSxlQUFLLEVBQUU4QixLQUFLLENBQUNDLEVBREE7QUFFYjlCLGdCQUFNLEVBQUU2QixLQUFLLENBQUNFO0FBRkQsU0FBRCxDQUFiO0FBSUEsT0FOSDtBQU9DLGtCQUFZLEVBQUUsQ0FBQyxPQUFELENBUGY7QUFRQyxZQUFNLEVBQUM7QUFSUixNQW5DRixFQStDRS9CLE1BQU0sSUFDTjtBQUFLLGVBQVMsRUFBQyxnQ0FBZjtBQUFnRCxTQUFHLEVBQUVBO0FBQXJELE1BaERGLEVBbURFRCxLQUFLLElBQ0w7QUFBWSxlQUFTLEVBQUM7QUFBdEIsT0FDRyxPQUFPVCxpQkFBUCxLQUE2QixVQUE3QixDQUF3QztBQUF4QyxNQUNDLDJEQUFDLDZEQUFEO0FBQWEsa0JBQVksRUFBRyxLQUE1QjtBQUFvQyxtQkFBYSxFQUFFTztBQUFuRCxNQURELEdBRUMsb0ZBSEosQ0FHdUI7QUFIdkIsS0FwREYsQ0FqRUQsQ0FERDtBQWdJQSxHQWpPc0I7QUFtT3ZCVixNQW5PdUIsa0JBbU9oQjtBQUNOO0FBQ0EsV0FBTyx3RUFBSywyREFBQyw2REFBRCxDQUFhLE9BQWIsT0FBTCxDQUFQO0FBQ0E7QUF0T3NCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JQO0FBRUE7Ozs7QUFHQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFHQTtBQUVPLElBQU1oQyxJQUFJLEdBQUcsd0JBQWI7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDdkJDLE9BQUssRUFBRUMsMERBQUUsQ0FBQyxtQkFBRCxDQURjO0FBR3ZCQyxRQUFNLEVBQUUsQ0FBQyxtQkFBRCxDQUhlO0FBS3ZCQyxNQUFJLEVBQUUsMkRBQUMseURBQUQ7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDO0FBQWhELEtBQTRELDJEQUFDLDBEQUFEO0FBQU0sUUFBSSxFQUFDLE1BQVg7QUFBa0IsS0FBQyxFQUFDO0FBQXBCLElBQTVELEVBQW9HLDJEQUFDLDBEQUFEO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFBcEcsQ0FMaUI7QUFPdkJDLGFBQVcsRUFBRUgsMERBQUUsQ0FBQyxvRUFBRCxDQVBRO0FBU3ZCSSxVQUFRLEVBQUUsUUFUYTtBQVd2QkMsVUFBUSxFQUFFO0FBQ1RFLFlBQVEsRUFBRTtBQURELEdBWGE7QUFldkJHLFFBQU0sRUFBRSxDQUNQO0FBQUViLFFBQUksRUFBRSxTQUFSO0FBQW1CYyxTQUFLLEVBQUVYLDBEQUFFLENBQUUsU0FBRixDQUE1QjtBQUEwQ1ksYUFBUyxFQUFFO0FBQXJELEdBRE8sRUFFUDtBQUFFZixRQUFJLEVBQUUsT0FBUjtBQUFpQmMsU0FBSyxFQUFFWCwwREFBRSxDQUFFLE9BQUY7QUFBMUIsR0FGTyxDQWZlO0FBb0J2QmEsWUFBVSxFQUFFO0FBQ1hFLFFBQUksRUFBQztBQUFFQSxVQUFJLEVBQUUsUUFBUjtBQUFpQixpQkFBU2lFO0FBQTFCLEtBRE07QUFDa0M7QUFDN0NsRSxLQUFDLEVBQUU7QUFBRUMsVUFBSSxFQUFFLFFBQVI7QUFBa0IsaUJBQVM7QUFBM0IsS0FGUTtBQUdYQyxLQUFDLEVBQUU7QUFBRUQsVUFBSSxFQUFFO0FBQVIsS0FIUTtBQUlYeUIsYUFBUyxFQUFFO0FBQUV6QixVQUFJLEVBQUUsUUFBUjtBQUFrQixpQkFBUztBQUEzQixLQUpBO0FBS1hrRSxXQUFPLEVBQUU7QUFBRWxFLFVBQUksRUFBRSxRQUFSO0FBQWtCLGlCQUFTO0FBQTNCLEtBTEU7QUFNWDRCLFdBQU8sRUFBRTtBQUFFNUIsVUFBSSxFQUFFO0FBQVIsS0FORTtBQU9YNkIsY0FBVSxFQUFFO0FBQUU3QixVQUFJLEVBQUU7QUFBUixLQVBEO0FBUVhtRSxXQUFPLEVBQUU7QUFBRW5FLFVBQUksRUFBRTtBQUFSLEtBUkU7QUFTWG9FLGVBQVcsRUFBRTtBQUFFcEUsVUFBSSxFQUFFO0FBQVIsS0FURjtBQVVYcUUscUJBQWlCLEVBQUU7QUFBQ3JFLFVBQUksRUFBRTtBQUFQLEtBVlIsQ0FVeUI7O0FBVnpCLEdBcEJXO0FBaUN2QlksWUFBVSxFQUFFLENBQ1g7QUFDQ0MsV0FERCxtQkFDU2YsVUFEVCxFQUNxQlMsV0FEckIsRUFDa0M7QUFDaEM7QUFDQTtBQUZnQyxVQUkvQlIsQ0FKK0IsR0FTNUJELFVBVDRCLENBSS9CQyxDQUorQjtBQUFBLFVBSy9CRSxDQUwrQixHQVM1QkgsVUFUNEIsQ0FLL0JHLENBTCtCO0FBQUEsVUFNL0IyQixPQU4rQixHQVM1QjlCLFVBVDRCLENBTS9COEIsT0FOK0I7QUFBQSxVQU8vQkMsVUFQK0IsR0FTNUIvQixVQVQ0QixDQU8vQitCLFVBUCtCO0FBQUEsVUFRL0JKLFNBUitCLEdBUzVCM0IsVUFUNEIsQ0FRL0IyQixTQVIrQjs7QUFVaEMsVUFBSUcsT0FBSixFQUFhO0FBQ1osZUFBT2pCLHFFQUFXLENBQUMseUJBQUQsRUFBNEI7QUFDN0NaLFdBQUMsRUFBRUEsQ0FEMEM7QUFFN0NFLFdBQUMsRUFBRUEsQ0FGMEM7QUFHN0N5QixlQUFLLEVBQUVFLE9BSHNDO0FBSTdDRCxnQkFBTSxFQUFFRSxVQUpxQztBQUs3Q0osbUJBQVMsRUFBRUE7QUFMa0MsU0FBNUIsRUFNZmxCLFdBTmUsQ0FBbEI7QUFPQTs7QUFDRCxhQUFPSSxxRUFBVyxDQUFDLHlCQUFELEVBQTRCO0FBQzdDWixTQUFDLEVBQUVBLENBRDBDO0FBRTdDRSxTQUFDLEVBQUVBO0FBRjBDLE9BQTVCLEVBR2ZNLFdBSGUsQ0FBbEI7QUFJQSxLQXhCRjtBQXlCQ08sUUF6QkQsa0JBeUJRO0FBQ04sYUFBTywyREFBQyw2REFBRCxDQUFhLE9BQWIsT0FBUDtBQUNBO0FBM0JGLEdBRFcsQ0FqQ1c7QUFpRXZCQyxNQWpFdUIsc0JBaUUyQztBQUFBLFFBQTNEakIsVUFBMkQsUUFBM0RBLFVBQTJEO0FBQUEsUUFBL0NrQixhQUErQyxRQUEvQ0EsYUFBK0M7QUFBQSxRQUFoQ3pCLFNBQWdDLFFBQWhDQSxTQUFnQztBQUFBLFFBQXJCMEIsaUJBQXFCLFFBQXJCQSxpQkFBcUI7QUFBQSxRQUVoRWlELE9BRmdFLEdBYTdEcEUsVUFiNkQsQ0FFaEVvRSxPQUZnRTtBQUFBLFFBR2hFbkUsQ0FIZ0UsR0FhN0RELFVBYjZELENBR2hFQyxDQUhnRTtBQUFBLFFBSWhFRSxDQUpnRSxHQWE3REgsVUFiNkQsQ0FJaEVHLENBSmdFO0FBQUEsUUFLaEVELElBTGdFLEdBYTdERixVQWI2RCxDQUtoRUUsSUFMZ0U7QUFBQSxRQU1oRXNFLE9BTmdFLEdBYTdEeEUsVUFiNkQsQ0FNaEV3RSxPQU5nRTtBQUFBLFFBT2hFMUMsT0FQZ0UsR0FhN0Q5QixVQWI2RCxDQU9oRThCLE9BUGdFO0FBQUEsUUFRaEVDLFVBUmdFLEdBYTdEL0IsVUFiNkQsQ0FRaEUrQixVQVJnRTtBQUFBLFFBU2hFc0MsT0FUZ0UsR0FhN0RyRSxVQWI2RCxDQVNoRXFFLE9BVGdFO0FBQUEsUUFVaEVFLGlCQVZnRSxHQWE3RHZFLFVBYjZELENBVWhFdUUsaUJBVmdFO0FBQUEsUUFXaEVELFdBWGdFLEdBYTdEdEUsVUFiNkQsQ0FXaEVzRSxXQVhnRTtBQUFBLFFBWWhFM0MsU0FaZ0UsR0FhN0QzQixVQWI2RCxDQVloRTJCLFNBWmdFO0FBY2pFYixnRUFBVSxDQUFDLGtCQUFELEVBQXFCO0FBQzlCMkQsaUJBQVcsRUFBRSxnQkFEaUI7QUFFOUJDLFlBQU0sRUFBRTtBQUZzQixLQUFyQixDQUFWO0FBSUEsUUFBTTdFLE1BQU0sR0FBRztBQUNkLHNCQUFnQndFLE9BREY7QUFFZCxtQkFBYUQsT0FGQztBQUdkaEQsbUJBQWEsRUFBRSxVQUFTakIsQ0FIVjtBQUlka0IsZ0JBQVUsRUFBRSxVQUFVcEIsQ0FKUjtBQUtkMEUscUJBQWUsRUFBRU4sT0FMSDtBQU1kTyxxQkFBZSxFQUFFLFNBQVM3QyxVQUFULEdBQXNCLEdBTnpCO0FBT2RKLGVBQVMsRUFBRUEsU0FBUyxHQUFHO0FBUFQsS0FBZjtBQVNBLFFBQUlrRCxXQUFXLEdBQUcsT0FBbEI7QUFDQSxRQUFJTixpQkFBaUIsR0FBRyxHQUF4QixFQUE2Qk0sV0FBVyxHQUFHLE1BQWQ7QUFDN0IsV0FDQywyREFBQywyREFBRCxRQUNDLDJEQUFDLG1FQUFELFFBQ0MsMkRBQUMsK0RBQUQ7QUFBWSxXQUFLLEVBQUM7QUFBbEIsT0FDQywyREFBQyxrRUFBRDtBQUNDLFdBQUssRUFBRzFGLDBEQUFFLENBQUUsT0FBRixDQURYO0FBRUMsV0FBSyxFQUFHZ0IsQ0FGVDtBQUdDLGNBQVEsRUFBRyxrQkFBRW9CLElBQUYsRUFBWTtBQUN0QkwscUJBQWEsQ0FBRTtBQUNkZixXQUFDLEVBQUVvQjtBQURXLFNBQUYsQ0FBYjtBQUdBLE9BUEY7QUFRQyxTQUFHLEVBQUcsQ0FSUDtBQVNDLFNBQUcsRUFBRztBQVRQLE1BREQsRUFZQywyREFBQyxrRUFBRDtBQUNDLFdBQUssRUFBR3BDLDBEQUFFLENBQUUsV0FBRixDQURYO0FBRUMsV0FBSyxFQUFHYyxDQUZUO0FBR0MsY0FBUSxFQUFHLGtCQUFFc0IsSUFBRixFQUFZO0FBQ3RCTCxxQkFBYSxDQUFFO0FBQ2RqQixXQUFDLEVBQUVzQjtBQURXLFNBQUYsQ0FBYjtBQUdBLE9BUEY7QUFRQyxTQUFHLEVBQUcsQ0FSUDtBQVNDLFNBQUcsRUFBRztBQVRQLE1BWkQsQ0FERCxFQXlCQywyREFBQywrREFBRDtBQUFXLFdBQUssRUFBQztBQUFqQixPQUNDLDJEQUFDLGtFQUFEO0FBQ0MsV0FBSyxFQUFHcEMsMERBQUUsQ0FBRSxnQkFBRixDQURYO0FBRUMsV0FBSyxFQUFHd0MsU0FGVDtBQUdDLGNBQVEsRUFBRyxrQkFBRUosSUFBRixFQUFZO0FBQ3RCTCxxQkFBYSxDQUFFO0FBQ2RTLG1CQUFTLEVBQUVKO0FBREcsU0FBRixDQUFiO0FBR0EsT0FQRjtBQVFDLFNBQUcsRUFBRyxJQVJQO0FBU0MsU0FBRyxFQUFHLEtBVFA7QUFVQyxVQUFJLEVBQUc7QUFWUixNQURELEVBYUdyQixJQUFJLEtBQUssT0FBVCxJQUNELDJEQUFDLDZEQUFEO0FBQ0MsY0FBUSxFQUFFLGtCQUFDd0QsS0FBRCxFQUFXO0FBQ3BCO0FBQ0F4QyxxQkFBYSxDQUFDO0FBQ2JZLGlCQUFPLEVBQUU0QixLQUFLLENBQUNDLEVBREY7QUFFYjVCLG9CQUFVLEVBQUUyQixLQUFLLENBQUNFO0FBRkwsU0FBRCxDQUFiO0FBSUEsT0FQRjtBQVFDLFVBQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBUlA7QUFTQyxXQUFLLEVBQUc5QixPQUFELEdBQVdBLE9BQVgsR0FBb0IsSUFUNUI7QUFVQyxZQUFNLEVBQUUsdUJBQVk7QUFBQSxZQUFWK0IsSUFBVSxTQUFWQSxJQUFVO0FBQ25CLGVBQ0Msd0VBQ0U5QixVQUFVLElBQUk7QUFBSyxhQUFHLEVBQUVBLFVBQVY7QUFBc0IsaUJBQU8sRUFBRThCLElBQS9CO0FBQXFDLGVBQUssRUFBQyxNQUEzQztBQUFrRCxnQkFBTSxFQUFDLE1BQXpEO0FBQWdFLGVBQUssRUFBRTtBQUFDaUIsa0JBQU0sRUFBRTtBQUFUO0FBQXZFLFVBRGhCLEVBRUUsQ0FBQy9DLFVBQUQsSUFBZTtBQUFLLG1CQUFTLEVBQUUscUJBQWhCO0FBQXVDLGlCQUFPLEVBQUU4QjtBQUFoRCwrQkFGakIsQ0FERDtBQVFBO0FBbkJGLE1BZEYsRUFvQ0Msc0VBcENELEVBcUNFLHdFQUNDLDJEQUFDLDhEQUFEO0FBQ0MsV0FBSyxFQUFDLGtCQURQO0FBRUMsV0FBSyxFQUFHUSxPQUFELEdBQVlBLE9BQU8sQ0FBQ1UsS0FBcEIsR0FBNEJaLFNBRnBDO0FBR0MsY0FBUSxFQUNQLGtCQUFDVCxLQUFELEVBQVc7QUFDVixZQUFNekUsUUFBUSxHQUFHMEIsOERBQU0sQ0FBQyxhQUFELENBQU4sQ0FBc0JxRSxpQkFBdEIsRUFBakI7QUFDQSxZQUFNQyxTQUFTLEdBQUl2QixLQUFELEdBQVV3QixvRkFBMEIsQ0FBQ2pHLFFBQVEsQ0FBQ2tHLE1BQVYsRUFBa0J6QixLQUFsQixDQUExQixDQUFtRDBCLElBQTdELEdBQW9FakIsU0FBdEY7QUFDQWpELHFCQUFhLENBQUM7QUFBQ29ELHFCQUFXLEVBQUVXO0FBQWQsU0FBRCxDQUFiO0FBQ0EsWUFBTUksVUFBVSxHQUFJM0IsS0FBRCxHQUFVNEIsaURBQVMsQ0FBQzVCLEtBQUQsQ0FBVCxDQUFpQjZCLGFBQWpCLEVBQVYsR0FBNENwQixTQUEvRDtBQUNBakQscUJBQWEsQ0FBQztBQUFDcUQsMkJBQWlCLEVBQUVjO0FBQXBCLFNBQUQsQ0FBYjtBQUNBbkUscUJBQWEsQ0FBQztBQUFDbUQsaUJBQU8sRUFBRVg7QUFBVixTQUFELENBQWI7QUFDQTtBQVhILE1BREQsRUFlQyxzRUFmRCxDQXJDRixDQXpCRCxDQURELEVBa0ZDO0FBQUssZUFBUyxtQ0FBZDtBQUFtRCxXQUFLLEVBQUU3RDtBQUExRCxNQWxGRCxFQW1GQztBQUFLLGVBQVMsbURBQTRDSyxJQUE1QyxjQUFvREYsVUFBVSxDQUFDUCxTQUEvRCxrQkFBZ0Y2RSxXQUFoRixrQ0FBbUhPLFdBQW5IO0FBQWQsT0FFRSxDQUFDM0UsSUFBSSxLQUFLLE9BQVQsSUFBb0JBLElBQUksS0FBSyxlQUE5QixLQUNBLENBQUM0QixPQURELElBRUEsMkRBQUMsa0VBQUQ7QUFDQyxjQUFRLEVBQUUsa0JBQUM0QixLQUFELEVBQVc7QUFDbkJ4QyxxQkFBYSxDQUFDO0FBQ2JZLGlCQUFPLEVBQUU0QixLQUFLLENBQUNDLEVBREY7QUFFYjVCLG9CQUFVLEVBQUUyQixLQUFLLENBQUNFO0FBRkwsU0FBRCxDQUFiO0FBSUEsT0FOSDtBQU9DLGtCQUFZLEVBQUUsQ0FBQyxPQUFELENBUGY7QUFRQyxZQUFNLEVBQUM7QUFSUixNQUpGLEVBZ0JHLE9BQU96QyxpQkFBUCxLQUE2QixVQUE5QixJQUE2QztBQUM3QywrREFBQyw2REFBRDtBQUFhLGtCQUFZLEVBQUc7QUFBNUIsTUFqQkYsQ0FuRkQsQ0FERDtBQTBHQSxHQXhNc0I7QUEwTXZCSCxNQTFNdUIsa0JBME1oQjtBQUNOO0FBQ0EsV0FBTyx3RUFBSywyREFBQyw2REFBRCxDQUFhLE9BQWIsT0FBTCxDQUFQO0FBQ0E7QUE3TXNCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBUUEsSUFBTVUsY0FBYyxHQUFHLENBQUMsd0JBQUQsRUFBMkIseUJBQTNCLEVBQXNELHlCQUF0RCxDQUF2QjtBQUVPLElBQU0xQyxJQUFJLEdBQUcsbUJBQWI7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDdkJDLE9BQUssRUFBRUMsMERBQUUsQ0FBRSxNQUFGLENBRGM7QUFHdkJFLE1BQUksRUFBRSwyREFBQyx5REFBRDtBQUFLLFdBQU8sRUFBQyxXQUFiO0FBQXlCLFNBQUssRUFBQztBQUEvQixLQUE0RCwyREFBQywwREFBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQWtCLEtBQUMsRUFBQztBQUFwQixJQUE1RCxFQUFvRywyREFBQyx1REFBRCxRQUFHLDJEQUFDLDBEQUFEO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFBSCxDQUFwRyxDQUhpQjtBQUt2QkUsVUFBUSxFQUFFLFFBTGE7QUFPdkJELGFBQVcsRUFBRUgsMERBQUUsQ0FBRSxpRkFBRixDQVBRO0FBU3ZCSyxVQUFRLEVBQUU7QUFDVGdHLFNBQUssRUFBRSxDQUFFLE1BQUYsRUFBVSxNQUFWLENBREU7QUFFVDVGLFFBQUksRUFBRTtBQUZHLEdBVGE7QUFjdkJrQixZQUFVLEVBQUUsQ0FDWDtBQUNDQyxXQURELHFCQUNXLENBQUUsQ0FEYjtBQUVDQyxRQUZELGtCQUVRO0FBQ04sYUFBTywyREFBQyw2REFBRCxDQUFhLE9BQWIsT0FBUDtBQUNBO0FBSkYsR0FEVyxDQWRXO0FBdUJ2QlgsWUFBVSxFQUFFO0FBQ1hDLFFBQUksRUFBRSxDQUFDO0FBQ05KLFVBQUksRUFBRSxPQURBO0FBRU5LLFlBQU0sRUFBRSxDQUFDLGNBQUQsQ0FGRjtBQUdOQyxlQUFTLEVBQUUsbUJBQUNSLFVBQUQsRUFBZ0I7QUFDMUIsWUFBTVUsUUFBUSxHQUFHQyw4REFBTSxDQUFDLGFBQUQsQ0FBTixDQUFzQkMsZ0JBQXRCLEVBQWpCLENBRDBCLENBQ2lDOztBQUMzRCxZQUFNNkUsT0FBTyxHQUFHL0UsUUFBUSxDQUFDRCxXQUF6QjtBQUNBLFlBQU1pRixLQUFLLEdBQUdELE9BQU8sQ0FBQ0UsTUFBdEI7QUFDQSxZQUFNeEYsQ0FBQyxHQUFHMEMsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBRzRDLEtBQWQsQ0FBVjtBQUNBLFlBQU1qRixXQUFXLEdBQUcsRUFBcEI7QUFDQWdGLGVBQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBWTtBQUN2QixjQUFNQyxLQUFLLEdBQUdqRixxRUFBVyxDQUFDLHlCQUFELEVBQTRCO0FBQUNWLGFBQUMsRUFBQ0E7QUFBSCxXQUE1QixFQUFtQzBGLE1BQU0sQ0FBQ3BGLFdBQTFDLENBQXpCO0FBQ0FBLHFCQUFXLENBQUNzRixJQUFaLENBQWlCRCxLQUFqQjtBQUNBLFNBSEQ7QUFJQSxlQUFPakYscUVBQVcsQ0FBQyxtQkFBRCxFQUFzQixFQUF0QixFQUEwQkosV0FBMUIsQ0FBbEI7QUFDQTtBQWRLLEtBQUQ7QUFESyxHQXZCVztBQTBDdkJaLFFBQU0sRUFBRSxDQUNQO0FBQUViLFFBQUksRUFBRSxTQUFSO0FBQW1CYyxTQUFLLEVBQUVYLDBEQUFFLENBQUUsU0FBRixDQUE1QjtBQUEwQ1ksYUFBUyxFQUFFO0FBQXJELEdBRE8sRUFFUDtBQUFFZixRQUFJLEVBQUUsUUFBUjtBQUFrQmMsU0FBSyxFQUFFWCwwREFBRSxDQUFFLFFBQUY7QUFBM0IsR0FGTyxDQTFDZTtBQStDdkI4QixNQS9DdUIsc0JBK0NpQjtBQUFBLFFBQWhDRSxpQkFBZ0MsUUFBaENBLGlCQUFnQztBQUFBLFFBQWI2RSxRQUFhLFFBQWJBLFFBQWE7QUFDdkM7QUFDQSxRQUFNRixLQUFLLEdBQUduRiw4REFBTSxDQUFDLGFBQUQsQ0FBTixDQUFzQnNGLG1CQUF0QixDQUEwQ0QsUUFBMUMsRUFBb0QsQ0FBcEQsQ0FBZDtBQUNBLFFBQU1FLGNBQWMsR0FBSUosS0FBSyxJQUFJQSxLQUFLLENBQUNyRixXQUFoQixHQUErQnFGLEtBQUssQ0FBQ3JGLFdBQU4sQ0FBa0JrRixNQUFsQixHQUEyQixDQUExRCxHQUE4RCxLQUFyRjtBQUVBLFdBQ0MsMkRBQUMsMkRBQUQsUUFDQztBQUFLLGVBQVMsRUFBQztBQUFmLE9BRUUsT0FBT3hFLGlCQUFQLEtBQTZCLFVBQTdCLEdBQ0EsMkRBQUMsd0RBQUQ7QUFBZ0IscUJBQWUsRUFBRStFLGNBQWpDO0FBQWlELG1CQUFhLEVBQUd4RTtBQUFqRSxNQURBLEdBRUEsc0VBQUl2QywwREFBRSxDQUFDLHVCQUFELENBQU4sQ0FKRixDQURELENBREQ7QUFXQSxHQS9Ec0I7QUFpRXZCNkIsTUFqRXVCLGtCQWlFaEI7QUFDTjtBQUNBLFdBQU8sd0VBQUssMkRBQUMsNkRBQUQsQ0FBYSxPQUFiLE9BQUwsQ0FBUDtBQUNBO0FBcEVzQixDQUFqQixDOzs7Ozs7Ozs7Ozs7QUN2QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBR0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUFtRiwyRUFBaUIsQ0FBQ0MsaURBQUQsRUFBWUEscURBQVosQ0FBakI7QUFDQUQsMkVBQWlCLENBQUNFLHVEQUFELEVBQXFCQSwyREFBckIsQ0FBakI7QUFDQUYsMkVBQWlCLENBQUNHLHVEQUFELEVBQXFCQSwyREFBckIsQ0FBakI7QUFDQUgsMkVBQWlCLENBQUNJLHNEQUFELEVBQWdCQSwwREFBaEIsQ0FBakI7QUFFQTs7OztBQUdBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3pEO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlDLGdCQUFKLENBQXFCLFVBQVVDLFNBQVYsRUFBcUI7QUFDMURBLGFBQVMsQ0FBQ0MsT0FBVixDQUFrQixVQUFVQyxRQUFWLEVBQW9CO0FBQ3JDO0FBQ0EsVUFBTWhCLEtBQUssR0FBR2dCLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsT0FBaEIsQ0FBd0IsbUNBQXhCLENBQWQ7QUFDQSxVQUFHLENBQUNsQixLQUFKLEVBQVc7QUFDWCxVQUFNakcsTUFBTSxHQUFHaUgsUUFBUSxDQUFDQyxNQUFULENBQWdCRSxZQUFoQixDQUE2QixPQUE3QixDQUFmO0FBQ0FuQixXQUFLLENBQUNwRCxLQUFOLEdBQWM3QyxNQUFkO0FBQ0EsS0FORDtBQU9BLEdBUmdCLENBQWpCLENBRnlELENBWXpEOztBQUNBLE1BQU1xSCwwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLEdBQU07QUFDeEMsUUFBTUMsYUFBYSxHQUFHWCxRQUFRLENBQUNZLGdCQUFULENBQTBCLGtDQUExQixDQUF0QjtBQUNBLFFBQUksQ0FBQ0QsYUFBYSxDQUFDeEIsTUFBZixHQUF3QixDQUE1QixFQUErQjtBQUZTO0FBQUE7QUFBQTs7QUFBQTtBQUd4QywyQkFBc0J3QixhQUF0Qiw4SEFBcUM7QUFBQSxZQUExQkUsT0FBMEI7QUFDcENYLGdCQUFRLENBQUNZLE9BQVQsQ0FBaUJELE9BQWpCLEVBQTBCO0FBQ3pCckgsb0JBQVUsRUFBRSxJQURhO0FBRXpCdUgseUJBQWUsRUFBRSxDQUFDLE9BQUQ7QUFGUSxTQUExQjtBQUlBO0FBUnVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTeEMsR0FURCxDQWJ5RCxDQXdCekQ7OztBQUNBLFdBQVNDLHNCQUFULEdBQWtDO0FBQ2pDLFFBQU1qSCxNQUFNLEdBQUdpRyxRQUFRLENBQUNZLGdCQUFULENBQTBCLG1DQUExQixDQUFmO0FBQ0EsUUFBRyxDQUFDN0csTUFBTSxDQUFDb0YsTUFBUixHQUFpQixDQUFwQixFQUF1QjtBQUZVO0FBQUE7QUFBQTs7QUFBQTtBQUdqQyw0QkFBb0JwRixNQUFwQixtSUFBNEI7QUFBQSxZQUFqQnVGLEtBQWlCO0FBQzNCMkIsMEJBQWtCLENBQUMzQixLQUFELENBQWxCO0FBQ0E7QUFMZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1qQzs7QUFFRCxXQUFTMkIsa0JBQVQsQ0FBNEIzQixLQUE1QixFQUFrQztBQUNqQztBQUNBLFFBQU1qRyxNQUFNLEdBQUdpRyxLQUFLLENBQUM0QixhQUFOLENBQW9CLGtDQUFwQixFQUF3RFQsWUFBeEQsQ0FBcUUsT0FBckUsQ0FBZjtBQUNBbkIsU0FBSyxDQUFDcEQsS0FBTixHQUFjN0MsTUFBZDtBQUNBLEdBckN3RCxDQXVDekQ7OztBQUNBLFdBQVM4SCxlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUMzQixRQUFJLE9BQU9BLENBQUMsQ0FBQ2IsTUFBRixDQUFTSyxnQkFBaEIsS0FBcUMsVUFBekMsRUFBcUQ7QUFDckQsUUFBTTdHLE1BQU0sR0FBR3FILENBQUMsQ0FBQ2IsTUFBRixDQUFTSyxnQkFBVCxDQUEwQixtQ0FBMUIsQ0FBZjtBQUNBLFFBQUksQ0FBQzdHLE1BQU0sQ0FBQ29GLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0IsT0FIRyxDQUkzQjs7QUFKMkI7QUFBQTtBQUFBOztBQUFBO0FBSzNCLDRCQUFvQnBGLE1BQXBCLG1JQUE0QjtBQUFBLFlBQWpCdUYsS0FBaUI7QUFDM0I7QUFDQTJCLDBCQUFrQixDQUFDM0IsS0FBRCxDQUFsQjtBQUNBO0FBUjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTM0I7O0FBRUQsTUFBTStCLGdCQUFnQixHQUFHLElBQUlsQixnQkFBSixDQUFxQixVQUFVQyxTQUFWLEVBQXFCO0FBQ2xFQSxhQUFTLENBQUNDLE9BQVYsQ0FBa0IsVUFBVUMsUUFBVixFQUFvQjtBQUNyQyxVQUFJLENBQUNBLFFBQVEsQ0FBQ2dCLFVBQWQsRUFBMEI7O0FBQzFCLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2pCLFFBQVEsQ0FBQ2dCLFVBQVQsQ0FBb0JuQyxNQUF4QyxFQUFnRG9DLENBQUMsRUFBakQsRUFBcUQ7QUFDcEQ7QUFDQSxZQUFJQyxJQUFJLEdBQUdsQixRQUFRLENBQUNnQixVQUFULENBQW9CQyxDQUFwQixDQUFYO0FBQ0EsWUFBSSxPQUFPQyxJQUFJLENBQUNDLE9BQVosS0FBd0IsVUFBNUIsRUFBd0M7QUFDeEMsWUFBSSxDQUFDRCxJQUFJLENBQUNDLE9BQUwsQ0FBYSxtQ0FBYixDQUFMLEVBQXdEO0FBQ3hELGVBQU9SLGtCQUFrQixDQUFDTyxJQUFELENBQXpCO0FBQ0E7QUFDRCxLQVREO0FBVUEsR0FYd0IsQ0FBekI7QUFhQUgsa0JBQWdCLENBQUNQLE9BQWpCLENBQXlCZCxRQUFRLENBQUMwQixJQUFsQyxFQUF3QztBQUN2Q0MsYUFBUyxFQUFFLElBRDRCO0FBRXZDQyxXQUFPLEVBQUUsSUFGOEI7QUFHdkNwSSxjQUFVLEVBQUUsS0FIMkI7QUFJdkNxSSxpQkFBYSxFQUFFO0FBSndCLEdBQXhDO0FBT0FiLHdCQUFzQjtBQUN0QmhCLFVBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDa0IsZUFBN0M7QUFDQW5CLFVBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDUywwQkFBN0M7QUFDQSxDQTFFRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7Q0FHQTs7SUFFcUJvQixPOzs7Ozs7Ozs7Ozs7OzZCQUNaO0FBQUEsVUFDQUMsTUFEQSxHQUNVLEtBQUtDLEtBRGYsQ0FDQUQsTUFEQTtBQUVQLGFBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRUEsTUFBTSxDQUFDM0MsR0FBUCxDQUFXLFVBQUNFLEtBQUQsRUFBTzJDLEdBQVAsRUFBYTtBQUN4QixZQUFNNUksTUFBTSxHQUFHO0FBQ2R1Qix1QkFBYSxFQUFFLFVBQVUwRSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMzRixDQURwQjtBQUVka0Isb0JBQVUsRUFBRSxVQUFVeUUsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTN0Y7QUFGakIsU0FBZjtBQUlBLGVBQU87QUFBSyxhQUFHLEVBQUV3SSxHQUFWO0FBQWUsbUJBQVMsRUFBQywwQ0FBekI7QUFBb0UsZUFBSyxFQUFFNUk7QUFBM0UsVUFBUDtBQUNBLE9BTkEsQ0FERixDQUREO0FBV0E7Ozs7RUFkbUM2SSw0Q0FBSyxDQUFDQyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMM0M7QUFDQTtBQUNBO0NBQ3FDOztDQUNLO0FBRTFDOztJQUVxQkMsYzs7Ozs7QUFDcEIsMEJBQVlKLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbEIsa05BQU1BLEtBQU47O0FBRGtCLDRMQU1MLFVBQUNLLFFBQUQsRUFBYztBQUMzQixZQUFLQyxRQUFMLENBQWM7QUFDYnBJLGdCQUFRLEVBQUVtSTtBQURHLE9BQWQ7QUFHQSxLQVZrQjs7QUFFbEIsVUFBS0UsS0FBTCxHQUFhO0FBQ1pySSxjQUFRLEVBQUU7QUFERSxLQUFiO0FBRmtCO0FBS2xCOzs7OzZCQU1PO0FBQUE7O0FBQUEsd0JBQ2tDLEtBQUs4SCxLQUR2QztBQUFBLFVBQ0FRLGVBREEsZUFDQUEsZUFEQTtBQUFBLFVBQ2lCQyxhQURqQixlQUNpQkEsYUFEakI7QUFBQSxVQUVBdkksUUFGQSxHQUVZLEtBQUtxSSxLQUZqQixDQUVBckksUUFGQTtBQUdQLFVBQU13SSxhQUFhLEdBQUcsQ0FBQyxDQUFDLHlCQUFELEVBQTRCO0FBQ2hEL0ksU0FBQyxFQUFFO0FBRDZDLE9BQTVCLENBQUQsQ0FBdEI7O0FBR0EsVUFBSSxDQUFDNkksZUFBRCxJQUFvQixDQUFDdEksUUFBekIsRUFBbUM7QUFDbEMsZUFDQztBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNDLHVFQUFLdkIsMERBQUUsQ0FBQyxtQkFBRCxDQUFQLENBREQsRUFFQyxzRUFBSUEsMERBQUUsQ0FBQyxvSEFBRCxDQUFOLENBRkQsRUFHQztBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNFZ0ssMkRBQVMsR0FBR3ZELEdBQVosQ0FBZ0IsVUFBQ2lELFFBQUQsRUFBV0osR0FBWCxFQUFpQjtBQUNqQyxpQkFDQztBQUFLLGVBQUcsRUFBRUEsR0FBVjtBQUFlLHFCQUFTLEVBQUMsNkNBQXpCO0FBQXVFLG1CQUFPLEVBQUU7QUFBQSxxQkFBSSxNQUFJLENBQUNXLFdBQUwsQ0FBaUJQLFFBQVEsQ0FBQ04sTUFBMUIsQ0FBSjtBQUFBO0FBQWhGLGFBQ0MsMkRBQUMsMERBQUQ7QUFBUyxrQkFBTSxFQUFFTSxRQUFRLENBQUNOO0FBQTFCLFlBREQsRUFFQyxzRUFBSU0sUUFBUSxDQUFDL0ksS0FBYixDQUZELENBREQ7QUFNQSxTQVBBLENBREYsRUFTQztBQUFLLG1CQUFTLEVBQUMsNkNBQWY7QUFBNkQsaUJBQU8sRUFBRTtBQUFBLG1CQUFJLE1BQUksQ0FBQ3NKLFdBQUwsQ0FBaUJGLGFBQWpCLENBQUo7QUFBQTtBQUF0RSxXQUEyRywyREFBQywwREFBRDtBQUFTLGdCQUFNLEVBQUVBO0FBQWpCLFVBQTNHLEVBQTZJLHNFQUFJL0osMERBQUUsQ0FBQyxZQUFELENBQU4sQ0FBN0ksQ0FURCxDQUhELENBREQ7QUFpQkE7O0FBQ0QsYUFDQywyREFBQyw4REFBRDtBQUNDLGdCQUFRLEVBQUV1QixRQURYO0FBRUMsb0JBQVksRUFBRSxLQUZmO0FBR0MscUJBQWEsRUFBRXVJO0FBSGhCLFFBREQ7QUFPQTs7OztFQTVDMENQLDRDQUFLLENBQUNXLFM7Ozs7Ozs7Ozs7Ozs7O0FDUmxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ2UsU0FBU0MsWUFBVCxHQUF3QjtBQUN0QyxNQUFNSCxTQUFTLEdBQUcsQ0FBQztBQUNqQnJKLFNBQUssRUFBRVgsMERBQUUsQ0FBQyxXQUFELENBRFE7QUFFakJvSixVQUFNLEVBQUUsQ0FDUCxDQUFDLHlCQUFELEVBQTRCO0FBQzNCcEksT0FBQyxFQUFFO0FBRHdCLEtBQTVCLENBRE8sRUFJUCxDQUFDLHlCQUFELEVBQTRCO0FBQzNCQSxPQUFDLEVBQUU7QUFEd0IsS0FBNUIsQ0FKTztBQUZTLEdBQUQsRUFXakI7QUFDQ0wsU0FBSyxFQUFFWCwwREFBRSxDQUFDLFdBQUQsQ0FEVjtBQUVDb0osVUFBTSxFQUFFLENBQ1AsQ0FBQyx5QkFBRCxFQUE0QjtBQUMzQnBJLE9BQUMsRUFBRTtBQUR3QixLQUE1QixDQURPLEVBSVAsQ0FBQyx5QkFBRCxFQUE0QjtBQUMzQkEsT0FBQyxFQUFFO0FBRHdCLEtBQTVCLENBSk8sRUFPUCxDQUFDLHlCQUFELEVBQTRCO0FBQzNCQSxPQUFDLEVBQUU7QUFEd0IsS0FBNUIsQ0FQTztBQUZULEdBWGlCLENBQWxCO0FBMEJBLFNBQU9vSixxRUFBWSxDQUFDLDZCQUFELEVBQWdDSixTQUFoQyxDQUFuQjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDakNELGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHVCIiwiZmlsZSI6ImVkaXRvci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi93cC1jb250ZW50L3BsdWdpbnMvZ2Vja28tZ3JpZC1sYXlvdXQvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsIi8vIFRpbnlDb2xvciB2MS40LjFcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZ3JpbnMvVGlueUNvbG9yXG4vLyBCcmlhbiBHcmluc3RlYWQsIE1JVCBMaWNlbnNlXG5cbihmdW5jdGlvbihNYXRoKSB7XG5cbnZhciB0cmltTGVmdCA9IC9eXFxzKy8sXG4gICAgdHJpbVJpZ2h0ID0gL1xccyskLyxcbiAgICB0aW55Q291bnRlciA9IDAsXG4gICAgbWF0aFJvdW5kID0gTWF0aC5yb3VuZCxcbiAgICBtYXRoTWluID0gTWF0aC5taW4sXG4gICAgbWF0aE1heCA9IE1hdGgubWF4LFxuICAgIG1hdGhSYW5kb20gPSBNYXRoLnJhbmRvbTtcblxuZnVuY3Rpb24gdGlueWNvbG9yIChjb2xvciwgb3B0cykge1xuXG4gICAgY29sb3IgPSAoY29sb3IpID8gY29sb3IgOiAnJztcbiAgICBvcHRzID0gb3B0cyB8fCB7IH07XG5cbiAgICAvLyBJZiBpbnB1dCBpcyBhbHJlYWR5IGEgdGlueWNvbG9yLCByZXR1cm4gaXRzZWxmXG4gICAgaWYgKGNvbG9yIGluc3RhbmNlb2YgdGlueWNvbG9yKSB7XG4gICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICAvLyBJZiB3ZSBhcmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGNhbGwgdXNpbmcgbmV3IGluc3RlYWRcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgdGlueWNvbG9yKSkge1xuICAgICAgICByZXR1cm4gbmV3IHRpbnljb2xvcihjb2xvciwgb3B0cyk7XG4gICAgfVxuXG4gICAgdmFyIHJnYiA9IGlucHV0VG9SR0IoY29sb3IpO1xuICAgIHRoaXMuX29yaWdpbmFsSW5wdXQgPSBjb2xvcixcbiAgICB0aGlzLl9yID0gcmdiLnIsXG4gICAgdGhpcy5fZyA9IHJnYi5nLFxuICAgIHRoaXMuX2IgPSByZ2IuYixcbiAgICB0aGlzLl9hID0gcmdiLmEsXG4gICAgdGhpcy5fcm91bmRBID0gbWF0aFJvdW5kKDEwMCp0aGlzLl9hKSAvIDEwMCxcbiAgICB0aGlzLl9mb3JtYXQgPSBvcHRzLmZvcm1hdCB8fCByZ2IuZm9ybWF0O1xuICAgIHRoaXMuX2dyYWRpZW50VHlwZSA9IG9wdHMuZ3JhZGllbnRUeXBlO1xuXG4gICAgLy8gRG9uJ3QgbGV0IHRoZSByYW5nZSBvZiBbMCwyNTVdIGNvbWUgYmFjayBpbiBbMCwxXS5cbiAgICAvLyBQb3RlbnRpYWxseSBsb3NlIGEgbGl0dGxlIGJpdCBvZiBwcmVjaXNpb24gaGVyZSwgYnV0IHdpbGwgZml4IGlzc3VlcyB3aGVyZVxuICAgIC8vIC41IGdldHMgaW50ZXJwcmV0ZWQgYXMgaGFsZiBvZiB0aGUgdG90YWwsIGluc3RlYWQgb2YgaGFsZiBvZiAxXG4gICAgLy8gSWYgaXQgd2FzIHN1cHBvc2VkIHRvIGJlIDEyOCwgdGhpcyB3YXMgYWxyZWFkeSB0YWtlbiBjYXJlIG9mIGJ5IGBpbnB1dFRvUmdiYFxuICAgIGlmICh0aGlzLl9yIDwgMSkgeyB0aGlzLl9yID0gbWF0aFJvdW5kKHRoaXMuX3IpOyB9XG4gICAgaWYgKHRoaXMuX2cgPCAxKSB7IHRoaXMuX2cgPSBtYXRoUm91bmQodGhpcy5fZyk7IH1cbiAgICBpZiAodGhpcy5fYiA8IDEpIHsgdGhpcy5fYiA9IG1hdGhSb3VuZCh0aGlzLl9iKTsgfVxuXG4gICAgdGhpcy5fb2sgPSByZ2Iub2s7XG4gICAgdGhpcy5fdGNfaWQgPSB0aW55Q291bnRlcisrO1xufVxuXG50aW55Y29sb3IucHJvdG90eXBlID0ge1xuICAgIGlzRGFyazogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJyaWdodG5lc3MoKSA8IDEyODtcbiAgICB9LFxuICAgIGlzTGlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNEYXJrKCk7XG4gICAgfSxcbiAgICBpc1ZhbGlkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29rO1xuICAgIH0sXG4gICAgZ2V0T3JpZ2luYWxJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb3JpZ2luYWxJbnB1dDtcbiAgICB9LFxuICAgIGdldEZvcm1hdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gICAgfSxcbiAgICBnZXRBbHBoYTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hO1xuICAgIH0sXG4gICAgZ2V0QnJpZ2h0bmVzczogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vaHR0cDovL3d3dy53My5vcmcvVFIvQUVSVCNjb2xvci1jb250cmFzdFxuICAgICAgICB2YXIgcmdiID0gdGhpcy50b1JnYigpO1xuICAgICAgICByZXR1cm4gKHJnYi5yICogMjk5ICsgcmdiLmcgKiA1ODcgKyByZ2IuYiAqIDExNCkgLyAxMDAwO1xuICAgIH0sXG4gICAgZ2V0THVtaW5hbmNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9odHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG4gICAgICAgIHZhciByZ2IgPSB0aGlzLnRvUmdiKCk7XG4gICAgICAgIHZhciBSc1JHQiwgR3NSR0IsIEJzUkdCLCBSLCBHLCBCO1xuICAgICAgICBSc1JHQiA9IHJnYi5yLzI1NTtcbiAgICAgICAgR3NSR0IgPSByZ2IuZy8yNTU7XG4gICAgICAgIEJzUkdCID0gcmdiLmIvMjU1O1xuXG4gICAgICAgIGlmIChSc1JHQiA8PSAwLjAzOTI4KSB7UiA9IFJzUkdCIC8gMTIuOTI7fSBlbHNlIHtSID0gTWF0aC5wb3coKChSc1JHQiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTt9XG4gICAgICAgIGlmIChHc1JHQiA8PSAwLjAzOTI4KSB7RyA9IEdzUkdCIC8gMTIuOTI7fSBlbHNlIHtHID0gTWF0aC5wb3coKChHc1JHQiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTt9XG4gICAgICAgIGlmIChCc1JHQiA8PSAwLjAzOTI4KSB7QiA9IEJzUkdCIC8gMTIuOTI7fSBlbHNlIHtCID0gTWF0aC5wb3coKChCc1JHQiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTt9XG4gICAgICAgIHJldHVybiAoMC4yMTI2ICogUikgKyAoMC43MTUyICogRykgKyAoMC4wNzIyICogQik7XG4gICAgfSxcbiAgICBzZXRBbHBoYTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYSA9IGJvdW5kQWxwaGEodmFsdWUpO1xuICAgICAgICB0aGlzLl9yb3VuZEEgPSBtYXRoUm91bmQoMTAwKnRoaXMuX2EpIC8gMTAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHRvSHN2OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhzdiA9IHJnYlRvSHN2KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IpO1xuICAgICAgICByZXR1cm4geyBoOiBoc3YuaCAqIDM2MCwgczogaHN2LnMsIHY6IGhzdi52LCBhOiB0aGlzLl9hIH07XG4gICAgfSxcbiAgICB0b0hzdlN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoc3YgPSByZ2JUb0hzdih0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iKTtcbiAgICAgICAgdmFyIGggPSBtYXRoUm91bmQoaHN2LmggKiAzNjApLCBzID0gbWF0aFJvdW5kKGhzdi5zICogMTAwKSwgdiA9IG1hdGhSb3VuZChoc3YudiAqIDEwMCk7XG4gICAgICAgIHJldHVybiAodGhpcy5fYSA9PSAxKSA/XG4gICAgICAgICAgXCJoc3YoXCIgICsgaCArIFwiLCBcIiArIHMgKyBcIiUsIFwiICsgdiArIFwiJSlcIiA6XG4gICAgICAgICAgXCJoc3ZhKFwiICsgaCArIFwiLCBcIiArIHMgKyBcIiUsIFwiICsgdiArIFwiJSwgXCIrIHRoaXMuX3JvdW5kQSArIFwiKVwiO1xuICAgIH0sXG4gICAgdG9Ic2w6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHNsID0gcmdiVG9Ic2wodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYik7XG4gICAgICAgIHJldHVybiB7IGg6IGhzbC5oICogMzYwLCBzOiBoc2wucywgbDogaHNsLmwsIGE6IHRoaXMuX2EgfTtcbiAgICB9LFxuICAgIHRvSHNsU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhzbCA9IHJnYlRvSHNsKHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IpO1xuICAgICAgICB2YXIgaCA9IG1hdGhSb3VuZChoc2wuaCAqIDM2MCksIHMgPSBtYXRoUm91bmQoaHNsLnMgKiAxMDApLCBsID0gbWF0aFJvdW5kKGhzbC5sICogMTAwKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9hID09IDEpID9cbiAgICAgICAgICBcImhzbChcIiAgKyBoICsgXCIsIFwiICsgcyArIFwiJSwgXCIgKyBsICsgXCIlKVwiIDpcbiAgICAgICAgICBcImhzbGEoXCIgKyBoICsgXCIsIFwiICsgcyArIFwiJSwgXCIgKyBsICsgXCIlLCBcIisgdGhpcy5fcm91bmRBICsgXCIpXCI7XG4gICAgfSxcbiAgICB0b0hleDogZnVuY3Rpb24oYWxsb3czQ2hhcikge1xuICAgICAgICByZXR1cm4gcmdiVG9IZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgYWxsb3czQ2hhcik7XG4gICAgfSxcbiAgICB0b0hleFN0cmluZzogZnVuY3Rpb24oYWxsb3czQ2hhcikge1xuICAgICAgICByZXR1cm4gJyMnICsgdGhpcy50b0hleChhbGxvdzNDaGFyKTtcbiAgICB9LFxuICAgIHRvSGV4ODogZnVuY3Rpb24oYWxsb3c0Q2hhcikge1xuICAgICAgICByZXR1cm4gcmdiYVRvSGV4KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIHRoaXMuX2EsIGFsbG93NENoYXIpO1xuICAgIH0sXG4gICAgdG9IZXg4U3RyaW5nOiBmdW5jdGlvbihhbGxvdzRDaGFyKSB7XG4gICAgICAgIHJldHVybiAnIycgKyB0aGlzLnRvSGV4OChhbGxvdzRDaGFyKTtcbiAgICB9LFxuICAgIHRvUmdiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogbWF0aFJvdW5kKHRoaXMuX3IpLCBnOiBtYXRoUm91bmQodGhpcy5fZyksIGI6IG1hdGhSb3VuZCh0aGlzLl9iKSwgYTogdGhpcy5fYSB9O1xuICAgIH0sXG4gICAgdG9SZ2JTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2EgPT0gMSkgP1xuICAgICAgICAgIFwicmdiKFwiICArIG1hdGhSb3VuZCh0aGlzLl9yKSArIFwiLCBcIiArIG1hdGhSb3VuZCh0aGlzLl9nKSArIFwiLCBcIiArIG1hdGhSb3VuZCh0aGlzLl9iKSArIFwiKVwiIDpcbiAgICAgICAgICBcInJnYmEoXCIgKyBtYXRoUm91bmQodGhpcy5fcikgKyBcIiwgXCIgKyBtYXRoUm91bmQodGhpcy5fZykgKyBcIiwgXCIgKyBtYXRoUm91bmQodGhpcy5fYikgKyBcIiwgXCIgKyB0aGlzLl9yb3VuZEEgKyBcIilcIjtcbiAgICB9LFxuICAgIHRvUGVyY2VudGFnZVJnYjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7IHI6IG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX3IsIDI1NSkgKiAxMDApICsgXCIlXCIsIGc6IG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX2csIDI1NSkgKiAxMDApICsgXCIlXCIsIGI6IG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX2IsIDI1NSkgKiAxMDApICsgXCIlXCIsIGE6IHRoaXMuX2EgfTtcbiAgICB9LFxuICAgIHRvUGVyY2VudGFnZVJnYlN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fYSA9PSAxKSA/XG4gICAgICAgICAgXCJyZ2IoXCIgICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fciwgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fZywgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fYiwgMjU1KSAqIDEwMCkgKyBcIiUpXCIgOlxuICAgICAgICAgIFwicmdiYShcIiArIG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX3IsIDI1NSkgKiAxMDApICsgXCIlLCBcIiArIG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX2csIDI1NSkgKiAxMDApICsgXCIlLCBcIiArIG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX2IsIDI1NSkgKiAxMDApICsgXCIlLCBcIiArIHRoaXMuX3JvdW5kQSArIFwiKVwiO1xuICAgIH0sXG4gICAgdG9OYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2EgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoZXhOYW1lc1tyZ2JUb0hleCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCB0cnVlKV0gfHwgZmFsc2U7XG4gICAgfSxcbiAgICB0b0ZpbHRlcjogZnVuY3Rpb24oc2Vjb25kQ29sb3IpIHtcbiAgICAgICAgdmFyIGhleDhTdHJpbmcgPSAnIycgKyByZ2JhVG9BcmdiSGV4KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIHRoaXMuX2EpO1xuICAgICAgICB2YXIgc2Vjb25kSGV4OFN0cmluZyA9IGhleDhTdHJpbmc7XG4gICAgICAgIHZhciBncmFkaWVudFR5cGUgPSB0aGlzLl9ncmFkaWVudFR5cGUgPyBcIkdyYWRpZW50VHlwZSA9IDEsIFwiIDogXCJcIjtcblxuICAgICAgICBpZiAoc2Vjb25kQ29sb3IpIHtcbiAgICAgICAgICAgIHZhciBzID0gdGlueWNvbG9yKHNlY29uZENvbG9yKTtcbiAgICAgICAgICAgIHNlY29uZEhleDhTdHJpbmcgPSAnIycgKyByZ2JhVG9BcmdiSGV4KHMuX3IsIHMuX2csIHMuX2IsIHMuX2EpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KFwiK2dyYWRpZW50VHlwZStcInN0YXJ0Q29sb3JzdHI9XCIraGV4OFN0cmluZytcIixlbmRDb2xvcnN0cj1cIitzZWNvbmRIZXg4U3RyaW5nK1wiKVwiO1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKGZvcm1hdCkge1xuICAgICAgICB2YXIgZm9ybWF0U2V0ID0gISFmb3JtYXQ7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCB0aGlzLl9mb3JtYXQ7XG5cbiAgICAgICAgdmFyIGZvcm1hdHRlZFN0cmluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgaGFzQWxwaGEgPSB0aGlzLl9hIDwgMSAmJiB0aGlzLl9hID49IDA7XG4gICAgICAgIHZhciBuZWVkc0FscGhhRm9ybWF0ID0gIWZvcm1hdFNldCAmJiBoYXNBbHBoYSAmJiAoZm9ybWF0ID09PSBcImhleFwiIHx8IGZvcm1hdCA9PT0gXCJoZXg2XCIgfHwgZm9ybWF0ID09PSBcImhleDNcIiB8fCBmb3JtYXQgPT09IFwiaGV4NFwiIHx8IGZvcm1hdCA9PT0gXCJoZXg4XCIgfHwgZm9ybWF0ID09PSBcIm5hbWVcIik7XG5cbiAgICAgICAgaWYgKG5lZWRzQWxwaGFGb3JtYXQpIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgXCJ0cmFuc3BhcmVudFwiLCBhbGwgb3RoZXIgbm9uLWFscGhhIGZvcm1hdHNcbiAgICAgICAgICAgIC8vIHdpbGwgcmV0dXJuIHJnYmEgd2hlbiB0aGVyZSBpcyB0cmFuc3BhcmVuY3kuXG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSBcIm5hbWVcIiAmJiB0aGlzLl9hID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1JnYlN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwicmdiXCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9SZ2JTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcInByZ2JcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b1BlcmNlbnRhZ2VSZ2JTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhleFwiIHx8IGZvcm1hdCA9PT0gXCJoZXg2XCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXhTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhleDNcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleFN0cmluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhleDRcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleDhTdHJpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoZXg4XCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXg4U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJuYW1lXCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9OYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoc2xcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hzbFN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaHN2XCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9Ic3ZTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRTdHJpbmcgfHwgdGhpcy50b0hleFN0cmluZygpO1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGlueWNvbG9yKHRoaXMudG9TdHJpbmcoKSk7XG4gICAgfSxcblxuICAgIF9hcHBseU1vZGlmaWNhdGlvbjogZnVuY3Rpb24oZm4sIGFyZ3MpIHtcbiAgICAgICAgdmFyIGNvbG9yID0gZm4uYXBwbHkobnVsbCwgW3RoaXNdLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3MpKSk7XG4gICAgICAgIHRoaXMuX3IgPSBjb2xvci5fcjtcbiAgICAgICAgdGhpcy5fZyA9IGNvbG9yLl9nO1xuICAgICAgICB0aGlzLl9iID0gY29sb3IuX2I7XG4gICAgICAgIHRoaXMuc2V0QWxwaGEoY29sb3IuX2EpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGxpZ2h0ZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24obGlnaHRlbiwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGJyaWdodGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGJyaWdodGVuLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZGFya2VuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGRhcmtlbiwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGRlc2F0dXJhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZGVzYXR1cmF0ZSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNhdHVyYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKHNhdHVyYXRlLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZ3JleXNjYWxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGdyZXlzY2FsZSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNwaW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oc3BpbiwgYXJndW1lbnRzKTtcbiAgICB9LFxuXG4gICAgX2FwcGx5Q29tYmluYXRpb246IGZ1bmN0aW9uKGZuLCBhcmdzKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBbdGhpc10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncykpKTtcbiAgICB9LFxuICAgIGFuYWxvZ291czogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKGFuYWxvZ291cywgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGNvbXBsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihjb21wbGVtZW50LCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgbW9ub2Nocm9tYXRpYzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKG1vbm9jaHJvbWF0aWMsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzcGxpdGNvbXBsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihzcGxpdGNvbXBsZW1lbnQsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICB0cmlhZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHRyaWFkLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgdGV0cmFkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24odGV0cmFkLCBhcmd1bWVudHMpO1xuICAgIH1cbn07XG5cbi8vIElmIGlucHV0IGlzIGFuIG9iamVjdCwgZm9yY2UgMSBpbnRvIFwiMS4wXCIgdG8gaGFuZGxlIHJhdGlvcyBwcm9wZXJseVxuLy8gU3RyaW5nIGlucHV0IHJlcXVpcmVzIFwiMS4wXCIgYXMgaW5wdXQsIHNvIDEgd2lsbCBiZSB0cmVhdGVkIGFzIDFcbnRpbnljb2xvci5mcm9tUmF0aW8gPSBmdW5jdGlvbihjb2xvciwgb3B0cykge1xuICAgIGlmICh0eXBlb2YgY29sb3IgPT0gXCJvYmplY3RcIikge1xuICAgICAgICB2YXIgbmV3Q29sb3IgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBjb2xvcikge1xuICAgICAgICAgICAgaWYgKGNvbG9yLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IFwiYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbG9yW2ldID0gY29sb3JbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdDb2xvcltpXSA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3JbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb2xvciA9IG5ld0NvbG9yO1xuICAgIH1cblxuICAgIHJldHVybiB0aW55Y29sb3IoY29sb3IsIG9wdHMpO1xufTtcblxuLy8gR2l2ZW4gYSBzdHJpbmcgb3Igb2JqZWN0LCBjb252ZXJ0IHRoYXQgaW5wdXQgdG8gUkdCXG4vLyBQb3NzaWJsZSBzdHJpbmcgaW5wdXRzOlxuLy9cbi8vICAgICBcInJlZFwiXG4vLyAgICAgXCIjZjAwXCIgb3IgXCJmMDBcIlxuLy8gICAgIFwiI2ZmMDAwMFwiIG9yIFwiZmYwMDAwXCJcbi8vICAgICBcIiNmZjAwMDAwMFwiIG9yIFwiZmYwMDAwMDBcIlxuLy8gICAgIFwicmdiIDI1NSAwIDBcIiBvciBcInJnYiAoMjU1LCAwLCAwKVwiXG4vLyAgICAgXCJyZ2IgMS4wIDAgMFwiIG9yIFwicmdiICgxLCAwLCAwKVwiXG4vLyAgICAgXCJyZ2JhICgyNTUsIDAsIDAsIDEpXCIgb3IgXCJyZ2JhIDI1NSwgMCwgMCwgMVwiXG4vLyAgICAgXCJyZ2JhICgxLjAsIDAsIDAsIDEpXCIgb3IgXCJyZ2JhIDEuMCwgMCwgMCwgMVwiXG4vLyAgICAgXCJoc2woMCwgMTAwJSwgNTAlKVwiIG9yIFwiaHNsIDAgMTAwJSA1MCVcIlxuLy8gICAgIFwiaHNsYSgwLCAxMDAlLCA1MCUsIDEpXCIgb3IgXCJoc2xhIDAgMTAwJSA1MCUsIDFcIlxuLy8gICAgIFwiaHN2KDAsIDEwMCUsIDEwMCUpXCIgb3IgXCJoc3YgMCAxMDAlIDEwMCVcIlxuLy9cbmZ1bmN0aW9uIGlucHV0VG9SR0IoY29sb3IpIHtcblxuICAgIHZhciByZ2IgPSB7IHI6IDAsIGc6IDAsIGI6IDAgfTtcbiAgICB2YXIgYSA9IDE7XG4gICAgdmFyIHMgPSBudWxsO1xuICAgIHZhciB2ID0gbnVsbDtcbiAgICB2YXIgbCA9IG51bGw7XG4gICAgdmFyIG9rID0gZmFsc2U7XG4gICAgdmFyIGZvcm1hdCA9IGZhbHNlO1xuXG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbG9yID0gc3RyaW5nSW5wdXRUb09iamVjdChjb2xvcik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkQ1NTVW5pdChjb2xvci5yKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5nKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5iKSkge1xuICAgICAgICAgICAgcmdiID0gcmdiVG9SZ2IoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XG4gICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICBmb3JtYXQgPSBTdHJpbmcoY29sb3Iucikuc3Vic3RyKC0xKSA9PT0gXCIlXCIgPyBcInByZ2JcIiA6IFwicmdiXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWYWxpZENTU1VuaXQoY29sb3IuaCkgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IucykgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IudikpIHtcbiAgICAgICAgICAgIHMgPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yLnMpO1xuICAgICAgICAgICAgdiA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3Iudik7XG4gICAgICAgICAgICByZ2IgPSBoc3ZUb1JnYihjb2xvci5oLCBzLCB2KTtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm1hdCA9IFwiaHN2XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWYWxpZENTU1VuaXQoY29sb3IuaCkgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IucykgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IubCkpIHtcbiAgICAgICAgICAgIHMgPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yLnMpO1xuICAgICAgICAgICAgbCA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3IubCk7XG4gICAgICAgICAgICByZ2IgPSBoc2xUb1JnYihjb2xvci5oLCBzLCBsKTtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm1hdCA9IFwiaHNsXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sb3IuaGFzT3duUHJvcGVydHkoXCJhXCIpKSB7XG4gICAgICAgICAgICBhID0gY29sb3IuYTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGEgPSBib3VuZEFscGhhKGEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2s6IG9rLFxuICAgICAgICBmb3JtYXQ6IGNvbG9yLmZvcm1hdCB8fCBmb3JtYXQsXG4gICAgICAgIHI6IG1hdGhNaW4oMjU1LCBtYXRoTWF4KHJnYi5yLCAwKSksXG4gICAgICAgIGc6IG1hdGhNaW4oMjU1LCBtYXRoTWF4KHJnYi5nLCAwKSksXG4gICAgICAgIGI6IG1hdGhNaW4oMjU1LCBtYXRoTWF4KHJnYi5iLCAwKSksXG4gICAgICAgIGE6IGFcbiAgICB9O1xufVxuXG5cbi8vIENvbnZlcnNpb24gRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBgcmdiVG9Ic2xgLCBgcmdiVG9Ic3ZgLCBgaHNsVG9SZ2JgLCBgaHN2VG9SZ2JgIG1vZGlmaWVkIGZyb206XG4vLyA8aHR0cDovL21qaWphY2tzb24uY29tLzIwMDgvMDIvcmdiLXRvLWhzbC1hbmQtcmdiLXRvLWhzdi1jb2xvci1tb2RlbC1jb252ZXJzaW9uLWFsZ29yaXRobXMtaW4tamF2YXNjcmlwdD5cblxuLy8gYHJnYlRvUmdiYFxuLy8gSGFuZGxlIGJvdW5kcyAvIHBlcmNlbnRhZ2UgY2hlY2tpbmcgdG8gY29uZm9ybSB0byBDU1MgY29sb3Igc3BlY1xuLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvPlxuLy8gKkFzc3VtZXM6KiByLCBnLCBiIGluIFswLCAyNTVdIG9yIFswLCAxXVxuLy8gKlJldHVybnM6KiB7IHIsIGcsIGIgfSBpbiBbMCwgMjU1XVxuZnVuY3Rpb24gcmdiVG9SZ2IociwgZywgYil7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcjogYm91bmQwMShyLCAyNTUpICogMjU1LFxuICAgICAgICBnOiBib3VuZDAxKGcsIDI1NSkgKiAyNTUsXG4gICAgICAgIGI6IGJvdW5kMDEoYiwgMjU1KSAqIDI1NVxuICAgIH07XG59XG5cbi8vIGByZ2JUb0hzbGBcbi8vIENvbnZlcnRzIGFuIFJHQiBjb2xvciB2YWx1ZSB0byBIU0wuXG4vLyAqQXNzdW1lczoqIHIsIGcsIGFuZCBiIGFyZSBjb250YWluZWQgaW4gWzAsIDI1NV0gb3IgWzAsIDFdXG4vLyAqUmV0dXJuczoqIHsgaCwgcywgbCB9IGluIFswLDFdXG5mdW5jdGlvbiByZ2JUb0hzbChyLCBnLCBiKSB7XG5cbiAgICByID0gYm91bmQwMShyLCAyNTUpO1xuICAgIGcgPSBib3VuZDAxKGcsIDI1NSk7XG4gICAgYiA9IGJvdW5kMDEoYiwgMjU1KTtcblxuICAgIHZhciBtYXggPSBtYXRoTWF4KHIsIGcsIGIpLCBtaW4gPSBtYXRoTWluKHIsIGcsIGIpO1xuICAgIHZhciBoLCBzLCBsID0gKG1heCArIG1pbikgLyAyO1xuXG4gICAgaWYobWF4ID09IG1pbikge1xuICAgICAgICBoID0gcyA9IDA7IC8vIGFjaHJvbWF0aWNcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBkID0gbWF4IC0gbWluO1xuICAgICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgICAgIHN3aXRjaChtYXgpIHtcbiAgICAgICAgICAgIGNhc2UgcjogaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZzogaCA9IChiIC0gcikgLyBkICsgMjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGI6IGggPSAociAtIGcpIC8gZCArIDQ7IGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaCAvPSA2O1xuICAgIH1cblxuICAgIHJldHVybiB7IGg6IGgsIHM6IHMsIGw6IGwgfTtcbn1cblxuLy8gYGhzbFRvUmdiYFxuLy8gQ29udmVydHMgYW4gSFNMIGNvbG9yIHZhbHVlIHRvIFJHQi5cbi8vICpBc3N1bWVzOiogaCBpcyBjb250YWluZWQgaW4gWzAsIDFdIG9yIFswLCAzNjBdIGFuZCBzIGFuZCBsIGFyZSBjb250YWluZWQgWzAsIDFdIG9yIFswLCAxMDBdXG4vLyAqUmV0dXJuczoqIHsgciwgZywgYiB9IGluIHRoZSBzZXQgWzAsIDI1NV1cbmZ1bmN0aW9uIGhzbFRvUmdiKGgsIHMsIGwpIHtcbiAgICB2YXIgciwgZywgYjtcblxuICAgIGggPSBib3VuZDAxKGgsIDM2MCk7XG4gICAgcyA9IGJvdW5kMDEocywgMTAwKTtcbiAgICBsID0gYm91bmQwMShsLCAxMDApO1xuXG4gICAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XG4gICAgICAgIGlmKHQgPCAwKSB0ICs9IDE7XG4gICAgICAgIGlmKHQgPiAxKSB0IC09IDE7XG4gICAgICAgIGlmKHQgPCAxLzYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuICAgICAgICBpZih0IDwgMS8yKSByZXR1cm4gcTtcbiAgICAgICAgaWYodCA8IDIvMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIvMyAtIHQpICogNjtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG4gICAgaWYocyA9PT0gMCkge1xuICAgICAgICByID0gZyA9IGIgPSBsOyAvLyBhY2hyb21hdGljXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgICAgIHZhciBwID0gMiAqIGwgLSBxO1xuICAgICAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMS8zKTtcbiAgICAgICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gICAgICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxLzMpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHI6IHIgKiAyNTUsIGc6IGcgKiAyNTUsIGI6IGIgKiAyNTUgfTtcbn1cblxuLy8gYHJnYlRvSHN2YFxuLy8gQ29udmVydHMgYW4gUkdCIGNvbG9yIHZhbHVlIHRvIEhTVlxuLy8gKkFzc3VtZXM6KiByLCBnLCBhbmQgYiBhcmUgY29udGFpbmVkIGluIHRoZSBzZXQgWzAsIDI1NV0gb3IgWzAsIDFdXG4vLyAqUmV0dXJuczoqIHsgaCwgcywgdiB9IGluIFswLDFdXG5mdW5jdGlvbiByZ2JUb0hzdihyLCBnLCBiKSB7XG5cbiAgICByID0gYm91bmQwMShyLCAyNTUpO1xuICAgIGcgPSBib3VuZDAxKGcsIDI1NSk7XG4gICAgYiA9IGJvdW5kMDEoYiwgMjU1KTtcblxuICAgIHZhciBtYXggPSBtYXRoTWF4KHIsIGcsIGIpLCBtaW4gPSBtYXRoTWluKHIsIGcsIGIpO1xuICAgIHZhciBoLCBzLCB2ID0gbWF4O1xuXG4gICAgdmFyIGQgPSBtYXggLSBtaW47XG4gICAgcyA9IG1heCA9PT0gMCA/IDAgOiBkIC8gbWF4O1xuXG4gICAgaWYobWF4ID09IG1pbikge1xuICAgICAgICBoID0gMDsgLy8gYWNocm9tYXRpY1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3dpdGNoKG1heCkge1xuICAgICAgICAgICAgY2FzZSByOiBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBnOiBoID0gKGIgLSByKSAvIGQgKyAyOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYjogaCA9IChyIC0gZykgLyBkICsgNDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaCAvPSA2O1xuICAgIH1cbiAgICByZXR1cm4geyBoOiBoLCBzOiBzLCB2OiB2IH07XG59XG5cbi8vIGBoc3ZUb1JnYmBcbi8vIENvbnZlcnRzIGFuIEhTViBjb2xvciB2YWx1ZSB0byBSR0IuXG4vLyAqQXNzdW1lczoqIGggaXMgY29udGFpbmVkIGluIFswLCAxXSBvciBbMCwgMzYwXSBhbmQgcyBhbmQgdiBhcmUgY29udGFpbmVkIGluIFswLCAxXSBvciBbMCwgMTAwXVxuLy8gKlJldHVybnM6KiB7IHIsIGcsIGIgfSBpbiB0aGUgc2V0IFswLCAyNTVdXG4gZnVuY3Rpb24gaHN2VG9SZ2IoaCwgcywgdikge1xuXG4gICAgaCA9IGJvdW5kMDEoaCwgMzYwKSAqIDY7XG4gICAgcyA9IGJvdW5kMDEocywgMTAwKTtcbiAgICB2ID0gYm91bmQwMSh2LCAxMDApO1xuXG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKGgpLFxuICAgICAgICBmID0gaCAtIGksXG4gICAgICAgIHAgPSB2ICogKDEgLSBzKSxcbiAgICAgICAgcSA9IHYgKiAoMSAtIGYgKiBzKSxcbiAgICAgICAgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKSxcbiAgICAgICAgbW9kID0gaSAlIDYsXG4gICAgICAgIHIgPSBbdiwgcSwgcCwgcCwgdCwgdl1bbW9kXSxcbiAgICAgICAgZyA9IFt0LCB2LCB2LCBxLCBwLCBwXVttb2RdLFxuICAgICAgICBiID0gW3AsIHAsIHQsIHYsIHYsIHFdW21vZF07XG5cbiAgICByZXR1cm4geyByOiByICogMjU1LCBnOiBnICogMjU1LCBiOiBiICogMjU1IH07XG59XG5cbi8vIGByZ2JUb0hleGBcbi8vIENvbnZlcnRzIGFuIFJHQiBjb2xvciB0byBoZXhcbi8vIEFzc3VtZXMgciwgZywgYW5kIGIgYXJlIGNvbnRhaW5lZCBpbiB0aGUgc2V0IFswLCAyNTVdXG4vLyBSZXR1cm5zIGEgMyBvciA2IGNoYXJhY3RlciBoZXhcbmZ1bmN0aW9uIHJnYlRvSGV4KHIsIGcsIGIsIGFsbG93M0NoYXIpIHtcblxuICAgIHZhciBoZXggPSBbXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKHIpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKGcpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKGIpLnRvU3RyaW5nKDE2KSlcbiAgICBdO1xuXG4gICAgLy8gUmV0dXJuIGEgMyBjaGFyYWN0ZXIgaGV4IGlmIHBvc3NpYmxlXG4gICAgaWYgKGFsbG93M0NoYXIgJiYgaGV4WzBdLmNoYXJBdCgwKSA9PSBoZXhbMF0uY2hhckF0KDEpICYmIGhleFsxXS5jaGFyQXQoMCkgPT0gaGV4WzFdLmNoYXJBdCgxKSAmJiBoZXhbMl0uY2hhckF0KDApID09IGhleFsyXS5jaGFyQXQoMSkpIHtcbiAgICAgICAgcmV0dXJuIGhleFswXS5jaGFyQXQoMCkgKyBoZXhbMV0uY2hhckF0KDApICsgaGV4WzJdLmNoYXJBdCgwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGV4LmpvaW4oXCJcIik7XG59XG5cbi8vIGByZ2JhVG9IZXhgXG4vLyBDb252ZXJ0cyBhbiBSR0JBIGNvbG9yIHBsdXMgYWxwaGEgdHJhbnNwYXJlbmN5IHRvIGhleFxuLy8gQXNzdW1lcyByLCBnLCBiIGFyZSBjb250YWluZWQgaW4gdGhlIHNldCBbMCwgMjU1XSBhbmRcbi8vIGEgaW4gWzAsIDFdLiBSZXR1cm5zIGEgNCBvciA4IGNoYXJhY3RlciByZ2JhIGhleFxuZnVuY3Rpb24gcmdiYVRvSGV4KHIsIGcsIGIsIGEsIGFsbG93NENoYXIpIHtcblxuICAgIHZhciBoZXggPSBbXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKHIpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKGcpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKGIpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIoY29udmVydERlY2ltYWxUb0hleChhKSlcbiAgICBdO1xuXG4gICAgLy8gUmV0dXJuIGEgNCBjaGFyYWN0ZXIgaGV4IGlmIHBvc3NpYmxlXG4gICAgaWYgKGFsbG93NENoYXIgJiYgaGV4WzBdLmNoYXJBdCgwKSA9PSBoZXhbMF0uY2hhckF0KDEpICYmIGhleFsxXS5jaGFyQXQoMCkgPT0gaGV4WzFdLmNoYXJBdCgxKSAmJiBoZXhbMl0uY2hhckF0KDApID09IGhleFsyXS5jaGFyQXQoMSkgJiYgaGV4WzNdLmNoYXJBdCgwKSA9PSBoZXhbM10uY2hhckF0KDEpKSB7XG4gICAgICAgIHJldHVybiBoZXhbMF0uY2hhckF0KDApICsgaGV4WzFdLmNoYXJBdCgwKSArIGhleFsyXS5jaGFyQXQoMCkgKyBoZXhbM10uY2hhckF0KDApO1xuICAgIH1cblxuICAgIHJldHVybiBoZXguam9pbihcIlwiKTtcbn1cblxuLy8gYHJnYmFUb0FyZ2JIZXhgXG4vLyBDb252ZXJ0cyBhbiBSR0JBIGNvbG9yIHRvIGFuIEFSR0IgSGV4OCBzdHJpbmdcbi8vIFJhcmVseSB1c2VkLCBidXQgcmVxdWlyZWQgZm9yIFwidG9GaWx0ZXIoKVwiXG5mdW5jdGlvbiByZ2JhVG9BcmdiSGV4KHIsIGcsIGIsIGEpIHtcblxuICAgIHZhciBoZXggPSBbXG4gICAgICAgIHBhZDIoY29udmVydERlY2ltYWxUb0hleChhKSksXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKHIpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKGcpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKGIpLnRvU3RyaW5nKDE2KSlcbiAgICBdO1xuXG4gICAgcmV0dXJuIGhleC5qb2luKFwiXCIpO1xufVxuXG4vLyBgZXF1YWxzYFxuLy8gQ2FuIGJlIGNhbGxlZCB3aXRoIGFueSB0aW55Y29sb3IgaW5wdXRcbnRpbnljb2xvci5lcXVhbHMgPSBmdW5jdGlvbiAoY29sb3IxLCBjb2xvcjIpIHtcbiAgICBpZiAoIWNvbG9yMSB8fCAhY29sb3IyKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHJldHVybiB0aW55Y29sb3IoY29sb3IxKS50b1JnYlN0cmluZygpID09IHRpbnljb2xvcihjb2xvcjIpLnRvUmdiU3RyaW5nKCk7XG59O1xuXG50aW55Y29sb3IucmFuZG9tID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRpbnljb2xvci5mcm9tUmF0aW8oe1xuICAgICAgICByOiBtYXRoUmFuZG9tKCksXG4gICAgICAgIGc6IG1hdGhSYW5kb20oKSxcbiAgICAgICAgYjogbWF0aFJhbmRvbSgpXG4gICAgfSk7XG59O1xuXG5cbi8vIE1vZGlmaWNhdGlvbiBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoYW5rcyB0byBsZXNzLmpzIGZvciBzb21lIG9mIHRoZSBiYXNpY3MgaGVyZVxuLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9jbG91ZGhlYWQvbGVzcy5qcy9ibG9iL21hc3Rlci9saWIvbGVzcy9mdW5jdGlvbnMuanM+XG5cbmZ1bmN0aW9uIGRlc2F0dXJhdGUoY29sb3IsIGFtb3VudCkge1xuICAgIGFtb3VudCA9IChhbW91bnQgPT09IDApID8gMCA6IChhbW91bnQgfHwgMTApO1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgaHNsLnMgLT0gYW1vdW50IC8gMTAwO1xuICAgIGhzbC5zID0gY2xhbXAwMShoc2wucyk7XG4gICAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG5mdW5jdGlvbiBzYXR1cmF0ZShjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wucyArPSBhbW91bnQgLyAxMDA7XG4gICAgaHNsLnMgPSBjbGFtcDAxKGhzbC5zKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbmZ1bmN0aW9uIGdyZXlzY2FsZShjb2xvcikge1xuICAgIHJldHVybiB0aW55Y29sb3IoY29sb3IpLmRlc2F0dXJhdGUoMTAwKTtcbn1cblxuZnVuY3Rpb24gbGlnaHRlbiAoY29sb3IsIGFtb3VudCkge1xuICAgIGFtb3VudCA9IChhbW91bnQgPT09IDApID8gMCA6IChhbW91bnQgfHwgMTApO1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgaHNsLmwgKz0gYW1vdW50IC8gMTAwO1xuICAgIGhzbC5sID0gY2xhbXAwMShoc2wubCk7XG4gICAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG5mdW5jdGlvbiBicmlnaHRlbihjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIHJnYiA9IHRpbnljb2xvcihjb2xvcikudG9SZ2IoKTtcbiAgICByZ2IuciA9IG1hdGhNYXgoMCwgbWF0aE1pbigyNTUsIHJnYi5yIC0gbWF0aFJvdW5kKDI1NSAqIC0gKGFtb3VudCAvIDEwMCkpKSk7XG4gICAgcmdiLmcgPSBtYXRoTWF4KDAsIG1hdGhNaW4oMjU1LCByZ2IuZyAtIG1hdGhSb3VuZCgyNTUgKiAtIChhbW91bnQgLyAxMDApKSkpO1xuICAgIHJnYi5iID0gbWF0aE1heCgwLCBtYXRoTWluKDI1NSwgcmdiLmIgLSBtYXRoUm91bmQoMjU1ICogLSAoYW1vdW50IC8gMTAwKSkpKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKHJnYik7XG59XG5cbmZ1bmN0aW9uIGRhcmtlbiAoY29sb3IsIGFtb3VudCkge1xuICAgIGFtb3VudCA9IChhbW91bnQgPT09IDApID8gMCA6IChhbW91bnQgfHwgMTApO1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgaHNsLmwgLT0gYW1vdW50IC8gMTAwO1xuICAgIGhzbC5sID0gY2xhbXAwMShoc2wubCk7XG4gICAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG4vLyBTcGluIHRha2VzIGEgcG9zaXRpdmUgb3IgbmVnYXRpdmUgYW1vdW50IHdpdGhpbiBbLTM2MCwgMzYwXSBpbmRpY2F0aW5nIHRoZSBjaGFuZ2Ugb2YgaHVlLlxuLy8gVmFsdWVzIG91dHNpZGUgb2YgdGhpcyByYW5nZSB3aWxsIGJlIHdyYXBwZWQgaW50byB0aGlzIHJhbmdlLlxuZnVuY3Rpb24gc3Bpbihjb2xvciwgYW1vdW50KSB7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICB2YXIgaHVlID0gKGhzbC5oICsgYW1vdW50KSAlIDM2MDtcbiAgICBoc2wuaCA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG4gICAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG4vLyBDb21iaW5hdGlvbiBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhhbmtzIHRvIGpRdWVyeSB4Q29sb3IgZm9yIHNvbWUgb2YgdGhlIGlkZWFzIGJlaGluZCB0aGVzZVxuLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9pbmZ1c2lvbi9qUXVlcnkteGNvbG9yL2Jsb2IvbWFzdGVyL2pxdWVyeS54Y29sb3IuanM+XG5cbmZ1bmN0aW9uIGNvbXBsZW1lbnQoY29sb3IpIHtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIGhzbC5oID0gKGhzbC5oICsgMTgwKSAlIDM2MDtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbmZ1bmN0aW9uIHRyaWFkKGNvbG9yKSB7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICB2YXIgaCA9IGhzbC5oO1xuICAgIHJldHVybiBbXG4gICAgICAgIHRpbnljb2xvcihjb2xvciksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMTIwKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDI0MCkgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KVxuICAgIF07XG59XG5cbmZ1bmN0aW9uIHRldHJhZChjb2xvcikge1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgdmFyIGggPSBoc2wuaDtcbiAgICByZXR1cm4gW1xuICAgICAgICB0aW55Y29sb3IoY29sb3IpLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDkwKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDE4MCkgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyAyNzApICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSlcbiAgICBdO1xufVxuXG5mdW5jdGlvbiBzcGxpdGNvbXBsZW1lbnQoY29sb3IpIHtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIHZhciBoID0gaHNsLmg7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgdGlueWNvbG9yKGNvbG9yKSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyA3MikgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubH0pLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDIxNikgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubH0pXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gYW5hbG9nb3VzKGNvbG9yLCByZXN1bHRzLCBzbGljZXMpIHtcbiAgICByZXN1bHRzID0gcmVzdWx0cyB8fCA2O1xuICAgIHNsaWNlcyA9IHNsaWNlcyB8fCAzMDtcblxuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgdmFyIHBhcnQgPSAzNjAgLyBzbGljZXM7XG4gICAgdmFyIHJldCA9IFt0aW55Y29sb3IoY29sb3IpXTtcblxuICAgIGZvciAoaHNsLmggPSAoKGhzbC5oIC0gKHBhcnQgKiByZXN1bHRzID4+IDEpKSArIDcyMCkgJSAzNjA7IC0tcmVzdWx0czsgKSB7XG4gICAgICAgIGhzbC5oID0gKGhzbC5oICsgcGFydCkgJSAzNjA7XG4gICAgICAgIHJldC5wdXNoKHRpbnljb2xvcihoc2wpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbW9ub2Nocm9tYXRpYyhjb2xvciwgcmVzdWx0cykge1xuICAgIHJlc3VsdHMgPSByZXN1bHRzIHx8IDY7XG4gICAgdmFyIGhzdiA9IHRpbnljb2xvcihjb2xvcikudG9Ic3YoKTtcbiAgICB2YXIgaCA9IGhzdi5oLCBzID0gaHN2LnMsIHYgPSBoc3YudjtcbiAgICB2YXIgcmV0ID0gW107XG4gICAgdmFyIG1vZGlmaWNhdGlvbiA9IDEgLyByZXN1bHRzO1xuXG4gICAgd2hpbGUgKHJlc3VsdHMtLSkge1xuICAgICAgICByZXQucHVzaCh0aW55Y29sb3IoeyBoOiBoLCBzOiBzLCB2OiB2fSkpO1xuICAgICAgICB2ID0gKHYgKyBtb2RpZmljYXRpb24pICUgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG4vLyBVdGlsaXR5IEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnRpbnljb2xvci5taXggPSBmdW5jdGlvbihjb2xvcjEsIGNvbG9yMiwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCA1MCk7XG5cbiAgICB2YXIgcmdiMSA9IHRpbnljb2xvcihjb2xvcjEpLnRvUmdiKCk7XG4gICAgdmFyIHJnYjIgPSB0aW55Y29sb3IoY29sb3IyKS50b1JnYigpO1xuXG4gICAgdmFyIHAgPSBhbW91bnQgLyAxMDA7XG5cbiAgICB2YXIgcmdiYSA9IHtcbiAgICAgICAgcjogKChyZ2IyLnIgLSByZ2IxLnIpICogcCkgKyByZ2IxLnIsXG4gICAgICAgIGc6ICgocmdiMi5nIC0gcmdiMS5nKSAqIHApICsgcmdiMS5nLFxuICAgICAgICBiOiAoKHJnYjIuYiAtIHJnYjEuYikgKiBwKSArIHJnYjEuYixcbiAgICAgICAgYTogKChyZ2IyLmEgLSByZ2IxLmEpICogcCkgKyByZ2IxLmFcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRpbnljb2xvcihyZ2JhKTtcbn07XG5cblxuLy8gUmVhZGFiaWxpdHkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI2NvbnRyYXN0LXJhdGlvZGVmIChXQ0FHIFZlcnNpb24gMilcblxuLy8gYGNvbnRyYXN0YFxuLy8gQW5hbHl6ZSB0aGUgMiBjb2xvcnMgYW5kIHJldHVybnMgdGhlIGNvbG9yIGNvbnRyYXN0IGRlZmluZWQgYnkgKFdDQUcgVmVyc2lvbiAyKVxudGlueWNvbG9yLnJlYWRhYmlsaXR5ID0gZnVuY3Rpb24oY29sb3IxLCBjb2xvcjIpIHtcbiAgICB2YXIgYzEgPSB0aW55Y29sb3IoY29sb3IxKTtcbiAgICB2YXIgYzIgPSB0aW55Y29sb3IoY29sb3IyKTtcbiAgICByZXR1cm4gKE1hdGgubWF4KGMxLmdldEx1bWluYW5jZSgpLGMyLmdldEx1bWluYW5jZSgpKSswLjA1KSAvIChNYXRoLm1pbihjMS5nZXRMdW1pbmFuY2UoKSxjMi5nZXRMdW1pbmFuY2UoKSkrMC4wNSk7XG59O1xuXG4vLyBgaXNSZWFkYWJsZWBcbi8vIEVuc3VyZSB0aGF0IGZvcmVncm91bmQgYW5kIGJhY2tncm91bmQgY29sb3IgY29tYmluYXRpb25zIG1lZXQgV0NBRzIgZ3VpZGVsaW5lcy5cbi8vIFRoZSB0aGlyZCBhcmd1bWVudCBpcyBhbiBvcHRpb25hbCBPYmplY3QuXG4vLyAgICAgIHRoZSAnbGV2ZWwnIHByb3BlcnR5IHN0YXRlcyAnQUEnIG9yICdBQUEnIC0gaWYgbWlzc2luZyBvciBpbnZhbGlkLCBpdCBkZWZhdWx0cyB0byAnQUEnO1xuLy8gICAgICB0aGUgJ3NpemUnIHByb3BlcnR5IHN0YXRlcyAnbGFyZ2UnIG9yICdzbWFsbCcgLSBpZiBtaXNzaW5nIG9yIGludmFsaWQsIGl0IGRlZmF1bHRzIHRvICdzbWFsbCcuXG4vLyBJZiB0aGUgZW50aXJlIG9iamVjdCBpcyBhYnNlbnQsIGlzUmVhZGFibGUgZGVmYXVsdHMgdG8ge2xldmVsOlwiQUFcIixzaXplOlwic21hbGxcIn0uXG5cbi8vICpFeGFtcGxlKlxuLy8gICAgdGlueWNvbG9yLmlzUmVhZGFibGUoXCIjMDAwXCIsIFwiIzExMVwiKSA9PiBmYWxzZVxuLy8gICAgdGlueWNvbG9yLmlzUmVhZGFibGUoXCIjMDAwXCIsIFwiIzExMVwiLHtsZXZlbDpcIkFBXCIsc2l6ZTpcImxhcmdlXCJ9KSA9PiBmYWxzZVxudGlueWNvbG9yLmlzUmVhZGFibGUgPSBmdW5jdGlvbihjb2xvcjEsIGNvbG9yMiwgd2NhZzIpIHtcbiAgICB2YXIgcmVhZGFiaWxpdHkgPSB0aW55Y29sb3IucmVhZGFiaWxpdHkoY29sb3IxLCBjb2xvcjIpO1xuICAgIHZhciB3Y2FnMlBhcm1zLCBvdXQ7XG5cbiAgICBvdXQgPSBmYWxzZTtcblxuICAgIHdjYWcyUGFybXMgPSB2YWxpZGF0ZVdDQUcyUGFybXMod2NhZzIpO1xuICAgIHN3aXRjaCAod2NhZzJQYXJtcy5sZXZlbCArIHdjYWcyUGFybXMuc2l6ZSkge1xuICAgICAgICBjYXNlIFwiQUFzbWFsbFwiOlxuICAgICAgICBjYXNlIFwiQUFBbGFyZ2VcIjpcbiAgICAgICAgICAgIG91dCA9IHJlYWRhYmlsaXR5ID49IDQuNTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQUFsYXJnZVwiOlxuICAgICAgICAgICAgb3V0ID0gcmVhZGFiaWxpdHkgPj0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQUFBc21hbGxcIjpcbiAgICAgICAgICAgIG91dCA9IHJlYWRhYmlsaXR5ID49IDc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcblxufTtcblxuLy8gYG1vc3RSZWFkYWJsZWBcbi8vIEdpdmVuIGEgYmFzZSBjb2xvciBhbmQgYSBsaXN0IG9mIHBvc3NpYmxlIGZvcmVncm91bmQgb3IgYmFja2dyb3VuZFxuLy8gY29sb3JzIGZvciB0aGF0IGJhc2UsIHJldHVybnMgdGhlIG1vc3QgcmVhZGFibGUgY29sb3IuXG4vLyBPcHRpb25hbGx5IHJldHVybnMgQmxhY2sgb3IgV2hpdGUgaWYgdGhlIG1vc3QgcmVhZGFibGUgY29sb3IgaXMgdW5yZWFkYWJsZS5cbi8vICpFeGFtcGxlKlxuLy8gICAgdGlueWNvbG9yLm1vc3RSZWFkYWJsZSh0aW55Y29sb3IubW9zdFJlYWRhYmxlKFwiIzEyM1wiLCBbXCIjMTI0XCIsIFwiIzEyNVwiXSx7aW5jbHVkZUZhbGxiYWNrQ29sb3JzOmZhbHNlfSkudG9IZXhTdHJpbmcoKTsgLy8gXCIjMTEyMjU1XCJcbi8vICAgIHRpbnljb2xvci5tb3N0UmVhZGFibGUodGlueWNvbG9yLm1vc3RSZWFkYWJsZShcIiMxMjNcIiwgW1wiIzEyNFwiLCBcIiMxMjVcIl0se2luY2x1ZGVGYWxsYmFja0NvbG9yczp0cnVlfSkudG9IZXhTdHJpbmcoKTsgIC8vIFwiI2ZmZmZmZlwiXG4vLyAgICB0aW55Y29sb3IubW9zdFJlYWRhYmxlKFwiI2E4MDE1YVwiLCBbXCIjZmFmM2YzXCJdLHtpbmNsdWRlRmFsbGJhY2tDb2xvcnM6dHJ1ZSxsZXZlbDpcIkFBQVwiLHNpemU6XCJsYXJnZVwifSkudG9IZXhTdHJpbmcoKTsgLy8gXCIjZmFmM2YzXCJcbi8vICAgIHRpbnljb2xvci5tb3N0UmVhZGFibGUoXCIjYTgwMTVhXCIsIFtcIiNmYWYzZjNcIl0se2luY2x1ZGVGYWxsYmFja0NvbG9yczp0cnVlLGxldmVsOlwiQUFBXCIsc2l6ZTpcInNtYWxsXCJ9KS50b0hleFN0cmluZygpOyAvLyBcIiNmZmZmZmZcIlxudGlueWNvbG9yLm1vc3RSZWFkYWJsZSA9IGZ1bmN0aW9uKGJhc2VDb2xvciwgY29sb3JMaXN0LCBhcmdzKSB7XG4gICAgdmFyIGJlc3RDb2xvciA9IG51bGw7XG4gICAgdmFyIGJlc3RTY29yZSA9IDA7XG4gICAgdmFyIHJlYWRhYmlsaXR5O1xuICAgIHZhciBpbmNsdWRlRmFsbGJhY2tDb2xvcnMsIGxldmVsLCBzaXplIDtcbiAgICBhcmdzID0gYXJncyB8fCB7fTtcbiAgICBpbmNsdWRlRmFsbGJhY2tDb2xvcnMgPSBhcmdzLmluY2x1ZGVGYWxsYmFja0NvbG9ycyA7XG4gICAgbGV2ZWwgPSBhcmdzLmxldmVsO1xuICAgIHNpemUgPSBhcmdzLnNpemU7XG5cbiAgICBmb3IgKHZhciBpPSAwOyBpIDwgY29sb3JMaXN0Lmxlbmd0aCA7IGkrKykge1xuICAgICAgICByZWFkYWJpbGl0eSA9IHRpbnljb2xvci5yZWFkYWJpbGl0eShiYXNlQ29sb3IsIGNvbG9yTGlzdFtpXSk7XG4gICAgICAgIGlmIChyZWFkYWJpbGl0eSA+IGJlc3RTY29yZSkge1xuICAgICAgICAgICAgYmVzdFNjb3JlID0gcmVhZGFiaWxpdHk7XG4gICAgICAgICAgICBiZXN0Q29sb3IgPSB0aW55Y29sb3IoY29sb3JMaXN0W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aW55Y29sb3IuaXNSZWFkYWJsZShiYXNlQ29sb3IsIGJlc3RDb2xvciwge1wibGV2ZWxcIjpsZXZlbCxcInNpemVcIjpzaXplfSkgfHwgIWluY2x1ZGVGYWxsYmFja0NvbG9ycykge1xuICAgICAgICByZXR1cm4gYmVzdENvbG9yO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXJncy5pbmNsdWRlRmFsbGJhY2tDb2xvcnM9ZmFsc2U7XG4gICAgICAgIHJldHVybiB0aW55Y29sb3IubW9zdFJlYWRhYmxlKGJhc2VDb2xvcixbXCIjZmZmXCIsIFwiIzAwMFwiXSxhcmdzKTtcbiAgICB9XG59O1xuXG5cbi8vIEJpZyBMaXN0IG9mIENvbG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyA8aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8jc3ZnLWNvbG9yPlxudmFyIG5hbWVzID0gdGlueWNvbG9yLm5hbWVzID0ge1xuICAgIGFsaWNlYmx1ZTogXCJmMGY4ZmZcIixcbiAgICBhbnRpcXVld2hpdGU6IFwiZmFlYmQ3XCIsXG4gICAgYXF1YTogXCIwZmZcIixcbiAgICBhcXVhbWFyaW5lOiBcIjdmZmZkNFwiLFxuICAgIGF6dXJlOiBcImYwZmZmZlwiLFxuICAgIGJlaWdlOiBcImY1ZjVkY1wiLFxuICAgIGJpc3F1ZTogXCJmZmU0YzRcIixcbiAgICBibGFjazogXCIwMDBcIixcbiAgICBibGFuY2hlZGFsbW9uZDogXCJmZmViY2RcIixcbiAgICBibHVlOiBcIjAwZlwiLFxuICAgIGJsdWV2aW9sZXQ6IFwiOGEyYmUyXCIsXG4gICAgYnJvd246IFwiYTUyYTJhXCIsXG4gICAgYnVybHl3b29kOiBcImRlYjg4N1wiLFxuICAgIGJ1cm50c2llbm5hOiBcImVhN2U1ZFwiLFxuICAgIGNhZGV0Ymx1ZTogXCI1ZjllYTBcIixcbiAgICBjaGFydHJldXNlOiBcIjdmZmYwMFwiLFxuICAgIGNob2NvbGF0ZTogXCJkMjY5MWVcIixcbiAgICBjb3JhbDogXCJmZjdmNTBcIixcbiAgICBjb3JuZmxvd2VyYmx1ZTogXCI2NDk1ZWRcIixcbiAgICBjb3Juc2lsazogXCJmZmY4ZGNcIixcbiAgICBjcmltc29uOiBcImRjMTQzY1wiLFxuICAgIGN5YW46IFwiMGZmXCIsXG4gICAgZGFya2JsdWU6IFwiMDAwMDhiXCIsXG4gICAgZGFya2N5YW46IFwiMDA4YjhiXCIsXG4gICAgZGFya2dvbGRlbnJvZDogXCJiODg2MGJcIixcbiAgICBkYXJrZ3JheTogXCJhOWE5YTlcIixcbiAgICBkYXJrZ3JlZW46IFwiMDA2NDAwXCIsXG4gICAgZGFya2dyZXk6IFwiYTlhOWE5XCIsXG4gICAgZGFya2toYWtpOiBcImJkYjc2YlwiLFxuICAgIGRhcmttYWdlbnRhOiBcIjhiMDA4YlwiLFxuICAgIGRhcmtvbGl2ZWdyZWVuOiBcIjU1NmIyZlwiLFxuICAgIGRhcmtvcmFuZ2U6IFwiZmY4YzAwXCIsXG4gICAgZGFya29yY2hpZDogXCI5OTMyY2NcIixcbiAgICBkYXJrcmVkOiBcIjhiMDAwMFwiLFxuICAgIGRhcmtzYWxtb246IFwiZTk5NjdhXCIsXG4gICAgZGFya3NlYWdyZWVuOiBcIjhmYmM4ZlwiLFxuICAgIGRhcmtzbGF0ZWJsdWU6IFwiNDgzZDhiXCIsXG4gICAgZGFya3NsYXRlZ3JheTogXCIyZjRmNGZcIixcbiAgICBkYXJrc2xhdGVncmV5OiBcIjJmNGY0ZlwiLFxuICAgIGRhcmt0dXJxdW9pc2U6IFwiMDBjZWQxXCIsXG4gICAgZGFya3Zpb2xldDogXCI5NDAwZDNcIixcbiAgICBkZWVwcGluazogXCJmZjE0OTNcIixcbiAgICBkZWVwc2t5Ymx1ZTogXCIwMGJmZmZcIixcbiAgICBkaW1ncmF5OiBcIjY5Njk2OVwiLFxuICAgIGRpbWdyZXk6IFwiNjk2OTY5XCIsXG4gICAgZG9kZ2VyYmx1ZTogXCIxZTkwZmZcIixcbiAgICBmaXJlYnJpY2s6IFwiYjIyMjIyXCIsXG4gICAgZmxvcmFsd2hpdGU6IFwiZmZmYWYwXCIsXG4gICAgZm9yZXN0Z3JlZW46IFwiMjI4YjIyXCIsXG4gICAgZnVjaHNpYTogXCJmMGZcIixcbiAgICBnYWluc2Jvcm86IFwiZGNkY2RjXCIsXG4gICAgZ2hvc3R3aGl0ZTogXCJmOGY4ZmZcIixcbiAgICBnb2xkOiBcImZmZDcwMFwiLFxuICAgIGdvbGRlbnJvZDogXCJkYWE1MjBcIixcbiAgICBncmF5OiBcIjgwODA4MFwiLFxuICAgIGdyZWVuOiBcIjAwODAwMFwiLFxuICAgIGdyZWVueWVsbG93OiBcImFkZmYyZlwiLFxuICAgIGdyZXk6IFwiODA4MDgwXCIsXG4gICAgaG9uZXlkZXc6IFwiZjBmZmYwXCIsXG4gICAgaG90cGluazogXCJmZjY5YjRcIixcbiAgICBpbmRpYW5yZWQ6IFwiY2Q1YzVjXCIsXG4gICAgaW5kaWdvOiBcIjRiMDA4MlwiLFxuICAgIGl2b3J5OiBcImZmZmZmMFwiLFxuICAgIGtoYWtpOiBcImYwZTY4Y1wiLFxuICAgIGxhdmVuZGVyOiBcImU2ZTZmYVwiLFxuICAgIGxhdmVuZGVyYmx1c2g6IFwiZmZmMGY1XCIsXG4gICAgbGF3bmdyZWVuOiBcIjdjZmMwMFwiLFxuICAgIGxlbW9uY2hpZmZvbjogXCJmZmZhY2RcIixcbiAgICBsaWdodGJsdWU6IFwiYWRkOGU2XCIsXG4gICAgbGlnaHRjb3JhbDogXCJmMDgwODBcIixcbiAgICBsaWdodGN5YW46IFwiZTBmZmZmXCIsXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IFwiZmFmYWQyXCIsXG4gICAgbGlnaHRncmF5OiBcImQzZDNkM1wiLFxuICAgIGxpZ2h0Z3JlZW46IFwiOTBlZTkwXCIsXG4gICAgbGlnaHRncmV5OiBcImQzZDNkM1wiLFxuICAgIGxpZ2h0cGluazogXCJmZmI2YzFcIixcbiAgICBsaWdodHNhbG1vbjogXCJmZmEwN2FcIixcbiAgICBsaWdodHNlYWdyZWVuOiBcIjIwYjJhYVwiLFxuICAgIGxpZ2h0c2t5Ymx1ZTogXCI4N2NlZmFcIixcbiAgICBsaWdodHNsYXRlZ3JheTogXCI3ODlcIixcbiAgICBsaWdodHNsYXRlZ3JleTogXCI3ODlcIixcbiAgICBsaWdodHN0ZWVsYmx1ZTogXCJiMGM0ZGVcIixcbiAgICBsaWdodHllbGxvdzogXCJmZmZmZTBcIixcbiAgICBsaW1lOiBcIjBmMFwiLFxuICAgIGxpbWVncmVlbjogXCIzMmNkMzJcIixcbiAgICBsaW5lbjogXCJmYWYwZTZcIixcbiAgICBtYWdlbnRhOiBcImYwZlwiLFxuICAgIG1hcm9vbjogXCI4MDAwMDBcIixcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiBcIjY2Y2RhYVwiLFxuICAgIG1lZGl1bWJsdWU6IFwiMDAwMGNkXCIsXG4gICAgbWVkaXVtb3JjaGlkOiBcImJhNTVkM1wiLFxuICAgIG1lZGl1bXB1cnBsZTogXCI5MzcwZGJcIixcbiAgICBtZWRpdW1zZWFncmVlbjogXCIzY2IzNzFcIixcbiAgICBtZWRpdW1zbGF0ZWJsdWU6IFwiN2I2OGVlXCIsXG4gICAgbWVkaXVtc3ByaW5nZ3JlZW46IFwiMDBmYTlhXCIsXG4gICAgbWVkaXVtdHVycXVvaXNlOiBcIjQ4ZDFjY1wiLFxuICAgIG1lZGl1bXZpb2xldHJlZDogXCJjNzE1ODVcIixcbiAgICBtaWRuaWdodGJsdWU6IFwiMTkxOTcwXCIsXG4gICAgbWludGNyZWFtOiBcImY1ZmZmYVwiLFxuICAgIG1pc3R5cm9zZTogXCJmZmU0ZTFcIixcbiAgICBtb2NjYXNpbjogXCJmZmU0YjVcIixcbiAgICBuYXZham93aGl0ZTogXCJmZmRlYWRcIixcbiAgICBuYXZ5OiBcIjAwMDA4MFwiLFxuICAgIG9sZGxhY2U6IFwiZmRmNWU2XCIsXG4gICAgb2xpdmU6IFwiODA4MDAwXCIsXG4gICAgb2xpdmVkcmFiOiBcIjZiOGUyM1wiLFxuICAgIG9yYW5nZTogXCJmZmE1MDBcIixcbiAgICBvcmFuZ2VyZWQ6IFwiZmY0NTAwXCIsXG4gICAgb3JjaGlkOiBcImRhNzBkNlwiLFxuICAgIHBhbGVnb2xkZW5yb2Q6IFwiZWVlOGFhXCIsXG4gICAgcGFsZWdyZWVuOiBcIjk4ZmI5OFwiLFxuICAgIHBhbGV0dXJxdW9pc2U6IFwiYWZlZWVlXCIsXG4gICAgcGFsZXZpb2xldHJlZDogXCJkYjcwOTNcIixcbiAgICBwYXBheWF3aGlwOiBcImZmZWZkNVwiLFxuICAgIHBlYWNocHVmZjogXCJmZmRhYjlcIixcbiAgICBwZXJ1OiBcImNkODUzZlwiLFxuICAgIHBpbms6IFwiZmZjMGNiXCIsXG4gICAgcGx1bTogXCJkZGEwZGRcIixcbiAgICBwb3dkZXJibHVlOiBcImIwZTBlNlwiLFxuICAgIHB1cnBsZTogXCI4MDAwODBcIixcbiAgICByZWJlY2NhcHVycGxlOiBcIjY2MzM5OVwiLFxuICAgIHJlZDogXCJmMDBcIixcbiAgICByb3N5YnJvd246IFwiYmM4ZjhmXCIsXG4gICAgcm95YWxibHVlOiBcIjQxNjllMVwiLFxuICAgIHNhZGRsZWJyb3duOiBcIjhiNDUxM1wiLFxuICAgIHNhbG1vbjogXCJmYTgwNzJcIixcbiAgICBzYW5keWJyb3duOiBcImY0YTQ2MFwiLFxuICAgIHNlYWdyZWVuOiBcIjJlOGI1N1wiLFxuICAgIHNlYXNoZWxsOiBcImZmZjVlZVwiLFxuICAgIHNpZW5uYTogXCJhMDUyMmRcIixcbiAgICBzaWx2ZXI6IFwiYzBjMGMwXCIsXG4gICAgc2t5Ymx1ZTogXCI4N2NlZWJcIixcbiAgICBzbGF0ZWJsdWU6IFwiNmE1YWNkXCIsXG4gICAgc2xhdGVncmF5OiBcIjcwODA5MFwiLFxuICAgIHNsYXRlZ3JleTogXCI3MDgwOTBcIixcbiAgICBzbm93OiBcImZmZmFmYVwiLFxuICAgIHNwcmluZ2dyZWVuOiBcIjAwZmY3ZlwiLFxuICAgIHN0ZWVsYmx1ZTogXCI0NjgyYjRcIixcbiAgICB0YW46IFwiZDJiNDhjXCIsXG4gICAgdGVhbDogXCIwMDgwODBcIixcbiAgICB0aGlzdGxlOiBcImQ4YmZkOFwiLFxuICAgIHRvbWF0bzogXCJmZjYzNDdcIixcbiAgICB0dXJxdW9pc2U6IFwiNDBlMGQwXCIsXG4gICAgdmlvbGV0OiBcImVlODJlZVwiLFxuICAgIHdoZWF0OiBcImY1ZGViM1wiLFxuICAgIHdoaXRlOiBcImZmZlwiLFxuICAgIHdoaXRlc21va2U6IFwiZjVmNWY1XCIsXG4gICAgeWVsbG93OiBcImZmMFwiLFxuICAgIHllbGxvd2dyZWVuOiBcIjlhY2QzMlwiXG59O1xuXG4vLyBNYWtlIGl0IGVhc3kgdG8gYWNjZXNzIGNvbG9ycyB2aWEgYGhleE5hbWVzW2hleF1gXG52YXIgaGV4TmFtZXMgPSB0aW55Y29sb3IuaGV4TmFtZXMgPSBmbGlwKG5hbWVzKTtcblxuXG4vLyBVdGlsaXRpZXNcbi8vIC0tLS0tLS0tLVxuXG4vLyBgeyAnbmFtZTEnOiAndmFsMScgfWAgYmVjb21lcyBgeyAndmFsMSc6ICduYW1lMScgfWBcbmZ1bmN0aW9uIGZsaXAobykge1xuICAgIHZhciBmbGlwcGVkID0geyB9O1xuICAgIGZvciAodmFyIGkgaW4gbykge1xuICAgICAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgZmxpcHBlZFtvW2ldXSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZsaXBwZWQ7XG59XG5cbi8vIFJldHVybiBhIHZhbGlkIGFscGhhIHZhbHVlIFswLDFdIHdpdGggYWxsIGludmFsaWQgdmFsdWVzIGJlaW5nIHNldCB0byAxXG5mdW5jdGlvbiBib3VuZEFscGhhKGEpIHtcbiAgICBhID0gcGFyc2VGbG9hdChhKTtcblxuICAgIGlmIChpc05hTihhKSB8fCBhIDwgMCB8fCBhID4gMSkge1xuICAgICAgICBhID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cblxuLy8gVGFrZSBpbnB1dCBmcm9tIFswLCBuXSBhbmQgcmV0dXJuIGl0IGFzIFswLCAxXVxuZnVuY3Rpb24gYm91bmQwMShuLCBtYXgpIHtcbiAgICBpZiAoaXNPbmVQb2ludFplcm8obikpIHsgbiA9IFwiMTAwJVwiOyB9XG5cbiAgICB2YXIgcHJvY2Vzc1BlcmNlbnQgPSBpc1BlcmNlbnRhZ2Uobik7XG4gICAgbiA9IG1hdGhNaW4obWF4LCBtYXRoTWF4KDAsIHBhcnNlRmxvYXQobikpKTtcblxuICAgIC8vIEF1dG9tYXRpY2FsbHkgY29udmVydCBwZXJjZW50YWdlIGludG8gbnVtYmVyXG4gICAgaWYgKHByb2Nlc3NQZXJjZW50KSB7XG4gICAgICAgIG4gPSBwYXJzZUludChuICogbWF4LCAxMCkgLyAxMDA7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9yc1xuICAgIGlmICgoTWF0aC5hYnMobiAtIG1heCkgPCAwLjAwMDAwMSkpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCBpbnRvIFswLCAxXSByYW5nZSBpZiBpdCBpc24ndCBhbHJlYWR5XG4gICAgcmV0dXJuIChuICUgbWF4KSAvIHBhcnNlRmxvYXQobWF4KTtcbn1cblxuLy8gRm9yY2UgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxXG5mdW5jdGlvbiBjbGFtcDAxKHZhbCkge1xuICAgIHJldHVybiBtYXRoTWluKDEsIG1hdGhNYXgoMCwgdmFsKSk7XG59XG5cbi8vIFBhcnNlIGEgYmFzZS0xNiBoZXggdmFsdWUgaW50byBhIGJhc2UtMTAgaW50ZWdlclxuZnVuY3Rpb24gcGFyc2VJbnRGcm9tSGV4KHZhbCkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWwsIDE2KTtcbn1cblxuLy8gTmVlZCB0byBoYW5kbGUgMS4wIGFzIDEwMCUsIHNpbmNlIG9uY2UgaXQgaXMgYSBudW1iZXIsIHRoZXJlIGlzIG5vIGRpZmZlcmVuY2UgYmV0d2VlbiBpdCBhbmQgMVxuLy8gPGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzQyMjA3Mi9qYXZhc2NyaXB0LWhvdy10by1kZXRlY3QtbnVtYmVyLWFzLWEtZGVjaW1hbC1pbmNsdWRpbmctMS0wPlxuZnVuY3Rpb24gaXNPbmVQb2ludFplcm8obikge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PSBcInN0cmluZ1wiICYmIG4uaW5kZXhPZignLicpICE9IC0xICYmIHBhcnNlRmxvYXQobikgPT09IDE7XG59XG5cbi8vIENoZWNrIHRvIHNlZSBpZiBzdHJpbmcgcGFzc2VkIGluIGlzIGEgcGVyY2VudGFnZVxuZnVuY3Rpb24gaXNQZXJjZW50YWdlKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09IFwic3RyaW5nXCIgJiYgbi5pbmRleE9mKCclJykgIT0gLTE7XG59XG5cbi8vIEZvcmNlIGEgaGV4IHZhbHVlIHRvIGhhdmUgMiBjaGFyYWN0ZXJzXG5mdW5jdGlvbiBwYWQyKGMpIHtcbiAgICByZXR1cm4gYy5sZW5ndGggPT0gMSA/ICcwJyArIGMgOiAnJyArIGM7XG59XG5cbi8vIFJlcGxhY2UgYSBkZWNpbWFsIHdpdGggaXQncyBwZXJjZW50YWdlIHZhbHVlXG5mdW5jdGlvbiBjb252ZXJ0VG9QZXJjZW50YWdlKG4pIHtcbiAgICBpZiAobiA8PSAxKSB7XG4gICAgICAgIG4gPSAobiAqIDEwMCkgKyBcIiVcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gbjtcbn1cblxuLy8gQ29udmVydHMgYSBkZWNpbWFsIHRvIGEgaGV4IHZhbHVlXG5mdW5jdGlvbiBjb252ZXJ0RGVjaW1hbFRvSGV4KGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGQpICogMjU1KS50b1N0cmluZygxNik7XG59XG4vLyBDb252ZXJ0cyBhIGhleCB2YWx1ZSB0byBhIGRlY2ltYWxcbmZ1bmN0aW9uIGNvbnZlcnRIZXhUb0RlY2ltYWwoaCkge1xuICAgIHJldHVybiAocGFyc2VJbnRGcm9tSGV4KGgpIC8gMjU1KTtcbn1cblxudmFyIG1hdGNoZXJzID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtdmFsdWVzLyNpbnRlZ2Vycz5cbiAgICB2YXIgQ1NTX0lOVEVHRVIgPSBcIlstXFxcXCtdP1xcXFxkKyU/XCI7XG5cbiAgICAvLyA8aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy12YWx1ZXMvI251bWJlci12YWx1ZT5cbiAgICB2YXIgQ1NTX05VTUJFUiA9IFwiWy1cXFxcK10/XFxcXGQqXFxcXC5cXFxcZCslP1wiO1xuXG4gICAgLy8gQWxsb3cgcG9zaXRpdmUvbmVnYXRpdmUgaW50ZWdlci9udW1iZXIuICBEb24ndCBjYXB0dXJlIHRoZSBlaXRoZXIvb3IsIGp1c3QgdGhlIGVudGlyZSBvdXRjb21lLlxuICAgIHZhciBDU1NfVU5JVCA9IFwiKD86XCIgKyBDU1NfTlVNQkVSICsgXCIpfCg/OlwiICsgQ1NTX0lOVEVHRVIgKyBcIilcIjtcblxuICAgIC8vIEFjdHVhbCBtYXRjaGluZy5cbiAgICAvLyBQYXJlbnRoZXNlcyBhbmQgY29tbWFzIGFyZSBvcHRpb25hbCwgYnV0IG5vdCByZXF1aXJlZC5cbiAgICAvLyBXaGl0ZXNwYWNlIGNhbiB0YWtlIHRoZSBwbGFjZSBvZiBjb21tYXMgb3Igb3BlbmluZyBwYXJlblxuICAgIHZhciBQRVJNSVNTSVZFX01BVENIMyA9IFwiW1xcXFxzfFxcXFwoXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVxcXFxzKlxcXFwpP1wiO1xuICAgIHZhciBQRVJNSVNTSVZFX01BVENINCA9IFwiW1xcXFxzfFxcXFwoXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVxcXFxzKlxcXFwpP1wiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgQ1NTX1VOSVQ6IG5ldyBSZWdFeHAoQ1NTX1VOSVQpLFxuICAgICAgICByZ2I6IG5ldyBSZWdFeHAoXCJyZ2JcIiArIFBFUk1JU1NJVkVfTUFUQ0gzKSxcbiAgICAgICAgcmdiYTogbmV3IFJlZ0V4cChcInJnYmFcIiArIFBFUk1JU1NJVkVfTUFUQ0g0KSxcbiAgICAgICAgaHNsOiBuZXcgUmVnRXhwKFwiaHNsXCIgKyBQRVJNSVNTSVZFX01BVENIMyksXG4gICAgICAgIGhzbGE6IG5ldyBSZWdFeHAoXCJoc2xhXCIgKyBQRVJNSVNTSVZFX01BVENINCksXG4gICAgICAgIGhzdjogbmV3IFJlZ0V4cChcImhzdlwiICsgUEVSTUlTU0lWRV9NQVRDSDMpLFxuICAgICAgICBoc3ZhOiBuZXcgUmVnRXhwKFwiaHN2YVwiICsgUEVSTUlTU0lWRV9NQVRDSDQpLFxuICAgICAgICBoZXgzOiAvXiM/KFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8sXG4gICAgICAgIGhleDY6IC9eIz8oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkLyxcbiAgICAgICAgaGV4NDogL14jPyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxcbiAgICAgICAgaGV4ODogL14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkL1xuICAgIH07XG59KSgpO1xuXG4vLyBgaXNWYWxpZENTU1VuaXRgXG4vLyBUYWtlIGluIGEgc2luZ2xlIHN0cmluZyAvIG51bWJlciBhbmQgY2hlY2sgdG8gc2VlIGlmIGl0IGxvb2tzIGxpa2UgYSBDU1MgdW5pdFxuLy8gKHNlZSBgbWF0Y2hlcnNgIGFib3ZlIGZvciBkZWZpbml0aW9uKS5cbmZ1bmN0aW9uIGlzVmFsaWRDU1NVbml0KGNvbG9yKSB7XG4gICAgcmV0dXJuICEhbWF0Y2hlcnMuQ1NTX1VOSVQuZXhlYyhjb2xvcik7XG59XG5cbi8vIGBzdHJpbmdJbnB1dFRvT2JqZWN0YFxuLy8gUGVybWlzc2l2ZSBzdHJpbmcgcGFyc2luZy4gIFRha2UgaW4gYSBudW1iZXIgb2YgZm9ybWF0cywgYW5kIG91dHB1dCBhbiBvYmplY3Rcbi8vIGJhc2VkIG9uIGRldGVjdGVkIGZvcm1hdC4gIFJldHVybnMgYHsgciwgZywgYiB9YCBvciBgeyBoLCBzLCBsIH1gIG9yIGB7IGgsIHMsIHZ9YFxuZnVuY3Rpb24gc3RyaW5nSW5wdXRUb09iamVjdChjb2xvcikge1xuXG4gICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKHRyaW1MZWZ0LCcnKS5yZXBsYWNlKHRyaW1SaWdodCwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIG5hbWVkID0gZmFsc2U7XG4gICAgaWYgKG5hbWVzW2NvbG9yXSkge1xuICAgICAgICBjb2xvciA9IG5hbWVzW2NvbG9yXTtcbiAgICAgICAgbmFtZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb2xvciA9PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgIHJldHVybiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAsIGZvcm1hdDogXCJuYW1lXCIgfTtcbiAgICB9XG5cbiAgICAvLyBUcnkgdG8gbWF0Y2ggc3RyaW5nIGlucHV0IHVzaW5nIHJlZ3VsYXIgZXhwcmVzc2lvbnMuXG4gICAgLy8gS2VlcCBtb3N0IG9mIHRoZSBudW1iZXIgYm91bmRpbmcgb3V0IG9mIHRoaXMgZnVuY3Rpb24gLSBkb24ndCB3b3JyeSBhYm91dCBbMCwxXSBvciBbMCwxMDBdIG9yIFswLDM2MF1cbiAgICAvLyBKdXN0IHJldHVybiBhbiBvYmplY3QgYW5kIGxldCB0aGUgY29udmVyc2lvbiBmdW5jdGlvbnMgaGFuZGxlIHRoYXQuXG4gICAgLy8gVGhpcyB3YXkgdGhlIHJlc3VsdCB3aWxsIGJlIHRoZSBzYW1lIHdoZXRoZXIgdGhlIHRpbnljb2xvciBpcyBpbml0aWFsaXplZCB3aXRoIHN0cmluZyBvciBvYmplY3QuXG4gICAgdmFyIG1hdGNoO1xuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5yZ2IuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7IHI6IG1hdGNoWzFdLCBnOiBtYXRjaFsyXSwgYjogbWF0Y2hbM10gfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLnJnYmEuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7IHI6IG1hdGNoWzFdLCBnOiBtYXRjaFsyXSwgYjogbWF0Y2hbM10sIGE6IG1hdGNoWzRdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oc2wuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7IGg6IG1hdGNoWzFdLCBzOiBtYXRjaFsyXSwgbDogbWF0Y2hbM10gfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhzbGEuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7IGg6IG1hdGNoWzFdLCBzOiBtYXRjaFsyXSwgbDogbWF0Y2hbM10sIGE6IG1hdGNoWzRdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oc3YuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7IGg6IG1hdGNoWzFdLCBzOiBtYXRjaFsyXSwgdjogbWF0Y2hbM10gfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhzdmEuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7IGg6IG1hdGNoWzFdLCBzOiBtYXRjaFsyXSwgdjogbWF0Y2hbM10sIGE6IG1hdGNoWzRdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oZXg4LmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzFdKSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSksXG4gICAgICAgICAgICBiOiBwYXJzZUludEZyb21IZXgobWF0Y2hbM10pLFxuICAgICAgICAgICAgYTogY29udmVydEhleFRvRGVjaW1hbChtYXRjaFs0XSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gXCJuYW1lXCIgOiBcImhleDhcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaGV4Ni5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSksXG4gICAgICAgICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0pLFxuICAgICAgICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdKSxcbiAgICAgICAgICAgIGZvcm1hdDogbmFtZWQgPyBcIm5hbWVcIiA6IFwiaGV4XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhleDQuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0gKyAnJyArIG1hdGNoWzFdKSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSArICcnICsgbWF0Y2hbMl0pLFxuICAgICAgICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdICsgJycgKyBtYXRjaFszXSksXG4gICAgICAgICAgICBhOiBjb252ZXJ0SGV4VG9EZWNpbWFsKG1hdGNoWzRdICsgJycgKyBtYXRjaFs0XSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gXCJuYW1lXCIgOiBcImhleDhcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaGV4My5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSArICcnICsgbWF0Y2hbMV0pLFxuICAgICAgICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdICsgJycgKyBtYXRjaFsyXSksXG4gICAgICAgICAgICBiOiBwYXJzZUludEZyb21IZXgobWF0Y2hbM10gKyAnJyArIG1hdGNoWzNdKSxcbiAgICAgICAgICAgIGZvcm1hdDogbmFtZWQgPyBcIm5hbWVcIiA6IFwiaGV4XCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV0NBRzJQYXJtcyhwYXJtcykge1xuICAgIC8vIHJldHVybiB2YWxpZCBXQ0FHMiBwYXJtcyBmb3IgaXNSZWFkYWJsZS5cbiAgICAvLyBJZiBpbnB1dCBwYXJtcyBhcmUgaW52YWxpZCwgcmV0dXJuIHtcImxldmVsXCI6XCJBQVwiLCBcInNpemVcIjpcInNtYWxsXCJ9XG4gICAgdmFyIGxldmVsLCBzaXplO1xuICAgIHBhcm1zID0gcGFybXMgfHwge1wibGV2ZWxcIjpcIkFBXCIsIFwic2l6ZVwiOlwic21hbGxcIn07XG4gICAgbGV2ZWwgPSAocGFybXMubGV2ZWwgfHwgXCJBQVwiKS50b1VwcGVyQ2FzZSgpO1xuICAgIHNpemUgPSAocGFybXMuc2l6ZSB8fCBcInNtYWxsXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGxldmVsICE9PSBcIkFBXCIgJiYgbGV2ZWwgIT09IFwiQUFBXCIpIHtcbiAgICAgICAgbGV2ZWwgPSBcIkFBXCI7XG4gICAgfVxuICAgIGlmIChzaXplICE9PSBcInNtYWxsXCIgJiYgc2l6ZSAhPT0gXCJsYXJnZVwiKSB7XG4gICAgICAgIHNpemUgPSBcInNtYWxsXCI7XG4gICAgfVxuICAgIHJldHVybiB7XCJsZXZlbFwiOmxldmVsLCBcInNpemVcIjpzaXplfTtcbn1cblxuLy8gTm9kZTogRXhwb3J0IGZ1bmN0aW9uXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gdGlueWNvbG9yO1xufVxuLy8gQU1EL3JlcXVpcmVqczogRGVmaW5lIHRoZSBtb2R1bGVcbmVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbiAoKSB7cmV0dXJuIHRpbnljb2xvcjt9KTtcbn1cbi8vIEJyb3dzZXI6IEV4cG9zZSB0byB3aW5kb3dcbmVsc2Uge1xuICAgIHdpbmRvdy50aW55Y29sb3IgPSB0aW55Y29sb3I7XG59XG5cbn0pKE1hdGgpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7XG5cdFBhbmVsQm9keSxcblx0UmFuZ2VDb250cm9sLFxuXHRQYXRoLFxuXHRTVkcsXG5cdFJlY3QsXG5cdFRvb2xiYXIsXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQge2NyZWF0ZUJsb2NrfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5pbXBvcnQge0luc3BlY3RvckNvbnRyb2xzLElubmVyQmxvY2tzLEJsb2NrQ29udHJvbHN9IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcbmltcG9ydCB7c2VsZWN0fSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdnZWNrby9ncmlkLWxheW91dC1iYXNpYyc7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnQmFzaWMnICksXG5cblx0cGFyZW50OiBbJ2dlY2tvL2dyaWQtbGF5b3V0J10sXG5cblx0aWNvbjogPFNWRyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxQYXRoIGQ9XCJNMCwwaDI0djI0SDBWMHogTTAsMGgyNHYyNEgwVjB6XCIgZmlsbD1cIm5vbmVcIiAvPjxQYXRoIGQ9XCJtMjAgN3YxMGgtMTZ2LTEwaDE2bTAtMmgtMTZjLTEuMSAwLTEuOTkgMC45LTEuOTkgMmwtMC4wMSAxMGMwIDEuMSAwLjkgMiAyIDJoMTZjMS4xIDAgMi0wLjkgMi0ydi0xMGMwLTEuMS0wLjktMi0yLTJ6XCIgLz48UmVjdCB4PVwiMTFcIiB5PVwiOFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjxSZWN0IHg9XCIxMVwiIHk9XCIxMVwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjxSZWN0IHg9XCI4XCIgeT1cIjhcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIyXCIgLz48UmVjdCB4PVwiOFwiIHk9XCIxMVwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjxSZWN0IHg9XCI1XCIgeT1cIjExXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMlwiIC8+PFJlY3QgeD1cIjVcIiB5PVwiOFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjxSZWN0IHg9XCI4XCIgeT1cIjE0XCIgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMlwiIC8+PFJlY3QgeD1cIjE0XCIgeT1cIjExXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMlwiIC8+PFJlY3QgeD1cIjE0XCIgeT1cIjhcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIyXCIgLz48UmVjdCB4PVwiMTdcIiB5PVwiMTFcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIyXCIgLz48UmVjdCB4PVwiMTdcIiB5PVwiOFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjwvU1ZHPixcblxuXHRkZXNjcmlwdGlvbjogX18oICdBbiBpbWFnZSBncmlkIGJsb2NrLicgKSxcblxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0c3VwcG9ydHM6IHtcblx0XHRjbGFzc05hbWU6IHRydWUsXG5cdFx0aW5zZXJ0ZXI6IHRydWUsXG5cdFx0cmV1c2FibGU6IGZhbHNlLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdHN0eWxlczogW1xuXHRcdHsgbmFtZTogJ2RlZmF1bHQnLCBsYWJlbDogX18oICdEZWZhdWx0JyksIGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHRdLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRoOiB7IHR5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAxfSxcblx0XHR3OiB7IHR5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAxfSxcblx0XHRhbGlnbkNvbnRlbnQ6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICd0b3AnfSxcblx0fSxcblxuXHR0cmFuc2Zvcm1zOiB7XG5cdFx0ZnJvbTogW1xuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0XHRibG9ja3M6IFsnZ2Vja28vZ3JpZC1sYXlvdXQtaW1hZ2UnLCAnZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbSddLFxuXHRcdFx0XHR0cmFuc2Zvcm06IChhdHRyaWJ1dGVzLCBpbm5lckJsb2NrcykgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldFNlbGVjdGVkQmxvY2soKTsgLy8gYmVjYXVzZSBpbm5lckJsb2NrcyBkb2VzIG5vdCB3b3JrLlxuXHRcdFx0XHRcdC8vIEl0IGFwcGVhcnMgdGhhdCBpbm5lckJsb2NrcyB3aWxsIGJlIGFkZGVkIGluIHRoZSBmdXR1cmUuXG5cdFx0XHRcdFx0Y29uc3Qge2gsIHd9ID0gYXR0cmlidXRlcztcblx0XHRcdFx0XHRyZXR1cm4gY3JlYXRlQmxvY2soJ2dlY2tvL2dyaWQtbGF5b3V0LWJhc2ljJywge1xuXHRcdFx0XHRcdFx0aDogaCxcblx0XHRcdFx0XHRcdHc6IHcsXG5cdFx0XHRcdFx0fSwgc2VsZWN0ZWQuaW5uZXJCbG9ja3MpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcdFxuXHRcdF0sXG5cdH0sXG5cblx0ZGVwcmVjYXRlZDogW3tcblx0XHRtaWdyYXRlKCkge30sXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudCAvID4gO1xuXHRcdH0sXG5cdH1dLFxuXG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGluc2VydEJsb2Nrc0FmdGVyIH0pIHtcblx0XHRjb25zdCB7XG5cdFx0XHRoLFxuXHRcdFx0dyxcblx0XHRcdGFsaWduQ29udGVudCxcblx0XHR9ID0gYXR0cmlidXRlcztcblx0XHRcblx0XHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0XHRncmlkQ29sdW1uRW5kOiAnc3BhbiAnKyB3LFxuXHRcdFx0Z3JpZFJvd0VuZDogJ3NwYW4gJyArIGgsXG5cdFx0XHRhbGlnblNlbGY6IChhbGlnbkNvbnRlbnQgPT09ICdjZW50ZXInKT8gJ2NlbnRlcic6ICdzdGFydCcsXG5cdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIkdyaWQgSXRlbVwiPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnV2lkdGgnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHcgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3OiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyAxMiB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3BhbiBSb3dzJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBoIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0aDogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMTIgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdFx0PFRvb2xiYXIgY29udHJvbHM9e1tcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aWNvbjogJ2Fycm93LXVwLWFsdCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBfXygnQWxpZ24gVG9wJyksXG5cdFx0XHRcdFx0XHRcdGlzQWN0aXZlOiBhbGlnbkNvbnRlbnQgPT09ICd0b3AnLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiBzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRhbGlnbkNvbnRlbnQ6ICd0b3AnXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aWNvbjogJ2FsaWduLWNlbnRlcicsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBfXygnQWxpZ24gQ2VudGVyJyksXG5cdFx0XHRcdFx0XHRcdGlzQWN0aXZlOiBhbGlnbkNvbnRlbnQgPT09ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiBzZXRBdHRyaWJ1dGVzKHthbGlnbkNvbnRlbnQ6ICdjZW50ZXInfSksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRpY29uOiAnYXJyb3ctZG93bi1hbHQnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogX18oJ0FsaWduIEJvdHRvbScpLFxuXHRcdFx0XHRcdFx0XHRpc0FjdGl2ZTogYWxpZ25Db250ZW50ID09PSAnYm90dG9tJyxcblx0XHRcdFx0XHRcdFx0b25DbGljazogKCkgPT4gc2V0QXR0cmlidXRlcyh7YWxpZ25Db250ZW50OiAnYm90dG9tJ30pLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdfT5cblx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BnZWNrby1ncmlkLWxheW91dC1lZGl0b3Itc3R5bGVzYH0gc3R5bGU9e3N0eWxlc30+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0ge1xuXHRcdFx0XHRcdGB3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX3dyYXAgZ2Vja28tZ3JpZC1sYXlvdXQtYmFzaWMgJHthdHRyaWJ1dGVzLmNsYXNzTmFtZX0gYWxpZ24tY29udGVudC0ke2F0dHJpYnV0ZXMuYWxpZ25Db250ZW50fWBcblx0XHRcdFx0fSA+XG5cdFx0XHRcdFx0eyB0eXBlb2YgaW5zZXJ0QmxvY2tzQWZ0ZXIgPT09ICdmdW5jdGlvbicgLy9UaGlzIGxpbmUgbWFrZXMgc3VyZSBzdHlsZXMgZG8gbm90IGJyZWFrXG5cdFx0XHRcdFx0XHQ/IDxJbm5lckJsb2NrcyB0ZW1wbGF0ZUxvY2s9eyBmYWxzZSB9Lz5cblx0XHRcdFx0XHRcdDogPHA+TG9yZW0gSXBzdW08L3A+IC8vIFRoaXMgaXMgd2hhdCBzaG93cyBhcyB0aGUgcHJldmlldyBjb250ZW50LlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZSgpIHtcblx0XHQvLyBIb25lc3RseSBJIGRvbid0IHdhbnQgdG8gZG8gdGhpcyBidXQgY29udmVudGlvbnMgYXJlIGNvbnZlbnRpb25zLlxuXHRcdHJldHVybig8ZGl2PjxJbm5lckJsb2Nrcy5Db250ZW50IC8+PC9kaXY+KTsgXG5cdH0sXG59O1xuIiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwibG9kYXNoL2RlYm91bmNlXCI7XG5pbXBvcnQge1xuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0UGF0aCxcblx0U1ZHLFxuXHRJY29uQnV0dG9uLFxuXHRUb29sYmFyLFxuXHRSZXNpemFibGVCb3gsXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVCbG9jayB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRJbm5lckJsb2Nrcyxcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdEJsb2NrQ29udHJvbHMsXG59IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcbmltcG9ydCB7XG5cdHNlbGVjdFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFsnY29yZS9wYXJhZ3JhcGgnLCAnY29yZS9oZWFkaW5nJywgJ2NvcmUvYnV0dG9uJywgJ2NvcmUvbGlzdCcsICdjb3JlL3F1b3RlJ107XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2dlY2tvL2dyaWQtbGF5b3V0LWltYWdlJztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdJbWFnZScgKSxcblxuXHRwYXJlbnQ6IFsnZ2Vja28vZ3JpZC1sYXlvdXQnXSxcblxuXHRpY29uOiA8U1ZHIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PFBhdGggZD1cIk0wLDBoMjR2MjRIMFYwelwiIGZpbGw9XCJub25lXCIgLz48UGF0aCBkPVwibTE5IDV2MTRoLTE0di0xNGgxNG0wLTJoLTE0Yy0xLjEgMC0yIDAuOS0yIDJ2MTRjMCAxLjEgMC45IDIgMiAyaDE0YzEuMSAwIDItMC45IDItMnYtMTRjMC0xLjEtMC45LTItMi0yelwiIC8+PFBhdGggZD1cIm0xNC4xNCAxMS44NmwtMyAzLjg3LTIuMTQtMi41OS0zIDMuODZoMTJsLTMuODYtNS4xNHpcIiAvPjwvU1ZHPixcblxuXHRkZXNjcmlwdGlvbjogX18oICdBbiBpbWFnZSBHcmlkIEJsb2NrLicgKSxcblxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0c3VwcG9ydHM6IHtcblx0XHRjbGFzc05hbWU6IHRydWUsXG5cdFx0aW5zZXJ0ZXI6IHRydWUsXG5cdFx0cmV1c2FibGU6IGZhbHNlLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdHN0eWxlczogW1xuXHRcdHsgbmFtZTogJ2RlZmF1bHQnLCBsYWJlbDogX18oICdEZWZhdWx0JyksIGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHRcdHsgbmFtZTogJ2hvdmVyJywgbGFiZWw6IF9fKCAnSG92ZXInKSB9LFxuXHRcdHsgbmFtZTogJ25vLWNhcHRpb24nLCBsYWJlbDogX18oICdObyBDYXB0aW9uJykgfSxcblx0XSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aDogeyB0eXBlOiAnbnVtYmVyJywgZGVmYXVsdDogMX0sXG5cdFx0dzogeyB0eXBlOiAnbnVtYmVyJywgZGVmYXVsdDogMX0sXG5cdFx0bWluSGVpZ2h0OiB7IHR5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAyMDAsfSxcblx0XHRpbWdJZDogeyB0eXBlOiAnbnVtYmVyJ30sXG5cdFx0aW1nVXJsOiB7IHR5cGU6ICdzdHJpbmcnfSxcblx0fSxcblxuXHR0cmFuc2Zvcm1zOiB7XG5cdFx0ZnJvbTogW1xuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0XHRibG9ja3M6IFsnZ2Vja28vZ3JpZC1sYXlvdXQtYmFzaWMnLCAnZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbSddLFxuXHRcdFx0XHR0cmFuc2Zvcm06IChhdHRyaWJ1dGVzLCBpbm5lckJsb2NrcykgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldFNlbGVjdGVkQmxvY2soKTsgLy8gYmVjYXVzZSBpbm5lckJsb2NrcyBkb2VzIG5vdCB3b3JrLlxuXHRcdFx0XHRcdC8vIEl0IGFwcGVhcnMgdGhhdCBpbm5lckJsb2NrcyB3aWxsIGJlIGFkZGVkIGluIHRoZSBmdXR1cmUuXG5cdFx0XHRcdFx0Y29uc3Qge2gsIHcsIGJnTWVkaWEsIGJnTWVkaWFVcmwsIG1lZGlhSWQsIG1lZGlhVXJsLCBtaW5IZWlnaHR9ID0gYXR0cmlidXRlcztcblx0XHRcdFx0XHRyZXR1cm4gY3JlYXRlQmxvY2soJ2dlY2tvL2dyaWQtbGF5b3V0LWltYWdlJywge1xuXHRcdFx0XHRcdFx0aDogaCxcblx0XHRcdFx0XHRcdHc6IHcsXG5cdFx0XHRcdFx0XHRpbWdJZDogYmdNZWRpYSB8fCBtZWRpYUlkLFxuXHRcdFx0XHRcdFx0aW1nVXJsOiBiZ01lZGlhVXJsIHx8IG1lZGlhVXJsLFxuXHRcdFx0XHRcdFx0bWluSGVpZ2h0OiBtaW5IZWlnaHQsXG5cdFx0XHRcdFx0fSwgc2VsZWN0ZWQuaW5uZXJCbG9ja3MpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcdFxuXHRcdF1cblx0fSxcblxuXHRkZXByZWNhdGVkOiBbe1xuXHRcdG1pZ3JhdGUoKSB7fSxcblx0XHRzYXZlKCkge1xuXHRcdFx0cmV0dXJuKDxJbm5lckJsb2Nrcy5Db250ZW50IC8+KTtcblx0XHR9LFxuXHR9XSxcblxuXHRlZGl0KHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgY2xhc3NOYW1lLCBpbnNlcnRCbG9ja3NBZnRlciwgdG9nZ2xlU2VsZWN0aW9uIH0pIHtcblx0XHRjb25zdCB7XG5cdFx0XHRoLFxuXHRcdFx0dyxcblx0XHRcdGltZ0lkLFxuXHRcdFx0aW1nVXJsLFxuXHRcdFx0bWluSGVpZ2h0LFxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdGdyaWRDb2x1bW5FbmQ6ICdzcGFuICcrIHcsXG5cdFx0XHRncmlkUm93RW5kOiAnc3BhbiAnICsgaCxcblx0XHRcdG1pbkhlaWdodDogbWluSGVpZ2h0ICsgJ3B4Jyxcblx0XHR9O1xuXHRcdGNvbnN0IG9uUmVzaXppbmcgPSAoZXZlbnQsIGRpcmVjdGlvbiwgZWx0LCBkZWx0YSkgPT4ge1xuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gJ2JvdHRvbScpe1xuXHRcdFx0XHRjb25zdCBuZXdNaW5IZWlnaHQgPSAoZWx0LmNsaWVudEhlaWdodCA+IDYwMCkgPyA2MDAgOiBlbHQuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgbWluSGVpZ2h0OiBuZXdNaW5IZWlnaHQgfSk7XG5cdFx0XHRcdGVsdC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcblx0XHRcdH07XG5cdFx0XHRpZiAoZGlyZWN0aW9uICE9PSAncmlnaHQnKSByZXR1cm47XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlbHQpO1xuXHRcdFx0Y29uc3QgY29sdW1uV2lkdGggPSBNYXRoLmZsb29yKGVsdC5wYXJlbnROb2RlLm9mZnNldFdpZHRoIC8gdyk7XG5cdFx0XHRjb25zdCBjdXJyZW50U3BhbiA9IE1hdGguZmxvb3IoZWx0LnBhcmVudE5vZGUub2Zmc2V0V2lkdGggLyBjb2x1bW5XaWR0aCk7XG5cdFx0XHRjb25zdCBlbENvbFdpZHRoID0gTWF0aC5mbG9vcihlbHQuY2xpZW50V2lkdGggLyB3KTtcblx0XHRcdGNvbnN0IHNwYW5zID0gTWF0aC5mbG9vcihlbHQuY2xpZW50V2lkdGggLyBjb2x1bW5XaWR0aCk7XG5cdFx0XHRjb25zdCB0b1VwZGF0ZSA9IE1hdGguZmxvb3IocGFyc2VJbnQoZGVsdGEud2lkdGgsIDEwKSAvIGNvbHVtbldpZHRoKTtcblx0XHRcdGNvbnN0IG9yaWdpbmFsID0gdyAtIHRvVXBkYXRlO1xuXHRcdFx0bGV0IG5ld1dpZHRoID0gc3BhbnM7XG5cdFx0XHRpZiAobmV3V2lkdGggPiAxMikge25ld1dpZHRoID0gMTJ9XG5cdFx0XHRpZiAobmV3V2lkdGggPCAxKSB7bmV3V2lkdGggPSAxfVxuXHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHR3OiBuZXdXaWR0aCxcblx0XHRcdH0gKTtcblx0XHRcdGVsdC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXHRcdFx0Ly8gfVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIkdyaWQgSXRlbVwiPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWluaW11bSBIZWlnaHQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IG1pbkhlaWdodCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdG1pbkhlaWdodDogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW4gPSBcIjUwXCJcblx0XHRcdFx0XHRcdFx0bWF4ID0gXCI2MDBcIlxuXHRcdFx0XHRcdFx0XHRzdGVwID0gXCIxXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdXaWR0aCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgdyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdHc6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDEyIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTcGFuIFJvd3MnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGggfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRoOiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyAxMiB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRvblNlbGVjdD17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0aW1nSWQ6IHZhbHVlLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nVXJsOiB2YWx1ZS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHR5cGU9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyhpbWdJZCk/IGltZ0lkOiBudWxsIH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsoe29wZW59KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy1pY29uLWJ1dHRvbiBjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBpbWFnZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29wZW59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHQ8LyBCbG9ja0NvbnRyb2xzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvci1zdHlsZXNgfSBzdHlsZT17c3R5bGVzfT48L2Rpdj5cblx0XHRcdFx0PFJlc2l6YWJsZUJveFxuXHRcdFx0XHRcdFx0c2l6ZSA9IHt7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAnJyxcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Ly8gbWluSGVpZ2h0ID0gXCI1MFwiXG5cdFx0XHRcdFx0XHQvLyBtaW5XaWR0aCA9IFwiMTAwJVwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWUgPSB7XG5cdFx0XHRcdFx0XHRcdGB3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX3dyYXAgZ2Vja28tZ3JpZC1sYXlvdXQtaW1hZ2UgJHthdHRyaWJ1dGVzLmNsYXNzTmFtZX1gXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBtaW5IZWlnaHQ9eyBtaW5IZWlnaHQgfVxuXHRcdFx0XHRcdFx0Ly8gbWF4SGVpZ2h0PXs2MDB9XG5cdFx0XHRcdFx0XHQvLyBsb2NrQXNwZWN0UmF0aW9cblx0XHRcdFx0XHRcdGVuYWJsZT17IHtcblx0XHRcdFx0XHRcdFx0dG9wOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0bGVmdDogZmFsc2UsXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9uUmVzaXplU3RhcnQ9eyAoZXZlbnQsIGRpcmVjdGlvbiwgZWx0LCBkZWx0YSkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0b2dnbGVTZWxlY3Rpb24oIGZhbHNlICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9uUmVzaXplPXsgXHRkZWJvdW5jZShvblJlc2l6aW5nLCAyNTApIH1cblx0XHRcdFx0XHRcdG9uUmVzaXplU3RvcD17ICggZXZlbnQsIGRpcmVjdGlvbiwgZWx0LCBkZWx0YSApID0+IHtcblx0XHRcdFx0XHRcdFx0ZWx0LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cdFx0XHRcdFx0XHRcdGlmIChkaXJlY3Rpb24gIT09ICdib3R0b20nKSByZXR1cm47XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG5ld01pbkhlaWdodCA9IChlbHQuY2xpZW50SGVpZ2h0ID4gNjAwKT8gNjAwIDogZWx0LmNsaWVudEhlaWdodDtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdG1pbkhlaWdodDogbmV3TWluSGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdHRvZ2dsZVNlbGVjdGlvbiggdHJ1ZSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCFpbWdJZCAmJlxuXHRcdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZ0lkOiB2YWx1ZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nVXJsOiB2YWx1ZS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpbWdVcmwgJiZcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZ2Vja28tZ3JpZC1sYXlvdXQtaW1hZ2VfX2ltYWdlXCIgc3JjPXtpbWdVcmx9IC8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGltZ0lkICYmXG5cdFx0XHRcdFx0XHQ8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJnZWNrby1ncmlkLWxheW91dC1pbWFnZV9fY2FwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHR7IHR5cGVvZiBpbnNlcnRCbG9ja3NBZnRlciA9PT0gJ2Z1bmN0aW9uJyAvL1RoaXMgbGluZSBtYWtlcyBzdXJlIHN0eWxlcyBkbyBub3QgYnJlYWtcblx0XHRcdFx0XHRcdFx0XHQ/IDxJbm5lckJsb2NrcyB0ZW1wbGF0ZUxvY2s9eyBmYWxzZSB9IGFsbG93ZWRCbG9ja3M9e0FMTE9XRURfQkxPQ0tTfS8+XG5cdFx0XHRcdFx0XHRcdFx0OiA8cD5Mb3JlbSBJcHN1bTwvcD4gLy8gVGhpcyBpcyB3aGF0IHNob3dzIGFzIHRoZSBwcmV2aWV3IGNvbnRlbnQuXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvUmVzaXphYmxlQm94PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9LFxuXG5cdHNhdmUoKSB7XG5cdFx0Ly8gSG9uZXN0bHkgSSBkb24ndCB3YW50IHRvIGRvIHRoaXMgYnV0IGNvbnZlbnRpb25zIGFyZSBjb252ZW50aW9ucy5cblx0XHRyZXR1cm4oPGRpdj48SW5uZXJCbG9ja3MuQ29udGVudCAvPjwvZGl2Pik7IFxuXHR9LFxufTtcbiIsImltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMic7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge1xuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0UGF0aCxcblx0U1ZHLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHtjcmVhdGVCbG9ja30gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0Q29sb3JQYWxldHRlLFxuXHRnZXRDb2xvck9iamVjdEJ5Q29sb3JWYWx1ZSxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InO1xuaW1wb3J0IHtcblx0c2VsZWN0XG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgZGVwcmVjYXRlZCBmcm9tICdAd29yZHByZXNzL2RlcHJlY2F0ZWQnO1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdnZWNrby9ncmlkLWxheW91dC1pdGVtJztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oJ0l0ZW0gKGRlcHJlY2F0ZWQpJyksXG5cblx0cGFyZW50OiBbJ2dlY2tvL2dyaWQtbGF5b3V0J10sXG5cblx0aWNvbjogPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+PFBhdGggZD1cIk0xMS45OSAxOC41NGwtNy4zNy01LjczTDMgMTQuMDdsOSA3IDktNy0xLjYzLTEuMjd6TTEyIDE2bDcuMzYtNS43M0wyMSA5bC05LTctOSA3IDEuNjMgMS4yN0wxMiAxNnptMC0xMS40N0wxNy43NCA5IDEyIDEzLjQ3IDYuMjYgOSAxMiA0LjUzelwiIC8+PC9TVkc+LFxuXG5cdGRlc2NyaXB0aW9uOiBfXygnVGhpcyBibG9jayBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGJhc2ljIG9yIGltYWdlIGJsb2NrIGluc3RlYWQuJyksXG5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0aW5zZXJ0ZXI6IGZhbHNlLFxuXHR9LFxuXG5cdHN0eWxlczogW1xuXHRcdHsgbmFtZTogJ2RlZmF1bHQnLCBsYWJlbDogX18oICdEZWZhdWx0JyksIGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHRcdHsgbmFtZTogJ2hvdmVyJywgbGFiZWw6IF9fKCAnSG92ZXInKSB9LFxuXHRdLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0eXBlOnsgdHlwZTogJ3N0cmluZycsZGVmYXVsdDogdW5kZWZpbmVkLCB9LCAvL3NvbGlkLCBpbWFnZSwgaW1hZ2UtY29udGVudFxuXHRcdGg6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDEsfSxcblx0XHR3OiB7IHR5cGU6ICdudW1iZXInfSxcblx0XHRtaW5IZWlnaHQ6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDIwMCx9LFxuXHRcdG9wYWNpdHk6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDF9LFxuXHRcdGJnTWVkaWE6IHsgdHlwZTogJ251bWJlcid9LFxuXHRcdGJnTWVkaWFVcmw6IHsgdHlwZTogJ3N0cmluZyd9LFxuXHRcdGJnQ29sb3I6IHsgdHlwZTogJ3N0cmluZyd9LFxuXHRcdGJnQ29sb3JTbHVnOiB7IHR5cGU6ICdzdHJpbmcnfSxcblx0XHRiZ0NvbG9yQnJpZ2h0bmVzczoge3R5cGU6ICdudW1iZXInfSwvL2xpZ2h0IG9yIGRhcmtcblx0fSxcblxuXHRkZXByZWNhdGVkOiBbXG5cdFx0e1xuXHRcdFx0bWlncmF0ZShhdHRyaWJ1dGVzLCBpbm5lckJsb2Nrcykge1xuXHRcdFx0XHQvLyBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRTZWxlY3RlZEJsb2NrKCk7IC8vIGJlY2F1c2UgaW5uZXJCbG9ja3MgZG9lcyBub3Qgd29yay5cblx0XHRcdFx0Ly8gSXQgYXBwZWFycyB0aGF0IGlubmVyQmxvY2tzIHdpbGwgYmUgYWRkZWQgaW4gdGhlIGZ1dHVyZS5cblx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0dyxcblx0XHRcdFx0XHRiZ01lZGlhLFxuXHRcdFx0XHRcdGJnTWVkaWFVcmwsXG5cdFx0XHRcdFx0bWluSGVpZ2h0XG5cdFx0XHRcdH0gPSBhdHRyaWJ1dGVzO1xuXHRcdFx0XHRpZiAoYmdNZWRpYSkge1xuXHRcdFx0XHRcdHJldHVybiBjcmVhdGVCbG9jaygnZ2Vja28vZ3JpZC1sYXlvdXQtaW1hZ2UnLCB7XG5cdFx0XHRcdFx0XHRoOiBoLFxuXHRcdFx0XHRcdFx0dzogdyxcblx0XHRcdFx0XHRcdGltZ0lkOiBiZ01lZGlhLFxuXHRcdFx0XHRcdFx0aW1nVXJsOiBiZ01lZGlhVXJsLFxuXHRcdFx0XHRcdFx0bWluSGVpZ2h0OiBtaW5IZWlnaHQsXG5cdFx0XHRcdFx0fSwgaW5uZXJCbG9ja3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjcmVhdGVCbG9jaygnZ2Vja28vZ3JpZC1sYXlvdXQtYmFzaWMnLCB7XG5cdFx0XHRcdFx0aDogaCxcblx0XHRcdFx0XHR3OiB3LFxuXHRcdFx0XHR9LCBpbm5lckJsb2Nrcyk7XG5cdFx0XHR9LFxuXHRcdFx0c2F2ZSgpIHtcblx0XHRcdFx0cmV0dXJuKDxJbm5lckJsb2Nrcy5Db250ZW50IC8+KTtcblx0XHRcdH0sXG5cdFx0fVxuXHRdLFxuXG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGluc2VydEJsb2Nrc0FmdGVyIH0pIHtcblx0XHRjb25zdCB7XG5cdFx0XHRvcGFjaXR5LFxuXHRcdFx0aCxcblx0XHRcdHcsXG5cdFx0XHR0eXBlLFxuXHRcdFx0cGFkZGluZyxcblx0XHRcdGJnTWVkaWEsXG5cdFx0XHRiZ01lZGlhVXJsLFxuXHRcdFx0YmdDb2xvcixcblx0XHRcdGJnQ29sb3JCcmlnaHRuZXNzLFxuXHRcdFx0YmdDb2xvclNsdWcsXG5cdFx0XHRtaW5IZWlnaHQsXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0ZGVwcmVjYXRlZCgnR3JpZCBMYXlvdXQgSWRlbScsIHtcblx0XHRcdGFsdGVybmF0aXZlOiAnQmFzaWMgb3IgSW1hZ2UnLFxuXHRcdFx0cGx1Z2luOiAnR2Vja28gR3JpZCBMYXlvdXQnLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdCctLWJhY2tncm91bmQnOiBiZ0NvbG9yLFxuXHRcdFx0Jy0tb3BhY2l0eSc6IG9wYWNpdHksXG5cdFx0XHRncmlkQ29sdW1uRW5kOiAnc3BhbiAnKyB3LFxuXHRcdFx0Z3JpZFJvd0VuZDogJ3NwYW4gJyArIGgsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IsXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGJnTWVkaWFVcmwgKyAnKScsXG5cdFx0XHRtaW5IZWlnaHQ6IG1pbkhlaWdodCArICdweCcsXG5cdFx0fTtcblx0XHRsZXQgbGlnaHRPckRhcmsgPSAnbGlnaHQnO1xuXHRcdGlmIChiZ0NvbG9yQnJpZ2h0bmVzcyA8IDEzMCkgbGlnaHRPckRhcmsgPSAnZGFyayc7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgIHRpdGxlPVwiU2V0dGluZ3NcIj5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1dpZHRoJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0dzogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMTIgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1NwYW4gUm93cycgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgaCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdGg6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDEyIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIlN0eWxlXCI+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW5pbXVtIEhlaWdodCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgbWluSGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWluSGVpZ2h0OiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbiA9IFwiNTBcIlxuXHRcdFx0XHRcdFx0XHRtYXggPSBcIjYwMFwiXG5cdFx0XHRcdFx0XHRcdHN0ZXAgPSBcIjFcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHsgdHlwZSAhPT0gXCJzb2xpZFwiICYmXG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZ01lZGlhOiB2YWx1ZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmdNZWRpYVVybDogdmFsdWUudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPXtbJ2ltYWdlJywgJ3ZpZGVvJ119XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyhiZ01lZGlhKT8gYmdNZWRpYTogbnVsbCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsoe29wZW59KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2JnTWVkaWFVcmwgJiYgPGltZyBzcmM9e2JnTWVkaWFVcmx9IG9uQ2xpY2s9e29wZW59IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cImF1dG9cIiBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fS8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshYmdNZWRpYVVybCAmJiA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbiBidXR0b24tbGFyZ2UnfSBvbkNsaWNrPXtvcGVufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdENob29zZSBCYWNrZ3JvdW5kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxDb2xvclBhbGV0dGVcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdCYWNrZ3JvdW5kIENvbG9yJ1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyhiZ0NvbG9yKSA/IGJnQ29sb3IuY29sb3IgOiB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0RWRpdG9yU2V0dGluZ3MoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjb2xvclNsdWcgPSAodmFsdWUpID8gZ2V0Q29sb3JPYmplY3RCeUNvbG9yVmFsdWUoc2V0dGluZ3MuY29sb3JzLCB2YWx1ZSkuc2x1ZyA6IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtiZ0NvbG9yU2x1ZzogY29sb3JTbHVnfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgYnJpZ2h0bmVzcyA9ICh2YWx1ZSkgPyB0aW55Y29sb3IodmFsdWUpLmdldEJyaWdodG5lc3MoKTogdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2JnQ29sb3JCcmlnaHRuZXNzOiBicmlnaHRuZXNzfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7YmdDb2xvcjogdmFsdWV9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvci1zdHlsZXNgfSBzdHlsZT17c3R5bGVzfT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2B3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX3dyYXAke3R5cGV9ICR7YXR0cmlidXRlcy5jbGFzc05hbWV9IGhhcy0ke2JnQ29sb3JTbHVnfS1iYWNrZ3JvdW5kLWNvbG9yIGlzLSR7bGlnaHRPckRhcmt9LWJhY2tncm91bmRgfT5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQodHlwZSA9PT0gJ2ltYWdlJyB8fCB0eXBlID09PSAnaW1hZ2UtY29udGVudCcpICYmXG5cdFx0XHRcdFx0XHQhYmdNZWRpYSAmJlxuXHRcdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJnTWVkaWE6IHZhbHVlLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZ01lZGlhVXJsOiB2YWx1ZS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0KHR5cGVvZiBpbnNlcnRCbG9ja3NBZnRlciA9PT0gJ2Z1bmN0aW9uJykgJiYgLy9UaGlzIGxpbmUgbWFrZXMgc3VyZSBzdHlsZXMgZG8gbm90IGJyZWFrXG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3MgdGVtcGxhdGVMb2NrPXsgZmFsc2UgfSAvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fSxcblxuXHRzYXZlKCkge1xuXHRcdC8vIEhvbmVzdGx5IEkgZG9uJ3Qgd2FudCB0byBkbyB0aGlzIGJ1dCBjb252ZW50aW9ucyBhcmUgY29udmVudGlvbnMuXG5cdFx0cmV0dXJuKDxkaXY+PElubmVyQmxvY2tzLkNvbnRlbnQgLz48L2Rpdj4pO1xuXHR9LFxufTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBHLCBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgSW5uZXJCbG9ja3MgfSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHtjcmVhdGVCbG9ja30gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IFRlbXBsYXRlUGlja2VyIGZyb20gJy4vdGVtcGxhdGUtc2VsZWN0JztcblxuLyoqXG4gKiBBbGxvd2VkIGJsb2NrcyBjb25zdGFudCBpcyBwYXNzZWQgdG8gSW5uZXJCbG9ja3MgcHJlY2lzZWx5IGFzIHNwZWNpZmllZCBoZXJlLlxuICogVGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSBzaG91bGQgbmV2ZXIgY2hhbmdlLlxuICogVGhlIGFycmF5IHNob3VsZCBjb250YWluIHRoZSBuYW1lIG9mIGVhY2ggYmxvY2sgdGhhdCBpcyBhbGxvd2VkLlxuICpcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ1tdfVxuKi9cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gWydnZWNrby9ncmlkLWxheW91dC1pdGVtJywgJ2dlY2tvL2dyaWQtbGF5b3V0LWltYWdlJywgJ2dlY2tvL2dyaWQtbGF5b3V0LWJhc2ljJ107XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2dlY2tvL2dyaWQtbGF5b3V0JztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdHcmlkJyApLFxuXG5cdGljb246IDxTVkcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPjxHPjxQYXRoIGQ9XCJNNCwxMyBMOCwxMyBMOCwxMCBMNCwxMCBMNCwxMyBaIE00LDE1IEw0LDE4IEw4LDE4IEw4LDE1IEw0LDE1IFogTTEwLDEzIEwxNCwxMyBMMTQsMTAgTDEwLDEwIEwxMCwxMyBaIE0xMCwxNSBMMTAsMTggTDE0LDE4IEwxNCwxNSBMMTAsMTUgWiBNMjAsMTMgTDIwLDEwIEwxNiwxMCBMMTYsMTMgTDIwLDEzIFogTTIwLDE1IEwxNiwxNSBMMTYsMTggTDIwLDE4IEwyMCwxNSBaIE00LDggTDgsOCBMOCw1IEw0LDUgTDQsOCBaIE0xMCw4IEwxNCw4IEwxNCw1IEwxMCw1IEwxMCw4IFogTTIwLDggTDIwLDUgTDE2LDUgTDE2LDggTDIwLDggWiBNNCwzIEwyMCwzIEMyMS4xMDQ1Njk1LDMgMjIsMy45NTEzOTQ5MSAyMiw1LjEyNSBMMjIsMTcuODc1IEMyMiwxOS4wNDg2MDUxIDIxLjEwNDU2OTUsMjAgMjAsMjAgTDQsMjAgQzIuODk1NDMwNSwyMCAyLDE5LjA0ODYwNTEgMiwxNy44NzUgTDIsNS4xMjUgQzIsMy45NTEzOTQ5MSAyLjg5NTQzMDUsMyA0LDMgWlwiIC8+PC9HPjwvU1ZHPixcblxuXHRjYXRlZ29yeTogJ2xheW91dCcsXG5cblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIENTUyBHcmlkIHRvIGJ1aWxkIGxheW91dHMgYW5kLCB0aGVuIGFkZCB3aGF0ZXZlciBjb250ZW50IGJsb2NrcyB5b3XigJlkIGxpa2UuJyApLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0YWxpZ246IFsgJ3dpZGUnLCAnZnVsbCcgXSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRkZXByZWNhdGVkOiBbXG5cdFx0e1xuXHRcdFx0bWlncmF0ZSgpIHt9LFxuXHRcdFx0c2F2ZSgpIHtcblx0XHRcdFx0cmV0dXJuIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+O1xuXHRcdFx0fSxcblx0XHR9XG5cdF0sXG5cblx0dHJhbnNmb3Jtczoge1xuXHRcdGZyb206IFt7XG5cdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0YmxvY2tzOiBbJ2NvcmUvY29sdW1ucyddLFxuXHRcdFx0dHJhbnNmb3JtOiAoYXR0cmlidXRlcykgPT4ge1xuXHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9IHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRTZWxlY3RlZEJsb2NrKCk7IC8vIGJlY2F1c2UgaW5uZXJCbG9ja3MgZG9lcyBub3Qgd29yay5cblx0XHRcdFx0Y29uc3QgY29sdW1ucyA9IHNlbGVjdGVkLmlubmVyQmxvY2tzO1xuXHRcdFx0XHRjb25zdCBjb3VudCA9IGNvbHVtbnMubGVuZ3RoO1xuXHRcdFx0XHRjb25zdCB3ID0gTWF0aC5mbG9vcigxMi9jb3VudCk7XG5cdFx0XHRcdGNvbnN0IGlubmVyQmxvY2tzID0gW107XG5cdFx0XHRcdGNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcblx0XHRcdFx0XHRjb25zdCBibG9jayA9IGNyZWF0ZUJsb2NrKCdnZWNrby9ncmlkLWxheW91dC1iYXNpYycsIHt3Ond9LCBjb2x1bW4uaW5uZXJCbG9ja3MpO1xuXHRcdFx0XHRcdGlubmVyQmxvY2tzLnB1c2goYmxvY2spXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gY3JlYXRlQmxvY2soJ2dlY2tvL2dyaWQtbGF5b3V0Jywge30sIGlubmVyQmxvY2tzKTtcblx0XHRcdH0sXG5cdFx0fSwgXVxuXHR9LFxuXG5cdHN0eWxlczogW1xuXHRcdHsgbmFtZTogJ2RlZmF1bHQnLCBsYWJlbDogX18oICdEZWZhdWx0JyksIGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHRcdHsgbmFtZTogJ25vLWdhcCcsIGxhYmVsOiBfXyggJ05vIEdhcCcpIH0sXG5cdF0sXG5cblx0ZWRpdCggeyBpbnNlcnRCbG9ja3NBZnRlciwgY2xpZW50SWQgfSApIHtcblx0XHQvLyBHZXQgdGhlIGJsb2NrIHNvIHdlIGNhbiBzZWUgaWYgaXQgaGFkIGlubmVyYmxvY2tzXG5cdFx0Y29uc3QgYmxvY2sgPSBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0QmxvY2tzQnlDbGllbnRJZChjbGllbnRJZClbMF07XG5cdFx0Y29uc3QgaGFzSW5uZXJCbG9ja3MgPSAoYmxvY2sgJiYgYmxvY2suaW5uZXJCbG9ja3MpID8gYmxvY2suaW5uZXJCbG9ja3MubGVuZ3RoID4gMCA6IGZhbHNlO1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZW9mIGluc2VydEJsb2Nrc0FmdGVyID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0XHRcdDxUZW1wbGF0ZVBpY2tlciBoYXNJbm5uZXJCbG9ja3M9e2hhc0lubmVyQmxvY2tzfSBhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfT48L1RlbXBsYXRlUGlja2VyPiA6XG5cdFx0XHRcdFx0XHQ8cD57X18oJ1ByZXZpZXcgTm90IEF2YWlsYWJsZScpfTwvcD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9LFxuXG5cdHNhdmUoKSB7XG5cdFx0Ly8gSG9uZXN0bHkgSSBkb24ndCB3YW50IHRvIGRvIHRoaXMgYnV0IGNvbnZlbnRpb25zIGFyZSBjb252ZW50aW9ucy5cblx0XHRyZXR1cm4oPGRpdj48SW5uZXJCbG9ja3MuQ29udGVudCAvPjwvZGl2Pik7IFxuXHR9LFxufTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge3JlZ2lzdGVyQmxvY2tUeXBlfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCAqIGFzIGdyaWQgZnJvbSAnLi9ncmlkLWxheW91dCc7XG5pbXBvcnQgKiBhcyBncmlkSXRlbSBmcm9tICcuL2dyaWQtbGF5b3V0LWl0ZW0nO1xuaW1wb3J0ICogYXMgZ3JpZEl0ZW1JbWFnZSBmcm9tICcuL2dyaWQtbGF5b3V0LWltYWdlJztcbmltcG9ydCAqIGFzIGdyaWRJdGVtQmFzaWMgZnJvbSAnLi9ncmlkLWxheW91dC1iYXNpYyc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKGdyaWQubmFtZSwgZ3JpZC5zZXR0aW5ncyk7XG5yZWdpc3RlckJsb2NrVHlwZShncmlkSXRlbUJhc2ljLm5hbWUsIGdyaWRJdGVtQmFzaWMuc2V0dGluZ3MpO1xucmVnaXN0ZXJCbG9ja1R5cGUoZ3JpZEl0ZW1JbWFnZS5uYW1lLCBncmlkSXRlbUltYWdlLnNldHRpbmdzKTtcbnJlZ2lzdGVyQmxvY2tUeXBlKGdyaWRJdGVtLm5hbWUsIGdyaWRJdGVtLnNldHRpbmdzKTtcblxuLyoqXG4gKiBUaGlzIG1ha2Ugc3VyZSB0aGUgZ3JpZCB3b3JrcyBpbiB0aGUgZWRpdG9yLlxuICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cdC8vIENyZWF0ZSB0aGUgb2JzZXJ2ZXJcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG5cdFx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG5cdFx0XHQvLyBPbiBzdHlsZSBtdXRhdGlvbiB1cGRhdGUgYmxvY2tzIHN0eWxlcy5cblx0XHRcdGNvbnN0IGJsb2NrID0gbXV0YXRpb24udGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXR5cGVePVwiZ2Vja28vZ3JpZC1sYXlvdXQtXCJdJyk7XG5cdFx0XHRpZighYmxvY2spIHJldHVybjtcblx0XHRcdGNvbnN0IHN0eWxlcyA9IG11dGF0aW9uLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cdFx0XHRibG9jay5zdHlsZSA9IHN0eWxlcztcblx0XHR9KTtcblx0fSk7XG5cblx0Ly8gQWRkIHN0eWxlIGVsZW1lbnRzIHRvIHRoZSBvYnNlcnZlclxuXHRjb25zdCBhZGRTdHlsZUVsZW1lbnRzVG9PYnNlcnZlciA9ICgpID0+IHtcblx0XHRjb25zdCBzdHlsZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvci1zdHlsZXMnKTtcblx0XHRpZiAoIXN0eWxlRWxlbWVudHMubGVuZ3RoID4gMCkgcmV0dXJuO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBzdHlsZUVsZW1lbnRzKSB7XG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcblx0XHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdFx0YXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJ11cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIEFkZCB0aGUgc3R5bGVzIHRvIGdyaWQgbGF5b3V0IGl0ZW1zIGZvciBlZGl0b3IuXG5cdGZ1bmN0aW9uIGFwcGx5QWxsR3JpZEl0ZW1TdHlsZXMoKSB7XG5cdFx0Y29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZV49XCJnZWNrby9ncmlkLWxheW91dC1cIl0nKTtcblx0XHRpZighYmxvY2tzLmxlbmd0aCA+IDApIHJldHVybjtcblx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2Nrcykge1xuXHRcdFx0YXBwbHlHcmlkSXRlbVN0eWxlKGJsb2NrKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBhcHBseUdyaWRJdGVtU3R5bGUoYmxvY2spe1xuXHRcdC8vIGlmICh0eXBlb2YgYmxvY2sucXVlcnlTZWxlY3RvciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXHRcdGNvbnN0IHN0eWxlcyA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5nZWNrby1ncmlkLWxheW91dC1lZGl0b3Itc3R5bGVzJykuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuXHRcdGJsb2NrLnN0eWxlID0gc3R5bGVzO1xuXHR9XG5cblx0Ly8gQWRkIHRoZSBzdHlsZXMgdG8gZ3JpZCBsYXlvdXQgaXRlbXMgZm9yIGVkaXRvci5cblx0ZnVuY3Rpb24gbmV3R3JpZEluc2VydGVkKGUpIHtcblx0XHRpZiAodHlwZW9mIGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwgIT09ICdmdW5jdGlvbicpIHJldHVybjtcblx0XHRjb25zdCBibG9ja3MgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10eXBlXj1cImdlY2tvL2dyaWQtbGF5b3V0LVwiXScpO1xuXHRcdGlmICghYmxvY2tzLmxlbmd0aCA+IDApIHJldHVybjtcblx0XHQvLyBjb25zb2xlLmxvZygnbm9kZSBhZGRlZCcsIGUpO1xuXHRcdGZvciAoY29uc3QgYmxvY2sgb2YgYmxvY2tzKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnc3R5bGUnLCBibG9jayk7XG5cdFx0XHRhcHBseUdyaWRJdGVtU3R5bGUoYmxvY2spO1xuXHRcdH1cblx0fVxuXHRcblx0Y29uc3QgbmV3QmxvY2tPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcblx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcblx0XHRcdGlmICghbXV0YXRpb24uYWRkZWROb2RlcykgcmV0dXJuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Ly8gZG8gdGhpbmdzIHRvIHlvdXIgbmV3bHkgYWRkZWQgbm9kZXMgaGVyZVxuXHRcdFx0XHR2YXIgbm9kZSA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV1cblx0XHRcdFx0aWYgKHR5cGVvZiBub2RlLm1hdGNoZXMgIT09ICdmdW5jdGlvbicpIHJldHVybjtcblx0XHRcdFx0aWYgKCFub2RlLm1hdGNoZXMoJ1tkYXRhLXR5cGVePVwiZ2Vja28vZ3JpZC1sYXlvdXQtXCJdJykpIHJldHVybjtcblx0XHRcdFx0cmV0dXJuIGFwcGx5R3JpZEl0ZW1TdHlsZShub2RlKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9KVxuXG5cdG5ld0Jsb2NrT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0YXR0cmlidXRlczogZmFsc2UsXG5cdFx0Y2hhcmFjdGVyRGF0YTogZmFsc2Vcblx0fSk7XG5cdFxuXHRhcHBseUFsbEdyaWRJdGVtU3R5bGVzKCk7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Ob2RlSW5zZXJ0ZWRcIiwgbmV3R3JpZEluc2VydGVkKTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVJbnNlcnRlZFwiLCBhZGRTdHlsZUVsZW1lbnRzVG9PYnNlcnZlcik7XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8vIGltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJldmlldyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRjb25zdCB7bGF5b3V0fSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnZWNrby1ncmlkLWxheW91dC10ZW1wbGF0ZS1wcmV2aWV3XCI+XG5cdFx0XHRcdHtsYXlvdXQubWFwKChibG9jayxrZXkpPT57XG5cdFx0XHRcdFx0Y29uc3Qgc3R5bGVzID0ge1xuXHRcdFx0XHRcdFx0Z3JpZENvbHVtbkVuZDogJ3NwYW4gJyArIGJsb2NrWzFdLncsXG5cdFx0XHRcdFx0XHRncmlkUm93RW5kOiAnc3BhbiAnICsgYmxvY2tbMV0uaCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldHVybig8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJnZWNrby1ncmlkLWxheW91dC10ZW1wbGF0ZS1wcmV2aWV3X19pdGVtXCIgc3R5bGU9e3N0eWxlc30+PC9kaXY+KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgSW5uZXJCbG9ja3MgfSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5pbXBvcnQgdGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzJzsgLy8gQ3VzdG9tIFRlbXBsYXRlcyB0byBjaG9vc2UgZnJvbS5cbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vdGVtcGxhdGUtcHJldmlldyc7IC8vIEN1c3RvbSBUZW1wbGF0ZXMgdG8gY2hvb3NlIGZyb20uXG5cbi8vIGltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWQ6IG51bGwsXG5cdFx0fVxuXHR9XG5cdHNldFRlbXBsYXRlID0gKHRlbXBsYXRlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZDogdGVtcGxhdGUsXG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCB7aGFzSW5ubmVyQmxvY2tzLCBhbGxvd2VkQmxvY2tzfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3Qge3NlbGVjdGVkfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3QgYmxhbmtUZW1wbGF0ZSA9IFtbJ2dlY2tvL2dyaWQtbGF5b3V0LWJhc2ljJywge1xuXHRcdFx0XHRcdHc6IDZcblx0XHRcdFx0fV1dO1xuXHRcdGlmICghaGFzSW5ubmVyQmxvY2tzICYmICFzZWxlY3RlZCkge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdlY2tvLWdyaWQtbGF5b3V0LXRlbXBsYXRlLXNlbGVjdFwiPlxuXHRcdFx0XHRcdDxoMj57X18oJ0Nob29zZSBhIFRlbXBsYXRlJyl9PC9oMj5cblx0XHRcdFx0XHQ8cD57X18oJ1RoaXMgaXMgYSBzdGFydGluZyBwb2ludC4gVGVtcGxhdGVzIG1ha2UgaXQgZWFzeSB0byBjaG9vc2UgYSBsYXlvdXQuIEJsb2NrcyBjYW4gYmUgY2hhbmdlZCBvbmNlIHRoZXkgYXJlIHNlbGVjdGVkLicpfTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdlY2tvLWdyaWQtbGF5b3V0LXRlbXBsYXRlLXNlbGVjdF9fdGVtcGxhdGVzXCI+XG5cdFx0XHRcdFx0XHR7dGVtcGxhdGVzKCkubWFwKCh0ZW1wbGF0ZSwga2V5KT0+e1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwiZ2Vja28tZ3JpZC1sYXlvdXQtdGVtcGxhdGUtc2VsZWN0X190ZW1wbGF0ZVwiIG9uQ2xpY2s9eygpPT50aGlzLnNldFRlbXBsYXRlKHRlbXBsYXRlLmxheW91dCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFByZXZpZXcgbGF5b3V0PXt0ZW1wbGF0ZS5sYXlvdXR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD57dGVtcGxhdGUubGFiZWx9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdlY2tvLWdyaWQtbGF5b3V0LXRlbXBsYXRlLXNlbGVjdF9fdGVtcGxhdGVcIiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRUZW1wbGF0ZShibGFua1RlbXBsYXRlKX0+PFByZXZpZXcgbGF5b3V0PXtibGFua1RlbXBsYXRlfSAvPjxwPntfXygnQ3JlYXRlIE5ldycpfTwvcD48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0fVxuXHRcdHJldHVybihcblx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHR0ZW1wbGF0ZT17c2VsZWN0ZWR9XG5cdFx0XHRcdHRlbXBsYXRlTG9jaz17ZmFsc2V9XG5cdFx0XHRcdGFsbG93ZWRCbG9ja3M9e2FsbG93ZWRCbG9ja3N9XG5cdFx0XHQvPlxuXHRcdClcblx0fVxufSIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge2FwcGx5RmlsdGVyc30gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUZW1wbGF0ZXMoKSB7XG5cdGNvbnN0IHRlbXBsYXRlcyA9IFt7XG5cdFx0XHRsYWJlbDogX18oJzIgQ29sdW1ucycpLFxuXHRcdFx0bGF5b3V0OiBbXG5cdFx0XHRcdFsnZ2Vja28vZ3JpZC1sYXlvdXQtYmFzaWMnLCB7XG5cdFx0XHRcdFx0dzogNlxuXHRcdFx0XHR9XSxcblx0XHRcdFx0WydnZWNrby9ncmlkLWxheW91dC1iYXNpYycsIHtcblx0XHRcdFx0XHR3OiA2XG5cdFx0XHRcdH1dLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6IF9fKCczIENvbHVtbnMnKSxcblx0XHRcdGxheW91dDogW1xuXHRcdFx0XHRbJ2dlY2tvL2dyaWQtbGF5b3V0LWJhc2ljJywge1xuXHRcdFx0XHRcdHc6IDRcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFsnZ2Vja28vZ3JpZC1sYXlvdXQtYmFzaWMnLCB7XG5cdFx0XHRcdFx0dzogNFxuXHRcdFx0XHR9XSxcblx0XHRcdFx0WydnZWNrby9ncmlkLWxheW91dC1iYXNpYycsIHtcblx0XHRcdFx0XHR3OiA0XG5cdFx0XHRcdH1dLFxuXHRcdFx0XVxuXHRcdH0sXG5cdF07XG5cdHJldHVybiBhcHBseUZpbHRlcnMoJ2dlY2tvLmdyaWQtbGF5b3V0LnRlbXBsYXRlcycsIHRlbXBsYXRlcyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5ibG9ja3M7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuY29tcG9uZW50czsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5kYXRhOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmRlcHJlY2F0ZWQ7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuZWRpdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuaG9va3M7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuaTE4bjsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyJdLCJzb3VyY2VSb290IjoiIn0=