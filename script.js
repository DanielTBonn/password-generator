// Assignment code here

// Pass length must be between 8 and and 128 characters inclusive
function getPasswordLength() {
  var len;

  var answer = window.prompt("Please enter a password length between 8 - 128 characters (inclusive): ", "");
  answer = Number(answer)

  if (Number.isNaN(answer)) {
    return;
  }

  if (answer < 8 || answer > 128) {
    return;
  }

  len = answer;
  return len;
}

// Character types may include lowercase, uppercase, numeric, and/or special characters
function getCharacters() {
  var chars = ['A', 'a', 1, '$']

  return chars;
}

// Generates password by passing in functions
function generatePassword(len, charSet) {
  var password;
  const passLength = len;
  const chars = charSet;
  return password;
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
