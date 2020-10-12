import React from "react";
import "../MainPage.css";
import Adaptive from "../img/Adaptive-skills.svg";
import FrontEnd from "../img/Front-end-skills.svg";
import CrossBrowsers from "../img/cross-browsers-skills.svg";
import design from "../img/design-skills.svg";
import idea from "../img/idea-skills.svg";
import BlockTitleText from "../../../common/BlockTitle";
import SkillCard from "./SkillCard";

let SkillsList = () => {
  return (
    <div className="skills wrapper">
      <BlockTitleText
        titleclassName={"titleLines titleLines1"}
        blockTitleText={"This is what i do"}
      />
      <div className="skillsCards">
        <SkillCard
          img={idea}
          imgDescr={"Great ideas skill"}
          skillText={"Great ideas"}
          aosDelay="0"
        />
        <SkillCard
          img={design}
          imgDescr={"design skill"}
          skillText={"Professional design"}
          aosDelay="200"
        />
        <SkillCard
          img={FrontEnd}
          imgDescr={"front-end skill"}
          skillText={"HTMl + CSS + JS"}
          aosDelay="400"
        />
        <SkillCard
          img={Adaptive}
          imgDescr={"adaptive skill"}
          skillText={"Clean code and responsive layout"}
          aosDelay="600"
        />
        <SkillCard
          img={CrossBrowsers}
          imgDescr={"cross-browsers skill"}
          skillText={"Browser Compatibility"}
          aosDelay="800"
        />
      </div>
    </div>
  );
};

export default SkillsList;
