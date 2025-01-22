import { BsAmd } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { MdOutlineLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidemenu = (): JSX.Element => {
  return (
    // <div className="w-100 h-100 flex-shrink-0 p-3 text-white bg-dark min-vw-50" style={{'overflow': 'auto'}}>
    //   <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    //     <BsAmd />
    //     <span className="fs-4 ms-4 d-block">Dashboard</span>
    //   </a>
    // <hr />
    // <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
    //   <li className="nav-item">
    //     <a href="#" className="nav-link active" aria-current="page">
    //     <FaHome /> &nbsp; Home
    //     </a>
    //   </li>
    //   <li>
    //     <a href="#" className="nav-link px-0 align-middle">
    //     <AiOutlineDashboard /> &nbsp; Dashboard
    //     </a>
    //   </li>
    //   <li>
    //     <Link to="/dashboard/genre" className="nav-link px-0 align-middle"><MdOutlineCategory /> &nbsp; Genre</Link>
    //   </li>
    //   <li>
    //     <Link to="/dashboard/tags" className="nav-link px-0 align-middle"><FaTags /> &nbsp; Tags</Link>
    //   </li>
    //   <li>
    //     <a href="#" className="nav-link px-0 align-middle">
    //     <MdOutlineLocalMovies /> &nbsp; Movie
    //     </a>
    //   </li>
    // </ul>
    // </div>

    // <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white h-100 bg-dark" style={{'overflow': 'auto'}}>

    
<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 bg-dark w-100 h-100">
    <div className="d-none d-sm-inline-block container-fluid">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none w-100 d-none d-sm-inline-block">
        <strong className="fs-5 d-block align-middle text-center w-100 mt-3">MOVIE APP</strong>
      </a>
    </div>
    <hr />
      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0 text-white" aria-current="page">
              <FaHome />  <span className="ms-2 d-none d-sm-inline-block">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle text-white">
              <AiOutlineDashboard /> <span className="ms-2 d-none d-sm-inline-block">Dashboard</span>
            </a>
          </li>
          <li>
              <Link to="/dashboard/genre" className="nav-link px-0 align-middle text-white"><MdOutlineCategory /> <span className="ms-2 d-none d-sm-inline-block">Genre</span></Link>
          </li>
          <li>
            <Link to="/dashboard/tags" className="nav-link px-0 align-middle text-white"><FaTags /> <span className="ms-2 d-none d-sm-inline-block">Tags</span></Link>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle text-white">
              <MdOutlineLocalMovies /> <span className="ms-2 d-none d-sm-inline-block">Movie</span>
            </a>
          </li>
      </ul>
      <hr />
      <div className="dropdown pb-4">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
              <span className="d-none d-sm-inline mx-1">loser</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li>
                  <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
    </div>
  );
};

export default Sidemenu;