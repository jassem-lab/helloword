import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { setFeedbacks } from "../../../../Redux/FeedbackReducer";
import { useHttp } from "../../../../hooks/http.hook";
import FeedbacksMenu from "./FeedbacksMenu";
import "../../Admin.css";

const WorkSpaceFeedbacksContainer = (props) => {
  const { request } = useHttp();
  useEffect(() => {
    const feedbacksA = async () => {
      const response = await request(`/api/feedback`, "GET", null);
      props.setFeedbacks(response);
    };
    feedbacksA();
  }, []);

  const FeedbacksData = props.feedbacks.map((feedback) => {
    return (
      <FeedbacksMenu
        key={feedback._id}
        name={feedback.name}
        number={feedback.number}
        email={feedback.email}
        message={feedback.message}
      />
    );
  });
  return (
    <div className="feedbacks">
      <h1>Feedbacks</h1>
      {FeedbacksData}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    feedbacks: state.feedback.Messages,
  };
};

export default connect(mapStateToProps, { setFeedbacks })(WorkSpaceFeedbacksContainer);
