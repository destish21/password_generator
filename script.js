// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log('in write password')
  var passlength = prompt("How long you do want it")// take user input
  //TODO test if the input is in the range (validate user input)
  console.log(passlength) // check user input
var password = generatePassword(passlength);
var passwordText = document.querySelector("#password");

passwordText.value = password
}

function generatePassword (length){
// confirm user wants uppercase, add uppercase to chars 
var chars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var wantsLowercase= confirm("you want lowercase?")
if(wantsLowercase){
  //add the lowercase array into the chars array
}
console.log("this is the password length: ", length)
var result = ""
for(var i = 0; i < length; i++){
  //add an x to password
  result = result + chars[0]
}
return result
}

// Add event listener to generate button
generateBtn.addEventListener("click",
writePassword);





































