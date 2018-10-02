import React, { Component } from 'react';

const TYPE_TO_ICON = {
	'PASSWORD': 'fas fa-key',
	'USERNAME': 'fas fa-user',
}

export default class Input extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className = 'input-container'>
				<i className = {TYPE_TO_ICON[this.props.type]}/>
				<input 
					type = 'text' 
					placeholder = {this.props.placeholder}/>
				<i className = 'bar'/>
			</div>
		)
	}
}