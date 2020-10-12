import React, { useEffect } from "react";
import { connect } from "react-redux";
import Work from "./Work";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { useHttp } from "../../../hooks/http.hook";
import {
  setColor,
  setWhatIDid,
  setWork,
  setWorkId,
  setWorkName,
  setStyle,
  setImagesData,
  uploadCurrentWorkComments,
} from "../../../Redux/WorksReducer";

let WorkContainer = (props) => {
  // get data from url
  let workName = props.match.params.workName;
  props.setWorkName(workName);
  const { loading, request } = useHttp();
  useEffect(() => {
    const getLastWorkData = async () => {
      if (props.currentWorkName === workName) {
        // get all works data
        const worksData = await request(`/api/works/getWork/${props.currentWorkName}`, "GET", null);
        props.setWork(worksData);
        props.setWorkId(worksData[0]._id);
        // get extended current work data
        if (props.currentWorkId !== undefined && props.currentWorkId === worksData[0]._id) {
          const worksColors = await request(
            `/api/works/colors/${props.currentWorkId}`,
            "GET",
            null
          );
          props.setColor(worksColors);
          const worksStyles = await request(
            `/api/works/textStyles/${props.currentWorkId}`,
            "GET",
            null
          );
          props.setStyle(worksStyles);
          const whatIDid = await request(`/api/works/didPoint/${props.currentWorkId}`, "GET", null);
          props.setWhatIDid(whatIDid);
          const images = await request(`/api/works/getPhotos/${props.currentWorkId}`, "GET", null);
          props.setImagesData(images);
          const workCommentsResponse = await request(
            `/api/works/getWorkComments/${props.currentWorkId}`,
            "GET",
            null
          );
          props.uploadCurrentWorkComments(workCommentsResponse);
        }
      }
    };
    getLastWorkData();
  }, [props.currentWorkId, props.currentWorkName]);

  return <Work works={props.works} images={props.images} loading={loading} />;
};

let mapStateToProps = (state) => {
  return {
    works: state.works.works,
    images: state.works.images,
    currentWorkId: state.works.currentWorkId,
    currentWorkName: state.works.currentWorkName,
  };
};

export default compose(
  connect(mapStateToProps, {
    setColor,
    setWhatIDid,
    setWork,
    setWorkId,
    setWorkName,
    setStyle,
    setImagesData,
    uploadCurrentWorkComments,
  }),
  withRouter
)(WorkContainer);
