import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <div style={{ margin: "auto", width: "100%", height: "100%"}}>
        <Burger ingredients={props.ingredients} />
        <h1>Hope it tastes good!</h1>
        <Button 
          btnType="Order"
          btnText="Cancel"
          clicked={props.checkoutCanceled} />
        <Button
          btnType="Success" 
          btnText="Submit" 
          clicked={props.checkoutContinued} />
      </div>
    </div>
  );
};

export default checkoutSummary;
