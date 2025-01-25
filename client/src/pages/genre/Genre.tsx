import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageHeader from '../../components/pageHeader'
import { useEffect } from "react";
import { getGenres } from "../../services/api/genre";
import { useNavigate } from "react-router-dom";

const Genre = () => {
  
  const navigate = useNavigate();


  useEffect(() => {
    getGenres();
  }, []);
  

  return <Container>
    <Row>
      <Col xs={8} className="pt-5 mx-auto">
        <Card>
          <Card.Header>
            <div className="d-flex justify-content-between mb-2">
              <PageHeader title="Genre list" isDark={true} /> <Button variant="primary" type="button" onClick={() => navigate('/admin/genre/add')}>Add</Button>
            </div>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>;
};

export default Genre;
