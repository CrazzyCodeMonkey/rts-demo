import { Row, Col, Button, Form, Label, Input } from 'reactstrap';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { search } from '../action/search';

export const SearchBar = ({ isSearching, onSearch, searchTerm }) => {
	const [query, updateQuery] = useState(searchTerm);
	const onChangeQuery = event => updateQuery(event.target.value);
	const onSubmit = (event)=>{ 
		event.preventDefault();
		onSearch(query,0)
	}
	
	return (
		<Form onSubmit={onSubmit}>
			<Row>
				<Col sm="2">
					<Label for="query">Search</Label>
				</Col>
				<Col sm="8" md="6">
					<Input type="text" name="query" id="query" placeholder="Search" value={query} onChange={onChangeQuery} />
				</Col>
				<Col sm="2" md="4">
					<Button type="submit" color="primary" disabled={isSearching}>Search</Button>
					{isSearching}
				</Col>
			</Row>
		</Form>
	);
};

SearchBar.propTypes = {
	isSearching: PropTypes.bool,
	onSearch: PropTypes.func.isRequired,
	searchTerm: PropTypes.string,
};

SearchBar.defaultProps = {
	isSearching: false,
	searchTerm: '',
};

export const mpaStateToProps = (state, ownProps) => {
	return ({
		isSearching: state.search.isSearching,
		searchTerm: state.search.current
	});
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
	onSearch:(term, page)=>dispatch(search(term,page)),
});

export default connect(mpaStateToProps, mapDispatchToProps)(SearchBar);