// Return a new array with the strings filtered out
function filter_list(l) {
  return l.filter(element => typeof element === 'number');
}

console.log(filter_list([1,2,'aasf','1','123',123]));

/*console log
[ 1, 2, 123 ]
*/


//---------------------------------------
/* Alteranate Solution

function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}

*/
