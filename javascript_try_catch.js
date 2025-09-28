//`try...catch` statement in JavaScript
// allows you to handle errors gracefully

//
try {
    a();
    console.log("Hi")
} catch (error) {
    console.error(error.message);
}

//
function a1() {

}
try {
    a1();
    console.log("Hi")
} catch (error) {
    console.log(error.message);
}

//
function a2() {

}
try {
    a2();
    console.log("Hi")
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Everything is fine")
}