/*
Type Conversion
 - JavaScript is a loosely typed language
 - JavaScript supports implicit and explicit conversion
*/

let example1 = '5' + 1; // '5' + '1'
console.log(example1); //51
console.log(typeof example1); //String

// console.log("Hi" + "hello");

let example2 = '5' - 1; // 5 - 1
console.log(example2); // 4
console.log(typeof example2); // number

let example3 = '5' * 1; // 5 * 1
console.log(example3); // 5
console.log(typeof example3); // number

let example4 = true + 1; // 1 + 1
console.log(example4); // 2
console.log(typeof example4); // number

let example5 = false + 1; // 0 + 1
console.log(example5); // 1
console.log(typeof example5); // number

// Converting values explicitely

// toString(), String()
let num = 123;
let bool = true;

let numToString = String(num);
console.log(numToString, typeof numToString);
let boolToString = String(bool);
console.log(boolToString, typeof boolToString);

let numToString1 = num.toString();
console.log(numToString1, typeof numToString1);

let boolToString1 = bool.toString();
console.log(boolToString1, typeof boolToString1);

// Number(), parseInt(), parseFloat()
let strNum = "456";
let strFloat = "12.55";

let strToNum = Number(strNum);
console.log(strToNum, typeof strToNum);

let strToNum1 = parseInt(strFloat);
console.log(strToNum1, typeof strToNum1);

let str = "55.89";
let strToFloat = parseFloat(str);
console.log(strToFloat, typeof strToFloat);

let invalidNum = Number("hello");
console.log(invalidNum,typeof invalidNum); // NaN -> not a number

// Boolean()

let zero = 0;
let zeroToBool = Boolean(zero);
console.log(zeroToBool, typeof zeroToBool); // false
let zeroToBool1 = Boolean(1);
console.log(zeroToBool1, typeof zeroToBool1); // true

let nonEmptyString = "Hello";
let strToBool = Boolean(nonEmptyString);
console.log(strToBool, typeof strToBool); // True for non empty String
