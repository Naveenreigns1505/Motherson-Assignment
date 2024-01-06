import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

import Projects from "../Projects";
function AddProject() {
  const [store, setStore] = useState([
    {
      name: "Project Name",
      link: "https://res.cloudinary.com/do6jds4io/image/upload/v1704425147/mf75a0wzuaxlmzbtnshb.png",
      description:
        "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
      id: 1,
    },
    {
      name: "Project Name",
      link: "https://res.cloudinary.com/do6jds4io/image/upload/v1704426501/fdgtpontysiglaeyuqlt.png",
      description:
        "What was your role, your deliverables, if the project was personal, freelancing.",
      id: 2,
    },
    {
      name: "Project Name",
      link: "https://res.cloudinary.com/do6jds4io/image/upload/v1704426693/nivcibh9vuofiekpqpw0.png",
      description:
        "You can also add in this description the type of the project, if it was for web, mobile, electron.",
      id: 1,
    },
  ]);
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/projects");
  };
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(0);

  const StoreAll = (e) => {
    e.preventDefault();
    setCount(count + 1);
    const newData = {
      name: name,
      link: link,
      description: description,
      id: count,
    };
    setStore([...store, newData]);
    setName("");
    setLink("");
    setDescription("");
    goToProjects();
  };

  console.log(store);
  return (
    <div className="add-main-container">
      <div className="second-container">
        <h1 className="add-text">Add Project</h1>
        <form onSubmit={StoreAll} className="form">
          <label>Project Name</label>
          <input
            type="text"
            className="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Project Link</label>
          <input
            type="text"
            className="name"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <label>Project Description</label>
          <textarea
            type="text"
            rows="4"
            column="5"
            className="name"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="b-container">
            <button type="submit" className="project-button">
              Add
            </button>
          </div>
        </form>
      </div>

      <img
        src="https://res.cloudinary.com/dtt87dyj1/image/upload/v1704440268/Screenshot_150_tpzpog.png"
        alt="a"
        className="bottom-design"
      />

      <div>
        <h1 className="name-text2">Projects</h1>
        <ul>
          {store.length > 0
            ? store.map((each) => <Projects key={each.id} details={each} />)
            : null}
        </ul>
      </div>
    </div>
  );
}

export default AddProject;
