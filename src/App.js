import { Row, Col } from "reactstrap";
import Page from './component/Page';
import SearchBar from './component/SearchBar';
import Results from './component/Results';
import History from './component/History';
import PaginationBar from "./component/PaginationBar";


function App() {
  return (
    <Page title="RTS Demo App">
      <Row>
        <Col>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="8">
          <Results />
        </Col>
        <Col sm="12" md="4">
          <History />
        </Col>
      </Row>
      <Row>
        <Col>
          <PaginationBar />
        </Col>
      </Row>
    </Page>
  );
}

export default App;
