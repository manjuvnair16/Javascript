//Reverse every other word in a string. Treat punctuation marks as part of the word and remove any padding at the start and end of the string

function reverse(str){
  let wordArr = str.split(' ');
  console.log(wordArr);
 for (let i=1; i<wordArr.length; i = i + 2){
    wordArr[i] = wordArr[i].split('').reverse().join('');
   console.log(wordArr[i]);
  }
  return wordArr.join(' ').trim();
  
}

console.log(reverse("I really like doing this, isn't it?"));

/*console log
I yllaer like gniod this, t'nsi it?
*/

//------------------------------------------------
/*Alternate Solutions

function reverse(string) {
  return string
    .split` `
    .map((w, i) => i & 1 ? [...w].reverse().join`` : w)  
    .join` `
    .trim();
}

*/
