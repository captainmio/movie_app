import { Container, Row, Col, Card } from "react-bootstrap";
import PageHeader from '../components/pageHeader'

const Genre = () => {
  return <Container>
    <Row>
      <Col xs={8} className="pt-5 mx-auto">
        <Card>
          <Card.Header><PageHeader title="Genre list" isDark={true} /></Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>;
};

export default Genre;
