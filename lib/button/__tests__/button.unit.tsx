import renderer from 'react-test-renderer';
import React from 'react';
import Button from '../button';

describe('buttons', () => {
  it('是个div', () => {
    const json = renderer.create(<Button/>).toJSON();
    expect(json).toMatchSnapshot();
  });
});