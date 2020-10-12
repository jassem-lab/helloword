import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHttp } from "../../../../hooks/http.hook";
import { setError } from "../../../../Redux/FeedbackReducer";
import Feedback from "./Feedback";

let FeedbackContainer = (props) => {
  const { loading, error, request } = useHttp();

  const sendFeedback = async (formData) => { 
    try {
      await request(
        "/api/feedback/sendFeedback",
        "POST",
        { ...formData },
      );
      formData.name = null;
      formData.number = null;
      formData.email = null;
      formData.message = null;
    } catch (e) {}
  };

  useEffect(() => {
    props.setError(error);
  }, [error]);

  return (
    <Feedback
      status={props.status}
      error={props.error}
      sendFeedback={sendFeedback}
      loading={loading}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.feedback.status,
    error: state.feedback.error,
    token: state.admin.token,
  };
};

export default connect(mapStateToProps, { setError })(FeedbackContainer);
