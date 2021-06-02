/*Greed is a dice game played with five six-sided dice. 
*********Rules:***************
 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
 
 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

*/

function calcScore(objCount) {
  let score = 0;
  for (const propNum in objCount){
    score += Math.floor(objCount[propNum]/3) * Number(propNum) * 100;
    if (propNum === '10' || propNum === '5'){
      objCount[propNum] = objCount[propNum] % 3;
      score += Math.floor(objCount[propNum]) * Number(propNum) * 10;
    }
  }  
  return score;
} 

function score( dice ) {
  let objCount = {};
  dice.forEach(val => {
    val = val === 1 ? 10 : val;
    objCount[val] = objCount[val] ? objCount[val] + 1 : 1;
  });
  
  return calcScore(objCount);
}


console.log(score( [2, 4, 4, 5, 4 ] ));

/* console log
450
*/


/*---------------------------------------
****** Alternate solutions ********

const score = ( dice, r = Array(6).fill(0), sum = 0 ) => {
  dice.forEach(d => ++r[d - 1])
  for(let i = 0; i < 6; ++i) {
    if (r[i] > 2) sum += (i ? (i + 1) * 100 : 1000)
    if (!i || i == 4) sum += ( r[i] > 2 ? r[i] - 3 : r[i]) * (i ? 50 : 100)
  }
  return sum
}



function score( dice ) {

  let totalScore = 0;
  
  const uniqueScores = new Set(dice);
  
  uniqueScores.forEach( die => {
    let numOfDice = dice.filter( d => d === die).length;
    let multiplier = (die === 1) ? 100 : 10
    
    if (numOfDice >= 3) {
      totalScore += die * multiplier * 10;
      numOfDice -= 3;
    }
    
    if (die === 1 || die === 5) {
      totalScore += die * numOfDice * multiplier;
    }
  });
  
  return totalScore;
}


