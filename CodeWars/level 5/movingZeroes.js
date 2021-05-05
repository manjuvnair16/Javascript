//Moving Zeros To The End
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  let zeroArr = [];
  let nonZeroArr = [];
  for(let i=0; i<arr.length; i++){
    if (arr[i] === 0){
      zeroArr.push(0);
    } else {
      nonZeroArr.push(arr[i]);
     } 
  } 
  return(nonZeroArr.concat(zeroArr));
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));

/*console log
[
  1, 2, 1, 1, 3,
  1, 0, 0, 0, 0
]

//------------------------------------------------
/*Alternate Solutions

var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}

var moveZeros = function (arr) {
  let result = arr.filter(c => c !== 0)
  let count = arr.length - result.length
  
  return result.concat(Array(count).fill(0))
}

*/

