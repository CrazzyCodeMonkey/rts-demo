import axios from 'axios';

import store from "../reducer/store";

const URL_SEARCH = '/api/v1/search';

/**
 * 
 * @param {string} searchTerm the term to search by
 * @param {number} page the page of the results expected back
 */
export function search(searchTerm, page) {
	store.dispatch({
		type: "SEARCH@@ADDTERM",
		payload: searchTerm
	});
	store.dispatch({
		type: "SEARCH@@START",
	});
	return async (dispatch, getState) => {
		const res = await axios.get(
			URL_SEARCH,
			{
				params: {
					query: searchTerm,
					page: page
				}
			});
		dispatch({
			type: "RESULT@@SET",
			payload: res.data
		});
		dispatch({
			type: "SEARCH@@STOP",
		});
	}
}