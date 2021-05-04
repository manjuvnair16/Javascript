function getCount(str) {
  var vowelsCount = 0;
  let vowelsArr = str.match(/[aeiou]/g);
  vowelsCount = (vowelsArr !== null) ?  vowelsArr.length : 0;
  return vowelsCount;
}

console.log(getCount("abracadabra"));

/* console log
5 */

//--------------------------------
/*Alternate solutions
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}


function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
