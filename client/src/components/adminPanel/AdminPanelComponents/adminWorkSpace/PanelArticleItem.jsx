import React from "react";

let PanelArticleItem = (props) => {
  return (
    <div className="panelItem">
      {props.loading ? (
        "loading..."
      ) : (
        <img src={props.articlePhoto} alt={props.previewDescription} />
      )}

      <p>{props.articleName}</p>
    </div>
  );
};

export default PanelArticleItem;
