/* eslint no-console: ["error", { allow: ["log"] }] */

function capitalize(text) {
  const firstLetter = text.slice(0, 1).toUpperCase();
  return firstLetter + text.substring(1, text.length);
}

function reverseString(text) {
  const arrText = text.split('');
  const reversedArrText = arrText.reverse();
  return reversedArrText.join('');
}

function calculator(num1, oper, num2) {
  switch(oper) {
    case '+':
      return num1+num2;
    case '-':
      return num1-num2;
    case '*':
      return num1*num2;
    case '/':
      return num1/num2;
    default:
      return NaN;
  }
}

export { capitalize, reverseString, calculator };


