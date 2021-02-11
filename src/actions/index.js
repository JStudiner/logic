export const createGrid = (nodes, row, col) => {
	return {
		type: 'INITIAL',
		grid: nodes,
		rows: row,
		cols: col,
	};
};

export const changeType = (wow, x, y) => {
	return {
		type: 'CHANGE',
		payload: {
			wow,
			x,
			y,
		},
	};
};
export const pickup = (value) => {
	return {
		type: 'PICKUP',
		payload: value,
	};
};
export const reset = () => {
	return {
		type: 'RESET',
	};
};
export const move = (code) => {
	return {
		type: 'MOVE',
		payload: code,
	};
};
export const cancelDrag = () => {
	return { type: 'CANCEL' };
};
export const drop = (value, id) => {
	return {
		type: 'DROP',
		id,
		value,
	};
};
export const restart = () => {
	return { type: 'RESTART' };
};
