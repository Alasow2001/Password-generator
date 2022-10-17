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

  // The following 16 lines will contain an array of lower/upper case characters, special and number characters.
  // It also contains an if statement that will randomly chose an item in the array for a given password

  var characters = []

  var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  if(options.haslowerChars){
    characters.concat(lowerCaseChars);
  }

  var upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  if(options.hasUpperChars){
    characters.concat(upperCaseChars);
  }

  var specialChars = ['!', '"', '#', '$', '%', '&', '(', ',', ')', '*', '+', '-', '.', '/', ':', 
  ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
  if(options.hasSpecialChars){
    characters.concat(specialChars);
  }

  var numberChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  if(options.hasNumberChars){
    characters.concat(numberChars);
  }

  // This will then set a randomly generated password that fits the criteria, combining all four options into one password.
  var password = '';
  for(var i = 0; i<options.numberOfChars; options.numberOfChars++){
    password += characters[Math.floor(Math.random() * options.numberOfChars)];
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
