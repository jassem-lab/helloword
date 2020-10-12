import React from "react";
import AboutMePageBanner from "./aboutMeComponents/AboutMePageBanner";
import AboutMeIntro from "./aboutMeComponents/AboutMeIntro";
import AboutMeSkills from "./aboutMeComponents/AboutMeSkills/AboutMeSkills";
import AboutMeEducation from "./aboutMeComponents/AboutMeEducation/AboutMeEducation";
import AboutMeFacts from "./aboutMeComponents/AboutMeFacts";

import { connect } from "react-redux";

let AboutMePage = (props) => {
  return (
    <div className="bgBlue">
      <AboutMePageBanner />
      <AboutMeIntro />
      <AboutMeSkills /> 
      <AboutMeEducation />
      <AboutMeFacts />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    // 
  };
};

export default connect(mapStateToProps, {})(AboutMePage);
