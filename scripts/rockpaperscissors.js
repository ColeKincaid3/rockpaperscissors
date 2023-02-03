// 0 = rock; 1 = paper; 2 = scissors

let getComputerChoice = () => {
  let tmp = Math.floor(Math.random() * 3);
  if (tmp === 0) return "rock";
  if (tmp === 1) return "paper";
  if (tmp === 2) return "scissors";
};

let playRound = (player, computer) => {
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  if (player === computer) return "Tie!";
  if (player === "rock") {
    if (computer === "paper") return "lose";
    if (computer === "scissors") return "win";
  }
  if (player === "paper") {
    if (computer === "scissors") return "lose";
    if (computer === "rock") return "win";
  }
  if (player === "scissors") {
    if (computer === "rock") return "lose";
    if (computer === "paper") return "win";
  }
};

let game = () => {
  let playerWins = 0,
    computerWins = 0;
  while (playerWins < 3 && computerWins < 3) {
    let roundWin = playRound(
      window.prompt("Choose rock, paper, or scissors.", getComputerChoice()),
      getComputerChoice()
    );
    if (roundWin === "win") playerWins += 1;
    if (roundWin === "lose") computerWins += 1;
  }
  if (playerWins === 3) console.log("You won");
  else console.log("Computer won");
};

let playerSelection = "rock";

game();
