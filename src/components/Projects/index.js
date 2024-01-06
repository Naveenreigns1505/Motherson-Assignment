import React from "react";
import "./index.css";

function Projects(props) {
  const { details } = props;
  const { name, description, link, id } = details;
  const a = id % 2;
  return (
    <li class="li">
      {a === 1 ? (
        <div className="inside-container">
          <div className="name-portion">
            <h1 className="project-head-text">{name}</h1>
            <p className="project-text">{description}</p>
            <a href={link} target="_blank">
              <button className="view" onClick={() => window.open(link)}>
                View Project
              </button>
            </a>
          </div>
          <img className="image-1" src={link} alt="a" />
        </div>
      ) : (
        <div className="inside-container">
          <img className="image-2" src={link} alt="a" />

          <div className="name-portion1">
            <h1 className="project-head-text">{name}</h1>
            <p className="project-text">{description}</p>
            <a href={link} target="_blank">
              <button className="view">View Project</button>
            </a>
          </div>
        </div>
      )}
    </li>
  );
}

export default Projects;
