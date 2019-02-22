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
      class: "dashicons dashicons-admin-appearance"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQtbGF5b3V0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQtbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmJsb2Nrc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmVkaXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5lbGVtZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmkxOG5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIl0sIm5hbWVzIjpbIm5hbWUiLCJzZXR0aW5ncyIsInRpdGxlIiwiX18iLCJwYXJlbnQiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsInN1cHBvcnRzIiwiY2xhc3NOYW1lIiwiaW5zZXJ0ZXIiLCJyZXVzYWJsZSIsImh0bWwiLCJhdHRyaWJ1dGVzIiwidHlwZSIsImRlZmF1bHQiLCJ1bmRlZmluZWQiLCJvcGFjaXR5IiwiaCIsInciLCJiZ01lZGlhIiwiYmdNZWRpYVVybCIsImJnQ29sb3IiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImNvbnNvbGUiLCJsb2ciLCJhcmd1bWVudHMiLCJzdHlsZXMiLCJncmlkQ29sdW1uRW5kIiwiZ3JpZFJvd0VuZCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIm5leHQiLCJ2YWx1ZSIsImlkIiwidXJsIiwib3BlbiIsImN1cnNvciIsImNvbG9yIiwidGVzdCIsInNhdmUiLCJBTExPV0VEX0JMT0NLUyIsImNvbHVtbnMiLCJnYXAiLCJhbGlnbiIsImRlcHJlY2F0ZWQiLCJuZXh0Q29sdW1ucyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiZ3JpZCIsImdyaWRJdGVtIiwialF1ZXJ5IiwiJCIsImxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWRJdGVtIiwiZWFjaCIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImZvckVhY2giLCJtdXRhdGlvbiIsImZpbmQiLCJhdHRyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCJsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkIiwidXBkYXRlU3R5bGVzR3JpZEl0ZW0iLCJ1cGRhdGVTdHlsZXNHcmlkIiwib24iLCJlIiwid2luZG93IiwibG9hZCIsIm9uU2VsZWN0Iiwic2VsZWN0ZWQiLCJ0eXBlcyIsInNsdWciLCJtYXAiLCJpc1NlbGVjdGVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFB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QWlCM0UsUUFBSSxFQUFFLE9BQXZCO0FBQWdDSyxRQUFJLEVBQUU7QUFBTSxXQUFLLEVBQUM7QUFBWjtBQUF0QyxHQUZhLEVBR2I7QUFBRXNFLFFBQUksRUFBRSxlQUFSO0FBQXlCM0UsUUFBSSxFQUFFLG9CQUEvQjtBQUFxREssUUFBSSxFQUFFO0FBQU0sV0FBSyxFQUFDO0FBQVo7QUFBM0QsR0FIYSxDQUFkO0FBS0EsU0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0Msc0dBREQsRUFFRXFFLEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUM5RCxJQUFELEVBQVU7QUFDcEIsUUFBSStELFVBQVUsR0FBRyxFQUFqQjs7QUFDQSxRQUFHL0QsSUFBSSxDQUFDNkQsSUFBTCxLQUFjekMsS0FBakIsRUFBdUI7QUFDdEIyQyxnQkFBVSxHQUFHLHdEQUFiO0FBQ0E7O0FBQ0QsV0FDQztBQUFLLGVBQVMseURBQWtEQSxVQUFsRCxDQUFkO0FBQThFLGFBQU8sRUFBRTtBQUFBLGVBQUtKLFFBQVEsQ0FBQzNELElBQUksQ0FBQzZELElBQU4sQ0FBYjtBQUFBO0FBQXZGLE9BQWtIN0QsSUFBSSxDQUFDVCxJQUF2SCxFQUE2SFMsSUFBSSxDQUFDZCxJQUFsSSxDQUREO0FBR0EsR0FSQSxDQUZGLENBREQ7QUFjQSxDOzs7Ozs7Ozs7OztBQ3pCRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSx1QiIsImZpbGUiOiJlZGl0b3IuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvd3AtY29udGVudC9wbHVnaW5zL2dlY2tvLWdyaWQtbGF5b3V0L2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFR5cGVTZWxlY3QgZnJvbSAnLi90eXBlLXNlbGVjdCc7XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHtcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFBhdGgsXG5cdFNWR1xufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0Q29sb3JQYWxldHRlLFxufSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2dlY2tvL2dyaWQtbGF5b3V0LWl0ZW0nO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0l0ZW0nICksXG5cblx0cGFyZW50OiBbJ2dlY2tvL2dyaWQtbGF5b3V0J10sXG5cblx0aWNvbjogPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+PFBhdGggZD1cIk0xMS45OSAxOC41NGwtNy4zNy01LjczTDMgMTQuMDdsOSA3IDktNy0xLjYzLTEuMjd6TTEyIDE2bDcuMzYtNS43M0wyMSA5bC05LTctOSA3IDEuNjMgMS4yN0wxMiAxNnptMC0xMS40N0wxNy43NCA5IDEyIDEzLjQ3IDYuMjYgOSAxMiA0LjUzelwiIC8+PC9TVkc+LFxuXG5cdGRlc2NyaXB0aW9uOiBfXyggJ0Egc2luZ2xlIGdyaWQgaXRlbSB3aXRoaW4gYSBncmlkIGJsb2NrLicgKSxcblxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0c3VwcG9ydHM6IHtcblx0XHRjbGFzc05hbWU6IHRydWUsXG5cdFx0aW5zZXJ0ZXI6IHRydWUsXG5cdFx0cmV1c2FibGU6IGZhbHNlLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0eXBlOntcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogdW5kZWZpbmVkLCAvL3NvbGlkIC8vIGltYWdlIC8vaW1hZ2UtY29udGVudFxuXHRcdH0sXG5cdFx0b3BhY2l0eToge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdFx0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdFx0dzoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdFx0YmdNZWRpYToge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRiZ01lZGlhVXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJnQ29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9KSB7XG5cdFx0Y29uc29sZS5sb2coYXJndW1lbnRzKTtcblx0XHRjb25zdCB7IG9wYWNpdHksIGgsIHcsIHR5cGUsIGJnTWVkaWEsIGJnTWVkaWFVcmwsIGJnQ29sb3IgfSA9IGF0dHJpYnV0ZXM7XG5cdFx0Y29uc3Qgc3R5bGVzID0ge1xuXHRcdFx0Jy0tYmFja2dyb3VuZCc6IGJnQ29sb3IsXG5cdFx0XHQnLS1vcGFjaXR5Jzogb3BhY2l0eSxcblx0XHRcdGdyaWRDb2x1bW5FbmQ6ICdzcGFuICcrIHcsXG5cdFx0XHRncmlkUm93RW5kOiAnc3BhbiAnICsgaCxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogYmdDb2xvcixcblx0XHRcdGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgYmdNZWRpYVVybCArICcpJyxcblx0XHR9O1xuXHRcdGlmKHR5cGUgPT09IFwiaW1hZ2VcIil7XG5cdFx0XHRkZWxldGUoc3R5bGVzLmJhY2tncm91bmRDb2xvcik7XG5cdFx0fVxuXHRcdGlmICh0eXBlID09PSBcInNvbGlkXCIpIHtcblx0XHRcdGRlbGV0ZShzdHlsZXMuYmFja2dyb3VuZEltYWdlKTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9XCJUeXBlXCI+XG5cdFx0XHRcdFx0XHQ8VHlwZVNlbGVjdCBcblx0XHRcdFx0XHRcdFx0b25TZWxlY3QgPSB7KG5leHQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3R5cGV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgIHRpdGxlPVwiU2l6ZSBTZXR0aW5nc1wiPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSGVpZ2h0JyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBoIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0aDogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgNyB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnV2lkdGgnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHcgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3OiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyA3IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIkJhY2tncm91bmQgU2V0dGluZ3NcIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0KHR5cGUgPT09ICdpbWFnZScgfHwgdHlwZSA9PT0gJ2ltYWdlLWNvbnRlbnQnKSAmJlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmdNZWRpYTogdmFsdWUuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJnTWVkaWFVcmw6IHZhbHVlLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT17WydpbWFnZScsICd2aWRlbyddfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsoYmdNZWRpYSk/IGJnTWVkaWE6IG51bGwgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17KHtvcGVufSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtiZ01lZGlhVXJsICYmIDxpbWcgc3JjPXtiZ01lZGlhVXJsfSBvbkNsaWNrPXtvcGVufSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCJhdXRvXCIgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0vPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IWJnTWVkaWFVcmwgJiYgPGRpdiBjbGFzc05hbWU9eydidXR0b24gYnV0dG9uLWxhcmdlJ30gb25DbGljaz17b3Blbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDaG9vc2UgQmFja2dyb3VuZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0KHR5cGUgPT09ICdzb2xpZCcgfHwgdHlwZSA9PT0gJ2ltYWdlLWNvbnRlbnQnKSAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxDb2xvclBhbGV0dGVcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdCYWNrZ3JvdW5kIENvbG9yJ1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyhiZ0NvbG9yKSA/IGJnQ29sb3IuY29sb3IgOiB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0KHZhbHVlLCB0ZXN0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2NvbG9yJywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmdDb2xvcjogdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQodHlwZSA9PT0gJ2ltYWdlLWNvbnRlbnQnKSAmJlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ09wYWNpdHknICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgb3BhY2l0eSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0bWluID0gXCIwXCJcblx0XHRcdFx0XHRcdFx0XHRtYXggPSBcIjFcIlxuXHRcdFx0XHRcdFx0XHRcdHN0ZXAgPSBcIjAuMVwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgd3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yX19pdGVtICR7dHlwZX0gJHthdHRyaWJ1dGVzLmNsYXNzTmFtZX1gfSBzdHlsZT17c3R5bGVzfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwid3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yX193cmFwXCI+XG5cdFx0XHRcdFx0eyF0eXBlICYmIDxUeXBlU2VsZWN0IFxuXHRcdFx0XHRcdFx0b25TZWxlY3QgPSB7KG5leHQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz59XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0KHR5cGUgPT09ICdpbWFnZScgfHwgdHlwZSA9PT0gJ2ltYWdlLWNvbnRlbnQnKSAmJlxuXHRcdFx0XHRcdFx0IWJnTWVkaWEgJiZcblx0XHRcdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZ01lZGlhOiB2YWx1ZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmdNZWRpYVVybDogdmFsdWUudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXtbJ2ltYWdlJ119XG5cdFx0XHRcdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0eyBcblx0XHRcdFx0XHRcdCh0eXBlID09PSAnc29saWQnIHx8ICh0eXBlID09PSAnaW1hZ2UtY29udGVudCcgJiYgYmdNZWRpYSkpICYmXG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3MgdGVtcGxhdGVMb2NrPXsgZmFsc2UgfSAvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZSgpIHtcblx0XHRyZXR1cm4gPGRpdj48SW5uZXJCbG9ja3MuQ29udGVudCAvPjwvZGl2Pjtcblx0fSxcbn07XG4iLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgUGFuZWxCb2R5LCBSYW5nZUNvbnRyb2wsIEcsIFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5uZXJCbG9ja3MsXG59IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcblxuLyoqXG4gKiBBbGxvd2VkIGJsb2NrcyBjb25zdGFudCBpcyBwYXNzZWQgdG8gSW5uZXJCbG9ja3MgcHJlY2lzZWx5IGFzIHNwZWNpZmllZCBoZXJlLlxuICogVGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSBzaG91bGQgbmV2ZXIgY2hhbmdlLlxuICogVGhlIGFycmF5IHNob3VsZCBjb250YWluIHRoZSBuYW1lIG9mIGVhY2ggYmxvY2sgdGhhdCBpcyBhbGxvd2VkLlxuICogSW4gY29sdW1ucyBibG9jaywgdGhlIG9ubHkgYmxvY2sgd2UgYWxsb3cgaXMgJ2RtcC9ncmlkLWl0ZW0nLlxuICpcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ1tdfVxuKi9cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gWydnZWNrby9ncmlkLWxheW91dC1pdGVtJ107XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2dlY2tvL2dyaWQtbGF5b3V0JztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdHcmlkJyApLFxuXG5cdGljb246IDxTVkcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPjxHPjxQYXRoIGQ9XCJNNCwxMyBMOCwxMyBMOCwxMCBMNCwxMCBMNCwxMyBaIE00LDE1IEw0LDE4IEw4LDE4IEw4LDE1IEw0LDE1IFogTTEwLDEzIEwxNCwxMyBMMTQsMTAgTDEwLDEwIEwxMCwxMyBaIE0xMCwxNSBMMTAsMTggTDE0LDE4IEwxNCwxNSBMMTAsMTUgWiBNMjAsMTMgTDIwLDEwIEwxNiwxMCBMMTYsMTMgTDIwLDEzIFogTTIwLDE1IEwxNiwxNSBMMTYsMTggTDIwLDE4IEwyMCwxNSBaIE00LDggTDgsOCBMOCw1IEw0LDUgTDQsOCBaIE0xMCw4IEwxNCw4IEwxNCw1IEwxMCw1IEwxMCw4IFogTTIwLDggTDIwLDUgTDE2LDUgTDE2LDggTDIwLDggWiBNNCwzIEwyMCwzIEMyMS4xMDQ1Njk1LDMgMjIsMy45NTEzOTQ5MSAyMiw1LjEyNSBMMjIsMTcuODc1IEMyMiwxOS4wNDg2MDUxIDIxLjEwNDU2OTUsMjAgMjAsMjAgTDQsMjAgQzIuODk1NDMwNSwyMCAyLDE5LjA0ODYwNTEgMiwxNy44NzUgTDIsNS4xMjUgQzIsMy45NTEzOTQ5MSAyLjg5NTQzMDUsMyA0LDMgWlwiIC8+PC9HPjwvU1ZHPixcblxuXHRjYXRlZ29yeTogJ2xheW91dCcsXG5cblx0YXR0cmlidXRlczoge1xuXHRcdGNvbHVtbnM6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogNSxcblx0XHR9LFxuXHRcdGdhcDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdH0sXG5cblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIENTUyBHcmlkIHRvIGJ1aWxkIGxheW91dHMgYW5kLCB0aGVuIGFkZCB3aGF0ZXZlciBjb250ZW50IGJsb2NrcyB5b3XigJlkIGxpa2UuJyApLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0YWxpZ246IFsgJ3dpZGUnLCAnZnVsbCcgXSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRkZXByZWNhdGVkOiBbXSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHRjb25zdCB7IGNvbHVtbnMsIGdhcCB9ID0gYXR0cmlidXRlcztcblx0XHRjb25zdCBzdHlsZXMgPSAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJyArIGNvbHVtbnMgKyAnLCBtaW5tYXgoMTAwcHgsIDFmcikpO1x0Z3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7IGdyaWQtZ2FwOicgKyBnYXAgKyAncmVtOyc7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0dyaWQgTGF5b3V0JyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjb2x1bW5zIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHRDb2x1bW5zICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbHVtbnM6IG5leHRDb2x1bW5zLFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDIgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyA4IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdHYXAnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGdhcCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdGdhcDogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAwIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMiB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvclwiIGRhdGEtcGFzc3RocnU9e3N0eWxlc30gZGF0YS1ncmlkPXtjb2x1bW5zfT5cblx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdHRlbXBsYXRlID0ge1xuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0WydnZWNrby9ncmlkLWxheW91dC1pdGVtJ10sXG5cdFx0XHRcdFx0XHRcdFx0WydnZWNrby9ncmlkLWxheW91dC1pdGVtJ11cblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGVtcGxhdGVMb2NrPXtmYWxzZX1cblx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fSxcblxuXHRzYXZlKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcbn07XG4iLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHtyZWdpc3RlckJsb2NrVHlwZX0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgKiBhcyBncmlkIGZyb20gJy4vZ3JpZC1sYXlvdXQnO1xuaW1wb3J0ICogYXMgZ3JpZEl0ZW0gZnJvbSAnLi9ncmlkLWxheW91dC1pdGVtJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoZ3JpZC5uYW1lLCBncmlkLnNldHRpbmdzKTtcbnJlZ2lzdGVyQmxvY2tUeXBlKGdyaWRJdGVtLm5hbWUsIGdyaWRJdGVtLnNldHRpbmdzKTtcblxuLyoqXG4gKiBUaGlzIG1ha2Ugc3VyZSB0aGUgZ3JpZCB3b3JrcyBpbiB0aGUgZWRpdG9yLlxuICovXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcblxuXHRmdW5jdGlvbiBsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkSXRlbSgpIHtcblx0XHQkKCcud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yX19pdGVtJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcblx0XHRcdFx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG5cdFx0XHRcdFx0Ly8gT24gY2hhbmdlIHVwZGF0ZSB0aGUgc3R5bGVzXG5cdFx0XHRcdFx0JCgnW2RhdGEtdHlwZT1cImdlY2tvL2dyaWQtbGF5b3V0LWl0ZW1cIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuZmluZChcIi53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX2l0ZW1cIikuYXR0cihcInN0eWxlXCIpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRcdG9ic2VydmVyLm9ic2VydmUodGhpcywge1xuXHRcdFx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdFx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkKCkge1xuXHRcdCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuXHRcdFx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcblx0XHRcdFx0XHQvLyBPbiBjaGFuZ2UgdXBkYXRlIHRoZSBzdHlsZXNcblx0XHRcdFx0XHQkKCcud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdHlsZXMgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXBhc3N0aHJ1XCIpO1xuXHRcdFx0XHRcdFx0Y29uc3QgZ3JpZCA9ICQodGhpcykuYXR0cihcImRhdGEtZ3JpZFwiKTtcblx0XHRcdFx0XHRcdCQodGhpcykuZmluZChcIi5lZGl0b3ItYmxvY2stbGlzdF9fbGF5b3V0XCIpLmF0dHIoXCJzdHlsZVwiLCBzdHlsZXMpO1xuXHRcdFx0XHRcdFx0Ly8gJCh0aGlzKS5maW5kKFwiLmJsb2NrLWxpc3QtYXBwZW5kZXJcIikuYXR0cihcInN0eWxlXCIsIFwiZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIFwiK2dyaWQrXCI7XCIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdNdXN0YXRpb24nLCBtdXRhdGlvbnMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRcdGF0dHJpYnV0ZUZpbHRlcjogWydkYXRhLXBhc3N0aHJ1JywgJ3N0eWxlJ10sXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVN0eWxlc0dyaWRJdGVtKCkge1xuXHRcdCQoJ1tkYXRhLXR5cGU9XCJnZWNrby9ncmlkLWxheW91dC1pdGVtXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBzdHlsZXMgPSAkKHRoaXMpLmZpbmQoXCIud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yX19pdGVtXCIpLmF0dHIoXCJzdHlsZVwiKTtcblx0XHRcdCQodGhpcykuYXR0cihcInN0eWxlXCIsIHN0eWxlcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVTdHlsZXNHcmlkKCkge1xuXHRcdCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuYXR0cihcImRhdGEtcGFzc3RocnVcIik7XG5cdFx0XHRjb25zdCBncmlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1ncmlkXCIpO1xuXHRcdFx0JCh0aGlzKS5maW5kKFwiLmVkaXRvci1ibG9jay1saXN0X19sYXlvdXRcIikuYXR0cihcInN0eWxlXCIsIHN0eWxlcyk7XG5cdFx0XHQvLyAkKHRoaXMpLmZpbmQoXCIuYmxvY2stbGlzdC1hcHBlbmRlclwiKS5hdHRyKFwic3R5bGVcIiwgXCJncmlkLWNvbHVtbi1lbmQ6IHNwYW4gXCIgKyBncmlkICsgXCI7XCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0JCgnYm9keScpLm9uKCdET01Ob2RlSW5zZXJ0ZWQnLCAnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcicsIGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InKSl7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnQWRkZWQgTmV3IERvbU5vZGUnLCBlKVxuXHRcdFx0dXBkYXRlU3R5bGVzR3JpZCgpO1xuXHRcdFx0dXBkYXRlU3R5bGVzR3JpZEl0ZW0oKTtcblx0XHRcdGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWQoKVxuXHRcdFx0bGlzdGVuRm9yU3R5bGVDaGFuZ2VzR3JpZEl0ZW0oKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcblx0XHR1cGRhdGVTdHlsZXNHcmlkKCk7XG5cdFx0dXBkYXRlU3R5bGVzR3JpZEl0ZW0oKTtcblx0XHRsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkKClcblx0XHRsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkSXRlbSgpO1xuXHR9KTtcbn0pOyIsImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbi8vIGltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHt2YWx1ZSwgb25TZWxlY3R9KXtcblx0Y29uc3Qgc2VsZWN0ZWQgPSAobmV4dCkgPT4ge1xuXHRcdHJldHVybiBvblNlbGVjdChuZXh0KTtcblx0fVxuXHRjb25zdCB0eXBlcyA9IFtcblx0XHR7IHNsdWc6ICdzb2xpZCcsIG5hbWU6ICdTb2xpZCcsIGljb246IDxzcGFuIGNsYXNzPVwiZGFzaGljb25zIGRhc2hpY29ucy1hZG1pbi1hcHBlYXJhbmNlXCI+PC9zcGFuPn0sXG5cdFx0eyBzbHVnOiAnaW1hZ2UnLCBuYW1lOiAnSW1hZ2UnLCBpY29uOiA8c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtZm9ybWF0LWltYWdlXCI+PC9zcGFuPn0sXG5cdFx0eyBzbHVnOiAnaW1hZ2UtY29udGVudCcsIG5hbWU6ICdJbWFnZSB3aXRoIENvbnRlbnQnLCBpY29uOiA8c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tYXBwZWFyYW5jZVwiPjwvc3Bhbj59LFxuXHRdXG5cdHJldHVybihcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LXR5cGUtc2VsZWN0XCI+XG5cdFx0XHQ8cD5DaG9vc2UgdGhlIGJsb2NrIGxheW91dCB0eXBlLjwvcD5cblx0XHRcdHt0eXBlcy5tYXAoKHR5cGUpID0+IHtcblx0XHRcdFx0bGV0IGlzU2VsZWN0ZWQgPSBcIlwiO1xuXHRcdFx0XHRpZih0eXBlLnNsdWcgPT09IHZhbHVlKXtcblx0XHRcdFx0XHRpc1NlbGVjdGVkID0gXCJ3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC10eXBlLXNlbGVjdF9faXRlbS0tc2VsZWN0ZWRcIlxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2B3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC10eXBlLXNlbGVjdF9faXRlbSAke2lzU2VsZWN0ZWR9YH0gb25DbGljaz17KCk9PiBzZWxlY3RlZCh0eXBlLnNsdWcpfT57dHlwZS5pY29ufXt0eXBlLm5hbWV9PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5ibG9ja3M7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuY29tcG9uZW50czsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5lZGl0b3I7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuZWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5pMThuOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==