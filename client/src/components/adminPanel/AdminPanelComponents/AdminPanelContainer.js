import React from "react";
import { connect } from "react-redux";
import { useHttp } from "../../../hooks/http.hook";
import AdminPanel from "../AdminPanel";
import { login, setError } from "../../../Redux/AdminReducer";

let AdminPanelContainer = (props) => {
  console.log(props)
  const { request } = useHttp();

  const registerHandler = async (formData) => {
    try {
      await request("/api/auth/register", "POST", { ...formData });
      formData.email = null;
      formData.password = null;
    } catch (e) {}
  };

  const loginHandler = async (formData) => {
    try {
      const data = await request("/api/auth/login", "POST", { ...formData });
      props.login(data.token, data.userId);
      formData.email = null;
      formData.password = null;
    } catch (e) {}
  };



  return (
    <AdminPanel
      validation={props.validation}
      error={props.error}
      registerHandler={registerHandler}
      loginHandler={loginHandler}
    />
  );
};


const mapStateToProps = (state) => {
  return {
    validation: state.admin.validation,
    error: state.admin.error,
  };
};

export default connect(mapStateToProps, { login, setError })(AdminPanelContainer);
