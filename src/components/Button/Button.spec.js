import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import Button from './Button';

/* eslint-disable no-alert */

test('Button renders correctly', () => {
  const component = renderer.create(
    <Button>label</Button>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
