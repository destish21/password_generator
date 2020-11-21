// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log('in write password')
  var passlength = prompt("How long do you want your password?(between 8 &1 28)");// take user input
  //TODO test if the input is in the range (validate user input)
  console.log(passlength) // check user input
  var password = generatePassword(passlength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click",
  writePassword);

// prompts that come up after you click generate password

function generatePassword() {
  var passwordLength = prompt('Enter anumber between 8 & 128');
  var numbers = confirm('Do you want numbers in your password?');
  var lowerCase = confirm('Do you want lowercases in your password?');
  var upperCase = confirm('Do you want uppercase in your password?');
  var symbol = confirm('Do you want symbol in your password?');
  // least count for numbers, lowercase, uppercase & symbols

// function generatePassword(length) {
  // confirm user wants uppercase, add uppercase to chars 
  var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var wantsLowercase = confirm("Do you want lowercase?")
  if ('Do you wantLowercase?') {
    //add the lowercase array into the chars array
  }
  console.log("this is the password length: ", length)
  var result = ""
  for (var i = 0; i < length; i++) {
    //add an x to password
    result = result + chars[0]
  }
  return result
}


function generatePassword(length) {
  // confirm user wants uppercase, add uppercase to chars 
  var chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var wantsuppercase = confirm("Do you uppercase?")
  if ('Do you want Uppercase?') {
    //add the uppercase array into the chars array
  }
  console.log("this is the password length: ", length)
  var result = ""
  for (var i = 0; i < length; i++) {
    //add an x to password
    result = result + chars[i]
  }
  return result
}

function generatePassword(length) {
  // confirm user wants symbols, add symbols to chars 
  var chars = ['~!@#$%^&(){}[]=<>/\|?,.;'];

  var symbol = ['~!@#$%^&(){}[]=<>/\|?,.;'];

  var wantssymbol = confirm("Do you want symbol?")
  if ('Do you want symbol?') {
    //add the symbol array into the chars array
  }
  console.log("this is the password length: ", length)
  var result = ""
  for (var i = 0; i < length; i++) {
    //add an x to password
    result = result + chars[0]
  }
  return result
}

function generatePassword(length) {
  // confirm user wants numbers, add numbers to chars 
  var chars = ['0123456789'];
  var number = ['0123456789'];
  var wantsnumber = confirm("Do you want number?")
  if ('Do you want number?') {
    //add the numbers array into the chars array
  }
  console.log("this is the password length: ", length)
  var result = ""
  for (var i = 0; i < length; i++) {
    //add an x to password
    result = result + chars[0]
  }
  return result
}

// function writePassword() {

// var randomPasswordLength = prompt('Enter anumber between 8 & 128');
// if (generatePassword)
// for (var i= 0; i < result; i++)
// result = result+lowerCase['a-z']+uppercase['A-Z']+symbol[0]+number[0];
// return result
//   var randomPasswordGenerated = result[Math.floor(Math.random() * result.lenght)];

// };




// *******************




// prompts that come up after you click generate password

// function generatePassword() {
//   var passwordLength = prompt('Enter anumber between 8 & 128');
//   var numbers = confirm('Do you want numbers in your password?');
//   var lowerCase = confirm('Do you want lowercases in your password?');
//   var upperCase = confirm('Do you want uppercase in your password?');
//   var symbol = confirm('Do you want symbol in your password?');
//   // least count for numbers, lowercase, uppercase & symbols


//   // empty string variable for the loop below

//   var randomPasswordGenerated = "";
//   for (let i = 0; i < (parseInt(passwordLength) - leastCount); i++) {
//     varleastrandomNumberPicked = Math.floor(Math.random() * 16);
//     randomPasswordGenerated += leastrandomNumberPicked;
//     randomPasswordGenerated += leastNumbers;
//     randomPasswordGenerated += leastLowerCases;
//     randomPasswordGenerated += leastUpperCases;
//     randomPasswordGenerated += leastSymbols;

//     return randomPasswordGenerated;
//   }

//   var leastCount = [];
//   var leastNumber = ['0123456789'];

//   var leastLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//   var leastUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   var leastSymbol = ['~!@#$%^&(){}[]=<>/\|?,.;'];
// };

// // Generat function **

// var functionArr = {
//   getNumbers: function () {
//     return String.fromCharCode(Math.floor(Math.random() * 10 + 48));

//   },

//   getLowerCase: function () {
//     return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
//   },

//   getUpperCase: function () {
//     return String.fromCharCode(Math.floor(Math.random() * 26 + 65));

//   },
//   getSymbol: function () {
//     returnSymbols[Math, floor(Math.random() * symbols.length)]
//   }

// };

// // checks to make sure users selected ok for all and uses empty least from above

// // if ( leastnumbers === true ) {
// //     leastNumbers = functionArr.getNumbers(); 
// //      leastCount++; 

// //     }

// if (leastnumbers) {
//   for (i = 0; i < leasnumber.length; i++)
//     leastCount.push(leastnumber[i]);

// };

// // console.log(leastNumber)

// // if (leastlowerCases === true ) {
// //         leastlowerCases = functionArr.getLowerCases(); 
// //         leastCount++; 

// //       };

// if (leastlowerCases) {
//   for (i = 0; i < leastlowerCase.lenght; i++)
//     leastCount.push(leastlowerCase[i]);

// };

// // if (leastupperCases === true) {
// //     leastUpperCases = functionArr.getUpperCases();
// //     leastCount++;
// // };

// if (leastupperCases) {
//   for (i = 0; i < leastupperCase.lenght; i++)
//     leastCount.push(leastupperCase[i]);
// };

// //  if ( leastsymbol === true) {
// //             leastSymbols = functionArr.getSymbols();
// //             leastCount++;

// //           };

// if (leastsymbol) {
//   for (i = 0; i < leastSymbols.lenght; i++)
//     leastCount.push(leastSymbols[i]);

// }

// var randomPasswordGenerated = "";
// var leastCount = [];

// console.log(leastCount);
// for (i = 0; i < leastCount; i++) {
//   var randomPasswordGenerated = leastCount[Math.floor(Math.random() * leastCount.lenght)];
//   myNewPassword.push(randomPasswordGenerated);
//   // assign the random password at at h2 
//   var h1El = document.createElement("h3");
//   h1El.textContent = myNewPassword.join("");
//   document.querySelector("#password").appendChild(h1El);


// }
































