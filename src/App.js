import React, { Component } from 'react';

import Header from './components/Header';
import Message from './components/Message';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="messages">
					<Message direction="received" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="sent" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="received" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="sent" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="received" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="sent" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="received" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="sent" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="received" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="sent" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="received" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="sent" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="received" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="sent" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="received" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
					<Message direction="sent" text="Hello World Hello World Hello World Hello World Hello World Hello World Hello World" />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
