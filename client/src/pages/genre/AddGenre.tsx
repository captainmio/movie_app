import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader";
import { addGenre } from "../../services/api/GenreService";
import { useNavigate } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import GenreForm, { GenreFormInputs } from "./GenreForm";
import ToastNotification from "../../components/toastNotification";
import CustomBreadcrumbs from "../../components/customBreadcrumbs";


const AddGenre = () => {
  const navigate = useNavigate();
  const {showErrorToast, showSuccessToast} = useNotification();


  const onSubmit = async (data: GenreFormInputs) => {
    const result = await addGenre(data);

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
            <Card.Header><PageHeader title={"Add Genre"} isDark={true}/></Card.Header>
            <Card.Body>
              <GenreForm onSubmit={onSubmit} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <ToastNotification />
    </>
  );
};

export default AddGenre;

