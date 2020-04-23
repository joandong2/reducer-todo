import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers";

import AddForm from "./AddForm";
import TodoList from "./TodoList";

const Todo = () => {
    // assign initialState to state
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addHandler = (newTodo) => {
        console.log(newTodo);
        dispatch({
            type: "ADD_TODO",
            payload: {
                todo: newTodo.todo,
                completed: false,
                due: newTodo.due,
                id: Date.now(),
            },
        });
    };

    const clickHandler = (e) => {
        console.log(e.target.parentNode.getAttribute("row-id"));
        dispatch({
            type: "TOGGLE_COMPLETE",
            payload: {
                id: e.target.parentNode.getAttribute("row-id"),
            },
        });
    };

    const completeHandler = (e) => {
        dispatch({
            type: "FILTER_COMPLETED_ITEMS",
        });
    };

    // console.log(new Date());
    // console.log(new Date("2020-04-22".replace(/-/g, "/")));
    // console.log(
    //     new Date("2020-04-22".replace(/-/g, "/")) <
    //         new Date().setHours(0, 0, 0, 0)
    // );

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <AddForm addTodo={addHandler} />
                </div>
                <div className="col-sm-3 completed-div">
                    <button
                        className="btn btn-danger btn-sm mb-2"
                        onClick={completeHandler}
                    >
                        Clear completed
                    </button>
                </div>
            </div>

            <TodoList todos={state} onClick={clickHandler} />
        </div>
    );
};

export default Todo;
