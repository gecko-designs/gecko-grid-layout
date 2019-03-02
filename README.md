# Gecko Grid Layout #

Gecko grid is designed to be an extendable framework for theme developers. You can extend grid to do lots of really cool things!

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