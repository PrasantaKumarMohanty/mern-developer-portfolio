import React from "react";
import NotFound from "../Screens/Common/NotFound";
import Home from "../Screens/User/Home";
import About from "../Screens/User/About";
import Contact from "../Screens/User/Contact";
import Projects from "../Screens/User/Projects";
import Blogs from "../Screens/User/Blogs";

const userRoutes = [
  { path: "/", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
  { path: "/projects", component: <Projects /> },
  { path: "/blogs", component: <Blogs /> },
  { path: "*", component: <NotFound /> },
];

export { userRoutes };
