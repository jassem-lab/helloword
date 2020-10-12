import React, { useEffect } from "react";
import AdminPanelMenu from "./AdminPanelMenu";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../Hoc/withRedirect";
import { logout } from "../../../Redux/AdminReducer";
import { useHttp } from "../../../hooks/http.hook";
import { setWork, setImagesData } from "../../../Redux/WorksReducer";
import { setArticles, setArticlesMainImages } from "../../../Redux/ArticlesReducer";
import "../Admin.css";
const AdminPanelManuContaienr = (props) => {
  const { loading, request } = useHttp();
  useEffect(() => {
    const getLastWorkData = async () => {
      const worksData = await request("/api/works", "GET", null);
      props.setWork(worksData);
      if (worksData.length !== 0) {
        const images = await request("/api/works/getMainPhotos/workPhoto", "GET", null);
        props.setImagesData(images);
      }
      const articlesResponse = await request("/api/articles", "GET", null);
      const articlesReverse = articlesResponse.reverse();
      props.setArticles(articlesReverse);
      const articlesImages = await request("/api/articles/getArticleMainImages", "GET", null);
      props.setArticlesMainImages(articlesImages);
    };
    getLastWorkData();
  }, []);

  return (
    <AdminPanelMenu
      loading={loading}
      works={props.works}
      images={props.images}
      articles={props.articles}
      articleImages={props.articleImages}
      logout={props.logout}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    works: state.works.works,
    images: state.works.images,
    articles: state.articles.articles,
    articleImages: state.articles.images,
  };
};

export default compose(
  connect(mapStateToProps, { logout, setWork, setImagesData, setArticles, setArticlesMainImages }),
  withAuthRedirect
)(AdminPanelManuContaienr);
