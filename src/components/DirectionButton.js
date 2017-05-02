import React, { Component } from 'react';

import './DirectionButton.css';

class DirectionButton extends Component {
	constructor() {
		super();

		this.state = {
			direction: 'right',
		};
	}

	render() {
		return (
			<div className="DirectionButton">
				<div className={'toggle ' + this.state.direction}></div>
			</div>
		);
	}
}

export default DirectionButton;
