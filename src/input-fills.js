import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	InnerBlocks,
	MediaUpload,
	MediaPlaceholder,
	ColorPalette,
	getColorObjectByColorValue,
} from '@wordpress/editor';
// import { Fragment } from '@wordpress/element';
export default function({value, onSelect}){
	const selected = (next) => {
		return onSelect(next);
	}
	return(
		<div className="wp-block-gecko-grid-layout-type-select">
			Image: Image|Display(Fit, Cover, Fixed)
			Solid: Color Picker
			Gradient: GraditantPicker|Style(linear/radial)
		</div>
	);
}