import { __ } from '@wordpress/i18n';
// import { Fragment } from '@wordpress/element';
export default function({value, onSelect}){
	const selected = (next) => {
		return onSelect(next);
	}
	return(
		<div className="wp-block-gecko-grid-layout-type-select">
			Color Picker|Style|Width
		</div>
	);
}