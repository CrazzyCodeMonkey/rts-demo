const defaultState = {
	hits: [],
	page: 0,
	nbPages: 0,
	pageSize: 20
}

const reducer = (state = defaultState, { type, payload }) => {
	switch (type) {
		case 'RESULT@@SET':
			return {
				...state,
				hits: payload.hits,
				page: payload.page,
				nbPages: payload.nbPages,
			};
		default:
			return state;
	}
}

export default reducer;