// JSON is a lightweight data format commonly used for data between the client and server

let jsonString = '{"name"  : "Alice","age" : 30,"city" : "GZB"}';
console.log(jsonString);

let userObject = JSON.parse(jsonString);
console.log(userObject);

let person = {
    "name"  : "Alice",
    "age" : 30,
    "city" : "GZB"
}
console.log(person);

console.log(JSON.stringify(person));