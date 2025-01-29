import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageHeader from '../../components/pageHeader'
import TableContent from '../../components/tableContent'
import { useEffect, useMemo, useState } from "react";
import { deleteGenre, getGenres } from "../../services/api/GenreService";
import { useNavigate } from "react-router-dom";
import ToastNotification from "../../components/toastNotification";
import useToastNotification from "../../hooks/useNotification"

const Genre = () => {
  const { showSuccessToast, showErrorToast } = useToastNotification();
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const navigate = useNavigate();
  const columns = useMemo<Record<string, unknown>[]>(() => [{
    label: 'Desc',
    key: 'description'
  }, {
    label: 'Name',
    key: 'name'
  }], []);


  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    const genres = await getGenres();
    if(genres.success) {
      setData(genres.data)
    }
  }

  const handleEdit = (id: string | number) => {
    navigate(`/admin/genre/edit/${id}`)
  }

  const handleDelete = async (id: string | number) => {
    const result = await deleteGenre(id.toString());

    if(result.success) {
      showSuccessToast(result.message);
      fetchGenres();
    } else {
      showErrorToast(result.message)
    }
  }

  return (
    <>
  <Container>
    <Row>
      <Col sm={8} xs={true} className="pt-5 mx-auto">
        <Card>
          <Card.Header>
            <div className="d-flex justify-content-between mb-2">
              <PageHeader title="Genre list" isDark={true} /> <Button variant="success" type="button" onClick={() => navigate('/admin/genre/add')}>Add</Button>
            </div>
          </Card.Header>
          <Card.Body>
            <TableContent 
              data={data} 
              header={columns} 
              showAction={true}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  <ToastNotification />
  </>
  );
};

export default Genre;

