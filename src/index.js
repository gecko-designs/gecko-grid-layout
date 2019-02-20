/**
 * WordPress dependencies
 */
import {registerBlockType} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as grid from './grid-layout';
import * as gridItem from './grid-layout-item';

registerBlockType(grid.name, grid.settings);
registerBlockType(gridItem.name, gridItem.settings);

/**
 * This make sure the grid works in the editor.
 */
jQuery(function ($) {

	function listenForStyleChangesGridItem() {
		$('.wp-block-gecko-grid-layout-editor__item').each(function () {
			const observer = new MutationObserver(function (mutations) {
				mutations.forEach(function (mutation) {
					// On change update the styles
					$('[data-type="gecko/grid-layout-item"]').each(function () {
						const styles = $(this).find(".wp-block-gecko-grid-layout-editor__item").attr("style");
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
			const observer = new MutationObserver(function (mutations) {
				mutations.forEach(function (mutation) {
					// On change update the styles
					$('.wp-block-gecko-grid-layout-editor').each(function () {
						const styles = $(this).attr("data-passthru");
						const grid = $(this).attr("data-grid");
						$(this).find(".editor-block-list__layout").attr("style", styles);
						$(this).find(".block-list-appender").attr("style", "grid-column-end: span "+grid+";");
					});
					console.log('Mustation', mutations);
				});
			});
			observer.observe(this, {
				attributes: true,
				attributeFilter: ['data-passthru', 'style'],
			});
		});
	}

	function updateStylesGridItem() {
		$('[data-type="gecko/grid-layout-item"]').each(function () {
			const styles = $(this).find(".wp-block-gecko-grid-layout-editor__item").attr("style");
			$(this).attr("style", styles);
		});
	}

	function updateStylesGrid() {
		$('.wp-block-gecko-grid-layout-editor').each(function () {
			const styles = $(this).attr("data-passthru");
			const grid = $(this).attr("data-grid");
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
		listenForStyleChangesGrid()
		listenForStyleChangesGridItem();
	});
});