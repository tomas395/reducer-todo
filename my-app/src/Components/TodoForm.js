import React, { useReducer, useState } from "react";
import { listReducer, initialState } from "./../Reducers/listReducer";
import Todo from "./Todo";

//  dispatch function takes in an "action object" and (under the hood) call the reducer with the current state and the passed in action obj.
//  action object
//  special objects -> actions MUST have a "type" property to tell the reducer what action just occured
//  actions may also have a "payload" property, if the reducer needs any data to update state for that particular action

const TodoForm = () => {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [todo, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const handleClear = e => {
    e.preventDefault();
    dispatch({ type: "REMOVE_TODO", payload: todo });
  };

  const handleChange = e => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="todo">Enter your new task here: </label>
        <input
          type="text"
          placeholder="Please enter task"
          name="todo"
          id="todo"
          value={todo}
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>Add Task</button>
        <button onClick={handleClear}>Clear your completed task</button>
      </form>
      <Todo id={state.id} todo={todo} dispatch={dispatch} state={state} />
    </div>
  );
};

export default TodoForm;
