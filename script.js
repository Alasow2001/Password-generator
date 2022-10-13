// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// This function will control the validation of the users password
function generatePassword(){

  // This includes the various options that the user should include in their password
  var options = {
    numberOfChars: 0,
    hasSpecialChars: false,
    hasNumberChars: false,
    hasUpperChars: false,
    haslowerChars: false,
  }
  
  var passwordLength = window.prompt("How long would you like your password to be?");

  // This will ask the user how long they would like their password to be, ensuring that the length of the password is both a number and within the boudaries of an acceptable password length.
  if(isNaN(passwordLength)){
    window.prompt("Please enter a valid number");
  } else if (passwordLength < 8 || passwordLength > 128){
    window.prompt("Please enter a valid number that is greater than 8 or no less than 128");
  }
  options.numberOfChars = passwordLength;


  // This will then ask the user if they would like upper/lower case characters as well as number and special characters
  options.haslowerChars = confirm("Would you like to have lower case characters?");
  options.hasSpecialChars = confirm("Would you like to have special characters?");
  options.hasUpperChars = confirm("Would you like to have upper case characters?");
  options.hasNumberChars = confirm("Would you like to have number characters?");

  
  var lowerCaseChars = [];

  if(options.haslowerChars){

  }

  var upperCaseChars = [];

  if(options.hasUpperChars){

  }

  var specialChars = [];

  if(options.hasSpecialChars){

  }

  var numberChars = [];

  if(options.hasNumberChars){

  }

  // This will then set a randomly generated password that fits the criteria 
  var password = '';
  for(var i = 0; i<options.numberOfChars; options.numberOfChars++){

    password += Math.random();
  
  }








  return('password');
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
