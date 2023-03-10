// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define lists of potential characters for the password
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var lowArray = lowerChar;
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var upArray = upperChar;
var numericChar = '1234567890';
var numArray = numericChar;
var specialChar = '!"#$%&()*+,-./:;<=>?@^_`{|}~';
var scArray = specialChar;

function generatePassword(){
    // Ask user input for password length, then verify to continue creating password
    var passwordLength = prompt("Please enter your desired password length.");
    if (passwordLength >= 8 && passwordLength <= 128){
      // Create an array to include elegible characters, then add characters as user
      // picks
      var elegibleChar = [];
      var lowercase = window.confirm("Would you like to include lowercase letters?");
      if (lowercase){
        elegibleChar += lowArray;
      }
      var uppercase = window.confirm("Would you like to include uppercase letters?");
      if (uppercase){
        elegibleChar += upArray;
      }
      var numeric = window.confirm("Would you like to include numeric characters?");
      if (numeric){
        elegibleChar += numArray;
      }
      var special = window.confirm("Would you like to include special characters?");
      if (special){
        elegibleChar += scArray;
      }
      console.log(elegibleChar); // CONSOLE CHECK
      // Validate that user selected at least one character type
      if (!lowercase && !uppercase && !numeric && !special){
        window.alert("You must select at least one character type. Please try again.");
        return;
      }
    // Validate number of characters
    } else {
      window.alert("You have entered an invalid number of characters. Please try again.")
    }
    // Define a variable to store the password string
    var password = '';
    // For loop that chooses random characters up until the password lenght, using
    // elegible characters
    for (var i = 0; i < passwordLength; i++){
      password += elegibleChar[Math.floor(Math.random()*elegibleChar.length)];
      console.log(password)
      //CONSOLE CHECK
    }
    console.log(passwordLength, password); // CONSOLE CHECK
    return password;
}

// Write password to the #password input
function writePassword() {
  // Generate the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
