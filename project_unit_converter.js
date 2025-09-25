const unitConverter = {
  mToFt: function (meters) {
    return meters * 3.28084;
  },

  kgToLb: function (kilograms) {
    return kilograms * 2.20462;
  },

  cToF: function (celsius) {
    return (celsius * 9) / 5 + 32;
  },
};

document.getElementById("convert").onclick = () => {
  let inputValue = parseFloat(document.getElementById("inputValue").value);
  let conversionType = document.getElementById("conversionType").value;

  if (!isNaN(inputValue)) {
    let convertedValue;
    convertedValue =
      conversionType === "mToFt"
        ? String(unitConverter.mToFt(inputValue).toFixed(2)) + " ft"
        : conversionType === "kgToLb"
        ? String(unitConverter.kgToLb(inputValue).toFixed(2)) + " lb"
        : String(unitConverter.cToF(inputValue).toFixed(2)) + " °F";
    document.getElementById("convertedValue").textContent = convertedValue;
  } else {
    alert("Please enter a valid number");
  }
};
