import React, { Component } from 'react';
import './App.css';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    return(
        <div className = "Todo" >
            <Title />
            <TodoForm addTodo={this.addTodo.bind(this)} />
            <TodoList
                todos={this.state.data}
                remove={this.handleRemove.bind(this)}
            />
        </div>
    );
}

export default Todo;
