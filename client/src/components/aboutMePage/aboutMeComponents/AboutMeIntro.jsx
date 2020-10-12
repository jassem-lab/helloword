import React from "react";
import "../aboutMePage.css";
import "../../../App.css";
import BlockTitleText from "../../../common/BlockTitle";
import design from "../img/about-me-design.svg";
import frontEnd from "../img/about-me-front-end.svg";

let AboutMeIntro = () => {
  return (
    <div className="aboutIntro wrapper">
      <BlockTitleText titleclassName={"titleLines titleLines2"} blockTitleText={"About me"} />
      <div className="aboutInfo">
        <div className="aboutFrontEnd">
          <img src={frontEnd} alt="" />
          <h2>development</h2>
          <p>
            I'm a coder first, designer second: I enjoy developing simple, efficient and scalable
            websites that provide real value to the end user. I'm passionate about quality code,
            best practices and performance.
          </p>
        </div>
        <div className="aboutDesign">
          <img src={design} alt="" />
          <h2>design</h2>
          <p>
            I also have a passion for web design. If you require a fresh, slick design for a new
            brand or you need to update an existing site, look me up. I've formed an approach that
            helps me create unique work; work that you can't get from a template.
          </p>
        </div>
      </div>
  
    </div>
  );
};

export default AboutMeIntro;
