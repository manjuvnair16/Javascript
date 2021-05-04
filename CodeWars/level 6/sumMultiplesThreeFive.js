function solution(number){
  let sum = 0;
  for (let i= 1; i<=number-1;i++){
    if (i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10));

/* console log
23
*/

//-------------------------------------------
/* Alternate Solutions

function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}
*/

