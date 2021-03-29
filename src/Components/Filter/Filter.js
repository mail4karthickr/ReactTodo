import classes from './Filter.module.css';
import React, { Component } from 'react';

class Filter extends Component {
    state = {
        selectedIndex: 1
    }

    constructor(props) {
        super(props)
    }

    showAllItems = () => {
        this.setState({selectedIndex: 1});
        this.props.showAllTodos();
    }

    showActiveItems = () => {
        this.setState({selectedIndex: 2});
        this.props.showActiveTodos();
    }

    showCompletedItems = () => {
        this.setState({selectedIndex: 3});
        this.props.showCompletedTodos();
    }

    render() {
        console.log("Filter render");
        return (
            <section className={`${classes.container} ${classes.flex}`}>
                <div className={classes.normal}>{this.props.itemsLeft + " items left"}</div>
                <div>
                    <button className={this.classesForButton(1)} onClick={() => { this.showAllItems() }}>All</button>
                    <button className={this.classesForButton(2)} onClick={() => { this.showActiveItems() }}>Active</button>
                    <button className={this.classesForButton(3)} onClick={() => { this.showCompletedItems() }}>Completed</button>
                </div>
                <button onClick={this.props.clearCompletedTodos} className={`${classes.button} ${classes.title} ${classes.normal}`}>Clear Completed</button>
            </section>
        );
    }

    classesForButton = (index) => {
        return `${classes.button} ${classes.title} ${this.state.selectedIndex == index ? classes.active : classes.normal}`;
    }
}

export default Filter;