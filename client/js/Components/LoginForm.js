import React, { Component } from 'react';
import Input from './Input';
import Checkbox from './Checkbox';

export default class LoginForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className = 'login-container'>
				<div className = 'logo'>
					<img src = '/logo.png'/>
				</div>
				<Input type = 'USERNAME' placeholder = 'Your e-mail address' />
				<Input type = 'PASSWORD' placeholder = 'Password' />
				<Checkbox text = 'Remember me' />
				<button className = 'large-button'> LOGIN </button>
				<a href = "#"> Forgot your password? </a>
			</div>
		)
	}
}