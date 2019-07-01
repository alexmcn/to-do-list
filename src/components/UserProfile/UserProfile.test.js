import React from 'react';
import renderer from 'react-test-renderer';

import UserProfile from './index';

describe('UserProfile', () => {
  it('has a profile pic and username', () => {
    const instance = renderer.create(<UserProfile userName="JohnSmith" />);

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
