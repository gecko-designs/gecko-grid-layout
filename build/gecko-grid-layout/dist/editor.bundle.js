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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */





var name = 'gecko/grid-layout-basic';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Basic'),
  parent: ['gecko/grid-layout'],
  icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: "M0,0h24v24H0V0z M0,0h24v24H0V0z",
    fill: "none"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: "m20 7v10h-16v-10h16m0-2h-16c-1.1 0-1.99 0.9-1.99 2l-0.01 10c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    x: "11",
    y: "8",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    x: "11",
    y: "11",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    x: "8",
    y: "8",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    x: "8",
    y: "11",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    x: "5",
    y: "11",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    x: "5",
    y: "8",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    x: "8",
    y: "14",
    width: "8",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    x: "14",
    y: "11",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    x: "14",
    y: "8",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    x: "17",
    y: "11",
    width: "2",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    x: "17",
    y: "8",
    width: "2",
    height: "2"
  })),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('An image Grid Block.'),
  category: 'common',
  supports: {
    className: true,
    inserter: true,
    reusable: false,
    html: false
  },
  styles: [{
    name: 'default',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default'),
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
      blocks: ['gecko/grid-layout-item', 'gecko/grid-layout-image'],
      transform: function transform(attributes, innerBlocks) {
        // It appears that innerBlocks will be added in the future.
        var h = attributes.h,
            w = attributes.w;
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('gecko/grid-layout-basic', {
          h: h,
          w: w
        }, innerBlocks);
      }
    }]
  },
  deprecated: [{
    migrate: function migrate() {},
    save: function save() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null);
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Grid Item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Height'),
      value: h,
      onChange: function onChange(next) {
        setAttributes({
          h: next
        });
      },
      min: 1,
      max: 12
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Width'),
      value: w,
      onChange: function onChange(next) {
        setAttributes({
          w: next
        });
      },
      min: 1,
      max: 12
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "gecko-grid-layout-editor-styles",
      style: styles
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wp-block-gecko-grid-layout-editor__wrap gecko-grid-layout-basic ".concat(attributes.className)
    }, typeof insertBlocksAfter === 'function' //This line makes sure styles do not break
    ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"], {
      templateLock: false
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem Ipsum") // This is what shows as the preview content.
    ));
  },
  save: function save() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null)); // Honestly I don't want to do this but conventions are conventions.
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */





var ALLOWED_BLOCKS = ['core/paragraph', 'core/heading', 'core/button', 'core/list', 'core/quote'];
var name = 'gecko/grid-layout-image';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image'),
  parent: ['gecko/grid-layout'],
  icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: "M0,0h24v24H0V0z",
    fill: "none"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: "m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: "m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z"
  })),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('An image Grid Block.'),
  category: 'common',
  supports: {
    className: true,
    inserter: true,
    reusable: false,
    html: false
  },
  styles: [{
    name: 'default',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default'),
    isDefault: true
  }, {
    name: 'hover',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Hover')
  }, {
    name: 'no-caption',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No Caption')
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
      blocks: ['gecko/grid-layout-item', 'gecko/grid-layout-basic'],
      transform: function transform(attributes, innerBlocks) {
        // It appears that innerBlocks will be added in the future.
        var h = attributes.h,
            w = attributes.w,
            bgMedia = attributes.bgMedia,
            bgMediaUrl = attributes.bgMediaUrl;
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('gecko/grid-layout-image', {
          h: h,
          w: w,
          imgId: bgMedia,
          imgUrl: bgMediaUrl
        }, innerBlocks);
      }
    }]
  },
  deprecated: [{
    migrate: function migrate() {},
    save: function save() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null);
    }
  }],
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className,
        insertBlocksAfter = _ref.insertBlocksAfter;
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Grid Item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Minimum Height'),
      value: minHeight,
      onChange: function onChange(next) {
        setAttributes({
          minHeight: next
        });
      },
      min: "50",
      max: "600",
      step: "1"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Width'),
      value: w,
      onChange: function onChange(next) {
        setAttributes({
          w: next
        });
      },
      min: 1,
      max: 12
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Span Rows'),
      value: h,
      onChange: function onChange(next) {
        setAttributes({
          h: next
        });
      },
      min: 1,
      max: 12
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["BlockControls"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["MediaUpload"], {
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
          className: "components-icon-button components-toolbar__control",
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Edit image'),
          onClick: open,
          icon: "edit"
        });
      }
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "gecko-grid-layout-editor-styles",
      style: styles
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
      className: "wp-block-gecko-grid-layout-editor__wrap gecko-grid-layout-image ".concat(attributes.className)
    }, !imgId && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["MediaPlaceholder"], {
      onSelect: function onSelect(value) {
        setAttributes({
          imgId: value.id,
          imgUrl: value.url
        });
      },
      allowedTypes: ['image'],
      accept: "image/*"
    }), imgUrl && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "gecko-grid-layout-image__image",
      src: imgUrl
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figcaption", {
      className: "gecko-grid-layout-image__caption"
    }, typeof insertBlocksAfter === 'function' //This line makes sure styles do not break
    ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"], {
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem Ipsum") // This is what shows as the preview content.
    )));
  },
  save: function save() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null)); // Honestly I don't want to do this but conventions are conventions.
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
/* harmony import */ var _input_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-type */ "./src/input-type.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);


/**
 * WordPress dependencies
 */







var name = 'gecko/grid-layout-item';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Experimental'),
  parent: ['gecko/grid-layout'],
  icon: React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"
  })),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('A single grid item within a grid block.'),
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
  }],
  attributes: {
    type: {
      type: 'string',
      default: undefined
    },
    //solid, image, image-content
    // theme:{ type: 'string',default: undefined, }, //light, dark
    // borderRadius: { type: 'number'},
    // border: { type: 'object'},
    // boxShadow: { type: 'object'},
    // padding: { type: 'string'}, // t b l r ui '5px 10px' '5px 10px 5px'
    // margin: { type: 'object'}, // t b l r ui
    // alignContent: { type: 'string'}, // normal, start, end, center
    // justifyContent: { type: 'string'}, // normal, start, end, center
    // backgroundImage: { type: 'string'}, // process for creating bg images
    // backgroundRepeat: { type: 'string'}, // no-repeat, repeat, repeat-x, repeat-y
    // backgroundSize: { type: 'string'}, // cover,contain,auto
    // backgroundColor: { type: 'string'},
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
  transforms: {
    from: [{
      type: 'block',
      blocks: ['gecko/grid-layout-image', 'gecko/grid-layout-basic'],
      transform: function transform(attributes, innerBlocks) {
        // It appears that innerBlocks will be added in the future.
        var h = attributes.h,
            w = attributes.w,
            imgId = attributes.imgId,
            imgUrl = attributes.imgUrl;
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["createBlock"])('gecko/grid-layout-item', {
          h: h,
          w: w,
          bgMedia: imgId,
          bgMediaUrl: imgUrl
        }, innerBlocks);
      }
    }]
  },
  deprecated: [{
    migrate: function migrate() {},
    save: function save() {
      return React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"].Content, null);
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
    var styles = {
      '--background': bgColor,
      '--opacity': opacity,
      gridColumnEnd: 'span ' + w,
      gridRowEnd: 'span ' + h,
      backgroundColor: bgColor,
      backgroundImage: 'url(' + bgMediaUrl + ')',
      minHeight: minHeight + 'px'
    };

    if (type === "image") {
      delete styles.backgroundColor;
    }

    if (type === "solid") {
      delete styles.backgroundImage;
      delete styles.minHeight;
    }

    var lightOrDark = 'light';
    if (bgColorBrightness < 130) lightOrDark = 'dark';
    return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Type"
    }, React.createElement(_input_type__WEBPACK_IMPORTED_MODULE_0__["default"], {
      onSelect: function onSelect(next) {
        setAttributes({
          type: next
        });
      },
      value: type
    })), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Grid Item"
    }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Span Rows'),
      value: h,
      onChange: function onChange(next) {
        setAttributes({
          h: next
        });
      },
      min: 1,
      max: 12
    }), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Span Columns'),
      value: w,
      onChange: function onChange(next) {
        setAttributes({
          w: next
        });
      },
      min: 1,
      max: 12
    })), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Style"
    }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
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
    }), type !== "solid" && React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["MediaUpload"], {
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
        return React.createElement("div", null, bgMediaUrl && React.createElement("img", {
          src: bgMediaUrl,
          onClick: open,
          width: "100%",
          height: "auto",
          style: {
            cursor: "pointer"
          }
        }), !bgMediaUrl && React.createElement("div", {
          className: 'button button-large',
          onClick: open
        }, "Choose Background"));
      }
    }), React.createElement("hr", null), React.createElement("div", null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      label: "Background Color",
      value: bgColor ? bgColor.color : undefined,
      onChange: function onChange(value) {
        var settings = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["select"])('core/editor').getEditorSettings();
        var colorSlug = value ? Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["getColorObjectByColorValue"])(settings.colors, value).slug : undefined;
        setAttributes({
          bgColorSlug: colorSlug
        });
        var brightness = value ? tinycolor2__WEBPACK_IMPORTED_MODULE_1___default()(value).getBrightness() : undefined;
        setAttributes({
          bgColorBrightness: brightness
        });
        setAttributes({
          bgColor: value
        });
      }
    }), React.createElement("hr", null)))), React.createElement("div", {
      className: "gecko-grid-layout-editor-styles",
      style: styles
    }), React.createElement("div", {
      className: "wp-block-gecko-grid-layout-editor__wrap".concat(type, " ").concat(attributes.className, " has-").concat(bgColorSlug, "-background-color is-").concat(lightOrDark, "-background")
    }, !type && React.createElement(_input_type__WEBPACK_IMPORTED_MODULE_0__["default"], {
      onSelect: function onSelect(next) {
        setAttributes({
          type: next
        });
      }
    }), (type === 'image' || type === 'image-content') && !bgMedia && React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["MediaPlaceholder"], {
      onSelect: function onSelect(value) {
        setAttributes({
          bgMedia: value.id,
          bgMediaUrl: value.url
        });
      },
      allowedTypes: ['image'],
      accept: "image/*"
    }), (type === 'solid' || type === 'image-content' && bgMedia) && typeof insertBlocksAfter === 'function' && //This line makes sure styles do not break
    React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"], {
      templateLock: false
    })));
  },
  save: function save() {
    return React.createElement("div", null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"].Content, null)); // Honestly I don't want to do this but conventions are conventions.
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */



 // import {createHooks, applyFilters, addFilter} from '@wordpress/hooks';
// const hooks = createHooks();
// const templates = hooks.applyFilters('gecko.grid-layout.templates', ['prev']);
// hooks.addFilter('gecko.grid-layout.templates', 'gecko/grid-layout', (a) => {
// 	a.push['test'];
// 	console.log('test');
// 	return a;
// });
// console.log(templates);

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'dmp/grid-item'.
 *
 * @constant
 * @type {string[]}
*/

var ALLOWED_BLOCKS = ['gecko/grid-layout-item', 'gecko/grid-layout-image'];
var name = 'gecko/grid-layout';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Grid'),
  icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["G"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M4,13 L8,13 L8,10 L4,10 L4,13 Z M4,15 L4,18 L8,18 L8,15 L4,15 Z M10,13 L14,13 L14,10 L10,10 L10,13 Z M10,15 L10,18 L14,18 L14,15 L10,15 Z M20,13 L20,10 L16,10 L16,13 L20,13 Z M20,15 L16,15 L16,18 L20,18 L20,15 Z M4,8 L8,8 L8,5 L4,5 L4,8 Z M10,8 L14,8 L14,5 L10,5 L10,8 Z M20,8 L20,5 L16,5 L16,8 L20,8 Z M4,3 L20,3 C21.1045695,3 22,3.95139491 22,5.125 L22,17.875 C22,19.0486051 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.0486051 2,17.875 L2,5.125 C2,3.95139491 2.8954305,3 4,3 Z"
  }))),
  category: 'layout',
  attributes: {
    columns: {
      type: 'number',
      default: 12
    },
    gap: {
      type: 'number',
      default: 1
    }
  },
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Use CSS Grid to build layouts and, then add whatever content blocks you’d like.'),
  supports: {
    align: ['wide', 'full'],
    html: false
  },
  deprecated: [{
    migrate: function migrate() {},
    save: function save() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null);
    }
  }],
  styles: [{
    name: 'default',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Default'),
    isDefault: true
  }, {
    name: 'no-gap',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('No Gap')
  }],
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        insertBlocksAfter = _ref.insertBlocksAfter;
    var columns = attributes.columns,
        gap = attributes.gap; // const styles = 'grid-template-columns: repeat(' + columns + ', minmax(100px, 1fr));	grid-auto-rows: minmax(100px, auto); grid-gap:' + gap + 'rem;';

    var styles = 'grid-gap:' + gap + 'rem;';
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Gap'),
      value: gap,
      onChange: function onChange(next) {
        setAttributes({
          gap: next
        });
      },
      min: 0,
      max: 2
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wp-block-gecko-grid-layout-editor",
      "data-passthru": styles,
      "data-grid": columns
    }, typeof insertBlocksAfter === 'function' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], {
      template: [['gecko/grid-layout-image', {
        w: 6
      }], ['gecko/grid-layout-image', {
        w: 6
      }]],
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS
    })));
  },
  save: function save() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null)); // Honestly I don't want to do this but conventions are conventions.
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

/***/ "./src/input-type.js":
/*!***************************!*\
  !*** ./src/input-type.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

 // import { Fragment } from '@wordpress/element';

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var value = _ref.value,
      onSelect = _ref.onSelect;

  var selected = function selected(next) {
    return onSelect(next);
  };

  var types = [{
    slug: 'solid',
    name: 'Solid',
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      class: "dashicons dashicons-admin-appearance"
    })
  }, {
    slug: 'image',
    name: 'Image',
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      class: "dashicons dashicons-format-image"
    })
  }, {
    slug: 'image-content',
    name: 'Image with Content',
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      class: "dashicons dashicons-format-gallery"
    })
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wp-block-gecko-grid-layout-type-select"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Choose the block layout type."), types.map(function (type) {
    var isSelected = "";

    if (type.slug === value) {
      isSelected = "wp-block-gecko-grid-layout-type-select__item--selected";
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wp-block-gecko-grid-layout-type-select__item ".concat(isSelected),
      onClick: function onClick() {
        return selected(type.slug);
      }
    }, type.icon, type.name);
  }));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnljb2xvcjIvdGlueWNvbG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmlkLWxheW91dC1iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC1sYXlvdXQtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQtbGF5b3V0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQtbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQtdHlwZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuYmxvY2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuZGF0YVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5lZGl0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuZWxlbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5pMThuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6WyJuYW1lIiwic2V0dGluZ3MiLCJ0aXRsZSIsIl9fIiwicGFyZW50IiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJzdXBwb3J0cyIsImNsYXNzTmFtZSIsImluc2VydGVyIiwicmV1c2FibGUiLCJodG1sIiwic3R5bGVzIiwibGFiZWwiLCJpc0RlZmF1bHQiLCJhdHRyaWJ1dGVzIiwiaCIsInR5cGUiLCJkZWZhdWx0IiwidyIsInRyYW5zZm9ybXMiLCJmcm9tIiwiYmxvY2tzIiwidHJhbnNmb3JtIiwiaW5uZXJCbG9ja3MiLCJjcmVhdGVCbG9jayIsImRlcHJlY2F0ZWQiLCJtaWdyYXRlIiwic2F2ZSIsImVkaXQiLCJzZXRBdHRyaWJ1dGVzIiwiaW5zZXJ0QmxvY2tzQWZ0ZXIiLCJncmlkQ29sdW1uRW5kIiwiZ3JpZFJvd0VuZCIsIm5leHQiLCJBTExPV0VEX0JMT0NLUyIsIm1pbkhlaWdodCIsImltZ0lkIiwiaW1nVXJsIiwiYmdNZWRpYSIsImJnTWVkaWFVcmwiLCJ2YWx1ZSIsImlkIiwidXJsIiwib3BlbiIsInVuZGVmaW5lZCIsIm9wYWNpdHkiLCJiZ0NvbG9yIiwiYmdDb2xvclNsdWciLCJiZ0NvbG9yQnJpZ2h0bmVzcyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsaWdodE9yRGFyayIsImN1cnNvciIsImNvbG9yIiwic2VsZWN0IiwiZ2V0RWRpdG9yU2V0dGluZ3MiLCJjb2xvclNsdWciLCJnZXRDb2xvck9iamVjdEJ5Q29sb3JWYWx1ZSIsImNvbG9ycyIsInNsdWciLCJicmlnaHRuZXNzIiwidGlueWNvbG9yIiwiZ2V0QnJpZ2h0bmVzcyIsImNvbHVtbnMiLCJnYXAiLCJhbGlnbiIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiZ3JpZCIsImdyaWRJdGVtQmFzaWMiLCJncmlkSXRlbUltYWdlIiwiZ3JpZEl0ZW0iLCJqUXVlcnkiLCIkIiwibGlzdGVuRm9yU3R5bGVDaGFuZ2VzR3JpZEl0ZW0iLCJlYWNoIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZm9yRWFjaCIsIm11dGF0aW9uIiwiZmluZCIsImF0dHIiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImF0dHJpYnV0ZUZpbHRlciIsImxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWQiLCJ1cGRhdGVTdHlsZXNHcmlkSXRlbSIsInVwZGF0ZVN0eWxlc0dyaWQiLCJvbiIsImUiLCJ3aW5kb3ciLCJsb2FkIiwib25TZWxlY3QiLCJzZWxlY3RlZCIsInR5cGVzIiwibWFwIiwiaXNTZWxlY3RlZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7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S0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RCx3Q0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDRCQUE0QixnQkFBZ0I7QUFDMUgsOEVBQThFLDJCQUEyQixnQkFBZ0I7QUFDekgscURBQXFELG9EQUFvRCxnQkFBZ0I7QUFDekgscURBQXFELG9EQUFvRCxnQkFBZ0I7QUFDekg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRCwwQkFBMEI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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ZmlsZSI6ImVkaXRvci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi93cC1jb250ZW50L3BsdWdpbnMvZ2Vja28tZ3JpZC1sYXlvdXQvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBUaW55Q29sb3IgdjEuNC4xXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmdyaW5zL1RpbnlDb2xvclxuLy8gQnJpYW4gR3JpbnN0ZWFkLCBNSVQgTGljZW5zZVxuXG4oZnVuY3Rpb24oTWF0aCkge1xuXG52YXIgdHJpbUxlZnQgPSAvXlxccysvLFxuICAgIHRyaW1SaWdodCA9IC9cXHMrJC8sXG4gICAgdGlueUNvdW50ZXIgPSAwLFxuICAgIG1hdGhSb3VuZCA9IE1hdGgucm91bmQsXG4gICAgbWF0aE1pbiA9IE1hdGgubWluLFxuICAgIG1hdGhNYXggPSBNYXRoLm1heCxcbiAgICBtYXRoUmFuZG9tID0gTWF0aC5yYW5kb207XG5cbmZ1bmN0aW9uIHRpbnljb2xvciAoY29sb3IsIG9wdHMpIHtcblxuICAgIGNvbG9yID0gKGNvbG9yKSA/IGNvbG9yIDogJyc7XG4gICAgb3B0cyA9IG9wdHMgfHwgeyB9O1xuXG4gICAgLy8gSWYgaW5wdXQgaXMgYWxyZWFkeSBhIHRpbnljb2xvciwgcmV0dXJuIGl0c2VsZlxuICAgIGlmIChjb2xvciBpbnN0YW5jZW9mIHRpbnljb2xvcikge1xuICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG4gICAgLy8gSWYgd2UgYXJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBjYWxsIHVzaW5nIG5ldyBpbnN0ZWFkXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIHRpbnljb2xvcikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aW55Y29sb3IoY29sb3IsIG9wdHMpO1xuICAgIH1cblxuICAgIHZhciByZ2IgPSBpbnB1dFRvUkdCKGNvbG9yKTtcbiAgICB0aGlzLl9vcmlnaW5hbElucHV0ID0gY29sb3IsXG4gICAgdGhpcy5fciA9IHJnYi5yLFxuICAgIHRoaXMuX2cgPSByZ2IuZyxcbiAgICB0aGlzLl9iID0gcmdiLmIsXG4gICAgdGhpcy5fYSA9IHJnYi5hLFxuICAgIHRoaXMuX3JvdW5kQSA9IG1hdGhSb3VuZCgxMDAqdGhpcy5fYSkgLyAxMDAsXG4gICAgdGhpcy5fZm9ybWF0ID0gb3B0cy5mb3JtYXQgfHwgcmdiLmZvcm1hdDtcbiAgICB0aGlzLl9ncmFkaWVudFR5cGUgPSBvcHRzLmdyYWRpZW50VHlwZTtcblxuICAgIC8vIERvbid0IGxldCB0aGUgcmFuZ2Ugb2YgWzAsMjU1XSBjb21lIGJhY2sgaW4gWzAsMV0uXG4gICAgLy8gUG90ZW50aWFsbHkgbG9zZSBhIGxpdHRsZSBiaXQgb2YgcHJlY2lzaW9uIGhlcmUsIGJ1dCB3aWxsIGZpeCBpc3N1ZXMgd2hlcmVcbiAgICAvLyAuNSBnZXRzIGludGVycHJldGVkIGFzIGhhbGYgb2YgdGhlIHRvdGFsLCBpbnN0ZWFkIG9mIGhhbGYgb2YgMVxuICAgIC8vIElmIGl0IHdhcyBzdXBwb3NlZCB0byBiZSAxMjgsIHRoaXMgd2FzIGFscmVhZHkgdGFrZW4gY2FyZSBvZiBieSBgaW5wdXRUb1JnYmBcbiAgICBpZiAodGhpcy5fciA8IDEpIHsgdGhpcy5fciA9IG1hdGhSb3VuZCh0aGlzLl9yKTsgfVxuICAgIGlmICh0aGlzLl9nIDwgMSkgeyB0aGlzLl9nID0gbWF0aFJvdW5kKHRoaXMuX2cpOyB9XG4gICAgaWYgKHRoaXMuX2IgPCAxKSB7IHRoaXMuX2IgPSBtYXRoUm91bmQodGhpcy5fYik7IH1cblxuICAgIHRoaXMuX29rID0gcmdiLm9rO1xuICAgIHRoaXMuX3RjX2lkID0gdGlueUNvdW50ZXIrKztcbn1cblxudGlueWNvbG9yLnByb3RvdHlwZSA9IHtcbiAgICBpc0Rhcms6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCcmlnaHRuZXNzKCkgPCAxMjg7XG4gICAgfSxcbiAgICBpc0xpZ2h0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzRGFyaygpO1xuICAgIH0sXG4gICAgaXNWYWxpZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vaztcbiAgICB9LFxuICAgIGdldE9yaWdpbmFsSW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbmFsSW5wdXQ7XG4gICAgfSxcbiAgICBnZXRGb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICAgIH0sXG4gICAgZ2V0QWxwaGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYTtcbiAgICB9LFxuICAgIGdldEJyaWdodG5lc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2h0dHA6Ly93d3cudzMub3JnL1RSL0FFUlQjY29sb3ItY29udHJhc3RcbiAgICAgICAgdmFyIHJnYiA9IHRoaXMudG9SZ2IoKTtcbiAgICAgICAgcmV0dXJuIChyZ2IuciAqIDI5OSArIHJnYi5nICogNTg3ICsgcmdiLmIgKiAxMTQpIC8gMTAwMDtcbiAgICB9LFxuICAgIGdldEx1bWluYW5jZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vaHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuICAgICAgICB2YXIgcmdiID0gdGhpcy50b1JnYigpO1xuICAgICAgICB2YXIgUnNSR0IsIEdzUkdCLCBCc1JHQiwgUiwgRywgQjtcbiAgICAgICAgUnNSR0IgPSByZ2Iuci8yNTU7XG4gICAgICAgIEdzUkdCID0gcmdiLmcvMjU1O1xuICAgICAgICBCc1JHQiA9IHJnYi5iLzI1NTtcblxuICAgICAgICBpZiAoUnNSR0IgPD0gMC4wMzkyOCkge1IgPSBSc1JHQiAvIDEyLjkyO30gZWxzZSB7UiA9IE1hdGgucG93KCgoUnNSR0IgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7fVxuICAgICAgICBpZiAoR3NSR0IgPD0gMC4wMzkyOCkge0cgPSBHc1JHQiAvIDEyLjkyO30gZWxzZSB7RyA9IE1hdGgucG93KCgoR3NSR0IgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7fVxuICAgICAgICBpZiAoQnNSR0IgPD0gMC4wMzkyOCkge0IgPSBCc1JHQiAvIDEyLjkyO30gZWxzZSB7QiA9IE1hdGgucG93KCgoQnNSR0IgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7fVxuICAgICAgICByZXR1cm4gKDAuMjEyNiAqIFIpICsgKDAuNzE1MiAqIEcpICsgKDAuMDcyMiAqIEIpO1xuICAgIH0sXG4gICAgc2V0QWxwaGE6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2EgPSBib3VuZEFscGhhKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fcm91bmRBID0gbWF0aFJvdW5kKDEwMCp0aGlzLl9hKSAvIDEwMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB0b0hzdjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoc3YgPSByZ2JUb0hzdih0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iKTtcbiAgICAgICAgcmV0dXJuIHsgaDogaHN2LmggKiAzNjAsIHM6IGhzdi5zLCB2OiBoc3YudiwgYTogdGhpcy5fYSB9O1xuICAgIH0sXG4gICAgdG9Ic3ZTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHN2ID0gcmdiVG9Ic3YodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYik7XG4gICAgICAgIHZhciBoID0gbWF0aFJvdW5kKGhzdi5oICogMzYwKSwgcyA9IG1hdGhSb3VuZChoc3YucyAqIDEwMCksIHYgPSBtYXRoUm91bmQoaHN2LnYgKiAxMDApO1xuICAgICAgICByZXR1cm4gKHRoaXMuX2EgPT0gMSkgP1xuICAgICAgICAgIFwiaHN2KFwiICArIGggKyBcIiwgXCIgKyBzICsgXCIlLCBcIiArIHYgKyBcIiUpXCIgOlxuICAgICAgICAgIFwiaHN2YShcIiArIGggKyBcIiwgXCIgKyBzICsgXCIlLCBcIiArIHYgKyBcIiUsIFwiKyB0aGlzLl9yb3VuZEEgKyBcIilcIjtcbiAgICB9LFxuICAgIHRvSHNsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhzbCA9IHJnYlRvSHNsKHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IpO1xuICAgICAgICByZXR1cm4geyBoOiBoc2wuaCAqIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sLCBhOiB0aGlzLl9hIH07XG4gICAgfSxcbiAgICB0b0hzbFN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoc2wgPSByZ2JUb0hzbCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iKTtcbiAgICAgICAgdmFyIGggPSBtYXRoUm91bmQoaHNsLmggKiAzNjApLCBzID0gbWF0aFJvdW5kKGhzbC5zICogMTAwKSwgbCA9IG1hdGhSb3VuZChoc2wubCAqIDEwMCk7XG4gICAgICAgIHJldHVybiAodGhpcy5fYSA9PSAxKSA/XG4gICAgICAgICAgXCJoc2woXCIgICsgaCArIFwiLCBcIiArIHMgKyBcIiUsIFwiICsgbCArIFwiJSlcIiA6XG4gICAgICAgICAgXCJoc2xhKFwiICsgaCArIFwiLCBcIiArIHMgKyBcIiUsIFwiICsgbCArIFwiJSwgXCIrIHRoaXMuX3JvdW5kQSArIFwiKVwiO1xuICAgIH0sXG4gICAgdG9IZXg6IGZ1bmN0aW9uKGFsbG93M0NoYXIpIHtcbiAgICAgICAgcmV0dXJuIHJnYlRvSGV4KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIGFsbG93M0NoYXIpO1xuICAgIH0sXG4gICAgdG9IZXhTdHJpbmc6IGZ1bmN0aW9uKGFsbG93M0NoYXIpIHtcbiAgICAgICAgcmV0dXJuICcjJyArIHRoaXMudG9IZXgoYWxsb3czQ2hhcik7XG4gICAgfSxcbiAgICB0b0hleDg6IGZ1bmN0aW9uKGFsbG93NENoYXIpIHtcbiAgICAgICAgcmV0dXJuIHJnYmFUb0hleCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCB0aGlzLl9hLCBhbGxvdzRDaGFyKTtcbiAgICB9LFxuICAgIHRvSGV4OFN0cmluZzogZnVuY3Rpb24oYWxsb3c0Q2hhcikge1xuICAgICAgICByZXR1cm4gJyMnICsgdGhpcy50b0hleDgoYWxsb3c0Q2hhcik7XG4gICAgfSxcbiAgICB0b1JnYjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7IHI6IG1hdGhSb3VuZCh0aGlzLl9yKSwgZzogbWF0aFJvdW5kKHRoaXMuX2cpLCBiOiBtYXRoUm91bmQodGhpcy5fYiksIGE6IHRoaXMuX2EgfTtcbiAgICB9LFxuICAgIHRvUmdiU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9hID09IDEpID9cbiAgICAgICAgICBcInJnYihcIiAgKyBtYXRoUm91bmQodGhpcy5fcikgKyBcIiwgXCIgKyBtYXRoUm91bmQodGhpcy5fZykgKyBcIiwgXCIgKyBtYXRoUm91bmQodGhpcy5fYikgKyBcIilcIiA6XG4gICAgICAgICAgXCJyZ2JhKFwiICsgbWF0aFJvdW5kKHRoaXMuX3IpICsgXCIsIFwiICsgbWF0aFJvdW5kKHRoaXMuX2cpICsgXCIsIFwiICsgbWF0aFJvdW5kKHRoaXMuX2IpICsgXCIsIFwiICsgdGhpcy5fcm91bmRBICsgXCIpXCI7XG4gICAgfSxcbiAgICB0b1BlcmNlbnRhZ2VSZ2I6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4geyByOiBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9yLCAyNTUpICogMTAwKSArIFwiJVwiLCBnOiBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9nLCAyNTUpICogMTAwKSArIFwiJVwiLCBiOiBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9iLCAyNTUpICogMTAwKSArIFwiJVwiLCBhOiB0aGlzLl9hIH07XG4gICAgfSxcbiAgICB0b1BlcmNlbnRhZ2VSZ2JTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2EgPT0gMSkgP1xuICAgICAgICAgIFwicmdiKFwiICArIG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX3IsIDI1NSkgKiAxMDApICsgXCIlLCBcIiArIG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX2csIDI1NSkgKiAxMDApICsgXCIlLCBcIiArIG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX2IsIDI1NSkgKiAxMDApICsgXCIlKVwiIDpcbiAgICAgICAgICBcInJnYmEoXCIgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9yLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9nLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9iLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyB0aGlzLl9yb3VuZEEgKyBcIilcIjtcbiAgICB9LFxuICAgIHRvTmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9hID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2EgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGV4TmFtZXNbcmdiVG9IZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdHJ1ZSldIHx8IGZhbHNlO1xuICAgIH0sXG4gICAgdG9GaWx0ZXI6IGZ1bmN0aW9uKHNlY29uZENvbG9yKSB7XG4gICAgICAgIHZhciBoZXg4U3RyaW5nID0gJyMnICsgcmdiYVRvQXJnYkhleCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCB0aGlzLl9hKTtcbiAgICAgICAgdmFyIHNlY29uZEhleDhTdHJpbmcgPSBoZXg4U3RyaW5nO1xuICAgICAgICB2YXIgZ3JhZGllbnRUeXBlID0gdGhpcy5fZ3JhZGllbnRUeXBlID8gXCJHcmFkaWVudFR5cGUgPSAxLCBcIiA6IFwiXCI7XG5cbiAgICAgICAgaWYgKHNlY29uZENvbG9yKSB7XG4gICAgICAgICAgICB2YXIgcyA9IHRpbnljb2xvcihzZWNvbmRDb2xvcik7XG4gICAgICAgICAgICBzZWNvbmRIZXg4U3RyaW5nID0gJyMnICsgcmdiYVRvQXJnYkhleChzLl9yLCBzLl9nLCBzLl9iLCBzLl9hKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChcIitncmFkaWVudFR5cGUrXCJzdGFydENvbG9yc3RyPVwiK2hleDhTdHJpbmcrXCIsZW5kQ29sb3JzdHI9XCIrc2Vjb25kSGV4OFN0cmluZytcIilcIjtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbihmb3JtYXQpIHtcbiAgICAgICAgdmFyIGZvcm1hdFNldCA9ICEhZm9ybWF0O1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgdGhpcy5fZm9ybWF0O1xuXG4gICAgICAgIHZhciBmb3JtYXR0ZWRTdHJpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIGhhc0FscGhhID0gdGhpcy5fYSA8IDEgJiYgdGhpcy5fYSA+PSAwO1xuICAgICAgICB2YXIgbmVlZHNBbHBoYUZvcm1hdCA9ICFmb3JtYXRTZXQgJiYgaGFzQWxwaGEgJiYgKGZvcm1hdCA9PT0gXCJoZXhcIiB8fCBmb3JtYXQgPT09IFwiaGV4NlwiIHx8IGZvcm1hdCA9PT0gXCJoZXgzXCIgfHwgZm9ybWF0ID09PSBcImhleDRcIiB8fCBmb3JtYXQgPT09IFwiaGV4OFwiIHx8IGZvcm1hdCA9PT0gXCJuYW1lXCIpO1xuXG4gICAgICAgIGlmIChuZWVkc0FscGhhRm9ybWF0KSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIFwidHJhbnNwYXJlbnRcIiwgYWxsIG90aGVyIG5vbi1hbHBoYSBmb3JtYXRzXG4gICAgICAgICAgICAvLyB3aWxsIHJldHVybiByZ2JhIHdoZW4gdGhlcmUgaXMgdHJhbnNwYXJlbmN5LlxuICAgICAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJuYW1lXCIgJiYgdGhpcy5fYSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTmFtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9SZ2JTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcInJnYlwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvUmdiU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJwcmdiXCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9QZXJjZW50YWdlUmdiU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoZXhcIiB8fCBmb3JtYXQgPT09IFwiaGV4NlwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoZXgzXCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXhTdHJpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoZXg0XCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXg4U3RyaW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaGV4OFwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4OFN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwibmFtZVwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvTmFtZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaHNsXCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9Ic2xTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhzdlwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSHN2U3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkU3RyaW5nIHx8IHRoaXMudG9IZXhTdHJpbmcoKTtcbiAgICB9LFxuICAgIGNsb25lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRpbnljb2xvcih0aGlzLnRvU3RyaW5nKCkpO1xuICAgIH0sXG5cbiAgICBfYXBwbHlNb2RpZmljYXRpb246IGZ1bmN0aW9uKGZuLCBhcmdzKSB7XG4gICAgICAgIHZhciBjb2xvciA9IGZuLmFwcGx5KG51bGwsIFt0aGlzXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmdzKSkpO1xuICAgICAgICB0aGlzLl9yID0gY29sb3IuX3I7XG4gICAgICAgIHRoaXMuX2cgPSBjb2xvci5fZztcbiAgICAgICAgdGhpcy5fYiA9IGNvbG9yLl9iO1xuICAgICAgICB0aGlzLnNldEFscGhhKGNvbG9yLl9hKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBsaWdodGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGxpZ2h0ZW4sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBicmlnaHRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihicmlnaHRlbiwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGRhcmtlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihkYXJrZW4sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBkZXNhdHVyYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGRlc2F0dXJhdGUsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzYXR1cmF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihzYXR1cmF0ZSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGdyZXlzY2FsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihncmV5c2NhbGUsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzcGluOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKHNwaW4sIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIF9hcHBseUNvbWJpbmF0aW9uOiBmdW5jdGlvbihmbiwgYXJncykge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgW3RoaXNdLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3MpKSk7XG4gICAgfSxcbiAgICBhbmFsb2dvdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihhbmFsb2dvdXMsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBjb21wbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oY29tcGxlbWVudCwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIG1vbm9jaHJvbWF0aWM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihtb25vY2hyb21hdGljLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc3BsaXRjb21wbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oc3BsaXRjb21wbGVtZW50LCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgdHJpYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbih0cmlhZCwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHRldHJhZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHRldHJhZCwgYXJndW1lbnRzKTtcbiAgICB9XG59O1xuXG4vLyBJZiBpbnB1dCBpcyBhbiBvYmplY3QsIGZvcmNlIDEgaW50byBcIjEuMFwiIHRvIGhhbmRsZSByYXRpb3MgcHJvcGVybHlcbi8vIFN0cmluZyBpbnB1dCByZXF1aXJlcyBcIjEuMFwiIGFzIGlucHV0LCBzbyAxIHdpbGwgYmUgdHJlYXRlZCBhcyAxXG50aW55Y29sb3IuZnJvbVJhdGlvID0gZnVuY3Rpb24oY29sb3IsIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIGNvbG9yID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdmFyIG5ld0NvbG9yID0ge307XG4gICAgICAgIGZvciAodmFyIGkgaW4gY29sb3IpIHtcbiAgICAgICAgICAgIGlmIChjb2xvci5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBcImFcIikge1xuICAgICAgICAgICAgICAgICAgICBuZXdDb2xvcltpXSA9IGNvbG9yW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29sb3JbaV0gPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29sb3IgPSBuZXdDb2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGlueWNvbG9yKGNvbG9yLCBvcHRzKTtcbn07XG5cbi8vIEdpdmVuIGEgc3RyaW5nIG9yIG9iamVjdCwgY29udmVydCB0aGF0IGlucHV0IHRvIFJHQlxuLy8gUG9zc2libGUgc3RyaW5nIGlucHV0czpcbi8vXG4vLyAgICAgXCJyZWRcIlxuLy8gICAgIFwiI2YwMFwiIG9yIFwiZjAwXCJcbi8vICAgICBcIiNmZjAwMDBcIiBvciBcImZmMDAwMFwiXG4vLyAgICAgXCIjZmYwMDAwMDBcIiBvciBcImZmMDAwMDAwXCJcbi8vICAgICBcInJnYiAyNTUgMCAwXCIgb3IgXCJyZ2IgKDI1NSwgMCwgMClcIlxuLy8gICAgIFwicmdiIDEuMCAwIDBcIiBvciBcInJnYiAoMSwgMCwgMClcIlxuLy8gICAgIFwicmdiYSAoMjU1LCAwLCAwLCAxKVwiIG9yIFwicmdiYSAyNTUsIDAsIDAsIDFcIlxuLy8gICAgIFwicmdiYSAoMS4wLCAwLCAwLCAxKVwiIG9yIFwicmdiYSAxLjAsIDAsIDAsIDFcIlxuLy8gICAgIFwiaHNsKDAsIDEwMCUsIDUwJSlcIiBvciBcImhzbCAwIDEwMCUgNTAlXCJcbi8vICAgICBcImhzbGEoMCwgMTAwJSwgNTAlLCAxKVwiIG9yIFwiaHNsYSAwIDEwMCUgNTAlLCAxXCJcbi8vICAgICBcImhzdigwLCAxMDAlLCAxMDAlKVwiIG9yIFwiaHN2IDAgMTAwJSAxMDAlXCJcbi8vXG5mdW5jdGlvbiBpbnB1dFRvUkdCKGNvbG9yKSB7XG5cbiAgICB2YXIgcmdiID0geyByOiAwLCBnOiAwLCBiOiAwIH07XG4gICAgdmFyIGEgPSAxO1xuICAgIHZhciBzID0gbnVsbDtcbiAgICB2YXIgdiA9IG51bGw7XG4gICAgdmFyIGwgPSBudWxsO1xuICAgIHZhciBvayA9IGZhbHNlO1xuICAgIHZhciBmb3JtYXQgPSBmYWxzZTtcblxuICAgIGlmICh0eXBlb2YgY29sb3IgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb2xvciA9IHN0cmluZ0lucHV0VG9PYmplY3QoY29sb3IpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sb3IgPT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZiAoaXNWYWxpZENTU1VuaXQoY29sb3IucikgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IuZykgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IuYikpIHtcbiAgICAgICAgICAgIHJnYiA9IHJnYlRvUmdiKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xuICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybWF0ID0gU3RyaW5nKGNvbG9yLnIpLnN1YnN0cigtMSkgPT09IFwiJVwiID8gXCJwcmdiXCIgOiBcInJnYlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVmFsaWRDU1NVbml0KGNvbG9yLmgpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLnMpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLnYpKSB7XG4gICAgICAgICAgICBzID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci5zKTtcbiAgICAgICAgICAgIHYgPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yLnYpO1xuICAgICAgICAgICAgcmdiID0gaHN2VG9SZ2IoY29sb3IuaCwgcywgdik7XG4gICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICBmb3JtYXQgPSBcImhzdlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVmFsaWRDU1NVbml0KGNvbG9yLmgpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLnMpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLmwpKSB7XG4gICAgICAgICAgICBzID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci5zKTtcbiAgICAgICAgICAgIGwgPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yLmwpO1xuICAgICAgICAgICAgcmdiID0gaHNsVG9SZ2IoY29sb3IuaCwgcywgbCk7XG4gICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICBmb3JtYXQgPSBcImhzbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbG9yLmhhc093blByb3BlcnR5KFwiYVwiKSkge1xuICAgICAgICAgICAgYSA9IGNvbG9yLmE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhID0gYm91bmRBbHBoYShhKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9rOiBvayxcbiAgICAgICAgZm9ybWF0OiBjb2xvci5mb3JtYXQgfHwgZm9ybWF0LFxuICAgICAgICByOiBtYXRoTWluKDI1NSwgbWF0aE1heChyZ2IuciwgMCkpLFxuICAgICAgICBnOiBtYXRoTWluKDI1NSwgbWF0aE1heChyZ2IuZywgMCkpLFxuICAgICAgICBiOiBtYXRoTWluKDI1NSwgbWF0aE1heChyZ2IuYiwgMCkpLFxuICAgICAgICBhOiBhXG4gICAgfTtcbn1cblxuXG4vLyBDb252ZXJzaW9uIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gYHJnYlRvSHNsYCwgYHJnYlRvSHN2YCwgYGhzbFRvUmdiYCwgYGhzdlRvUmdiYCBtb2RpZmllZCBmcm9tOlxuLy8gPGh0dHA6Ly9tamlqYWNrc29uLmNvbS8yMDA4LzAyL3JnYi10by1oc2wtYW5kLXJnYi10by1oc3YtY29sb3ItbW9kZWwtY29udmVyc2lvbi1hbGdvcml0aG1zLWluLWphdmFzY3JpcHQ+XG5cbi8vIGByZ2JUb1JnYmBcbi8vIEhhbmRsZSBib3VuZHMgLyBwZXJjZW50YWdlIGNoZWNraW5nIHRvIGNvbmZvcm0gdG8gQ1NTIGNvbG9yIHNwZWNcbi8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLz5cbi8vICpBc3N1bWVzOiogciwgZywgYiBpbiBbMCwgMjU1XSBvciBbMCwgMV1cbi8vICpSZXR1cm5zOiogeyByLCBnLCBiIH0gaW4gWzAsIDI1NV1cbmZ1bmN0aW9uIHJnYlRvUmdiKHIsIGcsIGIpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHI6IGJvdW5kMDEociwgMjU1KSAqIDI1NSxcbiAgICAgICAgZzogYm91bmQwMShnLCAyNTUpICogMjU1LFxuICAgICAgICBiOiBib3VuZDAxKGIsIDI1NSkgKiAyNTVcbiAgICB9O1xufVxuXG4vLyBgcmdiVG9Ic2xgXG4vLyBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdmFsdWUgdG8gSFNMLlxuLy8gKkFzc3VtZXM6KiByLCBnLCBhbmQgYiBhcmUgY29udGFpbmVkIGluIFswLCAyNTVdIG9yIFswLCAxXVxuLy8gKlJldHVybnM6KiB7IGgsIHMsIGwgfSBpbiBbMCwxXVxuZnVuY3Rpb24gcmdiVG9Ic2wociwgZywgYikge1xuXG4gICAgciA9IGJvdW5kMDEociwgMjU1KTtcbiAgICBnID0gYm91bmQwMShnLCAyNTUpO1xuICAgIGIgPSBib3VuZDAxKGIsIDI1NSk7XG5cbiAgICB2YXIgbWF4ID0gbWF0aE1heChyLCBnLCBiKSwgbWluID0gbWF0aE1pbihyLCBnLCBiKTtcbiAgICB2YXIgaCwgcywgbCA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgIGlmKG1heCA9PSBtaW4pIHtcbiAgICAgICAgaCA9IHMgPSAwOyAvLyBhY2hyb21hdGljXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgICAgICBzd2l0Y2gobWF4KSB7XG4gICAgICAgICAgICBjYXNlIHI6IGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGc6IGggPSAoYiAtIHIpIC8gZCArIDI7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBiOiBoID0gKHIgLSBnKSAvIGQgKyA0OyBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGggLz0gNjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBoOiBoLCBzOiBzLCBsOiBsIH07XG59XG5cbi8vIGBoc2xUb1JnYmBcbi8vIENvbnZlcnRzIGFuIEhTTCBjb2xvciB2YWx1ZSB0byBSR0IuXG4vLyAqQXNzdW1lczoqIGggaXMgY29udGFpbmVkIGluIFswLCAxXSBvciBbMCwgMzYwXSBhbmQgcyBhbmQgbCBhcmUgY29udGFpbmVkIFswLCAxXSBvciBbMCwgMTAwXVxuLy8gKlJldHVybnM6KiB7IHIsIGcsIGIgfSBpbiB0aGUgc2V0IFswLCAyNTVdXG5mdW5jdGlvbiBoc2xUb1JnYihoLCBzLCBsKSB7XG4gICAgdmFyIHIsIGcsIGI7XG5cbiAgICBoID0gYm91bmQwMShoLCAzNjApO1xuICAgIHMgPSBib3VuZDAxKHMsIDEwMCk7XG4gICAgbCA9IGJvdW5kMDEobCwgMTAwKTtcblxuICAgIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgICAgICBpZih0IDwgMCkgdCArPSAxO1xuICAgICAgICBpZih0ID4gMSkgdCAtPSAxO1xuICAgICAgICBpZih0IDwgMS82KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcbiAgICAgICAgaWYodCA8IDEvMikgcmV0dXJuIHE7XG4gICAgICAgIGlmKHQgPCAyLzMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyLzMgLSB0KSAqIDY7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuICAgIGlmKHMgPT09IDApIHtcbiAgICAgICAgciA9IGcgPSBiID0gbDsgLy8gYWNocm9tYXRpY1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICB2YXIgcCA9IDIgKiBsIC0gcTtcbiAgICAgICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEvMyk7XG4gICAgICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgICAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMS8zKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByOiByICogMjU1LCBnOiBnICogMjU1LCBiOiBiICogMjU1IH07XG59XG5cbi8vIGByZ2JUb0hzdmBcbi8vIENvbnZlcnRzIGFuIFJHQiBjb2xvciB2YWx1ZSB0byBIU1Zcbi8vICpBc3N1bWVzOiogciwgZywgYW5kIGIgYXJlIGNvbnRhaW5lZCBpbiB0aGUgc2V0IFswLCAyNTVdIG9yIFswLCAxXVxuLy8gKlJldHVybnM6KiB7IGgsIHMsIHYgfSBpbiBbMCwxXVxuZnVuY3Rpb24gcmdiVG9Ic3YociwgZywgYikge1xuXG4gICAgciA9IGJvdW5kMDEociwgMjU1KTtcbiAgICBnID0gYm91bmQwMShnLCAyNTUpO1xuICAgIGIgPSBib3VuZDAxKGIsIDI1NSk7XG5cbiAgICB2YXIgbWF4ID0gbWF0aE1heChyLCBnLCBiKSwgbWluID0gbWF0aE1pbihyLCBnLCBiKTtcbiAgICB2YXIgaCwgcywgdiA9IG1heDtcblxuICAgIHZhciBkID0gbWF4IC0gbWluO1xuICAgIHMgPSBtYXggPT09IDAgPyAwIDogZCAvIG1heDtcblxuICAgIGlmKG1heCA9PSBtaW4pIHtcbiAgICAgICAgaCA9IDA7IC8vIGFjaHJvbWF0aWNcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaChtYXgpIHtcbiAgICAgICAgICAgIGNhc2UgcjogaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZzogaCA9IChiIC0gcikgLyBkICsgMjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGI6IGggPSAociAtIGcpIC8gZCArIDQ7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGggLz0gNjtcbiAgICB9XG4gICAgcmV0dXJuIHsgaDogaCwgczogcywgdjogdiB9O1xufVxuXG4vLyBgaHN2VG9SZ2JgXG4vLyBDb252ZXJ0cyBhbiBIU1YgY29sb3IgdmFsdWUgdG8gUkdCLlxuLy8gKkFzc3VtZXM6KiBoIGlzIGNvbnRhaW5lZCBpbiBbMCwgMV0gb3IgWzAsIDM2MF0gYW5kIHMgYW5kIHYgYXJlIGNvbnRhaW5lZCBpbiBbMCwgMV0gb3IgWzAsIDEwMF1cbi8vICpSZXR1cm5zOiogeyByLCBnLCBiIH0gaW4gdGhlIHNldCBbMCwgMjU1XVxuIGZ1bmN0aW9uIGhzdlRvUmdiKGgsIHMsIHYpIHtcblxuICAgIGggPSBib3VuZDAxKGgsIDM2MCkgKiA2O1xuICAgIHMgPSBib3VuZDAxKHMsIDEwMCk7XG4gICAgdiA9IGJvdW5kMDEodiwgMTAwKTtcblxuICAgIHZhciBpID0gTWF0aC5mbG9vcihoKSxcbiAgICAgICAgZiA9IGggLSBpLFxuICAgICAgICBwID0gdiAqICgxIC0gcyksXG4gICAgICAgIHEgPSB2ICogKDEgLSBmICogcyksXG4gICAgICAgIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyksXG4gICAgICAgIG1vZCA9IGkgJSA2LFxuICAgICAgICByID0gW3YsIHEsIHAsIHAsIHQsIHZdW21vZF0sXG4gICAgICAgIGcgPSBbdCwgdiwgdiwgcSwgcCwgcF1bbW9kXSxcbiAgICAgICAgYiA9IFtwLCBwLCB0LCB2LCB2LCBxXVttb2RdO1xuXG4gICAgcmV0dXJuIHsgcjogciAqIDI1NSwgZzogZyAqIDI1NSwgYjogYiAqIDI1NSB9O1xufVxuXG4vLyBgcmdiVG9IZXhgXG4vLyBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdG8gaGV4XG4vLyBBc3N1bWVzIHIsIGcsIGFuZCBiIGFyZSBjb250YWluZWQgaW4gdGhlIHNldCBbMCwgMjU1XVxuLy8gUmV0dXJucyBhIDMgb3IgNiBjaGFyYWN0ZXIgaGV4XG5mdW5jdGlvbiByZ2JUb0hleChyLCBnLCBiLCBhbGxvdzNDaGFyKSB7XG5cbiAgICB2YXIgaGV4ID0gW1xuICAgICAgICBwYWQyKG1hdGhSb3VuZChyKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChnKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChiKS50b1N0cmluZygxNikpXG4gICAgXTtcblxuICAgIC8vIFJldHVybiBhIDMgY2hhcmFjdGVyIGhleCBpZiBwb3NzaWJsZVxuICAgIGlmIChhbGxvdzNDaGFyICYmIGhleFswXS5jaGFyQXQoMCkgPT0gaGV4WzBdLmNoYXJBdCgxKSAmJiBoZXhbMV0uY2hhckF0KDApID09IGhleFsxXS5jaGFyQXQoMSkgJiYgaGV4WzJdLmNoYXJBdCgwKSA9PSBoZXhbMl0uY2hhckF0KDEpKSB7XG4gICAgICAgIHJldHVybiBoZXhbMF0uY2hhckF0KDApICsgaGV4WzFdLmNoYXJBdCgwKSArIGhleFsyXS5jaGFyQXQoMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhleC5qb2luKFwiXCIpO1xufVxuXG4vLyBgcmdiYVRvSGV4YFxuLy8gQ29udmVydHMgYW4gUkdCQSBjb2xvciBwbHVzIGFscGhhIHRyYW5zcGFyZW5jeSB0byBoZXhcbi8vIEFzc3VtZXMgciwgZywgYiBhcmUgY29udGFpbmVkIGluIHRoZSBzZXQgWzAsIDI1NV0gYW5kXG4vLyBhIGluIFswLCAxXS4gUmV0dXJucyBhIDQgb3IgOCBjaGFyYWN0ZXIgcmdiYSBoZXhcbmZ1bmN0aW9uIHJnYmFUb0hleChyLCBnLCBiLCBhLCBhbGxvdzRDaGFyKSB7XG5cbiAgICB2YXIgaGV4ID0gW1xuICAgICAgICBwYWQyKG1hdGhSb3VuZChyKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChnKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChiKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKGNvbnZlcnREZWNpbWFsVG9IZXgoYSkpXG4gICAgXTtcblxuICAgIC8vIFJldHVybiBhIDQgY2hhcmFjdGVyIGhleCBpZiBwb3NzaWJsZVxuICAgIGlmIChhbGxvdzRDaGFyICYmIGhleFswXS5jaGFyQXQoMCkgPT0gaGV4WzBdLmNoYXJBdCgxKSAmJiBoZXhbMV0uY2hhckF0KDApID09IGhleFsxXS5jaGFyQXQoMSkgJiYgaGV4WzJdLmNoYXJBdCgwKSA9PSBoZXhbMl0uY2hhckF0KDEpICYmIGhleFszXS5jaGFyQXQoMCkgPT0gaGV4WzNdLmNoYXJBdCgxKSkge1xuICAgICAgICByZXR1cm4gaGV4WzBdLmNoYXJBdCgwKSArIGhleFsxXS5jaGFyQXQoMCkgKyBoZXhbMl0uY2hhckF0KDApICsgaGV4WzNdLmNoYXJBdCgwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGV4LmpvaW4oXCJcIik7XG59XG5cbi8vIGByZ2JhVG9BcmdiSGV4YFxuLy8gQ29udmVydHMgYW4gUkdCQSBjb2xvciB0byBhbiBBUkdCIEhleDggc3RyaW5nXG4vLyBSYXJlbHkgdXNlZCwgYnV0IHJlcXVpcmVkIGZvciBcInRvRmlsdGVyKClcIlxuZnVuY3Rpb24gcmdiYVRvQXJnYkhleChyLCBnLCBiLCBhKSB7XG5cbiAgICB2YXIgaGV4ID0gW1xuICAgICAgICBwYWQyKGNvbnZlcnREZWNpbWFsVG9IZXgoYSkpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChyKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChnKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChiKS50b1N0cmluZygxNikpXG4gICAgXTtcblxuICAgIHJldHVybiBoZXguam9pbihcIlwiKTtcbn1cblxuLy8gYGVxdWFsc2Bcbi8vIENhbiBiZSBjYWxsZWQgd2l0aCBhbnkgdGlueWNvbG9yIGlucHV0XG50aW55Y29sb3IuZXF1YWxzID0gZnVuY3Rpb24gKGNvbG9yMSwgY29sb3IyKSB7XG4gICAgaWYgKCFjb2xvcjEgfHwgIWNvbG9yMikgeyByZXR1cm4gZmFsc2U7IH1cbiAgICByZXR1cm4gdGlueWNvbG9yKGNvbG9yMSkudG9SZ2JTdHJpbmcoKSA9PSB0aW55Y29sb3IoY29sb3IyKS50b1JnYlN0cmluZygpO1xufTtcblxudGlueWNvbG9yLnJhbmRvbSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aW55Y29sb3IuZnJvbVJhdGlvKHtcbiAgICAgICAgcjogbWF0aFJhbmRvbSgpLFxuICAgICAgICBnOiBtYXRoUmFuZG9tKCksXG4gICAgICAgIGI6IG1hdGhSYW5kb20oKVxuICAgIH0pO1xufTtcblxuXG4vLyBNb2RpZmljYXRpb24gRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGFua3MgdG8gbGVzcy5qcyBmb3Igc29tZSBvZiB0aGUgYmFzaWNzIGhlcmVcbi8vIDxodHRwczovL2dpdGh1Yi5jb20vY2xvdWRoZWFkL2xlc3MuanMvYmxvYi9tYXN0ZXIvbGliL2xlc3MvZnVuY3Rpb25zLmpzPlxuXG5mdW5jdGlvbiBkZXNhdHVyYXRlKGNvbG9yLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDEwKTtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIGhzbC5zIC09IGFtb3VudCAvIDEwMDtcbiAgICBoc2wucyA9IGNsYW1wMDEoaHNsLnMpO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuZnVuY3Rpb24gc2F0dXJhdGUoY29sb3IsIGFtb3VudCkge1xuICAgIGFtb3VudCA9IChhbW91bnQgPT09IDApID8gMCA6IChhbW91bnQgfHwgMTApO1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgaHNsLnMgKz0gYW1vdW50IC8gMTAwO1xuICAgIGhzbC5zID0gY2xhbXAwMShoc2wucyk7XG4gICAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG5mdW5jdGlvbiBncmV5c2NhbGUoY29sb3IpIHtcbiAgICByZXR1cm4gdGlueWNvbG9yKGNvbG9yKS5kZXNhdHVyYXRlKDEwMCk7XG59XG5cbmZ1bmN0aW9uIGxpZ2h0ZW4gKGNvbG9yLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDEwKTtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIGhzbC5sICs9IGFtb3VudCAvIDEwMDtcbiAgICBoc2wubCA9IGNsYW1wMDEoaHNsLmwpO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuZnVuY3Rpb24gYnJpZ2h0ZW4oY29sb3IsIGFtb3VudCkge1xuICAgIGFtb3VudCA9IChhbW91bnQgPT09IDApID8gMCA6IChhbW91bnQgfHwgMTApO1xuICAgIHZhciByZ2IgPSB0aW55Y29sb3IoY29sb3IpLnRvUmdiKCk7XG4gICAgcmdiLnIgPSBtYXRoTWF4KDAsIG1hdGhNaW4oMjU1LCByZ2IuciAtIG1hdGhSb3VuZCgyNTUgKiAtIChhbW91bnQgLyAxMDApKSkpO1xuICAgIHJnYi5nID0gbWF0aE1heCgwLCBtYXRoTWluKDI1NSwgcmdiLmcgLSBtYXRoUm91bmQoMjU1ICogLSAoYW1vdW50IC8gMTAwKSkpKTtcbiAgICByZ2IuYiA9IG1hdGhNYXgoMCwgbWF0aE1pbigyNTUsIHJnYi5iIC0gbWF0aFJvdW5kKDI1NSAqIC0gKGFtb3VudCAvIDEwMCkpKSk7XG4gICAgcmV0dXJuIHRpbnljb2xvcihyZ2IpO1xufVxuXG5mdW5jdGlvbiBkYXJrZW4gKGNvbG9yLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDEwKTtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIGhzbC5sIC09IGFtb3VudCAvIDEwMDtcbiAgICBoc2wubCA9IGNsYW1wMDEoaHNsLmwpO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuLy8gU3BpbiB0YWtlcyBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGFtb3VudCB3aXRoaW4gWy0zNjAsIDM2MF0gaW5kaWNhdGluZyB0aGUgY2hhbmdlIG9mIGh1ZS5cbi8vIFZhbHVlcyBvdXRzaWRlIG9mIHRoaXMgcmFuZ2Ugd2lsbCBiZSB3cmFwcGVkIGludG8gdGhpcyByYW5nZS5cbmZ1bmN0aW9uIHNwaW4oY29sb3IsIGFtb3VudCkge1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgdmFyIGh1ZSA9IChoc2wuaCArIGFtb3VudCkgJSAzNjA7XG4gICAgaHNsLmggPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuLy8gQ29tYmluYXRpb24gRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoYW5rcyB0byBqUXVlcnkgeENvbG9yIGZvciBzb21lIG9mIHRoZSBpZGVhcyBiZWhpbmQgdGhlc2Vcbi8vIDxodHRwczovL2dpdGh1Yi5jb20vaW5mdXNpb24valF1ZXJ5LXhjb2xvci9ibG9iL21hc3Rlci9qcXVlcnkueGNvbG9yLmpzPlxuXG5mdW5jdGlvbiBjb21wbGVtZW50KGNvbG9yKSB7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wuaCA9IChoc2wuaCArIDE4MCkgJSAzNjA7XG4gICAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG5mdW5jdGlvbiB0cmlhZChjb2xvcikge1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgdmFyIGggPSBoc2wuaDtcbiAgICByZXR1cm4gW1xuICAgICAgICB0aW55Y29sb3IoY29sb3IpLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDEyMCkgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyAyNDApICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSlcbiAgICBdO1xufVxuXG5mdW5jdGlvbiB0ZXRyYWQoY29sb3IpIHtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIHZhciBoID0gaHNsLmg7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgdGlueWNvbG9yKGNvbG9yKSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyA5MCkgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyAxODApICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMjcwKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gc3BsaXRjb21wbGVtZW50KGNvbG9yKSB7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICB2YXIgaCA9IGhzbC5oO1xuICAgIHJldHVybiBbXG4gICAgICAgIHRpbnljb2xvcihjb2xvciksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgNzIpICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmx9KSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyAyMTYpICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmx9KVxuICAgIF07XG59XG5cbmZ1bmN0aW9uIGFuYWxvZ291cyhjb2xvciwgcmVzdWx0cywgc2xpY2VzKSB7XG4gICAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgNjtcbiAgICBzbGljZXMgPSBzbGljZXMgfHwgMzA7XG5cbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIHZhciBwYXJ0ID0gMzYwIC8gc2xpY2VzO1xuICAgIHZhciByZXQgPSBbdGlueWNvbG9yKGNvbG9yKV07XG5cbiAgICBmb3IgKGhzbC5oID0gKChoc2wuaCAtIChwYXJ0ICogcmVzdWx0cyA+PiAxKSkgKyA3MjApICUgMzYwOyAtLXJlc3VsdHM7ICkge1xuICAgICAgICBoc2wuaCA9IChoc2wuaCArIHBhcnQpICUgMzYwO1xuICAgICAgICByZXQucHVzaCh0aW55Y29sb3IoaHNsKSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG1vbm9jaHJvbWF0aWMoY29sb3IsIHJlc3VsdHMpIHtcbiAgICByZXN1bHRzID0gcmVzdWx0cyB8fCA2O1xuICAgIHZhciBoc3YgPSB0aW55Y29sb3IoY29sb3IpLnRvSHN2KCk7XG4gICAgdmFyIGggPSBoc3YuaCwgcyA9IGhzdi5zLCB2ID0gaHN2LnY7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIHZhciBtb2RpZmljYXRpb24gPSAxIC8gcmVzdWx0cztcblxuICAgIHdoaWxlIChyZXN1bHRzLS0pIHtcbiAgICAgICAgcmV0LnB1c2godGlueWNvbG9yKHsgaDogaCwgczogcywgdjogdn0pKTtcbiAgICAgICAgdiA9ICh2ICsgbW9kaWZpY2F0aW9uKSAlIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuLy8gVXRpbGl0eSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG50aW55Y29sb3IubWl4ID0gZnVuY3Rpb24oY29sb3IxLCBjb2xvcjIsIGFtb3VudCkge1xuICAgIGFtb3VudCA9IChhbW91bnQgPT09IDApID8gMCA6IChhbW91bnQgfHwgNTApO1xuXG4gICAgdmFyIHJnYjEgPSB0aW55Y29sb3IoY29sb3IxKS50b1JnYigpO1xuICAgIHZhciByZ2IyID0gdGlueWNvbG9yKGNvbG9yMikudG9SZ2IoKTtcblxuICAgIHZhciBwID0gYW1vdW50IC8gMTAwO1xuXG4gICAgdmFyIHJnYmEgPSB7XG4gICAgICAgIHI6ICgocmdiMi5yIC0gcmdiMS5yKSAqIHApICsgcmdiMS5yLFxuICAgICAgICBnOiAoKHJnYjIuZyAtIHJnYjEuZykgKiBwKSArIHJnYjEuZyxcbiAgICAgICAgYjogKChyZ2IyLmIgLSByZ2IxLmIpICogcCkgKyByZ2IxLmIsXG4gICAgICAgIGE6ICgocmdiMi5hIC0gcmdiMS5hKSAqIHApICsgcmdiMS5hXG4gICAgfTtcblxuICAgIHJldHVybiB0aW55Y29sb3IocmdiYSk7XG59O1xuXG5cbi8vIFJlYWRhYmlsaXR5IEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyA8aHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNjb250cmFzdC1yYXRpb2RlZiAoV0NBRyBWZXJzaW9uIDIpXG5cbi8vIGBjb250cmFzdGBcbi8vIEFuYWx5emUgdGhlIDIgY29sb3JzIGFuZCByZXR1cm5zIHRoZSBjb2xvciBjb250cmFzdCBkZWZpbmVkIGJ5IChXQ0FHIFZlcnNpb24gMilcbnRpbnljb2xvci5yZWFkYWJpbGl0eSA9IGZ1bmN0aW9uKGNvbG9yMSwgY29sb3IyKSB7XG4gICAgdmFyIGMxID0gdGlueWNvbG9yKGNvbG9yMSk7XG4gICAgdmFyIGMyID0gdGlueWNvbG9yKGNvbG9yMik7XG4gICAgcmV0dXJuIChNYXRoLm1heChjMS5nZXRMdW1pbmFuY2UoKSxjMi5nZXRMdW1pbmFuY2UoKSkrMC4wNSkgLyAoTWF0aC5taW4oYzEuZ2V0THVtaW5hbmNlKCksYzIuZ2V0THVtaW5hbmNlKCkpKzAuMDUpO1xufTtcblxuLy8gYGlzUmVhZGFibGVgXG4vLyBFbnN1cmUgdGhhdCBmb3JlZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kIGNvbG9yIGNvbWJpbmF0aW9ucyBtZWV0IFdDQUcyIGd1aWRlbGluZXMuXG4vLyBUaGUgdGhpcmQgYXJndW1lbnQgaXMgYW4gb3B0aW9uYWwgT2JqZWN0LlxuLy8gICAgICB0aGUgJ2xldmVsJyBwcm9wZXJ0eSBzdGF0ZXMgJ0FBJyBvciAnQUFBJyAtIGlmIG1pc3Npbmcgb3IgaW52YWxpZCwgaXQgZGVmYXVsdHMgdG8gJ0FBJztcbi8vICAgICAgdGhlICdzaXplJyBwcm9wZXJ0eSBzdGF0ZXMgJ2xhcmdlJyBvciAnc21hbGwnIC0gaWYgbWlzc2luZyBvciBpbnZhbGlkLCBpdCBkZWZhdWx0cyB0byAnc21hbGwnLlxuLy8gSWYgdGhlIGVudGlyZSBvYmplY3QgaXMgYWJzZW50LCBpc1JlYWRhYmxlIGRlZmF1bHRzIHRvIHtsZXZlbDpcIkFBXCIsc2l6ZTpcInNtYWxsXCJ9LlxuXG4vLyAqRXhhbXBsZSpcbi8vICAgIHRpbnljb2xvci5pc1JlYWRhYmxlKFwiIzAwMFwiLCBcIiMxMTFcIikgPT4gZmFsc2Vcbi8vICAgIHRpbnljb2xvci5pc1JlYWRhYmxlKFwiIzAwMFwiLCBcIiMxMTFcIix7bGV2ZWw6XCJBQVwiLHNpemU6XCJsYXJnZVwifSkgPT4gZmFsc2VcbnRpbnljb2xvci5pc1JlYWRhYmxlID0gZnVuY3Rpb24oY29sb3IxLCBjb2xvcjIsIHdjYWcyKSB7XG4gICAgdmFyIHJlYWRhYmlsaXR5ID0gdGlueWNvbG9yLnJlYWRhYmlsaXR5KGNvbG9yMSwgY29sb3IyKTtcbiAgICB2YXIgd2NhZzJQYXJtcywgb3V0O1xuXG4gICAgb3V0ID0gZmFsc2U7XG5cbiAgICB3Y2FnMlBhcm1zID0gdmFsaWRhdGVXQ0FHMlBhcm1zKHdjYWcyKTtcbiAgICBzd2l0Y2ggKHdjYWcyUGFybXMubGV2ZWwgKyB3Y2FnMlBhcm1zLnNpemUpIHtcbiAgICAgICAgY2FzZSBcIkFBc21hbGxcIjpcbiAgICAgICAgY2FzZSBcIkFBQWxhcmdlXCI6XG4gICAgICAgICAgICBvdXQgPSByZWFkYWJpbGl0eSA+PSA0LjU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFBbGFyZ2VcIjpcbiAgICAgICAgICAgIG91dCA9IHJlYWRhYmlsaXR5ID49IDM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFBQXNtYWxsXCI6XG4gICAgICAgICAgICBvdXQgPSByZWFkYWJpbGl0eSA+PSA3O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG5cbn07XG5cbi8vIGBtb3N0UmVhZGFibGVgXG4vLyBHaXZlbiBhIGJhc2UgY29sb3IgYW5kIGEgbGlzdCBvZiBwb3NzaWJsZSBmb3JlZ3JvdW5kIG9yIGJhY2tncm91bmRcbi8vIGNvbG9ycyBmb3IgdGhhdCBiYXNlLCByZXR1cm5zIHRoZSBtb3N0IHJlYWRhYmxlIGNvbG9yLlxuLy8gT3B0aW9uYWxseSByZXR1cm5zIEJsYWNrIG9yIFdoaXRlIGlmIHRoZSBtb3N0IHJlYWRhYmxlIGNvbG9yIGlzIHVucmVhZGFibGUuXG4vLyAqRXhhbXBsZSpcbi8vICAgIHRpbnljb2xvci5tb3N0UmVhZGFibGUodGlueWNvbG9yLm1vc3RSZWFkYWJsZShcIiMxMjNcIiwgW1wiIzEyNFwiLCBcIiMxMjVcIl0se2luY2x1ZGVGYWxsYmFja0NvbG9yczpmYWxzZX0pLnRvSGV4U3RyaW5nKCk7IC8vIFwiIzExMjI1NVwiXG4vLyAgICB0aW55Y29sb3IubW9zdFJlYWRhYmxlKHRpbnljb2xvci5tb3N0UmVhZGFibGUoXCIjMTIzXCIsIFtcIiMxMjRcIiwgXCIjMTI1XCJdLHtpbmNsdWRlRmFsbGJhY2tDb2xvcnM6dHJ1ZX0pLnRvSGV4U3RyaW5nKCk7ICAvLyBcIiNmZmZmZmZcIlxuLy8gICAgdGlueWNvbG9yLm1vc3RSZWFkYWJsZShcIiNhODAxNWFcIiwgW1wiI2ZhZjNmM1wiXSx7aW5jbHVkZUZhbGxiYWNrQ29sb3JzOnRydWUsbGV2ZWw6XCJBQUFcIixzaXplOlwibGFyZ2VcIn0pLnRvSGV4U3RyaW5nKCk7IC8vIFwiI2ZhZjNmM1wiXG4vLyAgICB0aW55Y29sb3IubW9zdFJlYWRhYmxlKFwiI2E4MDE1YVwiLCBbXCIjZmFmM2YzXCJdLHtpbmNsdWRlRmFsbGJhY2tDb2xvcnM6dHJ1ZSxsZXZlbDpcIkFBQVwiLHNpemU6XCJzbWFsbFwifSkudG9IZXhTdHJpbmcoKTsgLy8gXCIjZmZmZmZmXCJcbnRpbnljb2xvci5tb3N0UmVhZGFibGUgPSBmdW5jdGlvbihiYXNlQ29sb3IsIGNvbG9yTGlzdCwgYXJncykge1xuICAgIHZhciBiZXN0Q29sb3IgPSBudWxsO1xuICAgIHZhciBiZXN0U2NvcmUgPSAwO1xuICAgIHZhciByZWFkYWJpbGl0eTtcbiAgICB2YXIgaW5jbHVkZUZhbGxiYWNrQ29sb3JzLCBsZXZlbCwgc2l6ZSA7XG4gICAgYXJncyA9IGFyZ3MgfHwge307XG4gICAgaW5jbHVkZUZhbGxiYWNrQ29sb3JzID0gYXJncy5pbmNsdWRlRmFsbGJhY2tDb2xvcnMgO1xuICAgIGxldmVsID0gYXJncy5sZXZlbDtcbiAgICBzaXplID0gYXJncy5zaXplO1xuXG4gICAgZm9yICh2YXIgaT0gMDsgaSA8IGNvbG9yTGlzdC5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgcmVhZGFiaWxpdHkgPSB0aW55Y29sb3IucmVhZGFiaWxpdHkoYmFzZUNvbG9yLCBjb2xvckxpc3RbaV0pO1xuICAgICAgICBpZiAocmVhZGFiaWxpdHkgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICAgIGJlc3RTY29yZSA9IHJlYWRhYmlsaXR5O1xuICAgICAgICAgICAgYmVzdENvbG9yID0gdGlueWNvbG9yKGNvbG9yTGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGlueWNvbG9yLmlzUmVhZGFibGUoYmFzZUNvbG9yLCBiZXN0Q29sb3IsIHtcImxldmVsXCI6bGV2ZWwsXCJzaXplXCI6c2l6ZX0pIHx8ICFpbmNsdWRlRmFsbGJhY2tDb2xvcnMpIHtcbiAgICAgICAgcmV0dXJuIGJlc3RDb2xvcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFyZ3MuaW5jbHVkZUZhbGxiYWNrQ29sb3JzPWZhbHNlO1xuICAgICAgICByZXR1cm4gdGlueWNvbG9yLm1vc3RSZWFkYWJsZShiYXNlQ29sb3IsW1wiI2ZmZlwiLCBcIiMwMDBcIl0sYXJncyk7XG4gICAgfVxufTtcblxuXG4vLyBCaWcgTGlzdCBvZiBDb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvI3N2Zy1jb2xvcj5cbnZhciBuYW1lcyA9IHRpbnljb2xvci5uYW1lcyA9IHtcbiAgICBhbGljZWJsdWU6IFwiZjBmOGZmXCIsXG4gICAgYW50aXF1ZXdoaXRlOiBcImZhZWJkN1wiLFxuICAgIGFxdWE6IFwiMGZmXCIsXG4gICAgYXF1YW1hcmluZTogXCI3ZmZmZDRcIixcbiAgICBhenVyZTogXCJmMGZmZmZcIixcbiAgICBiZWlnZTogXCJmNWY1ZGNcIixcbiAgICBiaXNxdWU6IFwiZmZlNGM0XCIsXG4gICAgYmxhY2s6IFwiMDAwXCIsXG4gICAgYmxhbmNoZWRhbG1vbmQ6IFwiZmZlYmNkXCIsXG4gICAgYmx1ZTogXCIwMGZcIixcbiAgICBibHVldmlvbGV0OiBcIjhhMmJlMlwiLFxuICAgIGJyb3duOiBcImE1MmEyYVwiLFxuICAgIGJ1cmx5d29vZDogXCJkZWI4ODdcIixcbiAgICBidXJudHNpZW5uYTogXCJlYTdlNWRcIixcbiAgICBjYWRldGJsdWU6IFwiNWY5ZWEwXCIsXG4gICAgY2hhcnRyZXVzZTogXCI3ZmZmMDBcIixcbiAgICBjaG9jb2xhdGU6IFwiZDI2OTFlXCIsXG4gICAgY29yYWw6IFwiZmY3ZjUwXCIsXG4gICAgY29ybmZsb3dlcmJsdWU6IFwiNjQ5NWVkXCIsXG4gICAgY29ybnNpbGs6IFwiZmZmOGRjXCIsXG4gICAgY3JpbXNvbjogXCJkYzE0M2NcIixcbiAgICBjeWFuOiBcIjBmZlwiLFxuICAgIGRhcmtibHVlOiBcIjAwMDA4YlwiLFxuICAgIGRhcmtjeWFuOiBcIjAwOGI4YlwiLFxuICAgIGRhcmtnb2xkZW5yb2Q6IFwiYjg4NjBiXCIsXG4gICAgZGFya2dyYXk6IFwiYTlhOWE5XCIsXG4gICAgZGFya2dyZWVuOiBcIjAwNjQwMFwiLFxuICAgIGRhcmtncmV5OiBcImE5YTlhOVwiLFxuICAgIGRhcmtraGFraTogXCJiZGI3NmJcIixcbiAgICBkYXJrbWFnZW50YTogXCI4YjAwOGJcIixcbiAgICBkYXJrb2xpdmVncmVlbjogXCI1NTZiMmZcIixcbiAgICBkYXJrb3JhbmdlOiBcImZmOGMwMFwiLFxuICAgIGRhcmtvcmNoaWQ6IFwiOTkzMmNjXCIsXG4gICAgZGFya3JlZDogXCI4YjAwMDBcIixcbiAgICBkYXJrc2FsbW9uOiBcImU5OTY3YVwiLFxuICAgIGRhcmtzZWFncmVlbjogXCI4ZmJjOGZcIixcbiAgICBkYXJrc2xhdGVibHVlOiBcIjQ4M2Q4YlwiLFxuICAgIGRhcmtzbGF0ZWdyYXk6IFwiMmY0ZjRmXCIsXG4gICAgZGFya3NsYXRlZ3JleTogXCIyZjRmNGZcIixcbiAgICBkYXJrdHVycXVvaXNlOiBcIjAwY2VkMVwiLFxuICAgIGRhcmt2aW9sZXQ6IFwiOTQwMGQzXCIsXG4gICAgZGVlcHBpbms6IFwiZmYxNDkzXCIsXG4gICAgZGVlcHNreWJsdWU6IFwiMDBiZmZmXCIsXG4gICAgZGltZ3JheTogXCI2OTY5NjlcIixcbiAgICBkaW1ncmV5OiBcIjY5Njk2OVwiLFxuICAgIGRvZGdlcmJsdWU6IFwiMWU5MGZmXCIsXG4gICAgZmlyZWJyaWNrOiBcImIyMjIyMlwiLFxuICAgIGZsb3JhbHdoaXRlOiBcImZmZmFmMFwiLFxuICAgIGZvcmVzdGdyZWVuOiBcIjIyOGIyMlwiLFxuICAgIGZ1Y2hzaWE6IFwiZjBmXCIsXG4gICAgZ2FpbnNib3JvOiBcImRjZGNkY1wiLFxuICAgIGdob3N0d2hpdGU6IFwiZjhmOGZmXCIsXG4gICAgZ29sZDogXCJmZmQ3MDBcIixcbiAgICBnb2xkZW5yb2Q6IFwiZGFhNTIwXCIsXG4gICAgZ3JheTogXCI4MDgwODBcIixcbiAgICBncmVlbjogXCIwMDgwMDBcIixcbiAgICBncmVlbnllbGxvdzogXCJhZGZmMmZcIixcbiAgICBncmV5OiBcIjgwODA4MFwiLFxuICAgIGhvbmV5ZGV3OiBcImYwZmZmMFwiLFxuICAgIGhvdHBpbms6IFwiZmY2OWI0XCIsXG4gICAgaW5kaWFucmVkOiBcImNkNWM1Y1wiLFxuICAgIGluZGlnbzogXCI0YjAwODJcIixcbiAgICBpdm9yeTogXCJmZmZmZjBcIixcbiAgICBraGFraTogXCJmMGU2OGNcIixcbiAgICBsYXZlbmRlcjogXCJlNmU2ZmFcIixcbiAgICBsYXZlbmRlcmJsdXNoOiBcImZmZjBmNVwiLFxuICAgIGxhd25ncmVlbjogXCI3Y2ZjMDBcIixcbiAgICBsZW1vbmNoaWZmb246IFwiZmZmYWNkXCIsXG4gICAgbGlnaHRibHVlOiBcImFkZDhlNlwiLFxuICAgIGxpZ2h0Y29yYWw6IFwiZjA4MDgwXCIsXG4gICAgbGlnaHRjeWFuOiBcImUwZmZmZlwiLFxuICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiBcImZhZmFkMlwiLFxuICAgIGxpZ2h0Z3JheTogXCJkM2QzZDNcIixcbiAgICBsaWdodGdyZWVuOiBcIjkwZWU5MFwiLFxuICAgIGxpZ2h0Z3JleTogXCJkM2QzZDNcIixcbiAgICBsaWdodHBpbms6IFwiZmZiNmMxXCIsXG4gICAgbGlnaHRzYWxtb246IFwiZmZhMDdhXCIsXG4gICAgbGlnaHRzZWFncmVlbjogXCIyMGIyYWFcIixcbiAgICBsaWdodHNreWJsdWU6IFwiODdjZWZhXCIsXG4gICAgbGlnaHRzbGF0ZWdyYXk6IFwiNzg5XCIsXG4gICAgbGlnaHRzbGF0ZWdyZXk6IFwiNzg5XCIsXG4gICAgbGlnaHRzdGVlbGJsdWU6IFwiYjBjNGRlXCIsXG4gICAgbGlnaHR5ZWxsb3c6IFwiZmZmZmUwXCIsXG4gICAgbGltZTogXCIwZjBcIixcbiAgICBsaW1lZ3JlZW46IFwiMzJjZDMyXCIsXG4gICAgbGluZW46IFwiZmFmMGU2XCIsXG4gICAgbWFnZW50YTogXCJmMGZcIixcbiAgICBtYXJvb246IFwiODAwMDAwXCIsXG4gICAgbWVkaXVtYXF1YW1hcmluZTogXCI2NmNkYWFcIixcbiAgICBtZWRpdW1ibHVlOiBcIjAwMDBjZFwiLFxuICAgIG1lZGl1bW9yY2hpZDogXCJiYTU1ZDNcIixcbiAgICBtZWRpdW1wdXJwbGU6IFwiOTM3MGRiXCIsXG4gICAgbWVkaXVtc2VhZ3JlZW46IFwiM2NiMzcxXCIsXG4gICAgbWVkaXVtc2xhdGVibHVlOiBcIjdiNjhlZVwiLFxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiBcIjAwZmE5YVwiLFxuICAgIG1lZGl1bXR1cnF1b2lzZTogXCI0OGQxY2NcIixcbiAgICBtZWRpdW12aW9sZXRyZWQ6IFwiYzcxNTg1XCIsXG4gICAgbWlkbmlnaHRibHVlOiBcIjE5MTk3MFwiLFxuICAgIG1pbnRjcmVhbTogXCJmNWZmZmFcIixcbiAgICBtaXN0eXJvc2U6IFwiZmZlNGUxXCIsXG4gICAgbW9jY2FzaW46IFwiZmZlNGI1XCIsXG4gICAgbmF2YWpvd2hpdGU6IFwiZmZkZWFkXCIsXG4gICAgbmF2eTogXCIwMDAwODBcIixcbiAgICBvbGRsYWNlOiBcImZkZjVlNlwiLFxuICAgIG9saXZlOiBcIjgwODAwMFwiLFxuICAgIG9saXZlZHJhYjogXCI2YjhlMjNcIixcbiAgICBvcmFuZ2U6IFwiZmZhNTAwXCIsXG4gICAgb3JhbmdlcmVkOiBcImZmNDUwMFwiLFxuICAgIG9yY2hpZDogXCJkYTcwZDZcIixcbiAgICBwYWxlZ29sZGVucm9kOiBcImVlZThhYVwiLFxuICAgIHBhbGVncmVlbjogXCI5OGZiOThcIixcbiAgICBwYWxldHVycXVvaXNlOiBcImFmZWVlZVwiLFxuICAgIHBhbGV2aW9sZXRyZWQ6IFwiZGI3MDkzXCIsXG4gICAgcGFwYXlhd2hpcDogXCJmZmVmZDVcIixcbiAgICBwZWFjaHB1ZmY6IFwiZmZkYWI5XCIsXG4gICAgcGVydTogXCJjZDg1M2ZcIixcbiAgICBwaW5rOiBcImZmYzBjYlwiLFxuICAgIHBsdW06IFwiZGRhMGRkXCIsXG4gICAgcG93ZGVyYmx1ZTogXCJiMGUwZTZcIixcbiAgICBwdXJwbGU6IFwiODAwMDgwXCIsXG4gICAgcmViZWNjYXB1cnBsZTogXCI2NjMzOTlcIixcbiAgICByZWQ6IFwiZjAwXCIsXG4gICAgcm9zeWJyb3duOiBcImJjOGY4ZlwiLFxuICAgIHJveWFsYmx1ZTogXCI0MTY5ZTFcIixcbiAgICBzYWRkbGVicm93bjogXCI4YjQ1MTNcIixcbiAgICBzYWxtb246IFwiZmE4MDcyXCIsXG4gICAgc2FuZHlicm93bjogXCJmNGE0NjBcIixcbiAgICBzZWFncmVlbjogXCIyZThiNTdcIixcbiAgICBzZWFzaGVsbDogXCJmZmY1ZWVcIixcbiAgICBzaWVubmE6IFwiYTA1MjJkXCIsXG4gICAgc2lsdmVyOiBcImMwYzBjMFwiLFxuICAgIHNreWJsdWU6IFwiODdjZWViXCIsXG4gICAgc2xhdGVibHVlOiBcIjZhNWFjZFwiLFxuICAgIHNsYXRlZ3JheTogXCI3MDgwOTBcIixcbiAgICBzbGF0ZWdyZXk6IFwiNzA4MDkwXCIsXG4gICAgc25vdzogXCJmZmZhZmFcIixcbiAgICBzcHJpbmdncmVlbjogXCIwMGZmN2ZcIixcbiAgICBzdGVlbGJsdWU6IFwiNDY4MmI0XCIsXG4gICAgdGFuOiBcImQyYjQ4Y1wiLFxuICAgIHRlYWw6IFwiMDA4MDgwXCIsXG4gICAgdGhpc3RsZTogXCJkOGJmZDhcIixcbiAgICB0b21hdG86IFwiZmY2MzQ3XCIsXG4gICAgdHVycXVvaXNlOiBcIjQwZTBkMFwiLFxuICAgIHZpb2xldDogXCJlZTgyZWVcIixcbiAgICB3aGVhdDogXCJmNWRlYjNcIixcbiAgICB3aGl0ZTogXCJmZmZcIixcbiAgICB3aGl0ZXNtb2tlOiBcImY1ZjVmNVwiLFxuICAgIHllbGxvdzogXCJmZjBcIixcbiAgICB5ZWxsb3dncmVlbjogXCI5YWNkMzJcIlxufTtcblxuLy8gTWFrZSBpdCBlYXN5IHRvIGFjY2VzcyBjb2xvcnMgdmlhIGBoZXhOYW1lc1toZXhdYFxudmFyIGhleE5hbWVzID0gdGlueWNvbG9yLmhleE5hbWVzID0gZmxpcChuYW1lcyk7XG5cblxuLy8gVXRpbGl0aWVzXG4vLyAtLS0tLS0tLS1cblxuLy8gYHsgJ25hbWUxJzogJ3ZhbDEnIH1gIGJlY29tZXMgYHsgJ3ZhbDEnOiAnbmFtZTEnIH1gXG5mdW5jdGlvbiBmbGlwKG8pIHtcbiAgICB2YXIgZmxpcHBlZCA9IHsgfTtcbiAgICBmb3IgKHZhciBpIGluIG8pIHtcbiAgICAgICAgaWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGZsaXBwZWRbb1tpXV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmbGlwcGVkO1xufVxuXG4vLyBSZXR1cm4gYSB2YWxpZCBhbHBoYSB2YWx1ZSBbMCwxXSB3aXRoIGFsbCBpbnZhbGlkIHZhbHVlcyBiZWluZyBzZXQgdG8gMVxuZnVuY3Rpb24gYm91bmRBbHBoYShhKSB7XG4gICAgYSA9IHBhcnNlRmxvYXQoYSk7XG5cbiAgICBpZiAoaXNOYU4oYSkgfHwgYSA8IDAgfHwgYSA+IDEpIHtcbiAgICAgICAgYSA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbi8vIFRha2UgaW5wdXQgZnJvbSBbMCwgbl0gYW5kIHJldHVybiBpdCBhcyBbMCwgMV1cbmZ1bmN0aW9uIGJvdW5kMDEobiwgbWF4KSB7XG4gICAgaWYgKGlzT25lUG9pbnRaZXJvKG4pKSB7IG4gPSBcIjEwMCVcIjsgfVxuXG4gICAgdmFyIHByb2Nlc3NQZXJjZW50ID0gaXNQZXJjZW50YWdlKG4pO1xuICAgIG4gPSBtYXRoTWluKG1heCwgbWF0aE1heCgwLCBwYXJzZUZsb2F0KG4pKSk7XG5cbiAgICAvLyBBdXRvbWF0aWNhbGx5IGNvbnZlcnQgcGVyY2VudGFnZSBpbnRvIG51bWJlclxuICAgIGlmIChwcm9jZXNzUGVyY2VudCkge1xuICAgICAgICBuID0gcGFyc2VJbnQobiAqIG1heCwgMTApIC8gMTAwO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvcnNcbiAgICBpZiAoKE1hdGguYWJzKG4gLSBtYXgpIDwgMC4wMDAwMDEpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgaW50byBbMCwgMV0gcmFuZ2UgaWYgaXQgaXNuJ3QgYWxyZWFkeVxuICAgIHJldHVybiAobiAlIG1heCkgLyBwYXJzZUZsb2F0KG1heCk7XG59XG5cbi8vIEZvcmNlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMVxuZnVuY3Rpb24gY2xhbXAwMSh2YWwpIHtcbiAgICByZXR1cm4gbWF0aE1pbigxLCBtYXRoTWF4KDAsIHZhbCkpO1xufVxuXG4vLyBQYXJzZSBhIGJhc2UtMTYgaGV4IHZhbHVlIGludG8gYSBiYXNlLTEwIGludGVnZXJcbmZ1bmN0aW9uIHBhcnNlSW50RnJvbUhleCh2YWwpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsLCAxNik7XG59XG5cbi8vIE5lZWQgdG8gaGFuZGxlIDEuMCBhcyAxMDAlLCBzaW5jZSBvbmNlIGl0IGlzIGEgbnVtYmVyLCB0aGVyZSBpcyBubyBkaWZmZXJlbmNlIGJldHdlZW4gaXQgYW5kIDFcbi8vIDxodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc0MjIwNzIvamF2YXNjcmlwdC1ob3ctdG8tZGV0ZWN0LW51bWJlci1hcy1hLWRlY2ltYWwtaW5jbHVkaW5nLTEtMD5cbmZ1bmN0aW9uIGlzT25lUG9pbnRaZXJvKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT0gXCJzdHJpbmdcIiAmJiBuLmluZGV4T2YoJy4nKSAhPSAtMSAmJiBwYXJzZUZsb2F0KG4pID09PSAxO1xufVxuXG4vLyBDaGVjayB0byBzZWUgaWYgc3RyaW5nIHBhc3NlZCBpbiBpcyBhIHBlcmNlbnRhZ2VcbmZ1bmN0aW9uIGlzUGVyY2VudGFnZShuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuID09PSBcInN0cmluZ1wiICYmIG4uaW5kZXhPZignJScpICE9IC0xO1xufVxuXG4vLyBGb3JjZSBhIGhleCB2YWx1ZSB0byBoYXZlIDIgY2hhcmFjdGVyc1xuZnVuY3Rpb24gcGFkMihjKSB7XG4gICAgcmV0dXJuIGMubGVuZ3RoID09IDEgPyAnMCcgKyBjIDogJycgKyBjO1xufVxuXG4vLyBSZXBsYWNlIGEgZGVjaW1hbCB3aXRoIGl0J3MgcGVyY2VudGFnZSB2YWx1ZVxuZnVuY3Rpb24gY29udmVydFRvUGVyY2VudGFnZShuKSB7XG4gICAgaWYgKG4gPD0gMSkge1xuICAgICAgICBuID0gKG4gKiAxMDApICsgXCIlXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG47XG59XG5cbi8vIENvbnZlcnRzIGEgZGVjaW1hbCB0byBhIGhleCB2YWx1ZVxuZnVuY3Rpb24gY29udmVydERlY2ltYWxUb0hleChkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQocGFyc2VGbG9hdChkKSAqIDI1NSkudG9TdHJpbmcoMTYpO1xufVxuLy8gQ29udmVydHMgYSBoZXggdmFsdWUgdG8gYSBkZWNpbWFsXG5mdW5jdGlvbiBjb252ZXJ0SGV4VG9EZWNpbWFsKGgpIHtcbiAgICByZXR1cm4gKHBhcnNlSW50RnJvbUhleChoKSAvIDI1NSk7XG59XG5cbnZhciBtYXRjaGVycyA9IChmdW5jdGlvbigpIHtcblxuICAgIC8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXZhbHVlcy8jaW50ZWdlcnM+XG4gICAgdmFyIENTU19JTlRFR0VSID0gXCJbLVxcXFwrXT9cXFxcZCslP1wiO1xuXG4gICAgLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtdmFsdWVzLyNudW1iZXItdmFsdWU+XG4gICAgdmFyIENTU19OVU1CRVIgPSBcIlstXFxcXCtdP1xcXFxkKlxcXFwuXFxcXGQrJT9cIjtcblxuICAgIC8vIEFsbG93IHBvc2l0aXZlL25lZ2F0aXZlIGludGVnZXIvbnVtYmVyLiAgRG9uJ3QgY2FwdHVyZSB0aGUgZWl0aGVyL29yLCBqdXN0IHRoZSBlbnRpcmUgb3V0Y29tZS5cbiAgICB2YXIgQ1NTX1VOSVQgPSBcIig/OlwiICsgQ1NTX05VTUJFUiArIFwiKXwoPzpcIiArIENTU19JTlRFR0VSICsgXCIpXCI7XG5cbiAgICAvLyBBY3R1YWwgbWF0Y2hpbmcuXG4gICAgLy8gUGFyZW50aGVzZXMgYW5kIGNvbW1hcyBhcmUgb3B0aW9uYWwsIGJ1dCBub3QgcmVxdWlyZWQuXG4gICAgLy8gV2hpdGVzcGFjZSBjYW4gdGFrZSB0aGUgcGxhY2Ugb2YgY29tbWFzIG9yIG9wZW5pbmcgcGFyZW5cbiAgICB2YXIgUEVSTUlTU0lWRV9NQVRDSDMgPSBcIltcXFxcc3xcXFxcKF0rKFwiICsgQ1NTX1VOSVQgKyBcIilbLHxcXFxcc10rKFwiICsgQ1NTX1VOSVQgKyBcIilbLHxcXFxcc10rKFwiICsgQ1NTX1VOSVQgKyBcIilcXFxccypcXFxcKT9cIjtcbiAgICB2YXIgUEVSTUlTU0lWRV9NQVRDSDQgPSBcIltcXFxcc3xcXFxcKF0rKFwiICsgQ1NTX1VOSVQgKyBcIilbLHxcXFxcc10rKFwiICsgQ1NTX1VOSVQgKyBcIilbLHxcXFxcc10rKFwiICsgQ1NTX1VOSVQgKyBcIilbLHxcXFxcc10rKFwiICsgQ1NTX1VOSVQgKyBcIilcXFxccypcXFxcKT9cIjtcblxuICAgIHJldHVybiB7XG4gICAgICAgIENTU19VTklUOiBuZXcgUmVnRXhwKENTU19VTklUKSxcbiAgICAgICAgcmdiOiBuZXcgUmVnRXhwKFwicmdiXCIgKyBQRVJNSVNTSVZFX01BVENIMyksXG4gICAgICAgIHJnYmE6IG5ldyBSZWdFeHAoXCJyZ2JhXCIgKyBQRVJNSVNTSVZFX01BVENINCksXG4gICAgICAgIGhzbDogbmV3IFJlZ0V4cChcImhzbFwiICsgUEVSTUlTU0lWRV9NQVRDSDMpLFxuICAgICAgICBoc2xhOiBuZXcgUmVnRXhwKFwiaHNsYVwiICsgUEVSTUlTU0lWRV9NQVRDSDQpLFxuICAgICAgICBoc3Y6IG5ldyBSZWdFeHAoXCJoc3ZcIiArIFBFUk1JU1NJVkVfTUFUQ0gzKSxcbiAgICAgICAgaHN2YTogbmV3IFJlZ0V4cChcImhzdmFcIiArIFBFUk1JU1NJVkVfTUFUQ0g0KSxcbiAgICAgICAgaGV4MzogL14jPyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLFxuICAgICAgICBoZXg2OiAvXiM/KFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC8sXG4gICAgICAgIGhleDQ6IC9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8sXG4gICAgICAgIGhleDg6IC9eIz8oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC9cbiAgICB9O1xufSkoKTtcblxuLy8gYGlzVmFsaWRDU1NVbml0YFxuLy8gVGFrZSBpbiBhIHNpbmdsZSBzdHJpbmcgLyBudW1iZXIgYW5kIGNoZWNrIHRvIHNlZSBpZiBpdCBsb29rcyBsaWtlIGEgQ1NTIHVuaXRcbi8vIChzZWUgYG1hdGNoZXJzYCBhYm92ZSBmb3IgZGVmaW5pdGlvbikuXG5mdW5jdGlvbiBpc1ZhbGlkQ1NTVW5pdChjb2xvcikge1xuICAgIHJldHVybiAhIW1hdGNoZXJzLkNTU19VTklULmV4ZWMoY29sb3IpO1xufVxuXG4vLyBgc3RyaW5nSW5wdXRUb09iamVjdGBcbi8vIFBlcm1pc3NpdmUgc3RyaW5nIHBhcnNpbmcuICBUYWtlIGluIGEgbnVtYmVyIG9mIGZvcm1hdHMsIGFuZCBvdXRwdXQgYW4gb2JqZWN0XG4vLyBiYXNlZCBvbiBkZXRlY3RlZCBmb3JtYXQuICBSZXR1cm5zIGB7IHIsIGcsIGIgfWAgb3IgYHsgaCwgcywgbCB9YCBvciBgeyBoLCBzLCB2fWBcbmZ1bmN0aW9uIHN0cmluZ0lucHV0VG9PYmplY3QoY29sb3IpIHtcblxuICAgIGNvbG9yID0gY29sb3IucmVwbGFjZSh0cmltTGVmdCwnJykucmVwbGFjZSh0cmltUmlnaHQsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBuYW1lZCA9IGZhbHNlO1xuICAgIGlmIChuYW1lc1tjb2xvcl0pIHtcbiAgICAgICAgY29sb3IgPSBuYW1lc1tjb2xvcl07XG4gICAgICAgIG5hbWVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29sb3IgPT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICByZXR1cm4geyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwLCBmb3JtYXQ6IFwibmFtZVwiIH07XG4gICAgfVxuXG4gICAgLy8gVHJ5IHRvIG1hdGNoIHN0cmluZyBpbnB1dCB1c2luZyByZWd1bGFyIGV4cHJlc3Npb25zLlxuICAgIC8vIEtlZXAgbW9zdCBvZiB0aGUgbnVtYmVyIGJvdW5kaW5nIG91dCBvZiB0aGlzIGZ1bmN0aW9uIC0gZG9uJ3Qgd29ycnkgYWJvdXQgWzAsMV0gb3IgWzAsMTAwXSBvciBbMCwzNjBdXG4gICAgLy8gSnVzdCByZXR1cm4gYW4gb2JqZWN0IGFuZCBsZXQgdGhlIGNvbnZlcnNpb24gZnVuY3Rpb25zIGhhbmRsZSB0aGF0LlxuICAgIC8vIFRoaXMgd2F5IHRoZSByZXN1bHQgd2lsbCBiZSB0aGUgc2FtZSB3aGV0aGVyIHRoZSB0aW55Y29sb3IgaXMgaW5pdGlhbGl6ZWQgd2l0aCBzdHJpbmcgb3Igb2JqZWN0LlxuICAgIHZhciBtYXRjaDtcbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMucmdiLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyByOiBtYXRjaFsxXSwgZzogbWF0Y2hbMl0sIGI6IG1hdGNoWzNdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5yZ2JhLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyByOiBtYXRjaFsxXSwgZzogbWF0Y2hbMl0sIGI6IG1hdGNoWzNdLCBhOiBtYXRjaFs0XSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaHNsLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIGw6IG1hdGNoWzNdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oc2xhLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIGw6IG1hdGNoWzNdLCBhOiBtYXRjaFs0XSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaHN2LmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIHY6IG1hdGNoWzNdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oc3ZhLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIHY6IG1hdGNoWzNdLCBhOiBtYXRjaFs0XSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaGV4OC5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSksXG4gICAgICAgICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0pLFxuICAgICAgICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdKSxcbiAgICAgICAgICAgIGE6IGNvbnZlcnRIZXhUb0RlY2ltYWwobWF0Y2hbNF0pLFxuICAgICAgICAgICAgZm9ybWF0OiBuYW1lZCA/IFwibmFtZVwiIDogXCJoZXg4XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhleDYuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0pLFxuICAgICAgICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gXCJuYW1lXCIgOiBcImhleFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oZXg0LmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzFdICsgJycgKyBtYXRjaFsxXSksXG4gICAgICAgICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0gKyAnJyArIG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSArICcnICsgbWF0Y2hbM10pLFxuICAgICAgICAgICAgYTogY29udmVydEhleFRvRGVjaW1hbChtYXRjaFs0XSArICcnICsgbWF0Y2hbNF0pLFxuICAgICAgICAgICAgZm9ybWF0OiBuYW1lZCA/IFwibmFtZVwiIDogXCJoZXg4XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhleDMuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0gKyAnJyArIG1hdGNoWzFdKSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSArICcnICsgbWF0Y2hbMl0pLFxuICAgICAgICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdICsgJycgKyBtYXRjaFszXSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gXCJuYW1lXCIgOiBcImhleFwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdDQUcyUGFybXMocGFybXMpIHtcbiAgICAvLyByZXR1cm4gdmFsaWQgV0NBRzIgcGFybXMgZm9yIGlzUmVhZGFibGUuXG4gICAgLy8gSWYgaW5wdXQgcGFybXMgYXJlIGludmFsaWQsIHJldHVybiB7XCJsZXZlbFwiOlwiQUFcIiwgXCJzaXplXCI6XCJzbWFsbFwifVxuICAgIHZhciBsZXZlbCwgc2l6ZTtcbiAgICBwYXJtcyA9IHBhcm1zIHx8IHtcImxldmVsXCI6XCJBQVwiLCBcInNpemVcIjpcInNtYWxsXCJ9O1xuICAgIGxldmVsID0gKHBhcm1zLmxldmVsIHx8IFwiQUFcIikudG9VcHBlckNhc2UoKTtcbiAgICBzaXplID0gKHBhcm1zLnNpemUgfHwgXCJzbWFsbFwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChsZXZlbCAhPT0gXCJBQVwiICYmIGxldmVsICE9PSBcIkFBQVwiKSB7XG4gICAgICAgIGxldmVsID0gXCJBQVwiO1xuICAgIH1cbiAgICBpZiAoc2l6ZSAhPT0gXCJzbWFsbFwiICYmIHNpemUgIT09IFwibGFyZ2VcIikge1xuICAgICAgICBzaXplID0gXCJzbWFsbFwiO1xuICAgIH1cbiAgICByZXR1cm4ge1wibGV2ZWxcIjpsZXZlbCwgXCJzaXplXCI6c2l6ZX07XG59XG5cbi8vIE5vZGU6IEV4cG9ydCBmdW5jdGlvblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHRpbnljb2xvcjtcbn1cbi8vIEFNRC9yZXF1aXJlanM6IERlZmluZSB0aGUgbW9kdWxlXG5lbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24gKCkge3JldHVybiB0aW55Y29sb3I7fSk7XG59XG4vLyBCcm93c2VyOiBFeHBvc2UgdG8gd2luZG93XG5lbHNlIHtcbiAgICB3aW5kb3cudGlueWNvbG9yID0gdGlueWNvbG9yO1xufVxuXG59KShNYXRoKTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge1xuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0UGF0aCxcblx0U1ZHLFxuXHRSZWN0LFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHtcblx0Y3JlYXRlQmxvY2ssXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRJbm5lckJsb2Nrcyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InO1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdnZWNrby9ncmlkLWxheW91dC1iYXNpYyc7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnQmFzaWMnICksXG5cblx0cGFyZW50OiBbJ2dlY2tvL2dyaWQtbGF5b3V0J10sXG5cblx0aWNvbjogPFNWRyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxQYXRoIGQ9XCJNMCwwaDI0djI0SDBWMHogTTAsMGgyNHYyNEgwVjB6XCIgZmlsbD1cIm5vbmVcIiAvPjxQYXRoIGQ9XCJtMjAgN3YxMGgtMTZ2LTEwaDE2bTAtMmgtMTZjLTEuMSAwLTEuOTkgMC45LTEuOTkgMmwtMC4wMSAxMGMwIDEuMSAwLjkgMiAyIDJoMTZjMS4xIDAgMi0wLjkgMi0ydi0xMGMwLTEuMS0wLjktMi0yLTJ6XCIgLz48UmVjdCB4PVwiMTFcIiB5PVwiOFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjxSZWN0IHg9XCIxMVwiIHk9XCIxMVwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjxSZWN0IHg9XCI4XCIgeT1cIjhcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIyXCIgLz48UmVjdCB4PVwiOFwiIHk9XCIxMVwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjxSZWN0IHg9XCI1XCIgeT1cIjExXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMlwiIC8+PFJlY3QgeD1cIjVcIiB5PVwiOFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjxSZWN0IHg9XCI4XCIgeT1cIjE0XCIgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMlwiIC8+PFJlY3QgeD1cIjE0XCIgeT1cIjExXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMlwiIC8+PFJlY3QgeD1cIjE0XCIgeT1cIjhcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIyXCIgLz48UmVjdCB4PVwiMTdcIiB5PVwiMTFcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIyXCIgLz48UmVjdCB4PVwiMTdcIiB5PVwiOFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjJcIiAvPjwvU1ZHPixcblxuXHRkZXNjcmlwdGlvbjogX18oICdBbiBpbWFnZSBHcmlkIEJsb2NrLicgKSxcblxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0c3VwcG9ydHM6IHtcblx0XHRjbGFzc05hbWU6IHRydWUsXG5cdFx0aW5zZXJ0ZXI6IHRydWUsXG5cdFx0cmV1c2FibGU6IGZhbHNlLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdHN0eWxlczogW1xuXHRcdHsgbmFtZTogJ2RlZmF1bHQnLCBsYWJlbDogX18oICdEZWZhdWx0JyksIGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHRdLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRoOiB7IHR5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAxfSxcblx0XHR3OiB7IHR5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAxfSxcblx0fSxcblxuXHR0cmFuc2Zvcm1zOiB7XG5cdFx0ZnJvbTogW1xuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0XHRibG9ja3M6IFsnZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbScsICdnZWNrby9ncmlkLWxheW91dC1pbWFnZSddLFxuXHRcdFx0XHR0cmFuc2Zvcm06IChhdHRyaWJ1dGVzLCBpbm5lckJsb2NrcykgPT4ge1xuXHRcdFx0XHRcdC8vIEl0IGFwcGVhcnMgdGhhdCBpbm5lckJsb2NrcyB3aWxsIGJlIGFkZGVkIGluIHRoZSBmdXR1cmUuXG5cdFx0XHRcdFx0Y29uc3Qge2gsIHd9ID0gYXR0cmlidXRlcztcblx0XHRcdFx0XHRyZXR1cm4gY3JlYXRlQmxvY2soJ2dlY2tvL2dyaWQtbGF5b3V0LWJhc2ljJywge1xuXHRcdFx0XHRcdFx0aDogaCxcblx0XHRcdFx0XHRcdHc6IHcsXG5cdFx0XHRcdFx0fSwgaW5uZXJCbG9ja3MpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcdFxuXHRcdF0sXG5cdH0sXG5cblx0ZGVwcmVjYXRlZDogW3tcblx0XHRtaWdyYXRlKCkge30sXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudCAvID4gO1xuXHRcdH0sXG5cdH1dLFxuXG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGluc2VydEJsb2Nrc0FmdGVyIH0pIHtcblx0XHRjb25zdCB7XG5cdFx0XHRoLFxuXHRcdFx0dyxcblx0XHR9ID0gYXR0cmlidXRlcztcblx0XHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0XHRncmlkQ29sdW1uRW5kOiAnc3BhbiAnKyB3LFxuXHRcdFx0Z3JpZFJvd0VuZDogJ3NwYW4gJyArIGgsXG5cdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIkdyaWQgSXRlbVwiPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSGVpZ2h0JyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBoIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0aDogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMTIgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1dpZHRoJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0dzogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMTIgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BnZWNrby1ncmlkLWxheW91dC1lZGl0b3Itc3R5bGVzYH0gc3R5bGU9e3N0eWxlc30+PC9kaXY+XG5cdFx0XHRcdDxkaXYgIGNsYXNzTmFtZT17YHdwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcl9fd3JhcCBnZWNrby1ncmlkLWxheW91dC1iYXNpYyAke2F0dHJpYnV0ZXMuY2xhc3NOYW1lfWB9PlxuXHRcdFx0XHRcdHsgdHlwZW9mIGluc2VydEJsb2Nrc0FmdGVyID09PSAnZnVuY3Rpb24nIC8vVGhpcyBsaW5lIG1ha2VzIHN1cmUgc3R5bGVzIGRvIG5vdCBicmVha1xuXHRcdFx0XHRcdFx0PyA8SW5uZXJCbG9ja3MgdGVtcGxhdGVMb2NrPXsgZmFsc2UgfS8+XG5cdFx0XHRcdFx0XHQ6IDxwPkxvcmVtIElwc3VtPC9wPiAvLyBUaGlzIGlzIHdoYXQgc2hvd3MgYXMgdGhlIHByZXZpZXcgY29udGVudC5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9LFxuXG5cdHNhdmUoKSB7XG5cdFx0cmV0dXJuKDxkaXY+PElubmVyQmxvY2tzLkNvbnRlbnQgLz48L2Rpdj4pOyAvLyBIb25lc3RseSBJIGRvbid0IHdhbnQgdG8gZG8gdGhpcyBidXQgY29udmVudGlvbnMgYXJlIGNvbnZlbnRpb25zLlxuXHR9LFxufTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge1xuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0UGF0aCxcblx0U1ZHLFxuXHRJY29uQnV0dG9uLFxuXHRUb29sYmFyLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHtcblx0Y3JlYXRlQmxvY2ssXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRJbm5lckJsb2Nrcyxcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdEJsb2NrQ29udHJvbHMsXG59IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gWydjb3JlL3BhcmFncmFwaCcsICdjb3JlL2hlYWRpbmcnLCAnY29yZS9idXR0b24nLCAnY29yZS9saXN0JywgJ2NvcmUvcXVvdGUnXTtcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZ2Vja28vZ3JpZC1sYXlvdXQtaW1hZ2UnO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0ltYWdlJyApLFxuXG5cdHBhcmVudDogWydnZWNrby9ncmlkLWxheW91dCddLFxuXG5cdGljb246IDxTVkcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48UGF0aCBkPVwiTTAsMGgyNHYyNEgwVjB6XCIgZmlsbD1cIm5vbmVcIiAvPjxQYXRoIGQ9XCJtMTkgNXYxNGgtMTR2LTE0aDE0bTAtMmgtMTRjLTEuMSAwLTIgMC45LTIgMnYxNGMwIDEuMSAwLjkgMiAyIDJoMTRjMS4xIDAgMi0wLjkgMi0ydi0xNGMwLTEuMS0wLjktMi0yLTJ6XCIgLz48UGF0aCBkPVwibTE0LjE0IDExLjg2bC0zIDMuODctMi4xNC0yLjU5LTMgMy44NmgxMmwtMy44Ni01LjE0elwiIC8+PC9TVkc+LFxuXG5cdGRlc2NyaXB0aW9uOiBfXyggJ0FuIGltYWdlIEdyaWQgQmxvY2suJyApLFxuXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblxuXHRzdXBwb3J0czoge1xuXHRcdGNsYXNzTmFtZTogdHJ1ZSxcblx0XHRpbnNlcnRlcjogdHJ1ZSxcblx0XHRyZXVzYWJsZTogZmFsc2UsXG5cdFx0aHRtbDogZmFsc2UsXG5cdH0sXG5cblx0c3R5bGVzOiBbXG5cdFx0eyBuYW1lOiAnZGVmYXVsdCcsIGxhYmVsOiBfXyggJ0RlZmF1bHQnKSwgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdFx0eyBuYW1lOiAnaG92ZXInLCBsYWJlbDogX18oICdIb3ZlcicpIH0sXG5cdFx0eyBuYW1lOiAnbm8tY2FwdGlvbicsIGxhYmVsOiBfXyggJ05vIENhcHRpb24nKSB9LFxuXHRdLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRoOiB7IHR5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAxfSxcblx0XHR3OiB7IHR5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAxfSxcblx0XHRtaW5IZWlnaHQ6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDIwMCx9LFxuXHRcdGltZ0lkOiB7IHR5cGU6ICdudW1iZXInfSxcblx0XHRpbWdVcmw6IHsgdHlwZTogJ3N0cmluZyd9LFxuXHR9LFxuXG5cdHRyYW5zZm9ybXM6IHtcblx0XHRmcm9tOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6ICdibG9jaycsXG5cdFx0XHRcdGJsb2NrczogWydnZWNrby9ncmlkLWxheW91dC1pdGVtJywgJ2dlY2tvL2dyaWQtbGF5b3V0LWJhc2ljJ10sXG5cdFx0XHRcdHRyYW5zZm9ybTogKGF0dHJpYnV0ZXMsIGlubmVyQmxvY2tzKSA9PiB7XG5cdFx0XHRcdFx0Ly8gSXQgYXBwZWFycyB0aGF0IGlubmVyQmxvY2tzIHdpbGwgYmUgYWRkZWQgaW4gdGhlIGZ1dHVyZS5cblx0XHRcdFx0XHRjb25zdCB7aCwgdywgYmdNZWRpYSwgYmdNZWRpYVVybH0gPSBhdHRyaWJ1dGVzO1xuXHRcdFx0XHRcdHJldHVybiBjcmVhdGVCbG9jaygnZ2Vja28vZ3JpZC1sYXlvdXQtaW1hZ2UnLCB7XG5cdFx0XHRcdFx0XHRoOiBoLFxuXHRcdFx0XHRcdFx0dzogdyxcblx0XHRcdFx0XHRcdGltZ0lkOiBiZ01lZGlhLFxuXHRcdFx0XHRcdFx0aW1nVXJsOiBiZ01lZGlhVXJsLFxuXHRcdFx0XHRcdH0sIGlubmVyQmxvY2tzKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXHRcblx0XHRdXG5cdH0sXG5cblx0ZGVwcmVjYXRlZDogW3tcblx0XHRtaWdyYXRlKCkge30sXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudCAvID4gO1xuXHRcdH0sXG5cdH1dLFxuXG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGluc2VydEJsb2Nrc0FmdGVyIH0pIHtcblx0XHRjb25zdCB7XG5cdFx0XHRoLFxuXHRcdFx0dyxcblx0XHRcdGltZ0lkLFxuXHRcdFx0aW1nVXJsLFxuXHRcdFx0bWluSGVpZ2h0LFxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdGdyaWRDb2x1bW5FbmQ6ICdzcGFuICcrIHcsXG5cdFx0XHRncmlkUm93RW5kOiAnc3BhbiAnICsgaCxcblx0XHRcdG1pbkhlaWdodDogbWluSGVpZ2h0ICsgJ3B4Jyxcblx0XHR9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPVwiR3JpZCBJdGVtXCI+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW5pbXVtIEhlaWdodCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgbWluSGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWluSGVpZ2h0OiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbiA9IFwiNTBcIlxuXHRcdFx0XHRcdFx0XHRtYXggPSBcIjYwMFwiXG5cdFx0XHRcdFx0XHRcdHN0ZXAgPSBcIjFcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1dpZHRoJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0dzogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMTIgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1NwYW4gUm93cycgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgaCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdGg6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDEyIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzPlxuXHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRpbWdJZDogdmFsdWUuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWdVcmw6IHZhbHVlLnVybCxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0dHlwZT17WydpbWFnZSddfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17KGltZ0lkKT8gaW1nSWQ6IG51bGwgfVxuXHRcdFx0XHRcdFx0XHRyZW5kZXI9eyh7b3Blbn0pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLWljb24tYnV0dG9uIGNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IGltYWdlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17b3Blbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdDwvIEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yLXN0eWxlc2B9IHN0eWxlPXtzdHlsZXN9PjwvZGl2PlxuXHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT17YHdwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcl9fd3JhcCBnZWNrby1ncmlkLWxheW91dC1pbWFnZSAke2F0dHJpYnV0ZXMuY2xhc3NOYW1lfWB9PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCFpbWdJZCAmJlxuXHRcdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZ0lkOiB2YWx1ZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nVXJsOiB2YWx1ZS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpbWdVcmwgJiZcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZ2Vja28tZ3JpZC1sYXlvdXQtaW1hZ2VfX2ltYWdlXCIgc3JjPXtpbWdVcmx9IC8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImdlY2tvLWdyaWQtbGF5b3V0LWltYWdlX19jYXB0aW9uXCI+XG5cdFx0XHRcdFx0XHR7IHR5cGVvZiBpbnNlcnRCbG9ja3NBZnRlciA9PT0gJ2Z1bmN0aW9uJyAvL1RoaXMgbGluZSBtYWtlcyBzdXJlIHN0eWxlcyBkbyBub3QgYnJlYWtcblx0XHRcdFx0XHRcdFx0PyA8SW5uZXJCbG9ja3MgdGVtcGxhdGVMb2NrPXsgZmFsc2UgfSBhbGxvd2VkQmxvY2tzPXtBTExPV0VEX0JMT0NLU30vPlxuXHRcdFx0XHRcdFx0XHQ6IDxwPkxvcmVtIElwc3VtPC9wPiAvLyBUaGlzIGlzIHdoYXQgc2hvd3MgYXMgdGhlIHByZXZpZXcgY29udGVudC5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9LFxuXG5cdHNhdmUoKSB7XG5cdFx0cmV0dXJuKDxkaXY+PElubmVyQmxvY2tzLkNvbnRlbnQgLz48L2Rpdj4pOyAvLyBIb25lc3RseSBJIGRvbid0IHdhbnQgdG8gZG8gdGhpcyBidXQgY29udmVudGlvbnMgYXJlIGNvbnZlbnRpb25zLlxuXHR9LFxufTtcbiIsImltcG9ydCBUeXBlU2VsZWN0IGZyb20gJy4vaW5wdXQtdHlwZSc7XG5pbXBvcnQgdGlueWNvbG9yIGZyb20gJ3Rpbnljb2xvcjInO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHtcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFBhdGgsXG5cdFNWRyxcblx0UmVzaXphYmxlQm94XG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQge1xuXHRjcmVhdGVCbG9jayxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0Q29sb3JQYWxldHRlLFxuXHRnZXRDb2xvck9iamVjdEJ5Q29sb3JWYWx1ZSxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InO1xuaW1wb3J0IHtcblx0c2VsZWN0XG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2dlY2tvL2dyaWQtbGF5b3V0LWl0ZW0nO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0V4cGVyaW1lbnRhbCcgKSxcblxuXHRwYXJlbnQ6IFsnZ2Vja28vZ3JpZC1sYXlvdXQnXSxcblxuXHRpY29uOiA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PFBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgLz48UGF0aCBkPVwiTTExLjk5IDE4LjU0bC03LjM3LTUuNzNMMyAxNC4wN2w5IDcgOS03LTEuNjMtMS4yN3pNMTIgMTZsNy4zNi01LjczTDIxIDlsLTktNy05IDcgMS42MyAxLjI3TDEyIDE2em0wLTExLjQ3TDE3Ljc0IDkgMTIgMTMuNDcgNi4yNiA5IDEyIDQuNTN6XCIgLz48L1NWRz4sXG5cblx0ZGVzY3JpcHRpb246IF9fKCAnQSBzaW5nbGUgZ3JpZCBpdGVtIHdpdGhpbiBhIGdyaWQgYmxvY2suJyApLFxuXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblxuXHRzdXBwb3J0czoge1xuXHRcdGNsYXNzTmFtZTogdHJ1ZSxcblx0XHRpbnNlcnRlcjogdHJ1ZSxcblx0XHRyZXVzYWJsZTogZmFsc2UsXG5cdFx0aHRtbDogZmFsc2UsXG5cdH0sXG5cblx0c3R5bGVzOiBbXG5cdFx0eyBuYW1lOiAnZGVmYXVsdCcsIGxhYmVsOiBfXyggJ0RlZmF1bHQnKSwgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdFx0eyBuYW1lOiAnaG92ZXInLCBsYWJlbDogX18oICdIb3ZlcicpIH0sXG5cdF0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHR5cGU6eyB0eXBlOiAnc3RyaW5nJyxkZWZhdWx0OiB1bmRlZmluZWQsIH0sIC8vc29saWQsIGltYWdlLCBpbWFnZS1jb250ZW50XG5cdFx0Ly8gdGhlbWU6eyB0eXBlOiAnc3RyaW5nJyxkZWZhdWx0OiB1bmRlZmluZWQsIH0sIC8vbGlnaHQsIGRhcmtcblx0XHQvLyBib3JkZXJSYWRpdXM6IHsgdHlwZTogJ251bWJlcid9LFxuXHRcdC8vIGJvcmRlcjogeyB0eXBlOiAnb2JqZWN0J30sXG5cdFx0Ly8gYm94U2hhZG93OiB7IHR5cGU6ICdvYmplY3QnfSxcblx0XHQvLyBwYWRkaW5nOiB7IHR5cGU6ICdzdHJpbmcnfSwgLy8gdCBiIGwgciB1aSAnNXB4IDEwcHgnICc1cHggMTBweCA1cHgnXG5cdFx0Ly8gbWFyZ2luOiB7IHR5cGU6ICdvYmplY3QnfSwgLy8gdCBiIGwgciB1aVxuXHRcdC8vIGFsaWduQ29udGVudDogeyB0eXBlOiAnc3RyaW5nJ30sIC8vIG5vcm1hbCwgc3RhcnQsIGVuZCwgY2VudGVyXG5cdFx0Ly8ganVzdGlmeUNvbnRlbnQ6IHsgdHlwZTogJ3N0cmluZyd9LCAvLyBub3JtYWwsIHN0YXJ0LCBlbmQsIGNlbnRlclxuXHRcdC8vIGJhY2tncm91bmRJbWFnZTogeyB0eXBlOiAnc3RyaW5nJ30sIC8vIHByb2Nlc3MgZm9yIGNyZWF0aW5nIGJnIGltYWdlc1xuXHRcdC8vIGJhY2tncm91bmRSZXBlYXQ6IHsgdHlwZTogJ3N0cmluZyd9LCAvLyBuby1yZXBlYXQsIHJlcGVhdCwgcmVwZWF0LXgsIHJlcGVhdC15XG5cdFx0Ly8gYmFja2dyb3VuZFNpemU6IHsgdHlwZTogJ3N0cmluZyd9LCAvLyBjb3Zlcixjb250YWluLGF1dG9cblx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IHsgdHlwZTogJ3N0cmluZyd9LFxuXHRcdGg6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDEsfSxcblx0XHR3OiB7IHR5cGU6ICdudW1iZXInfSxcblx0XHRtaW5IZWlnaHQ6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDIwMCx9LFxuXHRcdG9wYWNpdHk6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6IDF9LFxuXHRcdGJnTWVkaWE6IHsgdHlwZTogJ251bWJlcid9LFxuXHRcdGJnTWVkaWFVcmw6IHsgdHlwZTogJ3N0cmluZyd9LFxuXHRcdGJnQ29sb3I6IHsgdHlwZTogJ3N0cmluZyd9LFxuXHRcdGJnQ29sb3JTbHVnOiB7IHR5cGU6ICdzdHJpbmcnfSxcblx0XHRiZ0NvbG9yQnJpZ2h0bmVzczoge3R5cGU6ICdudW1iZXInfSwvL2xpZ2h0IG9yIGRhcmtcblx0fSxcblxuXHR0cmFuc2Zvcm1zOiB7XG5cdFx0ZnJvbTogW1xuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0XHRibG9ja3M6IFsnZ2Vja28vZ3JpZC1sYXlvdXQtaW1hZ2UnLCAnZ2Vja28vZ3JpZC1sYXlvdXQtYmFzaWMnXSxcblx0XHRcdFx0dHJhbnNmb3JtOiAoYXR0cmlidXRlcywgaW5uZXJCbG9ja3MpID0+IHtcblx0XHRcdFx0XHQvLyBJdCBhcHBlYXJzIHRoYXQgaW5uZXJCbG9ja3Mgd2lsbCBiZSBhZGRlZCBpbiB0aGUgZnV0dXJlLlxuXHRcdFx0XHRcdGNvbnN0IHtoLCB3LCBpbWdJZCwgaW1nVXJsfSA9IGF0dHJpYnV0ZXM7XG5cdFx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJsb2NrKCdnZWNrby9ncmlkLWxheW91dC1pdGVtJywge1xuXHRcdFx0XHRcdFx0aDogaCxcblx0XHRcdFx0XHRcdHc6IHcsXG5cdFx0XHRcdFx0XHRiZ01lZGlhOmltZ0lkLFxuXHRcdFx0XHRcdFx0YmdNZWRpYVVybDogaW1nVXJsLFxuXHRcdFx0XHRcdH0sIGlubmVyQmxvY2tzKTtcblx0XHRcdFx0fSxcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cblx0ZGVwcmVjYXRlZDogW1xuXHRcdHtcblx0XHRcdG1pZ3JhdGUoKSB7fSxcblx0XHRcdHNhdmUoKSB7XG5cdFx0XHRcdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudCAvPjtcblx0XHRcdH0sXG5cdFx0fVxuXHRdLFxuXG5cdGVkaXQoeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGluc2VydEJsb2Nrc0FmdGVyIH0pIHtcblx0XHRjb25zdCB7XG5cdFx0XHRvcGFjaXR5LFxuXHRcdFx0aCxcblx0XHRcdHcsXG5cdFx0XHR0eXBlLFxuXHRcdFx0cGFkZGluZyxcblx0XHRcdGJnTWVkaWEsXG5cdFx0XHRiZ01lZGlhVXJsLFxuXHRcdFx0YmdDb2xvcixcblx0XHRcdGJnQ29sb3JCcmlnaHRuZXNzLFxuXHRcdFx0YmdDb2xvclNsdWcsXG5cdFx0XHRtaW5IZWlnaHQsXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0Y29uc3Qgc3R5bGVzID0ge1xuXHRcdFx0Jy0tYmFja2dyb3VuZCc6IGJnQ29sb3IsXG5cdFx0XHQnLS1vcGFjaXR5Jzogb3BhY2l0eSxcblx0XHRcdGdyaWRDb2x1bW5FbmQ6ICdzcGFuICcrIHcsXG5cdFx0XHRncmlkUm93RW5kOiAnc3BhbiAnICsgaCxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogYmdDb2xvcixcblx0XHRcdGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgYmdNZWRpYVVybCArICcpJyxcblx0XHRcdG1pbkhlaWdodDogbWluSGVpZ2h0ICsgJ3B4Jyxcblx0XHR9O1xuXHRcdGlmKHR5cGUgPT09IFwiaW1hZ2VcIil7XG5cdFx0XHRkZWxldGUoc3R5bGVzLmJhY2tncm91bmRDb2xvcik7XG5cdFx0fVxuXHRcdGlmICh0eXBlID09PSBcInNvbGlkXCIpIHtcblx0XHRcdGRlbGV0ZShzdHlsZXMuYmFja2dyb3VuZEltYWdlKTtcblx0XHRcdGRlbGV0ZShzdHlsZXMubWluSGVpZ2h0KTtcblx0XHR9XG5cdFx0bGV0IGxpZ2h0T3JEYXJrID0gJ2xpZ2h0Jztcblx0XHRpZiAoYmdDb2xvckJyaWdodG5lc3MgPCAxMzApIGxpZ2h0T3JEYXJrID0gJ2RhcmsnO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPVwiVHlwZVwiPlxuXHRcdFx0XHRcdFx0PFR5cGVTZWxlY3QgXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0ID0geyhuZXh0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0eXBlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5ICB0aXRsZT1cIkdyaWQgSXRlbVwiPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3BhbiBSb3dzJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBoIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0aDogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMTIgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1NwYW4gQ29sdW1ucycgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgdyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdHc6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDEyIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIlN0eWxlXCI+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW5pbXVtIEhlaWdodCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgbWluSGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWluSGVpZ2h0OiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbiA9IFwiNTBcIlxuXHRcdFx0XHRcdFx0XHRtYXggPSBcIjYwMFwiXG5cdFx0XHRcdFx0XHRcdHN0ZXAgPSBcIjFcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHsgdHlwZSAhPT0gXCJzb2xpZFwiICYmXG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZ01lZGlhOiB2YWx1ZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmdNZWRpYVVybDogdmFsdWUudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPXtbJ2ltYWdlJywgJ3ZpZGVvJ119XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyhiZ01lZGlhKT8gYmdNZWRpYTogbnVsbCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsoe29wZW59KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2JnTWVkaWFVcmwgJiYgPGltZyBzcmM9e2JnTWVkaWFVcmx9IG9uQ2xpY2s9e29wZW59IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cImF1dG9cIiBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fS8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshYmdNZWRpYVVybCAmJiA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbiBidXR0b24tbGFyZ2UnfSBvbkNsaWNrPXtvcGVufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdENob29zZSBCYWNrZ3JvdW5kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxDb2xvclBhbGV0dGVcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdCYWNrZ3JvdW5kIENvbG9yJ1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyhiZ0NvbG9yKSA/IGJnQ29sb3IuY29sb3IgOiB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0RWRpdG9yU2V0dGluZ3MoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjb2xvclNsdWcgPSAodmFsdWUpID8gZ2V0Q29sb3JPYmplY3RCeUNvbG9yVmFsdWUoc2V0dGluZ3MuY29sb3JzLCB2YWx1ZSkuc2x1ZyA6IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtiZ0NvbG9yU2x1ZzogY29sb3JTbHVnfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgYnJpZ2h0bmVzcyA9ICh2YWx1ZSkgPyB0aW55Y29sb3IodmFsdWUpLmdldEJyaWdodG5lc3MoKTogdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2JnQ29sb3JCcmlnaHRuZXNzOiBicmlnaHRuZXNzfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7YmdDb2xvcjogdmFsdWV9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvci1zdHlsZXNgfSBzdHlsZT17c3R5bGVzfT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2B3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX3dyYXAke3R5cGV9ICR7YXR0cmlidXRlcy5jbGFzc05hbWV9IGhhcy0ke2JnQ29sb3JTbHVnfS1iYWNrZ3JvdW5kLWNvbG9yIGlzLSR7bGlnaHRPckRhcmt9LWJhY2tncm91bmRgfT5cblx0XHRcdFx0XHR7IXR5cGUgJiYgPFR5cGVTZWxlY3QgXG5cdFx0XHRcdFx0XHRvblNlbGVjdCA9IHsobmV4dCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPn1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQodHlwZSA9PT0gJ2ltYWdlJyB8fCB0eXBlID09PSAnaW1hZ2UtY29udGVudCcpICYmXG5cdFx0XHRcdFx0XHQhYmdNZWRpYSAmJlxuXHRcdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJnTWVkaWE6IHZhbHVlLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZ01lZGlhVXJsOiB2YWx1ZS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0KHR5cGUgPT09ICdzb2xpZCcgfHwgKHR5cGUgPT09ICdpbWFnZS1jb250ZW50JyAmJiBiZ01lZGlhKSkgJiZcblx0XHRcdFx0XHRcdCh0eXBlb2YgaW5zZXJ0QmxvY2tzQWZ0ZXIgPT09ICdmdW5jdGlvbicpICYmIC8vVGhpcyBsaW5lIG1ha2VzIHN1cmUgc3R5bGVzIGRvIG5vdCBicmVha1xuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzIHRlbXBsYXRlTG9jaz17IGZhbHNlIH0gLz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZSgpIHtcblx0XHRyZXR1cm4oPGRpdj48SW5uZXJCbG9ja3MuQ29udGVudCAvPjwvZGl2Pik7IC8vIEhvbmVzdGx5IEkgZG9uJ3Qgd2FudCB0byBkbyB0aGlzIGJ1dCBjb252ZW50aW9ucyBhcmUgY29udmVudGlvbnMuXG5cdH0sXG59O1xuIiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IFBhbmVsQm9keSwgUmFuZ2VDb250cm9sLCBHLCBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxufSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG4vLyBpbXBvcnQge2NyZWF0ZUhvb2tzLCBhcHBseUZpbHRlcnMsIGFkZEZpbHRlcn0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG4vLyBjb25zdCBob29rcyA9IGNyZWF0ZUhvb2tzKCk7XG4vLyBjb25zdCB0ZW1wbGF0ZXMgPSBob29rcy5hcHBseUZpbHRlcnMoJ2dlY2tvLmdyaWQtbGF5b3V0LnRlbXBsYXRlcycsIFsncHJldiddKTtcbi8vIGhvb2tzLmFkZEZpbHRlcignZ2Vja28uZ3JpZC1sYXlvdXQudGVtcGxhdGVzJywgJ2dlY2tvL2dyaWQtbGF5b3V0JywgKGEpID0+IHtcbi8vIFx0YS5wdXNoWyd0ZXN0J107XG4vLyBcdGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4vLyBcdHJldHVybiBhO1xuLy8gfSk7XG4vLyBjb25zb2xlLmxvZyh0ZW1wbGF0ZXMpO1xuLyoqXG4gKiBBbGxvd2VkIGJsb2NrcyBjb25zdGFudCBpcyBwYXNzZWQgdG8gSW5uZXJCbG9ja3MgcHJlY2lzZWx5IGFzIHNwZWNpZmllZCBoZXJlLlxuICogVGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSBzaG91bGQgbmV2ZXIgY2hhbmdlLlxuICogVGhlIGFycmF5IHNob3VsZCBjb250YWluIHRoZSBuYW1lIG9mIGVhY2ggYmxvY2sgdGhhdCBpcyBhbGxvd2VkLlxuICogSW4gY29sdW1ucyBibG9jaywgdGhlIG9ubHkgYmxvY2sgd2UgYWxsb3cgaXMgJ2RtcC9ncmlkLWl0ZW0nLlxuICpcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ1tdfVxuKi9cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gWydnZWNrby9ncmlkLWxheW91dC1pdGVtJywgJ2dlY2tvL2dyaWQtbGF5b3V0LWltYWdlJ107XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2dlY2tvL2dyaWQtbGF5b3V0JztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdHcmlkJyApLFxuXG5cdGljb246IDxTVkcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPjxHPjxQYXRoIGQ9XCJNNCwxMyBMOCwxMyBMOCwxMCBMNCwxMCBMNCwxMyBaIE00LDE1IEw0LDE4IEw4LDE4IEw4LDE1IEw0LDE1IFogTTEwLDEzIEwxNCwxMyBMMTQsMTAgTDEwLDEwIEwxMCwxMyBaIE0xMCwxNSBMMTAsMTggTDE0LDE4IEwxNCwxNSBMMTAsMTUgWiBNMjAsMTMgTDIwLDEwIEwxNiwxMCBMMTYsMTMgTDIwLDEzIFogTTIwLDE1IEwxNiwxNSBMMTYsMTggTDIwLDE4IEwyMCwxNSBaIE00LDggTDgsOCBMOCw1IEw0LDUgTDQsOCBaIE0xMCw4IEwxNCw4IEwxNCw1IEwxMCw1IEwxMCw4IFogTTIwLDggTDIwLDUgTDE2LDUgTDE2LDggTDIwLDggWiBNNCwzIEwyMCwzIEMyMS4xMDQ1Njk1LDMgMjIsMy45NTEzOTQ5MSAyMiw1LjEyNSBMMjIsMTcuODc1IEMyMiwxOS4wNDg2MDUxIDIxLjEwNDU2OTUsMjAgMjAsMjAgTDQsMjAgQzIuODk1NDMwNSwyMCAyLDE5LjA0ODYwNTEgMiwxNy44NzUgTDIsNS4xMjUgQzIsMy45NTEzOTQ5MSAyLjg5NTQzMDUsMyA0LDMgWlwiIC8+PC9HPjwvU1ZHPixcblxuXHRjYXRlZ29yeTogJ2xheW91dCcsXG5cblx0YXR0cmlidXRlczoge1xuXHRcdGNvbHVtbnM6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMTIsXG5cdFx0fSxcblx0XHRnYXA6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMSxcblx0XHR9LFxuXHR9LFxuXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBDU1MgR3JpZCB0byBidWlsZCBsYXlvdXRzIGFuZCwgdGhlbiBhZGQgd2hhdGV2ZXIgY29udGVudCBibG9ja3MgeW914oCZZCBsaWtlLicgKSxcblxuXHRzdXBwb3J0czoge1xuXHRcdGFsaWduOiBbICd3aWRlJywgJ2Z1bGwnIF0sXG5cdFx0aHRtbDogZmFsc2UsXG5cdH0sXG5cblx0ZGVwcmVjYXRlZDogW1xuXHRcdHtcblx0XHRcdG1pZ3JhdGUoKSB7fSxcblx0XHRcdHNhdmUoKSB7XG5cdFx0XHRcdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudCAvPjtcblx0XHRcdH0sXG5cdFx0fVxuXHRdLFxuXG5cdHN0eWxlczogW1xuXHRcdHsgbmFtZTogJ2RlZmF1bHQnLCBsYWJlbDogX18oICdEZWZhdWx0JyksIGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHRcdHsgbmFtZTogJ25vLWdhcCcsIGxhYmVsOiBfXyggJ05vIEdhcCcpIH0sXG5cdF0sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBpbnNlcnRCbG9ja3NBZnRlciB9ICkge1xuXHRcdGNvbnN0IHsgY29sdW1ucywgZ2FwIH0gPSBhdHRyaWJ1dGVzO1xuXHRcdC8vIGNvbnN0IHN0eWxlcyA9ICdncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgnICsgY29sdW1ucyArICcsIG1pbm1heCgxMDBweCwgMWZyKSk7XHRncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTsgZ3JpZC1nYXA6JyArIGdhcCArICdyZW07Jztcblx0XHRjb25zdCBzdHlsZXMgPSAnZ3JpZC1nYXA6JyArIGdhcCArICdyZW07Jztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0dhcCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgZ2FwIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0Z2FwOiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDAgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyAyIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yXCIgZGF0YS1wYXNzdGhydT17c3R5bGVzfSBkYXRhLWdyaWQ9e2NvbHVtbnN9PlxuXHRcdFx0XHRcdHsgXG5cdFx0XHRcdFx0XHR0eXBlb2YgaW5zZXJ0QmxvY2tzQWZ0ZXIgPT09ICdmdW5jdGlvbicgJiZcblx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRbJ2dlY2tvL2dyaWQtbGF5b3V0LWltYWdlJywge3c6IDZ9XSxcblx0XHRcdFx0XHRcdFx0XHRcdFsnZ2Vja28vZ3JpZC1sYXlvdXQtaW1hZ2UnLCB7dzogNn1dLFxuXHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZUxvY2s9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9LFxuXG5cdHNhdmUoKSB7XG5cdFx0cmV0dXJuKDxkaXY+PElubmVyQmxvY2tzLkNvbnRlbnQgLz48L2Rpdj4pOyAvLyBIb25lc3RseSBJIGRvbid0IHdhbnQgdG8gZG8gdGhpcyBidXQgY29udmVudGlvbnMgYXJlIGNvbnZlbnRpb25zLlxuXHR9LFxufTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge3JlZ2lzdGVyQmxvY2tUeXBlfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCAqIGFzIGdyaWQgZnJvbSAnLi9ncmlkLWxheW91dCc7XG5pbXBvcnQgKiBhcyBncmlkSXRlbSBmcm9tICcuL2dyaWQtbGF5b3V0LWl0ZW0nO1xuaW1wb3J0ICogYXMgZ3JpZEl0ZW1JbWFnZSBmcm9tICcuL2dyaWQtbGF5b3V0LWltYWdlJztcbmltcG9ydCAqIGFzIGdyaWRJdGVtQmFzaWMgZnJvbSAnLi9ncmlkLWxheW91dC1iYXNpYyc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKGdyaWQubmFtZSwgZ3JpZC5zZXR0aW5ncyk7XG5yZWdpc3RlckJsb2NrVHlwZShncmlkSXRlbUJhc2ljLm5hbWUsIGdyaWRJdGVtQmFzaWMuc2V0dGluZ3MpO1xucmVnaXN0ZXJCbG9ja1R5cGUoZ3JpZEl0ZW1JbWFnZS5uYW1lLCBncmlkSXRlbUltYWdlLnNldHRpbmdzKTtcbnJlZ2lzdGVyQmxvY2tUeXBlKGdyaWRJdGVtLm5hbWUsIGdyaWRJdGVtLnNldHRpbmdzKTtcblxuLyoqXG4gKiBUaGlzIG1ha2Ugc3VyZSB0aGUgZ3JpZCB3b3JrcyBpbiB0aGUgZWRpdG9yLlxuICovXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4vLyBcdGZ1bmN0aW9uIHVwZGF0ZUNvbnRhaW5lcigpIHtcbi8vIFx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2Vja28tZ3JpZC1zbGlkZXInKTtcbi8vIFx0XHRpZiAoY29udGFpbmVyKSB7XG4vLyBcdFx0XHRmdW5jdGlvbiBsaXN0ZW5Gb3JBcHBlbmRlZE5vZGVzKCkge1xuLy8gXHRcdFx0XHQvLyBsaXN0ZW4gZm9yIGNoaWxkIGJsb2NrcyBiZWluZyBhZGRlZCB0byBsYXlvdXRcbi8vIFx0XHRcdFx0Y29uc3QgbGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvci1ibG9jay1saXN0X19sYXlvdXQnKTtcbi8vIFx0XHRcdFx0Y29uc3Qgb2JzZXJ2ZXJDb25maWcgPSB7XG4vLyBcdFx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuLy8gXHRcdFx0XHRcdHN1YnRyZWU6IHRydWVcbi8vIFx0XHRcdFx0fTtcbi8vIFx0XHRcdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0KSA9PiB7XG4vLyBcdFx0XHRcdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcbi8vIFx0XHRcdFx0XHRcdGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0JyAmJiBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCkge1xuLy8gXHRcdFx0XHRcdFx0XHRjb25zdCBjaGlsZEJsb2NrcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10eXBlPVwiZ2Vja28vZ3JpZC1zbGlkZXItZ3JpZC1zbGlkZVwiXScpO1xuLy8gXHRcdFx0XHRcdFx0XHRsaXN0ZW5Gb3JCbG9ja0NoYW5nZXMoY2hpbGRCbG9ja3MpO1xuLy8gXHRcdFx0XHRcdFx0fVxuLy8gXHRcdFx0XHRcdH1cbi8vIFx0XHRcdFx0fSk7XG4vLyBcdFx0XHRcdG9ic2VydmVyLm9ic2VydmUobGF5b3V0LCBvYnNlcnZlckNvbmZpZyk7XG4vLyBcdFx0XHR9XG5cbi8vIFx0XHRcdGZ1bmN0aW9uIGxpc3RlbkZvckJsb2NrQ2hhbmdlcyhibG9ja3MpIHtcbi8vIFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiBibG9ja3MpIHtcbi8vIFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnYmxvY2snLCBibG9jaylcbi8vIFx0XHRcdFx0XHRjb25zdCBvYnNlcnZlckNvbmZpZyA9IHtcbi8vIFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG4vLyBcdFx0XHRcdFx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnLCAnZGF0YS1iZyddXG4vLyBcdFx0XHRcdFx0fTtcbi8vIFx0XHRcdFx0XHQvLyBGaW5kIHRoZSBzbGlkZSB0aGF0IGhhcyB0aGUgYXR0cmlidXRlc1xuLy8gXHRcdFx0XHRcdGNvbnN0IHNsaWRlID0gYmxvY2sucXVlcnlTZWxlY3RvcignLmdlY2tvLWdyaWQtc2xpZGVyX19zbGlkZScpO1xuXG4vLyBcdFx0XHRcdFx0Ly8gSW5pdGlhbGl6ZSBibG9jayBzdHlsZXNcbi8vIFx0XHRcdFx0XHRjb25zdCBzdHlsZXMgPSBzbGlkZS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4vLyBcdFx0XHRcdFx0YmxvY2suc3R5bGUgPSBzdHlsZXM7XG5cbi8vIFx0XHRcdFx0XHQvLyBMaXN0ZW4gZm9yIHNsaWRlIHN0eWxlIGNoYW5nZXNcbi8vIFx0XHRcdFx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QpID0+IHtcbi8vIFx0XHRcdFx0XHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XG4vLyBcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdtdXRhdGlvbiAyIG9jY3VyZWQnKTtcbi8vIFx0XHRcdFx0XHRcdFx0aWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdzdHlsZScpIHtcbi8vIFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdHlsZXMgPSBtdXRhdGlvbi50YXJnZXQuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuLy8gXHRcdFx0XHRcdFx0XHRcdGJsb2NrLnN0eWxlID0gc3R5bGVzO1xuLy8gXHRcdFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdFx0fSk7XG4vLyBcdFx0XHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZShzbGlkZSwgb2JzZXJ2ZXJDb25maWcpO1xuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHRsaXN0ZW5Gb3JBcHBlbmRlZE5vZGVzKCk7XG4vLyBcdFx0XHRsZXQgY2hpbGRCbG9ja3MgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZT1cImdlY2tvL2dyaWQtc2xpZGVyLWdyaWQtc2xpZGVcIl0nKTtcbi8vIFx0XHRcdGxpc3RlbkZvckJsb2NrQ2hhbmdlcyhjaGlsZEJsb2Nrcyk7XG4vLyBcdFx0fVxuLy8gXHR9XG5cbi8vIFx0dXBkYXRlQ29udGFpbmVyKCk7XG5cbi8vIFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVJbnNlcnRlZFwiLCB1cGRhdGVDb250YWluZXIpXG4vLyB9KTtcblxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG5cblx0ZnVuY3Rpb24gbGlzdGVuRm9yU3R5bGVDaGFuZ2VzR3JpZEl0ZW0oKSB7XG5cdFx0JCgnLmdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvci1zdHlsZXMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuXHRcdFx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcblx0XHRcdFx0XHQvLyBPbiBjaGFuZ2UgdXBkYXRlIHRoZSBzdHlsZXNcblx0XHRcdFx0XHQkKCdbZGF0YS10eXBlPVwiZ2Vja28vZ3JpZC1sYXlvdXQtYmFzaWNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuZmluZChcIi5nZWNrby1ncmlkLWxheW91dC1lZGl0b3Itc3R5bGVzXCIpLmF0dHIoXCJzdHlsZVwiKTtcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cihcInN0eWxlXCIsIHN0eWxlcyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCgnW2RhdGEtdHlwZT1cImdlY2tvL2dyaWQtbGF5b3V0LWltYWdlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdHlsZXMgPSAkKHRoaXMpLmZpbmQoXCIuZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yLXN0eWxlc1wiKS5hdHRyKFwic3R5bGVcIik7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJzdHlsZVwiLCBzdHlsZXMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQoJ1tkYXRhLXR5cGU9XCJnZWNrby9ncmlkLWxheW91dC1pdGVtXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdHlsZXMgPSAkKHRoaXMpLmZpbmQoXCIuZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yLXN0eWxlc1wiKS5hdHRyKFwic3R5bGVcIik7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJzdHlsZVwiLCBzdHlsZXMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRcdGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWQoKSB7XG5cdFx0JCgnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcicpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG5cdFx0XHRcdG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuXHRcdFx0XHRcdC8vIE9uIGNoYW5nZSB1cGRhdGUgdGhlIHN0eWxlc1xuXHRcdFx0XHRcdCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuYXR0cihcImRhdGEtcGFzc3RocnVcIik7XG5cdFx0XHRcdFx0XHRjb25zdCBncmlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1ncmlkXCIpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5maW5kKFwiLmVkaXRvci1ibG9jay1saXN0X19sYXlvdXRcIikuYXR0cihcInN0eWxlXCIsIHN0eWxlcyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKHRoaXMsIHtcblx0XHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdFx0YXR0cmlidXRlRmlsdGVyOiBbJ2RhdGEtcGFzc3RocnUnLCAnc3R5bGUnXSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlU3R5bGVzR3JpZEl0ZW0oKSB7XG5cdFx0JCgnW2RhdGEtdHlwZT1cImdlY2tvL2dyaWQtbGF5b3V0LWltYWdlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBzdHlsZXMgPSAkKHRoaXMpLmZpbmQoXCIuZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yLXN0eWxlc1wiKS5hdHRyKFwic3R5bGVcIik7XG5cdFx0XHQkKHRoaXMpLmF0dHIoXCJzdHlsZVwiLCBzdHlsZXMpO1xuXHRcdH0pO1xuXHRcdCQoJ1tkYXRhLXR5cGU9XCJnZWNrby9ncmlkLWxheW91dC1iYXNpY1wiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgc3R5bGVzID0gJCh0aGlzKS5maW5kKFwiLmdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvci1zdHlsZXNcIikuYXR0cihcInN0eWxlXCIpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHR9KTtcblx0XHQkKCdbZGF0YS10eXBlPVwiZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgc3R5bGVzID0gJCh0aGlzKS5maW5kKFwiLmdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvci1zdHlsZXNcIikuYXR0cihcInN0eWxlXCIpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVN0eWxlc0dyaWQoKSB7XG5cdFx0JCgnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcicpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgc3R5bGVzID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1wYXNzdGhydVwiKTtcblx0XHRcdGNvbnN0IGdyaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWdyaWRcIik7XG5cdFx0XHQkKHRoaXMpLmZpbmQoXCIuZWRpdG9yLWJsb2NrLWxpc3RfX2xheW91dFwiKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHR9KTtcblx0fVxuXG5cdCQoJ2JvZHknKS5vbignRE9NTm9kZUluc2VydGVkJywgJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICgkKCcud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yJykpe1xuXHRcdFx0dXBkYXRlU3R5bGVzR3JpZCgpO1xuXHRcdFx0dXBkYXRlU3R5bGVzR3JpZEl0ZW0oKTtcblx0XHRcdGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWQoKVxuXHRcdFx0bGlzdGVuRm9yU3R5bGVDaGFuZ2VzR3JpZEl0ZW0oKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcblx0XHR1cGRhdGVTdHlsZXNHcmlkKCk7XG5cdFx0dXBkYXRlU3R5bGVzR3JpZEl0ZW0oKTtcblx0XHRsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkKClcblx0XHRsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkSXRlbSgpO1xuXHR9KTtcbn0pOyIsImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbi8vIGltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHt2YWx1ZSwgb25TZWxlY3R9KXtcblx0Y29uc3Qgc2VsZWN0ZWQgPSAobmV4dCkgPT4ge1xuXHRcdHJldHVybiBvblNlbGVjdChuZXh0KTtcblx0fVxuXHRjb25zdCB0eXBlcyA9IFtcblx0XHR7IHNsdWc6ICdzb2xpZCcsIG5hbWU6ICdTb2xpZCcsIGljb246IDxzcGFuIGNsYXNzPVwiZGFzaGljb25zIGRhc2hpY29ucy1hZG1pbi1hcHBlYXJhbmNlXCI+PC9zcGFuPn0sXG5cdFx0eyBzbHVnOiAnaW1hZ2UnLCBuYW1lOiAnSW1hZ2UnLCBpY29uOiA8c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtZm9ybWF0LWltYWdlXCI+PC9zcGFuPn0sXG5cdFx0eyBzbHVnOiAnaW1hZ2UtY29udGVudCcsIG5hbWU6ICdJbWFnZSB3aXRoIENvbnRlbnQnLCBpY29uOiA8c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtZm9ybWF0LWdhbGxlcnlcIj48L3NwYW4+fSxcblx0XVxuXHRyZXR1cm4oXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC10eXBlLXNlbGVjdFwiPlxuXHRcdFx0PHA+Q2hvb3NlIHRoZSBibG9jayBsYXlvdXQgdHlwZS48L3A+XG5cdFx0XHR7dHlwZXMubWFwKCh0eXBlKSA9PiB7XG5cdFx0XHRcdGxldCBpc1NlbGVjdGVkID0gXCJcIjtcblx0XHRcdFx0aWYodHlwZS5zbHVnID09PSB2YWx1ZSl7XG5cdFx0XHRcdFx0aXNTZWxlY3RlZCA9IFwid3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtdHlwZS1zZWxlY3RfX2l0ZW0tLXNlbGVjdGVkXCJcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgd3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtdHlwZS1zZWxlY3RfX2l0ZW0gJHtpc1NlbGVjdGVkfWB9IG9uQ2xpY2s9eygpPT4gc2VsZWN0ZWQodHlwZS5zbHVnKX0+e3R5cGUuaWNvbn17dHlwZS5uYW1lfTwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9kaXY+XG5cdCk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuYmxvY2tzOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmNvbXBvbmVudHM7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuZGF0YTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5lZGl0b3I7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuZWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5pMThuOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==