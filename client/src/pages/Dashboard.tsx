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


const Dashboard = () => {
  return (<>
    <Container fluid className="p-0">
      <Row className="w-100 d-flex align-items-stretch">
        <Col xl={3} lg={4} md={4} sm={4} xs={2} className="col-stretch">
          <aside className="sidebar">
            <Sidemenu />
          </aside>
        </Col>
        <Col xl={9} lg={8} md={8} sm={8} xs={10} className="col-stretch">
        <main className="main-content">
          <Routes>
            <Route path='/tag'>
              <Route index element={<Tags />} />
              <Route path="add" element={<AddTag />} />
            </Route>

            {/* Genre router */}
            <Route path="/genre">
              <Route index element={<Genre />} />
              <Route path="add" element={<AddGenre />} />
              <Route path="edit/:id" element={<EditGenre />} />
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
