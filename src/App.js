import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MessageThreadContainer from './containers/MessageThreadContainer';

import * as MessageActions from './actions/message';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact path='/' render={() => <MessageThreadContainer {...this.props} />} />
						<Route path='/messages/:messageId' render={(route) => <MessageThreadContainer {...this.props} match={route.match} />} />
					</div>
				</Router>
			</div>
		);
	}
}

App.propTypes = {
	messages: PropTypes.array.isRequired,
	messageDirection: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => (
	{
		...state,
	}
);

const mapDispatchToProps = dispatch => (
	{
		actions: bindActionCreators(MessageActions, dispatch),
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
