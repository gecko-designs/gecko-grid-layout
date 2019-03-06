# Gecko Grid Layout #

Gecko grid is designed to be an extendable framework for theme developers. You can extend grid to do lots of really cool things!

## Roadmap ##

Originally I wanted to add all kinds of features to make it where you could do what ever you want, but that's a whole lot of inline styles and themes that might not always look good. So the goal is to keep it bare bones for developers. If there is something fancy that needs to happen within the block, new styles can be created for the block and the developer can change the appearance of those.

### Features ###

* Add Image Block - Background images are not as accessible. Image blocks can have html captions.
* Add Content Block - This is to primarily depricate the item block. The content block will be able to have background-images
* Create backgroundImage Editor
* Grid Gap to Increment,Unit format
* Grid Layout Templates - Allow theme developers to create custom templates that can be chosen from by users.
* Add Video Block - Not sure the best way to display this

## Filters ##

This filters allow you to manipulate the output:

* gecko/grid-layout-item/defaults
* gecko/grid-layout-item/class - Used to modify classes attached to the block-item
* gecko/grid-layout-item/style - Used to modify inline styles attached to the block-item


## Styles ##

Creating new styles for a grid item

```
window.wp.domReady(function () {
	// To add a new style to the grid item you can.
	window.wp.blocks.registerBlockStyle('gecko/grid-layout-item', [
		{
			name: 'reveal-on-hover',
			label: 'Reveal on Hover'
		},
	]);
	// A style can be unregistered as well with something like this:
	// window.wp.blocks.unregisterBlockStyle('gecko/grid-layout-item, 'reveal-on-hover');
});
```