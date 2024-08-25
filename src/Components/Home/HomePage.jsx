import React from "react";
import VideoHomePage from "../../Assets/Video/video-homepage.mp4";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
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
          {isAuthenticated === false ? (
            <Button
              variant="outline-info btn-homepage"
              onClick={() => navigate("./login")}
            >
              {" "}
              Get started—it's free
            </Button>
          ) : (
            <Button
              variant="outline-info btn-homepage"
              onClick={() => navigate("./users")}
            >
              Doing start now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
