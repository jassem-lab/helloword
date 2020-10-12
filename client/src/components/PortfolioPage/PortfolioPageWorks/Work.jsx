import React from "react";
import BlockTitleText from "../../../common/BlockTitle";
import Button from "../../../common/Button";
import "./PortfolioPageWorks.css";
import Preloader from "../../../common/Preloader/Preloader";
import bg from "../../adminPanel/img/mainBackgroundExample.jpg";
import WorkCommentsContainer from "./WorkCommentsContainer";
import Share from "../../../common/Share";

let Work = (props) => {
  let WorkData = props.works
    .filter(
      (work) =>
        work.textStyles !== undefined && work.colors !== undefined && work.whatIDid !== undefined
    )
    .map((work) => {
      let workStyle = work.textStyles.map((style) => {
        return (
          <p
            key={style._id}
            className="workStyle"
            style={{ fontSize: style.size + "px", fontWeight: style.weight }}
          >
            {style.name}
          </p>
        );
      });

      let workColors = work.colors.map((color) => {
        return (
          <div key={color._id} className="colorEllipse" style={{ background: color.color }}></div>
        );
      });

      let whatIDid = work.whatIDid.map((point) => {
        return <p key={point._id}> {point.name}</p>;
      });
      const workPhotoArr = [];
      const BackgroundArr = [];
      const MobileArr = [];
      const DesktopArr = [];

      if (props.images.length !== 0) {
        props.images.forEach((ImgData) => {
          if (ImgData.type === "mobileImg") {
            MobileArr.push(ImgData);
          } else if (ImgData.type === "desktopImg") {
            DesktopArr.push(ImgData);
          } else if (ImgData.type === "workPhoto") {
            workPhotoArr.push(ImgData);
          } else if (ImgData.type === "workBackground") {
            BackgroundArr.push(ImgData);
          }
        });
      }
      const MainImg = () => {
        if (workPhotoArr.length !== 0) {
          const imgSrc = `data:${
            workPhotoArr[0].imgType
          };charset=utf-8;base64,${workPhotoArr[0].img.toString("base64")}`;
          return <img src={imgSrc} alt={workPhotoArr[0].descr}></img>;
        } else {
          return <p>don't have img</p>;
        }
      };

      const DesktopImg = (num) => {
        if (DesktopArr.length !== 0) {
          const imgSrc = `data:${DesktopArr[num].imgType};charset=utf-8;base64,${DesktopArr[
            num
          ].img.toString("base64")}`;
          return (
            <div>
              <img src={imgSrc} alt={DesktopArr[num].descr}></img>
            </div>
          );
        } else {
          return <p>don't have img</p>;
        }
      };

      const MobileImg = (num) => {
        if (MobileArr.length !== 0) {
          const imgSrc = `data:${MobileArr[num].imgType};charset=utf-8;base64,${MobileArr[
            num
          ].img.toString("base64")}`;
          return (
            <div>
              <img src={imgSrc} alt={MobileArr[num].descr}></img>
            </div>
          );
        } else {
          return <p>don't have img</p>;
        }
      };
      const Background =
        BackgroundArr.length !== 0
          ? `data:${BackgroundArr[0].imgType};charset=utf-8;base64,${BackgroundArr[0].img.toString(
              "base64"
            )}`
          : bg;

      const BackgroundColor = work.background;
      return (
        <div key={work._id}>
          <header
            className="workHeader"
            style={{
              background:
                BackgroundArr[0] !== undefined ? "url(" + Background + ")" : BackgroundColor,
              boxShadow: BackgroundArr[0] !== undefined && "0px 4px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="workIntro">
              <div className="workIntroText wrapper">
                <h1>{work.workName}</h1>
                <p>{work.workTitle}</p>
              </div>
            </div>
          </header>

          <div className="workDescriber">
            <div className="workMainLogo">{MainImg()}</div>
            <div className="workMainInfo wrapper">
              <div className="workOverview">
                <div className="workTitle">
                  <h2>ABOUT PROJECT</h2>
                  <p>{work.aboutProject}</p>
                </div>
                <div className="designInfo">
                  <div className="workTypography">
                    <h2>Typography</h2>
                    <p>{work.fontName}</p>
                    <p>ABCDEFGIJKLMNOPQRSTUVWXYZ</p>
                    <p>abcdefgijklmnopqrstuvwxyz</p>
                  </div>
                  <div className="workStyles">
                    <h2>Text styles</h2>
                    {workStyle}
                  </div>
                  <div className="workColors">
                    <h2>Colors</h2>
                    <div className="colorEllipses">{workColors}</div>
                  </div>
                </div>
              </div>
              <div className="workDetails">
                <div className="detailsInfo">
                  <h3>PROJECT TYPE</h3>
                  <p>{work.smallDescription}</p>
                </div>
                <div className="detailsInfo">
                  <h3>WHAT I DID</h3>
                  {whatIDid}
                </div>
                <div className="detailsInfo">
                  <h3>TECHNOLOGY USED</h3>
                  <p>{work.technologyUsed}</p>
                </div>
                <Button
                  btnUrl={work.onlineUrl}
                  btnTarget="_blank"
                  rel="noopener noreferrer"
                  btnText={work.onlineUrl ? "Visit site" : "Comming Soon"}
                />
              </div>
            </div>
          </div>

          <div className="workScreenshots wrapper">
            <BlockTitleText
              titleclassName="titleLines titleLines3"
              blockTitleText="desktop version"
            />
            <p className="sectionsParagraph">
              Main sections of the {work ? work.workName + " " : '"WorkName"'}
              {work ? work.smallDescription : '"WorkType"'}
              . <br />
              Display on the desktop version.
            </p>

            <table className="desktopScreenshots">
              <tbody>
                <tr>
                  <td className="desktopScreenshotsRow">{DesktopImg(0)}</td>
                  <td className="desktopScreenshotsRow">{DesktopImg(1)}</td>
                </tr>
                <tr>
                  <td className="desktopScreenshotsRow">{DesktopImg(2)}</td>
                  <td className="desktopScreenshotsRow">{DesktopImg(3)}</td>
                </tr>
              </tbody>
            </table>
            {MobileArr.length !== 0 ? (
              <div className="mobileVersionSection">
                <BlockTitleText
                  titleclassName="titleLines titleLines3"
                  blockTitleText="mobile version"
                />
                <p className="sectionsParagraph">
                  Main sections of the {work ? work.workName + " " : '"WorkName"'}
                  {work ? work.smallDescription : '"WorkType"'}
                  . <br />
                  Display on the mobile version.
                </p>

                <table>
                  <tbody>
                    <tr>
                      <td className="mobileScreenshotsRow">{MobileImg(0)}</td>
                      <td className="mobileScreenshotsRow">{MobileImg(1)}</td>
                      <td className="mobileScreenshotsRow">{MobileImg(2)}</td>
                    </tr>
                    <tr>
                      <td className="mobileScreenshotsRow">{MobileImg(3)}</td>
                      <td className="mobileScreenshotsRow">{MobileImg(4)}</td>
                      <td className="mobileScreenshotsRow">{MobileImg(5)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}
            <p className="viewAllParagraph">
              To view all sections, please go to the project website.
            </p>
            <Button
              btnUrl={work.onlineUrl}
              btnTarget="_blank"
              rel="noopener noreferrer"
              btnText="Visit site"
            />
          </div>
          <Share shareObject={"portfolio work" + work.workName} />
          <WorkCommentsContainer />
        </div>
      );
    });

  return <div>{props.loading ? <Preloader /> : WorkData}</div>;
};

export default Work;
