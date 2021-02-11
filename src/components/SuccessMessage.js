import Modal from '../Modal';
import React from 'react';
import rocketLanding from '../images/rocketLanding.png';
import './Box.css';
import { restart } from '../actions';
import { connect } from 'react-redux';
class SuccessMessage extends React.Component {
	renderButton() {
		return (
			<>
				<button
					onClick={() => {
						this.props.restart();
					}}
					className="ui button positive">
					Reset
				</button>
			</>
		);
	}
	renderContent() {
		return (
			<div className="crash-message">
				<img className="explosion" alt="!" src={rocketLanding}></img>
				<p>Press the Reset To Try a Different Path!</p>
			</div>
		);
	}
	handleReset() {
		this.props.restart();
	}
	render() {
		return (
			<Modal
				title="You Made it"
				content={this.renderContent()}
				actions={this.renderButton()}></Modal>
		);
	}
}
export default connect(null, { restart })(SuccessMessage);
