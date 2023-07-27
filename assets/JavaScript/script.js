function generatePassword() { 
  alert("Welcome to the Password Generator! Please click 'OK' to begin.");

  // Creating a list of choices for password criteria to inform the user.
  alert("Please choose the criteria for your password from the list below. \n\n1. Password length between 8 and 128 characters. \n2. Lowercase letters. \n3. Uppercase letters. \n4. Numbers. \n5. Special characters. \n\nIn order to generate a password, you must choose at least one of the criteria. \nClick 'OK' to continue.");
  
  alert("In the next series of prompts, please choose the criteria for your password. \n\nNote: Password must be between 8 and 128 characters. \n\nClick 'OK' to continue.");

  let passwordLength = prompt("Please enter the length of your password. \n\nNote: Password must be between 8 and 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  } else {
    alert("Your password will be " + passwordLength + " characters long.");
  }

  let lowercase = confirm("Would you like to include lowercase letters in your password?");
  let uppercase = confirm("Would you like to include uppercase letters in your password?");
  let numeric = confirm("Would you like to include numbers in your password?");
  let special = confirm("Would you like to include special characters in your password?");
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
