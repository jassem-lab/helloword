import React from "react";
import { reduxForm, Field } from "redux-form";

const OverviewStylesForm = (props) => {
  let fontSizesArray = [];
  for (let i = 0; i < 90; i++) {
    fontSizesArray.push(i);
  }
  let fontSizeOption = fontSizesArray.map((size) => {
    return <option key={size}>{size}</option>;
  });
  return (
    <form onSubmit={props.handleSubmit} className="editInput editTextStyles">
      <div className="editOverviewDataInput">
        <Field placeholder="Write style" name="name" component="input" />
      </div>
      <div className="editFontStyle">
        <Field name="weight" component="select">
          <option></option>
          <option>Light</option>
          <option>Regular</option>
          <option>Bold</option>
        </Field>
      </div>
      <div className="editFontStyle">
        <Field name="size" component="select">
          {fontSizeOption}
        </Field>
      </div>

      <button>add</button>
    </form>
  );
};

const UpdateWorkStyles = reduxForm({ form: "updateStyles" })(OverviewStylesForm);

export default UpdateWorkStyles;
