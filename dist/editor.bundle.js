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

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/memize/index.js":
/*!**************************************!*\
  !*** ./node_modules/memize/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function memize( fn, options ) {
	var size = 0,
		maxSize, head, tail;

	if ( options && options.maxSize ) {
		maxSize = options.maxSize;
	}

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				head.prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args )
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === maxSize ) {
			tail = tail.prev;
			tail.next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	return memoized;
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
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Grid Item'),
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
    }))); // return <InnerBlocks templateLock={ false } />;
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/**
 * External dependencies
 */



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
/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param {number} columns Number of columns.
 *
 * @return {Object[]} Columns layout configuration.
 */

var getColumnsTemplate = memize__WEBPACK_IMPORTED_MODULE_2___default()(function (columns) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["times"])(columns, function () {
    return ['gecko/grid-layout-item'];
  });
});
var name = 'gecko/grid-layout';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Grid'),
  icon: React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["G"], null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M4,4H20a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4ZM4 6V18H8V6Zm6 0V18h4V6Zm6 0V18h4V6Z"
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
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add a block that displays content in multiple columns, then add whatever content blocks you’d like.'),
  supports: {
    align: ['wide', 'full'],
    html: false
  },
  deprecated: [],
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className;
    var columns = attributes.columns,
        gap = attributes.gap;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className);
    var styles = 'grid-template-columns: repeat(' + columns + ', minmax(100px, 1fr));	grid-auto-rows: minmax(100px, auto); grid-gap:' + gap + 'rem;';
    return React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Grid'),
      value: columns,
      onChange: function onChange(nextColumns) {
        setAttributes({
          columns: nextColumns
        });
      },
      min: 2,
      max: 8
    }), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Gap'),
      value: gap,
      onChange: function onChange(next) {
        setAttributes({
          gap: next
        });
      },
      min: 0,
      max: 2
    }))), React.createElement("div", {
      className: "wp-block-gecko-grid-layout-editor",
      "data-passthru": styles,
      "data-grid": columns
    }, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"], {
      template: getColumnsTemplate(2),
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS
    })));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return React.createElement("div", null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"].Content, null));
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
    updateStylesGrid();
    updateStylesGridItem();
    console.log('HEY ADDED NODE');
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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = lodash;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21lbWl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC1sYXlvdXQtaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5ibG9ja3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5lZGl0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuZWxlbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5pMThuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6WyJuYW1lIiwic2V0dGluZ3MiLCJ0aXRsZSIsIl9fIiwicGFyZW50IiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJzdXBwb3J0cyIsImluc2VydGVyIiwicmV1c2FibGUiLCJodG1sIiwiYXR0cmlidXRlcyIsImgiLCJ0eXBlIiwiZGVmYXVsdCIsInciLCJiZ01lZGlhIiwiYmdNZWRpYVVybCIsImJnQ29sb3IiLCJlZGl0Iiwic2V0QXR0cmlidXRlcyIsImNsYXNzTmFtZSIsInN0eWxlcyIsImdyaWRDb2x1bW5FbmQiLCJncmlkUm93RW5kIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwibmV4dCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImlkIiwidXJsIiwib3BlbiIsImNvbG9yIiwidW5kZWZpbmVkIiwic2F2ZSIsIkFMTE9XRURfQkxPQ0tTIiwiZ2V0Q29sdW1uc1RlbXBsYXRlIiwibWVtb2l6ZSIsImNvbHVtbnMiLCJ0aW1lcyIsImdhcCIsImFsaWduIiwiZGVwcmVjYXRlZCIsImNsYXNzZXMiLCJjbGFzc25hbWVzIiwibmV4dENvbHVtbnMiLCJyZWdpc3RlckJsb2NrVHlwZSIsImdyaWQiLCJncmlkSXRlbSIsImpRdWVyeSIsIiQiLCJsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkSXRlbSIsImVhY2giLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJmb3JFYWNoIiwibXV0YXRpb24iLCJmaW5kIiwiYXR0ciIsIm9ic2VydmUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCJsaXN0ZW5Gb3JTdHlsZUNoYW5nZXNHcmlkIiwidXBkYXRlU3R5bGVzR3JpZEl0ZW0iLCJ1cGRhdGVTdHlsZXNHcmlkIiwib24iLCJlIiwid2luZG93IiwibG9hZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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QVk7QUFDMUJKLG9CQUFnQjtBQUNoQkQsd0JBQW9CO0FBQ3BCRCw2QkFBeUI7QUFDekJYLGlDQUE2QjtBQUM3QixHQUxEO0FBTUEsQ0FyRUssQ0FBTixDOzs7Ozs7Ozs7OztBQ2pCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSx3Qjs7Ozs7Ozs7Ozs7QUNBQSx1QiIsImZpbGUiOiJlZGl0b3IuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvd3AtY29udGVudC9wbHVnaW5zL2dlY2tvLWdyaWQtbGF5b3V0L2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZW1pemUoIGZuLCBvcHRpb25zICkge1xuXHR2YXIgc2l6ZSA9IDAsXG5cdFx0bWF4U2l6ZSwgaGVhZCwgdGFpbDtcblxuXHRpZiAoIG9wdGlvbnMgJiYgb3B0aW9ucy5tYXhTaXplICkge1xuXHRcdG1heFNpemUgPSBvcHRpb25zLm1heFNpemU7XG5cdH1cblxuXHRmdW5jdGlvbiBtZW1vaXplZCggLyogLi4uYXJncyAqLyApIHtcblx0XHR2YXIgbm9kZSA9IGhlYWQsXG5cdFx0XHRsZW4gPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdFx0YXJncywgaTtcblxuXHRcdHNlYXJjaENhY2hlOiB3aGlsZSAoIG5vZGUgKSB7XG5cdFx0XHQvLyBQZXJmb3JtIGEgc2hhbGxvdyBlcXVhbGl0eSB0ZXN0IHRvIGNvbmZpcm0gdGhhdCB3aGV0aGVyIHRoZSBub2RlXG5cdFx0XHQvLyB1bmRlciB0ZXN0IGlzIGEgY2FuZGlkYXRlIGZvciB0aGUgYXJndW1lbnRzIHBhc3NlZC4gVHdvIGFycmF5c1xuXHRcdFx0Ly8gYXJlIHNoYWxsb3dseSBlcXVhbCBpZiB0aGVpciBsZW5ndGggbWF0Y2hlcyBhbmQgZWFjaCBlbnRyeSBpc1xuXHRcdFx0Ly8gc3RyaWN0bHkgZXF1YWwgYmV0d2VlbiB0aGUgdHdvIHNldHMuIEF2b2lkIGFic3RyYWN0aW5nIHRvIGFcblx0XHRcdC8vIGZ1bmN0aW9uIHdoaWNoIGNvdWxkIGluY3VyIGFuIGFyZ3VtZW50cyBsZWFraW5nIGRlb3B0aW1pemF0aW9uLlxuXG5cdFx0XHQvLyBDaGVjayB3aGV0aGVyIG5vZGUgYXJndW1lbnRzIG1hdGNoIGFyZ3VtZW50cyBsZW5ndGhcblx0XHRcdGlmICggbm9kZS5hcmdzLmxlbmd0aCAhPT0gYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUubmV4dDtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENoZWNrIHdoZXRoZXIgbm9kZSBhcmd1bWVudHMgbWF0Y2ggYXJndW1lbnRzIHZhbHVlc1xuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0aWYgKCBub2RlLmFyZ3NbIGkgXSAhPT0gYXJndW1lbnRzWyBpIF0gKSB7XG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUubmV4dDtcblx0XHRcdFx0XHRjb250aW51ZSBzZWFyY2hDYWNoZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBdCB0aGlzIHBvaW50IHdlIGNhbiBhc3N1bWUgd2UndmUgZm91bmQgYSBtYXRjaFxuXG5cdFx0XHQvLyBTdXJmYWNlIG1hdGNoZWQgbm9kZSB0byBoZWFkIGlmIG5vdCBhbHJlYWR5XG5cdFx0XHRpZiAoIG5vZGUgIT09IGhlYWQgKSB7XG5cdFx0XHRcdC8vIEFzIHRhaWwsIHNoaWZ0IHRvIHByZXZpb3VzLiBNdXN0IG9ubHkgc2hpZnQgaWYgbm90IGFsc29cblx0XHRcdFx0Ly8gaGVhZCwgc2luY2UgaWYgYm90aCBoZWFkIGFuZCB0YWlsLCB0aGVyZSBpcyBubyBwcmV2aW91cy5cblx0XHRcdFx0aWYgKCBub2RlID09PSB0YWlsICkge1xuXHRcdFx0XHRcdHRhaWwgPSBub2RlLnByZXY7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZGp1c3Qgc2libGluZ3MgdG8gcG9pbnQgdG8gZWFjaCBvdGhlci4gSWYgbm9kZSB3YXMgdGFpbCxcblx0XHRcdFx0Ly8gdGhpcyBhbHNvIGhhbmRsZXMgbmV3IHRhaWwncyBlbXB0eSBgbmV4dGAgYXNzaWdubWVudC5cblx0XHRcdFx0bm9kZS5wcmV2Lm5leHQgPSBub2RlLm5leHQ7XG5cdFx0XHRcdGlmICggbm9kZS5uZXh0ICkge1xuXHRcdFx0XHRcdG5vZGUubmV4dC5wcmV2ID0gbm9kZS5wcmV2O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bm9kZS5uZXh0ID0gaGVhZDtcblx0XHRcdFx0bm9kZS5wcmV2ID0gbnVsbDtcblx0XHRcdFx0aGVhZC5wcmV2ID0gbm9kZTtcblx0XHRcdFx0aGVhZCA9IG5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldHVybiBpbW1lZGlhdGVseVxuXHRcdFx0cmV0dXJuIG5vZGUudmFsO1xuXHRcdH1cblxuXHRcdC8vIE5vIGNhY2hlZCB2YWx1ZSBmb3VuZC4gQ29udGludWUgdG8gaW5zZXJ0aW9uIHBoYXNlOlxuXG5cdFx0Ly8gQ3JlYXRlIGEgY29weSBvZiBhcmd1bWVudHMgKGF2b2lkIGxlYWtpbmcgZGVvcHRpbWl6YXRpb24pXG5cdFx0YXJncyA9IG5ldyBBcnJheSggbGVuICk7XG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdGFyZ3NbIGkgXSA9IGFyZ3VtZW50c1sgaSBdO1xuXHRcdH1cblxuXHRcdG5vZGUgPSB7XG5cdFx0XHRhcmdzOiBhcmdzLFxuXG5cdFx0XHQvLyBHZW5lcmF0ZSB0aGUgcmVzdWx0IGZyb20gb3JpZ2luYWwgZnVuY3Rpb25cblx0XHRcdHZhbDogZm4uYXBwbHkoIG51bGwsIGFyZ3MgKVxuXHRcdH07XG5cblx0XHQvLyBEb24ndCBuZWVkIHRvIGNoZWNrIHdoZXRoZXIgbm9kZSBpcyBhbHJlYWR5IGhlYWQsIHNpbmNlIGl0IHdvdWxkXG5cdFx0Ly8gaGF2ZSBiZWVuIHJldHVybmVkIGFib3ZlIGFscmVhZHkgaWYgaXQgd2FzXG5cblx0XHQvLyBTaGlmdCBleGlzdGluZyBoZWFkIGRvd24gbGlzdFxuXHRcdGlmICggaGVhZCApIHtcblx0XHRcdGhlYWQucHJldiA9IG5vZGU7XG5cdFx0XHRub2RlLm5leHQgPSBoZWFkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBJZiBubyBoZWFkLCBmb2xsb3dzIHRoYXQgdGhlcmUncyBubyB0YWlsIChhdCBpbml0aWFsIG9yIHJlc2V0KVxuXHRcdFx0dGFpbCA9IG5vZGU7XG5cdFx0fVxuXG5cdFx0Ly8gVHJpbSB0YWlsIGlmIHdlJ3JlIHJlYWNoZWQgbWF4IHNpemUgYW5kIGFyZSBwZW5kaW5nIGNhY2hlIGluc2VydGlvblxuXHRcdGlmICggc2l6ZSA9PT0gbWF4U2l6ZSApIHtcblx0XHRcdHRhaWwgPSB0YWlsLnByZXY7XG5cdFx0XHR0YWlsLm5leHQgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzaXplKys7XG5cdFx0fVxuXG5cdFx0aGVhZCA9IG5vZGU7XG5cblx0XHRyZXR1cm4gbm9kZS52YWw7XG5cdH1cblxuXHRtZW1vaXplZC5jbGVhciA9IGZ1bmN0aW9uKCkge1xuXHRcdGhlYWQgPSBudWxsO1xuXHRcdHRhaWwgPSBudWxsO1xuXHRcdHNpemUgPSAwO1xuXHR9O1xuXG5cdGlmICggcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JyApIHtcblx0XHQvLyBDYWNoZSBpcyBub3QgZXhwb3NlZCBpbiB0aGUgcHVibGljIEFQSSwgYnV0IHVzZWQgaW4gdGVzdHMgdG8gZW5zdXJlXG5cdFx0Ly8gZXhwZWN0ZWQgbGlzdCBwcm9ncmVzc2lvblxuXHRcdG1lbW9pemVkLmdldENhY2hlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gWyBoZWFkLCB0YWlsLCBzaXplIF07XG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBtZW1vaXplZDtcbn07XG4iLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHtcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFBhdGgsXG5cdFNWR1xufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxuXHRNZWRpYVVwbG9hZCxcblx0Q29sb3JQYWxldHRlLFxufSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2dlY2tvL2dyaWQtbGF5b3V0LWl0ZW0nO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0dyaWQgSXRlbScgKSxcblxuXHRwYXJlbnQ6IFsnZ2Vja28vZ3JpZC1sYXlvdXQnXSxcblxuXHRpY29uOiA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PFBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgLz48UGF0aCBkPVwiTTExLjk5IDE4LjU0bC03LjM3LTUuNzNMMyAxNC4wN2w5IDcgOS03LTEuNjMtMS4yN3pNMTIgMTZsNy4zNi01LjczTDIxIDlsLTktNy05IDcgMS42MyAxLjI3TDEyIDE2em0wLTExLjQ3TDE3Ljc0IDkgMTIgMTMuNDcgNi4yNiA5IDEyIDQuNTN6XCIgLz48L1NWRz4sXG5cblx0ZGVzY3JpcHRpb246IF9fKCAnQSBzaW5nbGUgZ3JpZCBpdGVtIHdpdGhpbiBhIGdyaWQgYmxvY2suJyApLFxuXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblxuXHRzdXBwb3J0czoge1xuXHRcdGluc2VydGVyOiB0cnVlLFxuXHRcdHJldXNhYmxlOiBmYWxzZSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdFx0dzoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdFx0YmdNZWRpYToge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRiZ01lZGlhVXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGJnQ29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdH0sXG5cblx0ZWRpdCh7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9KSB7XG5cdFx0Y29uc3QgeyBoLCB3LCBiZ01lZGlhLCBiZ01lZGlhVXJsLCBiZ0NvbG9yIH0gPSBhdHRyaWJ1dGVzO1xuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdGdyaWRDb2x1bW5FbmQ6ICdzcGFuICcrIHcsXG5cdFx0XHRncmlkUm93RW5kOiAnc3BhbiAnICsgaCxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogYmdDb2xvcixcblx0XHRcdGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgYmdNZWRpYVVybCArICcpJyxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgIHRpdGxlPVwiU2l6ZSBTZXR0aW5nc1wiPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSGVpZ2h0JyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBoIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHQgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0aDogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgNyB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnV2lkdGgnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHcgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3OiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdFx0XHRtYXg9eyA3IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIkJhY2tncm91bmQgU2V0dGluZ3NcIj5cblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRvblNlbGVjdD17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YmdNZWRpYTogdmFsdWUuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRiZ01lZGlhVXJsOiB2YWx1ZS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHR5cGU9e1snaW1hZ2UnLCAndmlkZW8nXX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyhiZ01lZGlhKT8gYmdNZWRpYTogbnVsbCB9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17KHtvcGVufSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybihcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsnYnV0dG9uIGJ1dHRvbi1sYXJnZSd9IG9uQ2xpY2s9e29wZW59PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDaG9vc2UgQmFja2dyb3VuZFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxDb2xvclBhbGV0dGVcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nQmFja2dyb3VuZCBDb2xvcidcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17KGJnQ29sb3IpID8gYmdDb2xvci5jb2xvciA6IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdCh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiZ0NvbG9yOiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxwPjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX2l0ZW1cIiBzdHlsZT17c3R5bGVzfT5cblx0XHRcdFx0XHQ8SW5uZXJCbG9ja3MgdGVtcGxhdGVMb2NrPXsgZmFsc2UgfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0XHQvLyByZXR1cm4gPElubmVyQmxvY2tzIHRlbXBsYXRlTG9jaz17IGZhbHNlIH0gLz47XG5cdH0sXG5cblx0c2F2ZSgpIHtcblx0XHRyZXR1cm4gPGRpdj48SW5uZXJCbG9ja3MuQ29udGVudCAvPjwvZGl2Pjtcblx0fSxcbn07XG4iLCIvKipcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyB0aW1lcyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbWl6ZSc7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBQYW5lbEJvZHksIFJhbmdlQ29udHJvbCwgRywgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRJbm5lckJsb2Nrcyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InO1xuXG4vKipcbiAqIEFsbG93ZWQgYmxvY2tzIGNvbnN0YW50IGlzIHBhc3NlZCB0byBJbm5lckJsb2NrcyBwcmVjaXNlbHkgYXMgc3BlY2lmaWVkIGhlcmUuXG4gKiBUaGUgY29udGVudHMgb2YgdGhlIGFycmF5IHNob3VsZCBuZXZlciBjaGFuZ2UuXG4gKiBUaGUgYXJyYXkgc2hvdWxkIGNvbnRhaW4gdGhlIG5hbWUgb2YgZWFjaCBibG9jayB0aGF0IGlzIGFsbG93ZWQuXG4gKiBJbiBjb2x1bW5zIGJsb2NrLCB0aGUgb25seSBibG9jayB3ZSBhbGxvdyBpcyAnZG1wL2dyaWQtaXRlbScuXG4gKlxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nW119XG4qL1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbJ2dlY2tvL2dyaWQtbGF5b3V0LWl0ZW0nXTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXlvdXRzIGNvbmZpZ3VyYXRpb24gZm9yIGEgZ2l2ZW4gbnVtYmVyIG9mIGNvbHVtbnMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnMgTnVtYmVyIG9mIGNvbHVtbnMuXG4gKlxuICogQHJldHVybiB7T2JqZWN0W119IENvbHVtbnMgbGF5b3V0IGNvbmZpZ3VyYXRpb24uXG4gKi9cbmNvbnN0IGdldENvbHVtbnNUZW1wbGF0ZSA9IG1lbW9pemUoICggY29sdW1ucyApID0+IHtcblx0cmV0dXJuIHRpbWVzKCBjb2x1bW5zLCAoKSA9PiBbICdnZWNrby9ncmlkLWxheW91dC1pdGVtJyBdICk7XG59ICk7XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2dlY2tvL2dyaWQtbGF5b3V0JztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdHcmlkJyApLFxuXG5cdGljb246IDxTVkcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPjxHPjxQYXRoIGQ9XCJNNCw0SDIwYTIsMiwwLDAsMSwyLDJWMThhMiwyLDAsMCwxLTIsMkg0YTIsMiwwLDAsMS0yLTJWNkEyLDIsMCwwLDEsNCw0Wk00IDZWMThIOFY2Wm02IDBWMThoNFY2Wm02IDBWMThoNFY2WlwiIC8+PC9HPjwvU1ZHPixcblxuXHRjYXRlZ29yeTogJ2xheW91dCcsXG5cblx0YXR0cmlidXRlczoge1xuXHRcdGNvbHVtbnM6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogNSxcblx0XHR9LFxuXHRcdGdhcDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxLFxuXHRcdH0sXG5cdH0sXG5cblx0ZGVzY3JpcHRpb246IF9fKCAnQWRkIGEgYmxvY2sgdGhhdCBkaXNwbGF5cyBjb250ZW50IGluIG11bHRpcGxlIGNvbHVtbnMsIHRoZW4gYWRkIHdoYXRldmVyIGNvbnRlbnQgYmxvY2tzIHlvdeKAmWQgbGlrZS4nICksXG5cblx0c3VwcG9ydHM6IHtcblx0XHRhbGlnbjogWyAnd2lkZScsICdmdWxsJyBdLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdGRlcHJlY2F0ZWQ6IFtdLFxuXG5cdGVkaXQoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgY2xhc3NOYW1lIH0gKSB7XG5cdFx0Y29uc3QgeyBjb2x1bW5zLCBnYXAgfSA9IGF0dHJpYnV0ZXM7XG5cdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoIGNsYXNzTmFtZSApO1xuXHRcdGNvbnN0IHN0eWxlcyA9ICdncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgnICsgY29sdW1ucyArICcsIG1pbm1heCgxMDBweCwgMWZyKSk7XHRncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTsgZ3JpZC1nYXA6JyArIGdhcCArICdyZW07JztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnR3JpZCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY29sdW1ucyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0Q29sdW1ucyApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2x1bW5zOiBuZXh0Q29sdW1ucyxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRtaW49eyAyIH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgOCB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnR2FwJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBnYXAgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRnYXA6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMCB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDIgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JcIiBkYXRhLXBhc3N0aHJ1PXtzdHlsZXN9IGRhdGEtZ3JpZD17Y29sdW1uc30+XG5cdFx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZT17IGdldENvbHVtbnNUZW1wbGF0ZSgyKSB9XG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZUxvY2s9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxufTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge3JlZ2lzdGVyQmxvY2tUeXBlfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCAqIGFzIGdyaWQgZnJvbSAnLi9ncmlkLWxheW91dCc7XG5pbXBvcnQgKiBhcyBncmlkSXRlbSBmcm9tICcuL2dyaWQtbGF5b3V0LWl0ZW0nO1xuXG5yZWdpc3RlckJsb2NrVHlwZShncmlkLm5hbWUsIGdyaWQuc2V0dGluZ3MpO1xucmVnaXN0ZXJCbG9ja1R5cGUoZ3JpZEl0ZW0ubmFtZSwgZ3JpZEl0ZW0uc2V0dGluZ3MpO1xuXG4vKipcbiAqIFRoaXMgbWFrZSBzdXJlIHRoZSBncmlkIHdvcmtzIGluIHRoZSBlZGl0b3IuXG4gKi9cbmpRdWVyeShmdW5jdGlvbiAoJCkge1xuXG5cdGZ1bmN0aW9uIGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWRJdGVtKCkge1xuXHRcdCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX2l0ZW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuXHRcdFx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcblx0XHRcdFx0XHQvLyBPbiBjaGFuZ2UgdXBkYXRlIHRoZSBzdHlsZXNcblx0XHRcdFx0XHQkKCdbZGF0YS10eXBlPVwiZ2Vja28vZ3JpZC1sYXlvdXQtaXRlbVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3R5bGVzID0gJCh0aGlzKS5maW5kKFwiLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcl9faXRlbVwiKS5hdHRyKFwic3R5bGVcIik7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJzdHlsZVwiLCBzdHlsZXMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRcdGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWQoKSB7XG5cdFx0JCgnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcicpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG5cdFx0XHRcdG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuXHRcdFx0XHRcdC8vIE9uIGNoYW5nZSB1cGRhdGUgdGhlIHN0eWxlc1xuXHRcdFx0XHRcdCQoJy53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3InKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuYXR0cihcImRhdGEtcGFzc3RocnVcIik7XG5cdFx0XHRcdFx0XHRjb25zdCBncmlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1ncmlkXCIpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5maW5kKFwiLmVkaXRvci1ibG9jay1saXN0X19sYXlvdXRcIikuYXR0cihcInN0eWxlXCIsIHN0eWxlcyk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmZpbmQoXCIuYmxvY2stbGlzdC1hcHBlbmRlclwiKS5hdHRyKFwic3R5bGVcIiwgXCJncmlkLWNvbHVtbi1lbmQ6IHNwYW4gXCIrZ3JpZCtcIjtcIik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ011c3RhdGlvbicsIG11dGF0aW9ucyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKHRoaXMsIHtcblx0XHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdFx0YXR0cmlidXRlRmlsdGVyOiBbJ2RhdGEtcGFzc3RocnUnLCAnc3R5bGUnXSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlU3R5bGVzR3JpZEl0ZW0oKSB7XG5cdFx0JCgnW2RhdGEtdHlwZT1cImdlY2tvL2dyaWQtbGF5b3V0LWl0ZW1cIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHN0eWxlcyA9ICQodGhpcykuZmluZChcIi53cC1ibG9jay1nZWNrby1ncmlkLWxheW91dC1lZGl0b3JfX2l0ZW1cIikuYXR0cihcInN0eWxlXCIpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVN0eWxlc0dyaWQoKSB7XG5cdFx0JCgnLndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LWVkaXRvcicpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgc3R5bGVzID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1wYXNzdGhydVwiKTtcblx0XHRcdGNvbnN0IGdyaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWdyaWRcIik7XG5cdFx0XHQkKHRoaXMpLmZpbmQoXCIuZWRpdG9yLWJsb2NrLWxpc3RfX2xheW91dFwiKS5hdHRyKFwic3R5bGVcIiwgc3R5bGVzKTtcblx0XHRcdCQodGhpcykuZmluZChcIi5ibG9jay1saXN0LWFwcGVuZGVyXCIpLmF0dHIoXCJzdHlsZVwiLCBcImdyaWQtY29sdW1uLWVuZDogc3BhbiBcIiArIGdyaWQgKyBcIjtcIik7XG5cdFx0fSk7XG5cdH1cblxuXHQkKCdib2R5Jykub24oJ0RPTU5vZGVJbnNlcnRlZCcsICcud3AtYmxvY2stZ2Vja28tZ3JpZC1sYXlvdXQtZWRpdG9yJywgZnVuY3Rpb24gKGUpIHtcblx0XHR1cGRhdGVTdHlsZXNHcmlkKCk7XG5cdFx0dXBkYXRlU3R5bGVzR3JpZEl0ZW0oKTtcblx0XHRjb25zb2xlLmxvZygnSEVZIEFEREVEIE5PREUnKTtcblx0fSk7XG5cblx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xuXHRcdHVwZGF0ZVN0eWxlc0dyaWQoKTtcblx0XHR1cGRhdGVTdHlsZXNHcmlkSXRlbSgpO1xuXHRcdGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWQoKVxuXHRcdGxpc3RlbkZvclN0eWxlQ2hhbmdlc0dyaWRJdGVtKCk7XG5cdH0pO1xufSk7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuYmxvY2tzOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmNvbXBvbmVudHM7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuZWRpdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuaTE4bjsiLCJtb2R1bGUuZXhwb3J0cyA9IGxvZGFzaDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyJdLCJzb3VyY2VSb290IjoiIn0=