import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers";

import AddForm from "./AddForm";
import TodoList from "./TodoList";

const Todo = () => {
    // assign initialState to state
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = (e) => {
        dispatch({
            type: "ADD_TODO",
            payload: {
                todo: e,
                completed: false,
                id: Date.now(),
            },
        });
    };

    return (
        <>
            <AddForm addTodo={addTodo} />
            <TodoList todos={state} />
        </>
    );
};

export default Todo;
