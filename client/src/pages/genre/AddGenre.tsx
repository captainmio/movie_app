import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader";
import { useForm } from "react-hook-form";
import { addGenre } from "../../services/api/genre";
import { useNavigate } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import ToastNotification from "../../components/toastNotification";

export type AddGenreFormInputs = {
  name: string,
  description?: string
}

const AddGenre = () => {
  const navigate = useNavigate();
  const {showErrorToast, showSuccessToast} = useNotification();
  const { register, handleSubmit, formState: { errors } } = useForm<AddGenreFormInputs>();

  const onSubmit = async (data: AddGenreFormInputs) => {
    const result = await addGenre(data);

    if(result.success) {
      showSuccessToast(result.message);
      localStorage.setItem('token', result.data);
      setTimeout(() => {
        navigate("/admin/genre");
      }, 1000);
    } else {
      showErrorToast(result.message)
    }
  }

  return (
    <>
    <Container>
    <Row>
      <Col xs={12} className="pt-5 mx-auto">
      <Card>
        <Card.Header><PageHeader title={"Add Genre"} isDark={true}/></Card.Header>
        <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" {...register("name", { required: "This field is required"})}/>
            {errors.name && (
                <Form.Text className="text-danger">
                {errors.name.message}
                </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label >Description</Form.Label>
            <Form.Control type="description" as="textarea" style={{ height: '100px' }} {...register("description")}/>
          </Form.Group>

          <div className="d-flex justify-content-md-end">
            <Button variant="primary" type="submit" className="d-block float-right">
              Submit
            </Button>
          </div>
        </Form>
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
function showSuccessToast(message: any) {
  throw new Error("Function not implemented.");
}

function showErrorToast(message: any) {
  throw new Error("Function not implemented.");
}

