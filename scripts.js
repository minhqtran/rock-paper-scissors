let answer = ['rock', 'paper', 'scissors'];

let rockBtn = document.querySelector("#rock");
let scissorsBtn = document.querySelector("#scissors")
let paperBtn = document.querySelector("paper")

rockBtn.addEventListener('click', () => playRound("rock"))
scissorsBtn.addEventListener('click', () => playRound("scissors"))
paperBtn.addEventListener('click', () => playRound("paper"))

//get the computer choices randomly
function computerPlay() {
  let random = Math.floor(Math.random() * answer.length);
  return answer[random];
}
//function to compare. 
let determineWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection){
    return 'tie'
  } else if(
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'player'
  } else {
    return 'computer'
  }
}

function playRound(playerSelection){
  const computerSelection = computerPlay()
  const roundResult = determineWinner(playerSelection, computerSelection)

  if(roundResult === 'player'){
    playerScore++;
  }else if(roundResult === 'computer'){
    computerScore++;
  }
}

const resultDiv = document.querySelector("#result")

let displayResult = (result) => resultDiv.textContent = result

let displayScore = (playerScore, computerScore) =>  {
  resultDiv.textContent += "\nPlayer: ${playerScore} - Computer: ${computerScore}";
}

let announceWinner = (playerScore, computerScore) => {
  if(playerScore === 5 ){
    resultDiv.textContent += '\n You win :)'
  }else if (computerScore === 5){
    resultDiv.textContent += '\n You lose :('
  }
}


