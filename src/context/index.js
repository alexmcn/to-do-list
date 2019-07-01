import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  todoLists: [],
  todos: [
    { id: 1, title: 'to do a', todoListId: '1', isDone: true },
    { id: 2, title: 'to do b', todoListId: '1', isDone: false },
    { id: 3, title: 'to do c', todoListId: '2', isDone: true },
  ],
};

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}
