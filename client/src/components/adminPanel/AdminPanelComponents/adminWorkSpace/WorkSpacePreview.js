import React from "react";
import PanelWorkItem from "./PanelWorkItem";
import PanelArticleItem from "./PanelArticleItem";
import "../../Admin.css";

const WorkSpacePreview = (props) => {
  let Works = props.works.map((work) => {
    const workPhotoArr = [];
    if (props.images !== undefined) {
      props.images.map((imgData) => {
        if (imgData.owner === work._id) {
          const imgSrc = `data:${imgData.imgType};charset=utf-8;base64,${imgData.img.toString(
            "base64"
          )}`;
          workPhotoArr.push({ imgSrc });
        }
      });
    }
    return (
      <PanelWorkItem
        loading={props.loading}
        key={work.id}
        workPhoto={workPhotoArr.length !== 0 ? workPhotoArr[0].imgSrc : null}
        workName={work.workName}
        previewDescription={work.previewDescription}
      />
    );
  });

  let Articles = props.articles.map((article) => {
    const articlePhotoArr = [];
    if (props.articleImages !== undefined) {
      props.articleImages.map((imgData) => {
        if (imgData.owner === article._id) {
          const imgSrc = `data:${imgData.imgType};charset=utf-8;base64,${imgData.img.toString(
            "base64"
          )}`;
          articlePhotoArr.push({ imgSrc });
        }
      });
    }
    return (
      <PanelArticleItem
        loading={props.loading}
        key={article._id}
        articlePhoto={articlePhotoArr.length !== 0 ? articlePhotoArr[0].imgSrc : null}
        articleName={article.articleName}
        previewDescription={article.previewDescription}
      />
    );
  });
  return (
    <div>
      <div className="PanelWorksBlock panelBlock">
        <h2>Works</h2>
        <div className="panelItems">{Works}</div>
      </div>
      <div className="panelArticlesBlock panelBlock">
        <h2>Articles</h2>
        <div className="panelItems">{Articles}</div>
      </div>
    </div>
  );
};

export default WorkSpacePreview;
