import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { connect } from 'react-redux';

import { search } from '../action/search';

export const PaginationBar = ({ currentPage, lastPage, searchTerm, onSearch }) => {
	const spread = 10;
	const pagStart = (currentPage - spread >= 0 ? currentPage - spread : 0) + 1;
	const pagEnd = (currentPage + spread <= lastPage ? currentPage + spread : lastPage);
	const pages = [];

	for (let i = pagStart; i <= pagEnd; i++) {
		pages.push(i);
	}

	return lastPage <= 0 ? (<></>) : (
		<Pagination aria-label="RTG Pagination">
			{pagStart > 1
				? (
					<>
						<PaginationItem  key={`page0`}>
							<PaginationLink first onClick={() =>onSearch(searchTerm, 0)} >
								1
							</PaginationLink>
						</PaginationItem>
						<PaginationItem key="spacerstart">...</PaginationItem>
					</>
				) : null}
			{pages.map((pg) => {
				return (
					<PaginationItem active={pg-1 === currentPage} key={`page${pg}`}>
						<PaginationLink onClick={() =>onSearch(searchTerm, pg-1)} >
							{pg}
						</PaginationLink>
					</PaginationItem>
				)
			})}
			{pagEnd < lastPage
				? (
					<>
						<PaginationItem key="spacerEnd">...</PaginationItem>
						<PaginationItem key={`page${lastPage-1}`}>
							<PaginationLink last onClick={() =>onSearch(searchTerm, lastPage-1)} >
								{lastPage}
							</PaginationLink>
						</PaginationItem>
					</>
				) : null}
		</Pagination>
	)
};

PaginationBar.propTypes = {
	currentPage: PropTypes.number,
	lastPage: PropTypes.number,
	searchTerm: PropTypes.string,
	onSearch: PropTypes.func.isRequired,
}

PaginationBar.defaultProps = {
	currentPage: 0,
	lastPage: 0,
	searchTerm: '',
}

export const mapStateToProps = (state, ownProps) => ({
	currentPage: state.results.page,
	lastPage: state.results.nbPages,
	searchTerm: state.search.current,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
	onSearch:(term,page)=>dispatch(search(term,page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationBar)