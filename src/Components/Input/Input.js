import React from 'react';
import classes from './Input.module.css';
import IconCheck from '../../assets/images/icon-check.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Input = (props) => {
    let attachedClasses = [classes.flex, classes.container, classes.addButton]
    return (
        <div className={`${classes.flex} ${classes.container}`}>
            <div className={classes.circle}></div>
            <input type="text" onChange={props.todoEntered} onKeyDown={props.onKeyDown}/>
            <FontAwesomeIcon icon={faPlus} className={classes.addButton} onClick={props.addTodo}/>
        </div>
    );
};

export default Input;
