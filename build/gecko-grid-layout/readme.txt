=== Gecko Grid Layout ===
Contributors: dwayneparton, musicalbigfoot, geckodesigns
Donate link: https://dwayneparton.com
Tags: gutenberg, block, grid, grid-layout
Requires at least: 5.0
Tested up to: 5.1
Stable tag: 1.1.6
Requires PHP: 5.6
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A css grid layout block for gutenberg. It allows you to create masonry like content. This could be a gallery, content flowing in unique ways, or whatever.

== Description ==
A css grid layout block for gutenberg. It allows you to create masonry like content. This could be a gallery, content flowing in unique ways, or whatever.

Grid Layout is a tool for developers. Themes can determine the styles that are available on the grid items with minimum interference from inline styles. Developers can also update the markup with the filters available.

= Filters(Developers) = 
* gecko/grid-layout-basic/defaults
* gecko/grid-layout-basic/class
* gecko/grid-layout-basic/style
* gecko/grid-layout-image/defaults
* gecko/grid-layout-image/class
* gecko/grid-layout-image/style
* gecko/grid-layout-item/defaults
* gecko/grid-layout-item/class
* gecko/grid-layout-item/style

== Installation ==
1. Upload `gecko-grid-layout` to the `/wp-content/plugins/` directory
2. Activate the plugin through the \'Plugins\' menu in WordPress

== Frequently Asked Questions ==
1. No questions have been asked...let\'s change that.

== Changelog ==
= 1.1.6 =
* Updated grid span to favor variables. Grid isn't supported by browsers that do no use variables.
= 1.1.5 =
* Bug Fix
= 1.1.4 =
* Added ResizeableBox for adjusting width and minHeight
* Safari Bug Fix
= 1.1.3 =
* Updated mutation observer (performance improvement)
* Changed enqueue frontend scripts to apply on add_filter('the_content')
= 1.1.2 =
* Editor style clean up
= 1.1.1 =
* Deprecated gecko/grid-layout-item
* Updated php filters and documented them
= 1.1.0 =
* Allow Transform core/columns to grid
* Code clean up
= 1.0.9 =
* Transforms now move innerblocks
= 1.0.8 =
* Grid Layout Templates - Theme developers can now add predefined layouts to make it easier to use grid layout
* JS filter for updating grid layout templates - gecko.grid-layout.templates
= 1.0.7 =
* Title and Alt atributes for images
* No Caption style for images
= 1.0.6 =
* Bug fix on deprecated migrate
* Obeying conventions on innerblocks
= 1.0.5 =
* Added new block types: Image, Basic
* Image block is more accessible and has lazy loading
* Original block renamed to Expiremental
* Updated class and added new content filters.
= 1.0.4 =
* Added filters for theme developers.
* Only load script when block is on page.
* Added custom styles to grid item block for developers.
= 1.0.3 =
* Added min-height for background image grid item, so it's not just a little skinny thing.
= 1.0.2 =
* Added background dark and light class based on bg color.(is-light-background, is-dark-background)
* Added background color class.(has-[color]-background-color)
= 1.0.1 =
* Using a 12 column grid for now with plans to allow different grids in the future.
= 1.0 =
* Initial release

== Upgrade Notice ==
= 1.1.6 =
* Style fix for safari
= 1.1.5 =
* Bug Fix
= 1.1.4 =
* Added ResizeableBox for adjusting width and minHeight
= 1.1.3 =
* Performance improvements
= 1.1.2 =
* Editor style clean up
= 1.1.1 =
* Deprecated gecko/grid-layout-item
= 1.1.0 =
* Allow Transform core/columns to grid
= 1.0.9 =
* Transforms now move innerblocks
= 1.0.8 =
* Grid Layout Templates
= 1.0.7 =
* Added No Caption style to image
= 1.0.6 =
* Bug fix on deprecated migrate
* Obeying conventions on innerblocks
= 1.0.5 =
* Added new block types: Image, Basic
* Image block is more accessible and has lazy loading
* Original block renamed to Expiremental
* Updated class and added new content filters.
= 1.0.4 =
* Added filters for theme developers.
* Only load script when block is on page.
* Added custom styles to grid item block for developers.
= 1.0.3 =
* Added min-height for background image grid item, so it's not just a little skinny thing.
= 1.0.2 =
* Added background dark and light class based on bg color.(is-light-background, is-dark-background)
* Added background color class.(has-[color]-background-color)
= 1.0.1 =
* Using a 12 column grid for now with plans to allow different grids in the future.
= 1.0 =
* Initial release

== Screenshots ==
1. They're coming