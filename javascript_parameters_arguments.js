// Parameters are those which except by function.
// Arguments are those which is passed in function call.

function greet(name){

    console.log(`Hello, ${name}!`); // Parameter accepted
    console.log("You are logged in.");

}

greet("Saurav"); // Argument pass in function call
greet("Jaat");

// Multiple Parameter Function
function greet(name,age) { // A function with multiple parameter.

    console.log(`Hello, ${name} your age is ${age}!`,typeof age); // Parameter accepted
    console.log("You are logged in.");

}

greet("saurav",20); // Multiple Argument passed.
greet("saurav","20");
console.log(greet());

// Function with default parameter value
function greetPerson(name="saurav",age=20) { // Default value
    console.log(`Hello, ${name} your age is ${age}!`,typeof age);

}
greetPerson();

// Function with Rest Parameter
function calculateSum(...numbers){  // 3 dots and varaible name (Usefull when you don't know number of argument passed)
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    console.log(sum);

}
calculateSum(1,2,3,4);

// Boolean parameters
function checkEligibility(isMember){
    console.log((isMember) ? "Eligible" : "Not Eligible");
}
checkEligibility(false);

// Function with Object as Parameters
function printAddress({street,city,zip}){
    console.log(`Address: ${street},${city},${zip}`)
}

let address = {
    street : "street1",
    city : "gzb",
    zip : "22323"
};
printAddress(address);
printAddress({street:"mumbai"});

// Functions with Arrays as Parameters
function printArray(number){
    console.log(number);
};
printArray([1,2,3,4]);



