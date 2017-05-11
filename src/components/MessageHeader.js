import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MessageHeader.css';

/**
 * MessageHeader
 *
 * @class
 */
class MessageHeader extends Component {
	/**
	 * constructor
	 *
	 * @constructor
	 * @param {object} props
	 */
	constructor(props) {
		super();

		this.state = props;
	}

	/**
	 * componentWillReceiveProps
	 *
	 * @param {object} newProps
	 * @returns {void}
	 */
	componentWillReceiveProps(newProps) {
		this.setState({
			contactName: newProps.contactName,
		});

		this.setContactInitials(newProps.contactName);
	}

	/**
	 * setContactInitials
	 *
	 * @param {string} newContactName
	 * @returns {void}
	 */
	setContactInitials(newContactName) {
		let contactName = (newContactName || this.state.contactName).trim();

		if (contactName === '') {
			this.setState({
				contactNameInitials: '',
			});
		}

		let contactNameSplit = contactName.split(' ');

		if (contactNameSplit.length === 1) {
			this.setState({
				contactNameInitials: contactNameSplit[0][0].toUpperCase(),
			});
		}
		else {
			let contactNameFirstInitial = contactNameSplit[0][0].toUpperCase();
			let contactNameLastInitial = contactNameSplit[contactNameSplit.length - 1][0].toUpperCase();

			this.setState({
				contactNameInitials: contactNameFirstInitial + contactNameLastInitial,
			});
		}
	}

	/**
	 * onContactNameChange
	 *
	 * @param {event} e
	 * @returns {void}
	 */
	onContactNameChange(e) {
		this.setState({
			contactName: e.target.value,
		});

		this.setContactInitials(e.target.value);
	}

	/**
	 * componentDidMount
	 *
	 * @returns {void}
	 */
	componentDidMount() {
		this.setContactInitials();
	}

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className="MessageHeader">
				<div className="back-icon"></div>
				<div className="contact-info">
					<div className="contact-image">
						<span>{this.state.contactNameInitials}</span>
					</div>
					<input
						type="text"
						spellCheck="false"
						className="contact-name"
						value={this.state.contactName}
						onChange={function(e) {
							this.onContactNameChange(e);
						}.bind(this)}
					/>
				</div>
				<div className="info-icon"></div>
			</div>
		);
	}
}

MessageHeader.propTypes = {
	contactName: PropTypes.string.isRequired,
};

export default MessageHeader;
