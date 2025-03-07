const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

checkBtn.addEventListener("click", () => {
  const inputVal = input.value.trim();
  if (!inputVal) {
    alert("Please provide a phone number");
    return;
  }

  const validPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  const isValid = validPattern.test(inputVal);

  result.textContent = isValid ? `Valid US number: ${inputVal}` : `Invalid US number: ${inputVal}`

});
clearBtn.addEventListener("click", () => {
  input.value = "";
  result.textContent = "";
});
