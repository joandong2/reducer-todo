import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers";

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    console.log(state);

    return <h1>{state.item}</h1>;
};

export default Todo;
