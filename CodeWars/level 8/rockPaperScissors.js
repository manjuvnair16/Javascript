//Rock Paper Scissors!  return which player won

const rps = (p1, p2) => {
  if (p1 === p2){
    return 'Draw!';
  } 
  switch (p1) {
    case 'rock':
      switch (p2){
          case 'paper':
            return "Player 2 won!";
          case 'scissors':
            return "Player 1 won!";
       }
      
     case 'paper':
        switch (p2){
          case 'scissors':
            return "Player 2 won!";
          case 'rock':
            return "Player 1 won!";
         }
      
      case 'scissors':
        switch (p2){
          case 'rock':
            return "Player 2 won!";
          case 'paper':
            return "Player 1 won!";
         }
  }
};

console.log(rps('paper', 'rock'));

/* console log
Player 1 won!
*/

//-----------------------------------------
/* Alternative solutions
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};


const rps = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  }; 
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}

const rps = (p1, p2) => {
  if (p1 == p2)
    return 'Draw!';
    
   if (p1 == 'rock' && p2 == 'scissors') 
     return 'Player 1 won!'
   else if (p1 == 'scissors' && p2 == 'paper') 
     return 'Player 1 won!'
   else if (p1 == 'paper' && p2 == 'rock') 
     return 'Player 1 won!'
   else
     return 'Player 2 won!';
};

*/
