import React from 'react';
import classes from './Button.css';

const textBox = (props) => (
    <button className={classes.example_a} onClick = {props.clickedEvent}>
        {props.buttontext}
    </button>
);

export default textBox;