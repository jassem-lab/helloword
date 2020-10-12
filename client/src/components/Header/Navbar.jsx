import React from "react";
import "./Header.css";
import logo from "./img/Logo.png";
import instagram from "./img/socialNetworks/instagram-footer.svg";
import linkedin from "./img/socialNetworks/linkedin-footer.svg";
import github from "./img/socialNetworks/github.svg";
import { NavLink } from "react-router-dom";

let Navbar = (props) => {
  return (
    <div
      className={props.opacity ? "navOverlay headerOpacity sticky" : "navOverlay sticky"}
      id="myHeader"
    >
      <nav className="wrapper mainNav">
        <div className="logo_header">
          <NavLink to={"/"}>
            <img className="logoDesktop logo" src={logo}  />
          </NavLink>
          <NavLink to={"/"}>
            <img className="logoMobile logo" src={logo} />
          </NavLink>
        </div>
        <div className="hamburger" onClick={props.onToggleClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={props.toggle ? "navLinks open" : "navLinks"}>
          <li className={props.toggle ? "navItem fade" : "navItem"} onClick={props.closeMenu}>
            <NavLink to={"/about-me"} className="navItemLink">
              About me
            </NavLink>
          </li>
          <li className="menuLine">
            <hr />
          </li>
          <li className={props.toggle ? "navItem fade" : "navItem"} onClick={props.closeMenu}>
            <NavLink to={"/portfolio"} className="navItemLink">
              Portfolio
            </NavLink>
          </li>
          <li className="menuLine">
            <hr />
          </li>
          <li className={props.toggle ? "navItem fade" : "navItem"} onClick={props.closeMenu}>
            <NavLink to={"/blog"} className="navItemLink">
              Blog
            </NavLink>
          </li>
          <li className="menuLine">
            <hr />
          </li>
          <li className={props.toggle ? "navItem fade" : "navItem"} onClick={props.closeMenu}>
            <NavLink to={"/contacts"} className="navItemLink">
              Contacts
            </NavLink>
          </li>
          <li className="menuLine">
            <hr />
          </li>
          
          <li>
            <div className="navSocial">
              <div className="socialItem">
                <a href="https://github.com/jassem-lab">
                  <img src={github} />
                </a>
              </div>
              <div className="socialItem">
                <a href="#a">
                  <img src={linkedin} />
                </a>
              </div>
                <div className="socialItem">
                <a href="https://www.instagram.com/jassem__gaaloul/">
                  <img src={instagram} />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
