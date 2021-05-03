//find sum of positive elements of an array. Incase of an empty array, return 0

function positiveSum(arr) {
  let posSum = arr.reduce((acc,currVal) => (currVal >= 0) ? acc + currVal : acc + 0 , 0);
  return posSum;
}

console.log(positiveSum([1,-2,3,4,5]));

/* console log
13 */
