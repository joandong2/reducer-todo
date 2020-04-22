import React from "react";

const TodoList = (props) => {
    return (
        <>
            <button onClick={props.onComplete}>Clear completed</button>
            {props.todos.map((todo) => {
                return (
                    <p
                        className={todo.completed ? "completed" : ""}
                        key={todo.todo}
                        data-id={todo.id}
                        onClick={props.onClick}
                    >
                        {todo.todo}
                    </p>
                );
            })}
        </>
    );
};

export default TodoList;
