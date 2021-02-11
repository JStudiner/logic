import './CommandBay.css';
import React from 'react';
import { connect } from 'react-redux';
import { pickup, drop, cancelDrag, reset, move } from '../actions';
class CommandBay extends React.Component {
	handlePick(type) {
		this.props.pickup(type);
	}
	handleDrop(value, id) {
		if (this.props.arrow.isDragged === true) {
			this.props.drop(value, id);
			this.props.cancelDrag();
		}
	}
	sleep = (time) => {
		return new Promise((resolve) => setTimeout(resolve, time));
	};
	async handleGo() {
		await this.sleep(500);
		for (let i = 0; i < 4; i++) {
			this.props.move(this.props.code[i]);
			await this.sleep(500);
		}
	}
	renderArrow(target) {
		switch (target) {
			case 1:
				return (
					<i className="huge arrow alternate circle down outline icon"></i>
				);
			case 2:
				return <i className="huge arrow alternate circle up outline icon"></i>;
			case 3:
				return (
					<i className="huge arrow alternate circle left outline icon"></i>
				);
			case 4:
				return (
					<i className="huge arrow alternate circle right outline icon"></i>
				);
			default:
				return;
		}
	}
	render() {
		return (
			<div className="wrap">
				<div className="codestack">
					<div className="codebox">
						<div className="pic">
							<i className="huge code branch icon"></i>
						</div>
					</div>
					<div className="codebox">
						<div className="pic">
							<i className="huge puzzle piece icon"></i>
						</div>
					</div>
				</div>
				<div className="displaystack">
					<div className="display-box">
						<div
							className={`function-box-drag${
								this.props.code[0] === 0 ? '-open' : ''
							}`}
							onClick={() => this.handleDrop(this.props.arrow.value, 0)}>
							{this.renderArrow(this.props.code[0])}
						</div>
						<div
							className={`function-box-drag${
								this.props.code[1] === 0 ? '-open' : ''
							}`}
							onClick={() => this.handleDrop(this.props.arrow.value, 1)}>
							{this.renderArrow(this.props.code[1])}
						</div>
						<div
							className={`function-box-drag${
								this.props.code[2] === 0 ? '-open' : ''
							}`}
							onClick={() => this.handleDrop(this.props.arrow.value, 2)}>
							{this.renderArrow(this.props.code[2])}
						</div>
						<div
							className={`function-box-drag${
								this.props.code[3] === 0 ? '-open' : ''
							}`}
							onClick={() => this.handleDrop(this.props.arrow.value, 3)}>
							{this.renderArrow(this.props.code[3])}
						</div>
					</div>
					<div className={`arrows-box`}>
						<div className="arrow1" onClick={() => this.handlePick(1)}>
							<i className="huge arrow alternate circle down outline icon"></i>
						</div>

						<div className="arrow1" onClick={() => this.handlePick(2)}>
							<i className="huge arrow alternate circle up outline icon"></i>
						</div>
						<div className="arrow1" onClick={() => this.handlePick(3)}>
							<i className="huge arrow alternate circle left outline icon"></i>
						</div>
						<div className="arrow1" onClick={() => this.handlePick(4)}>
							<i className="huge arrow alternate circle right outline icon"></i>
						</div>
					</div>
				</div>
				<div className="controlstack">
					<div className="go" onClick={() => this.handleGo()}>
						<h3>Go</h3>
					</div>
					<div
						className="reset"
						onClick={() => {
							this.props.reset();
						}}>
						<h3>Reset</h3>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { arrow: state.arrow, code: state.code };
};
export default connect(mapStateToProps, {
	pickup,
	drop,
	cancelDrag,
	reset,
	move,
})(CommandBay);
