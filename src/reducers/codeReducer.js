const initialState = [0, 0, 0, 0];
export const CodeReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DROP':
			return state.map((item, ind) => {
				if (action.id === ind) return action.value;
				return item;
			});
		case 'RESET':
			return initialState;
		default:
			return state;
	}
};
export default CodeReducer;
