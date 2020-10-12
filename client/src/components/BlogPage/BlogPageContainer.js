import React, { useEffect } from "react";
import BlogPage from "./BlogPage";
import { connect } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { setArticles, setArticlesMainImages } from "../../Redux/ArticlesReducer";

let BlogPageContainer = (props) => {
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
    <BlogPage
      articles={props.articles}
      images={props.images}
      loading={loading}
      menuOpened={props.menuOpened}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    articles: state.articles.articles,
    images: state.articles.images,
    menuOpened: state.admin.menuOpened,
  };
};

export default connect(mapStateToProps, { setArticles, setArticlesMainImages })(BlogPageContainer);
