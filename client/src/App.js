import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import RoutingContainer from "./RoutingContainer";
import ScrollToTop from "./ScrollToTop";
import Aos from "aos";
import "aos/dist/aos.css";

const PortfolioApp = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  // Setting the viewport height
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  // on viewport height change
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <RoutingContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default PortfolioApp;
