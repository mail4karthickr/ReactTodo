import React from 'react';
import classes from './TodoListItem.module.css';
import crossButton from '../../../assets/images/icon-cross.svg';

const ToDoListItem = (props) => {
    const classNames = `
        ${classes.button} 
        ${classes.title} 
        ${props.todo.completed ? classes.strikeThrough : classes.noStrikeThrough}
        ${props.todo.completed ? classes.disabledColor : classes.activeColor}
    `;
    return (
        <section className={`${classes.flex} ${classes.container} ${classes.justifyContentSpaceBetween}`}>
            <div className={classes.flex}>
                <input
                    type="radio" 
                    checked={props.todo.completed}
                    onClick={ () => props.todoCompleted(props.todo.id)} 
                />
                <span className={classNames}>{props.todo.title}</span>
            </div>
            <input
                className={classes.crossButton} 
                type="image" 
                src={crossButton} 
                onClick={ () => props.todoRemoved(props.todo.id)}
            />
        </section>
    );
};

export default ToDoListItem;