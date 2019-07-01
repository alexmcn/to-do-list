import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  todoLists: [
    {
      id: 1,
      title: 'Team To-Do List',
    },
  ],
  todos: [],
};

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}
