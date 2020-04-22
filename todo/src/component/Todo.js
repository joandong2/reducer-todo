import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers";

import AddForm from "./AddForm";
import TodoList from "./TodoList";

const Todo = () => {
    // assign initialState to state
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addHandler = (newTodo) => {
        dispatch({
            type: "ADD_TODO",
            payload: {
                todo: newTodo,
                completed: false,
                id: Date.now(),
            },
        });
    };

    const clickHandler = (e) => {
        //console.log(e.target.getAttribute("data-id"));
        dispatch({
            type: "TOGGLE_COMPLETE",
            payload: {
                id: e.target.getAttribute("data-id"),
            },
        });
    };

    const completeHandler = (e) => {
        dispatch({
            type: "FILTER_COMPLETED_ITEMS",
        });
    };

    return (
        <>
            <AddForm addTodo={addHandler} />
            <TodoList
                todos={state}
                onClick={clickHandler}
                onComplete={completeHandler}
            />
        </>
    );
};

export default Todo;
