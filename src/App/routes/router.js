// Packages
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
