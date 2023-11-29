/* eslint no-console: ["error", { allow: ["log"] }] */
import * as TestFunctions from './test-driven-development-functions';
import '../src/style.css';

// ensure functions are working as expected
console.log(TestFunctions.capitalize('something cool'));
console.log(TestFunctions.reverseString('something cool'));
console.log(TestFunctions.calculator(1, '+', 4));
console.log(TestFunctions.calculator(1, '-', 4));
console.log(TestFunctions.calculator(1, '*', 2));
console.log(TestFunctions.calculator(1, '/', 4));
console.log('Test');
