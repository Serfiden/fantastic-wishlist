import React, { Component } from 'react';

export default class Checkbox extends Component {
	constructor(props) {
		super(props);
		this.setCheckboxRef = el => {
			this.checkbox = el;
		}
		this.onCheckboxClick = this.onCheckboxClick.bind(this);
	}

	onCheckboxClick () {
		if (this.checkbox.children[0].checked === true) {
			this.checkbox.children[1].style.animation = 'toChecked .3s forwards';
		} else {
			this.checkbox.children[1].style.animationName = "";
			this.checkbox.children[1].style.backgroundColor = 'white';
		}
	}

	 render() {
	 	return (
	 		<label className = 'checkbox-container' ref = {this.setCheckboxRef}>
				<input type = 'checkbox' autoComplete = 'off' onClick = {this.onCheckboxClick}/>
				<span />
				{this.props.text} 
			</label>
	 	)
	 }
}