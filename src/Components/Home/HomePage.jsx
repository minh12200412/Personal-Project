import React from "react";
import VideoHomePage from "../../Assets/Video/video-homepage.mp4";
import Button from "react-bootstrap/Button";
import { useSelectors } from "react-redux";
const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={VideoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-contents contents">
        <h1>Make forms worth filling out</h1>
        <p>
          <span>
            Get more data-like signUps, feedback, and anything else-with forms
            designed to be <strong>refreshingly different.</strong>
          </span>
        </p>
        <div className="block-btn">
          {/* <button className="btn-homepage btn-primary">
            Get started—it's free
          </button> */}
          <Button variant="outline-info btn-homepage">
            {" "}
            Get started—it's free
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
