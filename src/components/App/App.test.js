import React from 'react';
import renderer from 'react-test-renderer';

import App from './index';

describe('App', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(<App />);

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
