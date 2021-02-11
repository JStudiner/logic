import { bindActionCreators, combineReducers } from 'redux';

const initialState = { grid: [], rocketLoc: { x: 0, y: 0 }, cols: 0, rows: 0 };

const gridReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'MOVE':
			console.log(action.payload);
			const move = action.payload[0];
			const rx = state.rocketLoc.x;
			const ry = state.rocketLoc.y;
			const rows = state.rows;
			const cols = state.cols;
			const grid = state.grid;

			switch (action.payload) {
				case 0:
					break;
				case 1:
					if (ry === rows - 1) {
						console.log("can't move");
					} else if (grid[ry + 1][rx].value === 2) {
						console.log('crashed');
					} else {
						state = {
							...state,
							grid: state.grid.map((row, rowId) => {
								if (rowId === ry + 1) {
									return row.map((node, nodeId) => {
										if (nodeId === rx) {
											return { ...node, value: 1 };
										}
										return node;
									});
								} else if (rowId === ry) {
									return row.map((node, nodeId) => {
										if (nodeId === rx) {
											return { ...node, value: 0 };
										}
										return node;
									});
								}
								return row;
							}),
						};
						state = {
							...state,
							rocketLoc: { ...state.rocketLoc, y: ry + 1 },
						};
					}
					break;
				case 2:
					if (ry === 0) {
						console.log("can't move");
					} else if (grid[ry - 1][rx].value === 2) {
						console.log('crashed');
					} else {
						state = {
							...state,
							grid: state.grid.map((row, rowId) => {
								if (rowId === ry - 1) {
									return row.map((node, nodeId) => {
										if (nodeId === rx) {
											return { ...node, value: 1 };
										}
										return node;
									});
								} else if (rowId === ry) {
									return row.map((node, nodeId) => {
										if (nodeId === rx) {
											return { ...node, value: 0 };
										}
										return node;
									});
								}
								return row;
							}),
						};
						state = {
							...state,
							rocketLoc: { ...state.rocketLoc, y: ry - 1 },
						};
					}
					break;
				case 3:
					if (rx === 0) {
						console.log("can't move");
					} else if (grid[ry][rx - 1].value === 2) {
						console.log('crashed');
					} else {
						state = {
							...state,
							grid: state.grid.map((row, rowId) => {
								if (rowId === ry) {
									return row.map((node, nodeId) => {
										if (nodeId === rx - 1) {
											return { ...node, value: 1 };
										} else if (nodeId === rx) {
											return { ...node, value: 0 };
										}
										return node;
									});
								}
								return row;
							}),
						};
						state = {
							...state,
							rocketLoc: { ...state.rocketLoc, x: rx - 1 },
						};
					}
					break;
				case 4:
					if (rx === cols - 1) {
						console.log("can't move");
					} else if (grid[ry][rx + 1].value === 2) {
						console.log('crashed');
					} else {
						state = {
							...state,
							grid: state.grid.map((row, rowId) => {
								if (rowId === ry) {
									return row.map((node, nodeId) => {
										if (nodeId === rx + 1) {
											return { ...node, value: 1 };
										} else if (nodeId === rx) {
											return { ...node, value: 0 };
										}
										return node;
									});
								}
								return row;
							}),
						};
						state = {
							...state,
							rocketLoc: { ...state.rocketLoc, x: rx + 1 },
						};
					}
					break;
				default:
					return { ...state };
			}

			return state;
		case 'INITIAL':
			return {
				...state,
				grid: action.grid,
				cols: action.cols,
				rows: action.rows,
			};
		case 'CHANGE':
			const { wow, x, y } = action.payload;
			return {
				...state,
				grid: state.grid.map((row, rowId) => {
					if (rowId === y) {
						return row.map((node, nodeId) => {
							if (nodeId === x) {
								return { ...node, value: wow };
							}
							return node;
						});
					}
					return row;
				}),
			};

		default:
			return state;
	}
};
export default gridReducer;
/*
let { x, y } = action.payload;
const newObj = { type: 0 };
return [
    ...state.slice(0, x),
    { ...state[x], newObj },
    ...state.slice(x + 1),
];
*/
