//check if the first string argument is the anagram of the second string argument

var isAnagram = function(test, original) {
  //test the length of 2 strings, if different return false
  if (test.length !== original.length){
    return false;
  }
  
  // else split the test string into each letter, 
  // check if this letter is present in the original string
  // if yes, remove this letter from the original string and keep testing for the next letter, else return false
  let testLetterArr = test.toLowerCase().split('');
  for (let i=0; i<testLetterArr.length; i++){
    let indexOrig = original.toLowerCase().indexOf(testLetterArr[i])
    if (indexOrig !== -1){
      original = original.slice(0,indexOrig) + original.slice(indexOrig+1,original.length);
    }
    else{
      return false;
    }
  }
  return true; //return true if all the letters match
 };

console.log(isAnagram("apple", "pale"));
/*console log
false
*/


//--------------------------------------------------------
/*Alternate solutions

var isAnagram = function(test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return (t==o)?true:false;
};

String.prototype.sortLetters = function() {
  return this.toLowerCase().split('').sort().join('');
}

var isAnagram = function(test, original) {
  return test.sortLetters() == original.sortLetters();
};

*/
