// Function with Return (Who return value after successfull operation)


function getSquare(number){
    let result = number * number;
    return result;  // or return number * number;
   // console.log("Hi"); // Unreachable statement after return statement.
}

let sqNum = getSquare(2);
console.log(sqNum);

// Function returning multiple values [objects]
function getUserInfo() {
    return {
        userName : "Jaat",
        userAge : "20"
    }
}
console.log(getUserInfo());
let {userName,userAge} = getUserInfo(); // Variable name should match with return variable name
console.log(userName,userAge);

// Function return Array
function getDimension() {
    return [200,300,500];
};
console.log(getDimension());
let [w,h,d] = getDimension();
console.log(w,h,d);

// Function with multiple return statements
function checkAge(age) {
   if( age > 18 ){
    return "Adult";
   } else {
    return "Minor";
   }
}
console.log(checkAge(24));