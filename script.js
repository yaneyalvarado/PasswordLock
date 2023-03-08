// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "123456789"
var specialCharacters = "!@#$%*()^&<>?/:;+=|"


function charactergenerator(str) {
  return str[Math.floor(Math.random() * str.length)]
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var length; 
  var password = ""
  var passwordoptions = ""


  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(prompt("How long would you like your password to be?"))
  }

  var includelowercase = confirm("Do you want your password to contain lowercase letters?")
  var includeuppercase = confirm("Do you want your password to contain uppercase letters?")
  var includenumbers = confirm("Do you want your password to contain numbers?")
  var includespecialcharacters = confirm("Do you want your password to contain special characters?")

  if (includelowercase) {
    password += charactergenerator(lowercase)
    passwordoptions += lowercase
  }

  if (includeuppercase) {
    password += charactergenerator(uppercase)
    passwordoptions += uppercase
  }

  if (includenumbers) {
    password += charactergenerator(number)
    passwordoptions += number
  }

  if (includespecialcharacters) {
    password += charactergenerator(specialCharacters)
    passwordoptions += specialCharacters
  }

  for (let i = password.length; i < length; i++) {
    password += charactergenerator(passwordoptions)
    
  }

  return password 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
