import React from "react";

const TodoList = (props) => {
    //console.log(props.todos);
    return (
        <>
            {props.todos.map((todo) => {
                return <p key={todo.id}>{todo.todo}</p>;
            })}
        </>
    );
};

export default TodoList;
