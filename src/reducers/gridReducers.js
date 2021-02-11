let initialState = {
	grid: [],
	rocketLoc: { x: 0, y: 0 },
	cols: 0,
	rows: 0,
	crashed: false,
	home: false,
};

const gridReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'MOVE':
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
					} else if (grid[ry + 1][rx].value === 2) {
						return { ...state, crashed: true };
					} else if (grid[ry + 1][rx].value === 3) {
						return { ...state, home: true };
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
					} else if (grid[ry - 1][rx].value === 2) {
						return { ...state, crashed: true };
					} else if (grid[ry - 1][rx].value === 3) {
						return { ...state, home: true };
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
					} else if (grid[ry][rx - 1].value === 2) {
						return { ...state, crashed: true };
					} else if (grid[ry][rx - 1].value === 3) {
						return { ...state, home: true };
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
					} else if (grid[ry][rx + 1].value === 2) {
						return { ...state, crashed: true };
					} else if (grid[ry][rx + 1].value === 3) {
						return { ...state, home: true };
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
		case 'RESTART':
			return initialState;
		case 'INITIAL':
			state = {
				...state,
				grid: action.grid,
				cols: action.cols,
				rows: action.rows,
			};
			initialState = state;
			return state;
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
