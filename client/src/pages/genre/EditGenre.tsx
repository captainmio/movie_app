import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader";
import { addGenre, editGenre, getGenreById } from "../../services/api/genre";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import GenreForm, { GenreFormInputs } from "./GenreForm";
import { useEffect, useState } from "react";
import ToastNotification from "../../components/toastNotification";


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
    <Container>
    <Row>
      <Col xs={7} className="pt-5 mx-auto">
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

