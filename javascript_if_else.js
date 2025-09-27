// The `if` statement is used to execute a block of code if a specified condition is `true`.

let temperature = 30;
if(temperature > 25) {
    console.log("I's a hot day!");
} else {
    console.log("It's not a hot day!");
}
console.log("Have a nice day!");

// If..else
let isRaining = true;
if(isRaining) {
    console.log("Take an umbrella");
} else {
    console.log("No need for an umbrella");
}

// if..else..if..else
let score = 44;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 75) {
    console.log("Good Job!")
} else if (score >= 50){
    console.log("You Passed!");
} else {
    console.log("Better luck next time.");
}

// Nested if..else 

    let age = 20;
let hasPermission = true;

if (age >= 18) {
    if(hasPermission) {
        console.log("You are allowed to enter");
    } else {
        console.log("You need permission to enter");
    }
} else {
    console.log("You not old enough to enter");
}

// || && 
let isWeekend = true;
let isHoliday = false;
if(isWeekend || isHoliday) {
    console.log("You can relax today");
} else {
    console.log("Working day!");
}

// ? :
let number = 7;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Functions
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkEvenOdd(11);

// Arrays
let fruits = ["Apple","Banana","Orange"];
let favouriteFruit = "Apple";
if(fruits.includes(favouriteFruit)){
    console.log("Yes");
} else {
    console.log("No");
}

// Objects
let user = {
    name : "Alice",
    isAdmin : false
}

if(user.isAdmin) {
    console.log("Welcome, Admin");
} else {
    console.log(`Welcome ${user.name}`);
}

