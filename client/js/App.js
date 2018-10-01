import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className = 'login-container'>
				<div className = 'logo'>
					<img src = '/logo.png'/>
				</div>
				<input className = 'login-user-input' type = 'text' placeholder = 'Your e-mail address'/>
				<input className = 'login-password-input' type = 'text' placeholder = 'Password'/>
				<label className = 'login-checkbox-container'>
					<input type = 'checkbox' autoComplete = 'off'/>
					<span />
					Remember me 
				</label>
				<button> LOGIN </button>
			</div>
		)
	}
}