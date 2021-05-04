//return the position of the letter from the alphabet set. e.g: a=1, B=2, etc

function alphabetPosition(text) {
  let repStr ='';
  for (let i=0; i<text.length; i++){
    let charCode = text.toUpperCase().charCodeAt(i);
    if  (65 <= charCode && charCode <= 90){
      
      repStr = repStr + (charCode - 64) + ' ';
    }
  }
  return repStr.trim();
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

/*console log
20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
*/

//------------------------------------------------
/*Alternate Solutions

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

*/
