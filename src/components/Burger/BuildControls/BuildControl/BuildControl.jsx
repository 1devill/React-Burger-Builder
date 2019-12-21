import React from "react";

import classes from "./BuildControl.module.css";
import Button from "../../../UI/Button/Button";

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <div className={classes.BtnWrapper}>
        <Button clicked={props.removed} btnText="Less" disabled={props.disabled} />
        <Button clicked={props.added} btnText="More" />
      </div>
    </div>
  );
};

export default buildControl;
