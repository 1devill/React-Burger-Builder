import React from "react";

import Aux from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
  const orderSummary = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{textTransform: 'capitalize'}} >{igKey}</span>: {props.ingredients[igKey]}
    </li>
  ));

  return (
    <Aux>
      <h3 style={{ borderLeft: "2px solid rgb(15, 0, 68)", padding: "0 10px"}}>Your order</h3>
      <p>Delicious burger with the following ingredients: </p>
      <ul>
          {orderSummary}
      </ul>
      <p>Made by Daniel =></p>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummary;
