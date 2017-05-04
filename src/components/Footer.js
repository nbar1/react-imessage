import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DirectionButton from './DirectionButton';
import MessageInput from './MessageInput';

import * as MessageActionCreators from '../actions/message';

import './Footer.css';

/**
 * Footer
 *
 * @class
 */
class Footer extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		const dispatch = this.props.dispatch;
		const addMessage = bindActionCreators(MessageActionCreators.addMessage, dispatch);
		const setMessageDirection = bindActionCreators(MessageActionCreators.setMessageDirection, dispatch);

		return (
			<div className="Footer">
				<DirectionButton setMessageDirection={setMessageDirection} />
				<MessageInput addMessage={addMessage} direction={this.props.messageDirection} />
			</div>
		);
	}
}

Footer.propTypes = {
	dispatch: PropTypes.func.isRequired,
	messageDirection: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
	{
		messageDirection: state.messageDirection,
	}
);

export default connect(mapStateToProps)(Footer);
