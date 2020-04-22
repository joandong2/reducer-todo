import React, { useState } from "react";

const AddForm = (props) => {
    const [todo, setTodo] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo("");
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                name="todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddForm;
