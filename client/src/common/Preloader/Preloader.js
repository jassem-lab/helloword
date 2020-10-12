import React from "react";
import preloader from "./img/imgonline-com-ua-GIF-Animation-dsqHwvSv8YAtXg.gif";
import "./Preloader.css"

let Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader}  />
    </div>
  );
};

export default Preloader;
