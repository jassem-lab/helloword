import React from "react";
import "./BlogPage.css";
import BlogPageElement from "./BlogPageComponents/BlogPageElement";
import Preloader from "../../common/Preloader/Preloader";

let BlogPage = (props) => {
  let BlogPageElements = props.articles.map((article) => {
    let BlogPageImages = props.images
      .filter((image) => image.owner === article._id)
      .map((image) => {
        const MainImg =
          props.images.length !== 0 &&
          `data:${image.imgType};charset=utf-8;base64,${image.img.toString("base64")}`;
        return <img key={image._id} src={MainImg} alt={image.descr} />;
      });
    return (
      <BlogPageElement
        key={article._id}
        id={article._id}
        articleName={article.articleName}
        articleDate={article.articleDate}
        articleSmallDescription={article.articleSmallDescription}
        urlAdress={article.urlAdress}
        comments={article.comments}
        likes={article.likes}
        BlogPageImages={BlogPageImages}
      />
    );
  });
  return (
    <div>
      {props.loading ? (
        <Preloader />
      ) : (
        <div className="bgBlue">
          <div className="blogPaperOverlay">
            <div className="blogPaper wrapper">
              <div className="blogOverlay">{BlogPageElements}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
