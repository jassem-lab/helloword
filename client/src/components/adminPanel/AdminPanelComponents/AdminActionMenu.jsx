import React from "react";
import portfolioItem from "../img/suitcase.svg";
import articleItem from "../img/portfolio.svg";
import message from "../img/email-envelope.svg";
import drafts from "../img/prototype.svg";
import avatar from "../img/avatar.svg";
import logout from "../img/logout.svg";
import { NavLink } from "react-router-dom";

const AdminActionMenu = (props) => {
  return (
    <div className="actionsMenu">
      <ul className="actionsList">
        <li className="panelAdmin">
          <img src={avatar} alt="avatar" />
          <p>jassem gaaloul</p>
        </li>
        <NavLink to={"/admin/create-new-work"} className="adminNavLink">
          <li>
            <img src={portfolioItem} alt="portfolio item" />
            <p>Create Work</p>
          </li>
        </NavLink>
        <NavLink to={"/admin/create-new-article"} className="adminNavLink">
          <li>
            <img src={articleItem} alt="article" />
            <p>Create Article</p>
          </li>
        </NavLink>
        <NavLink to={"/admin/feedbacks"} className="adminNavLink">
          <li>
            <img src={message} alt="messages" />
            <p>Feedback</p>
          </li>
        </NavLink>

        <li>
          <img src={drafts} alt="drafts" />
          <p>Drafts</p>
        </li>
        <li onClick={props.logout}>
          <img src={logout} alt="logout" />
          <p>Log out</p>
        </li>
      </ul>
    </div>
  );
};

export default AdminActionMenu;
