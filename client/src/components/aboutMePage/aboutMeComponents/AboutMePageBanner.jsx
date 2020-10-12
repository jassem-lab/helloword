import React from "react";
import "../aboutMePage.css";
import left from "../img/left.png";
import right from "../img/right.png";

let AboutMePageBanner = () => {
  return (
    <div className="mainImgBg">
      <div className="mainImg wrapper">
        <div className="containerMain">
          <div className="designSide">
            <div className="sideText leftSide">
              <h1>Designer</h1>
              <p>
                UI/UX Designer with a passion for designing beautiful and functional user
                experiences.
              </p>
            </div>
            <img src={left} alt="" />
          </div>

          <div className="frontEndSide">
            <div className="sideText rightSide">
              <h1>&lt; Coder &gt;</h1>
              <p>Front End Developer who focuses on writing clean, elegant and efficient code.</p>
            </div>

            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePageBanner;
