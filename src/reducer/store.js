import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import search from './search';
import results from './results';

export const store = {
	search,
	results,
}

export default createStore(
	combineReducers(store),
	applyMiddleware(thunk)
);