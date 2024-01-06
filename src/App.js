import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";

const App = () => {
  const [projectList, setProjectList] = useState([]);

  const handleAddProject = (newProject) => {
    setProjectList([...projectList, newProject]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects projects={projectList} />} />

        <Route
          path="/addProject"
          element={<AddProject onAddProject={handleAddProject} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
