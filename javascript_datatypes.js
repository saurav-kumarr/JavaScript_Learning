// DATATYPES
// Define the kind of value variables is holding


//  PRIMITIVE TYPES 

// Number : Represents both integers and floating point numbers

let age = 24;
console.log(age);
console.log(typeof age);

age = 24.5;
console.log(age);
console.log(typeof age);


// String : Represents sequence of characters

let name = "jaat";
console.log(name);
console.log(typeof name);

let city = 'delhi';
console.log(city);
console.log(typeof city);

console.log(name + " " + city);

// Boolean : Represents true or false

let hasGraduated = true;
console.log(hasGraduated);
console.log(typeof hasGraduated);

// Undefined : No value assigned

let area;
console.log(area);
console.log(typeof area);

// Null : Represents intentional absence of value

let emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue);


// REFERNCE TYPES

// Object : Used to store complex data in form of key value pairs(Grouping of different attributes of one identity or object)
// Object is user and Attributes is name & age.

let user = {
    name : "Neha",
    age : 25
}
console.log(user.name + "\n" + user.age);
console.log(user);
// Dot notation is (user.name) way of accessing data using ( dot )
user.name = "neha";
console.log(user.name);

// Array : Used to hold multiple values

let fruits = ["Apple", "Banana", "Orange"]
console.log(fruits);
console.log(typeof fruits);