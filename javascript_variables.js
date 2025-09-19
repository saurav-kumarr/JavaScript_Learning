// WHAT IS VARIABLE?
// 1. A variable is like a storage box where you cane keep a piece of information to use later.
// 2. You can think of it as a label that you stick on something you want to remember.

let count = 0;
console.log(count);
count = 10;
console.log(count+10);

// RULES FOR NAMING VARIABLES
// * Must begin with a letter, $, or _.

let counter = 10;
let $price = 20;
let _name = "saurav";

// * Can contain letter, $, or _ after the first character.

let u1$ser1;
let first_name;

// * Case-sensitive.

let name = "Saurav";
let NAME = "Chaudhary";

console.log(name);
console.log(NAME);

// * Cannot use reserved keywords.

//  let let = 10;

// * No spaces allowed

// X -> let first Name = 10;

let firstName = "Saurav";

// * Use descriptive names

let age = 25; 

// * One line Intilize, Declare, Created (Optional). Also unique.

let a1 = 5, a2 = 10, a3 ;


// In JavaScript, you create a variable using the let, const, or var Keyword.
// let : Use this when you might want to change the value.
// const : Use this when the value should stay the same.
// var : An older way of creating variables.

// But now we usually use let or const.

var counter1 = 10;
console.log(counter1);

let newCounter = 100;
console.log(newCounter);

newCounter = 200;
console.log(newCounter);

const value = 50;
console.log(value);
// Error Occur
// value = 40;
console.log(value);



