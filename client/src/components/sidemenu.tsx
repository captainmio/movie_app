import { BsAmd } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { MdOutlineLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidemenu = (): JSX.Element => {

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{'height': '100vh'}}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <BsAmd />
        <span className="fs-4 ms-4 d-block">Dashboard</span>
      </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
        <FaHome /> &nbsp; Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
        <AiOutlineDashboard /> &nbsp; Dashboard
        </a>
      </li>
      <li>
        <Link to="/dashboard/genre" className="nav-link text-white"><MdOutlineCategory /> &nbsp; Genre</Link>
      </li>
      <li>
        <Link to="/dashboard/tags" className="nav-link text-white"><FaTags /> &nbsp; Tags</Link>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
        <MdOutlineLocalMovies /> &nbsp; Movie
        </a>
      </li>
    </ul>
    </div>
  );
};

export default Sidemenu;