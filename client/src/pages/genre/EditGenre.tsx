import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader";
import { editGenre, getGenreById } from "../../services/api/GenreService";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import GenreForm, { GenreFormInputs } from "./GenreForm";
import { useEffect, useState } from "react";
import ToastNotification from "../../components/toastNotification";
import CustomBreadcrumbs from "../../components/customBreadcrumbs";


const EditGenre = () => {
  const navigate = useNavigate();
  const {showErrorToast, showSuccessToast} = useNotification();
  const { id } = useParams(); 
  const [data, setData] = useState<GenreFormInputs>();

  useEffect(() => {
    if (id !== undefined) {
      handleFetchData(id)
    }
  }, [id]);

  const handleFetchData = async (id: string) => {
    const result = await getGenreById(id)
    setData(result.data)
  }
  

  const onSubmit = async (data: GenreFormInputs) => {

    const {name, description, _id} = data;
    const result = await editGenre(_id ?? '', {
      name, description
    });

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
            <Card.Header><PageHeader title={"Edit Genre"} isDark={true}/></Card.Header>
            <Card.Body>
              <GenreForm onSubmit={onSubmit} initialValues={data} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <ToastNotification />
    </>
  );
};

export default EditGenre;

