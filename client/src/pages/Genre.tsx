import { Container, Row, Col, Card } from "react-bootstrap";
import PageHeader from '../components/pageHeader'
import { useEffect } from "react";
import { getGenres } from "../services/api/genre";

const Genre = () => {

  useEffect(() => {
    getGenres();
  }, []);
  

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
