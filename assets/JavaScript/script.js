function generatePassword() { 
  alert("Welcome to the Password Generator! Please click 'OK' to begin.");

  // Creating a list of choices for password criteria to inform the user.
  alert("Please choose the criteria for your password from the list below. \n\n1. Password length between 8 and 128 characters. \n2. Lowercase letters. \n3. Uppercase letters. \n4. Numbers. \n5. Special characters. \n\nIn order to generate a password, you must choose at least one of the criteria. \nClick 'OK' to continue.");
  
  alert("In the next series of prompts, please choose the criteria for your password. \n\nNote: Password must be between 8 and 128 characters. \n\nClick 'OK' to continue.");

  // Prompting the user to choose the length of their password. Also adding an if statement to validate the user's input.
  // Used (https://www.w3schools.com/jsref/met_win_prompt.asp) as a reference for the prompt method.
  let passwordLength = prompt("Please enter the length of your password. \n\nNote: Password must be between 8 and 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  } else {
    alert("Your password will be " + passwordLength + " characters long.");
  }

  // Prompting the user to choose the criteria for their password. Also adding an if statement to make sure the user chooses at least one of the criteria.
  //Used (https://www.w3schools.com/jsref/met_win_confirm.asp) as a reference for the confirm method.
  let lowercase = confirm("Would you like to include lowercase letters in your password?");
  let uppercase = confirm("Would you like to include uppercase letters in your password?");
  let numeric = confirm("Would you like to include numbers in your password?");
  let special = confirm("Would you like to include special characters in your password?");
  if (lowercase === false && uppercase === false && numeric === false && special === false) {
    alert("You must choose at least one of the criteria.");
    return;
  }
  // Just a little fun for the user to see what criteria they chose.
  if (lowercase) {
    lowercase = "Sure!";
  } else {
    lowercase = "Nope!";
  }
  if (uppercase) {
    uppercase = "Sure!";
  } else {
    uppercase = "Nope!";
  }
  if (numeric) {
    numeric = "Sure!";
  } else {
    numeric = "Nope!";
  }
  if (special) {
    special = "Sure!";
  } else {
    special = "Nope!";
  }
  alert("Your password will include the following criteria: \n\nLowercase letters: " + lowercase + "\nUppercase letters: " + uppercase + "\nNumbers: " + numeric + "\nSpecial characters: " + special);

  // generating the password
  //Used(https://owasp.org/www-community/password-special-characters) as a reference for the special characters.
  let password = "";
  let passwordCharacters = "";
  let lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericCharacters = "0123456789";
  let specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  //Adding the user's chosen criteria to the passwordCharacters variable.
  if (lowercase === "Sure!") {
    passwordCharacters += lowercaseCharacters;
  }
  
  if (uppercase === "Sure!") {
    passwordCharacters += uppercaseCharacters;
  }
  
  if (numeric === "Sure!") {
    passwordCharacters += numericCharacters;
  }
  
  if (special === "Sure!") {
    passwordCharacters += specialCharacters;
  }
  // console.log(passwordCharacters);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
