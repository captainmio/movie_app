import { Container, Row, Col, Card, } from "react-bootstrap";
import CustomBreadcrumbs from "../../components/customBreadcrumbs";
import PageHeader from "../../components/pageHeader";
import MovieForm, { MovieFormInputs } from "./MovieForm";


const AddMovie = () => {
  const onSubmit = async (data: MovieFormInputs) => {
    console.log(data)
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
              <Card.Header><PageHeader title={"Add Movie"} isDark={true}/></Card.Header>
              <Card.Body>
                <MovieForm 
                  onSubmit={onSubmit} 
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddMovie;

