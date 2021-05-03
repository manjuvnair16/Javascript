//repeat a given string n times

function repeatStr (n, s) {
  let repStr = ''
  for (let i=1; i<=n; i++){
    repStr  += s;
    
  }
  return repStr;
}
console.log(repeatStr(7, "*"));

/* console log
*******
*/

//-----------------------------------
/* Alternative solution

function repeatStr (n, s) {
  return s.repeat(n);
}
*/
