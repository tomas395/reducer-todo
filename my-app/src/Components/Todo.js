import React from "react";
import "./../App.css";

const Todo = props => {
  const handleComplete = id => {
    props.dispatch({ type: "TODO_COMPLETED", id: id });
  };

  return (
    <div>
      {props.state.map(todo => {
        return (
          <div
            className={`todo${todo.completed ? " task-scratched" : ""}`}
            onClick={() => handleComplete(todo.id)}
            key={todo.id}
          >
            <p>{todo.item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
