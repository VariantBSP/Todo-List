import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, content:'Click on the text to delete' },
      { id: 2, content:'go jogging'},
      { id: 3, content:'code for 4hrs'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  render(){ 
    return (
      <div className="App container">
        <h1>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
