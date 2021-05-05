//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//examples: pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  return str.replace(/(\w)(\w*)(\s)?/g,'$2$1ay$3');
   
}

console.log(pigIt('Pig latin is cool!'));
/*console log
igPay atinlay siay oolcay!
*/

//------------------------------------------------
/*Alternate Solutions

function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}

function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}

*/
