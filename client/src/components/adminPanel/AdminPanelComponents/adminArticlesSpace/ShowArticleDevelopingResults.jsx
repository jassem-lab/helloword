import React from "react";
import "../../../BlogPage/BlogPage.css";

const ShowArticleDevelopingResults = (props) => {
  const onChangeTextArea = () => {
    console.log();
  };
  const ArticleMap = props.articles
    .filter((article) => props.currentArticleId === article._id)
    .map((article) => {
      const MainImg =
        props.articleImages.length !== 0 &&
        `data:${
          props.articleImages[0].imgType
        };charset=utf-8;base64,${props.articleImages[0].img.toString("base64")}`;
      return (
        <div className="blogArticle" key={article._id}>
          <h1>{article.articleName}</h1>
          <hr />
          <div className="dateViews">
            <p className="date">By Amir Aimurzayev on {article.articleDate}</p>
          </div>
          {props.articleImages.length !== 0 && (
            <img src={MainImg} alt={props.articleImages[0].descr} />
          )}
        </div>
      );
    });

  const BlocksMap = props.blocks.map((block) => {
    const BlockImages = props.blocksImages.map((image) => {
      const blockImage = `data:${image.imgType};charset=utf-8;base64,${image.img.toString(
        "base64"
      )}`;
      return (
        <div key={image._id} className="articleBlock">
          {image.blockOwner === block._id && (
            <img
              style={{
                marginLeft: image.imgPositioning,
                marginRight: image.imgPositioning,
                width: image.imgWidth,
              }}
              src={blockImage}
              alt={image.descr}
            />
          )}
        </div>
      );
    });
    const BlocksList = props.blocksLists.map((listItem) => {
      return (
        <div key={listItem._id}>
          {listItem.blockOwner === block._id && <li>{listItem.title}</li>}
        </div>
      );
    });
    const BlockTextArea = props.blocksTextAreas.map((area) => {
      return (
        <div key={area._id}>
          {area.blockOwner === block._id && (
            <textarea
              className="blockTextArea"
              name="blockTextArea"
              id=""
              rows="12"
              value={area.text}
              onChange={onChangeTextArea}
            ></textarea>
          )}
        </div>
      );
    });
    return (
      <div key={block._id} className="articleBlock">
        {BlockImages}
        {block.title && <h3 style={{ textAlign: block.titlePosition }}>{block.title}</h3>}
        <ul className="articleList">{BlocksList}</ul>
        {block.text && <p>{block.text}</p>}
        {BlockTextArea}
      </div>
    );
  });

  return (
    <div className="articleReadMore wrapper">
      <div className="blogOverlay">
        {ArticleMap}
        <div className="blogArticle">{BlocksMap}</div>
      </div>
    </div>
  );
};

export default ShowArticleDevelopingResults;
