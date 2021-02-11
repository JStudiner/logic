import React from 'react';

import Grid from './Grid';
import Header from './Header';
import CommandBay from './CommandBay';
import './Grid.css';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { resizing: false };
	}
	handleClick = (e) => {
		this.setState({ resizing: e });
	};

	render() {
		return (
			<div className="outer">
				<Header handleClick={this.handleClick} />
				<Grid active={this.state.resizing} />
				<CommandBay />
			</div>
		);
	}
}
export default App;
