import React, { useContext } from 'react';
import { TodosContext } from 'context';
import Component from './TodoListItem';

export default ({ id }) => {
  const { state, dispatch } = useContext(TodosContext);

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_TODO',
      payload: { id },
    });
  };

  const handleToggleComplete = () => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: { id },
    });
  };

  const todo = state.todos.find(todo => {
    return todo.id === id;
  });

  if (!todo) return null;

  return (
    <Component
      id={id}
      isDone={todo.isDone}
      title={todo.title}
      onDelete={handleDelete}
      onToggleComplete={handleToggleComplete}
    />
  );
};
