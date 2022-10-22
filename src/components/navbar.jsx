import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/home";
import CV from "../pages/cv";
class NavBar extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Eric Espindola Chavez
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="nav-link">
                  <NavLink
                    end
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive ? "blue" : "black",
                    })}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink
                    to="resume"
                    exact="false"
                    style={({ isActive }) => ({
                      color: isActive ? "blue" : "black",
                    })}
                  >
                    Resume
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<CV />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default NavBar;
