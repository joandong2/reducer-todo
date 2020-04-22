import React, { useState } from "react";

const AddForm = (props) => {
    const [todo, setTodo] = useState({
        todo: "",
        due: "",
    });

    const changeHandler = (e) => {
        // console.log(event.target.value);
        setTodo({
            ...todo,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo({
            todo: "",
            due: "",
        });
    };

    return (
        <form onSubmit={submitHandler} className="form-inline">
            <div className="input-group mb-2 mr-sm-2">
                <input
                    type="text"
                    name="todo"
                    className="form-control"
                    placeholder="todos.."
                    value={todo.todo}
                    onChange={changeHandler}
                />
            </div>
            <div className="input-group mb-2 mr-sm-2">
                <input
                    type="date"
                    name="due"
                    max="3000-12-31"
                    min="1000-01-01"
                    onChange={changeHandler}
                    value={todo.due}
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-danger btn-sm mb-2">
                Add Todo
            </button>
        </form>
    );
};

export default AddForm;
