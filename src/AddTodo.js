import React, { Component } from "react";

class AddTodo extends Component{
    state = {
        content: ''
    }
    handleInput = (e) => {
        this.setState({content: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({content: ''})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add new todo:</label>
                <input className="content" type="text" onChange={this.handleInput} value={this.state.content} />
            </form>
        )
    }
}

export default AddTodo;