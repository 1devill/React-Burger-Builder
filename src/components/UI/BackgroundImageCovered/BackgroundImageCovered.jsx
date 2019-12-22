import React from 'react';

import classes from './BackgroundImageCovered.module.css';

const backgroundImageCovered = (props) => (
    <div className={classes.BackgroundImageCovered}>
        <img src={props.images} alt="background-burger"/>
        <div></div>
    </div>
);

export default backgroundImageCovered;