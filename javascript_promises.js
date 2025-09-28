// Promises provide a cleaner and more structured way to handle asynchronous operations
// then() : when promise is fullfilled
// catch() : When promise is rejected

// Call Back
function fetchDataWithCallback(callBack) {
    setTimeout(() => {
       let data =  "Sample Data";
       callBack(data);
    },2000);
}

function processDataWithCallback(data){
    console.log("With callBack: ", data);
}

fetchDataWithCallback(processDataWithCallback);


// With Promises
function getData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const data = {name : "John", age : 30};
            resolve(data);
        }, 1000)
    });
}

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })


// With Promises : Success and Failure
function getData1() {
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

getData1()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })


  // With Promises : Success and Failure , Finally
function getData2() {
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

getData2()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("finally....");
  });

    // Multiple promises
    let promise1 = getData2();
    let promise2 = getData2();
    let promise3 = getData2();

    Promise.all([promise1,promise2,promise3])
    .then((data) => {
        console.log("All done",data);
    })
    .catch((error) => {
        console.error("Atleast one failure", error);
    })

    
    Promise.race([promise1,promise2,promise3])
    .then((data) => {
        console.log("Race this done",data);
    })
    .catch((error) => {
        console.error("Race", error);
    })
    