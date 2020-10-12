import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { setMenuState } from "../../Redux/AdminReducer";

let NavbarContainer = (props) => {
  let [opacity, setOpacity] = useState(false);
  let [toggle, setToggle] = useState(false);

  const onToggleClick = () => {
    if (!toggle) {
      setToggle(true);
      props.setMenuState(true);
    } else {
      setToggle(false);
      props.setMenuState(false);
    }
  };

  const closeMenu = () => {
    setToggle(false);
  };
  useEffect(() => {
    const onScrollFunction = () => {
      if (window.pageYOffset > 0) {
        setOpacity(true);
      } else {
        setOpacity(false);
      }
    };
    window.addEventListener("scroll", onScrollFunction);
  }, []);
  return (
    <Navbar
      validation={props.validation}
      opacity={opacity}
      toggle={toggle}
      onToggleClick={onToggleClick}
      closeMenu={closeMenu}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    validation: state.admin.validation,
  };
};

export default connect(mapStateToProps, { setMenuState })(NavbarContainer);
