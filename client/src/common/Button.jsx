import React from "react";
import "../App.css";

let Button = (props) => {
  return (
    <div className="buttonPage">
      <a href={props.btnUrl} target={props.btnTarget}>
        <button>{props.btnText}</button>
      </a>
    </div>
  );
};

export default Button;
