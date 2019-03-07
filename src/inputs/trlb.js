import React from 'react';
import { __ } from '@wordpress/i18n';

export default class Trlb extends React.Component {
	constructor(props) {
		super(props);
		const lock = false;
		this.state = {
			values: {},
			x: false,
			y: false,
			xy: false,
		}
	}
	componentDidMount(){
		const  {value} = this.props;
		this.parseValues(value);
	}
	
	// getDerivedStateFromProps(props, state){
	// 	if(this.props.value != this.state.value){
	// 		this.setState({
	// 			value: this.props.value,
	// 		})
	// 	}
	// }

	onChange = (e, v, onChange) => {
		const {values} = this.state;
		const newValues = {...values};
		newValues[e.target.name] = e.target.value;
		// const changed = {[e.target.name]: e.target.value};
		// const nextValue = {...v, ...changed}
		return this.setState({
			values: newValues,
		}, onChange(this.getValue(newValues)));
		// return onChange(this.state.value);
	}

	// To get increment parseInt(v[0])
	// Turn array into a value
	getValue(value){
		const vArray= [value.t,value.r, value.b, value.l];
		const tdlr = vArray.join(' ');  // 5px | 5px 5px | 5px auto 15px | 5px 5px 5px 5px
		return tdlr;
	}

	// Returns lock class
	lockToggle = (l) => {
		const lock = this.state[l];
		if(lock){
			return this.setState({
				[l]: false,
			})
		}
		return this.setState({
			[l]: true,
		})
	}

	// Returns lock class
	getLock(lock, value){
		const locked = this.state[lock];
		// const v = (value)? value.split(" "): [];
		// if (v.length == 1 && lock === 'xy') return 'is-locked';
		// if (v.length == 2 && lock === 'x') return 'is-locked';
		// if (v.length == 3 && lock === 'x') return 'is-locked';
		// if (v.length == 2 && lock === 'y') return 'is-locked';
		if (locked) return 'is-locked';
		return '';
	}
	// Turn value string into usable input
	parseValues(value){
		const v = (value)? value.split(" "): [];
		const values = {
			t:'',
			l:'',
			b:'',
			r:''
		};
		if (v.length === 1) {
			values.t = v[0];
			values.l = v[0];
			values.b = v[0];
			values.r = v[0];
		}
		if (v.length === 2) {
			values.t = v[0];
			values.l = v[1];
			values.b = v[0];
			values.r = v[1];
		}
		if (v.length === 3) {
			values.t = v[0];
			values.l = v[1];
			values.b = v[3];
			values.r = v[1];
		}
		if (v.length === 4) {
			values.t = v[0];
			values.l = v[1];
			values.b = v[2];
			values.r = v[3];
		}
		this.setState({
			values: values,
		})
	}
	// Get the unit type %,em,rem,px
	getUnit(value){
		const increment = parseInt(value);
		const unit = value.replace(increment, '');
		return unit;
	}
	render() {
		const {value, onChange} = this.props;
		const {values} = this.state;
		// console.log(this.state);
		// const value = '5% 19px'
		const v = values;
		const tldr = [
			{name: 't', label: __('Top'), value:v.t },
			{name: 'r', label: __('Right'), value:v.r},
			{name: 'b', label: __('Bottom'), value:v.b},
			{name: 'l', label: __('Left'), value:v.l}
		];
		return (
			<div className="gecko-trbl">
				{tldr.map((pos)=>{
					return(
						<div className={`gecko-trbl__input gecko-trbl__input--${pos.name}`}>
							<input 
								type="text" 
								name={pos.name} 
								aria-label={pos.label} 
								value={pos.value} 
								onChange={(e)=> this.onChange(e,v,onChange)}
							/>
						</div>
					)
				})}
				<div className="gecko-trbl__lock">
					<div className={`gecko-trbl__lock__y ${this.state.y}`} onClick={(e)=> this.lockToggle('y')}/>
					<div className={`gecko-trbl__lock__x ${this.state.x}`} onClick={(e)=> this.lockToggle('x')}/>
					<div className={`gecko-trbl__lock__xy ${this.state.xy}`} onClick={(e)=> this.lockToggle('xy')}/>
				</div>
			</div>
		);
	}
}