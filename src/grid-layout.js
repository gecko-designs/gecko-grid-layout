/**
 * External dependencies
 */
import { times } from 'lodash';
import classnames from 'classnames';
import memoize from 'memize';

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

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'dmp/grid-item'.
 *
 * @constant
 * @type {string[]}
*/
const ALLOWED_BLOCKS = ['gecko/grid-layout-item'];

/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param {number} columns Number of columns.
 *
 * @return {Object[]} Columns layout configuration.
 */
const getColumnsTemplate = memoize( ( columns ) => {
	return times( columns, () => [ 'gecko/grid-layout-item' ] );
} );

export const name = 'gecko/grid-layout';

export const settings = {
	title: __( 'Grid' ),

	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M4,4H20a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4ZM4 6V18H8V6Zm6 0V18h4V6Zm6 0V18h4V6Z" /></G></SVG>,

	category: 'layout',

	attributes: {
		columns: {
			type: 'number',
			default: 5,
		},
		gap: {
			type: 'number',
			default: 1,
		},
	},

	description: __( 'Add a block that displays content in multiple columns, then add whatever content blocks you’d like.' ),

	supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},

	deprecated: [],

	edit( { attributes, setAttributes, className } ) {
		const { columns, gap } = attributes;
		const classes = classnames( className );
		const styles = 'grid-template-columns: repeat(' + columns + ', minmax(100px, 1fr));	grid-auto-rows: minmax(100px, auto); grid-gap:' + gap + 'rem;';

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<RangeControl
							label={ __( 'Grid' ) }
							value={ columns }
							onChange={ ( nextColumns ) => {
								setAttributes( {
									columns: nextColumns,
								} );
							} }
							min={ 2 }
							max={ 8 }
						/>
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
					<InnerBlocks
						template={ getColumnsTemplate(2) }
						templateLock={false}
						allowedBlocks={ ALLOWED_BLOCKS } />
				</div>
			</Fragment>
		);
	},

	save( { attributes } ) {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},
};
