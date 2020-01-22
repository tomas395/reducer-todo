export const initialState = [
  {
    item: "Beat yourself up over Unit 3",
    completed: false,
    id: Date.now()
  }
];

export const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];

    case "TODO_COMPLETED":
      return state.map(e =>
        e.id === action.id ? { ...e, completed: !e.completed } : e
      );

    case "REMOVE_TODO":
      return state.filter(e => !e.completed);

    default:
      return state;
  }
};
