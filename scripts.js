let answer = ['Rock', 'Paper', 'Scissors'];
let score = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * answer.length);
  return answer[random];
}

function playRound(playerChoice,compChoice){
  let x = String(playerChoice).toUpperCase();
  let y = String(compChoice).toUpperCase();
  if((x == "ROCK" && y == "SCISSORS")
    || (x == "PAPER" && y == "ROCK")
    || (x == "SCISSORS" && y == "PAPER")){
      score++;
      return "You win, " + playerChoice + " beats " + compChoice ;
    }
  else if(x.toUpperCase()  === y.toUpperCase()){
      return "Draw";
  }
  else{
    return "You lose, " + compChoice + " beats " + playerChoice;
  }
}

function game(){
  for(let i = 1; i <= 5; i++){
    let playerSelection = window.prompt("Enter your choice");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    
  }  
  return "You earn " + score + " points";
}

let x = game();

console.log(x);


