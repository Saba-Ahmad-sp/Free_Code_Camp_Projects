const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener('click', () => {

  const text = input.value.trim();
  const cleanedText = text.replace(/[^a-zA-Z0-9]/g, "")
  if(text === "") {
    alert("Please input a value");
    return;
  } 

  const normalizedText = cleanedText.toLowerCase();
  const reversedText = normalizedText.split("").reverse().join("");

  if(text.length === 1){
    result.textContent =`${text} is a palindrome.`;
  } else if(normalizedText === reversedText){
    result.textContent = `${text} is a palindrome.`;
  } 
  else{
    result.textContent = `${text} is not a palindrome.`;
  }
});
