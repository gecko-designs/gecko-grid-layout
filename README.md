# Gecko Grid Layout #

Gecko grid is designed to be an extendable framework for theme developers. It works with gutenberg compatible themes, but some themes may offer extended features.

## Compatibility ##

Supports major evergreen browsers.

* Chrome
* Firefox
* Safari
* Edge

*IE - not compatible. It's time to let it go...

## Why use it? ##

There are some frustrations that come with gutenberg. One of those is inline-styles. Not bashing the idea, but what happens when you change themes later? Somehow you have to clean that up. With that in mind, this plugin works to keep inline styles to an absolute minimum, but utilizing the render_callback feature for blocks. Styles can be added or omitted here, but we'll talk about that later. The point it, as a theme developer you should be able to extend blocks and choose how they look reguardless of the markup that was saved in the DB.

### Features ###

* Image Block - Lazy load image
* Basic Block - Content only block.
* Grid Layout Templates - Allow theme developers to create custom templates that can be chosen from by users.

## Styles ##

The grid and the grid items all support styles. 

### Defaults ###
* Grid
	* Default : .is-style-default
	* No Gap : .is-style-no-gap
* Image
	* Default : .is-style-default
	* Hover : .is-style-hover
	* No Caption : .is-style-no-caption
* Basic
	* Default : .is-style-default

### Usage ##

This approach allows the theme to have special styles for every type of item if it wants. For instance you might want a dark overlay as well as the default overlay for the image block. You could create a new style like this. I recommed using [enqueue_block_editor_assets](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/) to include the script.

```javascript
window.wp.domReady(function () {
	// To add a new style to the grid item you can.
	window.wp.blocks.registerBlockStyle('gecko/grid-layout-image', [
		{
			name: 'dark-overlay',
			label: 'Dark Overlay'
		},
	]);
});
```

Or maybe your theme does not support a default style like hover.

```javascript
window.wp.domReady(function () {
	window.wp.blocks.unregisterBlockStyle('gecko/grid-layout-item', 'hover');
});
```


## Grid Layout Templates ##

Because grid can be a bit confusing. Layout templates are a convenient way to help the user create grid layouts. To add a new template enqueue a script similar to the one below in [enqueue_block_editor_assets](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/)

```javascript
window.wp.domReady( function() {
	// Adding the filter
	window.wp.hooks.addFilter(
		'gecko.grid-layout.templates',
		'<namespace>',
		addNewGridTemplates
	);
	// Our filter function
	function addNewGridTemplates(templates) {
		templates.push({
			label: 'Default',
			layout: [
				['gecko/grid-layout-basic', {
					w: 6
				}],
				['gecko/grid-layout-basic', {
					w: 6
				}],
			]
		});
		return templates;
	}
});
```

## PHP Filters ##

This filters allow you to manipulate the output:

* gecko/grid-layout-image/defaults
* gecko/grid-layout-image/class - Used to modify classes attached to the block-item
* gecko/grid-layout-image/style - Used to modify inline styles attached to the block-item

### Basic ###
Changing the basic block's class names
```php
// Change class names
add_filter('gecko/grid-layout-basic/class', 'custom_theme_change_class', 10, 2);
function custom_theme_change_class($classNames, $attributes){
	$key = array_search('gecko-grid-layout-item', $classNames); 
	$classNames[$key] = 'custom-grid-layout-item';
	return $classNames;
}
```
Changing the basic block's inline styles
```php
// Change styles
add_filter('gecko/grid-layout-basic/style', 'custom_theme_change_class', 10, 2);
function custom_theme_change_class($styles, $attributes){
	$styles['grid-column-end'] = 'span 5';
	return $styles;
}
```
Changing the basic block's html output
```php
// Change basic layout
add_filter('gecko/grid-layout-basic/output', 'custom_theme_change_class', 10, 5);
function custom_theme_change_class($output, $class, $style, $content, $attributes ){
	$template = '<div class="%s" style="%s">%s</div>';
	$output = sprintf($template, $class, $style, $content);
	return $output;
}
```

### Image ###
Changing the image block's class names
```php
// Change class names
add_filter('gecko/grid-layout-image/class', 'custom_theme_change_class', 10, 2);
function custom_theme_change_class($classNames, $attributes){
	$key = array_search('gecko-grid-layout-item', $classNames); 
	$classNames[$key] = 'custom-grid-layout-item';
	return $classNames;
}
```
Changing the image block's inline styles
```php
// Change styles
add_filter('gecko/grid-layout-image/style', 'custom_theme_change_class', 10, 2);
function custom_theme_change_class($styles, $attributes){
	$styles['grid-column-end'] = 'span 5';
	return $styles;
}
```
Changing the image block's <img /> html output
```php
// Change basic layout
add_filter('gecko/grid-layout-image/output/image', 'custom_theme_change_class', 10, 7);
function custom_theme_change_class($output, $preview, $src, $srcset, $alt, $title, $attributes  ){
	$template = '<img class="gecko-grid-layout-image__image lazy" src="%s" data-src="%s" data-srcset="%s" alt="%s" title="%s"/>';
	$output = sprintf($template, $preview, $src, $srcset, $alt, $title);;
	return $output;
}
```
Changing the image block's <figcaption><figcaption/> html output
```php
// Change basic layout
add_filter('gecko/grid-layout-image/output/caption', 'custom_theme_change_class', 10, 7);
function custom_theme_change_class($output, $content, $attributes ){
	$template = '<figcaption class="gecko-grid-layout-image__caption">%s</figcaption>';
	$output = sprintf($template, $content, $attributes);
	return $output;
}
```
Changing the basic block's html output
```php
// Change basic layout
add_filter('gecko/grid-layout-image/output', 'custom_theme_change_class', 10, 6);
function custom_theme_change_class($output, $class, $style, $image, $caption, $attributes  ){
	$template = '<figure class="%s" style="%s">%s%s</figure>';
	$output = sprintf($template, $class, $style, $image, $caption, $attributes);
	return $output;
}
```

## Roadmap ##

Originally I wanted to add all kinds of features to make it where you could do what ever you want, but that's a whole lot of inline styles and themes that might not always look good. So the goal is to keep it bare bones for developers. If there is something fancy that needs to happen within the block, new styles can be created for the block and the developer can change the appearance of those.

* Add Advanced Block - This is to primarily depricate the item block. The content block will be able to have background-images
* Create backgroundImage Editor
* Add Video Block - Not sure the best way to display this