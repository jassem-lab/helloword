import React, { useEffect } from "react";
import Article from "./Article";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { useHttp } from "../../../hooks/http.hook";
import {
  setArticleId,
  setArticleName,
  setArticles,
  setArticlesMainImages,
  setArticleBlocks,
  setArticleBlocksImages,
  setArticleBlocksLists,
  setArticleBlocksTextAreas,
  uploadCurrentArticleComments,
} from "../../../Redux/ArticlesReducer";
import { useState } from "react";

let ArticleContainer = (props) => {
  let ArticleName = props.match.params.articleName;
  props.setArticleName(ArticleName);
  const { loading, request } = useHttp();
  useEffect(() => {
    const articles = async () => {
      // get all articles data
      if (props.currentArticleName === ArticleName) {
        const articlesResponse = await request(
          `/api/articles/getArticle/${props.currentArticleName}`,
          "GET",
          null
        );
        props.setArticles(articlesResponse);
        if (articlesResponse.length !== 0) {
          const currentId = articlesResponse[0]._id;
          props.setArticleId(currentId);
        }
        if (props.currentArticleId !== 0 && props.currentArticleId === articlesResponse[0]._id) {
          const articlesImages = await request(
            `/api/articles/getArticleMainImages/${props.currentArticleId}`,
            "GET",
            null
          );
          props.setArticlesMainImages(articlesImages);
          const articlesBlocksresponse = await request(
            `/api/articles/getArticleBlockData/${props.currentArticleId}`,
            "GET",
            null
          );
          props.setArticleBlocks(articlesBlocksresponse);
          const articlesBlocksImages = await request(
            `/api/articles/getArticleBlockImages/${props.currentArticleId}`,
            "GET",
            null
          );
          props.setArticleBlocksImages(articlesBlocksImages);
          const articlesBlocksLists = await request(
            `/api/articles/getArticleBlockLists/${props.currentArticleId}`,
            "GET",
            null
          );
          props.setArticleBlocksLists(articlesBlocksLists);
          const articlesBlocksTextAreas = await request(
            `/api/articles/getArticleBlockTextAreas/${props.currentArticleId}`,
            "GET",
            null
          );
          props.setArticleBlocksTextAreas(articlesBlocksTextAreas);
          const articleCommentsResponse = await request(
            `/api/articles/getArticleComments/${props.currentArticleId}`,
            "GET",
            null
          );
          props.uploadCurrentArticleComments(articleCommentsResponse);
        }
      }
    };
    articles();
  }, [props.currentArticleId, props.currentArticleName]);

  const [like, setLikeState] = useState(false);
  const setLike = async () => {
    const likes = parseInt(props.articles[0].likes);
    const plusLikeCounter = await request(`/api/articles/${props.currentArticleId}`, "PATCH", {
      likes: likes ? likes + 1 : 1,
    });
    setLikeState(true);
  };
  return (
    <div>
      <Article
        //props data
        loading={loading}
        articles={props.articles}
        currentArticleId={props.currentArticleId}
        articleImages={props.articleImages}
        blocks={props.blocks}
        blocksImages={props.blocksImages}
        blocksLists={props.blocksLists}
        blocksTextAreas={props.blocksTextAreas}
        articleComments={props.articleComments}
        //functions
        like={like}
        setLike={setLike}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    articles: state.articles.articles,
    currentArticleId: state.articles.currentArticleId,
    articleImages: state.articles.images,
    blocks: state.articles.blocks,
    currentBlockId: state.articles.currentBlockId,
    blocksImages: state.articles.blocksImages,
    blocksLists: state.articles.blocksLists,
    blocksTextAreas: state.articles.blocksTextAreas,
    currentArticleName: state.articles.currentArticleName,
  };
};

export default compose(
  connect(mapStateToProps, {
    setArticleId,
    setArticleName,
    setArticles,
    setArticlesMainImages,
    setArticleBlocks,
    setArticleBlocksImages,
    setArticleBlocksLists,
    setArticleBlocksTextAreas,
    uploadCurrentArticleComments,
  }),
  withRouter
)(ArticleContainer);
