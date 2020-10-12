import React from "react";
import "../MainPage.css";
import BlockTitleText from "../../../common/BlockTitle";
import { NavLink } from "react-router-dom";

let Introduction = (props) => {
  return (
    <div className="intro wrapper" id="intro" ref={props.section}>
      <BlockTitleText
        titleclassName={"titleLines titleLines1"}
        blockTitleText={"A brief Introduction"}
      />
      <div className="introText" data-aos="fade-up" data-aos-duration="1500">
        <p>
          Hi I am a fullstack js web developer & designer based in sousse in tunisia. I believe working in a
          multi-disciplined approach brings creative inspiration to my work. I am passionate about
          creating websites that incorporate interactive design and modern technologies. I see every
          new experience as an opportunity to learn. My favorite projects are those that require me
          to push beyond my boundaries and acquire new skills and knowledge in order to succeed.
        </p>
      </div>

      <div className="buttonPage">
        <NavLink to="/about-me" className="buttonRMargin">
          <button>LEARN MORE ABOUT ME</button>
        </NavLink>
      
      </div>
    </div>
  );
};

export default Introduction;
