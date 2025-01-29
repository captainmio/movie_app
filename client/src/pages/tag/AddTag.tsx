import { Container, Row, Col, Card } from "react-bootstrap";
import PageHeader from "../../components/pageHeader";
import ToastNotification from "../../components/toastNotification";
import TagForm, { TagFormInputs } from "./TagForm";
import { useNavigate } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import { addTag } from "../../services/api/TagService";

const AddTag = () => {
  const navigate = useNavigate();
  const {showErrorToast, showSuccessToast} = useNotification();
  
  const onSubmit = async (data: TagFormInputs) => {
    const result = await addTag(data);
    
    if(result.success) {
      setTimeout(() => {
        navigate("/admin/genre", { state: { showSuccess: true } });
      }, 2000);
      showSuccessToast(result.message);
    } else {
      showErrorToast(result.message)
    }
  }

  return (
    <>
    <Container>
    <Row>
      <Col sm={7} xs={true} className="pt-5 mx-auto">
      <Card>
        <Card.Header><PageHeader title={"Add Tag"} isDark={true}/></Card.Header>
        <Card.Body>
          <TagForm onSubmit={onSubmit} />
        </Card.Body>
      </Card>
      </Col>
      </Row>
    </Container>
    <ToastNotification />
    </>
  );
};

export default AddTag;
