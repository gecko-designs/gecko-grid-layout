import { __ } from '@wordpress/i18n';
// import { Fragment } from '@wordpress/element';
export default function({value, onSelect}){
	const selected = (next) => {
		return onSelect(next);
	}
	const types = [
		{slug: 'solid', name:'Solid'},
		{slug: 'image', name:'Image'},
		{slug: 'image-content', name:'Image with Content'},
	]
	return(
		<div className="wp-block-gecko-grid-layout-type-select">
			<p>Choose the block layout type.</p>
			{types.map((type) => {
				let isSelected = "";
				if(type.slug === value){
					isSelected = "wp-block-gecko-grid-layout-type-select__item--selected"
				}
				return (
					<div className={`wp-block-gecko-grid-layout-type-select__item ${isSelected}`} onClick={()=> selected(type.slug)}>{type.name}</div>
				);
			})}
		</div>
	);
}