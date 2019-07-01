import reducer from './reducer';

describe('reducer', () => {
  it('toggles a todo to "isDone"', () => {
    const state = {
      todoLists: [],
      todos: [
        { id: 1, title: 'to do a', todoListId: '1', isDone: true },
        { id: 2, title: 'to do b', todoListId: '1' },
      ],
    };

    const newState = reducer(state, {
      type: 'TOGGLE_TODO',
      payload: { id: 2, title: 'to do b' },
    });

    expect(newState.todos[1].isDone).toEqual(true);
  });

  it('toggles a todo to "not isDone"', () => {
    const state = {
      todoLists: [],
      todos: [
        { id: 1, title: 'to do a', todoListId: '1', isDone: true },
        { id: 2, title: 'to do b', todoListId: '1' },
      ],
    };

    const newState = reducer(state, {
      type: 'TOGGLE_TODO',
      payload: { id: 1, title: 'to do a' },
    });

    expect(newState.todos[0].isDone).toEqual(false);
  });
});
