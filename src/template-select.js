import React from 'react';
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/editor';
import templates from './templates'; // Custom Templates to choose from.
import Preview from './template-preview'; // Custom Templates to choose from.

// import { Fragment } from '@wordpress/element';

export default class TemplateSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null,
		}
	}
	setTemplate = (template) => {
		this.setState({
			selected: template,
		})
	}
	render(){
		const {hasInnnerBlocks, allowedBlocks} = this.props;
		const {selected} = this.state;
		const blankTemplate = [['gecko/grid-layout-basic', {
					w: 6
				}]];
		if (!hasInnnerBlocks && !selected) {
			return(
				<div className="gecko-grid-layout-template-select">
					<h2>{__('Choose a Template')}</h2>
					<p>{__('This is a starting point. Templates make it easy to choose a layout. Blocks can be changed once they are selected.')}</p>
					<div className="gecko-grid-layout-template-select__templates">
						{templates().map((template, key)=>{
							return(
								<div key={key} className="gecko-grid-layout-template-select__template" onClick={()=>this.setTemplate(template.layout)}>
									<Preview layout={template.layout} />
									<p>{template.label}</p>
								</div>
							);
						})}
						<div className="gecko-grid-layout-template-select__template" onClick={()=>this.setTemplate(blankTemplate)}><Preview layout={blankTemplate} /><p>{__('Create New')}</p></div>
					</div>
				</div>
			)
		}
		return(
			<InnerBlocks
				template={selected}
				templateLock={false}
				allowedBlocks={allowedBlocks}
			/>
		)
	}
}