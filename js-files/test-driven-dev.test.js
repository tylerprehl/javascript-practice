/* eslint-disable no-undef */

import * as TestFunctions from './test-driven-development-functions';

it('Test Calculator Add', () => {
  expect(TestFunctions.calculator(1, '+', 1)).toBe(2);
});
