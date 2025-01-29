import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageHeader from "../../components/pageHeader";
import TableContent from "../../components/tableContent";
import ToastNotification from "../../components/toastNotification";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTags } from "../../services/api/TagService";

const Tags = () => {

  const [data, setData] = useState<Record<string, never>[]>([]);
  const navigate = useNavigate();
  const columns = useMemo<string[]>(() => [
      'name',
      'description',
    ], []);

  const handleEdit = (id: string | number) => {
    navigate(`/admin/tag/edit/${id}`)
  }

  const handleDelete = async (id: string | number) => {
    console.log(id)
    // const result = await deleteGenre(id.toString());

    // if(result.success) {
    //   showSuccessToast(result.message);
    //   fetchGenres();
    // } else {
    //   showErrorToast(result.message)
    // }
  }

  const fetchTags = async () => {
    console.log(111)
    const genres = await getTags();
    if(genres.success) {
      setData(genres.data)
    }
  }

  useEffect(() => {
    fetchTags()
  }, []);
  


  return (
    <>
      <Container>
      <Row>
        <Col xs={8} className="pt-5 mx-auto">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between mb-2">
                <PageHeader title="Tags list" isDark={true} /> <Button variant="success" type="button" onClick={() => navigate('/admin/tag/add')}>Add</Button>
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

export default Tags;
