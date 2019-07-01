import React from 'react';
import renderer from 'react-test-renderer';

import ListHeader from '.';

describe('ListHeader', () => {
  it('has a title and subtitle', () => {
    const instance = renderer.create(
      <ListHeader title="Team To-Do List" subtitle="Monday 1 July" />
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
