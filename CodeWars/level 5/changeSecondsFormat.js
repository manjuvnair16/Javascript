//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//HH = hours, padded to 2 digits, range: 00 - 99
//MM = minutes, padded to 2 digits, range: 00 - 59
//SS = seconds, padded to 2 digits, range: 00 - 59
//The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  let hrs = Math.floor(seconds/3600);
  seconds -= (hrs * 3600);

  let mins = Math.floor(seconds/60);
  seconds -= (mins * 60);
  
  let hrsStr = hrs < 10 ? '0' + hrs +':' : hrs +':';
  let minsStr = mins < 10 ? '0' + mins +':' : mins +':';
  let secStr = seconds < 10 ? '0' + seconds : seconds;
  
  return hrsStr + minsStr + secStr
}


console.log(humanReadable(60));

/*console log
00:01:00
*/

//------------------------------------------------
/*Alternate Solutions

function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}

*/

