
/* add7 */
let add7 = n => n+7;
console.log(`Add 7: ${add7(3)}`);

/* multiply */
let multiply = (m,n) => m*n;
console.log(`Multiply: ${multiply(3,4)}`);

/* capitalize */
let capitalize = text => {
    text.toLowerCase();
    let firstLetter = text.substring(0,1);
    return firstLetter.toUpperCase() + text.substring(1).toLowerCase();
}
console.log(`Capitalize: ${capitalize("someTHINg")}`);

/* lastLetter */
let lastLetter = text => text.substring(text.length-1, text.length);
console.log(`Last Letter: ${lastLetter("something")}`);