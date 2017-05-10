import React, { Component } from 'react';
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
						<Route exact path='/' render={() => <MessageHeader contactName="John Doe" />} />
						<Route path='/messages' render={() => <div>hello 2</div>} />
					</div>
				</Router>
			</div>
		);
	}
}

export default Header;
