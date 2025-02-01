import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaTags } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineCategory, MdOutlineLocalMovies } from "react-icons/md";

const Sidebar: React.FC = () => {
  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 bg-dark w-100 h-100">
      <Container fluid className="d-none d-sm-inline-block">
        <Navbar.Brand href="/" className="text-white text-decoration-none w-100 d-flex justify-content-center mt-3">
          <strong className="fs-5 text-center">MovieHub</strong>
        </Navbar.Brand>
      </Container>
      <hr />
      <Nav defaultActiveKey="/" className="flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
        <Nav.Item>
          <Nav.Link href="#" className="text-white">
            <FaHome /> <span className="ms-2 d-none d-sm-inline-block">Home</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/dashboard" className="text-white">
            <AiOutlineDashboard /> <span className="ms-2 d-none d-sm-inline-block">Dashboard</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/admin/genre" className="nav-link text-white">
            <MdOutlineCategory /> <span className="ms-2 d-none d-sm-inline-block">Genre</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/admin/tag" className="nav-link text-white">
            <FaTags /> <span className="ms-2 d-none d-sm-inline-block">Tags</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/movie" className="text-white">
            <MdOutlineLocalMovies /> <span className="ms-2 d-none d-sm-inline-block">Movie</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
      <Dropdown className="pb-4">
        <Dropdown.Toggle
          as="span"
          href="#"
          className="d-flex align-items-center text-white text-decoration-none"
          id="dropdownUser1"
          role='button'
        >
          <img
            src="https://github.com/mdo.png"
            alt="hugenerd"
            width="30"
            height="30"
            className="rounded-circle"
          />
          <span className="d-none d-sm-inline mx-1">loser</span>
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Sidebar;
