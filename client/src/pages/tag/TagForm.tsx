import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export type TagFormInputs = {
  _id?: string,
  name: string,
  slug: string
}

type TagFormProps = {
  initialValues?: TagFormInputs;
  onSubmit: (data: TagFormInputs) => void;
}

const TagForm: React.FC<TagFormProps> = ({onSubmit, initialValues}) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TagFormInputs>();

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

  <Form.Group className="mb-3" controlId="formBasicSlug">
    <Form.Label >Slug</Form.Label>
    <Form.Control type="slug" {...register("slug", { required: "This field is required"})}/>
    {errors.slug && (
        <Form.Text className="text-danger">
        {errors.slug.message}
        </Form.Text>
    )}
  </Form.Group>

  <div className="d-flex justify-content-md-end">
    <Button variant="primary" type="submit" className="d-block float-right">
      Submit
    </Button>
  </div>
</Form>);
};

export default TagForm;
