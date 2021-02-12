import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const History = ({ terms}) => {
	
	return terms.length > 0
		? (
			<ul>
				{terms.map((term, idx) => (
					<li key={`${term}::${idx}`}>
						{term}
					</li>
				))}
			</ul>
		)
			: (<p>No search history to display.</p>);
};

History.propTypes = {
	terms: PropTypes.arrayOf(PropTypes.string),
};

History.defaultProps = {
	terms: [],
};

export const mpaStateToProps = (state, ownProps) => ({
	terms: state.search.queries
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mpaStateToProps, mapDispatchToProps)(History);