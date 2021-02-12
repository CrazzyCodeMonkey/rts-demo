import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

import Result from './Result';

export const Results = ({currentPage, data, isSearching, pageCount, pageSize, searchTerm}) => { 
	return data.length > 0
		? (
			<>
				<h4>Search results for "{searchTerm}"</h4>
				<p>dipslaying {pageSize} results on page {currentPage+1} of {pageCount}.</p>
			<ul>
				{data.map(hit => {
					return (
						<li key={hit.objectID}><Result {...hit} /></li>
					);
				})}
				</ul>
				</>
		) : isSearching
			? (<Spinner color="primary" />)
			: (<p>No results to display</p>);
		
}

Results.propTypes = {
	currentPage: PropTypes.number,
	data: PropTypes.arrayOf(PropTypes.shape({
		author: PropTypes.string,
		created_at: PropTypes.string,
		title: PropTypes.string,
		url: PropTypes.string,
	})),
	isSearching: PropTypes.bool,
	pageCount: PropTypes.number,
	pageSize: PropTypes.number,
	searchTerm: PropTypes.string,
};

Results.defaultProps = {
	currentPage: 0,
	data: [],
	isSearching: false,
	pageCount: 0,
	pageSize: 0,
	searchTerm: 0,
}

export const mpaStateToProps = (state, ownProps) => ({
	currentPage: state.results.page, 
	data: state.results.hits,
	isSearching: state.search.isSearching,
	pageCount: state.results.nbPages,
	pageSize: state.results.pageSize,
	searchTerm: state.search.current,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
	
});

export default connect(mpaStateToProps, mapDispatchToProps)(Results);