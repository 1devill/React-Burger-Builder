import React from "react";

import classes from "./Button.module.css";

const button = props => {
  let btnClass;
  switch(props.btnType) {
    case "order":
      btnClass = [classes.Button, classes.Order].join(" ");
      break;
    default:
      btnClass = classes.Button;
  }

  return (
    <button onClick={props.added || props.removed || props.ordered} className={btnClass} disabled={props.disabled}>
      <div className={classes.Translate}></div>
      <a href="#id">{props.btnText}</a>
    </button>
  )
};

export default button;
