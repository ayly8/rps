let humanScore = 0;
let computerScore = 0;
let numRounds = 0;

function getComputerChoice() {
   const choices = ['rock', 'paper', 'scissors'];
   const randomChoice = Math.floor(Math.random() * 3);
   return choices[randomChoice];
}

function playGame(humanChoice) {
   //update corresponding computer choice image
   const computerChoice = getComputerChoice();
   if (computerChoice == 'rock') {
      document.getElementById("cpu_choice").src = "stone.png";
   } else if (computerChoice == 'paper') {
      document.getElementById("cpu_choice").src = "paper.png";
   } else if (computerChoice == 'scissors') {
      document.getElementById("cpu_choice").src = "scissor.png";
   }

   //perform game logic and update outcome message accordingly
   let outcome = '';
   if (humanChoice == computerChoice) {
      outcome = "It's a tie!";
   } else if (
      (humanChoice == 'rock' && computerChoice == 'scissors') ||
      (humanChoice == 'paper' && computerChoice == 'rock') ||
      (humanChoice == 'scissors' && computerChoice == 'paper')
   ) {
      humanScore++;
      outcome = `You win, ${humanChoice} beats ${computerChoice}`;
   } else {
      computerScore++;
      outcome = `You lose, ${computerChoice} beats ${humanChoice}`;
   }

   //update HTML with correct messages
   document.getElementById("outcome_msg").innerHTML = outcome;
   document.getElementById("score_msg").innerHTML = `Human: ${humanScore} | Computer: ${computerScore}`;

   //increase number of rounds
   numRounds++;

   //check number of rounds and update end message correctly
   if (numRounds >= 5) {
      if (humanScore > computerScore) {
          document.getElementById("end_msg").innerHTML = "You won best out of 5 rounds!";
      } else if (humanScore < computerScore) {
          document.getElementById("end_msg").innerHTML = "You lost best out of 5 rounds!";
      } else {
          document.getElementById("end_msg").innerHTML = "You tied best of 5!";
      }
  }
}