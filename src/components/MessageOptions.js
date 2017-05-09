import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MessageOptions.css';

/**
 * MessageOptions
 *
 * @class
 */
class MessageOptions extends Component {
	/**
	 * removeMessage
	 *
	 * @returns {void}
	 */
	removeMessage() {
		this.props.removeMessage(this.props.index);
	}

	/**
	 * changeDirection
	 *
	 * @returns {void}
	 */
	changeDirection() {
		let newDirection = (this.props.direction === 'sent') ? 'received' : 'sent';

		this.props.setMessageDirection(this.props.index, newDirection);
	}

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className={'MessageOptions ' + (this.props.showOptions === true ? 'show-options' : 'hide-options')}>
				<div
					className='move-message-left'
					onClick={function() {
						this.changeDirection();
					}.bind(this)}
				></div>
				<div
					className='delete-message'
					onClick={function() {
						this.removeMessage();
					}.bind(this)}
				></div>
				<div
					className='move-message-right'
					onClick={function() {
						this.changeDirection();
					}.bind(this)}
				></div>
			</div>
		);
	}
}

MessageOptions.propTypes = {
	index: PropTypes.number.isRequired,
	direction: PropTypes.string.isRequired,
	showOptions: PropTypes.bool,
	setMessageDirection: PropTypes.func.isRequired,
	removeMessage: PropTypes.func.isRequired,
};

export default MessageOptions;
