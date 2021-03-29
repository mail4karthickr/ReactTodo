import React from 'react';
import classes from './TodoList.module.css';
import TodoListItem from './TodoListItem/TodoListItem';
import Filter from 'Components/Filter/Filter';

const TodoList = (props) => {
    return (
        <ul>
            {
                props.todos.map((todo) => {
                    return <TodoListItem 
                        todo={todo}
                        todoCompleted={props.todoCompleted} 
                        todoRemoved={props.todoRemoved}
                    />
                })
            }
        </ul>
    );
};

export default TodoList;