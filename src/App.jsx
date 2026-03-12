import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Recruitments from "./components/Recruitments";
import Blogs from "./components/Blogs";
import Signin from "./components/Signin";
import Teams from "./components/Teams";
import Stargazers from "./components/Stargazers";
import Robusta from "./components/Robusta";
import Programmers from "./components/Programmers";
import CoreTeam from "./components/CoreTeam";
import Achievements from "./components/Achievements";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/recruitments" element={<Recruitments />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/Stargazers" element={<Stargazers />} />
          <Route path="/teams/Robusta" element={<Robusta />} />
          <Route path="/teams/Programmers" element={<Programmers />} />
          <Route path="/teams/CoreTeam" element={<CoreTeam />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
