document.getElementById('convert').onclick = function() {
    let temp = parseFloat(document.getElementById("temp").value);
    let unit = document.getElementById("unit").value;

    let convertedTemp = (unit === 'C')
    ? String(((temp * 9/5) + 32).toFixed(2)) + " °F" // Converted C to F 
    : String(((temp - 32) * 5/9).toFixed(2)) + " °C"; // Converted F to C

   document.getElementById("converted").textContent = convertedTemp;
};