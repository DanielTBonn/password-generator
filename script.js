// Assignment code here

// Pass length must be between 8 and and 128 characters inclusive
function getPasswordLength() {
  var len = window.prompt("Please enter a password length between 8 - 128 characters (inclusive): ", "");
  
  len = Number(len)

  if (Number.isNaN(len)) {
    return;
  }

  if (len < 8 || len > 128) {
    return;
  }

  return len;
}

// Character types may include lowercase, uppercase, numeric, and/or special characters
function getCharacters() {
  var chars = [];

  answer = window.prompt("Would you like to include uppercase characters? [y/n]", "");
  if (answer === 'y') {
    chars.push('A');
  }

  answer = window.prompt("Would you like to include lowercase characters? [y/n]", "");
  if (answer === 'y') {
    chars.push('a');
  }

  answer = window.prompt("Would you like to include numeric characters? [y/n]", "");
  if (answer === 'y') {
    chars.push(1);
  }

  answer = window.prompt("Would you like to include special characters? [y/n]", "");
  if (answer === 'y') {
    chars.push("$");
  }

  return chars;
}

function randomIndexGen(range) {
  let num = Math.random() * range;
  num = Math.floor(num);
  return num;
}

// Generates password by passing in functions
function generatePassword(len, charSet) {
  var password;
  var passString = "";
  console.log(len, charSet);

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var numbers = "0123456789";
  var specialChars = "";

  if (charSet.includes("A")) {
    passString += uppercase;
  }

  if (charSet.includes("a")) {
    passString += lowercase;
  }

  if (charSet.includes(1)) {
    passString += numbers;
  }

  if (charSet.includes("$")) {
    passString += specialChars;
  }

  var index = randomIndexGen(passString.length);
  console.log(passString.length, ": ",index);

  for (var i = 0; i < len; i++) {
    password += "";
  }

  console.log(passString);
  console.log(passString[5]);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(8, ["A", "a", 1, "$"]);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
