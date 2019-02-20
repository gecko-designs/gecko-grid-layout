import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl} from '@wordpress/components';
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

export const name = 'gecko/grid-layout';

export const settings = {
	title: __( 'Grid Layout' ),

	icon: <FontAwesomeIcon icon={faTh} />,

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
		const styles = 'grid-template-columns: repeat(' + columns + ', minmax(100px, 1fr));	grid-auto-rows: minmax(100px, auto); grid-gap:' + gap + 'rem;';

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<RangeControl
							label={ __( 'Columns' ) }
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
						template = {
							[
								['gecko/grid-layout-item'],
								['gecko/grid-layout-item']
							]
						}
						templateLock={false}
						allowedBlocks={ ALLOWED_BLOCKS } />
				</div>
			</Fragment>
		);
	},

	save() {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},
};
