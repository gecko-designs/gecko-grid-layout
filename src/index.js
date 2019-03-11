/**
 * WordPress dependencies
 */
import {registerBlockType} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as grid from './grid-layout';
import * as gridItem from './grid-layout-item';
import * as gridItemImage from './grid-layout-image';
import * as gridItemBasic from './grid-layout-basic';

registerBlockType(grid.name, grid.settings);
registerBlockType(gridItemBasic.name, gridItemBasic.settings);
registerBlockType(gridItemImage.name, gridItemImage.settings);
registerBlockType(gridItem.name, gridItem.settings);

/**
 * This make sure the grid works in the editor.
 */
document.addEventListener("DOMContentLoaded", function () {
	// Create the observer
	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			// On style mutation update blocks styles.
			const block = mutation.target.closest('[data-type^="gecko/grid-layout-"]');
			if(!block) return;
			const styles = mutation.target.getAttribute('style');
			block.style = styles;
		});
	});

	// Add style elements to the observer
	const addStyleElementsToObserver = () => {
		const styleElements = document.querySelectorAll('.gecko-grid-layout-editor-styles');
		if (!styleElements.length > 0) return;
		for (const element of styleElements) {
			observer.observe(element, {
				attributes: true,
				attributeFilter: ['style']
			});
		}
	}

	// Add the styles to grid layout items for editor.
	function applyAllGridItemStyles() {
		const blocks = document.querySelectorAll('[data-type^="gecko/grid-layout-"]');
		if(!blocks.length > 0) return;
		for (const block of blocks) {
			applyGridItemStyle(block);
		}
	}

	function applyGridItemStyle(block){
		const styles = block.querySelector('.gecko-grid-layout-editor-styles').getAttribute('style');
		block.style = styles;
	}

	// Add the styles to grid layout items for editor.
	function newGridInserted(e) {
		if (typeof e.target.querySelectorAll !== 'function') return;
		const blocks = e.target.querySelectorAll('[data-type^="gecko/grid-layout-"]');
		if (!blocks.length > 0) return;
		for (const block of blocks) {
			applyGridItemStyle(block);
		}
	}

	applyAllGridItemStyles();
	document.addEventListener("DOMNodeInserted", addStyleElementsToObserver);
	document.addEventListener("DOMNodeInserted", newGridInserted);
});
