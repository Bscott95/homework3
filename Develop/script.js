// creates variable generateBtn to use addEventListener method at end of code.
var generateBtn = document.querySelector("#generate");

// calls a series of functions to generate a password. Writes the password to the #password input
function writePassword() {
  var str = charType(); 
  var passLength = passwordLength();
  var password = generatePassword(str,passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Asks a series of questions to gather paramaters on what kind of characters should be included in the password. Loops until at least one set of characters is included. Returns a string that contains all the characters that will be used to generate a pasword.
function charType() {
  var str = ''
  count = 0;

  while (loop=true){
    // checks if user wants to include lowercase and adds it to str if they do.
    var includeLower = confirm("Do you want to include lowercase characters?")
    if(includeLower == true){
      str = str + 'abcdefghijklmnopqrstuvwxyz'
      count++
    }

    // checks if user wants to include uppercase and adds it to str if they do.
    var includeUpper = confirm("Do you want to include uppercase characters?")
    if(includeUpper == true){
      str = str + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      count++
    }

    // checks if user wants to include numbers and adds it to str if they do.
    var includeNum = confirm("Do you want to include numeric characters?")
    if(includeNum == true){
      str = str + '0123456789'
      count++
    }

    // checks if user wants to include special characters and adds it to str if they do.
    var includeSchar = confirm("Do you want to include special characters?")
    if(includeSchar == true){
      str = str + ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
      count++
    }

    // checks to make sure at least one set of characters is selected. If one or more has been selected, returns a string that contains the characters from which a password will be generated. Otherwise, it will ask the questions again.
    if (count > 0){
      loop = false;
      return str
    } else {
      alert("You must select at least one character set to include")
    } 
  }
}

// Asks how long the user wants the password to be. Checks to make sure it falls between 8 and 128. Returns an int variable with the length of the password.
function passwordLength(){
  while (loop=true){
    var passLength = prompt("How long would you like the password to be? Please choose between 8 and 128 characters.")
    if (passLength >= 8 && passLength <= 128){
      loop = false;
      return passLength;
    } else alert("That is an invalid response.")
  }
}

// Takes in a string that includes what characters will be used to create the password from the charType function. Takes in an int that defines how long the password will be from the passwordLength function. Generates and returns a random password.
function generatePassword(str,passLength){
  var pass = '';

  for(i=0; i<passLength; i++){
    var pos = Math.floor(Math.random() * str.length);
    char = str.charAt(pos)
    pass = pass + char;
  }

  return pass
}

// Add event listener to generate button. Links to var generateBtn on line 2 which selects the #generate ID. When clicked, runs the writePassword function.
generateBtn.addEventListener("click", writePassword);

