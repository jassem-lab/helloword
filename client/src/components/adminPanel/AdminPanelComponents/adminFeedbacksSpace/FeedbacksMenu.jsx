import React from "react";

const FeedbacksMenu = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.number}</p>
      <p>{props.message}</p>
    </div>
  );
};

export default FeedbacksMenu;
