// - When dealing with multiple conditions for the same variable, `if..else` can become lengthly and hard to read.

// - The `switch` statement offers a cleanner, more readable alternative.

// Example of If..Else to Switch.

const fruit = "apple";

if(fruit === "apple") {
    console.log("Apples are $2 per kg.");
} else if (fruit === "banana") {
    console.log("Bnanas are $1 per kg.");
} else if (fruit == "orange") {
    console.log("Oranges are $1.5 per kg.");
} else {
    console.log("Sorry, we don't have that fruits");
}

// Switch Statement
const fruitType = "apple";

switch(fruitType) {
    case "apple" :
        console.log("Apples are $2 per kg.");
        break;
    case "banana" :
         console.log("Bnanas are $1 per kg.");
         break;
    case "orange" :
         console.log("Oranges are $1.5 per kg.");
         break;
    default :
        console.log("Sorry, we don't have that fruits");
        break;
}

// Switch with expressions

let number = 9;
switch (true) {
    case number < 5 :
        console.log("Number is less than 5")
        break;
    
    case number >= 5 && number < 10 :
        console.log("Number is between 5 and 9")
        break;
    
        default :
        break;
}