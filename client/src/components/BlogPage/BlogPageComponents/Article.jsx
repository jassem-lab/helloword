import React from "react";
import Share from "../../../common/Share";
import "../BlogPage.css";
import "../../adminPanel/Admin.css";
import Preloader from "../../../common/Preloader/Preloader";
import ArticleCommentsContainer from "./ArticleCommentsContainer";
import like from "../img/thumb-up.svg";
import correct from "../img/correct.svg";

let Article = (props) => {
  const onChangeTextArea = () => {
    console.log();
  };
  const ArticleMap = props.articles.map((article) => {
    const MainImg =
      props.articleImages.length !== 0 &&
      `data:${
        props.articleImages[0].imgType
      };charset=utf-8;base64,${props.articleImages[0].img.toString("base64")}`;
    if (article._id === props.currentArticleId) {
      return (
        <div className="blogArticle" key={article._id}>
          <h1>{article.articleName}</h1>
          <hr />
          <div className="dateViews">
            <p className="date pressLikeParagraph">By Amir Aimurzayev on {article.articleDate}</p>
            {props.like ? (
              <div className="pressLike">
                <p className="pressLikeParagraph">Thank you for your vote!</p>
                <div className="like shareBlock">
                  <img src={correct} alt="twitter icon logo" />
                </div>
              </div>
            ) : (
              <div className="pressLike" onClick={props.setLike}>
                <p className="pressLikeParagraph">Press like if it was helpfull</p>
                <div className="like shareBlock">
                  <img src={like} alt="twitter icon logo" />
                </div>
              </div>
            )}
          </div>

          {props.articleImages.length !== 0 && (
            <img src={MainImg} alt={props.articleImages[0].descr} />
          )}
        </div>
      );
    }
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
        {block.title !== null && <h3 style={{ textAlign: block.titlePosition }}>{block.title}</h3>}
        <ul className="articleList">{BlocksList}</ul>
        {block.text !== null && <p>{block.text}</p>}
        {props.blocksTextAreas.length != 0 && BlockTextArea}
      </div>
    );
  });

  return (
    <div>
      {props.loading ? (
        <Preloader />
      ) : (
        <div className="bgBlue blogPaperOverlay">
          <div className="articleReadMore blogPaper wrapper">
            <div className="blogOverlay">
              {ArticleMap}
              <div className="blogArticle">{BlocksMap}</div>
            </div>
            <Share shareObject={"blog article"} />
            <ArticleCommentsContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
