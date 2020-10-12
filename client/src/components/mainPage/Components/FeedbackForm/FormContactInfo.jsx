import React from "react";
import "../../MainPage.css";
import behance from "../../../Header/img/socialNetworks/behance-footer.svg";
import instagram from "../../../Header/img/socialNetworks/instagram-footer.svg";
import linkedin from "../../../Header/img/socialNetworks/linkedin-footer.svg";
import vk from "../../../Header/img/socialNetworks/vk-footer.svg";

let FormContactInfo = () => {
  return (
    <div className="contactInfo">
      <p>
        E-mail
        <br />
        <a href="mailto:jassemgaaloul123@gmail.com">jassemgaaloul123@gmail.com</a>
      </p>
      <p>
        Phone <br />
        <a href="tel:+21629587189">+216189587</a>
      </p>
      <p>
        Adress
        <br />
        Tunisia, sousse
      </p>
      <div className="contactSocial">
        <p>
          for more about me, i'm <br />
          also on social:
        </p>
        <div className="socialList">
         
          <a href="https://www.instagram.com/jassem__gaaloul/" target="_blank" rel="noopener noreferrer">
            <div className="socialEllipse instagramEllipse">
              <img src={instagram}  />
            </div>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="socialEllipse linkedinEllipse">
              <img src={linkedin}  />
            </div>
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default FormContactInfo;
