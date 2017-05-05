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
	 * @param {object} props
	 * @constructor
	 */
	constructor(props) {
		super();

		this.state = props;
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
				className={'Message ' + this.state.direction}
				onMouseOver={function() {
					this.showOptions(true);
				}.bind(this)}
				onMouseOut={function() {
					this.showOptions(false);
				}.bind(this)}
			>
				{this.props.text}
				<MessageOptions showOptions={this.state.showOptions} index={this.props.index} direction={this.state.direction} />
			</div>
		);
	}
}

Message.propTypes = {
	direction: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};

export default Message;
