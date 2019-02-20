<?php
/**
 * Plugin Name: Gecko Grid Layout
 * Description: Grid Layout block uses CSS grid to create grid layouts in gutenberg.
 * Version: 1.0.0
 * Author: Gecko Designs
 * Author URI: https://geckodesigns.com
 * Text Domain: gecko-grid-layout
 * License: GPLv2 or later
 */

defined("ABSPATH") || exit;

add_action( "plugins_loaded", function(){
	new GeckoGridLayout();
} );


class GeckoGridLayout {
	public function __construct() {
		add_action("init", [$this, "register_block_type"]);
	}

	public function register_block_type() {
		wp_register_script(
			"gecko-grid-layout-editor",
			plugins_url("/dist/editor.bundle.js", __FILE__),
			[
				'jquery',
				'wp-blocks',
				'wp-editor',
				'wp-element',
				'wp-i18n'
			],
			filemtime( plugin_dir_path(__FILE__) . "dist/editor.bundle.js" )
		);
		wp_register_style(
			"gecko-grid-layout-editor",
			plugins_url("/dist/editor-styles.css", __FILE__),
			[],
			filemtime( plugin_dir_path(__FILE__) . "dist/editor-styles.css" )
		);
		wp_register_style(
			"gecko-grid-layout",
			plugins_url("/dist/style.css", __FILE__),
			[],
			filemtime( plugin_dir_path(__FILE__) . "dist/style.css" )
		);
		// Initialize custom blocks
		// Dynamically import blocks in blocks folder
		register_block_type(
			"gecko/grid-layout", 
			[
				"render_callback" => [$this, "grid_callback"],
				"style" => "gecko-grid-layout",
				"script" => "",
				"editor_style" => "gecko-grid-layout-editor",
				"editor_script" => "gecko-grid-layout-editor",
			]);
		register_block_type("gecko/grid-layout-item", ["render_callback" => [$this, "grid_item_callback"]]);
	}

	/**
	 * If the block is dynamic you would render the template here.
	 */
	public function grid_callback( $attributes, $content ) {
		// Sort of a hack at the moment.
		$columns = (isset($attributes['columns'])) ? "grid-template-columns: repeat(".$attributes['columns'].", minmax(100px, 1fr));" : "";
		$rows = (isset($attributes['columns'])) ? "grid-auto-rows: minmax(calc(100vw/".$attributes['columns']."), auto);" : "";
		$gap = (isset($attributes['gap'])) ? "grid-gap:".$attributes['gap']."rem;" : "";
		$styles = 'style="'.$columns.$rows.'"';
		$class = '"wp-block-gecko-grid-layout"';
		$index = strpos( $content, $class);
		if($index === false) {
			return  $content;
		}
		return substr_replace($content, $class.$styles, $index, strlen($class));
	}

	/**
	 * If the block is dynamic you would render the template here.
	 */
	public function grid_item_callback( $attributes, $content ) {
		// $image = wp_get_attachment_image_url($attributes[bgMedia],'full');
		$bgMedia = (isset($attributes['bgMediaUrl'])) ? "background-image: url(".$attributes['bgMediaUrl'].");": "";
		$bgColor = (isset($attributes['bgColor'])) ? "background-color: ".$attributes['bgColor'].";" : "";
		$spanColumn = (isset($attributes['w'])) ? "grid-column-end: span ".$attributes['w'].";" : "";
		$spanRow = (isset($attributes['h'])) ? "grid-row-end: span ".$attributes['h'].";" : "";
		$styles = $bgMedia.$bgColor.$spanColumn.$spanRow;
		$class = 'wp-block-gecko-grid-layout__item';
		// $encoded = json_encode($attributes, JSON_HEX_APOS|JSON_HEX_QUOT);
		return sprintf('<div class="%s" style="%s">%s</div>',
		$class, $styles, $content);
	}
}