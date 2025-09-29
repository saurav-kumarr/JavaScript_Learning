// The Fetch API provides a easy way to make network requests in JavaScript.

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));

let a = fetch('https://jsonplaceholder.typicode.com/todos/1');
a.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
});


// await and async
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();
console.log(data);

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}
fetchData();