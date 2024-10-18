import React from "react";
import NotFound from "../Screens/Common/NotFound";
import Home from "../Screens/User/Home";
import About from "../Screens/User/About";
import Contact from "../Screens/User/Contact";
import Projects from "../Screens/User/Projects";
import ProjectDetails from "../Screens/User/ProjectDetails";

const userRoutes = [
  { path: "/", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
  { path: "/projects", component: <Projects /> },
  { path: "/project-details", component: <ProjectDetails /> },
  { path: "*", component: <NotFound /> },
];

export { userRoutes };
