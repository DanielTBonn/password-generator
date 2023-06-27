// Assignment code here

// Pass length must be between 8 and and 128 characters inclusive
function getPasswordLength() {
  var len = Number(window.prompt("Please enter a password length between 8 - 128 characters (inclusive): ", ""));

  while (Number.isNaN(len) || (len < 8 || len > 128) ) {
    if (Number.isNaN(len)) {
      len = Number(window.prompt("Input must be a number: ", ""));
    } else if ((len < 8 || len > 128) && (len !== 0)) {
      len = Number(window.prompt("Number must be between 8 - 128 characters (inclusive): ", ""));
    } else if (len === null || len === 0) {
      return null;
    }
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

  if (chars.length === 0) {
    return null;
  }

  return chars;
}


// Generates a random number in the range of the variable passed through it
function randomIndexGen(range) {
  let num = Math.random() * range;
  num = Math.floor(num);
  return num;
}

// Generates password by passing in functions
function generatePassword(len, charSet) {
  var password = "";
  var passString = "";

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var numbers = "0123456789";
  var specialChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

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

  for (var i = 0; i < len; i++) {
    var index = randomIndexGen(passString.length);
    password += passString[index];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// ["A", "a", 1, "$"]

// Write password to the #password input
function writePassword() {
  var len = getPasswordLength();
  if (len === null) {
    return;
  }

  var charSet = getCharacters();
  if (charSet === null) {
    window.alert("Must include at least one characterset.");
    return;
  }

  var password = generatePassword(len, charSet);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
