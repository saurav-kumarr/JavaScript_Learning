// DEBUGGING TECHNIQUES
// Logging options
// Debugging in Browsers
// Breakpoints

console.log("Hello, World!");
// General log message

console.warn("This is a warning!");
// Warning message

console.error("this is an error!");
// Error message

console.table([{name: "Alice", age : 25},
     {name : "Bob", age : 30}]);
     // Display data in table

function calculateSum(a,b) {
    let sum = a+b;
    console.log("Sum:", sum);
    return sum;
}

calculateSum(5,5);

// using debugger
function outerFunction() {
    console.log("Inside outer function");
    innerFunction();
}

function innerFunction() {
    console.log("Inside inner function");
}

outerFunction();

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("Fetched data:",data);
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}

fetchData();

function a() {
    console.log("Function A");
    b();
}

function b() {
    console.log("Function B");
    c();
}

function c() {
    console.log("Function C");
    
}

a();