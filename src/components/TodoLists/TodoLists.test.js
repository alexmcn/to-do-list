import React from 'react';
import renderer from 'react-test-renderer';

import TodoLists from '.';

describe('TodoLists', () => {
  it('has area containing a list of todo lists with 1 fixed list titled "Team To-Do List"', () => {
    const instance = renderer.create(<TodoLists />);

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
