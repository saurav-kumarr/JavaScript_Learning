/*
Arrow functions provide a more concise way for writing functions.
*/

let greet = function() {
    console.log("Hello");
}

let greetArrow = () => console.log("Hello");

greet();
greetArrow();

// Multi statement
let greetArrowMultiple = () => {
    console.log("Line 1");
    console.log("Line 2");
}
greetArrowMultiple();

// Single.
let greetArrowParam1 = (name) => {
    console.log(`Hello 1 ${name}`);
    console.log("Hello 2");
}
greetArrowParam1("saurav");

// Multiparameter stetement arrow func.
let greetArrowParam2 = (name,age) => {
    console.log(`Hello 1 ${name} ${age}`);
    console.log("Hello 2");
}
greetArrowParam2("saurav",20);

// Single parameter with single statement func.
let greetArrow1 = (name) => console.log(name);

greetArrow1("Saurav");


// Return
let sum = (a,b) => {
    return a+b;
}
console.log(sum(1,2));

// Return values
let sum1 = (a,b) => a+b;
console.log(sum1(1,2));