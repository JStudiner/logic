import React from 'react';
import './Box.css';
import rocket from '../images/rocket.png';
import asteroid from '../images/asteroid.png';
import earth from '../images/earth.png';
import { connect } from 'react-redux';
import { changeType } from '../actions';
class Box extends React.Component {
	renderContent() {
		switch (this.props.grid[this.props.y][this.props.x].value) {
			case 0:
				return;
			case 1:
				return <img alt="!" className="image" src={rocket}></img>;
			case 2:
				return <img className="image" src={asteroid} alt="!"></img>;
			case 3:
				return <img className="image" src={earth} alt="!"></img>;
			default:
				return;
		}
	}
	componentDidMount() {}

	render() {
		return <div className="outline1">{this.renderContent()}</div>;
	}
}
const mapStateToProps = (state) => {
	return {
		grid: state.map.grid,
		rx: state.map.rocketLoc.x,
		ry: state.map.rocketLoc.y,
	};
};
export default connect(mapStateToProps, { changeType })(Box);
