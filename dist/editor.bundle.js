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
        className = _ref.className,
        insertBlocksAfter = _ref.insertBlocksAfter;
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
      max: 12
    }), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Width'),
      value: w,
      onChange: function onChange(next) {
        setAttributes({
          w: next
        });
      },
      min: 1,
      max: 12
    })), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Background Settings"
    }, (type === 'image' || type === 'image-content') && React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
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
    }), React.createElement("hr", null), (type === 'solid' || type === 'image-content') && React.createElement("div", null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      label: "Background Color",
      value: bgColor ? bgColor.color : undefined,
      onChange: function onChange(value) {
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
  deprecated: [],
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQtbGF5b3V0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQtbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmJsb2Nrc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmVkaXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5lbGVtZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmkxOG5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIl0sIm5hbWVzIjpbIm5hbWUiLCJzZXR0aW5ncyIsInRpdGxlIiwiX18iLCJwYXJlbnQiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsInN1cHBvcnRzIiwiY2xhc3NOYW1lIiwiaW5zZXJ0ZXIiLCJyZXVzYWJsZSIsImh0bWwiLCJhdHRyaWJ1dGVzIiwidHlwZSIsImRlZmF1bHQiLCJ1bmRlZmluZWQiLCJvcGFjaXR5IiwiaCIsInciLCJiZ01lZGlhIiwiYmdNZWRpYVVybCIsImJnQ29sb3IiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImluc2VydEJsb2Nrc0FmdGVyIiwiY29uc29sZSIsImxvZyIsImFyZ3VtZW50cyIsInN0eWxlcyIsImdyaWRDb2x1bW5FbmQiLCJncmlkUm93RW5kIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwibmV4dCIsInZhbHVlIiwiaWQiLCJ1cmwiLCJvcGVuIiwiY3Vyc29yIiwiY29sb3IiLCJzYXZlIiwiQUxMT1dFRF9CTE9DS1MiLCJjb2x1bW5zIiwiZ2FwIiwiYWxpZ24iLCJkZXByZWNhdGVkIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJncmlkIiwiZ3JpZEl0ZW0iLCJqUXVlcnkiLCIkIiwibGlzdGVuRm9yU3R5bGVDaGFuZ2VzR3JpZEl0ZW0iLCJlYWNoIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZm9yRWFjaCIsIm11dGF0aW9uIiwiZmluZCIsImF0dHIiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImF0dHJpYnV0ZUZpbHRlciIsImxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWQiLCJ1cGRhdGVTdHlsZXNHcmlkSXRlbSIsInVwZGF0ZVN0eWxlc0dyaWQiLCJvbiIsImUiLCJ3aW5kb3ciLCJsb2FkIiwib25TZWxlY3QiLCJzZWxlY3RlZCIsInR5cGVzIiwic2x1ZyIsIm1hcCIsImlzU2VsZWN0ZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFB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V0FDQztBQUFLLGVBQVMseURBQWtEQSxVQUFsRCxDQUFkO0FBQThFLGFBQU8sRUFBRTtBQUFBLGVBQUtKLFFBQVEsQ0FBQzFELElBQUksQ0FBQzRELElBQU4sQ0FBYjtBQUFBO0FBQXZGLE9BQWtINUQsSUFBSSxDQUFDVCxJQUF2SCxFQUE2SFMsSUFBSSxDQUFDZCxJQUFsSSxDQUREO0FBR0EsR0FSQSxDQUZGLENBREQ7QUFjQSxDOzs7Ozs7Ozs7OztBQ3pCRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSx1QiIsImZpbGUiOiJlZGl0b3IuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvd3AtY29udGVudC9wbHVnaW5zL2dlY2tvLWdyaWQtbGF5b3V0L2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFR5cGVTZWxlY3QgZnJvbSAnLi90eXBlLXNlbGVjdCc7XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHtcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFBhdGgsXG5cdFNWR1xufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0Q29sb3JQYWxldHRlLFxufSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2dlY2tvL2dyaWQtbGF5b3V0LWl0ZW0nO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0l0ZW0nICksXG5cblx0cGFyZW50OiBbJ2dlY2tvL2dyaWQtbGF5b3V0J10sXG5cblx0aWNvbjogPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+PFBhdGggZD1cIk0xMS45OSAxOC41NGwtNy4zNy01LjczTDMgMTQuMDdsOSA3IDktNy0xLjYzLTEuMjd6TTEyIDE2bDcuMzYtNS43M0wyMSA5bC05LTctOSA3IDEuNjMgMS4yN0wxMiAxNnptMC0xMS40N0wxNy43NCA5IDEyIDEzLjQ3IDYuMjYgOSAxMiA0LjUzelwiIC8+PC9TVkc+LFxuXG5cdGRlc2NyaXB0aW9uOiBfXyggJ0Egc2luZ2xlIGdyaWQgaXRlbSB3aXRoaW4gYSBncmlkIGJsb2NrLicgKSxcblxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cblx0c3VwcG9ydHM6IHtcblx0XHRjbGFzc05hbWU6IHRydWUsXG5cdFx0aW5zZXJ0ZXI6IHRydWUsXG5cdFx0cmV1c2FibGU6IGZhbHNlLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0eXBlOntcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogdW5kZWZpbmVkLCAvL3NvbGlkIC8vIGltYWdlIC8vaW1hZ2UtY29udGVudFxuXHRcdH0sXG5cdFx0b3BhY2l0eToge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdFx0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdFx0dzoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdFx0YmdNZWRpYToge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRiZ01lZGlhVXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJnQ29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgaW5zZXJ0QmxvY2tzQWZ0ZXIgfSkge1xuXHRcdGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG5cdFx0Y29uc3QgeyBvcGFjaXR5LCBoLCB3LCB0eXBlLCBiZ01lZGlhLCBiZ01lZGlhVXJsLCBiZ0NvbG9yIH0gPSBhdHRyaWJ1dGVzO1xuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdCctLWJhY2tncm91bmQnOiBiZ0NvbG9yLFxuXHRcdFx0Jy0tb3BhY2l0eSc6IG9wYWNpdHksXG5cdFx0XHRncmlkQ29sdW1uRW5kOiAnc3BhbiAnKyB3LFxuXHRcdFx0Z3JpZFJvd0VuZDogJ3NwYW4gJyArIGgsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IsXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGJnTWVkaWFVcmwgKyAnKScsXG5cdFx0fTtcblx0XHRpZih0eXBlID09PSBcImltYWdlXCIpe1xuXHRcdFx0ZGVsZXRlKHN0eWxlcy5iYWNrZ3JvdW5kQ29sb3IpO1xuXHRcdH1cblx0XHRpZiAodHlwZSA9PT0gXCJzb2xpZFwiKSB7XG5cdFx0XHRkZWxldGUoc3R5bGVzLmJhY2tncm91bmRJbWFnZSk7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPVwiVHlwZVwiPlxuXHRcdFx0XHRcdFx0PFR5cGVTZWxlY3QgXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0ID0geyhuZXh0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0eXBlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5ICB0aXRsZT1cIlNpemUgU2V0dGluZ3NcIj5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0hlaWdodCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgaCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdGg6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDEyIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdXaWR0aCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgdyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdHc6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDEyIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIkJhY2tncm91bmQgU2V0dGluZ3NcIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0KHR5cGUgPT09ICdpbWFnZScgfHwgdHlwZSA9PT0gJ2ltYWdlLWNvbnRlbnQnKSAmJlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmdNZWRpYTogdmFsdWUuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJnTWVkaWFVcmw6IHZhbHVlLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT17WydpbWFnZScsICd2aWRlbyddfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsoYmdNZWRpYSk/IGJnTWVkaWE6IG51bGwgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17KHtvcGVufSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtiZ01lZGlhVXJsICYmIDxpbWcgc3JjPXtiZ01lZGlhVXJsfSBvbkNsaWNrPXtvcGVufSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCJhdXRvXCIgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0vPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IWJnTWVkaWFVcmwgJiYgPGRpdiBjbGFzc05hbWU9eydidXR0b24gYnV0dG9uLWxhcmdlJ30gb25DbGljaz17b3Blbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDaG9vc2UgQmFja2dyb3VuZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0KHR5cGUgPT09ICdzb2xpZCcgfHwgdHlwZSA9PT0gJ2ltYWdlLWNvbnRlbnQnKSAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxDb2xvclBhbGV0dGVcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdCYWNrZ3JvdW5kIENvbG9yJ1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyhiZ0NvbG9yKSA/IGJnQ29sb3IuY29sb3IgOiB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiZ0NvbG9yOiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdCh0eXBlID09PSAnaW1hZ2UtY29udGVudCcpICYmXG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnT3BhY2l0eScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBvcGFjaXR5IH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRtaW4gPSBcIjBcIlxuXHRcdFx0XHRcdFx0XHRcdG1heCA9IFwiMVwiXG5cdFx0XHRcdFx0XHRcdFx0c3RlcCA9IFwiMC4xXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2B3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX2l0ZW0gJHt0eXBlfSAke2F0dHJpYnV0ZXMuY2xhc3NOYW1lfWB9IHN0eWxlPXtzdHlsZXN9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJ3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX3dyYXBcIj5cblx0XHRcdFx0XHR7IXR5cGUgJiYgPFR5cGVTZWxlY3QgXG5cdFx0XHRcdFx0XHRvblNlbGVjdCA9IHsobmV4dCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPn1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQodHlwZSA9PT0gJ2ltYWdlJyB8fCB0eXBlID09PSAnaW1hZ2UtY29udGVudCcpICYmXG5cdFx0XHRcdFx0XHQhYmdNZWRpYSAmJlxuXHRcdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJnTWVkaWE6IHZhbHVlLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZ01lZGlhVXJsOiB2YWx1ZS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0KHR5cGUgPT09ICdzb2xpZCcgfHwgKHR5cGUgPT09ICdpbWFnZS1jb250ZW50JyAmJiBiZ01lZGlhKSkgJiZcblx0XHRcdFx0XHRcdDxJbm5lckJsb2NrcyB0ZW1wbGF0ZUxvY2s9eyBmYWxzZSB9IC8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fSxcblxuXHRzYXZlKCkge1xuXHRcdHJldHVybiA8ZGl2PjxJbm5lckJsb2Nrcy5Db250ZW50IC8+PC9kaXY+O1xuXHR9LFxufTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBQYW5lbEJvZHksIFJhbmdlQ29udHJvbCwgRywgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRJbm5lckJsb2Nrcyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InO1xuXG4vKipcbiAqIEFsbG93ZWQgYmxvY2tzIGNvbnN0YW50IGlzIHBhc3NlZCB0byBJbm5lckJsb2NrcyBwcmVjaXNlbHkgYXMgc3BlY2lmaWVkIGhlcmUuXG4gKiBUaGUgY29udGVudHMgb2YgdGhlIGFycmF5IHNob3VsZCBuZXZlciBjaGFuZ2UuXG4gKiBUaGUgYXJyYXkgc2hvdWxkIGNvbnRhaW4gdGhlIG5hbWUgb2YgZWFjaCBibG9jayB0aGF0IGlzIGFsbG93ZWQuXG4gKiBJbiBjb2x1bW5zIGJsb2NrLCB0aGUgb25seSBibG9jayB3ZSBhbGxvdyBpcyAnZG1wL2dyaWQtaXRlbScuXG4gKlxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nW119XG4qL1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbJ2dlY2tvL2dyaWQtbGF5b3V0LWl0ZW0nXTtcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZ2Vja28vZ3JpZC1sYXlvdXQnO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0dyaWQnICksXG5cblx0aWNvbjogPFNWRyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+PEc+PFBhdGggZD1cIk00LDEzIEw4LDEzIEw4LDEwIEw0LDEwIEw0LDEzIFogTTQsMTUgTDQsMTggTDgsMTggTDgsMTUgTDQsMTUgWiBNMTAsMTMgTDE0LDEzIEwxNCwxMCBMMTAsMTAgTDEwLDEzIFogTTEwLDE1IEwxMCwxOCBMMTQsMTggTDE0LDE1IEwxMCwxNSBaIE0yMCwxMyBMMjAsMTAgTDE2LDEwIEwxNiwxMyBMMjAsMTMgWiBNMjAsMTUgTDE2LDE1IEwxNiwxOCBMMjAsMTggTDIwLDE1IFogTTQsOCBMOCw4IEw4LDUgTDQsNSBMNCw4IFogTTEwLDggTDE0LDggTDE0LDUgTDEwLDUgTDEwLDggWiBNMjAsOCBMMjAsNSBMMTYsNSBMMTYsOCBMMjAsOCBaIE00LDMgTDIwLDMgQzIxLjEwNDU2OTUsMyAyMiwzLjk1MTM5NDkxIDIyLDUuMTI1IEwyMiwxNy44NzUgQzIyLDE5LjA0ODYwNTEgMjEuMTA0NTY5NSwyMCAyMCwyMCBMNCwyMCBDMi44OTU0MzA1LDIwIDIsMTkuMDQ4NjA1MSAyLDE3Ljg3NSBMMiw1LjEyNSBDMiwzLjk1MTM5NDkxIDIuODk1NDMwNSwzIDQsMyBaXCIgLz48L0c+PC9TVkc+LFxuXG5cdGNhdGVnb3J5OiAnbGF5b3V0JyxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Y29sdW1uczoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxMixcblx0XHR9LFxuXHRcdGdhcDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdH0sXG5cblx0ZGVzY3JpcHRpb246IF9fKCAnVXNlIENTUyBHcmlkIHRvIGJ1aWxkIGxheW91dHMgYW5kLCB0aGVuIGFkZCB3aGF0ZXZlciBjb250ZW50IGJsb2NrcyB5b3XigJlkIGxpa2UuJyApLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0YWxpZ246IFsgJ3dpZGUnLCAnZnVsbCcgXSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRkZXByZWNhdGVkOiBbXSxcblxuXHRlZGl0KCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0XHRjb25zdCB7IGNvbHVtbnMsIGdhcCB9ID0gYXR0cmlidXRlcztcblx0XHQvLyBjb25zdCBzdHlsZXMgPSAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJyArIGNvbHVtbnMgKyAnLCBtaW5tYXgoMTAwcHgsIDFmcikpO1x0Z3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7IGdyaWQtZ2FwOicgKyBnYXAgKyAncmVtOyc7XG5cdFx0Y29uc3Qgc3R5bGVzID0gJ2dyaWQtZ2FwOicgKyBnYXAgKyAncmVtOyc7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdHsvKiA8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdHcmlkIExheW91dCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY29sdW1ucyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0Q29sdW1ucyApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2x1bW5zOiBuZXh0Q29sdW1ucyxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAyIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMTIgfVxuXHRcdFx0XHRcdFx0Lz4gKi99XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdHYXAnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGdhcCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdGdhcDogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAwIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMiB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvclwiIGRhdGEtcGFzc3RocnU9e3N0eWxlc30gZGF0YS1ncmlkPXtjb2x1bW5zfT5cblx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdHRlbXBsYXRlID0ge1xuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0WydnZWNrby9ncmlkLWxheW91dC1pdGVtJ10sXG5cdFx0XHRcdFx0XHRcdFx0WydnZWNrby9ncmlkLWxheW91dC1pdGVtJ11cblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGVtcGxhdGVMb2NrPXtmYWxzZX1cblx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fSxcblxuXHRzYXZlKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcbn07XG4iLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHtyZWdpc3RlckJsb2NrVHlwZX0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgKiBhcyBncmlkIGZyb20gJy4vZ3JpZC1sYXlvdXQnO1xuaW1wb3J0ICogYXMgZ3JpZEl0ZW0gZnJvbSAnLi9ncmlkLWxheW91dC1pdGVtJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoZ3JpZC5uYW1lLCBncmlkLnNldHRpbmdzKTtcbnJlZ2lzdGVyQmxvY2tUeXBlKGdyaWRJdGVtLm5hbWUsIGdyaWRJdGVtLnNldHRpbmdzKTtcblxuLyoqXG4gKiBUaGlzIG1ha2Ugc3VyZSB0aGUgZ3JpZCB3b3JrcyBpbiB0aGUgZWRpdG9yLlxuICovXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcblxuXHRmdW5jdGlvbiBsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkSXRlbSgpIHtcblx0XHQkKCcud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yX19pdGVtJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcblx0XHRcdFx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG5cdFx0XHRcdFx0Ly8gT24gY2hhbmdlIHVwZGF0ZSB0aGUgc3R5bGVzXG5cdFx0XHRcdFx0JCgnW2RhdGEtdHlwZT1cImdlY2tvL2dyaWQtbGF5b3V0LWl0ZW1cIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuZmluZChcIi53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX2l0ZW1cIikuYXR0cihcInN0eWxlXCIpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRcdG9ic2VydmVyLm9ic2VydmUodGhpcywge1xuXHRcdFx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdFx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkKCkge1xuXHRcdCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuXHRcdFx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcblx0XHRcdFx0XHQvLyBPbiBjaGFuZ2UgdXBkYXRlIHRoZSBzdHlsZXNcblx0XHRcdFx0XHQkKCcud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdHlsZXMgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXBhc3N0aHJ1XCIpO1xuXHRcdFx0XHRcdFx0Y29uc3QgZ3JpZCA9ICQodGhpcykuYXR0cihcImRhdGEtZ3JpZFwiKTtcblx0XHRcdFx0XHRcdCQodGhpcykuZmluZChcIi5lZGl0b3ItYmxvY2stbGlzdF9fbGF5b3V0XCIpLmF0dHIoXCJzdHlsZVwiLCBzdHlsZXMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRcdGF0dHJpYnV0ZUZpbHRlcjogWydkYXRhLXBhc3N0aHJ1JywgJ3N0eWxlJ10sXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVN0eWxlc0dyaWRJdGVtKCkge1xuXHRcdCQoJ1tkYXRhLXR5cGU9XCJnZWNrby9ncmlkLWxheW91dC1pdGVtXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBzdHlsZXMgPSAkKHRoaXMpLmZpbmQoXCIud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yX19pdGVtXCIpLmF0dHIoXCJzdHlsZVwiKTtcblx0XHRcdCQodGhpcykuYXR0cihcInN0eWxlXCIsIHN0eWxlcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVTdHlsZXNHcmlkKCkge1xuXHRcdCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuYXR0cihcImRhdGEtcGFzc3RocnVcIik7XG5cdFx0XHRjb25zdCBncmlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1ncmlkXCIpO1xuXHRcdFx0JCh0aGlzKS5maW5kKFwiLmVkaXRvci1ibG9jay1saXN0X19sYXlvdXRcIikuYXR0cihcInN0eWxlXCIsIHN0eWxlcyk7XG5cdFx0fSk7XG5cdH1cblxuXHQkKCdib2R5Jykub24oJ0RPTU5vZGVJbnNlcnRlZCcsICcud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yJywgZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoJCgnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcicpKXtcblx0XHRcdHVwZGF0ZVN0eWxlc0dyaWQoKTtcblx0XHRcdHVwZGF0ZVN0eWxlc0dyaWRJdGVtKCk7XG5cdFx0XHRsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkKClcblx0XHRcdGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWRJdGVtKCk7XG5cdFx0fVxuXHR9KTtcblxuXHQkKHdpbmRvdykubG9hZChmdW5jdGlvbiAoKSB7XG5cdFx0dXBkYXRlU3R5bGVzR3JpZCgpO1xuXHRcdHVwZGF0ZVN0eWxlc0dyaWRJdGVtKCk7XG5cdFx0bGlzdGVuRm9yU3R5bGVDaGFuZ2VzR3JpZCgpXG5cdFx0bGlzdGVuRm9yU3R5bGVDaGFuZ2VzR3JpZEl0ZW0oKTtcblx0fSk7XG59KTsiLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG4vLyBpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7dmFsdWUsIG9uU2VsZWN0fSl7XG5cdGNvbnN0IHNlbGVjdGVkID0gKG5leHQpID0+IHtcblx0XHRyZXR1cm4gb25TZWxlY3QobmV4dCk7XG5cdH1cblx0Y29uc3QgdHlwZXMgPSBbXG5cdFx0eyBzbHVnOiAnc29saWQnLCBuYW1lOiAnU29saWQnLCBpY29uOiA8c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tYXBwZWFyYW5jZVwiPjwvc3Bhbj59LFxuXHRcdHsgc2x1ZzogJ2ltYWdlJywgbmFtZTogJ0ltYWdlJywgaWNvbjogPHNwYW4gY2xhc3M9XCJkYXNoaWNvbnMgZGFzaGljb25zLWZvcm1hdC1pbWFnZVwiPjwvc3Bhbj59LFxuXHRcdHsgc2x1ZzogJ2ltYWdlLWNvbnRlbnQnLCBuYW1lOiAnSW1hZ2Ugd2l0aCBDb250ZW50JywgaWNvbjogPHNwYW4gY2xhc3M9XCJkYXNoaWNvbnMgZGFzaGljb25zLWFkbWluLWFwcGVhcmFuY2VcIj48L3NwYW4+fSxcblx0XVxuXHRyZXR1cm4oXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC10eXBlLXNlbGVjdFwiPlxuXHRcdFx0PHA+Q2hvb3NlIHRoZSBibG9jayBsYXlvdXQgdHlwZS48L3A+XG5cdFx0XHR7dHlwZXMubWFwKCh0eXBlKSA9PiB7XG5cdFx0XHRcdGxldCBpc1NlbGVjdGVkID0gXCJcIjtcblx0XHRcdFx0aWYodHlwZS5zbHVnID09PSB2YWx1ZSl7XG5cdFx0XHRcdFx0aXNTZWxlY3RlZCA9IFwid3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtdHlwZS1zZWxlY3RfX2l0ZW0tLXNlbGVjdGVkXCJcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgd3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtdHlwZS1zZWxlY3RfX2l0ZW0gJHtpc1NlbGVjdGVkfWB9IG9uQ2xpY2s9eygpPT4gc2VsZWN0ZWQodHlwZS5zbHVnKX0+e3R5cGUuaWNvbn17dHlwZS5uYW1lfTwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9kaXY+XG5cdCk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuYmxvY2tzOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmNvbXBvbmVudHM7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuZWRpdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuaTE4bjsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyJdLCJzb3VyY2VSb290IjoiIn0=