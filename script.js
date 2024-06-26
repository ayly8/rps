function game() {
   let cpu_num = 0;
   if (document.getElementById("rock_btn")) {
      cpu_num = Math.floor(Math.random() * 3) + 1;
      if (cpu_num == 1) {
         document.getElementById("cpu_choice").src="stone.png";
         document.getElementById("outcome_msg").innerHTML = "Tie!"
      } else if (cpu_num == 2) {
         document.getElementById("cpu_choice").src="paper.png";
         document.getElementById("outcome_msg").innerHTML = "Paper beats rock, you lose!"
      } else {
         document.getElementById("cpu_choice").src="scissor.png";
         document.getElementById("outcome_msg").innerHTML = "Rock beats scissors, you win!"
      }
   } else if (document.getElementById("paper_btn")) {
      cpu_num = Math.floor(Math.random() * 3) + 1;
      if (cpu_num == 1) {
         document.getElementById("cpu_choice").src="stone.png";
         document.getElementById("outcome_msg").innerHTML = "Paper beats rock, you win!!"
      } else if (cpu_num == 2) {
         document.getElementById("cpu_choice").src="paper.png";
         document.getElementById("outcome_msg").innerHTML = "Tie!"
      } else {
         document.getElementById("cpu_choice").src="scissor.png";
         document.getElementById("outcome_msg").innerHTML = "Scissors beat paper, you lose!"
      }
   } else if (document.getElementById("scissor_btn")) {
      cpu_num = Math.floor(Math.random() * 3) + 1;
      if (cpu_num == 1) {
         document.getElementById("cpu_choice").src="stone.png";
         document.getElementById("outcome_msg").innerHTML = "Rock beats scissors, you lose!"
      } else if (cpu_num == 2) {
         document.getElementById("cpu_choice").src="paper.png";
         document.getElementById("outcome_msg").innerHTML = "Scissor beats paper, you win!"
      } else {
         document.getElementById("cpu_choice").src="scissor.png";
         document.getElementById("outcome_msg").innerHTML = "Tie!"
      }
   }
}