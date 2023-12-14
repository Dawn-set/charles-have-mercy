
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
sliderValue.textContent = inputSlider.value

});

const smallLetters = "abcdefghijklmnopqrstuvwxyz"
const bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = 1234567890
const symbols = "!@#$%^&*()_+}{|>?<"


//The Button
const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
  //For the Inputs, check the ones that was checked, It returns true or false.

const upperCase = document.getElementById("Uppercase").checked
const lowerCase = document.getElementById("Lowercase").checked
const isNumbers = document.getElementById("Numbers").checked
const isSymbols = document.getElementById("Symbols").checked
const resultBox = document.querySelector(".result-box")
//Get the chosen password length
const passwordLength = inputSlider.value
  
  let typeOfPassword = "" ;
  let generatedPassword = "";

  if (upperCase === true) {
      typeOfPassword = typeOfPassword + bigLetters
  }

  if (lowerCase === true){
    typeOfPassword = typeOfPassword + smallLetters
  }

  if (isNumbers === true){
    typeOfPassword = typeOfPassword + numbers
  }

  if (isSymbols === true){
    typeOfPassword = typeOfPassword + symbols
  }

  //Get the type of password length
  const typeOfPasswordLength = typeOfPassword.length

  for (i = 0; i < passwordLength ; i++) {
    const number = (Math.floor(Math.random() * typeOfPasswordLength ) + 1)
    generatedPassword = generatedPassword + typeOfPassword.charAt(number)
  }
  resultBox.value = generatedPassword

// for the copy icon
const copied = document.querySelector('.fa-copy');
copied.addEventListener('click', () =>{
  copyPasswords();

  function copyPasswords(){
    resultBox.select();
    resultBox.setSelectionRange( 0, 9999);
    navigator.clipboard.writeText(resultBox.value)
  }

});

});









