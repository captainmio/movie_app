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
      <Row className="w-100 d-flex align-items-stretch">
        <Col xl={3} lg={4} md={4} sm={4} className="col-stretch">
          <aside className="sidebar h-100">
            <Sidemenu />
          </aside>
        </Col>
        <Col xl={9} lg={8} md={8} sm={8} className="col-stretch" style={{'height': '1000px'}}>
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
