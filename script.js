// Assignment code here

// Pass length must be between 8 and and 128 characters inclusive
function getPasswordLength() {
  var len = 8;
  return len;
}

// Character types may include lowercase, uppercase, numeric, and/or special characters
function getCharacters() {
  var chars = [];
  return chars;
}

// Generates password by passing in functions
function generatePassword(len, char) {
  return;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(getPasswordLength(), getCharacters());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
