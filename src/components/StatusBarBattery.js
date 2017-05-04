import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StatusBarBattery.css';

/**
 * StatusBarBattery
 *
 * @class
 */
class StatusBarBattery extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		let batteryIconClass;

		if (this.props.percent > 80) {
			batteryIconClass = 'full';
		}
		else if (this.props.percent > 60) {
			batteryIconClass = 'high';
		}
		else if (this.props.percent > 40) {
			batteryIconClass = 'medium';
		}
		else if (this.props.percent > 15) {
			batteryIconClass = 'low';
		}
		else {
			batteryIconClass = 'empty';
		}

		return (
			<div className="StatusBarBattery">
				<div className="battery-text">{this.props.percent}%</div>
				<div className={'battery-icon ' + batteryIconClass}></div>
			</div>
		);
	}
}

StatusBarBattery.propTypes = {
	percent: PropTypes.number.isRequired,
};

export default StatusBarBattery;
