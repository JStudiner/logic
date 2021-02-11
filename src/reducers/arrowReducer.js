const initialState = {
	picked: { value: 0, isDragged: false, isDropped: false },
};
const arrowReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PICKUP':
			return {
				...state,
				isDragged: true,
				value: action.payload,
			};
		case 'CANCEL':
			return {
				...state,
				isDragged: false,
			};
		default:
			return state;
	}
};
export default arrowReducer;
