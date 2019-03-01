<?php
/**
 * Plugin Name: Gecko Grid Layout
 * Plugin URI:  https://github.com/gecko-designs/gecko-grid-layout
 * Description: Grid Layout block uses CSS grid to create grid layouts in gutenberg.
 * Version: 1.0.3
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
		// If Post has block then enqueue script
		add_action( 'the_post', function($post){
			if(has_block( 'gecko/grid-layout', $post )){
				wp_enqueue_style('gecko-grid-layout');
			}
		} );
		// Initialize custom blocks
		// Dynamically import blocks in blocks folder
		register_block_type(
			"gecko/grid-layout", 
			[
				"render_callback" => [$this, "grid_callback"],
				// "style" => "gecko-grid-layout",
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
		// Defaults and attributes
		// Setting to false unless needed because all styles do not need to be inlined
		$defaults = array(
			'gap' => false,
		);
		$atts = wp_parse_args( $attributes, $defaults );

		$styles = array();
		$styles['grid-gap'] = ($atts['gap'])?$atts['gap'].'rem':false;
		$styleString = '';
		foreach ($styles as $key => $value) {
			if($value) $styleString .= $key.':'.$value.';';
		}
		
		// Because we are adding inline styles to an already existing div in the $content we search for it first
		$class = '"wp-block-gecko-grid-layout"';
		$index = strpos( $content, $class);
		if($index === false) {
			return  $content;
		}
		
		$styles = ' style="'.$styleString.'"';
		// And then we return the $content with the styles appended at the position of the class.
		return substr_replace($content, $class.$styles, $index, strlen($class));
	}

	/**
	 * If the block is dynamic you would render the template here.
	 */
	public function grid_item_callback( $attributes, $content ) {
		// Defaults and attributes
		// Setting to false unless needed because all styles do not need to be inlined
		$defaults = array(
			'type' => false,
			'w' => false,
			'h' => false,
			'opacity' => false,
			'bgColor' => false,
			'bgColorSlug' => false,
			'bgColorBrightness' => false,
			'bgMedia' => false,
			'bgMediaUrl' => false,
			'minHeight' => false,
		);
		// Add a filter to hook into the default args
		$defaults = apply_filters( 'gecko/grid-layout-item/defaults', $defaults, $attributes );
		$atts = wp_parse_args( $attributes, $defaults );

		$classNames = array('wp-block-gecko-grid-layout__item');
		if($atts['type']) $classNames[] = 'wp-block-gecko-grid-layout__item--'.$atts['type'];
		if($atts['bgColorSlug']) $classNames[] =  'has-'.$atts['bgColorSlug'].'-background-color';
		$lightOrDark = ($atts['bgColorBrightness'] < 130) ? "dark" : "light";
		if($atts['bgColorSlug']) $classNames[] = 'is-'.$lightOrDark.'-background';
		// Add a filter to hook into classNames
		$classNames = apply_filters( 'gecko/grid-layout-item/class', $classNames, $attributes );

		$styles = array();
		$styles['--opacity'] = $atts['opacity'];
		$styles['--background'] = $atts['bgColor'];
		$styles['background-color'] = $atts['bgColor'];
		$styles['background-image'] = ($atts['bgMediaUrl'])?'url('.$atts['bgMediaUrl'].')': false;
		$styles['grid-column-end'] = ($atts['w'])?'span '.$atts['w']:false;
		$styles['grid-row-end'] = ($atts['h'])?'span '.$atts['h']:false;
		$styles['min-height'] = ($atts['minHeight'])?$atts['minHeight'].'px':false;

		if($atts['type'] === 'solid') unset($styles['background-image']);
		if($atts['type'] !== 'image-content') unset($styles['--opacity']);
		// if($atts['type'] !== 'image') unset($styles['min-height']);

		// Add a filter to hook into the inine styles $args = ($styles, $atts)
		$styles = apply_filters( 'gecko/grid-layout-item/style', $styles, $attributes );

		$styleString = '';
		foreach ($styles as $key => $value) {
			if($value) $styleString .= $key.':'.$value.';';
		}
		
		$content = ($atts['type'] === 'image') ? '' : $content ;

		return sprintf('<div class="%s" style="%s">%s</div>', implode(' ', $classNames), $styleString, $content);
	}
}