import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './Components/LoginForm';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.setCheckboxRef = el => {
			this.checkbox = el;
		}
		this.onCheckboxClick = this.onCheckboxClick.bind(this);
	}

	onCheckboxClick () {
		if (this.checkbox.children[0].checked === true) {
			this.checkbox.children[1].style.backgroundColor = '#12cbe8';
		} else {
			this.checkbox.children[1].style.backgroundColor = 'white';
		}
	}

	render() {
		return (
			<Switch>
				<Route 
					exact path = '/' 
					component = {LoginForm} />
				<Route
					path = '/user'
					render = {(props) => <User {...props} name = 'Cristi' />} />
			</Switch>
		)
	}
}