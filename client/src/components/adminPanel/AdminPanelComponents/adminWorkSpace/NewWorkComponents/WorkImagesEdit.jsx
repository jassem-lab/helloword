import React from "react";
import BlockTitleText from "../../../../../common/BlockTitle";

const WorkImagesEdit = (props) => {
  const MobileArr = [];
  const DesktopArr = [];
  if (props.images.length !== 0) {
    props.images
      .filter((ImgData) => ImgData.type === "mobileImg")
      .map((ImgData) => {
        MobileArr.push(ImgData);
      });
    props.images
      .filter((ImgData) => ImgData.type === "desktopImg")
      .map((ImgData) => {
        DesktopArr.push(ImgData);
      });
  }

  const DesktopImg = (num) => {
    if (DesktopArr.length !== 0 && DesktopArr.length >= num + 1) {
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
    if (MobileArr.length !== 0 && MobileArr.length >= num + 1) {
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
  return (
    <div className="workScreenshots wrapper">
      <BlockTitleText titleclassName="titleLines titleLines3" blockTitleText="desktop version" />
      <p className="sectionsParagraph">
        Main sections of the{" "}
        {props.allWorks.length !== 0
          ? props.allWorks[props.allWorks.length - 1].workName + " "
          : '"WorkName"'}
        {props.allWorks.length !== 0
          ? props.allWorks[props.allWorks.length - 1].smallDescription
          : '"WorkType"'}
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

      <div className="mobileVersionSection">
        <BlockTitleText titleclassName="titleLines titleLines3" blockTitleText="mobile version" />
        <p className="sectionsParagraph">
          Main sections of the{" "}
          {props.allWorks.length !== 0
            ? props.allWorks[props.allWorks.length - 1].workName + " "
            : '"WorkName"  '}
          {props.allWorks.length !== 0
            ? props.allWorks[props.allWorks.length - 1].smallDescription
            : '"WorkType"'}
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
    </div>
  );
};

export default WorkImagesEdit;
