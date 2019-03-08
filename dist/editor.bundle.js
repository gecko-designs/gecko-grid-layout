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
      default: 1
    },
    w: {
      type: 'number',
      default: 1
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
        w = attributes.w;
    var styles = {
      gridColumnEnd: 'span ' + w,
      gridRowEnd: 'span ' + h
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
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gecko-grid-layout-editor-styles",
      style: styles
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "wp-block-gecko-grid-layout-editor__wrap gecko-grid-layout-basic ".concat(attributes.className)
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
// import debounce from "lodash/debounce";






var ALLOWED_BLOCKS = ['core/paragraph', 'core/heading', 'core/button', 'core/list', 'core/quote'];
var name = 'gecko/grid-layout-image';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Image'),
  parent: ['gecko/grid-layout'],
  icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M0,0h24v24H0V0z",
    fill: "none"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z"
  })),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('An image Grid Block.'),
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
  }, {
    name: 'hover',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hover')
  }, {
    name: 'no-caption',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No Caption')
  }],
  attributes: {
    h: {
      type: 'number',
      default: 1
    },
    w: {
      type: 'number',
      default: 1
    },
    minHeight: {
      type: 'number',
      default: 200
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
        var selected = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["select"])('core/editor').getSelectedBlock(); // because innerBlocks does not work.
        // It appears that innerBlocks will be added in the future.

        var h = attributes.h,
            w = attributes.w,
            bgMedia = attributes.bgMedia,
            bgMediaUrl = attributes.bgMediaUrl,
            mediaId = attributes.mediaId,
            mediaUrl = attributes.mediaUrl,
            minHeight = attributes.minHeight;
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('gecko/grid-layout-image', {
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null);
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
    }; // const onResizing = (event, direction, elt, delta) => {
    // 	if (direction === 'bottom') {
    // 		const newMinHeight = (elt.clientHeight > 600) ? 600 : elt.clientHeight;
    // 		setAttributes({
    // 			minHeight: newMinHeight,
    // 		});
    // 	}
    // 	if (direction !== 'right') return;
    // 	// console.log(elt);
    // 	const columnWidth = Math.floor(elt.parentNode.offsetWidth / w);
    // 	const currentSpan = Math.floor(elt.parentNode.offsetWidth / columnWidth);
    // 	//const elColWidth = Math.floor(elt.offsetWidth / w);
    // 	//const spans = Math.floor(elt.offsetWidth / elColWidth);
    // 	const toUpdate = Math.floor(parseInt(delta.width, 10) / columnWidth);
    // 	const original = w - toUpdate;
    // 	let newWidth = w + toUpdate;
    // 	// let add = true;
    // 	// if (spans < newWidth) {
    // 	// 	add = false;
    // 	// 	newWidth = w - 1;
    // 	// }
    // 	console.log(w, original, toUpdate , newWidth);
    // 	// console.log('', newWidth * elColWidth, newWidth * columnWidth);
    // 	// console.log(Math.floor(parseInt(delta.width, 10) / columnWidth));
    // 	// console.log(newWidth, w, parseInt(delta.width, 10), elt, elt.clientWidth);
    // 	// console.log(delta);
    // 	// const diff = newWidth - currentSpan;
    // 	// if (
    // 	// 	(diff === 1 || diff === -1)
    // 	// 	// (newWidth * elColWidth + columnWidth < newWidth * columnWidth)
    // 	// 	) {
    // 		if (newWidth > 12) {newWidth = 12}
    // 		if (newWidth < 1) {newWidth = 1}
    // 		return setAttributes( {
    // 			w: newWidth,
    // 		} );
    // 	// }
    // }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Grid Item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Minimum Height'),
      value: minHeight,
      onChange: function onChange(next) {
        setAttributes({
          minHeight: next
        });
      },
      min: "50",
      max: "600",
      step: "1"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
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
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["BlockControls"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["MediaUpload"], {
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
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          className: "components-icon-button components-toolbar__control",
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Edit image'),
          onClick: open,
          icon: "edit"
        });
      }
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gecko-grid-layout-editor-styles",
      style: styles
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "wp-block-gecko-grid-layout-editor__wrap gecko-grid-layout-image ".concat(attributes.className)
    }, !imgId && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["MediaPlaceholder"], {
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
    ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"], {
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Lorem Ipsum") // This is what shows as the preview content.
    )));
  },
  save: function save() {
    // Honestly I don't want to do this but conventions are conventions.
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null));
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
      default: undefined
    },
    //solid, image, image-content
    h: {
      type: 'number',
      default: 1
    },
    w: {
      type: 'number'
    },
    minHeight: {
      type: 'number',
      default: 200
    },
    opacity: {
      type: 'number',
      default: 1
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
// document.addEventListener("DOMContentLoaded", function () {
// 	function updateContainer() {
// 		const container = document.querySelector('.gecko-grid-slider');
// 		if (container) {
// 			function listenForAppendedNodes() {
// 				// listen for child blocks being added to layout
// 				const layout = document.querySelector('.editor-block-list__layout');
// 				const observerConfig = {
// 					childList: true,
// 					subtree: true
// 				};
// 				const observer = new MutationObserver((mutationList) => {
// 					for (const mutation of mutationList) {
// 						if (mutation.type === 'childList' && mutation.addedNodes.length) {
// 							const childBlocks = container.querySelectorAll('[data-type="gecko/grid-slider-grid-slide"]');
// 							listenForBlockChanges(childBlocks);
// 						}
// 					}
// 				});
// 				observer.observe(layout, observerConfig);
// 			}
// 			function listenForBlockChanges(blocks) {
// 				for (const block of blocks) {
// 					// console.log('block', block)
// 					const observerConfig = {
// 						attributes: true,
// 						attributeFilter: ['style', 'data-bg']
// 					};
// 					// Find the slide that has the attributes
// 					const slide = block.querySelector('.gecko-grid-slider__slide');
// 					// Initialize block styles
// 					const styles = slide.getAttribute('style');
// 					block.style = styles;
// 					// Listen for slide style changes
// 					const observer = new MutationObserver((mutationList) => {
// 						for (const mutation of mutationList) {
// 							console.log('mutation 2 occured');
// 							if (mutation.attributeName === 'style') {
// 								const styles = mutation.target.getAttribute('style');
// 								block.style = styles;
// 							}
// 						}
// 					});
// 					observer.observe(slide, observerConfig);
// 				}
// 			}
// 			listenForAppendedNodes();
// 			let childBlocks = container.querySelectorAll('[data-type="gecko/grid-slider-grid-slide"]');
// 			listenForBlockChanges(childBlocks);
// 		}
// 	}
// 	updateContainer();
// 	document.addEventListener("DOMNodeInserted", updateContainer)
// });

jQuery(function ($) {
  function listenForStyleChangesGridItem() {
    $('.gecko-grid-layout-editor-styles').each(function () {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          // On change update the styles
          $('[data-type="gecko/grid-layout-basic"]').each(function () {
            var styles = $(this).find(".gecko-grid-layout-editor-styles").attr("style");
            $(this).attr("style", styles);
          });
          $('[data-type="gecko/grid-layout-image"]').each(function () {
            var styles = $(this).find(".gecko-grid-layout-editor-styles").attr("style");
            $(this).attr("style", styles);
          });
          $('[data-type="gecko/grid-layout-item"]').each(function () {
            var styles = $(this).find(".gecko-grid-layout-editor-styles").attr("style");
            $(this).attr("style", styles);
          });
        });
      });
      observer.disconnect();
      observer.observe(this, {
        attributes: true,
        attributeFilter: ['style']
      });
    });
  }

  function listenForStyleChangesGrid() {
    $('.wp-block-gecko-grid-layout-editor').each(function () {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          // On change update the styles
          $('.wp-block-gecko-grid-layout-editor').each(function () {
            var styles = $(this).attr("data-passthru");
            var grid = $(this).attr("data-grid");
            $(this).find(".editor-block-list__layout").attr("style", styles);
          });
        });
      });
      observer.disconnect();
      observer.observe(this, {
        attributes: true,
        attributeFilter: ['data-passthru', 'style']
      });
    });
  }

  function updateStylesGridItem() {
    $('[data-type="gecko/grid-layout-image"]').each(function () {
      var styles = $(this).find(".gecko-grid-layout-editor-styles").attr("style");
      $(this).attr("style", styles);
    });
    $('[data-type="gecko/grid-layout-basic"]').each(function () {
      var styles = $(this).find(".gecko-grid-layout-editor-styles").attr("style");
      $(this).attr("style", styles);
    });
    $('[data-type="gecko/grid-layout-item"]').each(function () {
      var styles = $(this).find(".gecko-grid-layout-editor-styles").attr("style");
      $(this).attr("style", styles);
    });
  }

  function updateStylesGrid() {
    $('.wp-block-gecko-grid-layout-editor').each(function () {
      var styles = $(this).attr("data-passthru");
      var grid = $(this).attr("data-grid");
      $(this).find(".editor-block-list__layout").attr("style", styles);
    });
  }

  $('body').on('DOMNodeInserted', '.wp-block-gecko-grid-layout-editor', function (e) {
    if ($('.wp-block-gecko-grid-layout-editor')) {
      updateStylesGrid();
      updateStylesGridItem();
      listenForStyleChangesGrid();
      listenForStyleChangesGridItem();
    }
  });
  $(window).load(function () {
    updateStylesGrid();
    updateStylesGridItem();
    listenForStyleChangesGrid();
    listenForStyleChangesGridItem();
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55Y29sb3IyL3Rpbnljb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC1sYXlvdXQtYmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQtbGF5b3V0LWltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmlkLWxheW91dC1pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmlkLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlLXByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5ibG9ja3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5kYXRhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmRlcHJlY2F0ZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuZWRpdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmVsZW1lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuaTE4blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsibmFtZSIsInNldHRpbmdzIiwidGl0bGUiLCJfXyIsInBhcmVudCIsImljb24iLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5Iiwic3VwcG9ydHMiLCJjbGFzc05hbWUiLCJpbnNlcnRlciIsInJldXNhYmxlIiwiaHRtbCIsInN0eWxlcyIsImxhYmVsIiwiaXNEZWZhdWx0IiwiYXR0cmlidXRlcyIsImgiLCJ0eXBlIiwiZGVmYXVsdCIsInciLCJ0cmFuc2Zvcm1zIiwiZnJvbSIsImJsb2NrcyIsInRyYW5zZm9ybSIsImlubmVyQmxvY2tzIiwic2VsZWN0ZWQiLCJzZWxlY3QiLCJnZXRTZWxlY3RlZEJsb2NrIiwiY3JlYXRlQmxvY2siLCJkZXByZWNhdGVkIiwibWlncmF0ZSIsInNhdmUiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImluc2VydEJsb2Nrc0FmdGVyIiwiZ3JpZENvbHVtbkVuZCIsImdyaWRSb3dFbmQiLCJuZXh0IiwiQUxMT1dFRF9CTE9DS1MiLCJtaW5IZWlnaHQiLCJpbWdJZCIsImltZ1VybCIsImJnTWVkaWEiLCJiZ01lZGlhVXJsIiwibWVkaWFJZCIsIm1lZGlhVXJsIiwidG9nZ2xlU2VsZWN0aW9uIiwidmFsdWUiLCJpZCIsInVybCIsIm9wZW4iLCJ1bmRlZmluZWQiLCJvcGFjaXR5IiwiYmdDb2xvciIsImJnQ29sb3JTbHVnIiwiYmdDb2xvckJyaWdodG5lc3MiLCJwYWRkaW5nIiwiYWx0ZXJuYXRpdmUiLCJwbHVnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsaWdodE9yRGFyayIsImN1cnNvciIsImNvbG9yIiwiZ2V0RWRpdG9yU2V0dGluZ3MiLCJjb2xvclNsdWciLCJnZXRDb2xvck9iamVjdEJ5Q29sb3JWYWx1ZSIsImNvbG9ycyIsInNsdWciLCJicmlnaHRuZXNzIiwidGlueWNvbG9yIiwiZ2V0QnJpZ2h0bmVzcyIsImFsaWduIiwiY29sdW1ucyIsImNvdW50IiwibGVuZ3RoIiwiTWF0aCIsImZsb29yIiwibWFwIiwiY29sdW1uIiwiYmxvY2siLCJwdXNoIiwiY2xpZW50SWQiLCJnZXRCbG9ja3NCeUNsaWVudElkIiwiaGFzSW5uZXJCbG9ja3MiLCJyZWdpc3RlckJsb2NrVHlwZSIsImdyaWQiLCJncmlkSXRlbUJhc2ljIiwiZ3JpZEl0ZW1JbWFnZSIsImdyaWRJdGVtIiwialF1ZXJ5IiwiJCIsImxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWRJdGVtIiwiZWFjaCIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImZvckVhY2giLCJtdXRhdGlvbiIsImZpbmQiLCJhdHRyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCJsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkIiwidXBkYXRlU3R5bGVzR3JpZEl0ZW0iLCJ1cGRhdGVTdHlsZXNHcmlkIiwib24iLCJlIiwid2luZG93IiwibG9hZCIsIlByZXZpZXciLCJsYXlvdXQiLCJwcm9wcyIsImtleSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlRlbXBsYXRlU2VsZWN0IiwidGVtcGxhdGUiLCJzZXRTdGF0ZSIsInN0YXRlIiwiaGFzSW5ubmVyQmxvY2tzIiwiYWxsb3dlZEJsb2NrcyIsImJsYW5rVGVtcGxhdGUiLCJ0ZW1wbGF0ZXMiLCJzZXRUZW1wbGF0ZSIsIkNvbXBvbmVudCIsImdldFRlbXBsYXRlcyIsImFwcGx5RmlsdGVycyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDUEEscUJBQXFCLG1CQUFPLENBQUMsaUZBQWtCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSwyQjs7Ozs7Ozs7Ozs7QUNqQkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekMsNEJBQTRCLG1CQUFPLENBQUMsK0ZBQXlCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRDOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNUQSx3QkFBd0IsMkVBQTJFLG9DQUFvQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sb0NBQW9DLDhIQUE4SCxHQUFHLEVBQUUsc0JBQXNCOztBQUVuVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BELHNCQUFzQiw4QkFBOEI7QUFDcEQsc0JBQXNCLDhCQUE4Qjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLG1CQUFtQixPQUFPO0FBQ3pELCtCQUErQixtQkFBbUIsT0FBTztBQUN6RCwrQkFBK0IsbUJBQW1CLE9BQU87QUFDekQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QjtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsS0FBSyxrQkFBa0IsWUFBWSxrQkFBa0I7QUFDckQ7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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c0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsdUIiLCJmaWxlIjoiZWRpdG9yLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3dwLWNvbnRlbnQvcGx1Z2lucy9nZWNrby1ncmlkLWxheW91dC9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLy8gVGlueUNvbG9yIHYxLjQuMVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jncmlucy9UaW55Q29sb3Jcbi8vIEJyaWFuIEdyaW5zdGVhZCwgTUlUIExpY2Vuc2VcblxuKGZ1bmN0aW9uKE1hdGgpIHtcblxudmFyIHRyaW1MZWZ0ID0gL15cXHMrLyxcbiAgICB0cmltUmlnaHQgPSAvXFxzKyQvLFxuICAgIHRpbnlDb3VudGVyID0gMCxcbiAgICBtYXRoUm91bmQgPSBNYXRoLnJvdW5kLFxuICAgIG1hdGhNaW4gPSBNYXRoLm1pbixcbiAgICBtYXRoTWF4ID0gTWF0aC5tYXgsXG4gICAgbWF0aFJhbmRvbSA9IE1hdGgucmFuZG9tO1xuXG5mdW5jdGlvbiB0aW55Y29sb3IgKGNvbG9yLCBvcHRzKSB7XG5cbiAgICBjb2xvciA9IChjb2xvcikgPyBjb2xvciA6ICcnO1xuICAgIG9wdHMgPSBvcHRzIHx8IHsgfTtcblxuICAgIC8vIElmIGlucHV0IGlzIGFscmVhZHkgYSB0aW55Y29sb3IsIHJldHVybiBpdHNlbGZcbiAgICBpZiAoY29sb3IgaW5zdGFuY2VvZiB0aW55Y29sb3IpIHtcbiAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuICAgIC8vIElmIHdlIGFyZSBjYWxsZWQgYXMgYSBmdW5jdGlvbiwgY2FsbCB1c2luZyBuZXcgaW5zdGVhZFxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiB0aW55Y29sb3IpKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGlueWNvbG9yKGNvbG9yLCBvcHRzKTtcbiAgICB9XG5cbiAgICB2YXIgcmdiID0gaW5wdXRUb1JHQihjb2xvcik7XG4gICAgdGhpcy5fb3JpZ2luYWxJbnB1dCA9IGNvbG9yLFxuICAgIHRoaXMuX3IgPSByZ2IucixcbiAgICB0aGlzLl9nID0gcmdiLmcsXG4gICAgdGhpcy5fYiA9IHJnYi5iLFxuICAgIHRoaXMuX2EgPSByZ2IuYSxcbiAgICB0aGlzLl9yb3VuZEEgPSBtYXRoUm91bmQoMTAwKnRoaXMuX2EpIC8gMTAwLFxuICAgIHRoaXMuX2Zvcm1hdCA9IG9wdHMuZm9ybWF0IHx8IHJnYi5mb3JtYXQ7XG4gICAgdGhpcy5fZ3JhZGllbnRUeXBlID0gb3B0cy5ncmFkaWVudFR5cGU7XG5cbiAgICAvLyBEb24ndCBsZXQgdGhlIHJhbmdlIG9mIFswLDI1NV0gY29tZSBiYWNrIGluIFswLDFdLlxuICAgIC8vIFBvdGVudGlhbGx5IGxvc2UgYSBsaXR0bGUgYml0IG9mIHByZWNpc2lvbiBoZXJlLCBidXQgd2lsbCBmaXggaXNzdWVzIHdoZXJlXG4gICAgLy8gLjUgZ2V0cyBpbnRlcnByZXRlZCBhcyBoYWxmIG9mIHRoZSB0b3RhbCwgaW5zdGVhZCBvZiBoYWxmIG9mIDFcbiAgICAvLyBJZiBpdCB3YXMgc3VwcG9zZWQgdG8gYmUgMTI4LCB0aGlzIHdhcyBhbHJlYWR5IHRha2VuIGNhcmUgb2YgYnkgYGlucHV0VG9SZ2JgXG4gICAgaWYgKHRoaXMuX3IgPCAxKSB7IHRoaXMuX3IgPSBtYXRoUm91bmQodGhpcy5fcik7IH1cbiAgICBpZiAodGhpcy5fZyA8IDEpIHsgdGhpcy5fZyA9IG1hdGhSb3VuZCh0aGlzLl9nKTsgfVxuICAgIGlmICh0aGlzLl9iIDwgMSkgeyB0aGlzLl9iID0gbWF0aFJvdW5kKHRoaXMuX2IpOyB9XG5cbiAgICB0aGlzLl9vayA9IHJnYi5vaztcbiAgICB0aGlzLl90Y19pZCA9IHRpbnlDb3VudGVyKys7XG59XG5cbnRpbnljb2xvci5wcm90b3R5cGUgPSB7XG4gICAgaXNEYXJrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnJpZ2h0bmVzcygpIDwgMTI4O1xuICAgIH0sXG4gICAgaXNMaWdodDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0RhcmsoKTtcbiAgICB9LFxuICAgIGlzVmFsaWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb2s7XG4gICAgfSxcbiAgICBnZXRPcmlnaW5hbElucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcmlnaW5hbElucHV0O1xuICAgIH0sXG4gICAgZ2V0Rm9ybWF0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcbiAgICB9LFxuICAgIGdldEFscGhhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2E7XG4gICAgfSxcbiAgICBnZXRCcmlnaHRuZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9odHRwOi8vd3d3LnczLm9yZy9UUi9BRVJUI2NvbG9yLWNvbnRyYXN0XG4gICAgICAgIHZhciByZ2IgPSB0aGlzLnRvUmdiKCk7XG4gICAgICAgIHJldHVybiAocmdiLnIgKiAyOTkgKyByZ2IuZyAqIDU4NyArIHJnYi5iICogMTE0KSAvIDEwMDA7XG4gICAgfSxcbiAgICBnZXRMdW1pbmFuY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2h0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcbiAgICAgICAgdmFyIHJnYiA9IHRoaXMudG9SZ2IoKTtcbiAgICAgICAgdmFyIFJzUkdCLCBHc1JHQiwgQnNSR0IsIFIsIEcsIEI7XG4gICAgICAgIFJzUkdCID0gcmdiLnIvMjU1O1xuICAgICAgICBHc1JHQiA9IHJnYi5nLzI1NTtcbiAgICAgICAgQnNSR0IgPSByZ2IuYi8yNTU7XG5cbiAgICAgICAgaWYgKFJzUkdCIDw9IDAuMDM5MjgpIHtSID0gUnNSR0IgLyAxMi45Mjt9IGVsc2Uge1IgPSBNYXRoLnBvdygoKFJzUkdCICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO31cbiAgICAgICAgaWYgKEdzUkdCIDw9IDAuMDM5MjgpIHtHID0gR3NSR0IgLyAxMi45Mjt9IGVsc2Uge0cgPSBNYXRoLnBvdygoKEdzUkdCICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO31cbiAgICAgICAgaWYgKEJzUkdCIDw9IDAuMDM5MjgpIHtCID0gQnNSR0IgLyAxMi45Mjt9IGVsc2Uge0IgPSBNYXRoLnBvdygoKEJzUkdCICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO31cbiAgICAgICAgcmV0dXJuICgwLjIxMjYgKiBSKSArICgwLjcxNTIgKiBHKSArICgwLjA3MjIgKiBCKTtcbiAgICB9LFxuICAgIHNldEFscGhhOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9hID0gYm91bmRBbHBoYSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX3JvdW5kQSA9IG1hdGhSb3VuZCgxMDAqdGhpcy5fYSkgLyAxMDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdG9Ic3Y6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHN2ID0gcmdiVG9Ic3YodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYik7XG4gICAgICAgIHJldHVybiB7IGg6IGhzdi5oICogMzYwLCBzOiBoc3YucywgdjogaHN2LnYsIGE6IHRoaXMuX2EgfTtcbiAgICB9LFxuICAgIHRvSHN2U3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhzdiA9IHJnYlRvSHN2KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IpO1xuICAgICAgICB2YXIgaCA9IG1hdGhSb3VuZChoc3YuaCAqIDM2MCksIHMgPSBtYXRoUm91bmQoaHN2LnMgKiAxMDApLCB2ID0gbWF0aFJvdW5kKGhzdi52ICogMTAwKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9hID09IDEpID9cbiAgICAgICAgICBcImhzdihcIiAgKyBoICsgXCIsIFwiICsgcyArIFwiJSwgXCIgKyB2ICsgXCIlKVwiIDpcbiAgICAgICAgICBcImhzdmEoXCIgKyBoICsgXCIsIFwiICsgcyArIFwiJSwgXCIgKyB2ICsgXCIlLCBcIisgdGhpcy5fcm91bmRBICsgXCIpXCI7XG4gICAgfSxcbiAgICB0b0hzbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoc2wgPSByZ2JUb0hzbCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iKTtcbiAgICAgICAgcmV0dXJuIHsgaDogaHNsLmggKiAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCwgYTogdGhpcy5fYSB9O1xuICAgIH0sXG4gICAgdG9Ic2xTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHNsID0gcmdiVG9Ic2wodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYik7XG4gICAgICAgIHZhciBoID0gbWF0aFJvdW5kKGhzbC5oICogMzYwKSwgcyA9IG1hdGhSb3VuZChoc2wucyAqIDEwMCksIGwgPSBtYXRoUm91bmQoaHNsLmwgKiAxMDApO1xuICAgICAgICByZXR1cm4gKHRoaXMuX2EgPT0gMSkgP1xuICAgICAgICAgIFwiaHNsKFwiICArIGggKyBcIiwgXCIgKyBzICsgXCIlLCBcIiArIGwgKyBcIiUpXCIgOlxuICAgICAgICAgIFwiaHNsYShcIiArIGggKyBcIiwgXCIgKyBzICsgXCIlLCBcIiArIGwgKyBcIiUsIFwiKyB0aGlzLl9yb3VuZEEgKyBcIilcIjtcbiAgICB9LFxuICAgIHRvSGV4OiBmdW5jdGlvbihhbGxvdzNDaGFyKSB7XG4gICAgICAgIHJldHVybiByZ2JUb0hleCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCBhbGxvdzNDaGFyKTtcbiAgICB9LFxuICAgIHRvSGV4U3RyaW5nOiBmdW5jdGlvbihhbGxvdzNDaGFyKSB7XG4gICAgICAgIHJldHVybiAnIycgKyB0aGlzLnRvSGV4KGFsbG93M0NoYXIpO1xuICAgIH0sXG4gICAgdG9IZXg4OiBmdW5jdGlvbihhbGxvdzRDaGFyKSB7XG4gICAgICAgIHJldHVybiByZ2JhVG9IZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdGhpcy5fYSwgYWxsb3c0Q2hhcik7XG4gICAgfSxcbiAgICB0b0hleDhTdHJpbmc6IGZ1bmN0aW9uKGFsbG93NENoYXIpIHtcbiAgICAgICAgcmV0dXJuICcjJyArIHRoaXMudG9IZXg4KGFsbG93NENoYXIpO1xuICAgIH0sXG4gICAgdG9SZ2I6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4geyByOiBtYXRoUm91bmQodGhpcy5fciksIGc6IG1hdGhSb3VuZCh0aGlzLl9nKSwgYjogbWF0aFJvdW5kKHRoaXMuX2IpLCBhOiB0aGlzLl9hIH07XG4gICAgfSxcbiAgICB0b1JnYlN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fYSA9PSAxKSA/XG4gICAgICAgICAgXCJyZ2IoXCIgICsgbWF0aFJvdW5kKHRoaXMuX3IpICsgXCIsIFwiICsgbWF0aFJvdW5kKHRoaXMuX2cpICsgXCIsIFwiICsgbWF0aFJvdW5kKHRoaXMuX2IpICsgXCIpXCIgOlxuICAgICAgICAgIFwicmdiYShcIiArIG1hdGhSb3VuZCh0aGlzLl9yKSArIFwiLCBcIiArIG1hdGhSb3VuZCh0aGlzLl9nKSArIFwiLCBcIiArIG1hdGhSb3VuZCh0aGlzLl9iKSArIFwiLCBcIiArIHRoaXMuX3JvdW5kQSArIFwiKVwiO1xuICAgIH0sXG4gICAgdG9QZXJjZW50YWdlUmdiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fciwgMjU1KSAqIDEwMCkgKyBcIiVcIiwgZzogbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fZywgMjU1KSAqIDEwMCkgKyBcIiVcIiwgYjogbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fYiwgMjU1KSAqIDEwMCkgKyBcIiVcIiwgYTogdGhpcy5fYSB9O1xuICAgIH0sXG4gICAgdG9QZXJjZW50YWdlUmdiU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9hID09IDEpID9cbiAgICAgICAgICBcInJnYihcIiAgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9yLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9nLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9iLCAyNTUpICogMTAwKSArIFwiJSlcIiA6XG4gICAgICAgICAgXCJyZ2JhKFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fciwgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fZywgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fYiwgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgdGhpcy5fcm91bmRBICsgXCIpXCI7XG4gICAgfSxcbiAgICB0b05hbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9hIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhleE5hbWVzW3JnYlRvSGV4KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIHRydWUpXSB8fCBmYWxzZTtcbiAgICB9LFxuICAgIHRvRmlsdGVyOiBmdW5jdGlvbihzZWNvbmRDb2xvcikge1xuICAgICAgICB2YXIgaGV4OFN0cmluZyA9ICcjJyArIHJnYmFUb0FyZ2JIZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdGhpcy5fYSk7XG4gICAgICAgIHZhciBzZWNvbmRIZXg4U3RyaW5nID0gaGV4OFN0cmluZztcbiAgICAgICAgdmFyIGdyYWRpZW50VHlwZSA9IHRoaXMuX2dyYWRpZW50VHlwZSA/IFwiR3JhZGllbnRUeXBlID0gMSwgXCIgOiBcIlwiO1xuXG4gICAgICAgIGlmIChzZWNvbmRDb2xvcikge1xuICAgICAgICAgICAgdmFyIHMgPSB0aW55Y29sb3Ioc2Vjb25kQ29sb3IpO1xuICAgICAgICAgICAgc2Vjb25kSGV4OFN0cmluZyA9ICcjJyArIHJnYmFUb0FyZ2JIZXgocy5fciwgcy5fZywgcy5fYiwgcy5fYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoXCIrZ3JhZGllbnRUeXBlK1wic3RhcnRDb2xvcnN0cj1cIitoZXg4U3RyaW5nK1wiLGVuZENvbG9yc3RyPVwiK3NlY29uZEhleDhTdHJpbmcrXCIpXCI7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgICAgIHZhciBmb3JtYXRTZXQgPSAhIWZvcm1hdDtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8IHRoaXMuX2Zvcm1hdDtcblxuICAgICAgICB2YXIgZm9ybWF0dGVkU3RyaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBoYXNBbHBoYSA9IHRoaXMuX2EgPCAxICYmIHRoaXMuX2EgPj0gMDtcbiAgICAgICAgdmFyIG5lZWRzQWxwaGFGb3JtYXQgPSAhZm9ybWF0U2V0ICYmIGhhc0FscGhhICYmIChmb3JtYXQgPT09IFwiaGV4XCIgfHwgZm9ybWF0ID09PSBcImhleDZcIiB8fCBmb3JtYXQgPT09IFwiaGV4M1wiIHx8IGZvcm1hdCA9PT0gXCJoZXg0XCIgfHwgZm9ybWF0ID09PSBcImhleDhcIiB8fCBmb3JtYXQgPT09IFwibmFtZVwiKTtcblxuICAgICAgICBpZiAobmVlZHNBbHBoYUZvcm1hdCkge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBcInRyYW5zcGFyZW50XCIsIGFsbCBvdGhlciBub24tYWxwaGEgZm9ybWF0c1xuICAgICAgICAgICAgLy8gd2lsbCByZXR1cm4gcmdiYSB3aGVuIHRoZXJlIGlzIHRyYW5zcGFyZW5jeS5cbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09IFwibmFtZVwiICYmIHRoaXMuX2EgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b05hbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvUmdiU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJyZ2JcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b1JnYlN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwicHJnYlwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvUGVyY2VudGFnZVJnYlN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaGV4XCIgfHwgZm9ybWF0ID09PSBcImhleDZcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleFN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaGV4M1wiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4U3RyaW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaGV4NFwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4OFN0cmluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhleDhcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleDhTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b05hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhzbFwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSHNsU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoc3ZcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hzdlN0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFN0cmluZyB8fCB0aGlzLnRvSGV4U3RyaW5nKCk7XG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aW55Y29sb3IodGhpcy50b1N0cmluZygpKTtcbiAgICB9LFxuXG4gICAgX2FwcGx5TW9kaWZpY2F0aW9uOiBmdW5jdGlvbihmbiwgYXJncykge1xuICAgICAgICB2YXIgY29sb3IgPSBmbi5hcHBseShudWxsLCBbdGhpc10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncykpKTtcbiAgICAgICAgdGhpcy5fciA9IGNvbG9yLl9yO1xuICAgICAgICB0aGlzLl9nID0gY29sb3IuX2c7XG4gICAgICAgIHRoaXMuX2IgPSBjb2xvci5fYjtcbiAgICAgICAgdGhpcy5zZXRBbHBoYShjb2xvci5fYSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgbGlnaHRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihsaWdodGVuLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgYnJpZ2h0ZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oYnJpZ2h0ZW4sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBkYXJrZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZGFya2VuLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZGVzYXR1cmF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihkZXNhdHVyYXRlLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc2F0dXJhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oc2F0dXJhdGUsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBncmV5c2NhbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZ3JleXNjYWxlLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc3BpbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihzcGluLCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICBfYXBwbHlDb21iaW5hdGlvbjogZnVuY3Rpb24oZm4sIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIFt0aGlzXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmdzKSkpO1xuICAgIH0sXG4gICAgYW5hbG9nb3VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oYW5hbG9nb3VzLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgY29tcGxlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKGNvbXBsZW1lbnQsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBtb25vY2hyb21hdGljOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24obW9ub2Nocm9tYXRpYywgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNwbGl0Y29tcGxlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHNwbGl0Y29tcGxlbWVudCwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHRyaWFkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24odHJpYWQsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICB0ZXRyYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbih0ZXRyYWQsIGFyZ3VtZW50cyk7XG4gICAgfVxufTtcblxuLy8gSWYgaW5wdXQgaXMgYW4gb2JqZWN0LCBmb3JjZSAxIGludG8gXCIxLjBcIiB0byBoYW5kbGUgcmF0aW9zIHByb3Blcmx5XG4vLyBTdHJpbmcgaW5wdXQgcmVxdWlyZXMgXCIxLjBcIiBhcyBpbnB1dCwgc28gMSB3aWxsIGJlIHRyZWF0ZWQgYXMgMVxudGlueWNvbG9yLmZyb21SYXRpbyA9IGZ1bmN0aW9uKGNvbG9yLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHZhciBuZXdDb2xvciA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpIGluIGNvbG9yKSB7XG4gICAgICAgICAgICBpZiAoY29sb3IuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29sb3JbaV0gPSBjb2xvcltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbG9yW2ldID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvcltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbG9yID0gbmV3Q29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbnljb2xvcihjb2xvciwgb3B0cyk7XG59O1xuXG4vLyBHaXZlbiBhIHN0cmluZyBvciBvYmplY3QsIGNvbnZlcnQgdGhhdCBpbnB1dCB0byBSR0Jcbi8vIFBvc3NpYmxlIHN0cmluZyBpbnB1dHM6XG4vL1xuLy8gICAgIFwicmVkXCJcbi8vICAgICBcIiNmMDBcIiBvciBcImYwMFwiXG4vLyAgICAgXCIjZmYwMDAwXCIgb3IgXCJmZjAwMDBcIlxuLy8gICAgIFwiI2ZmMDAwMDAwXCIgb3IgXCJmZjAwMDAwMFwiXG4vLyAgICAgXCJyZ2IgMjU1IDAgMFwiIG9yIFwicmdiICgyNTUsIDAsIDApXCJcbi8vICAgICBcInJnYiAxLjAgMCAwXCIgb3IgXCJyZ2IgKDEsIDAsIDApXCJcbi8vICAgICBcInJnYmEgKDI1NSwgMCwgMCwgMSlcIiBvciBcInJnYmEgMjU1LCAwLCAwLCAxXCJcbi8vICAgICBcInJnYmEgKDEuMCwgMCwgMCwgMSlcIiBvciBcInJnYmEgMS4wLCAwLCAwLCAxXCJcbi8vICAgICBcImhzbCgwLCAxMDAlLCA1MCUpXCIgb3IgXCJoc2wgMCAxMDAlIDUwJVwiXG4vLyAgICAgXCJoc2xhKDAsIDEwMCUsIDUwJSwgMSlcIiBvciBcImhzbGEgMCAxMDAlIDUwJSwgMVwiXG4vLyAgICAgXCJoc3YoMCwgMTAwJSwgMTAwJSlcIiBvciBcImhzdiAwIDEwMCUgMTAwJVwiXG4vL1xuZnVuY3Rpb24gaW5wdXRUb1JHQihjb2xvcikge1xuXG4gICAgdmFyIHJnYiA9IHsgcjogMCwgZzogMCwgYjogMCB9O1xuICAgIHZhciBhID0gMTtcbiAgICB2YXIgcyA9IG51bGw7XG4gICAgdmFyIHYgPSBudWxsO1xuICAgIHZhciBsID0gbnVsbDtcbiAgICB2YXIgb2sgPSBmYWxzZTtcbiAgICB2YXIgZm9ybWF0ID0gZmFsc2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29sb3IgPSBzdHJpbmdJbnB1dFRvT2JqZWN0KGNvbG9yKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKGlzVmFsaWRDU1NVbml0KGNvbG9yLnIpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLmcpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLmIpKSB7XG4gICAgICAgICAgICByZ2IgPSByZ2JUb1JnYihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm1hdCA9IFN0cmluZyhjb2xvci5yKS5zdWJzdHIoLTEpID09PSBcIiVcIiA/IFwicHJnYlwiIDogXCJyZ2JcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZhbGlkQ1NTVW5pdChjb2xvci5oKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5zKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci52KSkge1xuICAgICAgICAgICAgcyA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3Iucyk7XG4gICAgICAgICAgICB2ID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci52KTtcbiAgICAgICAgICAgIHJnYiA9IGhzdlRvUmdiKGNvbG9yLmgsIHMsIHYpO1xuICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybWF0ID0gXCJoc3ZcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZhbGlkQ1NTVW5pdChjb2xvci5oKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5zKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5sKSkge1xuICAgICAgICAgICAgcyA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3Iucyk7XG4gICAgICAgICAgICBsID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci5sKTtcbiAgICAgICAgICAgIHJnYiA9IGhzbFRvUmdiKGNvbG9yLmgsIHMsIGwpO1xuICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybWF0ID0gXCJoc2xcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2xvci5oYXNPd25Qcm9wZXJ0eShcImFcIikpIHtcbiAgICAgICAgICAgIGEgPSBjb2xvci5hO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYSA9IGJvdW5kQWxwaGEoYSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvazogb2ssXG4gICAgICAgIGZvcm1hdDogY29sb3IuZm9ybWF0IHx8IGZvcm1hdCxcbiAgICAgICAgcjogbWF0aE1pbigyNTUsIG1hdGhNYXgocmdiLnIsIDApKSxcbiAgICAgICAgZzogbWF0aE1pbigyNTUsIG1hdGhNYXgocmdiLmcsIDApKSxcbiAgICAgICAgYjogbWF0aE1pbigyNTUsIG1hdGhNYXgocmdiLmIsIDApKSxcbiAgICAgICAgYTogYVxuICAgIH07XG59XG5cblxuLy8gQ29udmVyc2lvbiBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGByZ2JUb0hzbGAsIGByZ2JUb0hzdmAsIGBoc2xUb1JnYmAsIGBoc3ZUb1JnYmAgbW9kaWZpZWQgZnJvbTpcbi8vIDxodHRwOi8vbWppamFja3Nvbi5jb20vMjAwOC8wMi9yZ2ItdG8taHNsLWFuZC1yZ2ItdG8taHN2LWNvbG9yLW1vZGVsLWNvbnZlcnNpb24tYWxnb3JpdGhtcy1pbi1qYXZhc2NyaXB0PlxuXG4vLyBgcmdiVG9SZ2JgXG4vLyBIYW5kbGUgYm91bmRzIC8gcGVyY2VudGFnZSBjaGVja2luZyB0byBjb25mb3JtIHRvIENTUyBjb2xvciBzcGVjXG4vLyA8aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8+XG4vLyAqQXNzdW1lczoqIHIsIGcsIGIgaW4gWzAsIDI1NV0gb3IgWzAsIDFdXG4vLyAqUmV0dXJuczoqIHsgciwgZywgYiB9IGluIFswLCAyNTVdXG5mdW5jdGlvbiByZ2JUb1JnYihyLCBnLCBiKXtcbiAgICByZXR1cm4ge1xuICAgICAgICByOiBib3VuZDAxKHIsIDI1NSkgKiAyNTUsXG4gICAgICAgIGc6IGJvdW5kMDEoZywgMjU1KSAqIDI1NSxcbiAgICAgICAgYjogYm91bmQwMShiLCAyNTUpICogMjU1XG4gICAgfTtcbn1cblxuLy8gYHJnYlRvSHNsYFxuLy8gQ29udmVydHMgYW4gUkdCIGNvbG9yIHZhbHVlIHRvIEhTTC5cbi8vICpBc3N1bWVzOiogciwgZywgYW5kIGIgYXJlIGNvbnRhaW5lZCBpbiBbMCwgMjU1XSBvciBbMCwgMV1cbi8vICpSZXR1cm5zOiogeyBoLCBzLCBsIH0gaW4gWzAsMV1cbmZ1bmN0aW9uIHJnYlRvSHNsKHIsIGcsIGIpIHtcblxuICAgIHIgPSBib3VuZDAxKHIsIDI1NSk7XG4gICAgZyA9IGJvdW5kMDEoZywgMjU1KTtcbiAgICBiID0gYm91bmQwMShiLCAyNTUpO1xuXG4gICAgdmFyIG1heCA9IG1hdGhNYXgociwgZywgYiksIG1pbiA9IG1hdGhNaW4ociwgZywgYik7XG4gICAgdmFyIGgsIHMsIGwgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgICBpZihtYXggPT0gbWluKSB7XG4gICAgICAgIGggPSBzID0gMDsgLy8gYWNocm9tYXRpY1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGQgPSBtYXggLSBtaW47XG4gICAgICAgIHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKTtcbiAgICAgICAgc3dpdGNoKG1heCkge1xuICAgICAgICAgICAgY2FzZSByOiBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBnOiBoID0gKGIgLSByKSAvIGQgKyAyOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYjogaCA9IChyIC0gZykgLyBkICsgNDsgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBoIC89IDY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaDogaCwgczogcywgbDogbCB9O1xufVxuXG4vLyBgaHNsVG9SZ2JgXG4vLyBDb252ZXJ0cyBhbiBIU0wgY29sb3IgdmFsdWUgdG8gUkdCLlxuLy8gKkFzc3VtZXM6KiBoIGlzIGNvbnRhaW5lZCBpbiBbMCwgMV0gb3IgWzAsIDM2MF0gYW5kIHMgYW5kIGwgYXJlIGNvbnRhaW5lZCBbMCwgMV0gb3IgWzAsIDEwMF1cbi8vICpSZXR1cm5zOiogeyByLCBnLCBiIH0gaW4gdGhlIHNldCBbMCwgMjU1XVxuZnVuY3Rpb24gaHNsVG9SZ2IoaCwgcywgbCkge1xuICAgIHZhciByLCBnLCBiO1xuXG4gICAgaCA9IGJvdW5kMDEoaCwgMzYwKTtcbiAgICBzID0gYm91bmQwMShzLCAxMDApO1xuICAgIGwgPSBib3VuZDAxKGwsIDEwMCk7XG5cbiAgICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICAgICAgaWYodCA8IDApIHQgKz0gMTtcbiAgICAgICAgaWYodCA+IDEpIHQgLT0gMTtcbiAgICAgICAgaWYodCA8IDEvNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gICAgICAgIGlmKHQgPCAxLzIpIHJldHVybiBxO1xuICAgICAgICBpZih0IDwgMi8zKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMi8zIC0gdCkgKiA2O1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICBpZihzID09PSAwKSB7XG4gICAgICAgIHIgPSBnID0gYiA9IGw7IC8vIGFjaHJvbWF0aWNcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgdmFyIHAgPSAyICogbCAtIHE7XG4gICAgICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxLzMpO1xuICAgICAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICAgICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEvMyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcjogciAqIDI1NSwgZzogZyAqIDI1NSwgYjogYiAqIDI1NSB9O1xufVxuXG4vLyBgcmdiVG9Ic3ZgXG4vLyBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdmFsdWUgdG8gSFNWXG4vLyAqQXNzdW1lczoqIHIsIGcsIGFuZCBiIGFyZSBjb250YWluZWQgaW4gdGhlIHNldCBbMCwgMjU1XSBvciBbMCwgMV1cbi8vICpSZXR1cm5zOiogeyBoLCBzLCB2IH0gaW4gWzAsMV1cbmZ1bmN0aW9uIHJnYlRvSHN2KHIsIGcsIGIpIHtcblxuICAgIHIgPSBib3VuZDAxKHIsIDI1NSk7XG4gICAgZyA9IGJvdW5kMDEoZywgMjU1KTtcbiAgICBiID0gYm91bmQwMShiLCAyNTUpO1xuXG4gICAgdmFyIG1heCA9IG1hdGhNYXgociwgZywgYiksIG1pbiA9IG1hdGhNaW4ociwgZywgYik7XG4gICAgdmFyIGgsIHMsIHYgPSBtYXg7XG5cbiAgICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgICBzID0gbWF4ID09PSAwID8gMCA6IGQgLyBtYXg7XG5cbiAgICBpZihtYXggPT0gbWluKSB7XG4gICAgICAgIGggPSAwOyAvLyBhY2hyb21hdGljXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2gobWF4KSB7XG4gICAgICAgICAgICBjYXNlIHI6IGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGc6IGggPSAoYiAtIHIpIC8gZCArIDI7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBiOiBoID0gKHIgLSBnKSAvIGQgKyA0OyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBoIC89IDY7XG4gICAgfVxuICAgIHJldHVybiB7IGg6IGgsIHM6IHMsIHY6IHYgfTtcbn1cblxuLy8gYGhzdlRvUmdiYFxuLy8gQ29udmVydHMgYW4gSFNWIGNvbG9yIHZhbHVlIHRvIFJHQi5cbi8vICpBc3N1bWVzOiogaCBpcyBjb250YWluZWQgaW4gWzAsIDFdIG9yIFswLCAzNjBdIGFuZCBzIGFuZCB2IGFyZSBjb250YWluZWQgaW4gWzAsIDFdIG9yIFswLCAxMDBdXG4vLyAqUmV0dXJuczoqIHsgciwgZywgYiB9IGluIHRoZSBzZXQgWzAsIDI1NV1cbiBmdW5jdGlvbiBoc3ZUb1JnYihoLCBzLCB2KSB7XG5cbiAgICBoID0gYm91bmQwMShoLCAzNjApICogNjtcbiAgICBzID0gYm91bmQwMShzLCAxMDApO1xuICAgIHYgPSBib3VuZDAxKHYsIDEwMCk7XG5cbiAgICB2YXIgaSA9IE1hdGguZmxvb3IoaCksXG4gICAgICAgIGYgPSBoIC0gaSxcbiAgICAgICAgcCA9IHYgKiAoMSAtIHMpLFxuICAgICAgICBxID0gdiAqICgxIC0gZiAqIHMpLFxuICAgICAgICB0ID0gdiAqICgxIC0gKDEgLSBmKSAqIHMpLFxuICAgICAgICBtb2QgPSBpICUgNixcbiAgICAgICAgciA9IFt2LCBxLCBwLCBwLCB0LCB2XVttb2RdLFxuICAgICAgICBnID0gW3QsIHYsIHYsIHEsIHAsIHBdW21vZF0sXG4gICAgICAgIGIgPSBbcCwgcCwgdCwgdiwgdiwgcV1bbW9kXTtcblxuICAgIHJldHVybiB7IHI6IHIgKiAyNTUsIGc6IGcgKiAyNTUsIGI6IGIgKiAyNTUgfTtcbn1cblxuLy8gYHJnYlRvSGV4YFxuLy8gQ29udmVydHMgYW4gUkdCIGNvbG9yIHRvIGhleFxuLy8gQXNzdW1lcyByLCBnLCBhbmQgYiBhcmUgY29udGFpbmVkIGluIHRoZSBzZXQgWzAsIDI1NV1cbi8vIFJldHVybnMgYSAzIG9yIDYgY2hhcmFjdGVyIGhleFxuZnVuY3Rpb24gcmdiVG9IZXgociwgZywgYiwgYWxsb3czQ2hhcikge1xuXG4gICAgdmFyIGhleCA9IFtcbiAgICAgICAgcGFkMihtYXRoUm91bmQocikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoZykudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoYikudG9TdHJpbmcoMTYpKVxuICAgIF07XG5cbiAgICAvLyBSZXR1cm4gYSAzIGNoYXJhY3RlciBoZXggaWYgcG9zc2libGVcbiAgICBpZiAoYWxsb3czQ2hhciAmJiBoZXhbMF0uY2hhckF0KDApID09IGhleFswXS5jaGFyQXQoMSkgJiYgaGV4WzFdLmNoYXJBdCgwKSA9PSBoZXhbMV0uY2hhckF0KDEpICYmIGhleFsyXS5jaGFyQXQoMCkgPT0gaGV4WzJdLmNoYXJBdCgxKSkge1xuICAgICAgICByZXR1cm4gaGV4WzBdLmNoYXJBdCgwKSArIGhleFsxXS5jaGFyQXQoMCkgKyBoZXhbMl0uY2hhckF0KDApO1xuICAgIH1cblxuICAgIHJldHVybiBoZXguam9pbihcIlwiKTtcbn1cblxuLy8gYHJnYmFUb0hleGBcbi8vIENvbnZlcnRzIGFuIFJHQkEgY29sb3IgcGx1cyBhbHBoYSB0cmFuc3BhcmVuY3kgdG8gaGV4XG4vLyBBc3N1bWVzIHIsIGcsIGIgYXJlIGNvbnRhaW5lZCBpbiB0aGUgc2V0IFswLCAyNTVdIGFuZFxuLy8gYSBpbiBbMCwgMV0uIFJldHVybnMgYSA0IG9yIDggY2hhcmFjdGVyIHJnYmEgaGV4XG5mdW5jdGlvbiByZ2JhVG9IZXgociwgZywgYiwgYSwgYWxsb3c0Q2hhcikge1xuXG4gICAgdmFyIGhleCA9IFtcbiAgICAgICAgcGFkMihtYXRoUm91bmQocikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoZykudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoYikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihjb252ZXJ0RGVjaW1hbFRvSGV4KGEpKVxuICAgIF07XG5cbiAgICAvLyBSZXR1cm4gYSA0IGNoYXJhY3RlciBoZXggaWYgcG9zc2libGVcbiAgICBpZiAoYWxsb3c0Q2hhciAmJiBoZXhbMF0uY2hhckF0KDApID09IGhleFswXS5jaGFyQXQoMSkgJiYgaGV4WzFdLmNoYXJBdCgwKSA9PSBoZXhbMV0uY2hhckF0KDEpICYmIGhleFsyXS5jaGFyQXQoMCkgPT0gaGV4WzJdLmNoYXJBdCgxKSAmJiBoZXhbM10uY2hhckF0KDApID09IGhleFszXS5jaGFyQXQoMSkpIHtcbiAgICAgICAgcmV0dXJuIGhleFswXS5jaGFyQXQoMCkgKyBoZXhbMV0uY2hhckF0KDApICsgaGV4WzJdLmNoYXJBdCgwKSArIGhleFszXS5jaGFyQXQoMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhleC5qb2luKFwiXCIpO1xufVxuXG4vLyBgcmdiYVRvQXJnYkhleGBcbi8vIENvbnZlcnRzIGFuIFJHQkEgY29sb3IgdG8gYW4gQVJHQiBIZXg4IHN0cmluZ1xuLy8gUmFyZWx5IHVzZWQsIGJ1dCByZXF1aXJlZCBmb3IgXCJ0b0ZpbHRlcigpXCJcbmZ1bmN0aW9uIHJnYmFUb0FyZ2JIZXgociwgZywgYiwgYSkge1xuXG4gICAgdmFyIGhleCA9IFtcbiAgICAgICAgcGFkMihjb252ZXJ0RGVjaW1hbFRvSGV4KGEpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQocikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoZykudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoYikudG9TdHJpbmcoMTYpKVxuICAgIF07XG5cbiAgICByZXR1cm4gaGV4LmpvaW4oXCJcIik7XG59XG5cbi8vIGBlcXVhbHNgXG4vLyBDYW4gYmUgY2FsbGVkIHdpdGggYW55IHRpbnljb2xvciBpbnB1dFxudGlueWNvbG9yLmVxdWFscyA9IGZ1bmN0aW9uIChjb2xvcjEsIGNvbG9yMikge1xuICAgIGlmICghY29sb3IxIHx8ICFjb2xvcjIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcmV0dXJuIHRpbnljb2xvcihjb2xvcjEpLnRvUmdiU3RyaW5nKCkgPT0gdGlueWNvbG9yKGNvbG9yMikudG9SZ2JTdHJpbmcoKTtcbn07XG5cbnRpbnljb2xvci5yYW5kb20gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGlueWNvbG9yLmZyb21SYXRpbyh7XG4gICAgICAgIHI6IG1hdGhSYW5kb20oKSxcbiAgICAgICAgZzogbWF0aFJhbmRvbSgpLFxuICAgICAgICBiOiBtYXRoUmFuZG9tKClcbiAgICB9KTtcbn07XG5cblxuLy8gTW9kaWZpY2F0aW9uIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhhbmtzIHRvIGxlc3MuanMgZm9yIHNvbWUgb2YgdGhlIGJhc2ljcyBoZXJlXG4vLyA8aHR0cHM6Ly9naXRodWIuY29tL2Nsb3VkaGVhZC9sZXNzLmpzL2Jsb2IvbWFzdGVyL2xpYi9sZXNzL2Z1bmN0aW9ucy5qcz5cblxuZnVuY3Rpb24gZGVzYXR1cmF0ZShjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wucyAtPSBhbW91bnQgLyAxMDA7XG4gICAgaHNsLnMgPSBjbGFtcDAxKGhzbC5zKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbmZ1bmN0aW9uIHNhdHVyYXRlKGNvbG9yLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDEwKTtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIGhzbC5zICs9IGFtb3VudCAvIDEwMDtcbiAgICBoc2wucyA9IGNsYW1wMDEoaHNsLnMpO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuZnVuY3Rpb24gZ3JleXNjYWxlKGNvbG9yKSB7XG4gICAgcmV0dXJuIHRpbnljb2xvcihjb2xvcikuZGVzYXR1cmF0ZSgxMDApO1xufVxuXG5mdW5jdGlvbiBsaWdodGVuIChjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wubCArPSBhbW91bnQgLyAxMDA7XG4gICAgaHNsLmwgPSBjbGFtcDAxKGhzbC5sKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbmZ1bmN0aW9uIGJyaWdodGVuKGNvbG9yLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDEwKTtcbiAgICB2YXIgcmdiID0gdGlueWNvbG9yKGNvbG9yKS50b1JnYigpO1xuICAgIHJnYi5yID0gbWF0aE1heCgwLCBtYXRoTWluKDI1NSwgcmdiLnIgLSBtYXRoUm91bmQoMjU1ICogLSAoYW1vdW50IC8gMTAwKSkpKTtcbiAgICByZ2IuZyA9IG1hdGhNYXgoMCwgbWF0aE1pbigyNTUsIHJnYi5nIC0gbWF0aFJvdW5kKDI1NSAqIC0gKGFtb3VudCAvIDEwMCkpKSk7XG4gICAgcmdiLmIgPSBtYXRoTWF4KDAsIG1hdGhNaW4oMjU1LCByZ2IuYiAtIG1hdGhSb3VuZCgyNTUgKiAtIChhbW91bnQgLyAxMDApKSkpO1xuICAgIHJldHVybiB0aW55Y29sb3IocmdiKTtcbn1cblxuZnVuY3Rpb24gZGFya2VuIChjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wubCAtPSBhbW91bnQgLyAxMDA7XG4gICAgaHNsLmwgPSBjbGFtcDAxKGhzbC5sKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbi8vIFNwaW4gdGFrZXMgYSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBhbW91bnQgd2l0aGluIFstMzYwLCAzNjBdIGluZGljYXRpbmcgdGhlIGNoYW5nZSBvZiBodWUuXG4vLyBWYWx1ZXMgb3V0c2lkZSBvZiB0aGlzIHJhbmdlIHdpbGwgYmUgd3JhcHBlZCBpbnRvIHRoaXMgcmFuZ2UuXG5mdW5jdGlvbiBzcGluKGNvbG9yLCBhbW91bnQpIHtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIHZhciBodWUgPSAoaHNsLmggKyBhbW91bnQpICUgMzYwO1xuICAgIGhzbC5oID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbi8vIENvbWJpbmF0aW9uIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGFua3MgdG8galF1ZXJ5IHhDb2xvciBmb3Igc29tZSBvZiB0aGUgaWRlYXMgYmVoaW5kIHRoZXNlXG4vLyA8aHR0cHM6Ly9naXRodWIuY29tL2luZnVzaW9uL2pRdWVyeS14Y29sb3IvYmxvYi9tYXN0ZXIvanF1ZXJ5Lnhjb2xvci5qcz5cblxuZnVuY3Rpb24gY29tcGxlbWVudChjb2xvcikge1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgaHNsLmggPSAoaHNsLmggKyAxODApICUgMzYwO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuZnVuY3Rpb24gdHJpYWQoY29sb3IpIHtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIHZhciBoID0gaHNsLmg7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgdGlueWNvbG9yKGNvbG9yKSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyAxMjApICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMjQwKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gdGV0cmFkKGNvbG9yKSB7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICB2YXIgaCA9IGhzbC5oO1xuICAgIHJldHVybiBbXG4gICAgICAgIHRpbnljb2xvcihjb2xvciksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgOTApICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMTgwKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDI3MCkgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KVxuICAgIF07XG59XG5cbmZ1bmN0aW9uIHNwbGl0Y29tcGxlbWVudChjb2xvcikge1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgdmFyIGggPSBoc2wuaDtcbiAgICByZXR1cm4gW1xuICAgICAgICB0aW55Y29sb3IoY29sb3IpLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDcyKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sfSksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMjE2KSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sfSlcbiAgICBdO1xufVxuXG5mdW5jdGlvbiBhbmFsb2dvdXMoY29sb3IsIHJlc3VsdHMsIHNsaWNlcykge1xuICAgIHJlc3VsdHMgPSByZXN1bHRzIHx8IDY7XG4gICAgc2xpY2VzID0gc2xpY2VzIHx8IDMwO1xuXG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICB2YXIgcGFydCA9IDM2MCAvIHNsaWNlcztcbiAgICB2YXIgcmV0ID0gW3Rpbnljb2xvcihjb2xvcildO1xuXG4gICAgZm9yIChoc2wuaCA9ICgoaHNsLmggLSAocGFydCAqIHJlc3VsdHMgPj4gMSkpICsgNzIwKSAlIDM2MDsgLS1yZXN1bHRzOyApIHtcbiAgICAgICAgaHNsLmggPSAoaHNsLmggKyBwYXJ0KSAlIDM2MDtcbiAgICAgICAgcmV0LnB1c2godGlueWNvbG9yKGhzbCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBtb25vY2hyb21hdGljKGNvbG9yLCByZXN1bHRzKSB7XG4gICAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgNjtcbiAgICB2YXIgaHN2ID0gdGlueWNvbG9yKGNvbG9yKS50b0hzdigpO1xuICAgIHZhciBoID0gaHN2LmgsIHMgPSBoc3YucywgdiA9IGhzdi52O1xuICAgIHZhciByZXQgPSBbXTtcbiAgICB2YXIgbW9kaWZpY2F0aW9uID0gMSAvIHJlc3VsdHM7XG5cbiAgICB3aGlsZSAocmVzdWx0cy0tKSB7XG4gICAgICAgIHJldC5wdXNoKHRpbnljb2xvcih7IGg6IGgsIHM6IHMsIHY6IHZ9KSk7XG4gICAgICAgIHYgPSAodiArIG1vZGlmaWNhdGlvbikgJSAxO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cbi8vIFV0aWxpdHkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudGlueWNvbG9yLm1peCA9IGZ1bmN0aW9uKGNvbG9yMSwgY29sb3IyLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDUwKTtcblxuICAgIHZhciByZ2IxID0gdGlueWNvbG9yKGNvbG9yMSkudG9SZ2IoKTtcbiAgICB2YXIgcmdiMiA9IHRpbnljb2xvcihjb2xvcjIpLnRvUmdiKCk7XG5cbiAgICB2YXIgcCA9IGFtb3VudCAvIDEwMDtcblxuICAgIHZhciByZ2JhID0ge1xuICAgICAgICByOiAoKHJnYjIuciAtIHJnYjEucikgKiBwKSArIHJnYjEucixcbiAgICAgICAgZzogKChyZ2IyLmcgLSByZ2IxLmcpICogcCkgKyByZ2IxLmcsXG4gICAgICAgIGI6ICgocmdiMi5iIC0gcmdiMS5iKSAqIHApICsgcmdiMS5iLFxuICAgICAgICBhOiAoKHJnYjIuYSAtIHJnYjEuYSkgKiBwKSArIHJnYjEuYVxuICAgIH07XG5cbiAgICByZXR1cm4gdGlueWNvbG9yKHJnYmEpO1xufTtcblxuXG4vLyBSZWFkYWJpbGl0eSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jY29udHJhc3QtcmF0aW9kZWYgKFdDQUcgVmVyc2lvbiAyKVxuXG4vLyBgY29udHJhc3RgXG4vLyBBbmFseXplIHRoZSAyIGNvbG9ycyBhbmQgcmV0dXJucyB0aGUgY29sb3IgY29udHJhc3QgZGVmaW5lZCBieSAoV0NBRyBWZXJzaW9uIDIpXG50aW55Y29sb3IucmVhZGFiaWxpdHkgPSBmdW5jdGlvbihjb2xvcjEsIGNvbG9yMikge1xuICAgIHZhciBjMSA9IHRpbnljb2xvcihjb2xvcjEpO1xuICAgIHZhciBjMiA9IHRpbnljb2xvcihjb2xvcjIpO1xuICAgIHJldHVybiAoTWF0aC5tYXgoYzEuZ2V0THVtaW5hbmNlKCksYzIuZ2V0THVtaW5hbmNlKCkpKzAuMDUpIC8gKE1hdGgubWluKGMxLmdldEx1bWluYW5jZSgpLGMyLmdldEx1bWluYW5jZSgpKSswLjA1KTtcbn07XG5cbi8vIGBpc1JlYWRhYmxlYFxuLy8gRW5zdXJlIHRoYXQgZm9yZWdyb3VuZCBhbmQgYmFja2dyb3VuZCBjb2xvciBjb21iaW5hdGlvbnMgbWVldCBXQ0FHMiBndWlkZWxpbmVzLlxuLy8gVGhlIHRoaXJkIGFyZ3VtZW50IGlzIGFuIG9wdGlvbmFsIE9iamVjdC5cbi8vICAgICAgdGhlICdsZXZlbCcgcHJvcGVydHkgc3RhdGVzICdBQScgb3IgJ0FBQScgLSBpZiBtaXNzaW5nIG9yIGludmFsaWQsIGl0IGRlZmF1bHRzIHRvICdBQSc7XG4vLyAgICAgIHRoZSAnc2l6ZScgcHJvcGVydHkgc3RhdGVzICdsYXJnZScgb3IgJ3NtYWxsJyAtIGlmIG1pc3Npbmcgb3IgaW52YWxpZCwgaXQgZGVmYXVsdHMgdG8gJ3NtYWxsJy5cbi8vIElmIHRoZSBlbnRpcmUgb2JqZWN0IGlzIGFic2VudCwgaXNSZWFkYWJsZSBkZWZhdWx0cyB0byB7bGV2ZWw6XCJBQVwiLHNpemU6XCJzbWFsbFwifS5cblxuLy8gKkV4YW1wbGUqXG4vLyAgICB0aW55Y29sb3IuaXNSZWFkYWJsZShcIiMwMDBcIiwgXCIjMTExXCIpID0+IGZhbHNlXG4vLyAgICB0aW55Y29sb3IuaXNSZWFkYWJsZShcIiMwMDBcIiwgXCIjMTExXCIse2xldmVsOlwiQUFcIixzaXplOlwibGFyZ2VcIn0pID0+IGZhbHNlXG50aW55Y29sb3IuaXNSZWFkYWJsZSA9IGZ1bmN0aW9uKGNvbG9yMSwgY29sb3IyLCB3Y2FnMikge1xuICAgIHZhciByZWFkYWJpbGl0eSA9IHRpbnljb2xvci5yZWFkYWJpbGl0eShjb2xvcjEsIGNvbG9yMik7XG4gICAgdmFyIHdjYWcyUGFybXMsIG91dDtcblxuICAgIG91dCA9IGZhbHNlO1xuXG4gICAgd2NhZzJQYXJtcyA9IHZhbGlkYXRlV0NBRzJQYXJtcyh3Y2FnMik7XG4gICAgc3dpdGNoICh3Y2FnMlBhcm1zLmxldmVsICsgd2NhZzJQYXJtcy5zaXplKSB7XG4gICAgICAgIGNhc2UgXCJBQXNtYWxsXCI6XG4gICAgICAgIGNhc2UgXCJBQUFsYXJnZVwiOlxuICAgICAgICAgICAgb3V0ID0gcmVhZGFiaWxpdHkgPj0gNC41O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBQWxhcmdlXCI6XG4gICAgICAgICAgICBvdXQgPSByZWFkYWJpbGl0eSA+PSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBQUFzbWFsbFwiOlxuICAgICAgICAgICAgb3V0ID0gcmVhZGFiaWxpdHkgPj0gNztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuXG59O1xuXG4vLyBgbW9zdFJlYWRhYmxlYFxuLy8gR2l2ZW4gYSBiYXNlIGNvbG9yIGFuZCBhIGxpc3Qgb2YgcG9zc2libGUgZm9yZWdyb3VuZCBvciBiYWNrZ3JvdW5kXG4vLyBjb2xvcnMgZm9yIHRoYXQgYmFzZSwgcmV0dXJucyB0aGUgbW9zdCByZWFkYWJsZSBjb2xvci5cbi8vIE9wdGlvbmFsbHkgcmV0dXJucyBCbGFjayBvciBXaGl0ZSBpZiB0aGUgbW9zdCByZWFkYWJsZSBjb2xvciBpcyB1bnJlYWRhYmxlLlxuLy8gKkV4YW1wbGUqXG4vLyAgICB0aW55Y29sb3IubW9zdFJlYWRhYmxlKHRpbnljb2xvci5tb3N0UmVhZGFibGUoXCIjMTIzXCIsIFtcIiMxMjRcIiwgXCIjMTI1XCJdLHtpbmNsdWRlRmFsbGJhY2tDb2xvcnM6ZmFsc2V9KS50b0hleFN0cmluZygpOyAvLyBcIiMxMTIyNTVcIlxuLy8gICAgdGlueWNvbG9yLm1vc3RSZWFkYWJsZSh0aW55Y29sb3IubW9zdFJlYWRhYmxlKFwiIzEyM1wiLCBbXCIjMTI0XCIsIFwiIzEyNVwiXSx7aW5jbHVkZUZhbGxiYWNrQ29sb3JzOnRydWV9KS50b0hleFN0cmluZygpOyAgLy8gXCIjZmZmZmZmXCJcbi8vICAgIHRpbnljb2xvci5tb3N0UmVhZGFibGUoXCIjYTgwMTVhXCIsIFtcIiNmYWYzZjNcIl0se2luY2x1ZGVGYWxsYmFja0NvbG9yczp0cnVlLGxldmVsOlwiQUFBXCIsc2l6ZTpcImxhcmdlXCJ9KS50b0hleFN0cmluZygpOyAvLyBcIiNmYWYzZjNcIlxuLy8gICAgdGlueWNvbG9yLm1vc3RSZWFkYWJsZShcIiNhODAxNWFcIiwgW1wiI2ZhZjNmM1wiXSx7aW5jbHVkZUZhbGxiYWNrQ29sb3JzOnRydWUsbGV2ZWw6XCJBQUFcIixzaXplOlwic21hbGxcIn0pLnRvSGV4U3RyaW5nKCk7IC8vIFwiI2ZmZmZmZlwiXG50aW55Y29sb3IubW9zdFJlYWRhYmxlID0gZnVuY3Rpb24oYmFzZUNvbG9yLCBjb2xvckxpc3QsIGFyZ3MpIHtcbiAgICB2YXIgYmVzdENvbG9yID0gbnVsbDtcbiAgICB2YXIgYmVzdFNjb3JlID0gMDtcbiAgICB2YXIgcmVhZGFiaWxpdHk7XG4gICAgdmFyIGluY2x1ZGVGYWxsYmFja0NvbG9ycywgbGV2ZWwsIHNpemUgO1xuICAgIGFyZ3MgPSBhcmdzIHx8IHt9O1xuICAgIGluY2x1ZGVGYWxsYmFja0NvbG9ycyA9IGFyZ3MuaW5jbHVkZUZhbGxiYWNrQ29sb3JzIDtcbiAgICBsZXZlbCA9IGFyZ3MubGV2ZWw7XG4gICAgc2l6ZSA9IGFyZ3Muc2l6ZTtcblxuICAgIGZvciAodmFyIGk9IDA7IGkgPCBjb2xvckxpc3QubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIHJlYWRhYmlsaXR5ID0gdGlueWNvbG9yLnJlYWRhYmlsaXR5KGJhc2VDb2xvciwgY29sb3JMaXN0W2ldKTtcbiAgICAgICAgaWYgKHJlYWRhYmlsaXR5ID4gYmVzdFNjb3JlKSB7XG4gICAgICAgICAgICBiZXN0U2NvcmUgPSByZWFkYWJpbGl0eTtcbiAgICAgICAgICAgIGJlc3RDb2xvciA9IHRpbnljb2xvcihjb2xvckxpc3RbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRpbnljb2xvci5pc1JlYWRhYmxlKGJhc2VDb2xvciwgYmVzdENvbG9yLCB7XCJsZXZlbFwiOmxldmVsLFwic2l6ZVwiOnNpemV9KSB8fCAhaW5jbHVkZUZhbGxiYWNrQ29sb3JzKSB7XG4gICAgICAgIHJldHVybiBiZXN0Q29sb3I7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhcmdzLmluY2x1ZGVGYWxsYmFja0NvbG9ycz1mYWxzZTtcbiAgICAgICAgcmV0dXJuIHRpbnljb2xvci5tb3N0UmVhZGFibGUoYmFzZUNvbG9yLFtcIiNmZmZcIiwgXCIjMDAwXCJdLGFyZ3MpO1xuICAgIH1cbn07XG5cblxuLy8gQmlnIExpc3Qgb2YgQ29sb3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cbi8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3I+XG52YXIgbmFtZXMgPSB0aW55Y29sb3IubmFtZXMgPSB7XG4gICAgYWxpY2VibHVlOiBcImYwZjhmZlwiLFxuICAgIGFudGlxdWV3aGl0ZTogXCJmYWViZDdcIixcbiAgICBhcXVhOiBcIjBmZlwiLFxuICAgIGFxdWFtYXJpbmU6IFwiN2ZmZmQ0XCIsXG4gICAgYXp1cmU6IFwiZjBmZmZmXCIsXG4gICAgYmVpZ2U6IFwiZjVmNWRjXCIsXG4gICAgYmlzcXVlOiBcImZmZTRjNFwiLFxuICAgIGJsYWNrOiBcIjAwMFwiLFxuICAgIGJsYW5jaGVkYWxtb25kOiBcImZmZWJjZFwiLFxuICAgIGJsdWU6IFwiMDBmXCIsXG4gICAgYmx1ZXZpb2xldDogXCI4YTJiZTJcIixcbiAgICBicm93bjogXCJhNTJhMmFcIixcbiAgICBidXJseXdvb2Q6IFwiZGViODg3XCIsXG4gICAgYnVybnRzaWVubmE6IFwiZWE3ZTVkXCIsXG4gICAgY2FkZXRibHVlOiBcIjVmOWVhMFwiLFxuICAgIGNoYXJ0cmV1c2U6IFwiN2ZmZjAwXCIsXG4gICAgY2hvY29sYXRlOiBcImQyNjkxZVwiLFxuICAgIGNvcmFsOiBcImZmN2Y1MFwiLFxuICAgIGNvcm5mbG93ZXJibHVlOiBcIjY0OTVlZFwiLFxuICAgIGNvcm5zaWxrOiBcImZmZjhkY1wiLFxuICAgIGNyaW1zb246IFwiZGMxNDNjXCIsXG4gICAgY3lhbjogXCIwZmZcIixcbiAgICBkYXJrYmx1ZTogXCIwMDAwOGJcIixcbiAgICBkYXJrY3lhbjogXCIwMDhiOGJcIixcbiAgICBkYXJrZ29sZGVucm9kOiBcImI4ODYwYlwiLFxuICAgIGRhcmtncmF5OiBcImE5YTlhOVwiLFxuICAgIGRhcmtncmVlbjogXCIwMDY0MDBcIixcbiAgICBkYXJrZ3JleTogXCJhOWE5YTlcIixcbiAgICBkYXJra2hha2k6IFwiYmRiNzZiXCIsXG4gICAgZGFya21hZ2VudGE6IFwiOGIwMDhiXCIsXG4gICAgZGFya29saXZlZ3JlZW46IFwiNTU2YjJmXCIsXG4gICAgZGFya29yYW5nZTogXCJmZjhjMDBcIixcbiAgICBkYXJrb3JjaGlkOiBcIjk5MzJjY1wiLFxuICAgIGRhcmtyZWQ6IFwiOGIwMDAwXCIsXG4gICAgZGFya3NhbG1vbjogXCJlOTk2N2FcIixcbiAgICBkYXJrc2VhZ3JlZW46IFwiOGZiYzhmXCIsXG4gICAgZGFya3NsYXRlYmx1ZTogXCI0ODNkOGJcIixcbiAgICBkYXJrc2xhdGVncmF5OiBcIjJmNGY0ZlwiLFxuICAgIGRhcmtzbGF0ZWdyZXk6IFwiMmY0ZjRmXCIsXG4gICAgZGFya3R1cnF1b2lzZTogXCIwMGNlZDFcIixcbiAgICBkYXJrdmlvbGV0OiBcIjk0MDBkM1wiLFxuICAgIGRlZXBwaW5rOiBcImZmMTQ5M1wiLFxuICAgIGRlZXBza3libHVlOiBcIjAwYmZmZlwiLFxuICAgIGRpbWdyYXk6IFwiNjk2OTY5XCIsXG4gICAgZGltZ3JleTogXCI2OTY5NjlcIixcbiAgICBkb2RnZXJibHVlOiBcIjFlOTBmZlwiLFxuICAgIGZpcmVicmljazogXCJiMjIyMjJcIixcbiAgICBmbG9yYWx3aGl0ZTogXCJmZmZhZjBcIixcbiAgICBmb3Jlc3RncmVlbjogXCIyMjhiMjJcIixcbiAgICBmdWNoc2lhOiBcImYwZlwiLFxuICAgIGdhaW5zYm9ybzogXCJkY2RjZGNcIixcbiAgICBnaG9zdHdoaXRlOiBcImY4ZjhmZlwiLFxuICAgIGdvbGQ6IFwiZmZkNzAwXCIsXG4gICAgZ29sZGVucm9kOiBcImRhYTUyMFwiLFxuICAgIGdyYXk6IFwiODA4MDgwXCIsXG4gICAgZ3JlZW46IFwiMDA4MDAwXCIsXG4gICAgZ3JlZW55ZWxsb3c6IFwiYWRmZjJmXCIsXG4gICAgZ3JleTogXCI4MDgwODBcIixcbiAgICBob25leWRldzogXCJmMGZmZjBcIixcbiAgICBob3RwaW5rOiBcImZmNjliNFwiLFxuICAgIGluZGlhbnJlZDogXCJjZDVjNWNcIixcbiAgICBpbmRpZ286IFwiNGIwMDgyXCIsXG4gICAgaXZvcnk6IFwiZmZmZmYwXCIsXG4gICAga2hha2k6IFwiZjBlNjhjXCIsXG4gICAgbGF2ZW5kZXI6IFwiZTZlNmZhXCIsXG4gICAgbGF2ZW5kZXJibHVzaDogXCJmZmYwZjVcIixcbiAgICBsYXduZ3JlZW46IFwiN2NmYzAwXCIsXG4gICAgbGVtb25jaGlmZm9uOiBcImZmZmFjZFwiLFxuICAgIGxpZ2h0Ymx1ZTogXCJhZGQ4ZTZcIixcbiAgICBsaWdodGNvcmFsOiBcImYwODA4MFwiLFxuICAgIGxpZ2h0Y3lhbjogXCJlMGZmZmZcIixcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogXCJmYWZhZDJcIixcbiAgICBsaWdodGdyYXk6IFwiZDNkM2QzXCIsXG4gICAgbGlnaHRncmVlbjogXCI5MGVlOTBcIixcbiAgICBsaWdodGdyZXk6IFwiZDNkM2QzXCIsXG4gICAgbGlnaHRwaW5rOiBcImZmYjZjMVwiLFxuICAgIGxpZ2h0c2FsbW9uOiBcImZmYTA3YVwiLFxuICAgIGxpZ2h0c2VhZ3JlZW46IFwiMjBiMmFhXCIsXG4gICAgbGlnaHRza3libHVlOiBcIjg3Y2VmYVwiLFxuICAgIGxpZ2h0c2xhdGVncmF5OiBcIjc4OVwiLFxuICAgIGxpZ2h0c2xhdGVncmV5OiBcIjc4OVwiLFxuICAgIGxpZ2h0c3RlZWxibHVlOiBcImIwYzRkZVwiLFxuICAgIGxpZ2h0eWVsbG93OiBcImZmZmZlMFwiLFxuICAgIGxpbWU6IFwiMGYwXCIsXG4gICAgbGltZWdyZWVuOiBcIjMyY2QzMlwiLFxuICAgIGxpbmVuOiBcImZhZjBlNlwiLFxuICAgIG1hZ2VudGE6IFwiZjBmXCIsXG4gICAgbWFyb29uOiBcIjgwMDAwMFwiLFxuICAgIG1lZGl1bWFxdWFtYXJpbmU6IFwiNjZjZGFhXCIsXG4gICAgbWVkaXVtYmx1ZTogXCIwMDAwY2RcIixcbiAgICBtZWRpdW1vcmNoaWQ6IFwiYmE1NWQzXCIsXG4gICAgbWVkaXVtcHVycGxlOiBcIjkzNzBkYlwiLFxuICAgIG1lZGl1bXNlYWdyZWVuOiBcIjNjYjM3MVwiLFxuICAgIG1lZGl1bXNsYXRlYmx1ZTogXCI3YjY4ZWVcIixcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogXCIwMGZhOWFcIixcbiAgICBtZWRpdW10dXJxdW9pc2U6IFwiNDhkMWNjXCIsXG4gICAgbWVkaXVtdmlvbGV0cmVkOiBcImM3MTU4NVwiLFxuICAgIG1pZG5pZ2h0Ymx1ZTogXCIxOTE5NzBcIixcbiAgICBtaW50Y3JlYW06IFwiZjVmZmZhXCIsXG4gICAgbWlzdHlyb3NlOiBcImZmZTRlMVwiLFxuICAgIG1vY2Nhc2luOiBcImZmZTRiNVwiLFxuICAgIG5hdmFqb3doaXRlOiBcImZmZGVhZFwiLFxuICAgIG5hdnk6IFwiMDAwMDgwXCIsXG4gICAgb2xkbGFjZTogXCJmZGY1ZTZcIixcbiAgICBvbGl2ZTogXCI4MDgwMDBcIixcbiAgICBvbGl2ZWRyYWI6IFwiNmI4ZTIzXCIsXG4gICAgb3JhbmdlOiBcImZmYTUwMFwiLFxuICAgIG9yYW5nZXJlZDogXCJmZjQ1MDBcIixcbiAgICBvcmNoaWQ6IFwiZGE3MGQ2XCIsXG4gICAgcGFsZWdvbGRlbnJvZDogXCJlZWU4YWFcIixcbiAgICBwYWxlZ3JlZW46IFwiOThmYjk4XCIsXG4gICAgcGFsZXR1cnF1b2lzZTogXCJhZmVlZWVcIixcbiAgICBwYWxldmlvbGV0cmVkOiBcImRiNzA5M1wiLFxuICAgIHBhcGF5YXdoaXA6IFwiZmZlZmQ1XCIsXG4gICAgcGVhY2hwdWZmOiBcImZmZGFiOVwiLFxuICAgIHBlcnU6IFwiY2Q4NTNmXCIsXG4gICAgcGluazogXCJmZmMwY2JcIixcbiAgICBwbHVtOiBcImRkYTBkZFwiLFxuICAgIHBvd2RlcmJsdWU6IFwiYjBlMGU2XCIsXG4gICAgcHVycGxlOiBcIjgwMDA4MFwiLFxuICAgIHJlYmVjY2FwdXJwbGU6IFwiNjYzMzk5XCIsXG4gICAgcmVkOiBcImYwMFwiLFxuICAgIHJvc3licm93bjogXCJiYzhmOGZcIixcbiAgICByb3lhbGJsdWU6IFwiNDE2OWUxXCIsXG4gICAgc2FkZGxlYnJvd246IFwiOGI0NTEzXCIsXG4gICAgc2FsbW9uOiBcImZhODA3MlwiLFxuICAgIHNhbmR5YnJvd246IFwiZjRhNDYwXCIsXG4gICAgc2VhZ3JlZW46IFwiMmU4YjU3XCIsXG4gICAgc2Vhc2hlbGw6IFwiZmZmNWVlXCIsXG4gICAgc2llbm5hOiBcImEwNTIyZFwiLFxuICAgIHNpbHZlcjogXCJjMGMwYzBcIixcbiAgICBza3libHVlOiBcIjg3Y2VlYlwiLFxuICAgIHNsYXRlYmx1ZTogXCI2YTVhY2RcIixcbiAgICBzbGF0ZWdyYXk6IFwiNzA4MDkwXCIsXG4gICAgc2xhdGVncmV5OiBcIjcwODA5MFwiLFxuICAgIHNub3c6IFwiZmZmYWZhXCIsXG4gICAgc3ByaW5nZ3JlZW46IFwiMDBmZjdmXCIsXG4gICAgc3RlZWxibHVlOiBcIjQ2ODJiNFwiLFxuICAgIHRhbjogXCJkMmI0OGNcIixcbiAgICB0ZWFsOiBcIjAwODA4MFwiLFxuICAgIHRoaXN0bGU6IFwiZDhiZmQ4XCIsXG4gICAgdG9tYXRvOiBcImZmNjM0N1wiLFxuICAgIHR1cnF1b2lzZTogXCI0MGUwZDBcIixcbiAgICB2aW9sZXQ6IFwiZWU4MmVlXCIsXG4gICAgd2hlYXQ6IFwiZjVkZWIzXCIsXG4gICAgd2hpdGU6IFwiZmZmXCIsXG4gICAgd2hpdGVzbW9rZTogXCJmNWY1ZjVcIixcbiAgICB5ZWxsb3c6IFwiZmYwXCIsXG4gICAgeWVsbG93Z3JlZW46IFwiOWFjZDMyXCJcbn07XG5cbi8vIE1ha2UgaXQgZWFzeSB0byBhY2Nlc3MgY29sb3JzIHZpYSBgaGV4TmFtZXNbaGV4XWBcbnZhciBoZXhOYW1lcyA9IHRpbnljb2xvci5oZXhOYW1lcyA9IGZsaXAobmFtZXMpO1xuXG5cbi8vIFV0aWxpdGllc1xuLy8gLS0tLS0tLS0tXG5cbi8vIGB7ICduYW1lMSc6ICd2YWwxJyB9YCBiZWNvbWVzIGB7ICd2YWwxJzogJ25hbWUxJyB9YFxuZnVuY3Rpb24gZmxpcChvKSB7XG4gICAgdmFyIGZsaXBwZWQgPSB7IH07XG4gICAgZm9yICh2YXIgaSBpbiBvKSB7XG4gICAgICAgIGlmIChvLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBmbGlwcGVkW29baV1dID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmxpcHBlZDtcbn1cblxuLy8gUmV0dXJuIGEgdmFsaWQgYWxwaGEgdmFsdWUgWzAsMV0gd2l0aCBhbGwgaW52YWxpZCB2YWx1ZXMgYmVpbmcgc2V0IHRvIDFcbmZ1bmN0aW9uIGJvdW5kQWxwaGEoYSkge1xuICAgIGEgPSBwYXJzZUZsb2F0KGEpO1xuXG4gICAgaWYgKGlzTmFOKGEpIHx8IGEgPCAwIHx8IGEgPiAxKSB7XG4gICAgICAgIGEgPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xufVxuXG4vLyBUYWtlIGlucHV0IGZyb20gWzAsIG5dIGFuZCByZXR1cm4gaXQgYXMgWzAsIDFdXG5mdW5jdGlvbiBib3VuZDAxKG4sIG1heCkge1xuICAgIGlmIChpc09uZVBvaW50WmVybyhuKSkgeyBuID0gXCIxMDAlXCI7IH1cblxuICAgIHZhciBwcm9jZXNzUGVyY2VudCA9IGlzUGVyY2VudGFnZShuKTtcbiAgICBuID0gbWF0aE1pbihtYXgsIG1hdGhNYXgoMCwgcGFyc2VGbG9hdChuKSkpO1xuXG4gICAgLy8gQXV0b21hdGljYWxseSBjb252ZXJ0IHBlcmNlbnRhZ2UgaW50byBudW1iZXJcbiAgICBpZiAocHJvY2Vzc1BlcmNlbnQpIHtcbiAgICAgICAgbiA9IHBhcnNlSW50KG4gKiBtYXgsIDEwKSAvIDEwMDtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzXG4gICAgaWYgKChNYXRoLmFicyhuIC0gbWF4KSA8IDAuMDAwMDAxKSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IGludG8gWzAsIDFdIHJhbmdlIGlmIGl0IGlzbid0IGFscmVhZHlcbiAgICByZXR1cm4gKG4gJSBtYXgpIC8gcGFyc2VGbG9hdChtYXgpO1xufVxuXG4vLyBGb3JjZSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDFcbmZ1bmN0aW9uIGNsYW1wMDEodmFsKSB7XG4gICAgcmV0dXJuIG1hdGhNaW4oMSwgbWF0aE1heCgwLCB2YWwpKTtcbn1cblxuLy8gUGFyc2UgYSBiYXNlLTE2IGhleCB2YWx1ZSBpbnRvIGEgYmFzZS0xMCBpbnRlZ2VyXG5mdW5jdGlvbiBwYXJzZUludEZyb21IZXgodmFsKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTYpO1xufVxuXG4vLyBOZWVkIHRvIGhhbmRsZSAxLjAgYXMgMTAwJSwgc2luY2Ugb25jZSBpdCBpcyBhIG51bWJlciwgdGhlcmUgaXMgbm8gZGlmZmVyZW5jZSBiZXR3ZWVuIGl0IGFuZCAxXG4vLyA8aHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83NDIyMDcyL2phdmFzY3JpcHQtaG93LXRvLWRldGVjdC1udW1iZXItYXMtYS1kZWNpbWFsLWluY2x1ZGluZy0xLTA+XG5mdW5jdGlvbiBpc09uZVBvaW50WmVybyhuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuID09IFwic3RyaW5nXCIgJiYgbi5pbmRleE9mKCcuJykgIT0gLTEgJiYgcGFyc2VGbG9hdChuKSA9PT0gMTtcbn1cblxuLy8gQ2hlY2sgdG8gc2VlIGlmIHN0cmluZyBwYXNzZWQgaW4gaXMgYSBwZXJjZW50YWdlXG5mdW5jdGlvbiBpc1BlcmNlbnRhZ2Uobikge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIiAmJiBuLmluZGV4T2YoJyUnKSAhPSAtMTtcbn1cblxuLy8gRm9yY2UgYSBoZXggdmFsdWUgdG8gaGF2ZSAyIGNoYXJhY3RlcnNcbmZ1bmN0aW9uIHBhZDIoYykge1xuICAgIHJldHVybiBjLmxlbmd0aCA9PSAxID8gJzAnICsgYyA6ICcnICsgYztcbn1cblxuLy8gUmVwbGFjZSBhIGRlY2ltYWwgd2l0aCBpdCdzIHBlcmNlbnRhZ2UgdmFsdWVcbmZ1bmN0aW9uIGNvbnZlcnRUb1BlcmNlbnRhZ2Uobikge1xuICAgIGlmIChuIDw9IDEpIHtcbiAgICAgICAgbiA9IChuICogMTAwKSArIFwiJVwiO1xuICAgIH1cblxuICAgIHJldHVybiBuO1xufVxuXG4vLyBDb252ZXJ0cyBhIGRlY2ltYWwgdG8gYSBoZXggdmFsdWVcbmZ1bmN0aW9uIGNvbnZlcnREZWNpbWFsVG9IZXgoZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZCkgKiAyNTUpLnRvU3RyaW5nKDE2KTtcbn1cbi8vIENvbnZlcnRzIGEgaGV4IHZhbHVlIHRvIGEgZGVjaW1hbFxuZnVuY3Rpb24gY29udmVydEhleFRvRGVjaW1hbChoKSB7XG4gICAgcmV0dXJuIChwYXJzZUludEZyb21IZXgoaCkgLyAyNTUpO1xufVxuXG52YXIgbWF0Y2hlcnMgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyA8aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy12YWx1ZXMvI2ludGVnZXJzPlxuICAgIHZhciBDU1NfSU5URUdFUiA9IFwiWy1cXFxcK10/XFxcXGQrJT9cIjtcblxuICAgIC8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXZhbHVlcy8jbnVtYmVyLXZhbHVlPlxuICAgIHZhciBDU1NfTlVNQkVSID0gXCJbLVxcXFwrXT9cXFxcZCpcXFxcLlxcXFxkKyU/XCI7XG5cbiAgICAvLyBBbGxvdyBwb3NpdGl2ZS9uZWdhdGl2ZSBpbnRlZ2VyL251bWJlci4gIERvbid0IGNhcHR1cmUgdGhlIGVpdGhlci9vciwganVzdCB0aGUgZW50aXJlIG91dGNvbWUuXG4gICAgdmFyIENTU19VTklUID0gXCIoPzpcIiArIENTU19OVU1CRVIgKyBcIil8KD86XCIgKyBDU1NfSU5URUdFUiArIFwiKVwiO1xuXG4gICAgLy8gQWN0dWFsIG1hdGNoaW5nLlxuICAgIC8vIFBhcmVudGhlc2VzIGFuZCBjb21tYXMgYXJlIG9wdGlvbmFsLCBidXQgbm90IHJlcXVpcmVkLlxuICAgIC8vIFdoaXRlc3BhY2UgY2FuIHRha2UgdGhlIHBsYWNlIG9mIGNvbW1hcyBvciBvcGVuaW5nIHBhcmVuXG4gICAgdmFyIFBFUk1JU1NJVkVfTUFUQ0gzID0gXCJbXFxcXHN8XFxcXChdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpXFxcXHMqXFxcXCk/XCI7XG4gICAgdmFyIFBFUk1JU1NJVkVfTUFUQ0g0ID0gXCJbXFxcXHN8XFxcXChdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpXFxcXHMqXFxcXCk/XCI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBDU1NfVU5JVDogbmV3IFJlZ0V4cChDU1NfVU5JVCksXG4gICAgICAgIHJnYjogbmV3IFJlZ0V4cChcInJnYlwiICsgUEVSTUlTU0lWRV9NQVRDSDMpLFxuICAgICAgICByZ2JhOiBuZXcgUmVnRXhwKFwicmdiYVwiICsgUEVSTUlTU0lWRV9NQVRDSDQpLFxuICAgICAgICBoc2w6IG5ldyBSZWdFeHAoXCJoc2xcIiArIFBFUk1JU1NJVkVfTUFUQ0gzKSxcbiAgICAgICAgaHNsYTogbmV3IFJlZ0V4cChcImhzbGFcIiArIFBFUk1JU1NJVkVfTUFUQ0g0KSxcbiAgICAgICAgaHN2OiBuZXcgUmVnRXhwKFwiaHN2XCIgKyBQRVJNSVNTSVZFX01BVENIMyksXG4gICAgICAgIGhzdmE6IG5ldyBSZWdFeHAoXCJoc3ZhXCIgKyBQRVJNSVNTSVZFX01BVENINCksXG4gICAgICAgIGhleDM6IC9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxcbiAgICAgICAgaGV4NjogL14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLFxuICAgICAgICBoZXg0OiAvXiM/KFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLFxuICAgICAgICBoZXg4OiAvXiM/KFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvXG4gICAgfTtcbn0pKCk7XG5cbi8vIGBpc1ZhbGlkQ1NTVW5pdGBcbi8vIFRha2UgaW4gYSBzaW5nbGUgc3RyaW5nIC8gbnVtYmVyIGFuZCBjaGVjayB0byBzZWUgaWYgaXQgbG9va3MgbGlrZSBhIENTUyB1bml0XG4vLyAoc2VlIGBtYXRjaGVyc2AgYWJvdmUgZm9yIGRlZmluaXRpb24pLlxuZnVuY3Rpb24gaXNWYWxpZENTU1VuaXQoY29sb3IpIHtcbiAgICByZXR1cm4gISFtYXRjaGVycy5DU1NfVU5JVC5leGVjKGNvbG9yKTtcbn1cblxuLy8gYHN0cmluZ0lucHV0VG9PYmplY3RgXG4vLyBQZXJtaXNzaXZlIHN0cmluZyBwYXJzaW5nLiAgVGFrZSBpbiBhIG51bWJlciBvZiBmb3JtYXRzLCBhbmQgb3V0cHV0IGFuIG9iamVjdFxuLy8gYmFzZWQgb24gZGV0ZWN0ZWQgZm9ybWF0LiAgUmV0dXJucyBgeyByLCBnLCBiIH1gIG9yIGB7IGgsIHMsIGwgfWAgb3IgYHsgaCwgcywgdn1gXG5mdW5jdGlvbiBzdHJpbmdJbnB1dFRvT2JqZWN0KGNvbG9yKSB7XG5cbiAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UodHJpbUxlZnQsJycpLnJlcGxhY2UodHJpbVJpZ2h0LCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgbmFtZWQgPSBmYWxzZTtcbiAgICBpZiAobmFtZXNbY29sb3JdKSB7XG4gICAgICAgIGNvbG9yID0gbmFtZXNbY29sb3JdO1xuICAgICAgICBuYW1lZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbG9yID09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogMCwgZzogMCwgYjogMCwgYTogMCwgZm9ybWF0OiBcIm5hbWVcIiB9O1xuICAgIH1cblxuICAgIC8vIFRyeSB0byBtYXRjaCBzdHJpbmcgaW5wdXQgdXNpbmcgcmVndWxhciBleHByZXNzaW9ucy5cbiAgICAvLyBLZWVwIG1vc3Qgb2YgdGhlIG51bWJlciBib3VuZGluZyBvdXQgb2YgdGhpcyBmdW5jdGlvbiAtIGRvbid0IHdvcnJ5IGFib3V0IFswLDFdIG9yIFswLDEwMF0gb3IgWzAsMzYwXVxuICAgIC8vIEp1c3QgcmV0dXJuIGFuIG9iamVjdCBhbmQgbGV0IHRoZSBjb252ZXJzaW9uIGZ1bmN0aW9ucyBoYW5kbGUgdGhhdC5cbiAgICAvLyBUaGlzIHdheSB0aGUgcmVzdWx0IHdpbGwgYmUgdGhlIHNhbWUgd2hldGhlciB0aGUgdGlueWNvbG9yIGlzIGluaXRpYWxpemVkIHdpdGggc3RyaW5nIG9yIG9iamVjdC5cbiAgICB2YXIgbWF0Y2g7XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLnJnYi5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogbWF0Y2hbMV0sIGc6IG1hdGNoWzJdLCBiOiBtYXRjaFszXSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMucmdiYS5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogbWF0Y2hbMV0sIGc6IG1hdGNoWzJdLCBiOiBtYXRjaFszXSwgYTogbWF0Y2hbNF0gfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhzbC5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgaDogbWF0Y2hbMV0sIHM6IG1hdGNoWzJdLCBsOiBtYXRjaFszXSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaHNsYS5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgaDogbWF0Y2hbMV0sIHM6IG1hdGNoWzJdLCBsOiBtYXRjaFszXSwgYTogbWF0Y2hbNF0gfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhzdi5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgaDogbWF0Y2hbMV0sIHM6IG1hdGNoWzJdLCB2OiBtYXRjaFszXSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaHN2YS5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgaDogbWF0Y2hbMV0sIHM6IG1hdGNoWzJdLCB2OiBtYXRjaFszXSwgYTogbWF0Y2hbNF0gfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhleDguZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0pLFxuICAgICAgICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSksXG4gICAgICAgICAgICBhOiBjb252ZXJ0SGV4VG9EZWNpbWFsKG1hdGNoWzRdKSxcbiAgICAgICAgICAgIGZvcm1hdDogbmFtZWQgPyBcIm5hbWVcIiA6IFwiaGV4OFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oZXg2LmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzFdKSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSksXG4gICAgICAgICAgICBiOiBwYXJzZUludEZyb21IZXgobWF0Y2hbM10pLFxuICAgICAgICAgICAgZm9ybWF0OiBuYW1lZCA/IFwibmFtZVwiIDogXCJoZXhcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaGV4NC5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSArICcnICsgbWF0Y2hbMV0pLFxuICAgICAgICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdICsgJycgKyBtYXRjaFsyXSksXG4gICAgICAgICAgICBiOiBwYXJzZUludEZyb21IZXgobWF0Y2hbM10gKyAnJyArIG1hdGNoWzNdKSxcbiAgICAgICAgICAgIGE6IGNvbnZlcnRIZXhUb0RlY2ltYWwobWF0Y2hbNF0gKyAnJyArIG1hdGNoWzRdKSxcbiAgICAgICAgICAgIGZvcm1hdDogbmFtZWQgPyBcIm5hbWVcIiA6IFwiaGV4OFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oZXgzLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzFdICsgJycgKyBtYXRjaFsxXSksXG4gICAgICAgICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0gKyAnJyArIG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSArICcnICsgbWF0Y2hbM10pLFxuICAgICAgICAgICAgZm9ybWF0OiBuYW1lZCA/IFwibmFtZVwiIDogXCJoZXhcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXQ0FHMlBhcm1zKHBhcm1zKSB7XG4gICAgLy8gcmV0dXJuIHZhbGlkIFdDQUcyIHBhcm1zIGZvciBpc1JlYWRhYmxlLlxuICAgIC8vIElmIGlucHV0IHBhcm1zIGFyZSBpbnZhbGlkLCByZXR1cm4ge1wibGV2ZWxcIjpcIkFBXCIsIFwic2l6ZVwiOlwic21hbGxcIn1cbiAgICB2YXIgbGV2ZWwsIHNpemU7XG4gICAgcGFybXMgPSBwYXJtcyB8fCB7XCJsZXZlbFwiOlwiQUFcIiwgXCJzaXplXCI6XCJzbWFsbFwifTtcbiAgICBsZXZlbCA9IChwYXJtcy5sZXZlbCB8fCBcIkFBXCIpLnRvVXBwZXJDYXNlKCk7XG4gICAgc2l6ZSA9IChwYXJtcy5zaXplIHx8IFwic21hbGxcIikudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobGV2ZWwgIT09IFwiQUFcIiAmJiBsZXZlbCAhPT0gXCJBQUFcIikge1xuICAgICAgICBsZXZlbCA9IFwiQUFcIjtcbiAgICB9XG4gICAgaWYgKHNpemUgIT09IFwic21hbGxcIiAmJiBzaXplICE9PSBcImxhcmdlXCIpIHtcbiAgICAgICAgc2l6ZSA9IFwic21hbGxcIjtcbiAgICB9XG4gICAgcmV0dXJuIHtcImxldmVsXCI6bGV2ZWwsIFwic2l6ZVwiOnNpemV9O1xufVxuXG4vLyBOb2RlOiBFeHBvcnQgZnVuY3Rpb25cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB0aW55Y29sb3I7XG59XG4vLyBBTUQvcmVxdWlyZWpzOiBEZWZpbmUgdGhlIG1vZHVsZVxuZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtyZXR1cm4gdGlueWNvbG9yO30pO1xufVxuLy8gQnJvd3NlcjogRXhwb3NlIHRvIHdpbmRvd1xuZWxzZSB7XG4gICAgd2luZG93LnRpbnljb2xvciA9IHRpbnljb2xvcjtcbn1cblxufSkoTWF0aCk7XG4iLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHtcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFBhdGgsXG5cdFNWRyxcblx0UmVjdCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7Y3JlYXRlQmxvY2t9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCB7SW5zcGVjdG9yQ29udHJvbHMsSW5uZXJCbG9ja3N9IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcbmltcG9ydCB7c2VsZWN0fSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdnZWNrby9ncmlkLWxheW91dC1iYXNpYyc7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnQmFzaWMnICksXG5cblx0cGFyZW50OiBbJ2dlY2tvL2dyaWQtbGF5b3V0J10sXG5cblx0aWNvbjogPFNWRyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxQYXRoIGQ9XCJNMCwwaDI0djI0SDBWMHogTTAsMGgyNHYyNEgwVjB6XCIgZmlsbD1cIm5vbmVcIiAvPjxQYXRoIGQ9XCJtMjAgN3YxMGgtMTZ2LTEwaDE2bTAtMmgtMTZjLTEuMSAwLTEuOTkgMC45LTEuOTkgMmwtMC4wMSAxMGMwIDEuMSAwLjkgMiAyIDJoMTZjMS4xIDAgMi0wLjkgMi0ydi0xMGMwLTEuMS0wLjktMi0yLTJ6XCIgLz48UmVjdCB4PVwiMTFcIiB5PVwiOFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjxSZWN0IHg9XCIxMVwiIHk9XCIxMVwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjxSZWN0IHg9XCI4XCIgeT1cIjhcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIyXCIgLz48UmVjdCB4PVwiOFwiIHk9XCIxMVwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjxSZWN0IHg9XCI1XCIgeT1cIjExXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMlwiIC8+PFJlY3QgeD1cIjVcIiB5PVwiOFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjxSZWN0IHg9XCI4XCIgeT1cIjE0XCIgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMlwiIC8+PFJlY3QgeD1cIjE0XCIgeT1cIjExXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMlwiIC8+PFJlY3QgeD1cIjE0XCIgeT1cIjhcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIyXCIgLz48UmVjdCB4PVwiMTdcIiB5PVwiMTFcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIyXCIgLz48UmVjdCB4PVwiMTdcIiB5PVwiOFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjwvU1ZHPixcblxuXHRkZXNjcmlwdGlvbjogX18oICdBbiBpbWFnZSBncmlkIGJsb2NrLicgKSxcblxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0c3VwcG9ydHM6IHtcblx0XHRjbGFzc05hbWU6IHRydWUsXG5cdFx0aW5zZXJ0ZXI6IHRydWUsXG5cdFx0cmV1c2FibGU6IGZhbHNlLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdHN0eWxlczogW1xuXHRcdHsgbmFtZTogJ2RlZmF1bHQnLCBsYWJlbDogX18oICdEZWZhdWx0JyksIGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHRdLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRoOiB7IHR5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAxfSxcblx0XHR3OiB7IHR5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAxfSxcblx0fSxcblxuXHR0cmFuc2Zvcm1zOiB7XG5cdFx0ZnJvbTogW1xuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0XHRibG9ja3M6IFsnZ2Vja28vZ3JpZC1sYXlvdXQtaW1hZ2UnLCAnZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbSddLFxuXHRcdFx0XHR0cmFuc2Zvcm06IChhdHRyaWJ1dGVzLCBpbm5lckJsb2NrcykgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldFNlbGVjdGVkQmxvY2soKTsgLy8gYmVjYXVzZSBpbm5lckJsb2NrcyBkb2VzIG5vdCB3b3JrLlxuXHRcdFx0XHRcdC8vIEl0IGFwcGVhcnMgdGhhdCBpbm5lckJsb2NrcyB3aWxsIGJlIGFkZGVkIGluIHRoZSBmdXR1cmUuXG5cdFx0XHRcdFx0Y29uc3Qge2gsIHd9ID0gYXR0cmlidXRlcztcblx0XHRcdFx0XHRyZXR1cm4gY3JlYXRlQmxvY2soJ2dlY2tvL2dyaWQtbGF5b3V0LWJhc2ljJywge1xuXHRcdFx0XHRcdFx0aDogaCxcblx0XHRcdFx0XHRcdHc6IHcsXG5cdFx0XHRcdFx0fSwgc2VsZWN0ZWQuaW5uZXJCbG9ja3MpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcdFxuXHRcdF0sXG5cdH0sXG5cblx0ZGVwcmVjYXRlZDogW3tcblx0XHRtaWdyYXRlKCkge30sXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudCAvID4gO1xuXHRcdH0sXG5cdH1dLFxuXG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGluc2VydEJsb2Nrc0FmdGVyIH0pIHtcblx0XHRjb25zdCB7XG5cdFx0XHRoLFxuXHRcdFx0dyxcblx0XHR9ID0gYXR0cmlidXRlcztcblx0XHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0XHRncmlkQ29sdW1uRW5kOiAnc3BhbiAnKyB3LFxuXHRcdFx0Z3JpZFJvd0VuZDogJ3NwYW4gJyArIGgsXG5cdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIkdyaWQgSXRlbVwiPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnV2lkdGgnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHcgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3OiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyAxMiB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3BhbiBSb3dzJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBoIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0aDogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMTIgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BnZWNrby1ncmlkLWxheW91dC1lZGl0b3Itc3R5bGVzYH0gc3R5bGU9e3N0eWxlc30+PC9kaXY+XG5cdFx0XHRcdDxkaXYgIGNsYXNzTmFtZT17YHdwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcl9fd3JhcCBnZWNrby1ncmlkLWxheW91dC1iYXNpYyAke2F0dHJpYnV0ZXMuY2xhc3NOYW1lfWB9PlxuXHRcdFx0XHRcdHsgdHlwZW9mIGluc2VydEJsb2Nrc0FmdGVyID09PSAnZnVuY3Rpb24nIC8vVGhpcyBsaW5lIG1ha2VzIHN1cmUgc3R5bGVzIGRvIG5vdCBicmVha1xuXHRcdFx0XHRcdFx0PyA8SW5uZXJCbG9ja3MgdGVtcGxhdGVMb2NrPXsgZmFsc2UgfS8+XG5cdFx0XHRcdFx0XHQ6IDxwPkxvcmVtIElwc3VtPC9wPiAvLyBUaGlzIGlzIHdoYXQgc2hvd3MgYXMgdGhlIHByZXZpZXcgY29udGVudC5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9LFxuXG5cdHNhdmUoKSB7XG5cdFx0Ly8gSG9uZXN0bHkgSSBkb24ndCB3YW50IHRvIGRvIHRoaXMgYnV0IGNvbnZlbnRpb25zIGFyZSBjb252ZW50aW9ucy5cblx0XHRyZXR1cm4oPGRpdj48SW5uZXJCbG9ja3MuQ29udGVudCAvPjwvZGl2Pik7IFxuXHR9LFxufTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG4vLyBpbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC9kZWJvdW5jZVwiO1xuaW1wb3J0IHtcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFBhdGgsXG5cdFNWRyxcblx0SWNvbkJ1dHRvbixcblx0VG9vbGJhcixcblx0Ly8gUmVzaXphYmxlQm94LFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgY3JlYXRlQmxvY2sgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5pbXBvcnQge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5uZXJCbG9ja3MsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRCbG9ja0NvbnRyb2xzLFxufSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5pbXBvcnQge1xuXHRzZWxlY3Rcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbJ2NvcmUvcGFyYWdyYXBoJywgJ2NvcmUvaGVhZGluZycsICdjb3JlL2J1dHRvbicsICdjb3JlL2xpc3QnLCAnY29yZS9xdW90ZSddO1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdnZWNrby9ncmlkLWxheW91dC1pbWFnZSc7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnSW1hZ2UnICksXG5cblx0cGFyZW50OiBbJ2dlY2tvL2dyaWQtbGF5b3V0J10sXG5cblx0aWNvbjogPFNWRyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxQYXRoIGQ9XCJNMCwwaDI0djI0SDBWMHpcIiBmaWxsPVwibm9uZVwiIC8+PFBhdGggZD1cIm0xOSA1djE0aC0xNHYtMTRoMTRtMC0yaC0xNGMtMS4xIDAtMiAwLjktMiAydjE0YzAgMS4xIDAuOSAyIDIgMmgxNGMxLjEgMCAyLTAuOSAyLTJ2LTE0YzAtMS4xLTAuOS0yLTItMnpcIiAvPjxQYXRoIGQ9XCJtMTQuMTQgMTEuODZsLTMgMy44Ny0yLjE0LTIuNTktMyAzLjg2aDEybC0zLjg2LTUuMTR6XCIgLz48L1NWRz4sXG5cblx0ZGVzY3JpcHRpb246IF9fKCAnQW4gaW1hZ2UgR3JpZCBCbG9jay4nICksXG5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0Y2xhc3NOYW1lOiB0cnVlLFxuXHRcdGluc2VydGVyOiB0cnVlLFxuXHRcdHJldXNhYmxlOiBmYWxzZSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRzdHlsZXM6IFtcblx0XHR7IG5hbWU6ICdkZWZhdWx0JywgbGFiZWw6IF9fKCAnRGVmYXVsdCcpLCBpc0RlZmF1bHQ6IHRydWUgfSxcblx0XHR7IG5hbWU6ICdob3ZlcicsIGxhYmVsOiBfXyggJ0hvdmVyJykgfSxcblx0XHR7IG5hbWU6ICduby1jYXB0aW9uJywgbGFiZWw6IF9fKCAnTm8gQ2FwdGlvbicpIH0sXG5cdF0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdGg6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDF9LFxuXHRcdHc6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDF9LFxuXHRcdG1pbkhlaWdodDogeyB0eXBlOiAnbnVtYmVyJywgZGVmYXVsdDogMjAwLH0sXG5cdFx0aW1nSWQ6IHsgdHlwZTogJ251bWJlcid9LFxuXHRcdGltZ1VybDogeyB0eXBlOiAnc3RyaW5nJ30sXG5cdH0sXG5cblx0dHJhbnNmb3Jtczoge1xuXHRcdGZyb206IFtcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogJ2Jsb2NrJyxcblx0XHRcdFx0YmxvY2tzOiBbJ2dlY2tvL2dyaWQtbGF5b3V0LWJhc2ljJywgJ2dlY2tvL2dyaWQtbGF5b3V0LWl0ZW0nXSxcblx0XHRcdFx0dHJhbnNmb3JtOiAoYXR0cmlidXRlcywgaW5uZXJCbG9ja3MpID0+IHtcblx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9IHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRTZWxlY3RlZEJsb2NrKCk7IC8vIGJlY2F1c2UgaW5uZXJCbG9ja3MgZG9lcyBub3Qgd29yay5cblx0XHRcdFx0XHQvLyBJdCBhcHBlYXJzIHRoYXQgaW5uZXJCbG9ja3Mgd2lsbCBiZSBhZGRlZCBpbiB0aGUgZnV0dXJlLlxuXHRcdFx0XHRcdGNvbnN0IHtoLCB3LCBiZ01lZGlhLCBiZ01lZGlhVXJsLCBtZWRpYUlkLCBtZWRpYVVybCwgbWluSGVpZ2h0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJsb2NrKCdnZWNrby9ncmlkLWxheW91dC1pbWFnZScsIHtcblx0XHRcdFx0XHRcdGg6IGgsXG5cdFx0XHRcdFx0XHR3OiB3LFxuXHRcdFx0XHRcdFx0aW1nSWQ6IGJnTWVkaWEgfHwgbWVkaWFJZCxcblx0XHRcdFx0XHRcdGltZ1VybDogYmdNZWRpYVVybCB8fCBtZWRpYVVybCxcblx0XHRcdFx0XHRcdG1pbkhlaWdodDogbWluSGVpZ2h0LFxuXHRcdFx0XHRcdH0sIHNlbGVjdGVkLmlubmVyQmxvY2tzKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXHRcblx0XHRdXG5cdH0sXG5cblx0ZGVwcmVjYXRlZDogW3tcblx0XHRtaWdyYXRlKCkge30sXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudCAvID4gO1xuXHRcdH0sXG5cdH1dLFxuXG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGluc2VydEJsb2Nrc0FmdGVyLCB0b2dnbGVTZWxlY3Rpb24gfSkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGgsXG5cdFx0XHR3LFxuXHRcdFx0aW1nSWQsXG5cdFx0XHRpbWdVcmwsXG5cdFx0XHRtaW5IZWlnaHQsXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0Y29uc3Qgc3R5bGVzID0ge1xuXHRcdFx0Z3JpZENvbHVtbkVuZDogJ3NwYW4gJysgdyxcblx0XHRcdGdyaWRSb3dFbmQ6ICdzcGFuICcgKyBoLFxuXHRcdFx0bWluSGVpZ2h0OiBtaW5IZWlnaHQgKyAncHgnLFxuXHRcdH07XG5cdFx0Ly8gY29uc3Qgb25SZXNpemluZyA9IChldmVudCwgZGlyZWN0aW9uLCBlbHQsIGRlbHRhKSA9PiB7XG5cdFx0Ly8gXHRpZiAoZGlyZWN0aW9uID09PSAnYm90dG9tJykge1xuXHRcdC8vIFx0XHRjb25zdCBuZXdNaW5IZWlnaHQgPSAoZWx0LmNsaWVudEhlaWdodCA+IDYwMCkgPyA2MDAgOiBlbHQuY2xpZW50SGVpZ2h0O1xuXHRcdC8vIFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHQvLyBcdFx0XHRtaW5IZWlnaHQ6IG5ld01pbkhlaWdodCxcblx0XHQvLyBcdFx0fSk7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHRpZiAoZGlyZWN0aW9uICE9PSAncmlnaHQnKSByZXR1cm47XG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhlbHQpO1xuXHRcdC8vIFx0Y29uc3QgY29sdW1uV2lkdGggPSBNYXRoLmZsb29yKGVsdC5wYXJlbnROb2RlLm9mZnNldFdpZHRoIC8gdyk7XG5cdFx0Ly8gXHRjb25zdCBjdXJyZW50U3BhbiA9IE1hdGguZmxvb3IoZWx0LnBhcmVudE5vZGUub2Zmc2V0V2lkdGggLyBjb2x1bW5XaWR0aCk7XG5cdFx0Ly8gXHQvL2NvbnN0IGVsQ29sV2lkdGggPSBNYXRoLmZsb29yKGVsdC5vZmZzZXRXaWR0aCAvIHcpO1xuXHRcdC8vIFx0Ly9jb25zdCBzcGFucyA9IE1hdGguZmxvb3IoZWx0Lm9mZnNldFdpZHRoIC8gZWxDb2xXaWR0aCk7XG5cdFx0Ly8gXHRjb25zdCB0b1VwZGF0ZSA9IE1hdGguZmxvb3IocGFyc2VJbnQoZGVsdGEud2lkdGgsIDEwKSAvIGNvbHVtbldpZHRoKTtcblx0XHQvLyBcdGNvbnN0IG9yaWdpbmFsID0gdyAtIHRvVXBkYXRlO1xuXHRcdC8vIFx0bGV0IG5ld1dpZHRoID0gdyArIHRvVXBkYXRlO1xuXHRcdC8vIFx0Ly8gbGV0IGFkZCA9IHRydWU7XG5cdFx0Ly8gXHQvLyBpZiAoc3BhbnMgPCBuZXdXaWR0aCkge1xuXHRcdC8vIFx0Ly8gXHRhZGQgPSBmYWxzZTtcblx0XHQvLyBcdC8vIFx0bmV3V2lkdGggPSB3IC0gMTtcblx0XHQvLyBcdC8vIH1cblx0XHQvLyBcdGNvbnNvbGUubG9nKHcsIG9yaWdpbmFsLCB0b1VwZGF0ZSAsIG5ld1dpZHRoKTtcblx0XHQvLyBcdC8vIGNvbnNvbGUubG9nKCcnLCBuZXdXaWR0aCAqIGVsQ29sV2lkdGgsIG5ld1dpZHRoICogY29sdW1uV2lkdGgpO1xuXHRcdC8vIFx0Ly8gY29uc29sZS5sb2coTWF0aC5mbG9vcihwYXJzZUludChkZWx0YS53aWR0aCwgMTApIC8gY29sdW1uV2lkdGgpKTtcblx0XHQvLyBcdC8vIGNvbnNvbGUubG9nKG5ld1dpZHRoLCB3LCBwYXJzZUludChkZWx0YS53aWR0aCwgMTApLCBlbHQsIGVsdC5jbGllbnRXaWR0aCk7XG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhkZWx0YSk7XG5cdFx0Ly8gXHQvLyBjb25zdCBkaWZmID0gbmV3V2lkdGggLSBjdXJyZW50U3Bhbjtcblx0XHQvLyBcdC8vIGlmIChcblx0XHQvLyBcdC8vIFx0KGRpZmYgPT09IDEgfHwgZGlmZiA9PT0gLTEpXG5cdFx0Ly8gXHQvLyBcdC8vIChuZXdXaWR0aCAqIGVsQ29sV2lkdGggKyBjb2x1bW5XaWR0aCA8IG5ld1dpZHRoICogY29sdW1uV2lkdGgpXG5cdFx0Ly8gXHQvLyBcdCkge1xuXHRcdC8vIFx0XHRpZiAobmV3V2lkdGggPiAxMikge25ld1dpZHRoID0gMTJ9XG5cdFx0Ly8gXHRcdGlmIChuZXdXaWR0aCA8IDEpIHtuZXdXaWR0aCA9IDF9XG5cdFx0Ly8gXHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0Ly8gXHRcdFx0dzogbmV3V2lkdGgsXG5cdFx0Ly8gXHRcdH0gKTtcblx0XHQvLyBcdC8vIH1cblx0XHQvLyB9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9XCJHcmlkIEl0ZW1cIj5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbmltdW0gSGVpZ2h0JyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBtaW5IZWlnaHQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtaW5IZWlnaHQ6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluID0gXCI1MFwiXG5cdFx0XHRcdFx0XHRcdG1heCA9IFwiNjAwXCJcblx0XHRcdFx0XHRcdFx0c3RlcCA9IFwiMVwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnV2lkdGgnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHcgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3OiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyAxMiB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3BhbiBSb3dzJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBoIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0aDogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMTIgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGltZ0lkOiB2YWx1ZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdGltZ1VybDogdmFsdWUudXJsLFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHR0eXBlPXtbJ2ltYWdlJ119XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsoaW1nSWQpPyBpbWdJZDogbnVsbCB9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17KHtvcGVufSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybihcblx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtaWNvbi1idXR0b24gY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgaW1hZ2UnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvcGVufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0PC8gQmxvY2tDb250cm9scz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BnZWNrby1ncmlkLWxheW91dC1lZGl0b3Itc3R5bGVzYH0gc3R5bGU9e3N0eWxlc30+PC9kaXY+XG5cdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPXtgd3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yX193cmFwIGdlY2tvLWdyaWQtbGF5b3V0LWltYWdlICR7YXR0cmlidXRlcy5jbGFzc05hbWV9YH0+XG5cdFx0XHRcdFx0ey8qIDxSZXNpemFibGVCb3hcblx0XHRcdFx0XHRcdHNpemUgPSB7e1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvLyBtaW5IZWlnaHQgPSBcIjUwXCJcblx0XHRcdFx0XHRcdC8vIG1pbldpZHRoID0gXCIxMDAlXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IHtcblx0XHRcdFx0XHRcdFx0YHdwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcl9fd3JhcCBnZWNrby1ncmlkLWxheW91dC1pbWFnZSAke2F0dHJpYnV0ZXMuY2xhc3NOYW1lfWBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIG1pbkhlaWdodD17IG1pbkhlaWdodCB9XG5cdFx0XHRcdFx0XHQvLyBtYXhIZWlnaHQ9ezYwMH1cblx0XHRcdFx0XHRcdC8vIGxvY2tBc3BlY3RSYXRpb1xuXHRcdFx0XHRcdFx0ZW5hYmxlPXsge1xuXHRcdFx0XHRcdFx0XHR0b3A6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRyaWdodDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRsZWZ0OiBmYWxzZSxcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b25SZXNpemVTdGFydD17IChldmVudCwgZGlyZWN0aW9uLCBlbHQsIGRlbHRhKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRvZ2dsZVNlbGVjdGlvbiggZmFsc2UgKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b25SZXNpemU9eyBcdGRlYm91bmNlKG9uUmVzaXppbmcsIDI1MCkgfVxuXHRcdFx0XHRcdFx0b25SZXNpemVTdG9wPXsgKCBldmVudCwgZGlyZWN0aW9uLCBlbHQsIGRlbHRhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHQvLyBjb25zdCBjb2x1bW5XaWR0aCA9IE1hdGguZmxvb3IoZWx0LnBhcmVudE5vZGUuY2xpZW50V2lkdGggLyB3KTtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc3QgdXBkYXRlZCA9IE1hdGguZmxvb3IocGFyc2VJbnQoZGVsdGEud2lkdGgsIDEwKSAvIGNvbHVtbldpZHRoKTtcblx0XHRcdFx0XHRcdFx0aWYgKGRpcmVjdGlvbiAhPT0gJ2JvdHRvbScpIHJldHVybjtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3TWluSGVpZ2h0ID0gKGVsdC5jbGllbnRIZWlnaHQgPiA2MDApPyA2MDAgOiBlbHQuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0bWluSGVpZ2h0OiBuZXdNaW5IZWlnaHQsXG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0dG9nZ2xlU2VsZWN0aW9uKCB0cnVlICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQ+ICovfVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCFpbWdJZCAmJlxuXHRcdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZ0lkOiB2YWx1ZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nVXJsOiB2YWx1ZS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpbWdVcmwgJiZcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZ2Vja28tZ3JpZC1sYXlvdXQtaW1hZ2VfX2ltYWdlXCIgc3JjPXtpbWdVcmx9IC8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGltZ0lkICYmXG5cdFx0XHRcdFx0XHQ8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJnZWNrby1ncmlkLWxheW91dC1pbWFnZV9fY2FwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHR7IHR5cGVvZiBpbnNlcnRCbG9ja3NBZnRlciA9PT0gJ2Z1bmN0aW9uJyAvL1RoaXMgbGluZSBtYWtlcyBzdXJlIHN0eWxlcyBkbyBub3QgYnJlYWtcblx0XHRcdFx0XHRcdFx0XHQ/IDxJbm5lckJsb2NrcyB0ZW1wbGF0ZUxvY2s9eyBmYWxzZSB9IGFsbG93ZWRCbG9ja3M9e0FMTE9XRURfQkxPQ0tTfS8+XG5cdFx0XHRcdFx0XHRcdFx0OiA8cD5Mb3JlbSBJcHN1bTwvcD4gLy8gVGhpcyBpcyB3aGF0IHNob3dzIGFzIHRoZSBwcmV2aWV3IGNvbnRlbnQuXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdHsvKiA8L1Jlc2l6YWJsZUJveD4gKi99XG5cdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9LFxuXG5cdHNhdmUoKSB7XG5cdFx0Ly8gSG9uZXN0bHkgSSBkb24ndCB3YW50IHRvIGRvIHRoaXMgYnV0IGNvbnZlbnRpb25zIGFyZSBjb252ZW50aW9ucy5cblx0XHRyZXR1cm4oPGRpdj48SW5uZXJCbG9ja3MuQ29udGVudCAvPjwvZGl2Pik7IFxuXHR9LFxufTtcbiIsImltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMic7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge1xuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0UGF0aCxcblx0U1ZHLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHtjcmVhdGVCbG9ja30gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0Q29sb3JQYWxldHRlLFxuXHRnZXRDb2xvck9iamVjdEJ5Q29sb3JWYWx1ZSxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InO1xuaW1wb3J0IHtcblx0c2VsZWN0XG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgZGVwcmVjYXRlZCBmcm9tICdAd29yZHByZXNzL2RlcHJlY2F0ZWQnO1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdnZWNrby9ncmlkLWxheW91dC1pdGVtJztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oJ0l0ZW0gKGRlcHJlY2F0ZWQpJyksXG5cblx0cGFyZW50OiBbJ2dlY2tvL2dyaWQtbGF5b3V0J10sXG5cblx0aWNvbjogPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+PFBhdGggZD1cIk0xMS45OSAxOC41NGwtNy4zNy01LjczTDMgMTQuMDdsOSA3IDktNy0xLjYzLTEuMjd6TTEyIDE2bDcuMzYtNS43M0wyMSA5bC05LTctOSA3IDEuNjMgMS4yN0wxMiAxNnptMC0xMS40N0wxNy43NCA5IDEyIDEzLjQ3IDYuMjYgOSAxMiA0LjUzelwiIC8+PC9TVkc+LFxuXG5cdGRlc2NyaXB0aW9uOiBfXygnVGhpcyBibG9jayBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGJhc2ljIG9yIGltYWdlIGJsb2NrIGluc3RlYWQuJyksXG5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0aW5zZXJ0ZXI6IGZhbHNlLFxuXHR9LFxuXG5cdHN0eWxlczogW1xuXHRcdHsgbmFtZTogJ2RlZmF1bHQnLCBsYWJlbDogX18oICdEZWZhdWx0JyksIGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHRcdHsgbmFtZTogJ2hvdmVyJywgbGFiZWw6IF9fKCAnSG92ZXInKSB9LFxuXHRdLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0eXBlOnsgdHlwZTogJ3N0cmluZycsZGVmYXVsdDogdW5kZWZpbmVkLCB9LCAvL3NvbGlkLCBpbWFnZSwgaW1hZ2UtY29udGVudFxuXHRcdGg6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDEsfSxcblx0XHR3OiB7IHR5cGU6ICdudW1iZXInfSxcblx0XHRtaW5IZWlnaHQ6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDIwMCx9LFxuXHRcdG9wYWNpdHk6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDF9LFxuXHRcdGJnTWVkaWE6IHsgdHlwZTogJ251bWJlcid9LFxuXHRcdGJnTWVkaWFVcmw6IHsgdHlwZTogJ3N0cmluZyd9LFxuXHRcdGJnQ29sb3I6IHsgdHlwZTogJ3N0cmluZyd9LFxuXHRcdGJnQ29sb3JTbHVnOiB7IHR5cGU6ICdzdHJpbmcnfSxcblx0XHRiZ0NvbG9yQnJpZ2h0bmVzczoge3R5cGU6ICdudW1iZXInfSwvL2xpZ2h0IG9yIGRhcmtcblx0fSxcblxuXHRkZXByZWNhdGVkOiBbXG5cdFx0e1xuXHRcdFx0bWlncmF0ZShhdHRyaWJ1dGVzLCBpbm5lckJsb2Nrcykge1xuXHRcdFx0XHQvLyBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRTZWxlY3RlZEJsb2NrKCk7IC8vIGJlY2F1c2UgaW5uZXJCbG9ja3MgZG9lcyBub3Qgd29yay5cblx0XHRcdFx0Ly8gSXQgYXBwZWFycyB0aGF0IGlubmVyQmxvY2tzIHdpbGwgYmUgYWRkZWQgaW4gdGhlIGZ1dHVyZS5cblx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0dyxcblx0XHRcdFx0XHRiZ01lZGlhLFxuXHRcdFx0XHRcdGJnTWVkaWFVcmwsXG5cdFx0XHRcdFx0bWluSGVpZ2h0XG5cdFx0XHRcdH0gPSBhdHRyaWJ1dGVzO1xuXHRcdFx0XHRpZiAoYmdNZWRpYSkge1xuXHRcdFx0XHRcdHJldHVybiBjcmVhdGVCbG9jaygnZ2Vja28vZ3JpZC1sYXlvdXQtaW1hZ2UnLCB7XG5cdFx0XHRcdFx0XHRoOiBoLFxuXHRcdFx0XHRcdFx0dzogdyxcblx0XHRcdFx0XHRcdGltZ0lkOiBiZ01lZGlhLFxuXHRcdFx0XHRcdFx0aW1nVXJsOiBiZ01lZGlhVXJsLFxuXHRcdFx0XHRcdFx0bWluSGVpZ2h0OiBtaW5IZWlnaHQsXG5cdFx0XHRcdFx0fSwgaW5uZXJCbG9ja3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjcmVhdGVCbG9jaygnZ2Vja28vZ3JpZC1sYXlvdXQtYmFzaWMnLCB7XG5cdFx0XHRcdFx0aDogaCxcblx0XHRcdFx0XHR3OiB3LFxuXHRcdFx0XHR9LCBpbm5lckJsb2Nrcyk7XG5cdFx0XHR9LFxuXHRcdFx0c2F2ZSgpIHtcblx0XHRcdFx0cmV0dXJuKDxJbm5lckJsb2Nrcy5Db250ZW50IC8+KTtcblx0XHRcdH0sXG5cdFx0fVxuXHRdLFxuXG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGluc2VydEJsb2Nrc0FmdGVyIH0pIHtcblx0XHRjb25zdCB7XG5cdFx0XHRvcGFjaXR5LFxuXHRcdFx0aCxcblx0XHRcdHcsXG5cdFx0XHR0eXBlLFxuXHRcdFx0cGFkZGluZyxcblx0XHRcdGJnTWVkaWEsXG5cdFx0XHRiZ01lZGlhVXJsLFxuXHRcdFx0YmdDb2xvcixcblx0XHRcdGJnQ29sb3JCcmlnaHRuZXNzLFxuXHRcdFx0YmdDb2xvclNsdWcsXG5cdFx0XHRtaW5IZWlnaHQsXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0ZGVwcmVjYXRlZCgnR3JpZCBMYXlvdXQgSWRlbScsIHtcblx0XHRcdGFsdGVybmF0aXZlOiAnQmFzaWMgb3IgSW1hZ2UnLFxuXHRcdFx0cGx1Z2luOiAnR2Vja28gR3JpZCBMYXlvdXQnLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdCctLWJhY2tncm91bmQnOiBiZ0NvbG9yLFxuXHRcdFx0Jy0tb3BhY2l0eSc6IG9wYWNpdHksXG5cdFx0XHRncmlkQ29sdW1uRW5kOiAnc3BhbiAnKyB3LFxuXHRcdFx0Z3JpZFJvd0VuZDogJ3NwYW4gJyArIGgsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IsXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGJnTWVkaWFVcmwgKyAnKScsXG5cdFx0XHRtaW5IZWlnaHQ6IG1pbkhlaWdodCArICdweCcsXG5cdFx0fTtcblx0XHRsZXQgbGlnaHRPckRhcmsgPSAnbGlnaHQnO1xuXHRcdGlmIChiZ0NvbG9yQnJpZ2h0bmVzcyA8IDEzMCkgbGlnaHRPckRhcmsgPSAnZGFyayc7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgIHRpdGxlPVwiU2V0dGluZ3NcIj5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1dpZHRoJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0dzogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMTIgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1NwYW4gUm93cycgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgaCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdGg6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDEyIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIlN0eWxlXCI+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW5pbXVtIEhlaWdodCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgbWluSGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWluSGVpZ2h0OiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbiA9IFwiNTBcIlxuXHRcdFx0XHRcdFx0XHRtYXggPSBcIjYwMFwiXG5cdFx0XHRcdFx0XHRcdHN0ZXAgPSBcIjFcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHsgdHlwZSAhPT0gXCJzb2xpZFwiICYmXG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZ01lZGlhOiB2YWx1ZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmdNZWRpYVVybDogdmFsdWUudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPXtbJ2ltYWdlJywgJ3ZpZGVvJ119XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyhiZ01lZGlhKT8gYmdNZWRpYTogbnVsbCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsoe29wZW59KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2JnTWVkaWFVcmwgJiYgPGltZyBzcmM9e2JnTWVkaWFVcmx9IG9uQ2xpY2s9e29wZW59IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cImF1dG9cIiBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fS8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshYmdNZWRpYVVybCAmJiA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbiBidXR0b24tbGFyZ2UnfSBvbkNsaWNrPXtvcGVufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdENob29zZSBCYWNrZ3JvdW5kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxDb2xvclBhbGV0dGVcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdCYWNrZ3JvdW5kIENvbG9yJ1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyhiZ0NvbG9yKSA/IGJnQ29sb3IuY29sb3IgOiB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0RWRpdG9yU2V0dGluZ3MoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjb2xvclNsdWcgPSAodmFsdWUpID8gZ2V0Q29sb3JPYmplY3RCeUNvbG9yVmFsdWUoc2V0dGluZ3MuY29sb3JzLCB2YWx1ZSkuc2x1ZyA6IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtiZ0NvbG9yU2x1ZzogY29sb3JTbHVnfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgYnJpZ2h0bmVzcyA9ICh2YWx1ZSkgPyB0aW55Y29sb3IodmFsdWUpLmdldEJyaWdodG5lc3MoKTogdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2JnQ29sb3JCcmlnaHRuZXNzOiBicmlnaHRuZXNzfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7YmdDb2xvcjogdmFsdWV9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvci1zdHlsZXNgfSBzdHlsZT17c3R5bGVzfT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2B3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX3dyYXAke3R5cGV9ICR7YXR0cmlidXRlcy5jbGFzc05hbWV9IGhhcy0ke2JnQ29sb3JTbHVnfS1iYWNrZ3JvdW5kLWNvbG9yIGlzLSR7bGlnaHRPckRhcmt9LWJhY2tncm91bmRgfT5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQodHlwZSA9PT0gJ2ltYWdlJyB8fCB0eXBlID09PSAnaW1hZ2UtY29udGVudCcpICYmXG5cdFx0XHRcdFx0XHQhYmdNZWRpYSAmJlxuXHRcdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJnTWVkaWE6IHZhbHVlLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZ01lZGlhVXJsOiB2YWx1ZS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0KHR5cGVvZiBpbnNlcnRCbG9ja3NBZnRlciA9PT0gJ2Z1bmN0aW9uJykgJiYgLy9UaGlzIGxpbmUgbWFrZXMgc3VyZSBzdHlsZXMgZG8gbm90IGJyZWFrXG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3MgdGVtcGxhdGVMb2NrPXsgZmFsc2UgfSAvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fSxcblxuXHRzYXZlKCkge1xuXHRcdC8vIEhvbmVzdGx5IEkgZG9uJ3Qgd2FudCB0byBkbyB0aGlzIGJ1dCBjb252ZW50aW9ucyBhcmUgY29udmVudGlvbnMuXG5cdFx0cmV0dXJuKDxkaXY+PElubmVyQmxvY2tzLkNvbnRlbnQgLz48L2Rpdj4pO1xuXHR9LFxufTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBHLCBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgSW5uZXJCbG9ja3MgfSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHtjcmVhdGVCbG9ja30gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IFRlbXBsYXRlUGlja2VyIGZyb20gJy4vdGVtcGxhdGUtc2VsZWN0JztcblxuLyoqXG4gKiBBbGxvd2VkIGJsb2NrcyBjb25zdGFudCBpcyBwYXNzZWQgdG8gSW5uZXJCbG9ja3MgcHJlY2lzZWx5IGFzIHNwZWNpZmllZCBoZXJlLlxuICogVGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSBzaG91bGQgbmV2ZXIgY2hhbmdlLlxuICogVGhlIGFycmF5IHNob3VsZCBjb250YWluIHRoZSBuYW1lIG9mIGVhY2ggYmxvY2sgdGhhdCBpcyBhbGxvd2VkLlxuICpcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ1tdfVxuKi9cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gWydnZWNrby9ncmlkLWxheW91dC1pdGVtJywgJ2dlY2tvL2dyaWQtbGF5b3V0LWltYWdlJywgJ2dlY2tvL2dyaWQtbGF5b3V0LWJhc2ljJ107XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2dlY2tvL2dyaWQtbGF5b3V0JztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdHcmlkJyApLFxuXG5cdGljb246IDxTVkcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPjxHPjxQYXRoIGQ9XCJNNCwxMyBMOCwxMyBMOCwxMCBMNCwxMCBMNCwxMyBaIE00LDE1IEw0LDE4IEw4LDE4IEw4LDE1IEw0LDE1IFogTTEwLDEzIEwxNCwxMyBMMTQsMTAgTDEwLDEwIEwxMCwxMyBaIE0xMCwxNSBMMTAsMTggTDE0LDE4IEwxNCwxNSBMMTAsMTUgWiBNMjAsMTMgTDIwLDEwIEwxNiwxMCBMMTYsMTMgTDIwLDEzIFogTTIwLDE1IEwxNiwxNSBMMTYsMTggTDIwLDE4IEwyMCwxNSBaIE00LDggTDgsOCBMOCw1IEw0LDUgTDQsOCBaIE0xMCw4IEwxNCw4IEwxNCw1IEwxMCw1IEwxMCw4IFogTTIwLDggTDIwLDUgTDE2LDUgTDE2LDggTDIwLDggWiBNNCwzIEwyMCwzIEMyMS4xMDQ1Njk1LDMgMjIsMy45NTEzOTQ5MSAyMiw1LjEyNSBMMjIsMTcuODc1IEMyMiwxOS4wNDg2MDUxIDIxLjEwNDU2OTUsMjAgMjAsMjAgTDQsMjAgQzIuODk1NDMwNSwyMCAyLDE5LjA0ODYwNTEgMiwxNy44NzUgTDIsNS4xMjUgQzIsMy45NTEzOTQ5MSAyLjg5NTQzMDUsMyA0LDMgWlwiIC8+PC9HPjwvU1ZHPixcblxuXHRjYXRlZ29yeTogJ2xheW91dCcsXG5cblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIENTUyBHcmlkIHRvIGJ1aWxkIGxheW91dHMgYW5kLCB0aGVuIGFkZCB3aGF0ZXZlciBjb250ZW50IGJsb2NrcyB5b3XigJlkIGxpa2UuJyApLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0YWxpZ246IFsgJ3dpZGUnLCAnZnVsbCcgXSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRkZXByZWNhdGVkOiBbXG5cdFx0e1xuXHRcdFx0bWlncmF0ZSgpIHt9LFxuXHRcdFx0c2F2ZSgpIHtcblx0XHRcdFx0cmV0dXJuIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+O1xuXHRcdFx0fSxcblx0XHR9XG5cdF0sXG5cblx0dHJhbnNmb3Jtczoge1xuXHRcdGZyb206IFt7XG5cdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0YmxvY2tzOiBbJ2NvcmUvY29sdW1ucyddLFxuXHRcdFx0dHJhbnNmb3JtOiAoYXR0cmlidXRlcykgPT4ge1xuXHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9IHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRTZWxlY3RlZEJsb2NrKCk7IC8vIGJlY2F1c2UgaW5uZXJCbG9ja3MgZG9lcyBub3Qgd29yay5cblx0XHRcdFx0Y29uc3QgY29sdW1ucyA9IHNlbGVjdGVkLmlubmVyQmxvY2tzO1xuXHRcdFx0XHRjb25zdCBjb3VudCA9IGNvbHVtbnMubGVuZ3RoO1xuXHRcdFx0XHRjb25zdCB3ID0gTWF0aC5mbG9vcigxMi9jb3VudCk7XG5cdFx0XHRcdGNvbnN0IGlubmVyQmxvY2tzID0gW107XG5cdFx0XHRcdGNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcblx0XHRcdFx0XHRjb25zdCBibG9jayA9IGNyZWF0ZUJsb2NrKCdnZWNrby9ncmlkLWxheW91dC1iYXNpYycsIHt3Ond9LCBjb2x1bW4uaW5uZXJCbG9ja3MpO1xuXHRcdFx0XHRcdGlubmVyQmxvY2tzLnB1c2goYmxvY2spXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gY3JlYXRlQmxvY2soJ2dlY2tvL2dyaWQtbGF5b3V0Jywge30sIGlubmVyQmxvY2tzKTtcblx0XHRcdH0sXG5cdFx0fSwgXVxuXHR9LFxuXG5cdHN0eWxlczogW1xuXHRcdHsgbmFtZTogJ2RlZmF1bHQnLCBsYWJlbDogX18oICdEZWZhdWx0JyksIGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHRcdHsgbmFtZTogJ25vLWdhcCcsIGxhYmVsOiBfXyggJ05vIEdhcCcpIH0sXG5cdF0sXG5cblx0ZWRpdCggeyBpbnNlcnRCbG9ja3NBZnRlciwgY2xpZW50SWQgfSApIHtcblx0XHQvLyBHZXQgdGhlIGJsb2NrIHNvIHdlIGNhbiBzZWUgaWYgaXQgaGFkIGlubmVyYmxvY2tzXG5cdFx0Y29uc3QgYmxvY2sgPSBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0QmxvY2tzQnlDbGllbnRJZChjbGllbnRJZClbMF07XG5cdFx0Y29uc3QgaGFzSW5uZXJCbG9ja3MgPSAoYmxvY2sgJiYgYmxvY2suaW5uZXJCbG9ja3MpID8gYmxvY2suaW5uZXJCbG9ja3MubGVuZ3RoID4gMCA6IGZhbHNlO1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZW9mIGluc2VydEJsb2Nrc0FmdGVyID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0XHRcdDxUZW1wbGF0ZVBpY2tlciBoYXNJbm5uZXJCbG9ja3M9e2hhc0lubmVyQmxvY2tzfSBhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfT48L1RlbXBsYXRlUGlja2VyPiA6XG5cdFx0XHRcdFx0XHQ8cD57X18oJ1ByZXZpZXcgTm90IEF2YWlsYWJsZScpfTwvcD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9LFxuXG5cdHNhdmUoKSB7XG5cdFx0Ly8gSG9uZXN0bHkgSSBkb24ndCB3YW50IHRvIGRvIHRoaXMgYnV0IGNvbnZlbnRpb25zIGFyZSBjb252ZW50aW9ucy5cblx0XHRyZXR1cm4oPGRpdj48SW5uZXJCbG9ja3MuQ29udGVudCAvPjwvZGl2Pik7IFxuXHR9LFxufTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge3JlZ2lzdGVyQmxvY2tUeXBlfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCAqIGFzIGdyaWQgZnJvbSAnLi9ncmlkLWxheW91dCc7XG5pbXBvcnQgKiBhcyBncmlkSXRlbSBmcm9tICcuL2dyaWQtbGF5b3V0LWl0ZW0nO1xuaW1wb3J0ICogYXMgZ3JpZEl0ZW1JbWFnZSBmcm9tICcuL2dyaWQtbGF5b3V0LWltYWdlJztcbmltcG9ydCAqIGFzIGdyaWRJdGVtQmFzaWMgZnJvbSAnLi9ncmlkLWxheW91dC1iYXNpYyc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKGdyaWQubmFtZSwgZ3JpZC5zZXR0aW5ncyk7XG5yZWdpc3RlckJsb2NrVHlwZShncmlkSXRlbUJhc2ljLm5hbWUsIGdyaWRJdGVtQmFzaWMuc2V0dGluZ3MpO1xucmVnaXN0ZXJCbG9ja1R5cGUoZ3JpZEl0ZW1JbWFnZS5uYW1lLCBncmlkSXRlbUltYWdlLnNldHRpbmdzKTtcbnJlZ2lzdGVyQmxvY2tUeXBlKGdyaWRJdGVtLm5hbWUsIGdyaWRJdGVtLnNldHRpbmdzKTtcblxuLyoqXG4gKiBUaGlzIG1ha2Ugc3VyZSB0aGUgZ3JpZCB3b3JrcyBpbiB0aGUgZWRpdG9yLlxuICovXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4vLyBcdGZ1bmN0aW9uIHVwZGF0ZUNvbnRhaW5lcigpIHtcbi8vIFx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2Vja28tZ3JpZC1zbGlkZXInKTtcbi8vIFx0XHRpZiAoY29udGFpbmVyKSB7XG4vLyBcdFx0XHRmdW5jdGlvbiBsaXN0ZW5Gb3JBcHBlbmRlZE5vZGVzKCkge1xuLy8gXHRcdFx0XHQvLyBsaXN0ZW4gZm9yIGNoaWxkIGJsb2NrcyBiZWluZyBhZGRlZCB0byBsYXlvdXRcbi8vIFx0XHRcdFx0Y29uc3QgbGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvci1ibG9jay1saXN0X19sYXlvdXQnKTtcbi8vIFx0XHRcdFx0Y29uc3Qgb2JzZXJ2ZXJDb25maWcgPSB7XG4vLyBcdFx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuLy8gXHRcdFx0XHRcdHN1YnRyZWU6IHRydWVcbi8vIFx0XHRcdFx0fTtcbi8vIFx0XHRcdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0KSA9PiB7XG4vLyBcdFx0XHRcdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcbi8vIFx0XHRcdFx0XHRcdGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0JyAmJiBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCkge1xuLy8gXHRcdFx0XHRcdFx0XHRjb25zdCBjaGlsZEJsb2NrcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10eXBlPVwiZ2Vja28vZ3JpZC1zbGlkZXItZ3JpZC1zbGlkZVwiXScpO1xuLy8gXHRcdFx0XHRcdFx0XHRsaXN0ZW5Gb3JCbG9ja0NoYW5nZXMoY2hpbGRCbG9ja3MpO1xuLy8gXHRcdFx0XHRcdFx0fVxuLy8gXHRcdFx0XHRcdH1cbi8vIFx0XHRcdFx0fSk7XG4vLyBcdFx0XHRcdG9ic2VydmVyLm9ic2VydmUobGF5b3V0LCBvYnNlcnZlckNvbmZpZyk7XG4vLyBcdFx0XHR9XG5cbi8vIFx0XHRcdGZ1bmN0aW9uIGxpc3RlbkZvckJsb2NrQ2hhbmdlcyhibG9ja3MpIHtcbi8vIFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiBibG9ja3MpIHtcbi8vIFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnYmxvY2snLCBibG9jaylcbi8vIFx0XHRcdFx0XHRjb25zdCBvYnNlcnZlckNvbmZpZyA9IHtcbi8vIFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG4vLyBcdFx0XHRcdFx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnLCAnZGF0YS1iZyddXG4vLyBcdFx0XHRcdFx0fTtcbi8vIFx0XHRcdFx0XHQvLyBGaW5kIHRoZSBzbGlkZSB0aGF0IGhhcyB0aGUgYXR0cmlidXRlc1xuLy8gXHRcdFx0XHRcdGNvbnN0IHNsaWRlID0gYmxvY2sucXVlcnlTZWxlY3RvcignLmdlY2tvLWdyaWQtc2xpZGVyX19zbGlkZScpO1xuXG4vLyBcdFx0XHRcdFx0Ly8gSW5pdGlhbGl6ZSBibG9jayBzdHlsZXNcbi8vIFx0XHRcdFx0XHRjb25zdCBzdHlsZXMgPSBzbGlkZS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4vLyBcdFx0XHRcdFx0YmxvY2suc3R5bGUgPSBzdHlsZXM7XG5cbi8vIFx0XHRcdFx0XHQvLyBMaXN0ZW4gZm9yIHNsaWRlIHN0eWxlIGNoYW5nZXNcbi8vIFx0XHRcdFx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QpID0+IHtcbi8vIFx0XHRcdFx0XHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XG4vLyBcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdtdXRhdGlvbiAyIG9jY3VyZWQnKTtcbi8vIFx0XHRcdFx0XHRcdFx0aWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdzdHlsZScpIHtcbi8vIFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdHlsZXMgPSBtdXRhdGlvbi50YXJnZXQuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuLy8gXHRcdFx0XHRcdFx0XHRcdGJsb2NrLnN0eWxlID0gc3R5bGVzO1xuLy8gXHRcdFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdFx0fSk7XG4vLyBcdFx0XHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZShzbGlkZSwgb2JzZXJ2ZXJDb25maWcpO1xuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHRsaXN0ZW5Gb3JBcHBlbmRlZE5vZGVzKCk7XG4vLyBcdFx0XHRsZXQgY2hpbGRCbG9ja3MgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZT1cImdlY2tvL2dyaWQtc2xpZGVyLWdyaWQtc2xpZGVcIl0nKTtcbi8vIFx0XHRcdGxpc3RlbkZvckJsb2NrQ2hhbmdlcyhjaGlsZEJsb2Nrcyk7XG4vLyBcdFx0fVxuLy8gXHR9XG5cbi8vIFx0dXBkYXRlQ29udGFpbmVyKCk7XG5cbi8vIFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVJbnNlcnRlZFwiLCB1cGRhdGVDb250YWluZXIpXG4vLyB9KTtcblxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG5cblx0ZnVuY3Rpb24gbGlzdGVuRm9yU3R5bGVDaGFuZ2VzR3JpZEl0ZW0oKSB7XG5cdFx0JCgnLmdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvci1zdHlsZXMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuXHRcdFx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcblx0XHRcdFx0XHQvLyBPbiBjaGFuZ2UgdXBkYXRlIHRoZSBzdHlsZXNcblx0XHRcdFx0XHQkKCdbZGF0YS10eXBlPVwiZ2Vja28vZ3JpZC1sYXlvdXQtYmFzaWNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuZmluZChcIi5nZWNrby1ncmlkLWxheW91dC1lZGl0b3Itc3R5bGVzXCIpLmF0dHIoXCJzdHlsZVwiKTtcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cihcInN0eWxlXCIsIHN0eWxlcyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCgnW2RhdGEtdHlwZT1cImdlY2tvL2dyaWQtbGF5b3V0LWltYWdlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdHlsZXMgPSAkKHRoaXMpLmZpbmQoXCIuZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yLXN0eWxlc1wiKS5hdHRyKFwic3R5bGVcIik7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJzdHlsZVwiLCBzdHlsZXMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQoJ1tkYXRhLXR5cGU9XCJnZWNrby9ncmlkLWxheW91dC1pdGVtXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdHlsZXMgPSAkKHRoaXMpLmZpbmQoXCIuZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yLXN0eWxlc1wiKS5hdHRyKFwic3R5bGVcIik7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJzdHlsZVwiLCBzdHlsZXMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRcdGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWQoKSB7XG5cdFx0JCgnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcicpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG5cdFx0XHRcdG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuXHRcdFx0XHRcdC8vIE9uIGNoYW5nZSB1cGRhdGUgdGhlIHN0eWxlc1xuXHRcdFx0XHRcdCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuYXR0cihcImRhdGEtcGFzc3RocnVcIik7XG5cdFx0XHRcdFx0XHRjb25zdCBncmlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1ncmlkXCIpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5maW5kKFwiLmVkaXRvci1ibG9jay1saXN0X19sYXlvdXRcIikuYXR0cihcInN0eWxlXCIsIHN0eWxlcyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKHRoaXMsIHtcblx0XHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdFx0YXR0cmlidXRlRmlsdGVyOiBbJ2RhdGEtcGFzc3RocnUnLCAnc3R5bGUnXSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlU3R5bGVzR3JpZEl0ZW0oKSB7XG5cdFx0JCgnW2RhdGEtdHlwZT1cImdlY2tvL2dyaWQtbGF5b3V0LWltYWdlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBzdHlsZXMgPSAkKHRoaXMpLmZpbmQoXCIuZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yLXN0eWxlc1wiKS5hdHRyKFwic3R5bGVcIik7XG5cdFx0XHQkKHRoaXMpLmF0dHIoXCJzdHlsZVwiLCBzdHlsZXMpO1xuXHRcdH0pO1xuXHRcdCQoJ1tkYXRhLXR5cGU9XCJnZWNrby9ncmlkLWxheW91dC1iYXNpY1wiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgc3R5bGVzID0gJCh0aGlzKS5maW5kKFwiLmdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvci1zdHlsZXNcIikuYXR0cihcInN0eWxlXCIpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHR9KTtcblx0XHQkKCdbZGF0YS10eXBlPVwiZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgc3R5bGVzID0gJCh0aGlzKS5maW5kKFwiLmdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvci1zdHlsZXNcIikuYXR0cihcInN0eWxlXCIpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVN0eWxlc0dyaWQoKSB7XG5cdFx0JCgnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcicpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgc3R5bGVzID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1wYXNzdGhydVwiKTtcblx0XHRcdGNvbnN0IGdyaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWdyaWRcIik7XG5cdFx0XHQkKHRoaXMpLmZpbmQoXCIuZWRpdG9yLWJsb2NrLWxpc3RfX2xheW91dFwiKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHR9KTtcblx0fVxuXG5cdCQoJ2JvZHknKS5vbignRE9NTm9kZUluc2VydGVkJywgJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICgkKCcud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yJykpe1xuXHRcdFx0dXBkYXRlU3R5bGVzR3JpZCgpO1xuXHRcdFx0dXBkYXRlU3R5bGVzR3JpZEl0ZW0oKTtcblx0XHRcdGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWQoKVxuXHRcdFx0bGlzdGVuRm9yU3R5bGVDaGFuZ2VzR3JpZEl0ZW0oKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcblx0XHR1cGRhdGVTdHlsZXNHcmlkKCk7XG5cdFx0dXBkYXRlU3R5bGVzR3JpZEl0ZW0oKTtcblx0XHRsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkKClcblx0XHRsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkSXRlbSgpO1xuXHR9KTtcbn0pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8vIGltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJldmlldyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRjb25zdCB7bGF5b3V0fSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnZWNrby1ncmlkLWxheW91dC10ZW1wbGF0ZS1wcmV2aWV3XCI+XG5cdFx0XHRcdHtsYXlvdXQubWFwKChibG9jayxrZXkpPT57XG5cdFx0XHRcdFx0Y29uc3Qgc3R5bGVzID0ge1xuXHRcdFx0XHRcdFx0Z3JpZENvbHVtbkVuZDogJ3NwYW4gJyArIGJsb2NrWzFdLncsXG5cdFx0XHRcdFx0XHRncmlkUm93RW5kOiAnc3BhbiAnICsgYmxvY2tbMV0uaCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldHVybig8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJnZWNrby1ncmlkLWxheW91dC10ZW1wbGF0ZS1wcmV2aWV3X19pdGVtXCIgc3R5bGU9e3N0eWxlc30+PC9kaXY+KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgSW5uZXJCbG9ja3MgfSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5pbXBvcnQgdGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzJzsgLy8gQ3VzdG9tIFRlbXBsYXRlcyB0byBjaG9vc2UgZnJvbS5cbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vdGVtcGxhdGUtcHJldmlldyc7IC8vIEN1c3RvbSBUZW1wbGF0ZXMgdG8gY2hvb3NlIGZyb20uXG5cbi8vIGltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWQ6IG51bGwsXG5cdFx0fVxuXHR9XG5cdHNldFRlbXBsYXRlID0gKHRlbXBsYXRlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZDogdGVtcGxhdGUsXG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCB7aGFzSW5ubmVyQmxvY2tzLCBhbGxvd2VkQmxvY2tzfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3Qge3NlbGVjdGVkfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3QgYmxhbmtUZW1wbGF0ZSA9IFtbJ2dlY2tvL2dyaWQtbGF5b3V0LWJhc2ljJywge1xuXHRcdFx0XHRcdHc6IDZcblx0XHRcdFx0fV1dO1xuXHRcdGlmICghaGFzSW5ubmVyQmxvY2tzICYmICFzZWxlY3RlZCkge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdlY2tvLWdyaWQtbGF5b3V0LXRlbXBsYXRlLXNlbGVjdFwiPlxuXHRcdFx0XHRcdDxoMj57X18oJ0Nob29zZSBhIFRlbXBsYXRlJyl9PC9oMj5cblx0XHRcdFx0XHQ8cD57X18oJ1RoaXMgaXMgYSBzdGFydGluZyBwb2ludC4gVGVtcGxhdGVzIG1ha2UgaXQgZWFzeSB0byBjaG9vc2UgYSBsYXlvdXQuIEJsb2NrcyBjYW4gYmUgY2hhbmdlZCBvbmNlIHRoZXkgYXJlIHNlbGVjdGVkLicpfTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdlY2tvLWdyaWQtbGF5b3V0LXRlbXBsYXRlLXNlbGVjdF9fdGVtcGxhdGVzXCI+XG5cdFx0XHRcdFx0XHR7dGVtcGxhdGVzKCkubWFwKCh0ZW1wbGF0ZSwga2V5KT0+e1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwiZ2Vja28tZ3JpZC1sYXlvdXQtdGVtcGxhdGUtc2VsZWN0X190ZW1wbGF0ZVwiIG9uQ2xpY2s9eygpPT50aGlzLnNldFRlbXBsYXRlKHRlbXBsYXRlLmxheW91dCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFByZXZpZXcgbGF5b3V0PXt0ZW1wbGF0ZS5sYXlvdXR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD57dGVtcGxhdGUubGFiZWx9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdlY2tvLWdyaWQtbGF5b3V0LXRlbXBsYXRlLXNlbGVjdF9fdGVtcGxhdGVcIiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRUZW1wbGF0ZShibGFua1RlbXBsYXRlKX0+PFByZXZpZXcgbGF5b3V0PXtibGFua1RlbXBsYXRlfSAvPjxwPntfXygnQ3JlYXRlIE5ldycpfTwvcD48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0fVxuXHRcdHJldHVybihcblx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHR0ZW1wbGF0ZT17c2VsZWN0ZWR9XG5cdFx0XHRcdHRlbXBsYXRlTG9jaz17ZmFsc2V9XG5cdFx0XHRcdGFsbG93ZWRCbG9ja3M9e2FsbG93ZWRCbG9ja3N9XG5cdFx0XHQvPlxuXHRcdClcblx0fVxufSIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge2FwcGx5RmlsdGVyc30gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUZW1wbGF0ZXMoKSB7XG5cdGNvbnN0IHRlbXBsYXRlcyA9IFt7XG5cdFx0XHRsYWJlbDogX18oJzIgQ29sdW1ucycpLFxuXHRcdFx0bGF5b3V0OiBbXG5cdFx0XHRcdFsnZ2Vja28vZ3JpZC1sYXlvdXQtYmFzaWMnLCB7XG5cdFx0XHRcdFx0dzogNlxuXHRcdFx0XHR9XSxcblx0XHRcdFx0WydnZWNrby9ncmlkLWxheW91dC1iYXNpYycsIHtcblx0XHRcdFx0XHR3OiA2XG5cdFx0XHRcdH1dLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6IF9fKCczIENvbHVtbnMnKSxcblx0XHRcdGxheW91dDogW1xuXHRcdFx0XHRbJ2dlY2tvL2dyaWQtbGF5b3V0LWJhc2ljJywge1xuXHRcdFx0XHRcdHc6IDRcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFsnZ2Vja28vZ3JpZC1sYXlvdXQtYmFzaWMnLCB7XG5cdFx0XHRcdFx0dzogNFxuXHRcdFx0XHR9XSxcblx0XHRcdFx0WydnZWNrby9ncmlkLWxheW91dC1iYXNpYycsIHtcblx0XHRcdFx0XHR3OiA0XG5cdFx0XHRcdH1dLFxuXHRcdFx0XVxuXHRcdH0sXG5cdF07XG5cdHJldHVybiBhcHBseUZpbHRlcnMoJ2dlY2tvLmdyaWQtbGF5b3V0LnRlbXBsYXRlcycsIHRlbXBsYXRlcyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5ibG9ja3M7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuY29tcG9uZW50czsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5kYXRhOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmRlcHJlY2F0ZWQ7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuZWRpdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuaG9va3M7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuaTE4bjsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyJdLCJzb3VyY2VSb290IjoiIn0=