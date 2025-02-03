import Sidemenu from "../components/sidemenu";
import {Routes, Route, Outlet} from 'react-router-dom';
import Tags from "./tag/Tags";
import Genre from "./genre/Genre";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddGenre from "./genre/AddGenre";
import EditGenre from "./genre/EditGenre";
import AddTag from "./tag/AddTag";
import EditTag from "./tag/EditTag";
import Movie from "./movie/Movie";
import AddMovie from "./movie/AddMovie";


const Dashboard = () => {
  return (<>
    <Container fluid className="p-0">
      <Row className="w-100 d-flex align-items-stretch">
        <Col xl={2} lg={3} md={3} sm={3} xs={2} className="col-stretch">
          <aside className="sidebar">
            <Sidemenu />
          </aside>
        </Col>
        <Col xl={10} lg={9} md={9} sm={9} xs={10} className="col-stretch">
        <main className="main-content">
          <Routes>
            {/* Tag router */}
            <Route path='/tag'>
              <Route index element={<Tags />} />
              <Route path="add" element={<AddTag />} />
              <Route path="edit/:id" element={<EditTag />} />
            </Route>

            {/* Genre router */}
            <Route path="/genre">
              <Route index element={<Genre />} />
              <Route path="add" element={<AddGenre />} />
              <Route path="edit/:id" element={<EditGenre />} />
            </Route>

            {/* Movie router */}
            <Route path='/movie'>
              <Route index element={<Movie />} />
              <Route path="add" element={<AddMovie />} />
            </Route>

          </Routes>
          <Outlet />
        </main>
        </Col>
      </Row>
    </Container>
  
 
  </>);
};

export default Dashboard;
