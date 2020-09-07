import React from 'react';
import classes from './TextBox.css';

const textBox = (props) => (
    <div className= {classes.form__group}>
        <input 
            type={props.type} 
            className={classes.form__field} 
            placeholder={props.placeholder} 
            name={props.id} 
            id={props.id} 
            onChange = {props.changeEvent}
            value = {props.value}
            required />

        <label htmlFor={props.id} className={classes.form__label}>{props.labelName}</label>
    </div>
);

export default textBox;