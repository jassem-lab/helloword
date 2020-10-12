import React from "react";
import { connect } from "react-redux";
import WorkComments from "./WorkComments";
import { uploadCurrentWorkComments, uploadCurrentCommentId } from "../../../Redux/WorksReducer";
import { useHttp } from "../../../hooks/http.hook";

const WorkCommentsContainer = (props) => {
  const { request } = useHttp();

  const addWorkComment = async (formData) => {
    try {
      await request("/api/works/createWorkComment", "POST", {
        ...formData,
        workOwner: props.currentWorkId,
      });
      const workCommentsResponse = await request(
        `/api/works/getWorkComments/${props.currentWorkId}`,
        "GET",
        null
      );
      props.uploadCurrentWorkComments(workCommentsResponse);
      formData.userName = "";
      formData.CommentText = "";
    } catch (e) {}
  };

  const addWorkCommentAnswer = async (formData) => {
    try {
      await request("/api/works/createWorkComment", "POST", {
        ...formData,
        workOwner: props.currentWorkId,
        commentOwner: props.currentCommentId,
      });
      const workCommentsResponse = await request(
        `/api/works/getWorkComments/${props.currentWorkId}`,
        "GET",
        null
      );
      props.uploadCurrentWorkComments(workCommentsResponse);
      props.uploadCurrentCommentId(null);
    } catch (e) {}
  };
  const addAnswer = (e) => {
    props.uploadCurrentCommentId(e.currentTarget.id);
  };

  return (
    <WorkComments
      // props
      workComments={props.workComments}
      currentCommentId={props.currentCommentId}
      // functions
      addWorkComment={addWorkComment}
      addWorkCommentAnswer={addWorkCommentAnswer}
      addAnswer={addAnswer}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    workComments: state.works.workComments,
    currentWorkId: state.works.currentWorkId,
    currentCommentId: state.works.currentCommentId,
  };
};
export default connect(mapStateToProps, { uploadCurrentWorkComments, uploadCurrentCommentId })(
  WorkCommentsContainer
);
