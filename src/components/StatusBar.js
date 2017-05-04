import React, { Component } from 'react';

import StatusBarAntenna from './StatusBarAntenna';
import StatusBarBattery from './StatusBarBattery';

import './StatusBar.css';

/**
 * StatusBar
 *
 * @class
 */
class StatusBar extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className="StatusBar">
				<div className="status-bar-left">
					<StatusBarAntenna strength={3} />
					<div className="provider">AT&T</div>
					<div className="wifi"></div>
				</div>
				<div className="status-bar-right">
					<div className="location"></div>
					<div className="bluetooth"></div>
					<StatusBarBattery percent={78} />
				</div>
				<div className="status-bar-center">
					1:14 PM
				</div>
			</div>
		);
	}
}

export default StatusBar;
