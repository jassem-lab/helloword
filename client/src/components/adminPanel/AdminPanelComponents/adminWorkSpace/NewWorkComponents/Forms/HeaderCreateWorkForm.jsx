import React from "react";
import { Field, reduxForm } from "redux-form";

const HeaderCreateWorkForm = (props) => {
  return (
    <form className="workIntroTextEdit wrapper" onSubmit={props.handleSubmit}>
      <div className="editTitlesInput">
        <Field placeholder="Name of Work" name="workName" component="input" />
        <Field placeholder="URL of the work" name="urlAdress" component="input" />
        <Field placeholder="Main website link" name="onlineUrl" component="input" />
        <Field placeholder="Set Background color" name="background" component="input" />
        <Field placeholder="Description of work" name="workTitle" component="textarea" />
        <div className="buttonPage whiteBtn">
          <button>Create Work</button>
        </div>
      </div>
    </form>
  );
};

const CreateNewWorkItem = reduxForm({ form: "createNewWork" })(HeaderCreateWorkForm);

export default CreateNewWorkItem;
