// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var passLength = prompt('Enter anumber between 8 & 128');
  if (passLength < 8 || passLength > 128) {
    alert("password must be > 8 & < 128")
    return
  } else {
    var number = confirm('Do you want numbers in your password?');
    var lowerCase = confirm('Do you want lowercases in your password?');
    var upperCase = confirm('Do you want uppercase in your password?');
    var symbol = confirm('Do you want symbol in your password?');

    var lowerCasel = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var uppercasel = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", "|", "?"];

    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (isNaN(passLength.valueOf()) || passLength == 0 || passLength.trim() == '') {
      alert('You have to enter a Number!');

    } else {

      var totChar = [];
      console.log(totChar)
      if (lowerCase) {
        for (var i = 0; i < lowerCasel.length; i++) {
          totChar.push(lowerCasel[i])
        }
      }

      if (upperCase) {
        for (var i = 0; i < uppercasel.length; i++) {
          totChar.push(uppercasel[i])
        }
      }

      if (symbol) {
        for (var i = 0; i < symbols.length; i++) {
          totChar.push(symbols[i])
        }
      }

      if (number) {
        for (var i = 0; i < numbers.length; i++) {
          totChar.push(numbers[i])
        }
      }

      var myFinalPassword = [];
      for (i = 0; i < passLength; i++) {
        var randPassword = totChar[Math.floor(Math.random() * totChar.length)];
        myFinalPassword.push(randPassword);
      }
      var passwordText = document.querySelector("#password");

      passwordText.textContent = myFinalPassword.join("")


    }
  }
}
