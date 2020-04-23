import React from "react";

const TodoList = (props) => {
    console.log(props);

    return (
        <>
            <table className="table table-hover table-sm">
                <thead>
                    <tr>
                        <th className="table-heading">Todos</th>
                        <th className="table-heading">Due</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo) => {
                        return (
                            <tr
                                key={todo.todo}
                                className={todo.completed ? "completed" : ""}
                                row-id={todo.id}
                                onClick={props.onClick}
                            >
                                <td>
                                    {todo.todo}

                                    {new Date(todo.due.replace(/-/g, "/")) <
                                    new Date().setHours(0, 0, 0, 0) ? (
                                        <span className="badge badge-warning">
                                            Overdue
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                </td>
                                <td>{todo.due}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default TodoList;
