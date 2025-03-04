const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const outputContainer = document.getElementById("output-container");

convertBtn.addEventListener("click", () => {
  let inputVal = input.value;
  outputContainer.style.display = "block";

  if (inputVal === "") {
    output.textContent = "Please enter a valid number";
    output.style.color = "rgb(186, 10, 10)";
  } else if (inputVal <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    output.style.color = "rgb(186, 10, 10)";
  } else if (inputVal >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    output.style.color = "rgb(186, 10, 10)";
  } else {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {
      while (inputVal >= values[i]) {
        result += symbols[i];
        inputVal -= values[i];
      }
    }
    output.style.color = "black";
    output.style.marginBlock = "20px";
    return (output.innerText = result);
  }
});
