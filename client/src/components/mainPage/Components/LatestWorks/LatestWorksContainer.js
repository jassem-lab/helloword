import React, { useEffect } from "react";
import LatestWorks from "./LatestWorks";
import { connect } from "react-redux";
import { useHttp } from "../../../../hooks/http.hook";
import { setWork, setImagesData } from "../../../../Redux/WorksReducer";

let LatestWorksContainer = (props) => {
  const { loading, request } = useHttp();
  useEffect(() => {
    const getLastWorkData = async () => {
      const worksData = await request("/api/works", "GET", null);
      props.setWork(worksData);
      if (worksData.length !== 0) {
        const images = await request("/api/works/getMainPhotos/workPreview", "GET", null);
        props.setImagesData(images);
      }
    };
    getLastWorkData();
  }, []);
  return (
    <LatestWorks
      works={props.works}
      images={props.images}
      params={props.params}
      loading={loading}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    works: state.works.works,
    images: state.works.images,
  };
};

export default connect(mapStateToProps, { setWork, setImagesData })(LatestWorksContainer);
