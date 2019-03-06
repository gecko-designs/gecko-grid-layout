import React from 'react';
import { __ } from '@wordpress/i18n';

// import { Fragment } from '@wordpress/element';

export default class Preview extends React.PureComponent {
	render(){
		const {layout} = this.props;
		return(
			<div className="gecko-grid-layout-template-preview">
				{layout.map((block,key)=>{
					const styles = {
						gridColumnEnd: 'span ' + block[1].w,
						gridRowEnd: 'span ' + block[1].h,
					};
					return(<div key={key} className="gecko-grid-layout-template-preview__item" style={styles}></div>);
				})}
			</div>
		)
	}
}