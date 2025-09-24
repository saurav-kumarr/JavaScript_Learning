let person = {
    name : "Alice",
    age : 22
}

console.log(`Hi I am ${person.name}`);

// Methods -> Function inside a object
let person1 = {
    name : "Alice1",
    age : 22,
    greet : function() {
        console.log(`Hi I am ${person1.name}`);
    }
}
person1.greet();
console.log(`Hi I am ${person1.name}`);

//
let person2 = {
    name : "Alice2",
    age : 22,
    greet : () => {
        console.log(`Hi I am ${person2.name}`);
    }
}
person2.greet();

// (this) keyword doesn't work with arrow functions. Need normal function
let person3 = {
    name : "Alice3",
    age : 22,
    greet : function()  {
        console.log(`Hi I am ${this.name}`);
    }
}
person3.greet();

// Counter
let counter = {
    value : 0,
    increment : function() {
        this.value +=1;
        return this.value;
    }
}

console.log(counter.increment());  // 1
console.log(counter.increment()); // 2

//
let counter1 = {
    value : 0,
    incrementBy : function(num) {
        this.value +=num;
        return this.value;
    },
    incrementBy1 : function(num) {
        this.value +=num;
        return this.value;
    }
}

console.log(counter1.incrementBy(10));  
console.log(counter1.incrementBy1(10)); 

// Defining methods dynamically
let dynamicMethod = {
    value : 0
};

console.log(dynamicMethod.value);

dynamicMethod.sayHi = function() {
    console.log("Hello Dynamic");
}

dynamicMethod.sayHi();


// Nested object function work
let car = {
    brand : "Toyota",
    specs : {
        speed : 120,
        displaySpecs : function() {
            console.log(`Speed`,this.speed);
        }
    }
}
car.specs.displaySpecs();

// Shorthand version
let personShortHand = {
    name : "Short Hand",
    age : 20,
    greet() {
        console.log(`Hi I am ${this.name}`);
    }
}

personShortHand.greet();