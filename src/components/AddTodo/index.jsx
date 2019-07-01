import React, { useContext } from 'react';
import { TodosContext } from 'context';
import Component from './AddTodo';

export default () => {
  const { state, dispatch } = useContext(TodosContext);

  const handleAddTodo = title => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: `t-${state.todos.length + 1}`,
        isDone: false,
        title,
        todoListId: 1,
      },
    });
  };

  return <Component onSubmit={handleAddTodo} state={state} />;
};
