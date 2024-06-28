function getComputerChoice() {
   return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
   let user_choice = 0;
   if (document.getElementById("rock_btn")) {
      user_choice = 1;
   } else if (document.getElementById("paper_btn")) {
      user_choice = 2;
   } else if (document.getElementById("scissor_btn")) {
      user_choice = 3;
   }
   return user_choice;
}

function playGame() {
   let humanScore = 0;
   let computerScore = 0;
   let numRounds = 0;
   const humanChoice = getHumanChoice()
   const computerChoice = getComputerChoice()

   while (numRounds < 5) {
      if (humanChoice > computerChoice) {
         if (humanChoice == 2 && computerChoice == 1) {
            //if humanChoice = paper and computerChoice = rock
            document.getElementById("cpu_choice").src="stone.png";
            humanScore++;
            document.getElementById("outcome_msg").innerHTML = "You win, paper beats rock!"
            document.getElementById("score_msg").innerHTML = "Human: ${humanScore} | Computer: ${computerScore}";
         } else if (humanChoice == 3 && computerChoice == 2) {
            //if humanChoice = scissor and computerChoice = paper
            document.getElementById("cpu_choice").src="paper.png";
            humanScore++;
            document.getElementById("outcome_msg").innerHTML = "You win, scissor beats paper!"
            document.getElementById("score_msg").innerHTML = "Human: ${humanScore} | Computer: ${computerScore}";
         } else if (humanChoice == 3 && computerChoice == 1) {
            //if humanChoice = scissor and computerChoice = rock
            document.getElementById("cpu_choice").src="stone.png";
            computerScore++
            document.getElementById("outcome_msg").innerHTML = "You lose, rock beats scissor!"
            document.getElementById("score_msg").innerHTML = "Human: ${humanScore} | Computer: ${computerScore}";
         }
      } else if (humanChoice < computerChoice) {
         if (humanChoice == 1 && computerChoice == 2) {
            //if humanChoice = rock and computerChoice = paper
            document.getElementById("cpu_choice").src="paper.png";
            computerScore++;
            document.getElementById("outcome_msg").innerHTML = "You lose, paper beats rock!"
            document.getElementById("score_msg").innerHTML = "Human: ${humanScore} | Computer: ${computerScore}";
         } else if (humanChoice == 1 && computerChoice == 3) {
            //if humanChoice = rock and computerChoice = scissor
            document.getElementById("cpu_choice").src="scissor.png";
            humanScore++;
            document.getElementById("outcome_msg").innerHTML = "You win, rock beats scissor!"
            document.getElementById("score_msg").innerHTML = "Human: ${humanScore} | Computer: ${computerScore}";
         } else if (humanChoice == 2 && computerChoice == 3) {
            //if humanChoice = paper and computerChoice = scissor
            document.getElementById("cpu_choice").src="scissor.png";
            computerScore++
            document.getElementById("outcome_msg").innerHTML = "You lose, scissor beats paper!"
            document.getElementById("score_msg").innerHTML = "Human: ${humanScore} | Computer: ${computerScore}";
         }
      } else if (humanChoice == computerChoice) {
         document.getElementById("outcome_msg").innerHTML = "Tie!"
         document.getElementById("score_msg").innerHTML = "Human: ${humanScore} | Computer: ${computerScore}";
      }
      numRounds++;
   }
   if (humanScore > computerScore) {
      document.getElementById("end_msg").innerHTML = "End of game, you won best of 5 rounds!"
   } else if (humanScore < computerScore) {
      document.getElementById("end_msg").innerHTML = "End of game, you lost best of 5 rounds"
   }
}