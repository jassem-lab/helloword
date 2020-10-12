import React, { useEffect } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./PortfolioPage.css";
import { NavLink } from "react-router-dom";
import BlockTitleText from "../../common/BlockTitle";
import Preloader from "../../common/Preloader/Preloader";
;

let PortfolioPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    breakpoints: {
      0: {
        spaceBetween: 0,
      },
      500: {
        spaceBetween: 100,
      },
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  let Works = props.works
    .filter(() => props.images !== undefined)
    .map((work) => {
      const workPhotoArr = [];
      props.images
        .filter((imgData) => imgData.owner === work._id)
        .map((imgData) => {
          const imgSrc = `data:${imgData.imgType};charset=utf-8;base64,${imgData.img.toString(
            "base64"
          )}`;
          workPhotoArr.push({ imgSrc });
        });

      return (
        <div key={work._id} className="work">
          <div className="workInfo">
            <h1>{work.workName}</h1>
            {/* <h2>{work.whatIDid}</h2> */}
            <h2>UX | UI | WEB DEVELOPMENT</h2>
            <div className="buttonPage">
              <NavLink to={"/work/" + work.urlAdress} className="navItemLink">
                <button>View project</button>
              </NavLink>
            </div>
          </div>
          <div className="workImg">
            <img src={workPhotoArr.length !== 0 ? workPhotoArr[0].imgSrc : null} alt="" />
          </div>
        </div>
      );
    });

  return (
    <div>
      {props.loading ? (
        <Preloader />
      ) : (
        <div className="bgWhite">
          <div className="portfolio wrapper">
            <BlockTitleText
              titleclassName="titleLines titleLines1 titleWrapper"
              blockTitleText="projects"
            />
            <p className="titleWrapper">
              Below you will find my previous works along with some projects which I have just taken
              on. Each project has a description, design approaches taken and technologies used.
            </p>
          </div>
          <Swiper {...params}>{Works}</Swiper>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
