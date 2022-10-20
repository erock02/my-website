import React, { Component } from "react";
import selfie from "../Eric_Espindola_Selfie.jpeg";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="portrait-img">
          <img
            src={selfie}
            alt="Eric Espindola Chavez"
            style={{
              borderRadius: "80%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              padding: "10px",
              background: "grey",
            }}
          />
        </div>
        <div className="bio">
          <h1 style={{ textAlign: "center", paddingTop: "10px" }}> About me</h1>
          <h4 style={{ textAlign: "center" }}>
            I graduated with my BS in Mathematics in 2016. Upon graduating, I
            had the honor to work alongside software engineers for almost 5
            years. Throughout my professional career, I have witnessed firsthand
            the impact a good software engineer can have on an organization and
            decided that I too wanted to become a software engineer. March 2022
            was when I made the decision to attend Turing School of Software and
            Design. Since then, I have been practicing using web development
            design patterns and working in teams to create Ruby on Rails web
            applications.
          </h4>
        </div>
      </div>
    );
  }
}

export default Home;
