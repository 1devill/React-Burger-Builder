import React from "react";

import classes from "./Button.module.css";

const button = props => (
  <button onClick={props.added || props.removed} className={classes.Button} disabled={props.disabled}>
    <div className={classes.Translate}></div>
    <a href="#id">{props.btnText}</a>
  </button>
);

export default button;
