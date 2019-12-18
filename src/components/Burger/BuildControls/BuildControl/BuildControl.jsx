import React from "react";

import classes from "./BuildControl.module.css";
import Button from "../../../../general/Button/Button";

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <div className={classes.BtnWrapper}>
        <Button removed={props.removed} btnText="Less" disabled={props.disabled} />
        <Button added={props.added} btnText="More" />
      </div>
    </div>
  );
};

export default buildControl;
