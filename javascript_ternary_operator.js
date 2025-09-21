/*

Ternary Operator:
    - Conditional operator
    (condition ? value1 : value2)

*/

let x = 10;
let message = (x > 5) ? "X is best" : "X is worst" ;
console.log(message);

let number = 5;
let result = (number % 2 === 0) ? "even" : "odd";
console.log(result);

// Nested ternary operator:

let age = 16;
let category = (age < 13) ? "Child" :
     (age < 20) ? "Teenager" : "Adult";
console.log(category);