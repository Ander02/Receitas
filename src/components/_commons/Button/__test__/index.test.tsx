import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import { Button }  from '..';

describe('Render Tests', () => {
  it('Render without crash', () => {
    let tree = renderer.create(<Button />).toTree();
    expect(tree).toMatchSnapshot();
  });
});
