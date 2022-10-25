import React, { Component } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center pt-3 pb-0 my-0 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-white">
              Created by Eric Espindola Chavez
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.linkedin.com/in/eric-espindola-b9620a158/"
              >
                <svg className="bi" width="50" height="50">
                  <FaLinkedin color="white" size="2em" />
                </svg>
              </a>
            </li>
            {/* <li className="ms-3">
              <svg className="bi" width="50" height="50">
                <MdEmail
                  color="white"
                  size="2em"
                  onClick={() =>
                    (window.location = "mailto:eric_e_2012@hotmail.com")
                  }
                />
              </svg>
            </li> */}
            <li className="ms-3">
              <a className="text-muted" href="https://github.com/erock02">
                <svg className="bi" width="50" height="50">
                  <FaGithub color="white" size="2em" />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;
