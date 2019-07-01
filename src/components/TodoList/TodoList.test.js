import React from 'react';
import renderer from 'react-test-renderer';

import TodoList from './TodoList';

describe('TodoList', () => {
  it('lists current todo list items if any exist', () => {
    const instance = renderer.create(
      <TodoList
        todos={[
          { id: 1, title: 'to do a', todoListId: '1', isDone: true },
          { id: 2, title: 'to do b', todoListId: '1', isDone: false },
          { id: 3, title: 'to do c', todoListId: '2', isDone: true },
        ]}
      />
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
