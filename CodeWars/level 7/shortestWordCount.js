//Given a string of words, find the count of the shortest word

function findShort(s){
  let wordArr = s.split(' ').map(word => word.length);
  let shortestWord = Math.min(...wordArr);
  return shortestWord;
  
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

/*console log
3
*/

-------------------------------------
/*Alternate solutions

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s) {
  return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}

const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;


*/
