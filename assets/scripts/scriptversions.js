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
       } else{
         // For loop that chooses random characters up until the password lenght, using
         // elegible characters
         for (let i = 0; i < passwordLength; i++){
           var password = '';
           password += elegibleChar[Math.floor(Math.random())*passwordLength];
         }
       }
       for (var i = 0; i < passwordLength; i++){
         var password = '';
         password += elegibleChar[Math.floor(Math.random()*passwordLength)];
       }
       console.log(passwordLength, password); // CONSOLE CHECK
       return password;
    } else {
      window.alert("You have entered an invalid number of characters. Please try again.")
    }
    console.log(passwordLength, password); // CONSOLE CHECK
    return password;
}