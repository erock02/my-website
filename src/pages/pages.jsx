import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./home";
import CV from "./cv";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
