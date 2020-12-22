// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lower = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var upper = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '/'];
var passWord = "";

var random = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var generatePassword = function () {
  var plength = parseInt(prompt("How long do you want your password to be?"));
  if (plength < 8 || plength > 128 ) {
    alert("Must be between 8 and 128.");
    return "Try Again";
  }
  if (isNaN(plength) === true) {
    alert("Must be a number.")
    return "Try Again";
  }
  var specialChar = confirm("Do you want special characters?");
  var upperChoice = confirm("Do you want capital letters?");
  var lowerChoice = confirm("Do you want lowercase letters?");
  var numberChoice = confirm("Do you want to add numbers?");

  if(!specialChar && !numberChoice && !lowerChoice && !upperChoice) {
    alert("You must pick at least 1 choice.")
    return "Try Again";
  }

  while (passWord.length < plength) {

    if (numberChoice === true) {
      passWord += random(numbers);

    }
    if (specialChar === true) {
      passWord += random(symbols);

    }
    if (upperChoice === true) {
      passWord += random(upper);

    }
    if (lowerChoice === true) {
      passWord += random(lower);

    }
   
  };
passWord = passWord.slice(0,plength);
return passWord; 

  // $("#password").append(passWord);
  // Be sure to test that your code works for this major task, before proceeding to the next one!
};

$("#generate").on("click", writePassword);
