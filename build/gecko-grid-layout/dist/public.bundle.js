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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./src/public.js":
/*!***********************!*\
  !*** ./src/public.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);


/**
 * If object fit is not supported then use as background image
 */
document.addEventListener("DOMContentLoaded", function () {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    var layouts = document.querySelectorAll('.wp-block-gecko-grid-layout');

    _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(layouts).forEach(function (layout) {
      layout.className += " wp-block-gecko-grid-layout--ie";
      var items = layout.querySelectorAll('.wp-block-gecko-grid-layout__item');
      var column = 1;
      var row = 1;

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(items).forEach(function (item) {
        var styles = window.getComputedStyle(item);
        item.style['-ms-grid-column'] = column;
        item.style['-ms-grid-row'] = row;
        column = column + parseInt(styles.getPropertyValue('-ms-grid-column-span'));

        if (column > 12) {
          column = 1;
          row = row + 1;
        }
      });
    });

    var images = document.querySelectorAll('.gecko-grid-layout-image__image');

    _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(images).forEach(function (image) {
      var src = image.getAttribute('data-src');
      image.offsetParent.style.backgroundImage = "url(".concat(src, ")");
      image.offsetParent.style.backgroundPosition = 'center';
      image.offsetParent.style.backgroundSize = 'cover';
      image.style.display = 'none';
    });
  }

  ;
});
/**
 * Lazy load images.
 */

document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  var active = false;

  var lazyLoad = function lazyLoad() {
    if (active === false) {
      active = true;
      setTimeout(function () {
        lazyImages.forEach(function (lazyImage) {
          if (lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0 && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImages = lazyImages.filter(function (image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });
        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("DOMContentLoaded", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidWEiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwiaW5kZXhPZiIsIm1hdGNoIiwibGF5b3V0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGF5b3V0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb2x1bW4iLCJyb3ciLCJpdGVtIiwic3R5bGVzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInN0eWxlIiwicGFyc2VJbnQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaW1hZ2VzIiwiaW1hZ2UiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvZmZzZXRQYXJlbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImRpc3BsYXkiLCJsYXp5SW1hZ2VzIiwic2xpY2UiLCJjYWxsIiwiYWN0aXZlIiwibGF6eUxvYWQiLCJzZXRUaW1lb3V0IiwibGF6eUltYWdlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJkYXRhc2V0Iiwic3Jjc2V0IiwiY2xhc3NM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Q0FBQ2IsR0FBVixHQUFnQmEsU0FBUyxDQUFDSyxPQUFWLENBQWtCbEIsR0FBbEM7QUFDQWEscUJBQVMsQ0FBQ00sTUFBVixHQUFtQk4sU0FBUyxDQUFDSyxPQUFWLENBQWtCQyxNQUFyQztBQUNBTixxQkFBUyxDQUFDTyxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixNQUEzQjtBQUVBZCxzQkFBVSxHQUFHQSxVQUFVLENBQUNlLE1BQVgsQ0FBa0IsVUFBVXZCLEtBQVYsRUFBaUI7QUFDL0MscUJBQU9BLEtBQUssS0FBS2MsU0FBakI7QUFDQSxhQUZZLENBQWI7O0FBSUEsZ0JBQUlOLFVBQVUsQ0FBQ2dCLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDNUJoRCxzQkFBUSxDQUFDaUQsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNiLFFBQXZDO0FBQ0FqQyxvQkFBTSxDQUFDOEMsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNiLFFBQXJDO0FBQ0FqQyxvQkFBTSxDQUFDOEMsbUJBQVAsQ0FBMkIsbUJBQTNCLEVBQWdEYixRQUFoRDtBQUNBO0FBQ0Q7QUFDRCxTQWhCRDtBQWtCQUQsY0FBTSxHQUFHLEtBQVQ7QUFDQSxPQXBCUyxFQW9CUCxHQXBCTyxDQUFWO0FBcUJBO0FBQ0QsR0ExQkQ7O0FBNEJBbkMsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ21DLFFBQXBDO0FBQ0FqQyxRQUFNLENBQUNGLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0Q21DLFFBQTVDO0FBQ0FqQyxRQUFNLENBQUNGLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDbUMsUUFBbEM7QUFDQWpDLFFBQU0sQ0FBQ0YsZ0JBQVAsQ0FBd0IsbUJBQXhCLEVBQTZDbUMsUUFBN0M7QUFDQSxDQXBDRCxFIiwiZmlsZSI6InB1YmxpYy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi93cC1jb250ZW50L3BsdWdpbnMvZ2Vja28tZ3JpZC1sYXlvdXQvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHVibGljLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsIi8qKlxuICogSWYgb2JqZWN0IGZpdCBpcyBub3Qgc3VwcG9ydGVkIHRoZW4gdXNlIGFzIGJhY2tncm91bmQgaW1hZ2VcbiAqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuXHRjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXHRjb25zdCBtc2llID0gdWEuaW5kZXhPZihcIk1TSUUgXCIpO1xuXHRpZiAobXNpZSA+IDAgfHwgISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50LipydlxcOjExXFwuLykpIHtcblx0XHRjb25zdCBsYXlvdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0Jyk7XG5cdFx0Wy4uLmxheW91dHNdLmZvckVhY2gobGF5b3V0ID0+IHtcblx0XHRcdGxheW91dC5jbGFzc05hbWUgKz0gXCIgd3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtLWllXCI7XG5cdFx0XHRjb25zdCBpdGVtcyA9IGxheW91dC5xdWVyeVNlbGVjdG9yQWxsKCcud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXRfX2l0ZW0nKTtcblx0XHRcdGxldCBjb2x1bW4gPSAxO1xuXHRcdFx0bGV0IHJvdyA9IDE7XG5cdFx0XHRbLi4uaXRlbXNdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGl0ZW0pO1xuXHRcdFx0XHRpdGVtLnN0eWxlWyctbXMtZ3JpZC1jb2x1bW4nXSA9IGNvbHVtbjtcblx0XHRcdFx0aXRlbS5zdHlsZVsnLW1zLWdyaWQtcm93J10gPSByb3c7XG5cdFx0XHRcdGNvbHVtbiA9IGNvbHVtbiArIHBhcnNlSW50KHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCctbXMtZ3JpZC1jb2x1bW4tc3BhbicpKTtcblx0XHRcdFx0aWYoY29sdW1uID4gMTIpe1xuXHRcdFx0XHRcdGNvbHVtbiA9IDE7XG5cdFx0XHRcdFx0cm93ID0gcm93ICsgMTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdlY2tvLWdyaWQtbGF5b3V0LWltYWdlX19pbWFnZScpO1xuXHRcdFsuLi5pbWFnZXNdLmZvckVhY2goaW1hZ2UgPT4ge1xuXHRcdFx0Y29uc3Qgc3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuXHRcdFx0aW1hZ2Uub2Zmc2V0UGFyZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzcmN9KWA7XG5cdFx0XHRpbWFnZS5vZmZzZXRQYXJlbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlcic7XG5cdFx0XHRpbWFnZS5vZmZzZXRQYXJlbnQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuXHRcdFx0aW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR9KTtcblx0fTtcbn0pO1xuLyoqXG4gKiBMYXp5IGxvYWQgaW1hZ2VzLlxuICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cdGxldCBsYXp5SW1hZ2VzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nLmxhenlcIikpO1xuXHRsZXQgYWN0aXZlID0gZmFsc2U7XG5cblx0Y29uc3QgbGF6eUxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGFjdGl2ZSA9PT0gZmFsc2UpIHtcblx0XHRcdGFjdGl2ZSA9IHRydWU7XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRsYXp5SW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGxhenlJbWFnZSkge1xuXHRcdFx0XHRcdGlmICgobGF6eUltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgbGF6eUltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+PSAwKSAmJiBnZXRDb21wdXRlZFN0eWxlKGxhenlJbWFnZSkuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcblx0XHRcdFx0XHRcdGxhenlJbWFnZS5zcmMgPSBsYXp5SW1hZ2UuZGF0YXNldC5zcmM7XG5cdFx0XHRcdFx0XHRsYXp5SW1hZ2Uuc3Jjc2V0ID0gbGF6eUltYWdlLmRhdGFzZXQuc3Jjc2V0O1xuXHRcdFx0XHRcdFx0bGF6eUltYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsYXp5XCIpO1xuXG5cdFx0XHRcdFx0XHRsYXp5SW1hZ2VzID0gbGF6eUltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGltYWdlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbWFnZSAhPT0gbGF6eUltYWdlO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGlmIChsYXp5SW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxhenlMb2FkKTtcblx0XHRcdFx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgbGF6eUxvYWQpO1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGxhenlMb2FkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0fSwgMjAwKTtcblx0XHR9XG5cdH07XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsYXp5TG9hZCk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBsYXp5TG9hZCk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGxhenlMb2FkKTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBsYXp5TG9hZCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=