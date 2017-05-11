import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessageOptions from './MessageOptions';

import './Message.css';

/**
 * Message
 *
 * @class
 */
class Message extends Component {
	/**
	 * constructor
	 *
	 * @constructor
	 */
	constructor() {
		super();

		this.state = {
			showOptions: false,
		};
	}

	/**
	 * showOptions
	 *
	 * @param {bool} toggle
	 * @returns {void}
	 */
	showOptions(toggle) {
		this.setState({
			showOptions: toggle,
		});
	}

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div
				className={'Message ' + this.props.direction}
				onMouseOver={function() {
					this.showOptions(true);
				}.bind(this)}
				onMouseOut={function() {
					this.showOptions(false);
				}.bind(this)}
			>
				{this.props.text}
				<MessageOptions
					showOptions={this.state.showOptions}
					setMessageDirection={this.props.actions.setMessageDirection}
					removeMessage={this.props.actions.removeMessage}
					messageId={this.props.messageId}
					index={this.props.index}
					direction={this.props.direction} />
			</div>
		);
	}
}

Message.propTypes = {
	direction: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	messageId: PropTypes.number.isRequired,
	actions: PropTypes.object.isRequired,
};

export default Message;
