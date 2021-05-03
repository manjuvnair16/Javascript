//Remove First and Last Character from a string

//my code
function removeChar(str){
 let truncStr = str.split('').map((strChar, i) => (i===0 || i===str.length -1)? '' : strChar);
 return truncStr.join('');
};

console.log(removeChar('eloquent'));
/*console log:
loquen */

//-----------------------------------------------------
/* Alternative solutions:

function removeChar(str) {
  return str.slice(1, -1);
}

function removeChar(str){
 return str.substring(1, str.length-1);
};


function removeChar(str){
 //You got this!
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join('');
    
};
*/
