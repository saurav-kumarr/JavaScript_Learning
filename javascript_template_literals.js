/*
TEMPLATE LITERALS
Allows you to work with strings in a more
flexiable and readeable way

SYNTAX -> `&{expression}`
*/

let studentName = "Saurav";
let age = 20;
let greeting = `Hello ${studentName} you are ${age} year old`;
console.log(greeting); // Hello Saurav you are 20 year old


// Multi line String
let multiLineString = `This is a multiline 
String`;
console.log(multiLineString);

// Expressions
let a = 5;
let b = 10;
let result = `The sum of ${a} and ${b} is ${a+b}`;
console.log(result);

// Objects
let user = {
    firstName : "John",
    lastName : "Doe"
};

let userInfo = `User Info: Name: ${user.firstName} ${user.lastName}`;
console.log(userInfo);

// Escaping Backtick
let e = `This is a backtick \` `;
console.log(e);