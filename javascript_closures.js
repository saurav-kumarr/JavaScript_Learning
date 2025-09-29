// Closures allow a function to access variables from its outer (enclosing) function scope

//Closure Example single function
function createCounter() {
    let count = 0;

    function incrementCount() {
        count++;
        console.log(count);
    }

    return incrementCount;
}

let counter = createCounter();
counter();
counter();
counter();

let counter2 = createCounter();
counter2();

count = 1000;
console.log(count);
counter();

// Miltiple function
function createCounter() {
    let count = 0;

    function incrementCount() {
        count++;
        console.log(count);
    }

    function getCount() {
        return count;
    }

    return {incrementCount,getCount};
}

let counter1 = createCounter();
counter1.incrementCount();
console.log(counter1.getCount());

// FUNCTION FACTORIES
function createGreeting(greeting) {
    return function(name) {
        console.log(greeting + ', '+name+'!');
    }
}

let sayHello = createGreeting("Hello");
sayHello("Alice");
sayHello("Saurav");

