import React, { Component } from 'react';
import classes from './TodoContainer.module.css';
import Header from 'Components/Header/Header';
import Input from 'Components/Input/Input'
import TodoList from 'Components/TodoList/TodoList';
import Filter from 'Components/Filter/Filter';

class ToDoContainer extends Component {

    constructor() {
        super()
        this.todos = []
    }

    state = {
        todos: [],
        todo: null,
        todosLeft: 0
    }

    addTodo = () => {
        this.todos.push({ 
            id: this.todos.length + 1, 
            title: this.state.todo, 
            completed: false}
        );
        this.setState({todos: this.todos, todosLeft: this.noOfActiveTodos()});
    }

    onKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.addTodo();
        }
    }

    todoEntered = (event) => {
        this.setState({todo: event.target.value});
    }

    showAllTodos = () => {
        this.setState({todos: this.todos});
    }

    showActiveTodos = () => {
        const activeTodos = this.todos.filter((item) => !item.completed)
        this.setState({todos: activeTodos});
    }

    showCompletedTodos = () => {
        const completedTodos = this.todos.filter((item) => item.completed)
        this.setState({todos: completedTodos});
    }

    todoCompleted = (id) => {
        let selectedTodo = this.todos.find((item) => item.id === id);
        selectedTodo.completed = !selectedTodo.completed;
        this.setState({todos: this.todos, todosLeft: this.noOfActiveTodos()});
    }

    todoRemoved = (id) => {
        let index = this.todos.findIndex(item => item.id == id)
        this.todos.splice(index, 1)
        this.setState({todos: this.todos, todosLeft: this.noOfActiveTodos()});
    }

    clearCompletedTodos = () => {
        this.todos = this.todos.filter((todo) => !todo.completed)
        this.setState({todos: this.todos})
    }

    noOfActiveTodos = () => {
        return this.todos.filter(todo => !todo.completed).length;
    }

    render() {
        return (
            <section className={classes.container}>
                <Header/>
                <Input 
                    todoEntered={this.todoEntered}
                    addTodo={this.addTodo}
                    onKeyDown={this.onKeyDown}
                />
                <TodoList 
                    todos={this.state.todos}
                    todoCompleted={this.todoCompleted}
                    todoRemoved={this.todoRemoved}
                />
                <Filter 
                    showAllTodos={this.showAllTodos}
                    showActiveTodos={this.showActiveTodos}
                    showCompletedTodos={this.showCompletedTodos}
                    clearCompletedTodos={this.clearCompletedTodos}
                    itemsLeft={this.state.todosLeft}
                />
            </section>
        );
    }
}

export default ToDoContainer;