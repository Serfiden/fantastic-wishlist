import React, { Component } from 'react';

export default class User extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<h1>
				{this.props.name}
			</h1>
		)
	}
}