import React from "react";
import "./Footer.css";
import Logo from "./img/Logo.png";
import instagram from "./img/socialNetworks/instagram-footer.svg";
import linkedin from "./img/socialNetworks/linkedin-footer.svg";
import github from "./img/socialNetworks/github.svg";
import { NavLink } from "react-router-dom";

let Footer = () => {
  return (
    <div className="footer">
      <div className="logoFooter" data-aos="zoom-in-up" data-aos-duration="600">
        <NavLink to={"/"}>
          <img src={Logo} className="logo" />
        </NavLink>
      </div>
      <nav className="footerNav" data-aos="zoom-in-up" data-aos-duration="600" data-aos-delay="200">
        <ul className="navLinks">
          <li className="navItem">
            <NavLink to={"/about-me"} className="navItemLink">
              About me
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to={"/portfolio"} className="navItemLink">
              Portfolio
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to={"/blog"} className="navItemLink">
              Blog
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to={"/contacts"} className="navItemLink">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>

      <p data-aos="zoom-in-up" data-aos-duration="600" data-aos-delay="300">
        © 2020 jassem gaaloul. All rights reserved.
      </p>
      <div
        className="footerSocial"
        data-aos="zoom-in-up"
        data-aos-delay="500"
        data-aos-duration="600"
      >
        <a href="https://github.com/jassem-lab" target="_blank" rel="noopener noreferrer">
          <img src={github} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} />
        </a>
    
        <a
          href="https://www.instagram.com/jassem_gaaloul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
