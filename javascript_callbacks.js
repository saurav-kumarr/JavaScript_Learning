// A callbacks is a function that is passed as an argument to another function and is executed after a particular event or operation completes

// API
/*console.log("Immediate");

setTimeout(function() {
    console.log("Delay...");
}, 2000);*/

function fetchData() {
    setTimeout(() => {
        console.log("Data from server...");
        return "Sample Data";
    },2000);
}

function processData(){
    let data = fetchData();
    console.log(data);
}

processData();

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

// Callbacks for success / errors
function fetchDataWithAnon(callBack) {
    setTimeout(() => {
       let data =  "Sample Data";
       callBack(data);
    },2000);
}



fetchDataWithAnon(function(data) {
    console.log('With Anon:', data)
});

// Callbacks for success / errors
function fetchDataWithSuccessError(successCallBack,errorCallBack) {
    setTimeout(() => {
        let errorOccured = Math.random() < 0.5;
        if(errorOccured){
            errorCallBack("Error Occured");
        } else {
            let data =  "Sample Data";
         successCallBack(data);
        }
       
    },2000);
}

/*function onSuccess(data) {
    console.log("Success : ",data);
}

function onError(data){
    console.log("Error : ",data);
}

fetchDataWithSuccessError(onSuccess,onError);
*/

fetchDataWithSuccessError((data) => {
console.log("Success : ",data);
},(data) => {
    console.log("Error : ",data);
});

// Chained callBacks  ,  CallBack Hell
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 DONE");
        callback();
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 DONE");
        callback();
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 DONE");
        callback();
    }, 1000)
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("all steps completed")
        });
    });
});

// Use CallBacks with Array methods
let numbers = [1,2,3,4,5,6];
let doubleNumbers = numbers.map(function(number){
    return number * 2;
});
console.log(doubleNumbers);