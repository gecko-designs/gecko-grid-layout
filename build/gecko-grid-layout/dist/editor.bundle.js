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
/* harmony import */ var _type_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-select */ "./src/type-select.js");
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
  icon: React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"
  })),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('A single grid item within a grid block.'),
  category: 'common',
  supports: {
    className: true,
    inserter: true,
    reusable: false,
    html: false
  },
  attributes: {
    type: {
      type: 'string',
      default: undefined //solid // image //image-content

    },
    opacity: {
      type: 'number',
      default: 1
    },
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
    var opacity = attributes.opacity,
        h = attributes.h,
        w = attributes.w,
        type = attributes.type,
        bgMedia = attributes.bgMedia,
        bgMediaUrl = attributes.bgMediaUrl,
        bgColor = attributes.bgColor;
    var styles = {
      '--background': bgColor,
      '--opacity': opacity,
      gridColumnEnd: 'span ' + w,
      gridRowEnd: 'span ' + h,
      backgroundColor: bgColor,
      backgroundImage: 'url(' + bgMediaUrl + ')'
    };

    if (type === "image") {
      delete styles.backgroundColor;
    }

    if (type === "solid") {
      delete styles.backgroundImage;
    }

    return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Type"
    }, React.createElement(_type_select__WEBPACK_IMPORTED_MODULE_0__["default"], {
      onSelect: function onSelect(next) {
        setAttributes({
          type: next
        });
      },
      value: type
    })), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Size Settings"
    }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Height'),
      value: h,
      onChange: function onChange(next) {
        setAttributes({
          h: next
        });
      },
      min: 1,
      max: 7
    }), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Width'),
      value: w,
      onChange: function onChange(next) {
        setAttributes({
          w: next
        });
      },
      min: 1,
      max: 7
    })), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Background Settings"
    }, (type === 'image' || type === 'image-content') && React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
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
    }), React.createElement("hr", null), (type === 'solid' || type === 'image-content') && React.createElement("div", null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      label: "Background Color",
      value: bgColor ? bgColor.color : undefined,
      onChange: function onChange(value, test) {
        console.log('color', value);
        setAttributes({
          bgColor: value
        });
      }
    }), React.createElement("hr", null)), type === 'image-content' && React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Opacity'),
      value: opacity,
      onChange: function onChange(next) {
        setAttributes({
          opacity: next
        });
      },
      min: "0",
      max: "1",
      step: "0.1"
    }))), React.createElement("div", {
      className: "wp-block-gecko-grid-layout-editor__item ".concat(type, " ").concat(attributes.className),
      style: styles
    }, React.createElement("div", {
      className: "wp-block-gecko-grid-layout-editor__wrap"
    }, !type && React.createElement(_type_select__WEBPACK_IMPORTED_MODULE_0__["default"], {
      onSelect: function onSelect(next) {
        setAttributes({
          type: next
        });
      }
    }), (type === 'image' || type === 'image-content') && !bgMedia && React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["MediaPlaceholder"], {
      onSelect: function onSelect(value) {
        setAttributes({
          bgMedia: value.id,
          bgMediaUrl: value.url
        });
      },
      allowedTypes: ['image'],
      accept: "image/*"
    }), (type === 'solid' || type === 'image-content' && bgMedia) && React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], {
      templateLock: false
    }))));
  },
  save: function save() {
    return React.createElement("div", null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null));
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
            $(this).find(".editor-block-list__layout").attr("style", styles); // $(this).find(".block-list-appender").attr("style", "grid-column-end: span "+grid+";");
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
      $(this).find(".editor-block-list__layout").attr("style", styles); // $(this).find(".block-list-appender").attr("style", "grid-column-end: span " + grid + ";");
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

/***/ "./src/type-select.js":
/*!****************************!*\
  !*** ./src/type-select.js ***!
  \****************************/
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
    name: 'Solid'
  }, {
    slug: 'image',
    name: 'Image'
  }, {
    slug: 'image-content',
    name: 'Image with Content'
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
    }, type.name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQtbGF5b3V0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQtbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmJsb2Nrc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmVkaXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5lbGVtZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmkxOG5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIl0sIm5hbWVzIjpbIm5hbWUiLCJzZXR0aW5ncyIsInRpdGxlIiwiX18iLCJwYXJlbnQiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsInN1cHBvcnRzIiwiY2xhc3NOYW1lIiwiaW5zZXJ0ZXIiLCJyZXVzYWJsZSIsImh0bWwiLCJhdHRyaWJ1dGVzIiwidHlwZSIsImRlZmF1bHQiLCJ1bmRlZmluZWQiLCJvcGFjaXR5IiwiaCIsInciLCJiZ01lZGlhIiwiYmdNZWRpYVVybCIsImJnQ29sb3IiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImNvbnNvbGUiLCJsb2ciLCJhcmd1bWVudHMiLCJzdHlsZXMiLCJncmlkQ29sdW1uRW5kIiwiZ3JpZFJvd0VuZCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIm5leHQiLCJ2YWx1ZSIsImlkIiwidXJsIiwib3BlbiIsImN1cnNvciIsImNvbG9yIiwidGVzdCIsInNhdmUiLCJBTExPV0VEX0JMT0NLUyIsImNvbHVtbnMiLCJnYXAiLCJhbGlnbiIsImRlcHJlY2F0ZWQiLCJuZXh0Q29sdW1ucyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiZ3JpZCIsImdyaWRJdGVtIiwialF1ZXJ5IiwiJCIsImxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWRJdGVtIiwiZWFjaCIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImZvckVhY2giLCJtdXRhdGlvbiIsImZpbmQiLCJhdHRyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCJsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkIiwidXBkYXRlU3R5bGVzR3JpZEl0ZW0iLCJ1cGRhdGVTdHlsZXNHcmlkIiwib24iLCJlIiwid2luZG93IiwibG9hZCIsIm9uU2VsZWN0Iiwic2VsZWN0ZWQiLCJ0eXBlcyIsInNsdWciLCJtYXAiLCJpc1NlbGVjdGVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFB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LEVBQUUsZUFBUDtBQUF3QjNFLFFBQUksRUFBQztBQUE3QixHQUhhLENBQWQ7QUFLQSxTQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQyxzR0FERCxFQUVFMEUsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQzlELElBQUQsRUFBVTtBQUNwQixRQUFJK0QsVUFBVSxHQUFHLEVBQWpCOztBQUNBLFFBQUcvRCxJQUFJLENBQUM2RCxJQUFMLEtBQWN6QyxLQUFqQixFQUF1QjtBQUN0QjJDLGdCQUFVLEdBQUcsd0RBQWI7QUFDQTs7QUFDRCxXQUNDO0FBQUssZUFBUyx5REFBa0RBLFVBQWxELENBQWQ7QUFBOEUsYUFBTyxFQUFFO0FBQUEsZUFBS0osUUFBUSxDQUFDM0QsSUFBSSxDQUFDNkQsSUFBTixDQUFiO0FBQUE7QUFBdkYsT0FBa0g3RCxJQUFJLENBQUNkLElBQXZILENBREQ7QUFHQSxHQVJBLENBRkYsQ0FERDtBQWNBLEM7Ozs7Ozs7Ozs7O0FDekJELGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHVCIiwiZmlsZSI6ImVkaXRvci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi93cC1jb250ZW50L3BsdWdpbnMvZ2Vja28tZ3JpZC1sYXlvdXQvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgVHlwZVNlbGVjdCBmcm9tICcuL3R5cGUtc2VsZWN0Jztcbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge1xuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0UGF0aCxcblx0U1ZHXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5uZXJCbG9ja3MsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxuXHRDb2xvclBhbGV0dGUsXG59IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbSc7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnSXRlbScgKSxcblxuXHRwYXJlbnQ6IFsnZ2Vja28vZ3JpZC1sYXlvdXQnXSxcblxuXHRpY29uOiA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PFBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgLz48UGF0aCBkPVwiTTExLjk5IDE4LjU0bC03LjM3LTUuNzNMMyAxNC4wN2w5IDcgOS03LTEuNjMtMS4yN3pNMTIgMTZsNy4zNi01LjczTDIxIDlsLTktNy05IDcgMS42MyAxLjI3TDEyIDE2em0wLTExLjQ3TDE3Ljc0IDkgMTIgMTMuNDcgNi4yNiA5IDEyIDQuNTN6XCIgLz48L1NWRz4sXG5cblx0ZGVzY3JpcHRpb246IF9fKCAnQSBzaW5nbGUgZ3JpZCBpdGVtIHdpdGhpbiBhIGdyaWQgYmxvY2suJyApLFxuXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblxuXHRzdXBwb3J0czoge1xuXHRcdGNsYXNzTmFtZTogdHJ1ZSxcblx0XHRpbnNlcnRlcjogdHJ1ZSxcblx0XHRyZXVzYWJsZTogZmFsc2UsXG5cdFx0aHRtbDogZmFsc2UsXG5cdH0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHR5cGU6e1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiB1bmRlZmluZWQsIC8vc29saWQgLy8gaW1hZ2UgLy9pbWFnZS1jb250ZW50XG5cdFx0fSxcblx0XHRvcGFjaXR5OiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDEsXG5cdFx0fSxcblx0XHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDEsXG5cdFx0fSxcblx0XHR3OiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDEsXG5cdFx0fSxcblx0XHRiZ01lZGlhOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGJnTWVkaWFVcmw6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0YmdDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRlZGl0KHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgY2xhc3NOYW1lIH0pIHtcblx0XHRjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuXHRcdGNvbnN0IHsgb3BhY2l0eSwgaCwgdywgdHlwZSwgYmdNZWRpYSwgYmdNZWRpYVVybCwgYmdDb2xvciB9ID0gYXR0cmlidXRlcztcblx0XHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0XHQnLS1iYWNrZ3JvdW5kJzogYmdDb2xvcixcblx0XHRcdCctLW9wYWNpdHknOiBvcGFjaXR5LFxuXHRcdFx0Z3JpZENvbHVtbkVuZDogJ3NwYW4gJysgdyxcblx0XHRcdGdyaWRSb3dFbmQ6ICdzcGFuICcgKyBoLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yLFxuXHRcdFx0YmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBiZ01lZGlhVXJsICsgJyknLFxuXHRcdH07XG5cdFx0aWYodHlwZSA9PT0gXCJpbWFnZVwiKXtcblx0XHRcdGRlbGV0ZShzdHlsZXMuYmFja2dyb3VuZENvbG9yKTtcblx0XHR9XG5cdFx0aWYgKHR5cGUgPT09IFwic29saWRcIikge1xuXHRcdFx0ZGVsZXRlKHN0eWxlcy5iYWNrZ3JvdW5kSW1hZ2UpO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIlR5cGVcIj5cblx0XHRcdFx0XHRcdDxUeXBlU2VsZWN0IFxuXHRcdFx0XHRcdFx0XHRvblNlbGVjdCA9IHsobmV4dCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dHlwZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSAgdGl0bGU9XCJTaXplIFNldHRpbmdzXCI+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdIZWlnaHQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGggfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRoOiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyA3IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdXaWR0aCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgdyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdHc6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDcgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPVwiQmFja2dyb3VuZCBTZXR0aW5nc1wiPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQodHlwZSA9PT0gJ2ltYWdlJyB8fCB0eXBlID09PSAnaW1hZ2UtY29udGVudCcpICYmXG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZ01lZGlhOiB2YWx1ZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmdNZWRpYVVybDogdmFsdWUudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPXtbJ2ltYWdlJywgJ3ZpZGVvJ119XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyhiZ01lZGlhKT8gYmdNZWRpYTogbnVsbCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsoe29wZW59KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2JnTWVkaWFVcmwgJiYgPGltZyBzcmM9e2JnTWVkaWFVcmx9IG9uQ2xpY2s9e29wZW59IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cImF1dG9cIiBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fS8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshYmdNZWRpYVVybCAmJiA8ZGl2IGNsYXNzTmFtZT17J2J1dHRvbiBidXR0b24tbGFyZ2UnfSBvbkNsaWNrPXtvcGVufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdENob29zZSBCYWNrZ3JvdW5kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQodHlwZSA9PT0gJ3NvbGlkJyB8fCB0eXBlID09PSAnaW1hZ2UtY29udGVudCcpICYmXG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PENvbG9yUGFsZXR0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9J0JhY2tncm91bmQgQ29sb3InXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17KGJnQ29sb3IpID8gYmdDb2xvci5jb2xvciA6IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQodmFsdWUsIHRlc3QpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnY29sb3InLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiZ0NvbG9yOiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdCh0eXBlID09PSAnaW1hZ2UtY29udGVudCcpICYmXG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnT3BhY2l0eScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBvcGFjaXR5IH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRtaW4gPSBcIjBcIlxuXHRcdFx0XHRcdFx0XHRcdG1heCA9IFwiMVwiXG5cdFx0XHRcdFx0XHRcdFx0c3RlcCA9IFwiMC4xXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2B3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX2l0ZW0gJHt0eXBlfSAke2F0dHJpYnV0ZXMuY2xhc3NOYW1lfWB9IHN0eWxlPXtzdHlsZXN9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJ3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX3dyYXBcIj5cblx0XHRcdFx0XHR7IXR5cGUgJiYgPFR5cGVTZWxlY3QgXG5cdFx0XHRcdFx0XHRvblNlbGVjdCA9IHsobmV4dCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPn1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQodHlwZSA9PT0gJ2ltYWdlJyB8fCB0eXBlID09PSAnaW1hZ2UtY29udGVudCcpICYmXG5cdFx0XHRcdFx0XHQhYmdNZWRpYSAmJlxuXHRcdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJnTWVkaWE6IHZhbHVlLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZ01lZGlhVXJsOiB2YWx1ZS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0KHR5cGUgPT09ICdzb2xpZCcgfHwgKHR5cGUgPT09ICdpbWFnZS1jb250ZW50JyAmJiBiZ01lZGlhKSkgJiZcblx0XHRcdFx0XHRcdDxJbm5lckJsb2NrcyB0ZW1wbGF0ZUxvY2s9eyBmYWxzZSB9IC8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fSxcblxuXHRzYXZlKCkge1xuXHRcdHJldHVybiA8ZGl2PjxJbm5lckJsb2Nrcy5Db250ZW50IC8+PC9kaXY+O1xuXHR9LFxufTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBQYW5lbEJvZHksIFJhbmdlQ29udHJvbCwgRywgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRJbm5lckJsb2Nrcyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InO1xuXG4vKipcbiAqIEFsbG93ZWQgYmxvY2tzIGNvbnN0YW50IGlzIHBhc3NlZCB0byBJbm5lckJsb2NrcyBwcmVjaXNlbHkgYXMgc3BlY2lmaWVkIGhlcmUuXG4gKiBUaGUgY29udGVudHMgb2YgdGhlIGFycmF5IHNob3VsZCBuZXZlciBjaGFuZ2UuXG4gKiBUaGUgYXJyYXkgc2hvdWxkIGNvbnRhaW4gdGhlIG5hbWUgb2YgZWFjaCBibG9jayB0aGF0IGlzIGFsbG93ZWQuXG4gKiBJbiBjb2x1bW5zIGJsb2NrLCB0aGUgb25seSBibG9jayB3ZSBhbGxvdyBpcyAnZG1wL2dyaWQtaXRlbScuXG4gKlxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nW119XG4qL1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbJ2dlY2tvL2dyaWQtbGF5b3V0LWl0ZW0nXTtcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZ2Vja28vZ3JpZC1sYXlvdXQnO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0dyaWQnICksXG5cblx0aWNvbjogPFNWRyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+PEc+PFBhdGggZD1cIk00LDEzIEw4LDEzIEw4LDEwIEw0LDEwIEw0LDEzIFogTTQsMTUgTDQsMTggTDgsMTggTDgsMTUgTDQsMTUgWiBNMTAsMTMgTDE0LDEzIEwxNCwxMCBMMTAsMTAgTDEwLDEzIFogTTEwLDE1IEwxMCwxOCBMMTQsMTggTDE0LDE1IEwxMCwxNSBaIE0yMCwxMyBMMjAsMTAgTDE2LDEwIEwxNiwxMyBMMjAsMTMgWiBNMjAsMTUgTDE2LDE1IEwxNiwxOCBMMjAsMTggTDIwLDE1IFogTTQsOCBMOCw4IEw4LDUgTDQsNSBMNCw4IFogTTEwLDggTDE0LDggTDE0LDUgTDEwLDUgTDEwLDggWiBNMjAsOCBMMjAsNSBMMTYsNSBMMTYsOCBMMjAsOCBaIE00LDMgTDIwLDMgQzIxLjEwNDU2OTUsMyAyMiwzLjk1MTM5NDkxIDIyLDUuMTI1IEwyMiwxNy44NzUgQzIyLDE5LjA0ODYwNTEgMjEuMTA0NTY5NSwyMCAyMCwyMCBMNCwyMCBDMi44OTU0MzA1LDIwIDIsMTkuMDQ4NjA1MSAyLDE3Ljg3NSBMMiw1LjEyNSBDMiwzLjk1MTM5NDkxIDIuODk1NDMwNSwzIDQsMyBaXCIgLz48L0c+PC9TVkc+LFxuXG5cdGNhdGVnb3J5OiAnbGF5b3V0JyxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Y29sdW1uczoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiA1LFxuXHRcdH0sXG5cdFx0Z2FwOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDEsXG5cdFx0fSxcblx0fSxcblxuXHRkZXNjcmlwdGlvbjogX18oICdVc2UgQ1NTIEdyaWQgdG8gYnVpbGQgbGF5b3V0cyBhbmQsIHRoZW4gYWRkIHdoYXRldmVyIGNvbnRlbnQgYmxvY2tzIHlvdeKAmWQgbGlrZS4nICksXG5cblx0c3VwcG9ydHM6IHtcblx0XHRhbGlnbjogWyAnd2lkZScsICdmdWxsJyBdLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdGRlcHJlY2F0ZWQ6IFtdLFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRcdGNvbnN0IHsgY29sdW1ucywgZ2FwIH0gPSBhdHRyaWJ1dGVzO1xuXHRcdGNvbnN0IHN0eWxlcyA9ICdncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgnICsgY29sdW1ucyArICcsIG1pbm1heCgxMDBweCwgMWZyKSk7XHRncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTsgZ3JpZC1nYXA6JyArIGdhcCArICdyZW07JztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnR3JpZCBMYXlvdXQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGNvbHVtbnMgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dENvbHVtbnMgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29sdW1uczogbmV4dENvbHVtbnMsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMiB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDggfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0dhcCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgZ2FwIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0Z2FwOiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDAgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyAyIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yXCIgZGF0YS1wYXNzdGhydT17c3R5bGVzfSBkYXRhLWdyaWQ9e2NvbHVtbnN9PlxuXHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0dGVtcGxhdGUgPSB7XG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRbJ2dlY2tvL2dyaWQtbGF5b3V0LWl0ZW0nXSxcblx0XHRcdFx0XHRcdFx0XHRbJ2dlY2tvL2dyaWQtbGF5b3V0LWl0ZW0nXVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZUxvY2s9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9LFxuXG5cdHNhdmUoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxufTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge3JlZ2lzdGVyQmxvY2tUeXBlfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCAqIGFzIGdyaWQgZnJvbSAnLi9ncmlkLWxheW91dCc7XG5pbXBvcnQgKiBhcyBncmlkSXRlbSBmcm9tICcuL2dyaWQtbGF5b3V0LWl0ZW0nO1xuXG5yZWdpc3RlckJsb2NrVHlwZShncmlkLm5hbWUsIGdyaWQuc2V0dGluZ3MpO1xucmVnaXN0ZXJCbG9ja1R5cGUoZ3JpZEl0ZW0ubmFtZSwgZ3JpZEl0ZW0uc2V0dGluZ3MpO1xuXG4vKipcbiAqIFRoaXMgbWFrZSBzdXJlIHRoZSBncmlkIHdvcmtzIGluIHRoZSBlZGl0b3IuXG4gKi9cbmpRdWVyeShmdW5jdGlvbiAoJCkge1xuXG5cdGZ1bmN0aW9uIGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWRJdGVtKCkge1xuXHRcdCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX2l0ZW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuXHRcdFx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcblx0XHRcdFx0XHQvLyBPbiBjaGFuZ2UgdXBkYXRlIHRoZSBzdHlsZXNcblx0XHRcdFx0XHQkKCdbZGF0YS10eXBlPVwiZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3R5bGVzID0gJCh0aGlzKS5maW5kKFwiLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcl9faXRlbVwiKS5hdHRyKFwic3R5bGVcIik7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJzdHlsZVwiLCBzdHlsZXMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRcdGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWQoKSB7XG5cdFx0JCgnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcicpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG5cdFx0XHRcdG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuXHRcdFx0XHRcdC8vIE9uIGNoYW5nZSB1cGRhdGUgdGhlIHN0eWxlc1xuXHRcdFx0XHRcdCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuYXR0cihcImRhdGEtcGFzc3RocnVcIik7XG5cdFx0XHRcdFx0XHRjb25zdCBncmlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1ncmlkXCIpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5maW5kKFwiLmVkaXRvci1ibG9jay1saXN0X19sYXlvdXRcIikuYXR0cihcInN0eWxlXCIsIHN0eWxlcyk7XG5cdFx0XHRcdFx0XHQvLyAkKHRoaXMpLmZpbmQoXCIuYmxvY2stbGlzdC1hcHBlbmRlclwiKS5hdHRyKFwic3R5bGVcIiwgXCJncmlkLWNvbHVtbi1lbmQ6IHNwYW4gXCIrZ3JpZCtcIjtcIik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ011c3RhdGlvbicsIG11dGF0aW9ucyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKHRoaXMsIHtcblx0XHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdFx0YXR0cmlidXRlRmlsdGVyOiBbJ2RhdGEtcGFzc3RocnUnLCAnc3R5bGUnXSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlU3R5bGVzR3JpZEl0ZW0oKSB7XG5cdFx0JCgnW2RhdGEtdHlwZT1cImdlY2tvL2dyaWQtbGF5b3V0LWl0ZW1cIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuZmluZChcIi53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX2l0ZW1cIikuYXR0cihcInN0eWxlXCIpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVN0eWxlc0dyaWQoKSB7XG5cdFx0JCgnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcicpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgc3R5bGVzID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1wYXNzdGhydVwiKTtcblx0XHRcdGNvbnN0IGdyaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWdyaWRcIik7XG5cdFx0XHQkKHRoaXMpLmZpbmQoXCIuZWRpdG9yLWJsb2NrLWxpc3RfX2xheW91dFwiKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHRcdC8vICQodGhpcykuZmluZChcIi5ibG9jay1saXN0LWFwcGVuZGVyXCIpLmF0dHIoXCJzdHlsZVwiLCBcImdyaWQtY29sdW1uLWVuZDogc3BhbiBcIiArIGdyaWQgKyBcIjtcIik7XG5cdFx0fSk7XG5cdH1cblxuXHQkKCdib2R5Jykub24oJ0RPTU5vZGVJbnNlcnRlZCcsICcud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yJywgZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoJCgnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcicpKXtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdBZGRlZCBOZXcgRG9tTm9kZScsIGUpXG5cdFx0XHR1cGRhdGVTdHlsZXNHcmlkKCk7XG5cdFx0XHR1cGRhdGVTdHlsZXNHcmlkSXRlbSgpO1xuXHRcdFx0bGlzdGVuRm9yU3R5bGVDaGFuZ2VzR3JpZCgpXG5cdFx0XHRsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkSXRlbSgpO1xuXHRcdH1cblx0fSk7XG5cblx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xuXHRcdHVwZGF0ZVN0eWxlc0dyaWQoKTtcblx0XHR1cGRhdGVTdHlsZXNHcmlkSXRlbSgpO1xuXHRcdGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWQoKVxuXHRcdGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWRJdGVtKCk7XG5cdH0pO1xufSk7IiwiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuLy8gaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oe3ZhbHVlLCBvblNlbGVjdH0pe1xuXHRjb25zdCBzZWxlY3RlZCA9IChuZXh0KSA9PiB7XG5cdFx0cmV0dXJuIG9uU2VsZWN0KG5leHQpO1xuXHR9XG5cdGNvbnN0IHR5cGVzID0gW1xuXHRcdHtzbHVnOiAnc29saWQnLCBuYW1lOidTb2xpZCd9LFxuXHRcdHtzbHVnOiAnaW1hZ2UnLCBuYW1lOidJbWFnZSd9LFxuXHRcdHtzbHVnOiAnaW1hZ2UtY29udGVudCcsIG5hbWU6J0ltYWdlIHdpdGggQ29udGVudCd9LFxuXHRdXG5cdHJldHVybihcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LXR5cGUtc2VsZWN0XCI+XG5cdFx0XHQ8cD5DaG9vc2UgdGhlIGJsb2NrIGxheW91dCB0eXBlLjwvcD5cblx0XHRcdHt0eXBlcy5tYXAoKHR5cGUpID0+IHtcblx0XHRcdFx0bGV0IGlzU2VsZWN0ZWQgPSBcIlwiO1xuXHRcdFx0XHRpZih0eXBlLnNsdWcgPT09IHZhbHVlKXtcblx0XHRcdFx0XHRpc1NlbGVjdGVkID0gXCJ3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC10eXBlLXNlbGVjdF9faXRlbS0tc2VsZWN0ZWRcIlxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2B3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC10eXBlLXNlbGVjdF9faXRlbSAke2lzU2VsZWN0ZWR9YH0gb25DbGljaz17KCk9PiBzZWxlY3RlZCh0eXBlLnNsdWcpfT57dHlwZS5uYW1lfTwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9kaXY+XG5cdCk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuYmxvY2tzOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmNvbXBvbmVudHM7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuZWRpdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuaTE4bjsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyJdLCJzb3VyY2VSb290IjoiIn0=