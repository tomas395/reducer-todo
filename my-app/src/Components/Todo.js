import React from "react";

const Todo = props => {
  const handleToggle = id => {
    props.dispatch({ type: "COMPLETED", id: id });
  };

  return (
    <div className="todoArea">
      {props.state.map(todo => {
        return (
          <div
            className={`todo${todo.completed ? " completed" : ""}`}
            onClick={() => handleToggle(todo.id)}
            key={todo.id}
          >
            <p>{todo.item}</p>
          </div>
        );
      })}
    </div>
  );
};

// const Todo = props => {
//   //    uhhhhhhh

//   return (
//     <div
//       className={props.item.completed ? "item-accomplished" : ""}
//       onClick={() => props.toggleClear(props.todo.id)}
//     >
//       <p>{props.item.task}</p>
//     </div>
//   );
// };

export default Todo;
