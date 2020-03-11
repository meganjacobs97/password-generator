// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    //list of upper characters 
    var upperCharArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
    //list of lower characters 
    var lowerCharArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
    //list of numeric characters 
    var numArr = ["1","2","3","4","5","6","7","8","9"]; 
    //list of special characters 
    var specialArr = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]; 
    //prompt user 
    var numChars = prompt("How many characters would you like your password to be?"); 
        //password length 
            //check the length is between 8 and 128 
    //data vaidation 
    //isNaN returns true is not a number 
    //if not a number or not between 8 and 128
    while(!(parseInt(numChars) >= 8 && parseInt(numChars) <= 128)) {
        //ask for input until valid 
        var numChars = prompt("Password must be between 8 and 128 characters. How many characters would you like your password to be?"); 
    }
    //ask user if they want uppercase letters 
    var wantsUpper = confirm("Would you like uppercase characters in your password?"); 
    //ask user if they want lowercase letters 
    var wantsLower = confirm("Would you like lowercase characters in your password?"); 
    //ask user if they want numbers 
    var wantsNum = confirm("Would you like numbers in your password?"); 
    //ask user if they want special characters 
    var wantsSpecial = confirm("Would you like special characters in your password?"); 

    //check that user selected at least one option 
    while(wantsUpper === false && wantsLower === false && wantsNum === false && wantsSpecial === false) {
        //alert user of requirements 
        alert("You must agree to have at least one type of character."); 
        //continue to ask for preferences
        var wantsUpper = confirm("Would you like uppercase characters in your password?"); 
        var wantsLower = confirm("Would you like lowercase characters in your password?"); 
        var wantsNum = confirm("Would you like numbers in your password?"); 
        var wantsSpecial = confirm("Would you like special characters in your password?"); 
    }

    var choiceArr = []; 

    //if they want uppercase characters 
    if(wantsUpper) {
        //add upper arr to choice arr with .concat 
        choiceArr = choiceArr.concat(upperCharArr); 
    }
    //if they want lowercase characters
    if(wantsLower) {
        //add lower arr to choice arr with .concat 
        choiceArr = choiceArr.concat(lowerCharArr); 
    }
    //if they want numeric characters 
    if(wantsNum) {
        //add num arr to choice arr with .concat 
        choiceArr = choiceArr.concat(numArr); 
    }
    //if they want special characters 
    if(wantsSpecial) {
        //add special arr to choice arr with .concat 
        choiceArr = choiceArr.concat(specialArr); 
    }

    //create password string 
    var password = ""; 
    var index; 

    //loop for number of times that user specified for password length 
    for(var i = 0; i < numChars; i++) {
        //get random number between zero and number of elements in choice arr
        index = Math.floor(Math.random() * choiceArr.length); 
        //grab index from choices array and add onto password string 
        password += choiceArr[index];
    }

    //return password 
    return password; 
}

