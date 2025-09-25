// Array Methods
// -> `map()` : Transforms each element and returns a new array.
function double(num) {
    return num* 2;
}
let numbers = [1,2,3,4,5];
let doubleNum = numbers.map(double);
console.log(doubleNum);

// Using Anonymous Function
let doubleAnonymous = numbers.map(function(num) {
    return num * 2;
});
console.log(doubleAnonymous);

// Using Arrow Function
let doubleArrow = numbers.map((num) => {
    return num*2;
});
console.log(doubleArrow);

// Single statement
let doubleArrow1 = numbers.map(num => num*2
);
console.log(doubleArrow1);

// -> `filter()` : Returns a new array with elements that pass a Condition.
const evenNumber = numbers.filter(num => num % 2 === 0);
console.log(evenNumber);


// -> `reduce()` : Reduces the array to a single value
let sum = numbers.reduce((accumulator,currentValue) =>
     accumulator+currentValue);
console.log(sum);

// -> `forEach()` : Executes a function for each array element.
numbers.forEach(num => console.log(num));

// -> `find()` : Return the first element that satisfies a condition.
let firstEven = numbers.find(num => num%2 ===0);
console.log(firstEven)

// -> `some()` : Checks if at least one element passes a test. -> Return boolean
let bool = numbers.some(num => num < 0);
console.log(bool);

// -> `every()` : Checks if all elements pass a test.
let hasEvery = numbers.every(num => num > 2);
console.log(hasEvery);

// -> `concat()` : Merges arrays into a a new array.
let moreNumbers = [6,7,8,9];
let newArray = numbers.concat(moreNumbers);
console.log(newArray);

// -> `slice()` : Returns a portion of an array
let sliced = numbers.slice(1,3);
console.log(sliced);

// -> `spilce()` : Modifies the array by removing/replacing element
let fruits = ["Apple","Mango","Orange"];
fruits.splice(1,1,"Guava");
console.log(fruits)

// -> `join()` : Joins all elements into a string.
let allFruits = fruits.join("!,");
console.log(allFruits);

// -> `reverse()` : Reverses the order of the elements.
let reverseNumber = numbers.reverse();
console.log(reverseNumber);

// -> `sort()` :  Sorts the elements of an array.
numbers = [3,5,1,7,0];
let sorted = numbers.sort((a,b) => a - b);
console.log(sorted);