import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageHeader from '../../components/pageHeader'
import TableContent from '../../components/tableContent'
import { useEffect, useMemo, useState } from "react";
import { getGenres } from "../../services/api/genre";
import { useNavigate } from "react-router-dom";

const Genre = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const columns = useMemo<string[]>(() => [
    'id',
    'name',
    'description',
  ], []);


  useEffect(() => {
    getDate();
  }, []);

  const getDate = async () => {
    const genres = await getGenres();
    if(genres.success) {
      setData(genres.data)
    }
  }
  

  return <Container>
    <Row>
      <Col xs={8} className="pt-5 mx-auto">
        <Card>
          <Card.Header>
            <div className="d-flex justify-content-between mb-2">
              <PageHeader title="Genre list" isDark={true} /> <Button variant="primary" type="button" onClick={() => navigate('/admin/genre/add')}>Add</Button>
            </div>
          </Card.Header>
          <Card.Body>
            <TableContent data={data} header={columns}/>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>;
};

export default Genre;
