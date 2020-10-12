import React from "react";
import { Redirect } from "react-router-dom";
import "./Admin.css";
import adminPanelImg from "../../Redux/img/adminPanel/adminPanel.png";
import LoginForm from "./AdminPanelComponents/LoginForm";

let AdminPanel = (props) => {
  return (
    <div>
      {props.validation ? ( 
        <Redirect to={"/admin"} />
      ) : (
        <div className="wrapper signIn">
          <img src={adminPanelImg}  />
          <h1>Sign in to AdminPanel</h1>
          <LoginForm onSubmit={props.loginHandler} />
          <p>{props.error}</p>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
