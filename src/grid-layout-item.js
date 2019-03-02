import TypeSelect from './input-type';
import Padding from './input-padding';
import tinycolor from 'tinycolor2';
/**
 * WordPress dependencies
 */
import {
	PanelBody,
	RangeControl,
	Path,
	SVG,
	ResizableBox
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
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

export const name = 'gecko/grid-layout-item';

export const settings = {
	title: __( 'Item' ),

	parent: ['gecko/grid-layout'],

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" /></SVG>,

	description: __( 'A single grid item within a grid block.' ),

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
		type:{ type: 'string',default: undefined, }, //solid, image, image-content
		// theme:{ type: 'string',default: undefined, }, //light, dark
		// borderRadius: { type: 'number'},
		// border: { type: 'object'},
		// boxShadow: { type: 'object'},
		padding: { type: 'string'}, // t b l r ui '5px 10px' '5px 10px 5px'
		// margin: { type: 'object'}, // t b l r ui
		// alignContent: { type: 'string'}, // normal, start, end, center
		// justifyContent: { type: 'string'}, // normal, start, end, center
		// backgroundImage: { type: 'string'}, // process for creating bg images
		// backgroundRepeat: { type: 'string'}, // no-repeat, repeat, repeat-x, repeat-y
		// backgroundSize: { type: 'string'}, // cover,contain,auto
		// backgroundColor: { type: 'string'},
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

	edit({ attributes, setAttributes, className, insertBlocksAfter }) {
		const {
			opacity,
			h,
			w,
			type,
			// padding,
			bgMedia,
			bgMediaUrl,
			bgColor,
			bgColorBrightness,
			bgColorSlug,
			minHeight,
		} = attributes;
		const styles = {
			'--background': bgColor,
			'--opacity': opacity,
			gridColumnEnd: 'span '+ w,
			gridRowEnd: 'span ' + h,
			backgroundColor: bgColor,
			backgroundImage: 'url(' + bgMediaUrl + ')',
			minHeight: minHeight + 'px',
		};
		if(type === "image"){
			delete(styles.backgroundColor);
		}
		if (type === "solid") {
			delete(styles.backgroundImage);
			delete(styles.minHeight);
		}
		let lightOrDark = 'light';
		if (bgColorBrightness < 130) lightOrDark = 'dark';
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Type">
						<TypeSelect 
							onSelect = {(next) => {
									setAttributes({
										type: next,
									});
								}}
							value={type}
						/>
					</PanelBody>
					<PanelBody  title="Grid Item">
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
						<RangeControl
							label={ __( 'Span Columns' ) }
							value={ w }
							onChange={ ( next ) => {
								setAttributes( {
									w: next,
								} );
							} }
							min={ 1 }
							max={ 12 }
						/>
					</PanelBody>
					<PanelBody title="Style">
						{/* <Padding 
							value={ padding }
							onChange={ ( next ) => {
								setAttributes( {
									padding: next,
								} );
							} }
						/> */}
						{ type !== "solid" &&
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
						}
						{ type === "image-content" &&
						<RangeControl
							label={ __( 'Opacity' ) }
							value={ opacity*100 }
							onChange={ ( next ) => {
								setAttributes( {
									opacity: next/100,
								} );
							} }
							min = "0"
							max = "100"
							step = "1"
						/>
						}
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
				< div className = {
					`wp-block-gecko-grid-layout-editor__item ${type} ${attributes.className} has-${bgColorSlug}-background-color is-${lightOrDark}-background`
				}
				style = {
					styles
				} >
					<div className = "wp-block-gecko-grid-layout-editor__wrap">
					{!type && <TypeSelect 
						onSelect = {(next) => {
								setAttributes({
									type: next,
								});
							}}
					/>}
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
						(type === 'solid' || (type === 'image-content' && bgMedia)) &&
						(typeof insertBlocksAfter === 'function') && //This line makes sure styles do not break
						<InnerBlocks templateLock={ false } />
					}
					</div>
				</div>
			</Fragment>
		);
	},

	save() {
		return <div><InnerBlocks.Content /></div>;
	},
};
