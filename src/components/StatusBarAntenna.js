import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StatusBarAntenna.css';

/**
 * StatusBarAntenna
 *
 * @class
 */
class StatusBarAntenna extends Component {
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
	 * updateStrength
	 *
	 * @param {number} strength
	 * @returns {void}
	 */
	updateStrength(strength) {
		this.setState({
			strength: strength,
		});
	}

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		const antennaCircles = [1, 2, 3, 4, 5].map((strength) => {
			return (
				<div
					key={strength}
					data-strength={strength}
					className={(this.state.strength >= strength) ? 'full' : ''}
					onClick={function(e) {
						this.updateStrength(e.target.dataset.strength);
					}.bind(this)}
				></div>
			);
		});

		return (
			<div className="StatusBarAntenna">
				{antennaCircles}
			</div>
		);
	}
}

StatusBarAntenna.propTypes = {
	strength: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
};

export default StatusBarAntenna;
