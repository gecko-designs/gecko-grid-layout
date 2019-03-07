/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { G, SVG, Path } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/editor';
import { select } from '@wordpress/data';
import TemplatePicker from './template-select';

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 *
 * @constant
 * @type {string[]}
*/
const ALLOWED_BLOCKS = ['gecko/grid-layout-item', 'gecko/grid-layout-image', 'gecko/grid-layout-basic'];

export const name = 'gecko/grid-layout';

export const settings = {
	title: __( 'Grid' ),

	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M4,13 L8,13 L8,10 L4,10 L4,13 Z M4,15 L4,18 L8,18 L8,15 L4,15 Z M10,13 L14,13 L14,10 L10,10 L10,13 Z M10,15 L10,18 L14,18 L14,15 L10,15 Z M20,13 L20,10 L16,10 L16,13 L20,13 Z M20,15 L16,15 L16,18 L20,18 L20,15 Z M4,8 L8,8 L8,5 L4,5 L4,8 Z M10,8 L14,8 L14,5 L10,5 L10,8 Z M20,8 L20,5 L16,5 L16,8 L20,8 Z M4,3 L20,3 C21.1045695,3 22,3.95139491 22,5.125 L22,17.875 C22,19.0486051 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.0486051 2,17.875 L2,5.125 C2,3.95139491 2.8954305,3 4,3 Z" /></G></SVG>,

	category: 'layout',

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

	edit( { insertBlocksAfter, clientId } ) {
		// Get the block so we can see if it had innerblocks
		const block = select('core/editor').getBlocksByClientId(clientId)[0];
		const hasInnerBlocks = (block && block.innerBlocks) ? block.innerBlocks.length > 0 : false;
		
		return (
			<Fragment>
				<div className="wp-block-gecko-grid-layout-editor">
					{
						typeof insertBlocksAfter === 'function' ?
						<TemplatePicker hasInnnerBlocks={hasInnerBlocks} allowedBlocks={ ALLOWED_BLOCKS }></TemplatePicker> :
						<p>{__('Preview Not Available')}</p>
					}
				</div>
			</Fragment>
		);
	},

	save() {
		// Honestly I don't want to do this but conventions are conventions.
		return(<div><InnerBlocks.Content /></div>); 
	},
};
