/**
 * WordPress dependencies
 */
import {
	PanelBody,
	RangeControl,
	Path,
	SVG,
	IconButton,
	Toolbar,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	createBlock,
} from '@wordpress/blocks';
import {
	InspectorControls,
	InnerBlocks,
	MediaUpload,
	MediaPlaceholder,
	BlockControls,
} from '@wordpress/editor';
import {
	select
} from '@wordpress/data';

const ALLOWED_BLOCKS = ['core/paragraph', 'core/heading', 'core/button', 'core/list', 'core/quote'];

export const name = 'gecko/grid-layout-video';

export const settings = {
	title: __( 'Video' ),

	parent: ['gecko/grid-layout'],

	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none" /><Path d="m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z" /><Path d="m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z" /></SVG>,

	description: __( 'A video grid block.' ),

	category: 'common',

	supports: {
		className: true,
		inserter: true,
		reusable: false,
		html: false,
	},

	styles: [
		{ name: 'default', label: __( 'Default'), isDefault: true },
		{ name: 'hover', label: __( 'Hover') },
		{ name: 'no-caption', label: __( 'No Caption') },
	],

	attributes: {
		h: { type: 'number', default: 1},
		w: { type: 'number', default: 1},
		minHeight: { type: 'number', default: 200,},
		mediaId: { type: 'number'},
		mediaUrl: { type: 'string'},
	},

	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['gecko/grid-layout-basic', 'gecko/grid-layout-item'],
				transform: (attributes, innerBlocks) => {
					const selected = select('core/editor').getSelectedBlock(); // because innerBlocks does not work.
					// It appears that innerBlocks will be added in the future.
					const {h, w, bgMedia, bgMediaUrl} = attributes;
					return createBlock('gecko/grid-layout-video', {
						h: h,
						w: w,
						mediaId: bgMedia,
						mediaUrl: bgMediaUrl,
					}, selected.innerBlocks);
				},
			},	
		]
	},

	edit({ attributes, setAttributes, className, insertBlocksAfter }) {
		const {
			h,
			w,
			mediaId,
			mediaUrl,
			minHeight,
		} = attributes;
		const styles = {
			gridColumnEnd: 'span '+ w,
			gridRowEnd: 'span ' + h,
			minHeight: minHeight + 'px',
		};
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Grid Item">
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
				<BlockControls>
					<Toolbar>
						<MediaUpload
							onSelect={(value) => {
								// console.log(value);
								setAttributes({
									mediaId: value.id,
									mediaUrl: value.url,
								});
							}}
							type={['video']}
							value={(mediaId)? mediaId: null }
							render={({open}) => {
								return(
									<IconButton
										className="components-icon-button components-toolbar__control"
										label={ __( 'Edit image' ) }
										onClick={open}
										icon="edit"
									/>
								);
							}}
						/>
					</Toolbar>
				</ BlockControls>
				<div className={`gecko-grid-layout-editor-styles`} style={styles}></div>
				<figure className={`wp-block-gecko-grid-layout-editor__wrap gecko-grid-layout-video ${attributes.className}`}>
					{
						!mediaId &&
						<MediaPlaceholder
							onSelect={(value) => {
									setAttributes({
										mediaId: value.id,
										mediaUrl: value.url,
									});
								}}
							allowedTypes={['video']}
							accept="video/*"
						/>
					}
					{
						mediaUrl &&
						<img className="gecko-grid-layout-video__image" src={mediaUrl} />
					}
					<figcaption className="gecko-grid-layout-video__caption">
						{ typeof insertBlocksAfter === 'function' //This line makes sure styles do not break
							? <InnerBlocks templateLock={ false } allowedBlocks={ALLOWED_BLOCKS}/>
							: <p>Lorem Ipsum</p> // This is what shows as the preview content.
						}
					</figcaption>
				</figure>
			</Fragment>
		);
	},

	save() {
		// Honestly I don't want to do this but conventions are conventions.
		return(<div><InnerBlocks.Content /></div>); 
	},
};
