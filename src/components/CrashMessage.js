import Modal from '../Modal';
import React from 'react';
import explosion from '../images/explosion.jpg';
import './Box.css';
import { restart } from '../actions';
import { connect } from 'react-redux';
class CrashMessage extends React.Component {
	sleep = (time) => {
		return new Promise((resolve) => setTimeout(resolve, time));
	};
	handleRestart = async () => {
		await this.sleep(500);
		this.props.restart();
	};
	renderButton() {
		return (
			<>
				<button
					onClick={() => this.handleRestart()}
					className="ui button negative">
					Restart
				</button>
			</>
		);
	}
	renderContent() {
		return (
			<div className="crash-message">
				<img className="explosion" alt="!" src={explosion}></img>
				<p>Press the Reset Button to Try Again!</p>
			</div>
		);
	}
	render() {
		return (
			<Modal
				title="You Crashed!"
				content={this.renderContent()}
				actions={this.renderButton()}></Modal>
		);
	}
}
export default connect(null, { restart })(CrashMessage);
