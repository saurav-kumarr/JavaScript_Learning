// Axios is a powerful HTTP client for making
// network requests in JavaScript.
// `axios.get()` is used to make a GET request
// `axios.post()` is used to make a POST request

// Aternative way of Fetch API

axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    console.log("GET: ", response.data);
})
.catch(error => console.log("ERROR", error));

let postData = {
    title: "Title Post",
    body: "Body Post"
};

axios.post('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    console.log("POST: ", response.data);
})
.catch(error => console.log("ERROR", error));
