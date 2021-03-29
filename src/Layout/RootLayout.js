import React, { Component } from 'react';
import Background from '../Components/Background/Background'
import ToDoContainer from '../Containers/TodoContainer/TodoContainer';

class Layout extends Component {
    render() {
        return (
            <div>
                <Background></Background>
                <ToDoContainer></ToDoContainer>
            </div>
        );
    }
}

export default Layout;