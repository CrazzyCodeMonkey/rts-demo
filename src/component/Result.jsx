import PropTypes from 'prop-types';

const Result = ({ author, created_at, title, url }) => {
	const dt = new Date(created_at).toLocaleDateString('en-US', {
		day: 'numeric', month: 'short', year: 'numeric'
	});

	return (
		<article>
			<h5>
				<a href={url} target="_blank">
					{title ? title : 'Untitled Article'}
				</a>
			</h5>
			<p>Written by: {author} on {dt}</p>
		</article>
	)
};

Result.propTypes = {
	author: PropTypes.string,
	created_at: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
}

Result.defaultProps = {
	author: '',
	created_at: '',
	title: '',
	url: '',
}

export default Result;