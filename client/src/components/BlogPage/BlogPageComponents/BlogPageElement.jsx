import React from "react";
// import img from "../../../Redux/img/articles/article1/website-launch-checklist.png";
import { NavLink } from "react-router-dom";

let BlogPageElement = (props) => {
  return (
    <div className="blogArticle">
      <h1>{props.articleName}</h1>
      <hr />
      <div className="dateViews">
        <p className="date">By Amir Aimurzayev on {props.articleDate}</p>
        <p>
          likes: {props.likes ? props.likes : 0} comments: {props.comments ? props.comments : 0}
        </p>
      </div>
      {props.BlogPageImages}
      <article>{props.articleSmallDescription}</article>
      <div className="buttonPage leftSideButton">
        <NavLink to={"/article/" + props.urlAdress}>
          <button>Read more</button>
        </NavLink>
      </div>
    </div>
  );
};

export default BlogPageElement;
