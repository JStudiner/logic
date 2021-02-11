import React from 'react';
import Box from './Box';
import './Box.css';
import './Grid.css';
import { connect } from 'react-redux';
import { createGrid, changeType } from '../actions';
import CrashMessage from './CrashMessage';
import SuccessMessage from './SuccessMessage';
class Grid extends React.Component {
	handleResize = () => {
		if (this.props.active === false) {
			const nodes = [];
			let c = Math.floor((window.innerHeight - 300) / 100);
			let r = Math.floor((window.innerWidth - 100) / 100);

			for (let row = 0; row < c; row++) {
				const currentRow = [];
				for (let col = 0; col < r; col++) {
					if (row === 0 && col === 0) {
						currentRow.push({ value: 1, y: row, x: col });
					} else if (row === c - 1 && col === r - 1) {
						currentRow.push({ value: 3, y: row, x: col });
					} else if (row % 2 === 0 && col % 2 !== 0) {
						currentRow.push({ value: 2, y: row, x: col });
					} else {
						currentRow.push({ value: 0, y: row, x: col });
					}
				}
				nodes.push(currentRow);
			}
			this.props.createGrid(nodes, c, r);
		}
	};
	componentDidMount() {
		this.handleResize();
	}

	render() {
		if (this.props.crashed === true) {
			return <CrashMessage />;
		}
		if (this.props.home === true) {
			return <SuccessMessage />;
		}

		return (
			<div className="container" onKeyDown={this.handleKeyPress}>
				<div className="grid">
					{this.props.grid.map((row, rowIdx) => {
						return (
							<div className="row" key={rowIdx}>
								{this.props.grid[rowIdx].map((node, nodeIdx) => (
									<Box
										key={nodeIdx}
										x={this.props.grid[rowIdx][nodeIdx].x}
										y={this.props.grid[rowIdx][nodeIdx].y}></Box>
								))}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		home: state.map.home,
		crashed: state.map.crashed,
		grid: state.map.grid,
		rx: state.map.rocketLoc.x,
		ry: state.map.rocketLoc.y,
	};
};

export default connect(mapStateToProps, {
	createGrid,
	changeType,
})(Grid);
