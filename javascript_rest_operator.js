// The rest operator (`...`) is used to collect multiple values into a single variable.
// It is especially useful when working with an unknown or variable number of arguments.

function sum(...numbers){
    let total = 0;
    for(const number of numbers){
        total += number;
    }

    return total;
}

console.log(sum(1,2,3,4,5,6));

// Arrays
let fruits = ["Apple","Banana","Cherry","Mango","Orange"];
let [first,second, ...restOfFruits] = fruits;
console.log("First",first);
console.log("Second",second);
console.log("Rest",restOfFruits);

// Objects
let person = {
    name : "Alice",
    age : 25,
    city : "New York"
}

let {name, ...restOfPerson} = person;
console.log("Name:",name);
console.log("Rest:",restOfPerson);

// REST with SPREAD
function showName(first, second, ...others) {
    console.log(first);
    console.log(second);
    console.log(others);
}

let names = ["Apple","Banana","Cherry","Mango","Orange"];
showName(...names);