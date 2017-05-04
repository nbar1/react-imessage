import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DirectionButton.css';

/**
 * DirectionButton
 *
 * @class
 */
class DirectionButton extends Component {
	/**
	 * constructor
	 *
	 * @constructor
	 */
	constructor() {
		super();

		this.state = {
			direction: 'sent',
		};
	}

	/**
	 * changeMessageDirection
	 *
	 * @returns {void}
	 */
	changeMessageDirection() {
		let newDirection = (this.state.direction === 'sent') ? 'received' : 'sent';

		this.props.setMessageDirection(newDirection);

		this.setState({
			direction: newDirection,
		});
	}

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className="DirectionButton">
				<div
					className={'toggle ' + this.state.direction}
					onClick={function() {
						this.changeMessageDirection();
					}.bind(this)}
				></div>
			</div>
		);
	}
}

DirectionButton.propTypes = {
	setMessageDirection: PropTypes.func.isRequired,
};

export default DirectionButton;
