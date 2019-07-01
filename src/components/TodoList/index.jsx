import React, { useContext } from 'react';
import { TodosContext } from 'context';
import Component from './TodoList';

export default () => {
  const { state } = useContext(TodosContext);

  return <Component todos={state.todos} />;
};
