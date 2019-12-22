import React, { Component } from "react";

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  //this could be a functional component, doesn't have to be a class
  componentDidUpdate () {
    console.log("OrderSummary did update")
  }

  render() {
    const orderSummary = Object.keys(this.props.ingredients).map(igKey => (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {this.props.ingredients[igKey]}
      </li>
    ));

    return (
      <Aux>
        <h3
          style={{ borderLeft: "2px solid rgb(15, 0, 68)", padding: "0 10px" }}
        >
          Your order
        </h3>
        <p>Delicious burger with the following ingredients: </p>
        <ul>{orderSummary}</ul>
        <p>
          <strong>Total price is: {this.props.price.toFixed(2)}$</strong>
        </p>
        <p>Made by Daniel =></p>
        <p>Continue to checkout?</p>
        <Button
          btnText="cancel"
          btnType="cancel"
          clicked={this.props.purchaseCanceled}
        />
        <Button
          btnText="continue"
          btnType="order"
          clicked={this.props.purchaseContinued}
        />
      </Aux>
    );
  }
}

export default OrderSummary;
