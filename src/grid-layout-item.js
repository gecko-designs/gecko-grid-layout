import TypeSelect from './type-select';
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

	attributes: {
		type:{
			type: 'string',
			default: undefined, //solid // image //image-content
		},
		opacity: {
			type: 'number',
			default: 1,
		},
		h: {
			type: 'number',
			default: 1,
		},
		w: {
			type: 'number',
			default: 4,
		},
		bgMinHeight: {
			type: 'number',
			default: 200,
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
		bgColorSlug: {
			type: 'string',
		},
		bgColorBrightness: {
			type: 'number', //light or dark
		},
	},

	edit({ attributes, setAttributes, className, insertBlocksAfter,toggleSelection }) {
		const {
			opacity,
			h,
			w,
			type,
			bgMedia,
			bgMediaUrl,
			bgColor,
			bgColorBrightness,
			bgColorSlug,
			bgMinHeight,
		} = attributes;
		const styles = {
			'--background': bgColor,
			'--opacity': opacity,
			gridColumnEnd: 'span '+ w,
			gridRowEnd: 'span ' + h,
			backgroundColor: bgColor,
			backgroundImage: 'url(' + bgMediaUrl + ')',
		};
		if(type === "image"){
			delete(styles.backgroundColor);
			styles.minHeight = bgMinHeight+'px';
		}
		if (type === "solid") {
			delete(styles.backgroundImage);
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
					<PanelBody  title="Size Settings">
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
					<PanelBody title="Background Settings">
						{
							(type === 'image') &&
							<RangeControl
								label={ __( 'Minimun Height' ) }
								value={ bgMinHeight }
								onChange={ ( next ) => {
									setAttributes( {
										bgMinHeight: next,
									} );
								} }
								min = "50"
								max = "600"
								step = "1"
							/>
						}
						{
							(type === 'image' || type === 'image-content') &&
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
						{
							(type === 'solid' || type === 'image-content') &&
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
						}
						{
							(type === 'image-content') &&
							<RangeControl
								label={ __( 'Opacity' ) }
								value={ opacity }
								onChange={ ( next ) => {
									setAttributes( {
										opacity: next,
									} );
								} }
								min = "0"
								max = "1"
								step = "0.1"
							/>
						}
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
