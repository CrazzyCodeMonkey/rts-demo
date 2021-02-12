import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import PropTypes from 'prop-types';

const Page = ({ title, children }) => { 	
	return (
		<Container>
			<Navbar color="light" light>
				<NavbarBrand href="/">{title}</NavbarBrand>
			</Navbar>
			{children}
		</Container>
	);
}

Page.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

Page.defaultProps = {
	title: '',
};

export default Page;