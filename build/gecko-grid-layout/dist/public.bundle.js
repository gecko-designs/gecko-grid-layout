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

/***/ "./src/public.js":
/*!***********************!*\
  !*** ./src/public.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
// IntersectionObserver if supported
// document.addEventListener("DOMContentLoaded", function () {
// 	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
// 	if ("IntersectionObserver" in window) {
// 		let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
// 			entries.forEach(function (entry) {
// 				if (entry.isIntersecting) {
// 					let lazyImage = entry.target;
// 					lazyImage.src = lazyImage.dataset.src;
// 					lazyImage.srcset = lazyImage.dataset.srcset;
// 					lazyImage.classList.remove("lazy");
// 					lazyImageObserver.unobserve(lazyImage);
// 				}
// 			});
// 		});
// 		lazyImages.forEach(function (lazyImage) {
// 			lazyImageObserver.observe(lazyImage);
// 		});
// 	} else {
// 		// Possibly fall back to a more compatible method here
// 	}
// });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsYXp5SW1hZ2VzIiwic2xpY2UiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImFjdGl2ZSIsImxhenlMb2FkIiwic2V0VGltZW91dCIsImZvckVhY2giLCJsYXp5SW1hZ2UiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImJvdHRvbSIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5Iiwic3JjIiwiZGF0YXNldCIsInNyY3NldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImZpbHRlciIsImltYWdlIiwibGVuZ3RoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN6RCxNQUFJQyxVQUFVLEdBQUcsR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNKLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBZCxDQUFqQjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxLQUFiOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7QUFDNUIsUUFBSUQsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDckJBLFlBQU0sR0FBRyxJQUFUO0FBRUFFLGdCQUFVLENBQUMsWUFBWTtBQUN0Qk4sa0JBQVUsQ0FBQ08sT0FBWCxDQUFtQixVQUFVQyxTQUFWLEVBQXFCO0FBQ3ZDLGNBQUtBLFNBQVMsQ0FBQ0MscUJBQVYsR0FBa0NDLEdBQWxDLElBQXlDQyxNQUFNLENBQUNDLFdBQWhELElBQStESixTQUFTLENBQUNDLHFCQUFWLEdBQWtDSSxNQUFsQyxJQUE0QyxDQUE1RyxJQUFrSEMsZ0JBQWdCLENBQUNOLFNBQUQsQ0FBaEIsQ0FBNEJPLE9BQTVCLEtBQXdDLE1BQTlKLEVBQXNLO0FBQ3JLUCxxQkFBUyxDQUFDUSxHQUFWLEdBQWdCUixTQUFTLENBQUNTLE9BQVYsQ0FBa0JELEdBQWxDO0FBQ0FSLHFCQUFTLENBQUNVLE1BQVYsR0FBbUJWLFNBQVMsQ0FBQ1MsT0FBVixDQUFrQkMsTUFBckM7QUFDQVYscUJBQVMsQ0FBQ1csU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsTUFBM0I7QUFFQXBCLHNCQUFVLEdBQUdBLFVBQVUsQ0FBQ3FCLE1BQVgsQ0FBa0IsVUFBVUMsS0FBVixFQUFpQjtBQUMvQyxxQkFBT0EsS0FBSyxLQUFLZCxTQUFqQjtBQUNBLGFBRlksQ0FBYjs7QUFJQSxnQkFBSVIsVUFBVSxDQUFDdUIsTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUM1QnpCLHNCQUFRLENBQUMwQixtQkFBVCxDQUE2QixRQUE3QixFQUF1Q25CLFFBQXZDO0FBQ0FNLG9CQUFNLENBQUNhLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDbkIsUUFBckM7QUFDQU0sb0JBQU0sQ0FBQ2EsbUJBQVAsQ0FBMkIsbUJBQTNCLEVBQWdEbkIsUUFBaEQ7QUFDQTtBQUNEO0FBQ0QsU0FoQkQ7QUFrQkFELGNBQU0sR0FBRyxLQUFUO0FBQ0EsT0FwQlMsRUFvQlAsR0FwQk8sQ0FBVjtBQXFCQTtBQUNELEdBMUJEOztBQTRCQU4sVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ00sUUFBcEM7QUFDQU0sUUFBTSxDQUFDWixnQkFBUCxDQUF3QixrQkFBeEIsRUFBNENNLFFBQTVDO0FBQ0FNLFFBQU0sQ0FBQ1osZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NNLFFBQWxDO0FBQ0FNLFFBQU0sQ0FBQ1osZ0JBQVAsQ0FBd0IsbUJBQXhCLEVBQTZDTSxRQUE3QztBQUNBLENBcENELEUiLCJmaWxlIjoicHVibGljLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3dwLWNvbnRlbnQvcGx1Z2lucy9nZWNrby1ncmlkLWxheW91dC9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wdWJsaWMuanNcIik7XG4iLCIvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3BlcmZvcm1hbmNlL2xhenktbG9hZGluZy1ndWlkYW5jZS9pbWFnZXMtYW5kLXZpZGVvL1xuLy8gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4vLyBcdHZhciBsYXp5SW1hZ2VzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nLmxhenlcIikpO1xuXG4vLyBcdGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4vLyBcdFx0bGV0IGxhenlJbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzLCBvYnNlcnZlcikge1xuLy8gXHRcdFx0ZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSkge1xuLy8gXHRcdFx0XHRpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbi8vIFx0XHRcdFx0XHRsZXQgbGF6eUltYWdlID0gZW50cnkudGFyZ2V0O1xuLy8gXHRcdFx0XHRcdGxhenlJbWFnZS5zcmMgPSBsYXp5SW1hZ2UuZGF0YXNldC5zcmM7XG4vLyBcdFx0XHRcdFx0bGF6eUltYWdlLnNyY3NldCA9IGxhenlJbWFnZS5kYXRhc2V0LnNyY3NldDtcbi8vIFx0XHRcdFx0XHRsYXp5SW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxhenlcIik7XG4vLyBcdFx0XHRcdFx0bGF6eUltYWdlT2JzZXJ2ZXIudW5vYnNlcnZlKGxhenlJbWFnZSk7XG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdH0pO1xuLy8gXHRcdH0pO1xuXG4vLyBcdFx0bGF6eUltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChsYXp5SW1hZ2UpIHtcbi8vIFx0XHRcdGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUobGF6eUltYWdlKTtcbi8vIFx0XHR9KTtcbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHQvLyBQb3NzaWJseSBmYWxsIGJhY2sgdG8gYSBtb3JlIGNvbXBhdGlibGUgbWV0aG9kIGhlcmVcbi8vIFx0fVxuLy8gfSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cdGxldCBsYXp5SW1hZ2VzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nLmxhenlcIikpO1xuXHRsZXQgYWN0aXZlID0gZmFsc2U7XG5cblx0Y29uc3QgbGF6eUxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGFjdGl2ZSA9PT0gZmFsc2UpIHtcblx0XHRcdGFjdGl2ZSA9IHRydWU7XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRsYXp5SW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGxhenlJbWFnZSkge1xuXHRcdFx0XHRcdGlmICgobGF6eUltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgbGF6eUltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+PSAwKSAmJiBnZXRDb21wdXRlZFN0eWxlKGxhenlJbWFnZSkuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcblx0XHRcdFx0XHRcdGxhenlJbWFnZS5zcmMgPSBsYXp5SW1hZ2UuZGF0YXNldC5zcmM7XG5cdFx0XHRcdFx0XHRsYXp5SW1hZ2Uuc3Jjc2V0ID0gbGF6eUltYWdlLmRhdGFzZXQuc3Jjc2V0O1xuXHRcdFx0XHRcdFx0bGF6eUltYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsYXp5XCIpO1xuXG5cdFx0XHRcdFx0XHRsYXp5SW1hZ2VzID0gbGF6eUltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGltYWdlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbWFnZSAhPT0gbGF6eUltYWdlO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGlmIChsYXp5SW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxhenlMb2FkKTtcblx0XHRcdFx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgbGF6eUxvYWQpO1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGxhenlMb2FkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0fSwgMjAwKTtcblx0XHR9XG5cdH07XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsYXp5TG9hZCk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBsYXp5TG9hZCk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGxhenlMb2FkKTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBsYXp5TG9hZCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=