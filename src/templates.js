/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {applyFilters} from '@wordpress/hooks';
export default function getTemplates() {
	const templates = [{
			label: __('2 Columns'),
			layout: [
				['gecko/grid-layout-basic', {
					w: 6
				}],
				['gecko/grid-layout-basic', {
					w: 6
				}],
			]
		},
		{
			label: __('3 Columns'),
			layout: [
				['gecko/grid-layout-basic', {
					w: 4
				}],
				['gecko/grid-layout-basic', {
					w: 4
				}],
				['gecko/grid-layout-basic', {
					w: 4
				}],
			]
		},
	];
	return applyFilters('gecko.grid-layout.templates', templates);
}
