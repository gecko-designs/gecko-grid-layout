import tinycolor from 'tinycolor2';

/**
 * WordPress dependencies
 */
import {
	PanelBody,
	RangeControl,
	Path,
	SVG,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {createBlock} from '@wordpress/blocks';
import {
	InspectorControls,
	InnerBlocks,
	MediaUpload,
	MediaPlaceholder,
	ColorPalette,
	getColorObjectByColorValue,
} from '@wordpress/editor';
import {
	select
} from '@wordpress/data';
import deprecated from '@wordpress/deprecated';

export const name = 'gecko/grid-layout-item';

export const settings = {
	title: __('Item (deprecated)'),

	parent: ['gecko/grid-layout'],

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" /></SVG>,

	description: __('This block is deprecated. Please use basic or image block instead.'),

	category: 'common',

	supports: {
		inserter: false,
	},

	styles: [
		{ name: 'default', label: __( 'Default'), isDefault: true },
		{ name: 'hover', label: __( 'Hover') },
	],

	attributes: {
		type:{ type: 'string',default: undefined, }, //solid, image, image-content
		h: { type: 'number', default: 1,},
		w: { type: 'number'},
		minHeight: { type: 'number', default: 200,},
		opacity: { type: 'number', default: 1},
		bgMedia: { type: 'number'},
		bgMediaUrl: { type: 'string'},
		bgColor: { type: 'string'},
		bgColorSlug: { type: 'string'},
		bgColorBrightness: {type: 'number'},//light or dark
	},

	deprecated: [
		{
			migrate(attributes, innerBlocks) {
				// const selected = select('core/editor').getSelectedBlock(); // because innerBlocks does not work.
				// It appears that innerBlocks will be added in the future.
				const {
					h,
					w,
					bgMedia,
					bgMediaUrl,
					minHeight
				} = attributes;
				if (bgMedia) {
					return createBlock('gecko/grid-layout-image', {
						h: h,
						w: w,
						imgId: bgMedia,
						imgUrl: bgMediaUrl,
						minHeight: minHeight,
					}, innerBlocks);
				}
				return createBlock('gecko/grid-layout-basic', {
					h: h,
					w: w,
				}, innerBlocks);
			},
			save() {
				return(<InnerBlocks.Content />);
			},
		}
	],

	edit({ attributes, setAttributes, className, insertBlocksAfter }) {
		const {
			opacity,
			h,
			w,
			type,
			padding,
			bgMedia,
			bgMediaUrl,
			bgColor,
			bgColorBrightness,
			bgColorSlug,
			minHeight,
		} = attributes;
		deprecated('Grid Layout Idem', {
			alternative: 'Basic or Image',
			plugin: 'Gecko Grid Layout',
		});
		const styles = {
			'--background': bgColor,
			'--opacity': opacity,
			gridColumnEnd: 'span '+ w,
			gridRowEnd: 'span ' + h,
			backgroundColor: bgColor,
			backgroundImage: 'url(' + bgMediaUrl + ')',
			minHeight: minHeight + 'px',
		};
		let lightOrDark = 'light';
		if (bgColorBrightness < 130) lightOrDark = 'dark';
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody  title="Settings">
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
					<PanelBody title="Style">
						<RangeControl
							label={ __( 'Minimum Height' ) }
							value={ minHeight }
							onChange={ ( next ) => {
								setAttributes( {
									minHeight: next,
								} );
							} }
							min = "50"
							max = "600"
							step = "1"
						/>
						{ type !== "solid" &&
							<MediaUpload
								onSelect={(value) => {
									// console.log(value);
									setAttributes({
										bgMedia: value.id,
										bgMediaUrl: value.url,
									});
								}}
								type={['image', 'video']}
								value={(bgMedia)? bgMedia: null }
								render={({open}) => {
									return(
										<div>
											{bgMediaUrl && <img src={bgMediaUrl} onClick={open} width="100%" height="auto" style={{cursor: "pointer"}}/>}
											{!bgMediaUrl && <div className={'button button-large'} onClick={open}>
												Choose Background
											</div>}
										</div>
									);
								}}
							/>
						}
						<hr />
							<div>
								<ColorPalette
									label='Background Color'
									value={(bgColor) ? bgColor.color : undefined}
									onChange = {
										(value) => {
											const settings = select('core/editor').getEditorSettings();
											const colorSlug = (value) ? getColorObjectByColorValue(settings.colors, value).slug : undefined;
											setAttributes({bgColorSlug: colorSlug});
											const brightness = (value) ? tinycolor(value).getBrightness(): undefined;
											setAttributes({bgColorBrightness: brightness});
											setAttributes({bgColor: value});
										}
									}
								/>
								<hr />
							</div>
					</PanelBody>
				</InspectorControls>
				<div className={`gecko-grid-layout-editor-styles`} style={styles}></div>
				<div className={`wp-block-gecko-grid-layout-editor__wrap${type} ${attributes.className} has-${bgColorSlug}-background-color is-${lightOrDark}-background`}>
					{
						(type === 'image' || type === 'image-content') &&
						!bgMedia &&
						<MediaPlaceholder
							onSelect={(value) => {
									setAttributes({
										bgMedia: value.id,
										bgMediaUrl: value.url,
									});
								}}
							allowedTypes={['image']}
							accept="image/*"
						/>
					}
					{ 
						(typeof insertBlocksAfter === 'function') && //This line makes sure styles do not break
						<InnerBlocks templateLock={ false } />
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
