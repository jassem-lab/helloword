import React from "react";
import user from "../../../common/user.png";
import UpdateWorkAnswerForm from "./Forms/CreateWorkAnswerForm";
import UpdateWorkCommentForm from "./Forms/CreateWorkCommentsForm";

const WorkComments = (props) => {
  const showNormalizedDate = (object) => {
    const dateISO = new Date(object.CommentDate).toString().split(" ").splice(1, 4).join(" ");
    return dateISO;
  };
  const ShowComments = props.workComments
    .filter((comment) => comment.commentOwner === undefined)
    .map((comment) => {
      const ShowCommentsAnswers = props.workComments
        .filter((answer) => answer.commentOwner === comment._id)
        .map((answer) => {
          return (
            <div key={answer._id} className="commentItem commentItemsAnswer">
              <img src={user} alt="user aimurzayev comment answer" />
              <div className="commentInfo">
                <div className="commentNameDate">
                  <p>{answer.userName}</p>
                  <p>{showNormalizedDate(answer)}</p>
                </div>
                <div className="commentInfoExtended">
                  <p className="commentText">{answer.CommentText}</p>
                  <p id={answer._id} onClick={props.addAnswer}>
                    answer
                  </p>
                  {props.currentCommentId === answer._id && (
                    <UpdateWorkAnswerForm onSubmit={props.addWorkCommentAnswer} />
                  )}
                </div>
              </div>
            </div>
          );
        });

      return (
        <div key={comment._id} className="showCommentsArea">
          <div className="commentItem">
            <img src={user} alt="user aimurzayev comment answer" />
            <div className="commentInfo">
              <div className="commentNameDate">
                <p>{comment.userName}</p>
                <p>{showNormalizedDate(comment)}</p>
              </div>
              <div className="commentInfoExtended">
                <p className="commentText">{comment.CommentText}</p>
                <p id={comment._id} onClick={props.addAnswer}>
                  answer
                </p>
                {props.currentCommentId === comment._id && (
                  <UpdateWorkAnswerForm onSubmit={props.addWorkCommentAnswer} />
                )}
              </div>
            </div>
          </div>
          {ShowCommentsAnswers}
        </div>
      );
    });

  return (
    <div className=" commentsArea">
      <UpdateWorkCommentForm onSubmit={props.addWorkComment} />
      {ShowComments}
    </div>
  );
};

export default WorkComments;
