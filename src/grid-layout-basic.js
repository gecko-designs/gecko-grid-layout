/**
 * WordPress dependencies
 */
import {
	PanelBody,
	RangeControl,
	Path,
	SVG,
	Rect,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	createBlock,
} from '@wordpress/blocks';
import {
	InspectorControls,
	InnerBlocks,
} from '@wordpress/editor';
import {
	select
} from '@wordpress/data';

export const name = 'gecko/grid-layout-basic';

export const settings = {
	title: __( 'Basic' ),

	parent: ['gecko/grid-layout'],

	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z M0,0h24v24H0V0z" fill="none" /><Path d="m20 7v10h-16v-10h16m0-2h-16c-1.1 0-1.99 0.9-1.99 2l-0.01 10c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2z" /><Rect x="11" y="8" width="2" height="2" /><Rect x="11" y="11" width="2" height="2" /><Rect x="8" y="8" width="2" height="2" /><Rect x="8" y="11" width="2" height="2" /><Rect x="5" y="11" width="2" height="2" /><Rect x="5" y="8" width="2" height="2" /><Rect x="8" y="14" width="8" height="2" /><Rect x="14" y="11" width="2" height="2" /><Rect x="14" y="8" width="2" height="2" /><Rect x="17" y="11" width="2" height="2" /><Rect x="17" y="8" width="2" height="2" /></SVG>,

	description: __( 'An image Grid Block.' ),

	category: 'common',

	supports: {
		className: true,
		inserter: true,
		reusable: false,
		html: false,
	},

	styles: [
		{ name: 'default', label: __( 'Default'), isDefault: true },
	],

	attributes: {
		h: { type: 'number', default: 1},
		w: { type: 'number', default: 1},
	},

	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['gecko/grid-layout-item', 'gecko/grid-layout-image'],
				transform: (attributes, innerBlocks) => {
					const selected = select('core/editor').getSelectedBlock(); // because innerBlocks does not work.
					// It appears that innerBlocks will be added in the future.
					const {h, w} = attributes;
					return createBlock('gecko/grid-layout-basic', {
						h: h,
						w: w,
					}, selected.innerBlocks);
				},
			},	
		],
	},

	deprecated: [{
		migrate() {},
		save() {
			return <InnerBlocks.Content / > ;
		},
	}],

	edit({ attributes, setAttributes, className, insertBlocksAfter }) {
		const {
			h,
			w,
		} = attributes;
		const styles = {
			gridColumnEnd: 'span '+ w,
			gridRowEnd: 'span ' + h,
		};
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Grid Item">
						<RangeControl
							label={ __( 'Width' ) }
							value={ w }
							onChange={ ( next ) => {
								setAttributes( {
									w: next,
								} );
							} }
							min={ 1 }
							max={ 12 }
						/>
						<RangeControl
							label={ __( 'Span Rows' ) }
							value={ h }
							onChange={ ( next ) => {
								setAttributes( {
									h: next,
								} );
							} }
							min={ 1 }
							max={ 12 }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={`gecko-grid-layout-editor-styles`} style={styles}></div>
				<div  className={`wp-block-gecko-grid-layout-editor__wrap gecko-grid-layout-basic ${attributes.className}`}>
					{ typeof insertBlocksAfter === 'function' //This line makes sure styles do not break
						? <InnerBlocks templateLock={ false }/>
						: <p>Lorem Ipsum</p> // This is what shows as the preview content.
					}
				</div>
			</Fragment>
		);
	},

	save() {
		return(<div><InnerBlocks.Content /></div>); // Honestly I don't want to do this but conventions are conventions.
	},
};
