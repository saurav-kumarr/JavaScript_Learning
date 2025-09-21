/*

1. Arrays 
   Arrays are used to store multiple values in a single variable

   Creating Arrays:
   You can create an array by enclosing its elements within square brackets ([]).

*/

let numbers = [1,2,3,4]
console.log(numbers);

let fruits = ["apple", "banana", "orange"]
console.log(fruits);

console.log(numbers[3]);
console.log(fruits[2]);

fruits[1] = "cherry";
console.log(fruits[1]);

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix);
console.log(matrix[0][1]);

/*

push(): Adds an element to the end.
pop(): Removes the last element.
shift(): Removes the first element.
unshift(): Adds an element to the beginning.
slice(): Copies a portion of an array.
spice(): Adds or removes elements at a specific index.

*/

// push()
console.log(fruits.length);
fruits.push("Coconut");
console.log(fruits);

// pop()
console.log(fruits.length);
let element = fruits.pop();
console.log(element);


// shift()
console.log(fruits.length);
let first = fruits.shift();
console.log(first);

// unshift()
console.log(fruits.length);
let newLength = fruits.unshift("Coconut");
console.log(newLength);

//slice()
let newfruits = ["apple", "banana", "orange", "Mango"]
let slicedArray = newfruits.slice(1,3);
console.log(newfruits);

// splice()
let deletedItem = newfruits.splice(1,2);
console.log(newfruits);
console.log(deletedItem);
newfruits.splice(1,2,"Add1", "Add2");

console.log(newfruits);
