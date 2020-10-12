import React from "react";
import { connect } from "react-redux";
import ArticleComments from "./ArticleComments";
import {
  uploadCurrentArticleComments,
  uploadCurrentCommentId,
} from "../../../Redux/ArticlesReducer";
import { useHttp } from "../../../hooks/http.hook";

const ArticleCommentsContainer = (props) => {
  const { request } = useHttp();
  const addArticleComment = async (formData) => {
    try {
      await request("/api/articles/createArticleComment", "POST", {
        ...formData,
        articleOwner: props.currentArticleId,
      });
      const articleCommentsResponse = await request(
        `/api/articles/getArticleComments/${props.currentArticleId}`,
        "GET",
        null
      );
      const comments = parseInt(props.articles[0].comments);
      const plusLikeCounter = await request(`/api/articles/${props.currentArticleId}`, "PATCH", {
        comments: comments ? comments + 1 : 1,
      });
      props.uploadCurrentArticleComments(articleCommentsResponse);
      formData.userName = "";
      formData.CommentText = "";
    } catch (e) {}
  };

  const addArticleCommentAnswer = async (formData) => {
    try {
      await request("/api/articles/createArticleComment", "POST", {
        ...formData,
        articleOwner: props.currentArticleId,
        commentOwner: props.currentCommentId,
      });
      const articleCommentsResponse = await request(
        `/api/articles/getArticleComments/${props.currentArticleId}`,
        "GET",
        null
      );
      const comments = parseInt(props.articles[0].comments);
      const plusLikeCounter = await request(`/api/articles/${props.currentArticleId}`, "PATCH", {
        comments: comments ? comments + 1 : 1,
      });
      props.uploadCurrentArticleComments(articleCommentsResponse);
      props.uploadCurrentCommentId(null);
    } catch (e) {}
  };
  const addAnswer = (e) => {
    props.uploadCurrentCommentId(e.currentTarget.id);
  };

  return (
    <ArticleComments
      // props
      articleComments={props.articleComments}
      currentCommentId={props.currentCommentId}
      // functions
      addArticleComment={addArticleComment}
      addArticleCommentAnswer={addArticleCommentAnswer}
      addAnswer={addAnswer}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    articles: state.articles.articles,
    articleComments: state.articles.articleComments,
    currentArticleId: state.articles.currentArticleId,
    currentCommentId: state.articles.currentCommentId,
  };
};
export default connect(mapStateToProps, { uploadCurrentArticleComments, uploadCurrentCommentId })(
  ArticleCommentsContainer
);
