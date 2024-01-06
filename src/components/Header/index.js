import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/projects");
  };
  return (
    <div className="bg-container">
      <h1 className="main-heading">Madelyn Torff</h1>
      <div className="nav-container">
        <Link to="/" className="nav-text">
          Home
        </Link>
        <Link to="/projects" className="nav-text" onClick={goToProjects}>
          Projects
        </Link>
        <Link to="/addProject" className="nav-text">
          Add Project
        </Link>
      </div>
    </div>
  );
};

export default Header;
