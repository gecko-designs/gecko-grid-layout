import TypeSelect from './type-select';
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
	MediaPlaceholder,
	ColorPalette,
} from '@wordpress/editor';

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
		console.log(arguments);
		const { opacity, h, w, type, bgMedia, bgMediaUrl, bgColor } = attributes;
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
		}
		if (type === "solid") {
			delete(styles.backgroundImage);
		}
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
						{
							(type === 'image' || type === 'image-content') &&
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
										(value, test) => {
											console.log('color', value);
											setAttributes({
												bgColor: value
											});
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
				<div className={`wp-block-gecko-grid-layout-editor__item ${type} ${attributes.className}`} style={styles}>
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
