import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader";
import { editTag, getTagById } from "../../services/api/TagService";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import TagForm, { TagFormInputs } from "./TagForm";
import { useEffect, useState } from "react";
import ToastNotification from "../../components/toastNotification";
import CustomBreadcrumbs from "../../components/customBreadcrumbs";


const EditTag = () => {
  const navigate = useNavigate();
  const {showErrorToast, showSuccessToast} = useNotification();
  const { id } = useParams(); 
  const [data, setData] = useState<TagFormInputs>();

  useEffect(() => {
    if (id !== undefined) {
      handleFetchData(id)
    }
  }, [id]);

  const handleFetchData = async (id: string) => {
    const result = await getTagById(id)
    setData(result.data)
  }
  

  const onSubmit = async (data: TagFormInputs) => {

    const {name, slug, _id} = data;
    const result = await editTag(_id ?? '', {
      name, slug
    });

    if(result.success) {
      setTimeout(() => {
        navigate("/admin/tag", { state: { showSuccess: true } });
      }, 2000);
      showSuccessToast(result.message);
    } else {
      showErrorToast(result.message)
    }
  }

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
      <Col sm={7} xs={true} className="pt-5 mx-auto">
      <Card>
        <Card.Header><PageHeader title={"Edit Tag"} isDark={true}/></Card.Header>
        <Card.Body>
          <TagForm onSubmit={onSubmit} initialValues={data} />
        </Card.Body>
      </Card>
      </Col>
      </Row>
    </Container>
    <ToastNotification />
    </>
  );
};

export default EditTag;

