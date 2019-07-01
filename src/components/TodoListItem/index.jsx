import React, { useContext } from 'react';
import { TodosContext } from 'context';
import Component from './TodoListItem';

export default ({ id }) => {
  const { state } = useContext(TodosContext);

  const todo = state.todos.find(todo => {
    return todo.id === id;
  });

  if (!todo) return null;

  return <Component id={id} isDone={todo.isDone} title={todo.title} />;
};
