// - `async/await` simplifies asynchronous code by making it look like synchronous code.
// - It improves readability and makes error handling staightforward with `try...catch`.
// - You can use `async/await` with multiple
// asynchronous operations, HTTP requests.

// With Promises
function getData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           let success = Math.random() < 0.5;
            if(success) {
                const data = {name : "John", age : 30};
                resolve(data);
            } else {
                reject("Error: some reason");
            }
        }, 1000)
    });
}
async function getDataAsync() {
    try {
         let data1 = await getData();
         console.log("1:",data1);

         let data2 = await getData();
         console.log("2:",data2);
    } catch (error) {
        console.error('ERROR', error);
    }
   
}
getDataAsync();

/*getData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  */