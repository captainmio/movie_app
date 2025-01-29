import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export type GenreFormInputs = {
  _id?: string,
  name: string,
  description?: string
}

type GenreFormProps = {
  initialValues?: GenreFormInputs;
  onSubmit: (data: GenreFormInputs) => void;
}

const GenreForm: React.FC<GenreFormProps> = ({onSubmit, initialValues}) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<GenreFormInputs>();

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);
  

  return (<Form onSubmit={handleSubmit(onSubmit)}>
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
</Form>);
};

export default GenreForm;
