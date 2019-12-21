import React from "react";

import classes from "./BurgerMenu.module.css";

const burgerMenu = props => {
  const attachedClasses = [
    classes.BurgerMenu,
    props.showSideDrawer ? classes.active : null
  ];

  return (
    <div onClick={props.clicked} className={attachedClasses.join(" ")}>
      <div>
        <span></span>
      </div>
    </div>
  );
};

export default burgerMenu;
