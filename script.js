// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// This function will control the validation of the users password
function generatePassword(){

  // Prompt asking the user how long the password should be
  var length = window.prompt("How long would you like your password to be?");

  // Restarts the app if the number doesn't meet the requirements
  if(length < 8 || length > 128){
    window.alert("You must enter a valid number")
    return generatePassword();
  }

  // Asks the user if they would like any of these characters
  if(length >= 8 || length <=128){
    var hasLowerChars = confirm("Would you like lower case characters?")
    var hasNumberChars = confirm("Would you like number characters?")
    var hasUpperChars = confirm("Would you like upper case characters?")
    var hasSpecialChars = confirm("Would you like special case characters?")
  }

  // Will ask the user to confirm at least on type of character if they have selected none of them
  if(hasNumberChars===false && hasNumberChars===false && hasNumberChars===false && hasNumberChars===false){
    window.alert("Please confirm at least one type of the criteria")
    return generatePassword();
  }

  
  if(hasNumberChars){
    var hasNumberChars = ["0123456789"]
  }

  if(hasLowerChars){
    var hasLowerChars = ["abcdefghijklmnopqrstuvwxyz"]
  }

  if(hasUpperChars){
    var hasUpperChars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  }

  if(hasSpecialChars){
    var hasSpecialChars = ["!£$%^&*()@~#"]
  }

  // Combining all of the options to create the password
  var generatedPassword = hasLowerChars+hasNumberChars+hasSpecialChars+hasUpperChars

  var password = ""

  // For loop going through each of the options to give a randomly generated password based on the users request
  for(var i=0; i<length; i++){
    var randomGenratedPassword = generatedPassword[Math.floor(Math.random() * generatedPassword.length)]
    password += randomGenratedPassword;
  }

  return [password]


}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
