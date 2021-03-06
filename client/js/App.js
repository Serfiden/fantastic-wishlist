import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import { Provider } from './Components/Context';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.setCheckboxRef = el => {
			this.checkbox = el;
		}
		this.onCheckboxClick = this.onCheckboxClick.bind(this);
		this.store = {
			
		}
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
			<Provider store = {this.store} >
				<Switch>
					<Route 
						exact path = '/' 
						component = {LoginForm} />
					<Route
						path = '/user'
						render = {(props) => <User {...props} name = 'Cristi' />} />
				</Switch>
			</Provider>
		)
	}
}