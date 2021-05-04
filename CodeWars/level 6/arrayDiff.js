function arrayDiff(a, b) {
  return (a.filter(ele => b.indexOf(ele) === -1));
  
}

console.log(arrayDiff([3,4], [3]));

/*console log
[ 4 ]
*/

//------------------------------------------------
/*Alternate Solutions

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}

*/
