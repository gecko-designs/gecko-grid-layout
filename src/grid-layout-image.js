/**
 * WordPress dependencies
 */
// import debounce from "lodash/debounce";
import {
	PanelBody,
	RangeControl,
	Path,
	SVG,
	IconButton,
	Toolbar,
	// ResizableBox,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';
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

export const name = 'gecko/grid-layout-image';

export const settings = {
	title: __( 'Image' ),

	parent: ['gecko/grid-layout'],

	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none" /><Path d="m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z" /><Path d="m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z" /></SVG>,

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
		{ name: 'hover', label: __( 'Hover') },
		{ name: 'no-caption', label: __( 'No Caption') },
	],

	attributes: {
		h: { type: 'number', default: 1},
		w: { type: 'number', default: 1},
		minHeight: { type: 'number', default: 200,},
		imgId: { type: 'number'},
		imgUrl: { type: 'string'},
	},

	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['gecko/grid-layout-basic', 'gecko/grid-layout-item'],
				transform: (attributes, innerBlocks) => {
					const selected = select('core/editor').getSelectedBlock(); // because innerBlocks does not work.
					// It appears that innerBlocks will be added in the future.
					const {h, w, bgMedia, bgMediaUrl, mediaId, mediaUrl, minHeight} = attributes;
					return createBlock('gecko/grid-layout-image', {
						h: h,
						w: w,
						imgId: bgMedia || mediaId,
						imgUrl: bgMediaUrl || mediaUrl,
						minHeight: minHeight,
					}, selected.innerBlocks);
				},
			},	
		]
	},

	deprecated: [{
		migrate() {},
		save() {
			return <InnerBlocks.Content / > ;
		},
	}],

	edit({ attributes, setAttributes, className, insertBlocksAfter, toggleSelection }) {
		const {
			h,
			w,
			imgId,
			imgUrl,
			minHeight,
		} = attributes;
		const styles = {
			gridColumnEnd: 'span '+ w,
			gridRowEnd: 'span ' + h,
			minHeight: minHeight + 'px',
		};
		// const onResizing = (event, direction, elt, delta) => {
		// 	if (direction === 'bottom') {
		// 		const newMinHeight = (elt.clientHeight > 600) ? 600 : elt.clientHeight;
		// 		setAttributes({
		// 			minHeight: newMinHeight,
		// 		});
		// 	}
		// 	if (direction !== 'right') return;
		// 	// console.log(elt);
		// 	const columnWidth = Math.floor(elt.parentNode.offsetWidth / w);
		// 	const currentSpan = Math.floor(elt.parentNode.offsetWidth / columnWidth);
		// 	//const elColWidth = Math.floor(elt.offsetWidth / w);
		// 	//const spans = Math.floor(elt.offsetWidth / elColWidth);
		// 	const toUpdate = Math.floor(parseInt(delta.width, 10) / columnWidth);
		// 	const original = w - toUpdate;
		// 	let newWidth = w + toUpdate;
		// 	// let add = true;
		// 	// if (spans < newWidth) {
		// 	// 	add = false;
		// 	// 	newWidth = w - 1;
		// 	// }
		// 	console.log(w, original, toUpdate , newWidth);
		// 	// console.log('', newWidth * elColWidth, newWidth * columnWidth);
		// 	// console.log(Math.floor(parseInt(delta.width, 10) / columnWidth));
		// 	// console.log(newWidth, w, parseInt(delta.width, 10), elt, elt.clientWidth);
		// 	// console.log(delta);
		// 	// const diff = newWidth - currentSpan;
		// 	// if (
		// 	// 	(diff === 1 || diff === -1)
		// 	// 	// (newWidth * elColWidth + columnWidth < newWidth * columnWidth)
		// 	// 	) {
		// 		if (newWidth > 12) {newWidth = 12}
		// 		if (newWidth < 1) {newWidth = 1}
		// 		return setAttributes( {
		// 			w: newWidth,
		// 		} );
		// 	// }
		// }
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
									imgId: value.id,
									imgUrl: value.url,
								});
							}}
							type={['image']}
							value={(imgId)? imgId: null }
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
				<figure className={`wp-block-gecko-grid-layout-editor__wrap gecko-grid-layout-image ${attributes.className}`}>
					{/* <ResizableBox
						size = {{
							width: '100%',
							height: '100%',
						}}
						// minHeight = "50"
						// minWidth = "100%"
						className = {
							`wp-block-gecko-grid-layout-editor__wrap gecko-grid-layout-image ${attributes.className}`
						}
						// minHeight={ minHeight }
						// maxHeight={600}
						// lockAspectRatio
						enable={ {
							top: false,
							right: true,
							bottom: true,
							left: false,
						} }
						onResizeStart={ (event, direction, elt, delta) => {
							toggleSelection( false );
						} }
						onResize={ 	debounce(onResizing, 250) }
						onResizeStop={ ( event, direction, elt, delta ) => {
							// const columnWidth = Math.floor(elt.parentNode.clientWidth / w);
							// const updated = Math.floor(parseInt(delta.width, 10) / columnWidth);
							if (direction !== 'bottom') return;
							const newMinHeight = (elt.clientHeight > 600)? 600 : elt.clientHeight;
							setAttributes( {
								minHeight: newMinHeight,
							} );
							toggleSelection( true );
						} }
					> */}
					{
						!imgId &&
						<MediaPlaceholder
							onSelect={(value) => {
									setAttributes({
										imgId: value.id,
										imgUrl: value.url,
									});
								}}
							allowedTypes={['image']}
							accept="image/*"
						/>
					}
					{
						imgUrl &&
						<img className="gecko-grid-layout-image__image" src={imgUrl} />
					}
					{
						imgId &&
						<figcaption className="gecko-grid-layout-image__caption">
							{ typeof insertBlocksAfter === 'function' //This line makes sure styles do not break
								? <InnerBlocks templateLock={ false } allowedBlocks={ALLOWED_BLOCKS}/>
								: <p>Lorem Ipsum</p> // This is what shows as the preview content.
							}
						</figcaption>
					}
				{/* </ResizableBox> */}
				</figure>
			</Fragment>
		);
	},

	save() {
		// Honestly I don't want to do this but conventions are conventions.
		return(<div><InnerBlocks.Content /></div>); 
	},
};
