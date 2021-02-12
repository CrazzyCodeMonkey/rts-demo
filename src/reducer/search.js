//Define the default state for this reducer
const defaultState = {
	current: "",
	queries: [],
	isSearching: false
};

//Define the Reducer
const reducer = (state = defaultState, { type, payload }) => {
	switch (type) {
		case "SEARCH@@ADDTERM":
			return {
				...state,
				current: payload,
				queries: (state.current === '' || payload === state.current ? state.queries : [state.current, ...state.queries]),
			}
		case "SEARCH@@START":
			return {
				...state,
				isSearching: true,
			}
		case "SEARCH@@STOP":
			return {
				...state,
				isSearching: false,
			}
		default:
			return state;
	}
}

//Export the reducer for use
export default reducer;