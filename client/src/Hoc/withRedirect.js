import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsforRedirect = (state) => {
  return {
    validation: state.admin.validation,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.validation) return <Redirect to={"/authorization"} />;

      return <Component {...this.props} />;
    }
  }

  let ConnectAuthRedirectComponent = connect(mapStateToPropsforRedirect)(RedirectComponent);

  return ConnectAuthRedirectComponent;
};
