import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StatusBar from './StatusBar';
import MessageHeader from './MessageHeader';

import './Header.css';

/**
 * Header
 *
 * @class
 */
class Header extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className="Header">
				<StatusBar />
				<Router>
					<div>
						<Route exact path='/' render={() => <MessageHeader contactName={this.props.contactName} />} />
					</div>
				</Router>
			</div>
		);
	}
}

Header.propTypes = {
	contactName: PropTypes.string.isRequired,
};

export default Header;
