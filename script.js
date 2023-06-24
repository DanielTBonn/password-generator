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
  var chars = [];

  answer = window.prompt("Would you like to include uppercase characters? [y/n]", "");
  if (answer === 'y') {
    chars.push('A')
  }

  answer = window.prompt("Would you like to include lowercase characters? [y/n]", "");
  if (answer === 'y') {
    chars.push('a')
  }

  answer = window.prompt("Would you like to include numeric characters? [y/n]", "");
  if (answer === 'y') {
    chars.push(1)
  }

  answer = window.prompt("Would you like to include special characters? [y/n]", "");
  if (answer === 'y') {
    chars.push("$")
  }

  return chars;
}

// Generates password by passing in functions
function generatePassword(len, charSet) {
  var password;
  console.log(len, charSet);
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
