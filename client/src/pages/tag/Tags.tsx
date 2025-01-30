import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageHeader from "../../components/pageHeader";
import TableContent from "../../components/tableContent";
import CustomBreadcrumbs from "../../components/customBreadcrumbs";
import ToastNotification from "../../components/toastNotification";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTag, getTags } from "../../services/api/TagService";
import useNotification from "../../hooks/useNotification";

const Tags = () => {
  const navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useNotification();
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const columns = useMemo<Record<string, unknown>[]>(() => [{
    label: 'Slug',
    key: 'slug'
  }, {
    label: 'Tag name',
    key: 'name'
  }], []);

  const handleEdit = (id: string | number) => {
    navigate(`/admin/tag/edit/${id}`)
  }

  const handleDelete = async (id: string | number) => {
    const result = await deleteTag(id.toString());

    if(result.success) {
      showSuccessToast(result.message);
      fetchTags();
    } else {
      showErrorToast(result.message)
    }
  }

  const fetchTags = async () => {
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
      <Container fluid>
        <Row>
            <Col className="mt-4">
              <CustomBreadcrumbs />
            </Col>
          </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={8} xs={true} className="pt-5 mx-auto">
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
                  editBtnConfig={{
                    handleEdit: handleEdit
                  }}
                  deleteBtnConfig={{
                    title: 'Delete Tag',
                    message: 'Are you sure you want to delete this?',
                    label: 'Delete',
                    handleDelete: handleDelete
                  }}
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
