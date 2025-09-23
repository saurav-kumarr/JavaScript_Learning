console.log("Hello World!")

// Multiple Values
console.log("Name:","Alice","Age:",25);
console.log("Name:","Alice","Age:"+25);

// Use variables
let x = 10;
let y = 20;
console.log("The value of x is",x);
console.log("Sum is",x+y);

console.log(`Sum is ${x+y}`);

// Logging objects
let person = {
    name: "Charlie",
    age: 28,
    profession: "Developer"
}
console.log(person);

let z = 12;

// Formatted Output
console.log("The value of z is %d", z);
console.log("Hello %s, you are %d years old", "Alice",20);

// Console methods
console.error("This is an error");
console.warn("This is a warning");
console.info("This is a information");

// Console table
let person1 = {
    name: "Charlie",
    age: 28,
    profession: "Developer"
}
console.table(person1);