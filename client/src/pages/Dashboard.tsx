import Sidemenu from "../components/sidemenu";
import {Routes, Route, Outlet} from 'react-router-dom';
import Tags from "./Tags";
import Genre from "./Genre";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Dashboard = () => {
  return (<>
    <Container fluid className="p-0">
      <Row>
        <Col xs={2}>
          <aside className="sidebar">
            <Sidemenu />
          </aside>
        </Col>
        <Col>
        <main className="main-content">
          <Routes>
            <Route path='/tags' element={<Tags />} />
            <Route path='/genre' element={<Genre />} />
          </Routes>
          <Outlet />
        </main>
        </Col>
      </Row>
    </Container>
  
 
  </>);
};

export default Dashboard;
