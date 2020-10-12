import React from "react";
import "../../MainPage.css";
import BlockTitleText from "../../../../common/BlockTitle";
import loading from "../../../../common/loading.gif";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { NavLink } from "react-router-dom";

let LatestBlogArticles = (props) => {
  let latestArticles = props.articles.map((article) => {
    let latestArticlesImages = props.images.map((image) => {
      if (article._id === image.owner) {
        const MainImg =
          props.images.length !== 0 &&
          `data:${image.imgType};charset=utf-8;base64,${image.img.toString("base64")}`;
        return (
          <div className="articleImg" key={image._id}>
            <img src={MainImg} alt={image.descr} />
          </div>
        );
      }
    });
    return (
      <div className="articleCard" key={article._id}>
        {latestArticlesImages}
        <div className="articleDate">
          <div className="dateText">
            <p>{article.articleDate}</p>
          </div>
        </div>
        <div className="atricleText">
          <h3>{article.articleName}</h3>
          <hr />
          <p>{article.articleSmallDescription}</p>
        </div>
        <div className="socialLine">
          <div className="articleSocial">
            <div className="articleComments">
              <p>{article.comments ? article.comments : 0} comments</p>
            </div>
            <div className="articleShare">
              <p>{article.likes ? article.likes : 0} likes</p>
            </div>
          </div>
        </div>
        <div className="articleHover">
          <NavLink to={"/article/" + article.urlAdress}>
            <h3>Read more...</h3>
          </NavLink>
        </div>
      </div>
    );
  });

  return (
    <div className="latestBlogArticles wrapper">
      <BlockTitleText
        titleclassName={"titleLines titleLines1 titleWrapper"}
        blockTitleText={"Latest Blog Articles"}
      />
      <div className="articlesCards">
        {props.loading ? (
          <div className="loadingBlock">
            <img className="loadingGif" src={loading} alt="loading" />
            <img className="loadingGif mobileLoading" src={loading} alt="loading" />
            <img className="loadingGif mobileLoading" src={loading} alt="loading" />
          </div>
        ) : (
          <Swiper {...props.params}>{latestArticles}</Swiper>
        )}
      </div>
      <div className="buttonPage">
        <NavLink to="/blog/">
          <button>View more articles</button>
        </NavLink>
      </div>
    </div>
  );
};

export default LatestBlogArticles;
