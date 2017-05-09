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
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className={'MessageOptions ' + (this.props.showOptions === true ? 'show-options' : 'hide-options')}>
				<div className='move-message-left'></div>
				<div
					className='delete-message'
					onClick={function() {
						this.removeMessage();
					}.bind(this)}
				></div>
				<div className='move-message-right'></div>
			</div>
		);
	}
}

MessageOptions.propTypes = {
	index: PropTypes.number.isRequired,
	direction: PropTypes.string.isRequired,
	showOptions: PropTypes.bool,
	removeMessage: PropTypes.func.isRequired,
};

export default MessageOptions;
