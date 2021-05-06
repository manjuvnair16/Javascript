//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
//ROT13 is an example of the Caesar cipher.
//Create a function that takes a string and returns the string ciphered with Rot13. 
//If there are numbers or special characters included in the string, they should be returned as they are. 
//Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
 let letterArr =  message.split('')
                      .map(letter => {
                            if (/[A-Ma-m]/.test(letter)) { return String.fromCharCode(letter.charCodeAt(0) + 13); } 
                            if (/[N-Zn-z]/.test(letter)) { return String.fromCharCode(letter.charCodeAt(0) - 13); } 
                            return letter;
                       });
  
 return letterArr.join('');
}

console.log(rot13('Test,test TEST*& test'));

/*console log
Grfg,grfg GRFG*& grfg
*/

//------------------------------------------------
/*Alternate Solutions

const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

function rot13(message) {
  var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}


*/


