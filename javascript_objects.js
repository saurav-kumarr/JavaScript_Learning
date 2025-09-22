/*
JavaScript Objects

Objects allow you to group related data and functions together

An Object is created using curly braces `{}` and contains key-value pairs where each key 
(also called a propert) is associated with a value.

*/

let person = {
    name: "Alice",
    age: 25,
    isStudent: true
}
console.log(person);

// Accessing Properties
console.log(person.age);
console.log(person["age"]);

// Adding or updating Properties
person.age = 55;
console.log(person.age);
console.log(person);

person.job = "Engineer";
console.log(person);

// Deleting Properties
delete person.isStudent;
console.log(person);

// Check if Property exist (in boolean)
console.log('name' in person);
console.log(person.hasOwnProperty("age"));

// Nested Objects
let student = {
    name : "Saurav",
    courses : {
        math : true,
        science : false

    }
}
console.log(student);
console.log(student.courses.math);

// Object Destructuring (Variable name should be same)
let {name, courses} = student;
console.log(name);
console.log(courses);