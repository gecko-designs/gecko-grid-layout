/**
 * WordPress dependencies
 */
import {
	PanelBody,
	RangeControl,
	Path,
	SVG
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	InspectorControls,
	InnerBlocks,
	MediaUpload,
	ColorPalette,
} from '@wordpress/editor';

export const name = 'gecko/grid-layout-item';

export const settings = {
	title: __( 'Grid Item' ),

	parent: ['gecko/grid-layout'],

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" /></SVG>,

	description: __( 'A single grid item within a grid block.' ),

	category: 'common',

	supports: {
		inserter: true,
		reusable: false,
		html: false,
	},

	attributes: {
		h: {
			type: 'number',
			default: 1,
		},
		w: {
			type: 'number',
			default: 1,
		},
		bgMedia: {
			type: 'number',
		},
		bgMediaUrl: {
			type: 'string',
		},
		bgColor: {
			type: 'string',
		},
	},

	edit({ attributes, setAttributes, className }) {
		const { h, w, bgMedia, bgMediaUrl, bgColor } = attributes;
		const styles = {
			gridColumnEnd: 'span '+ w,
			gridRowEnd: 'span ' + h,
			backgroundColor: bgColor,
			backgroundImage: 'url(' + bgMediaUrl + ')',
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody  title="Size Settings">
						<RangeControl
							label={ __( 'Height' ) }
							value={ h }
							onChange={ ( next ) => {
								setAttributes( {
									h: next,
								} );
							} }
							min={ 1 }
							max={ 7 }
						/>
						<RangeControl
							label={ __( 'Width' ) }
							value={ w }
							onChange={ ( next ) => {
								setAttributes( {
									w: next,
								} );
							} }
							min={ 1 }
							max={ 7 }
						/>
					</PanelBody>
					<PanelBody title="Background Settings">
						<MediaUpload
							onSelect={(value) => {
								console.log(value);
								setAttributes({
									bgMedia: value.id,
									bgMediaUrl: value.url,
								});
							}}
							type={['image', 'video']}
							value={(bgMedia)? bgMedia: null }
							render={({open}) => {
								return(
									<div className={'button button-large'} onClick={open}>
										Choose Background
									</div>
								);
							}}
						/>
						<hr />
						<div>
							<ColorPalette
								label='Background Color'
								value={(bgColor) ? bgColor.color : undefined}
								onChange = {
									(value) => {
										setAttributes({
											bgColor: value
										});
									}
								}
							/>
							<p></p>
						</div>
				</PanelBody>
				</InspectorControls>
				<div className="wp-block-gecko-grid-layout-editor__item" style={styles}>
					<InnerBlocks templateLock={ false } />
				</div>
			</Fragment>
		);
		// return <InnerBlocks templateLock={ false } />;
	},

	save() {
		return <div><InnerBlocks.Content /></div>;
	},
};
