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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */




var name = 'gecko/grid-layout-item';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Item'),
  parent: ['gecko/grid-layout'],
  icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"
  })),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('A single grid item within a grid block.'),
  category: 'common',
  supports: {
    inserter: true,
    reusable: false,
    html: false
  },
  attributes: {
    h: {
      type: 'number',
      default: 1
    },
    w: {
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
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className;
    console.log(arguments);
    var h = attributes.h,
        w = attributes.w,
        bgMedia = attributes.bgMedia,
        bgMediaUrl = attributes.bgMediaUrl,
        bgColor = attributes.bgColor;
    var styles = {
      gridColumnEnd: 'span ' + w,
      gridRowEnd: 'span ' + h,
      backgroundColor: bgColor,
      backgroundImage: 'url(' + bgMediaUrl + ')'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Size Settings"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Height'),
      value: h,
      onChange: function onChange(next) {
        setAttributes({
          h: next
        });
      },
      min: 1,
      max: 7
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Width'),
      value: w,
      onChange: function onChange(next) {
        setAttributes({
          w: next
        });
      },
      min: 1,
      max: 7
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Background Settings"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
      onSelect: function onSelect(value) {
        console.log(value);
        setAttributes({
          bgMedia: value.id,
          bgMediaUrl: value.url
        });
      },
      type: ['image', 'video'],
      value: bgMedia ? bgMedia : null,
      render: function render(_ref2) {
        var open = _ref2.open;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: 'button button-large',
          onClick: open
        }, "Choose Background");
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      label: "Background Color",
      value: bgColor ? bgColor.color : undefined,
      onChange: function onChange(value) {
        setAttributes({
          bgColor: value
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wp-block-gecko-grid-layout-editor__item",
      style: styles
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], {
      templateLock: false
    })));
  },
  save: function save() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null));
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




/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'dmp/grid-item'.
 *
 * @constant
 * @type {string[]}
*/

var ALLOWED_BLOCKS = ['gecko/grid-layout-item'];
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
      default: 5
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
  deprecated: [],
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var columns = attributes.columns,
        gap = attributes.gap;
    var styles = 'grid-template-columns: repeat(' + columns + ', minmax(100px, 1fr));	grid-auto-rows: minmax(100px, auto); grid-gap:' + gap + 'rem;';
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Grid Layout'),
      value: columns,
      onChange: function onChange(nextColumns) {
        setAttributes({
          columns: nextColumns
        });
      },
      min: 2,
      max: 8
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], {
      template: [['gecko/grid-layout-item'], ['gecko/grid-layout-item']],
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS
    })));
  },
  save: function save() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null));
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
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_grid_layout__WEBPACK_IMPORTED_MODULE_1__["name"], _grid_layout__WEBPACK_IMPORTED_MODULE_1__["settings"]);
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_grid_layout_item__WEBPACK_IMPORTED_MODULE_2__["name"], _grid_layout_item__WEBPACK_IMPORTED_MODULE_2__["settings"]);
/**
 * This make sure the grid works in the editor.
 */

jQuery(function ($) {
  function listenForStyleChangesGridItem() {
    $('.wp-block-gecko-grid-layout-editor__item').each(function () {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          // On change update the styles
          $('[data-type="gecko/grid-layout-item"]').each(function () {
            var styles = $(this).find(".wp-block-gecko-grid-layout-editor__item").attr("style");
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
            $(this).find(".block-list-appender").attr("style", "grid-column-end: span " + grid + ";");
          });
          console.log('Mustation', mutations);
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
    $('[data-type="gecko/grid-layout-item"]').each(function () {
      var styles = $(this).find(".wp-block-gecko-grid-layout-editor__item").attr("style");
      $(this).attr("style", styles);
    });
  }

  function updateStylesGrid() {
    $('.wp-block-gecko-grid-layout-editor').each(function () {
      var styles = $(this).attr("data-passthru");
      var grid = $(this).attr("data-grid");
      $(this).find(".editor-block-list__layout").attr("style", styles);
      $(this).find(".block-list-appender").attr("style", "grid-column-end: span " + grid + ";");
    });
  }

  $('body').on('DOMNodeInserted', '.wp-block-gecko-grid-layout-editor', function (e) {
    if ($('.wp-block-gecko-grid-layout-editor')) {
      // console.log('Added New DomNode', e)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQtbGF5b3V0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQtbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuYmxvY2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuZWRpdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmVsZW1lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuaTE4blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsibmFtZSIsInNldHRpbmdzIiwidGl0bGUiLCJfXyIsInBhcmVudCIsImljb24iLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5Iiwic3VwcG9ydHMiLCJpbnNlcnRlciIsInJldXNhYmxlIiwiaHRtbCIsImF0dHJpYnV0ZXMiLCJoIiwidHlwZSIsImRlZmF1bHQiLCJ3IiwiYmdNZWRpYSIsImJnTWVkaWFVcmwiLCJiZ0NvbG9yIiwiZWRpdCIsInNldEF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIiwiYXJndW1lbnRzIiwic3R5bGVzIiwiZ3JpZENvbHVtbkVuZCIsImdyaWRSb3dFbmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJuZXh0IiwidmFsdWUiLCJpZCIsInVybCIsIm9wZW4iLCJjb2xvciIsInVuZGVmaW5lZCIsInNhdmUiLCJBTExPV0VEX0JMT0NLUyIsImNvbHVtbnMiLCJnYXAiLCJhbGlnbiIsImRlcHJlY2F0ZWQiLCJuZXh0Q29sdW1ucyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiZ3JpZCIsImdyaWRJdGVtIiwialF1ZXJ5IiwiJCIsImxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWRJdGVtIiwiZWFjaCIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImZvckVhY2giLCJtdXRhdGlvbiIsImZpbmQiLCJhdHRyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCJsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkIiwidXBkYXRlU3R5bGVzR3JpZEl0ZW0iLCJ1cGRhdGVTdHlsZXNHcmlkIiwib24iLCJlIiwid2luZG93IiwibG9hZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7O0FBR0E7QUFNQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxJQUFJLEdBQUcsd0JBQWI7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDdkJDLE9BQUssRUFBRUMsMERBQUUsQ0FBRSxNQUFGLENBRGM7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LGVBQWIsQ0FBZjtBQUNBLFVBQU1aLElBQUksR0FBR0csQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUyxJQUFSLENBQWEsV0FBYixDQUFiO0FBQ0FULE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLDRCQUFiLEVBQTJDQyxJQUEzQyxDQUFnRCxPQUFoRCxFQUF5RGhDLE1BQXpEO0FBQ0F1QixPQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxzQkFBYixFQUFxQ0MsSUFBckMsQ0FBMEMsT0FBMUMsRUFBbUQsMkJBQTJCWixJQUEzQixHQUFrQyxHQUFyRjtBQUNBLEtBTEQ7QUFNQTs7QUFFREcsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVZ0IsRUFBVixDQUFhLGlCQUFiLEVBQWdDLG9DQUFoQyxFQUFzRSxVQUFVQyxDQUFWLEVBQWE7QUFDbEYsUUFBSWpCLENBQUMsQ0FBQyxvQ0FBRCxDQUFMLEVBQTRDO0FBQzNDO0FBQ0FlLHNCQUFnQjtBQUNoQkQsMEJBQW9CO0FBQ3BCRCwrQkFBeUI7QUFDekJaLG1DQUE2QjtBQUM3QjtBQUNELEdBUkQ7QUFVQUQsR0FBQyxDQUFDa0IsTUFBRCxDQUFELENBQVVDLElBQVYsQ0FBZSxZQUFZO0FBQzFCSixvQkFBZ0I7QUFDaEJELHdCQUFvQjtBQUNwQkQsNkJBQXlCO0FBQ3pCWixpQ0FBNkI7QUFDN0IsR0FMRDtBQU1BLENBM0VLLENBQU4sQzs7Ozs7Ozs7Ozs7QUNqQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsdUIiLCJmaWxlIjoiZWRpdG9yLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3dwLWNvbnRlbnQvcGx1Z2lucy9nZWNrby1ncmlkLWxheW91dC9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge1xuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0UGF0aCxcblx0U1ZHXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5uZXJCbG9ja3MsXG5cdE1lZGlhVXBsb2FkLFxuXHRDb2xvclBhbGV0dGUsXG59IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbSc7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnSXRlbScgKSxcblxuXHRwYXJlbnQ6IFsnZ2Vja28vZ3JpZC1sYXlvdXQnXSxcblxuXHRpY29uOiA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PFBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgLz48UGF0aCBkPVwiTTExLjk5IDE4LjU0bC03LjM3LTUuNzNMMyAxNC4wN2w5IDcgOS03LTEuNjMtMS4yN3pNMTIgMTZsNy4zNi01LjczTDIxIDlsLTktNy05IDcgMS42MyAxLjI3TDEyIDE2em0wLTExLjQ3TDE3Ljc0IDkgMTIgMTMuNDcgNi4yNiA5IDEyIDQuNTN6XCIgLz48L1NWRz4sXG5cblx0ZGVzY3JpcHRpb246IF9fKCAnQSBzaW5nbGUgZ3JpZCBpdGVtIHdpdGhpbiBhIGdyaWQgYmxvY2suJyApLFxuXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblxuXHRzdXBwb3J0czoge1xuXHRcdGluc2VydGVyOiB0cnVlLFxuXHRcdHJldXNhYmxlOiBmYWxzZSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdFx0dzoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdFx0YmdNZWRpYToge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRiZ01lZGlhVXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJnQ29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9KSB7XG5cdFx0Y29uc29sZS5sb2coYXJndW1lbnRzKTtcblx0XHRjb25zdCB7IGgsIHcsIGJnTWVkaWEsIGJnTWVkaWFVcmwsIGJnQ29sb3IgfSA9IGF0dHJpYnV0ZXM7XG5cdFx0Y29uc3Qgc3R5bGVzID0ge1xuXHRcdFx0Z3JpZENvbHVtbkVuZDogJ3NwYW4gJysgdyxcblx0XHRcdGdyaWRSb3dFbmQ6ICdzcGFuICcgKyBoLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yLFxuXHRcdFx0YmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBiZ01lZGlhVXJsICsgJyknLFxuXHRcdH07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSAgdGl0bGU9XCJTaXplIFNldHRpbmdzXCI+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdIZWlnaHQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGggfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRoOiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyA3IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdXaWR0aCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgdyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdHc6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDcgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPVwiQmFja2dyb3VuZCBTZXR0aW5nc1wiPlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRiZ01lZGlhOiB2YWx1ZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdGJnTWVkaWFVcmw6IHZhbHVlLnVybCxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0dHlwZT17WydpbWFnZScsICd2aWRlbyddfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17KGJnTWVkaWEpPyBiZ01lZGlhOiBudWxsIH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsoe29wZW59KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eydidXR0b24gYnV0dG9uLWxhcmdlJ30gb25DbGljaz17b3Blbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdENob29zZSBCYWNrZ3JvdW5kXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PENvbG9yUGFsZXR0ZVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdCYWNrZ3JvdW5kIENvbG9yJ1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsoYmdDb2xvcikgPyBiZ0NvbG9yLmNvbG9yIDogdW5kZWZpbmVkfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJnQ29sb3I6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PHA+PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcl9faXRlbVwiIHN0eWxlPXtzdHlsZXN9PlxuXHRcdFx0XHRcdDxJbm5lckJsb2NrcyB0ZW1wbGF0ZUxvY2s9eyBmYWxzZSB9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9LFxuXG5cdHNhdmUoKSB7XG5cdFx0cmV0dXJuIDxkaXY+PElubmVyQmxvY2tzLkNvbnRlbnQgLz48L2Rpdj47XG5cdH0sXG59O1xuIiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IFBhbmVsQm9keSwgUmFuZ2VDb250cm9sLCBHLCBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxufSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5cbi8qKlxuICogQWxsb3dlZCBibG9ja3MgY29uc3RhbnQgaXMgcGFzc2VkIHRvIElubmVyQmxvY2tzIHByZWNpc2VseSBhcyBzcGVjaWZpZWQgaGVyZS5cbiAqIFRoZSBjb250ZW50cyBvZiB0aGUgYXJyYXkgc2hvdWxkIG5ldmVyIGNoYW5nZS5cbiAqIFRoZSBhcnJheSBzaG91bGQgY29udGFpbiB0aGUgbmFtZSBvZiBlYWNoIGJsb2NrIHRoYXQgaXMgYWxsb3dlZC5cbiAqIEluIGNvbHVtbnMgYmxvY2ssIHRoZSBvbmx5IGJsb2NrIHdlIGFsbG93IGlzICdkbXAvZ3JpZC1pdGVtJy5cbiAqXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiovXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFsnZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbSddO1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdnZWNrby9ncmlkLWxheW91dCc7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnR3JpZCcgKSxcblxuXHRpY29uOiA8U1ZHIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PFBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgLz48Rz48UGF0aCBkPVwiTTQsMTMgTDgsMTMgTDgsMTAgTDQsMTAgTDQsMTMgWiBNNCwxNSBMNCwxOCBMOCwxOCBMOCwxNSBMNCwxNSBaIE0xMCwxMyBMMTQsMTMgTDE0LDEwIEwxMCwxMCBMMTAsMTMgWiBNMTAsMTUgTDEwLDE4IEwxNCwxOCBMMTQsMTUgTDEwLDE1IFogTTIwLDEzIEwyMCwxMCBMMTYsMTAgTDE2LDEzIEwyMCwxMyBaIE0yMCwxNSBMMTYsMTUgTDE2LDE4IEwyMCwxOCBMMjAsMTUgWiBNNCw4IEw4LDggTDgsNSBMNCw1IEw0LDggWiBNMTAsOCBMMTQsOCBMMTQsNSBMMTAsNSBMMTAsOCBaIE0yMCw4IEwyMCw1IEwxNiw1IEwxNiw4IEwyMCw4IFogTTQsMyBMMjAsMyBDMjEuMTA0NTY5NSwzIDIyLDMuOTUxMzk0OTEgMjIsNS4xMjUgTDIyLDE3Ljg3NSBDMjIsMTkuMDQ4NjA1MSAyMS4xMDQ1Njk1LDIwIDIwLDIwIEw0LDIwIEMyLjg5NTQzMDUsMjAgMiwxOS4wNDg2MDUxIDIsMTcuODc1IEwyLDUuMTI1IEMyLDMuOTUxMzk0OTEgMi44OTU0MzA1LDMgNCwzIFpcIiAvPjwvRz48L1NWRz4sXG5cblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRjb2x1bW5zOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDUsXG5cdFx0fSxcblx0XHRnYXA6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMSxcblx0XHR9LFxuXHR9LFxuXG5cdGRlc2NyaXB0aW9uOiBfXyggJ1VzZSBDU1MgR3JpZCB0byBidWlsZCBsYXlvdXRzIGFuZCwgdGhlbiBhZGQgd2hhdGV2ZXIgY29udGVudCBibG9ja3MgeW914oCZZCBsaWtlLicgKSxcblxuXHRzdXBwb3J0czoge1xuXHRcdGFsaWduOiBbICd3aWRlJywgJ2Z1bGwnIF0sXG5cdFx0aHRtbDogZmFsc2UsXG5cdH0sXG5cblx0ZGVwcmVjYXRlZDogW10sXG5cblx0ZWRpdCggeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XG5cdFx0Y29uc3QgeyBjb2x1bW5zLCBnYXAgfSA9IGF0dHJpYnV0ZXM7XG5cdFx0Y29uc3Qgc3R5bGVzID0gJ2dyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCcgKyBjb2x1bW5zICsgJywgbWlubWF4KDEwMHB4LCAxZnIpKTtcdGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pOyBncmlkLWdhcDonICsgZ2FwICsgJ3JlbTsnO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdHcmlkIExheW91dCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY29sdW1ucyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0Q29sdW1ucyApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2x1bW5zOiBuZXh0Q29sdW1ucyxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAyIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgOCB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnR2FwJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBnYXAgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRnYXA6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMCB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDIgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JcIiBkYXRhLXBhc3N0aHJ1PXtzdHlsZXN9IGRhdGEtZ3JpZD17Y29sdW1uc30+XG5cdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZSA9IHtcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFsnZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbSddLFxuXHRcdFx0XHRcdFx0XHRcdFsnZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbSddXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRlbXBsYXRlTG9jaz17ZmFsc2V9XG5cdFx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fSxcblxuXHRzYXZlKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcbn07XG4iLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHtyZWdpc3RlckJsb2NrVHlwZX0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgKiBhcyBncmlkIGZyb20gJy4vZ3JpZC1sYXlvdXQnO1xuaW1wb3J0ICogYXMgZ3JpZEl0ZW0gZnJvbSAnLi9ncmlkLWxheW91dC1pdGVtJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoZ3JpZC5uYW1lLCBncmlkLnNldHRpbmdzKTtcbnJlZ2lzdGVyQmxvY2tUeXBlKGdyaWRJdGVtLm5hbWUsIGdyaWRJdGVtLnNldHRpbmdzKTtcblxuLyoqXG4gKiBUaGlzIG1ha2Ugc3VyZSB0aGUgZ3JpZCB3b3JrcyBpbiB0aGUgZWRpdG9yLlxuICovXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcblxuXHRmdW5jdGlvbiBsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkSXRlbSgpIHtcblx0XHQkKCcud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yX19pdGVtJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcblx0XHRcdFx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG5cdFx0XHRcdFx0Ly8gT24gY2hhbmdlIHVwZGF0ZSB0aGUgc3R5bGVzXG5cdFx0XHRcdFx0JCgnW2RhdGEtdHlwZT1cImdlY2tvL2dyaWQtbGF5b3V0LWl0ZW1cIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuZmluZChcIi53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX2l0ZW1cIikuYXR0cihcInN0eWxlXCIpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRcdG9ic2VydmVyLm9ic2VydmUodGhpcywge1xuXHRcdFx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdFx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkKCkge1xuXHRcdCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuXHRcdFx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcblx0XHRcdFx0XHQvLyBPbiBjaGFuZ2UgdXBkYXRlIHRoZSBzdHlsZXNcblx0XHRcdFx0XHQkKCcud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdHlsZXMgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXBhc3N0aHJ1XCIpO1xuXHRcdFx0XHRcdFx0Y29uc3QgZ3JpZCA9ICQodGhpcykuYXR0cihcImRhdGEtZ3JpZFwiKTtcblx0XHRcdFx0XHRcdCQodGhpcykuZmluZChcIi5lZGl0b3ItYmxvY2stbGlzdF9fbGF5b3V0XCIpLmF0dHIoXCJzdHlsZVwiLCBzdHlsZXMpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5maW5kKFwiLmJsb2NrLWxpc3QtYXBwZW5kZXJcIikuYXR0cihcInN0eWxlXCIsIFwiZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIFwiK2dyaWQrXCI7XCIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdNdXN0YXRpb24nLCBtdXRhdGlvbnMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRcdGF0dHJpYnV0ZUZpbHRlcjogWydkYXRhLXBhc3N0aHJ1JywgJ3N0eWxlJ10sXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVN0eWxlc0dyaWRJdGVtKCkge1xuXHRcdCQoJ1tkYXRhLXR5cGU9XCJnZWNrby9ncmlkLWxheW91dC1pdGVtXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBzdHlsZXMgPSAkKHRoaXMpLmZpbmQoXCIud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yX19pdGVtXCIpLmF0dHIoXCJzdHlsZVwiKTtcblx0XHRcdCQodGhpcykuYXR0cihcInN0eWxlXCIsIHN0eWxlcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVTdHlsZXNHcmlkKCkge1xuXHRcdCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuYXR0cihcImRhdGEtcGFzc3RocnVcIik7XG5cdFx0XHRjb25zdCBncmlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1ncmlkXCIpO1xuXHRcdFx0JCh0aGlzKS5maW5kKFwiLmVkaXRvci1ibG9jay1saXN0X19sYXlvdXRcIikuYXR0cihcInN0eWxlXCIsIHN0eWxlcyk7XG5cdFx0XHQkKHRoaXMpLmZpbmQoXCIuYmxvY2stbGlzdC1hcHBlbmRlclwiKS5hdHRyKFwic3R5bGVcIiwgXCJncmlkLWNvbHVtbi1lbmQ6IHNwYW4gXCIgKyBncmlkICsgXCI7XCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0JCgnYm9keScpLm9uKCdET01Ob2RlSW5zZXJ0ZWQnLCAnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcicsIGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InKSl7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnQWRkZWQgTmV3IERvbU5vZGUnLCBlKVxuXHRcdFx0dXBkYXRlU3R5bGVzR3JpZCgpO1xuXHRcdFx0dXBkYXRlU3R5bGVzR3JpZEl0ZW0oKTtcblx0XHRcdGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWQoKVxuXHRcdFx0bGlzdGVuRm9yU3R5bGVDaGFuZ2VzR3JpZEl0ZW0oKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcblx0XHR1cGRhdGVTdHlsZXNHcmlkKCk7XG5cdFx0dXBkYXRlU3R5bGVzR3JpZEl0ZW0oKTtcblx0XHRsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkKClcblx0XHRsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkSXRlbSgpO1xuXHR9KTtcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmJsb2NrczsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5jb21wb25lbnRzOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmVkaXRvcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5lbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmkxOG47IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiXSwic291cmNlUm9vdCI6IiJ9