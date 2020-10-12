import React, { useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SuspenseHOC from "./Suspense/Suspense";
import { connect } from "react-redux";
import { login } from "./Redux/AdminReducer";
import ArticleContainer from "./components/BlogPage/BlogPageComponents/ArticleContainer";
import PortfolioPageContainer from "./components/PortfolioPage/PortfolioPageContainer";
import WorkContainer from "./components/PortfolioPage/PortfolioPageWorks/WorkContainer";
import Footer from "./components/footer/Footer";
import NavbarContainer from "./components/Header/NavbarContainer";
import AboutMePage from "./components/aboutMePage/AboutMePage";
const BlogPageContainer = React.lazy(() => import("./components/BlogPage/BlogPageContainer"));
const MainPage = React.lazy(() => import("./components/mainPage/MainPage"));

// const AboutMePage = React.lazy(() => import("./components/aboutMePage/AboutMePage"));
const FeedbackContainer = React.lazy(() =>
  import("./components/mainPage/Components/FeedbackForm/FeedbackContainer")
);
const AdminPanelContainer = React.lazy(() =>
  import("./components/adminPanel/AdminPanelComponents/AdminPanelContainer")
);
const AdminPanelMenuContainer = React.lazy(() =>
  import("./components/adminPanel/AdminPanelComponents/AdminPanelMenuContainer")
);
const WorkSpaceNewWorkContainer = React.lazy(() =>
  import("./components/adminPanel/AdminPanelComponents/adminWorkSpace/WorkSpaceNewWorkContainer")
);
const AdminArticlesSpaceContainer = React.lazy(() =>
  import(
    "./components/adminPanel/AdminPanelComponents/adminArticlesSpace/AdminArticlesSpaceContainer"
  )
);
const UpdateLatestArticleDataContainer = React.lazy(() =>
  import(
    "./components/adminPanel/AdminPanelComponents/adminArticlesSpace/UpdateLatestArticleDataContainer"
  )
);
const WorkSpaceFeedbacksContainer = React.lazy(() =>
  import(
    "./components/adminPanel/AdminPanelComponents/adminFeedbacksSpace/WorkSpaceFeedbacksContainer"
  )
);

function App(props) {
  const storageName = "userData";
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      props.login(data.token, data.userId);
    }
  }, [props.login]);
  return (
    <div>
      <NavbarContainer />
      {/* Main pages Routers */}
      <Route exact path="/" render={SuspenseHOC(MainPage)} />
      <Route exact path="/about-me" component={() => <AboutMePage />} />
      <Route exact path="/contacts" render={SuspenseHOC(FeedbackContainer)} />
      {/* Portfolio pages Routers */}
      <Route exact path="/portfolio" component={() => <PortfolioPageContainer />} />
      <Route path="/work/:workName?" component={() => <WorkContainer />} />
      {/* Blog pages Routers */}
      <Route exact path="/blog" render={SuspenseHOC(BlogPageContainer)} />
      <Route path="/article/:articleName?" component={() => <ArticleContainer />} />
      {/* Admin Panel Routers */}
      <Route exact path="/authorization" render={SuspenseHOC(AdminPanelContainer)} />
      <Route exact path="/admin20550248" render={SuspenseHOC(AdminPanelMenuContainer)} />
      <Route exact path="/admin20550248/create-new-work" render={SuspenseHOC(WorkSpaceNewWorkContainer)} />
      {/* Create/Update alredy existing articles */}
      <Route
        exact
        path="/admin20550248/create-new-article"
        render={SuspenseHOC(AdminArticlesSpaceContainer)}
      />
      <Route
        exact
        path="/admin20550248/update-latest-article"
        render={SuspenseHOC(UpdateLatestArticleDataContainer)}
      />
      <Route exact path="/admin20550248/feedbacks" render={SuspenseHOC(WorkSpaceFeedbacksContainer)} />
      <Footer />
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    currentWorkId: state.works.currentWorkId,
  };
};

export default connect(mapStateToProps, { login })(App);
