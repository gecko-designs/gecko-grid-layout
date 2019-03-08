<?php
/**
 * Plugin Name: Gecko Grid Layout
 * Plugin URI:  https://github.com/gecko-designs/gecko-grid-layout
 * Description: Grid Layout block uses CSS grid to create grid layouts in gutenberg.
 * Version: 1.1.2
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
		wp_register_script(
			"gecko-grid-layout-image",
			plugins_url("/dist/public.bundle.js", __FILE__),
			[],
			filemtime( plugin_dir_path(__FILE__) . "dist/public.bundle.js" )
		);
		// If Post has block then enqueue script
		add_action( 'the_post', function($post){
			if(has_block( 'gecko/grid-layout', $post )){
				wp_enqueue_style('gecko-grid-layout');
			}
			if(has_block( 'gecko/grid-layout-image', $post )){
				wp_enqueue_script('gecko-grid-layout-image');
			}
		} );
		// Initialize custom blocks
		// Dynamically import blocks in blocks folder
		register_block_type(
			"gecko/grid-layout", 
			[
				// "render_callback" => [$this, "grid_callback"],
				// "style" => "gecko-grid-layout",
				"script" => "",
				"editor_style" => "gecko-grid-layout-editor",
				"editor_script" => "gecko-grid-layout-editor",
			]);
		register_block_type("gecko/grid-layout-item", ["render_callback" => [$this, "grid_item_callback"]]);
		register_block_type("gecko/grid-layout-image", ["render_callback" => [$this, "grid_image_callback"]]);
		register_block_type("gecko/grid-layout-basic", ["render_callback" => [$this, "grid_basic_callback"]]);
	}

	/**
	 * If the block is dynamic you would render the template here.
	 */
	// public function grid_callback( $attributes, $content ) {
	// 	// Defaults and attributes
	// 	// Setting to false unless needed because all styles do not need to be inlined
	// 	$defaults = array(
	// 		'gap' => false,
	// 		'className' => false,
	// 	);
	// 	$atts = wp_parse_args( $attributes, $defaults );

	// 	$styles = array();
	// 	$styles['grid-gap'] = ($atts['gap'])?$atts['gap'].'rem':false;
	// 	$styleString = '';
	// 	foreach ($styles as $key => $value) {
	// 		if($value) $styleString .= $key.':'.$value.';';
	// 	}
		
	// 	// Because we are adding inline styles to an already existing div in the $content we search for it first
	// 	$classNames = ["gecko-grid-layout"];
	// 	if($atts['className']) $classNames[] = $atts['className'];
	// 	// And then we return the $content with the styles appended at the position of the class.
	// 	return sprintf('<div class="%s" style="%s">%s</div>', implode(' ', $classNames), $styleString, $content);
	// }

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
			'className' => false,
		);
		// Add a filter to hook into the default args
		$defaults = apply_filters( 'gecko/grid-layout-item/defaults', $defaults, $attributes );
		$atts = wp_parse_args( $attributes, $defaults );

		$classNames = array('wp-block-gecko-grid-layout__item gecko-grid-layout-item');
		if($atts['className']) $classNames[] = $atts['className'];
		if($atts['type']) $classNames[] = 'wp-block-wp-block-gecko-grid-layout__item--'.$atts['type'];
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
		
		$content = ($atts['type'] === 'image') ? '' : '<div class="gecko-grid-layout-item__content">'.$content.'</div>' ;

		return sprintf('<div class="%s" style="%s">%s</div>', implode(' ', $classNames), $styleString, $content);
	}

	/**
	 * If the block is dynamic you would render the template here.
	 */
	public function grid_image_callback( $attributes, $content ) {
		// Defaults and attributes
		// Setting to false unless needed because all styles do not need to be inlined
		$defaults = array(
			'w' => false,
			'h' => false,
			'imgId' => false,
			'imgUrl' => false,
			'minHeight' => false,
			'className' => false,
		);
		// Add a filter to hook into the default args
		$defaults = apply_filters( 'gecko/grid-layout-image/defaults', $defaults, $attributes );
		$atts = wp_parse_args( $attributes, $defaults );

		$classNames = array('wp-block-gecko-grid-layout__item');
		$classNames[] = 'gecko-grid-layout-image';
		if($atts['className']) $classNames[] = $atts['className'];
		// Add a filter to hook into classNames
		$classNames = apply_filters( 'gecko/grid-layout-image/class', $classNames, $attributes );

		$styles = array();
		$styles['grid-column-end'] = ($atts['w'])?'span '.$atts['w']:false;
		$styles['grid-row-end'] = ($atts['h'])?'span '.$atts['h']:false;
		$styles['min-height'] = ($atts['minHeight'])?$atts['minHeight'].'px':false;
		// Add a filter to hook into the inine styles $args = ($styles, $atts)
		$styles = apply_filters( 'gecko/grid-layout-image/style', $styles, $attributes );

		$styleString = '';
		foreach ($styles as $key => $value) {
			if($value) $styleString .= $key.':'.$value.';';
		}
		// Image Template
		$preview = wp_get_attachment_image_url($atts['imgId'], 'thumbnail');
		$src = wp_get_attachment_image_url($atts['imgId'], 'large');
		$srcset = wp_get_attachment_image_srcset( $atts['imgId'], array( 400, 200 ) );
		$alt = get_post_meta( $atts['imgId'], '_wp_attachment_image_alt', true );
		$title = get_the_title($atts['imgId']);
		$output = sprintf('<img class="gecko-grid-layout-image__image lazy" src="%s" data-src="%s" data-srcset="%s" alt="%s" title="%s"/>', $preview, $src, $srcset, $alt, $title);
		$image = apply_filters( 'gecko/grid-layout-image/output/image', $output, $preview, $src, $srcset, $alt, $title, $attributes);
		// Caption Template
		$output = sprintf('<figcaption class="gecko-grid-layout-image__caption">%s</figcaption>', $content);
		$caption = apply_filters( 'gecko/grid-layout-image/output/caption', $output, $content, $attributes );
		// Output
		$style = '';
		foreach ($styles as $key => $value) {
			if($value) $style .= $key.':'.$value.';';
		}
		$class = implode(' ', $classNames);
		$template = '<figure class="%s" style="%s">%s%s</figure>';
		$output = sprintf($template, $class, $style, $image, $caption);
		return apply_filters( 'gecko/grid-layout-image/output', $output, $class, $style, $image, $caption, $attributes );
	}

	/**
	 * If the block is dynamic you would render the template here.
	 */
	public function grid_basic_callback( $attributes, $content ) {
		// Defaults and attributes
		// Setting to false unless needed because all styles do not need to be inlined
		$defaults = array(
			'w' => false,
			'h' => false,
			'className' => false,
		);
		// Add a filter to hook into the default args
		$defaults = apply_filters( 'gecko/grid-layout-basic/defaults', $defaults, $attributes );
		$atts = wp_parse_args( $attributes, $defaults );

		$classNames = array('wp-block-gecko-grid-layout__item');
		$classNames[] = 'gecko-grid-layout-item';
		if($atts['className']) $classNames[] = $atts['className'];
		// Add a filter to hook into classNames
		$classNames = apply_filters( 'gecko/grid-layout-basic/class', $classNames, $attributes );

		$styles = array();
		$styles['grid-column-end'] = ($atts['w'])?'span '.$atts['w']:false;
		$styles['grid-row-end'] = ($atts['h'])?'span '.$atts['h']:false;
		// Add a filter to hook into the inine styles $args = ($styles, $atts)
		$styles = apply_filters( 'gecko/grid-layout-basic/style', $styles, $attributes );

		$style = '';
		foreach ($styles as $key => $value) {
			if($value) $style .= $key.':'.$value.';';
		}
		$class = implode(' ', $classNames);
		$template = '<div class="%s" style="%s">%s</div>';
		$output = sprintf($template, $class, $style, $content);
		return apply_filters( 'gecko/grid-layout-basic/output', $output, $class, $style, $content, $attributes );
	}
}