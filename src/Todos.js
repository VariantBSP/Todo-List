import React from "react";

const Todos = ({todos, deleteTodo}) => {

    const todoList= todos.length ? (
        todos.map(todo =>{
            return(
                <div className="item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{ todo.content }</span>
                </div>
            )
        })
    ) : (
        <p className="text">You have no todos left, Hooray!</p>
    )

    return(
        <div className="list">
            {todoList}
        </div>
    )
}

export default Todos;