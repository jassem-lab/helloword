import React, { useEffect } from "react";
import PortfolioPage from "./PortfolioPage";
import { connect } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import {
  setColor,
  setWhatIDid,
  setWork,
  setWorkId,
  setStyle,
  setImagesData,
} from "../../Redux/WorksReducer";

let PortfolioPageContainer = (props) => {
  const { loading, request } = useHttp();
  useEffect(() => {
    const getLastWorkData = async () => {
      const worksData = await request("/api/works", "GET", null);
      const worksDataReverse = worksData.reverse();
      props.setWork(worksDataReverse);
      if (worksData.length !== 0) {
        const images = await request("/api/works/getMainPhotos/workPhoto", "GET", null);
        props.setImagesData(images);
      }
    };
    getLastWorkData();
  }, []);
  return (
    <div>
      <PortfolioPage works={props.works} images={props.images} loading={loading} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    works: state.works.works,
    currentWorkId: state.works.currentWorkId,
    images: state.works.images,
  };
};

export default connect(mapStateToProps, {
  setColor,
  setWhatIDid,
  setWork,
  setWorkId,
  setStyle,
  setImagesData,
})(PortfolioPageContainer);
