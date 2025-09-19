console.log("Hello World!!");

document.getElementById("name").innerText = "Saurav";

document.getElementById('changeTextButton').onclick = function() {
    document.getElementById("name").innerText = 'Saurav Chaudhary';
    document.getElementById("name").style.backgroundColor = 'red';
    document.getElementById("name").style.color = 'pink';
}