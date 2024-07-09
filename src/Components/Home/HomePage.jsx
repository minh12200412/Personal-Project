import React from "react";
import VideoHomePage from "../../Assets/Video/video-homepage.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={VideoHomePage} type="video/mp4" />
      </video>
    </div>
  );
};
export default HomePage;
