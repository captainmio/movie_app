import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { FaPlus } from "react-icons/fa";

import CustomBreadcrumbs from "../../components/customBreadcrumbs";
import TableContent from "../../components/tableContent";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const navigate = useNavigate();
   const [data, setData] = useState<Record<string, unknown>[]>([]);
   const columns = useMemo<Record<string, unknown>[]>(() => [{
      label: '#',
      key: 'id'
    },
    {
      label: 'Thumbnail',
      key: 'thumbnail'
    },
    {
      label: 'Name',
      key: 'name'
    },
    {
      label: 'Description',
      key: 'description'
    },
  ], []);
  

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
        <Row className="pt-5">
          <Col xl={6} >
            <Button variant="success" onClick={() => navigate('/admin/movie/add')}>
              <FaPlus /> Add Movie
            </Button>
          </Col>
          <Col xl={6}>
            <Form className="d-flex"> {/* Use d-flex for side-by-side elements */}
              <Form.Control 
                type="text"
                placeholder="Search..."
                className="me-2" // Add margin to separate input and button
              />
              <Button variant="primary">Search</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xl={12} className="pt-4">
            <TableContent
              hover
              striped
              variant="dark"
              data={data} 
              header={columns} 
              showAction={true}
              editBtnConfig={{
                handleEdit: () => console.log('Editing movie')
              }}
              deleteBtnConfig={{
                title: 'Delete Genre',
                message: 'Are you sure you want to delete this?',
                label: 'Delete',
                handleDelete: () => console.log('deleting movie')
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Movie;
