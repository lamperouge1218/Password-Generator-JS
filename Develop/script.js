// GIVEN I need a new, secure password


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// Need prompt boxes to pop up allowing entrance of data that user inputs


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password


// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// prompt to choose password length (with parameters set for being larger than 7 and less than)


// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// Confirm windows for each of these (?)


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// if/else statments should the choices be true or false


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// We have a finalArray that will have all of the possible choices in it provided user input
// Link the final array to a string of appropriate length and put random array components into that string

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  // Password generator --> accepts criteria for password from user --> concantenates relevant criteria choices into a finalArray
  // --> finalArray needs to be evaluated and random items from it need to be added to a string equal to the length of charNum 







// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var aZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var aZLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numOption = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];

var finalArray = [];


function generatePassword() {
  //Initial prompt to begin function
  alert("Please select from the following criteria regarding your password");

  //Assigning of value to how long the password should be
  var charNum = prompt("How many characters?");

  //Dialog box wherein user can input password desired length (no fewer than 8 characters, no more than 128)
  if (charNum < 8 || charNum > 128) {
    alert("Password must be between 8 and 128 characters long");
    var charNum = prompt("How many characters?");
  }
  else {
    console.log(charNum);

  }


  var lowCaseConfirm = confirm("Do you want lowercase letters?");

  if (lowCaseConfirm === true) {
    finalArray = finalArray.concat(aZLowerCase);
    console.log(finalArray);
    alert("We will include lowercase letters.");

  }
  else if (lowCaseConfirm === false) {
    alert("We will not include lowercase letters.")
  }


  var upCaseConfirm = confirm("Do you want uppercase letters?");

  if (upCaseConfirm === true) {
    finalArray = finalArray.concat(aZ)
    console.log(finalArray);
    alert("We will include uppercase letters.");

  }
  else if (upCaseConfirm === false) {
    alert("We will not include uppercase letters.")
  }

  var numConfirm = confirm("Do you want numbers?");

  if (numConfirm === true) {
    finalArray = finalArray.concat(numOption);
    console.log(finalArray);
    alert("We will include numbers.");
  }
  else if (numConfirm === false) {
    alert("We will not include numbers.");
  }

  var specCharConfirm = confirm("Do you want special characters?");

  if (specCharConfirm === true) {
    finalArray = finalArray.concat(specialCharacters);
    console.log(finalArray);
    alert("We will include special characters.");

  }
  else if (specCharConfirm === false) {
    alert("We will not include special characters.");
  }

  console.log(charNum);

  
  
















}