import React from "react";
import "../MainPage.css";

import Typical from "react-typical";

let MainBanner = (props) => {
  return (
    <div className="aboutMeMain wrapper">
      <div className="aboutMeMainText">
        <h1>I'm jassem gaaloul, a FullStack Web Developer & UI/UX Designer .</h1>
        <Typical
          steps={[
            "I code cool websites",
            1000,
            "Just call me maybe",
            1000,
            "I love Tesla",
            500,
            "I like everything space related",
            1000,
          ]}
          loop={Infinity}
          wrapper="p"
        />
        <span id="typed"></span>
      </div>
      <div className="scrollIndicator" id="scroll-indicator" onClick={props.gotoSection}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MainBanner;
