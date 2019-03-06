/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, G, SVG, Path } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import {
	InspectorControls,
	InnerBlocks,
} from '@wordpress/editor';
// import {createHooks, applyFilters, addFilter} from '@wordpress/hooks';
// const hooks = createHooks();
// const templates = hooks.applyFilters('gecko.grid-layout.templates', ['prev']);
// hooks.addFilter('gecko.grid-layout.templates', 'gecko/grid-layout', (a) => {
// 	a.push['test'];
// 	console.log('test');
// 	return a;
// });
// console.log(templates);
/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'dmp/grid-item'.
 *
 * @constant
 * @type {string[]}
*/
const ALLOWED_BLOCKS = ['gecko/grid-layout-item', 'gecko/grid-layout-image'];

export const name = 'gecko/grid-layout';

export const settings = {
	title: __( 'Grid' ),

	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M4,13 L8,13 L8,10 L4,10 L4,13 Z M4,15 L4,18 L8,18 L8,15 L4,15 Z M10,13 L14,13 L14,10 L10,10 L10,13 Z M10,15 L10,18 L14,18 L14,15 L10,15 Z M20,13 L20,10 L16,10 L16,13 L20,13 Z M20,15 L16,15 L16,18 L20,18 L20,15 Z M4,8 L8,8 L8,5 L4,5 L4,8 Z M10,8 L14,8 L14,5 L10,5 L10,8 Z M20,8 L20,5 L16,5 L16,8 L20,8 Z M4,3 L20,3 C21.1045695,3 22,3.95139491 22,5.125 L22,17.875 C22,19.0486051 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.0486051 2,17.875 L2,5.125 C2,3.95139491 2.8954305,3 4,3 Z" /></G></SVG>,

	category: 'layout',

	attributes: {
		columns: {
			type: 'number',
			default: 12,
		},
		gap: {
			type: 'number',
			default: 1,
		},
	},

	description: __( 'Use CSS Grid to build layouts and, then add whatever content blocks you’d like.' ),

	supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},

	deprecated: [
		{
			migrate() {},
			save() {
				return <InnerBlocks.Content />;
			},
		}
	],

	styles: [
		{ name: 'default', label: __( 'Default'), isDefault: true },
		{ name: 'no-gap', label: __( 'No Gap') },
	],

	edit( { attributes, setAttributes, insertBlocksAfter } ) {
		const { columns, gap } = attributes;
		// const styles = 'grid-template-columns: repeat(' + columns + ', minmax(100px, 1fr));	grid-auto-rows: minmax(100px, auto); grid-gap:' + gap + 'rem;';
		const styles = 'grid-gap:' + gap + 'rem;';
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<RangeControl
							label={ __( 'Gap' ) }
							value={ gap }
							onChange={ ( next ) => {
								setAttributes( {
									gap: next,
								} );
							} }
							min={ 0 }
							max={ 2 }
						/>
					</PanelBody>
				</InspectorControls>
				<div className="wp-block-gecko-grid-layout-editor" data-passthru={styles} data-grid={columns}>
					{ 
						typeof insertBlocksAfter === 'function' &&
						<InnerBlocks
							template = {
								[
									['gecko/grid-layout-image', {w: 6}],
									['gecko/grid-layout-image', {w: 6}],
								]
							}
							templateLock={false}
							allowedBlocks={ ALLOWED_BLOCKS }
						/>
					}
				</div>
			</Fragment>
		);
	},

	save() {
		return(<div><InnerBlocks.Content /></div>); // Honestly I don't want to do this but conventions are conventions.
	},
};
