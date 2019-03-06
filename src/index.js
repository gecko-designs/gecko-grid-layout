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
			const observer = new MutationObserver(function (mutations) {
				mutations.forEach(function (mutation) {
					// On change update the styles
					$('[data-type="gecko/grid-layout-basic"]').each(function () {
						const styles = $(this).find(".gecko-grid-layout-editor-styles").attr("style");
						$(this).attr("style", styles);
					});
					$('[data-type="gecko/grid-layout-image"]').each(function () {
						const styles = $(this).find(".gecko-grid-layout-editor-styles").attr("style");
						$(this).attr("style", styles);
					});
					$('[data-type="gecko/grid-layout-item"]').each(function () {
						const styles = $(this).find(".gecko-grid-layout-editor-styles").attr("style");
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
			const observer = new MutationObserver(function (mutations) {
				mutations.forEach(function (mutation) {
					// On change update the styles
					$('.wp-block-gecko-grid-layout-editor').each(function () {
						const styles = $(this).attr("data-passthru");
						const grid = $(this).attr("data-grid");
						$(this).find(".editor-block-list__layout").attr("style", styles);
					});
				});
			});
			observer.disconnect();
			observer.observe(this, {
				attributes: true,
				attributeFilter: ['data-passthru', 'style'],
			});
		});
	}

	function updateStylesGridItem() {
		$('[data-type="gecko/grid-layout-image"]').each(function () {
			const styles = $(this).find(".gecko-grid-layout-editor-styles").attr("style");
			$(this).attr("style", styles);
		});
		$('[data-type="gecko/grid-layout-basic"]').each(function () {
			const styles = $(this).find(".gecko-grid-layout-editor-styles").attr("style");
			$(this).attr("style", styles);
		});
		$('[data-type="gecko/grid-layout-item"]').each(function () {
			const styles = $(this).find(".gecko-grid-layout-editor-styles").attr("style");
			$(this).attr("style", styles);
		});
	}

	function updateStylesGrid() {
		$('.wp-block-gecko-grid-layout-editor').each(function () {
			const styles = $(this).attr("data-passthru");
			const grid = $(this).attr("data-grid");
			$(this).find(".editor-block-list__layout").attr("style", styles);
		});
	}

	$('body').on('DOMNodeInserted', '.wp-block-gecko-grid-layout-editor', function (e) {
		if ($('.wp-block-gecko-grid-layout-editor')){
			updateStylesGrid();
			updateStylesGridItem();
			listenForStyleChangesGrid()
			listenForStyleChangesGridItem();
		}
	});

	$(window).load(function () {
		updateStylesGrid();
		updateStylesGridItem();
		listenForStyleChangesGrid()
		listenForStyleChangesGridItem();
	});
});