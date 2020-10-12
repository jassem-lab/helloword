import React, { useEffect } from "react";
import LatestBlogArticles from "./LatestBlogArticles";
import { connect } from "react-redux";
import { useHttp } from "../../../../hooks/http.hook";
import { setArticles, setArticlesMainImages } from "../../../../Redux/ArticlesReducer";

let LatestBlogArticlesContainer = (props) => {
  const { loading, request } = useHttp();
  useEffect(() => {
    const articles = async () => {
      const articlesResponse = await request("/api/articles", "GET", null);
      const articlesReverse = articlesResponse.reverse();
      props.setArticles(articlesReverse);
      const articlesImages = await request("/api/articles/getArticleMainImages", "GET", null);
      props.setArticlesMainImages(articlesImages);
    };
    articles();
  }, []);
  return (
    <LatestBlogArticles
      articles={props.articles}
      images={props.images}
      params={props.params}
      loading={loading}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    // articles: state.articles.Articles,
    articles: state.articles.articles,
    images: state.articles.images,
  };
};

export default connect(mapStateToProps, { setArticles, setArticlesMainImages })(
  LatestBlogArticlesContainer
);
