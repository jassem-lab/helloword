import React, { Suspense } from "react";
import Preloader from "../common/Preloader/Preloader";

const SuspenseHOC = (Component) => {
  return (props) => {
    return <Suspense fallback={<Preloader />}>
      <Component {...props} />
    </Suspense>;
  };
};

export default SuspenseHOC;
