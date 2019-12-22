import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import Button from '../../UI/Button/Button';
import BackgroundImageCovered from '../../UI/BackgroundImageCovered/BackgroundImageCovered';
import burgerImage from '../../../assets/images/burger-image1.jpg';

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <BackgroundImageCovered images={burgerImage} />
      <p>Current price is: <strong>{props.price.toFixed(2)}$</strong></p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label} 
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabledInfo[ctrl.type]}
        />
      ))}
      <div style={{width: "100%", textAlign: "center"}}>
        <Button clicked={props.ordered} disabled={!props.purchasable} btnType='order' btnText='ORDER' />
      </div>
    </div>
  );
};

export default buildControls;
