import React from 'react';
import classes from './Screen.module.css';

const screen = (props) => {
    return (
        <div className={classes.Screen}>
            <p className={classes.Result}>{props.children}</p>
        </div>
    )
};

export default screen;