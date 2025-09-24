sayHello(); // It is also work if you call function before the define of func.

function sayHello(){
    console.log("Hello");
}

// Anonymous func
// In this variable pointing towards function defination
// and when you refering func variable. You can call the function through variable.
let greet = function(){
    console.log("Say Hello")
}

greet(); // It not work when we call before the function define.

// Anony. func. with parameters
let multiply = function(a,b) {
    return a * b;
}
console.log(multiply(1,2));

// Functions are objects
function sayHi() {
    console.log("Hello Again!");
}
sayHi();
let a = sayHi;
a();