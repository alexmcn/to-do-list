import reducer from './reducer';

describe('reducer', () => {
  it('adds a todo', () => {
    const state = {
      todoLists: [],
      todos: [
        { id: 1, title: 'to do a', todoListId: '1', isDone: true },
        { id: 2, title: 'to do b', todoListId: '1' },
      ],
    };
    const newState = reducer(state, {
      type: 'ADD_TODO',
      payload: { id: 3, title: 'to do c', todoListId: '2' },
    });

    expect(newState.todos).toEqual([
      { id: 1, title: 'to do a', todoListId: '1', isDone: true },
      { id: 2, title: 'to do b', todoListId: '1' },
      { id: 3, title: 'to do c', todoListId: '2' },
    ]);
  });

  it('deletes a todo', () => {
    const state = {
      todoLists: [],
      todos: [
        { id: 1, title: 'to do a', todoListId: '1', isDone: true },
        { id: 2, title: 'to do b', todoListId: '1' },
        { id: 3, title: 'to do c', todoListId: '2' },
      ],
    };
    const newState = reducer(state, {
      type: 'DELETE_TODO',
      payload: { id: 2 },
    });

    expect(newState.todos).toEqual([
      { id: 1, title: 'to do a', todoListId: '1', isDone: true },
      { id: 3, title: 'to do c', todoListId: '2' },
    ]);
  });

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
