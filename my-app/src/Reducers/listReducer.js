export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: Date.now()
  },

  {
    item: "Eat booze",
    completed: false,
    id: Date.now()
  },

  {
    item: "get that toilet sparklin",
    completed: false,
    id: Date.now()
  }
];

export const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        id: Date.now(),
        completed: false
      };
      return [...state, newTodo];

    case "TODO_COMPLETED":
      return state.map(e =>
        e.id === action.id ? { ...e, completed: !e.completed } : e
      );

    case "REMOVE":
      return state.filter(e => !e.completed);

    default:
      return state;
  }
};
