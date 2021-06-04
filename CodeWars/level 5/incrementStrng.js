//write a function which increments a string, to create a new string.
//If the string already ends with a number, the number should be incremented by 1.  e.g: foo001 => foo002, foo99 => foo100
//If the string does not end with a number. the number 1 should be appended to the new string. e.g: foo => foo1

function incrementString (strng) {
  let regex = /\d+$/;
  let numArr = strng.match(regex)
  if (numArr){
    let numStrng = numArr[0];
    let incr = (Number(numStrng)+1).toString();
    if (incr.length < numStrng.length){
      incr = incr.padStart(numStrng.length,0);
    }
    
    return strng.replace(regex,incr);
  }
  else
    return strng + '1';
}

console.log(incrementString("foobar007"));

/*console log
foobar008
*/

/*Alternate solutions

function incrementString (strng) {
  return strng.replace(/[\d]*$/, i => String(+i + 1).padStart(i.length, 0));

}

function incrementString(input) {
  return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
      return +d + 1 + ns.replace(/9/g, '0');
    });
}

*/
