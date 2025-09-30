// Error Handling in API Requests

async function fetchData() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched Data:",data);

    } catch (error) {
        console.error("Error:",error);
    }     
}
fetchData();