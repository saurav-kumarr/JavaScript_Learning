/*
(Give boolean result)
Comparison Operaors:

    - Equality (==)
    - Strict equality (===)
    - Inequality (!=)
    - Strict inequality (!==)
    - Greater than (>)
    - Less than (<)
    - Greater than or equal to (>=)
    - Less than or equal to (<=)

*/

// Equality (==)
console.log(5==5);
let a =5;
let b=6;
console.log(a==b);

console.log(5 == '6');
console.log(5 == '5'); // Internally a conversion happen from String to Number that by it show true

// Strict equality (===)
console.log(5 === '5');  // It also check typeOf input. For equal it need to be same type and value.

console.log('5' === '5');

console.log(5 === 5); 
console.log(5 === 6); 

// Inequality (!=)
console.log(5 != 3); 
console.log(5 != '5'); 

// Strict inequality(!==)
console.log(5 !== '5'); 
console.log(5 !== 5); 
