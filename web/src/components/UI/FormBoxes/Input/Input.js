import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    let inputClasses = ['form-control']
    if (props.invalid && props.touched) {
       inputClasses.push(classes.Invalid)
    }
    if (props.elementConfig.type === 'password') {
        inputClasses.push('password-input')
    }
    if (props.elementConfig.type === 'text') {
        inputClasses.push('login-input')
    }
    switch(props.elementType) {
        case ('input'):
            inputElement =<input 
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                {...props.elementConfig} />;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={classes.InputElement}
                value={props.value}
                onChange={props.changed}
                {...props.elementConfig} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}
                    >
                    {props.elementConfig.options.map( option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input 
                className={classes.InputElement}
                value={props.value}    
                {...props.elementConfig} />;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;