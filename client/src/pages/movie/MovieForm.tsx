import { useForm, setError } from "react-hook-form";
import { Button, Col, Form, Row } from "react-bootstrap";

export type MovieFormInputs = {
  _id?: string,
  file: FileList,
  title: string,
  releaseDate: string,
  duration: string,
  description?: string
}

type MovieFormProps = {
  initialValues?: MovieFormInputs;
  onSubmit: (data: MovieFormInputs) => void;
  fileError: string | null;
}

const MovieForm: React.FC<MovieFormProps> = ({onSubmit, initialValues}) => {

 const { register, handleSubmit, formState: { errors }, reset } = useForm<MovieFormInputs>();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="position-relative mb-3">
        <Form.Label>File</Form.Label>
        <Form.Control
          {...register("file")}
          type="file"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="title" {...register("title", { required: "This field is required"})}/>
        {errors.title && (
            <Form.Text className="text-danger">
            {errors.title.message}
            </Form.Text>
        )}
      </Form.Group>
      <Row>
        <Form.Group className="mb-3" as={Col} md="6" controlId="formBasicReleaseDate">
          <Form.Label>Release Date</Form.Label>
          <Form.Control type="releaseDate" {...register("releaseDate", { required: "This field is required"})}/>
          {errors.releaseDate && (
              <Form.Text className="text-danger">
              {errors.releaseDate.message}
              </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" as={Col} md="6" controlId="formBasicDuration">
          <Form.Label>Duration</Form.Label>
          <Form.Control type="duration" {...register("duration", { required: "This field is required"})}/>
          {errors.duration && (
              <Form.Text className="text-danger">
              {errors.duration.message}
              </Form.Text>
          )}
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label >Description</Form.Label>
        <Form.Control type="description" as="textarea" style={{ height: '100px' }} {...register("description")}/>
      </Form.Group>

      <div className="d-flex justify-content-md-end">
        <Button variant="primary" type="submit" className="d-block float-right">
          Create
        </Button>
      </div>
    </Form>
  );
};

export default MovieForm;
