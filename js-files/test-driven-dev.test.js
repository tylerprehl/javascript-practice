/* eslint-disable no-undef */

import * as TestFunctions from './test-driven-development-functions';

it('Test Capitalize', () => {
  expect(TestFunctions.capitalize('something cool')).toBe('Something cool');
});

it('Test Reverse String', () => {
  expect(TestFunctions.reverseString('something cool')).toBe('looc gnihtemos');
});

it('Test Calculator Add', () => {
  expect(TestFunctions.calculator(1, '+', 1)).toBe(2);
});
