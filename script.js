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



var aZLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var aZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numOption = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];

var finalArray = [];
var passwordArray = []


function generatePassword() {
  //Initial prompt to begin function
  alert("Please select from the following criteria regarding your password");

  //Assigning of value to how long the password should be
  var charNum = prompt("How many characters?");

  //Dialog box wherein user can input password desired length (no fewer than 8 characters, no more than 128)
  if (charNum < 8 || charNum > 128) {
    alert("Password must be between 8 and 128 characters long");
    var charNum = prompt("How many characters?"); 
    //Prompt will enforce password length and charNum will update based on most recent acceptible length
  }
  else {
    console.log(charNum);  

  }

  //The following are the prompt boxes to select whether user wants the related criteria.
  //Each prompt box has a confirmation box for whether user picks Ok or Cancel
  var lowCaseConfirm = confirm("Do you want lowercase letters?");

  if (lowCaseConfirm === true) {
    finalArray = finalArray.concat(aZLowerCase);
    console.log(finalArray);
    alert("We will include lowercase letters.");

  }
  else {
    alert("We will not include lowercase letters.")
  }


  var upCaseConfirm = confirm("Do you want uppercase letters?");

  if (upCaseConfirm === true) {
    finalArray = finalArray.concat(aZ)
    console.log(finalArray);
    alert("We will include uppercase letters.");

  }
  else {
    alert("We will not include uppercase letters.")
  }

  var numConfirm = confirm("Do you want numbers?");

  if (numConfirm === true) {
    finalArray = finalArray.concat(numOption);
    console.log(finalArray);
    alert("We will include numbers.");
  }
  else {
    alert("We will not include numbers.");
  }

  var specCharConfirm = confirm("Do you want special characters?");

  if (specCharConfirm === true) {
    finalArray = finalArray.concat(specialCharacters);
    console.log(finalArray);
    alert("We will include special characters.");

  }
  else {
    alert("We will not include special characters.");
  }

  //Failsafe for if no criteria are chosen. Will restart the function from the beginning and wait for acceptible criteria
  if (finalArray.length === 0) {
    alert ("At least one criterion must be chosen!");
    generatePassword();
  }

  //for statement that takes random characters from the finalArray and turns them into a final password. 
  for (let i = 0; i < charNum; i++) {
    passwordArray.push (finalArray[Math.floor(Math.random() * finalArray.length)]);
  }

  //displays final password string taken from the passwordArray
  alert (passwordArray.join(""));  

  console.log(passwordArray);
}