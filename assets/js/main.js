// 1. Save variables
// 1. Outputs

const outputWrapper = document.querySelector('[data-js="output-wrapper"]');
outputWrapper.style.visibility = "hidden";
const userChoiceOutput = document.querySelector('[data-js="user-choice"]');
const computerChoiceOutput = document.querySelector(
  '[data-js="computer-choice"]'
);
const userPointsOutput = document.querySelector('[data-js="user-points"]');
const computerPointsOutput = document.querySelector(
  '[data-js="computer-points"]'
);
const winnerMessage = document.querySelector('[data-js="win-lost-message"]');
const restartBtn = document.querySelector('[data-js="restart-btn"]');

// 1.2 Rounds

const roundForm = document.querySelector('[data-js="rounds-choices"]');
const roundWrapper = document.querySelector('[data-js="round-wrapper"]');
const roundsRadio = document.querySelectorAll('input[name="rounds"]');
const roundOutput = document.querySelector('[data-js="rounds-output"]');
const roundsTotal = document.querySelector('[data-js="rounds-total"]');
const roundsRest = document.querySelector('[data-js="rounds-rest"]');
const round3 = document.querySelector('[data-js="round3"]');
const round5 = document.querySelector('[data-js="round5"]');
const round7 = document.querySelector('[data-js="round7"]');

// 1.3 Play Options

const playForm = document.querySelector('[data-js="play-choices"]');
const playRadio = document.querySelectorAll('input[name="play"]');
const rock = document.querySelector('[data-js="rock"]');
const papper = document.querySelector('[data-js="papper"]');
const scissors = document.querySelector('[data-js="scissors"]');

// 1.4 restart

const restart = () => {
  location.reload();
  restartBtn.classList.remove("restart-btn-shadow");
  outputWrapper.style.visibility = "hidden";
};

// 2. Help Variables

let rounds = 0;
let restRound;
let userPoints = 0;
let computerPoints = 0;
let roundsVal = 0;

//  2.1 Rounds

const outputRoundValue = () => {
  // remove win message or alert if exist
  winnerMessage.innerHTML = "";
  for (let i = 0; i < roundsRadio.length; i++) {
    if (roundsRadio[i].checked == true) {
      roundsVal = roundsRadio[i].value;
    }
    // 2.2 After Choice display round Container counter
    roundWrapper.style.display = "none";
    roundOutput.style.display = "block";
    roundsTotal.innerHTML = roundsVal;
    roundsRest.innerHTML = roundsVal;
    rounds = roundsVal;
  }
};

round3.addEventListener("click", outputRoundValue);
round5.addEventListener("click", outputRoundValue);
round7.addEventListener("click", outputRoundValue);

// 3 play game function

const play = () => {
  // 3.0 Visibility of results on

  outputWrapper.style.visibility = "visible";

  // 3.1 Random formula to have a number from 1 to 3 inclusive for computer choice

  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let randomComputerChoice;
  if (randomNumber === 3) {
    randomComputerChoice = "rock";
    computerChoiceOutput.src = "assets/img/rockFull.png";
  } else if (randomNumber === 2) {
    randomComputerChoice = "papper";
    computerChoiceOutput.src = "assets/img/papperFull.png";
  } else {
    randomComputerChoice = "scissors";
    computerChoiceOutput.src = "assets/img/scissorsFull.png";
  }

  //  3.2 Handle User Choice

  let userChoice;

  for (let i = 0; i < playRadio.length; i++) {
    if (playRadio[i].checked == true) {
      userChoice = playRadio[i].value;
      if (userChoice === "rock") {
        userChoiceOutput.src = "assets/img/rockFull.png";
      } else if (userChoice === "papper") {
        userChoiceOutput.src = "assets/img/papperFull.png";
      } else {
        userChoiceOutput.src = "assets/img/scissorsFull.png";
      }
    }
  }

  // 3.2 Declare the rules to win

  if (userChoice === randomComputerChoice) {
    // no win
    userPoints += 0;
    computerPoints += 0;
  } else if (
    (userChoice === "rock" && randomComputerChoice === "scissors") ||
    (userChoice === "scissors" && randomComputerChoice === "paper") ||
    (userChoice === "paper" && randomComputerChoice === "rock")
  ) {
    // User wins
    userPoints++;
  } else {
    // Computer wins
    computerPoints++;
  }

  // Add style to resalt the winner

  if (userPoints > computerPoints) {
    userPointsOutput.classList.add("more-points");
    computerPointsOutput.classList.remove("more-points");
  } else if (computerPoints > userPoints) {
    computerPointsOutput.classList.add("more-points");
    userPointsOutput.classList.remove("more-points");
  } else {
    userPointsOutput.classList.remove("more-points");
    computerPointsOutput.classList.remove("more-points");
  }

  userPointsOutput.innerHTML = userPoints;
  computerPointsOutput.innerHTML = computerPoints;

  // 3.3 Rounds Handling after click

  // 3.3.a- Alerts the user if he/she/it has not chosen the rounds
  if (roundsVal === 0) {
    winnerMessage.innerHTML = `<h3 class ="alert">Please choose how many rounds</h3>`;
    outputWrapper.style.visibility = "hidden";
    return;
  }
  // 3.3.b- We remove -1 only until we reach 0
  if (rounds > 0) {
    rounds--;
  }
  roundsRest.innerHTML = rounds;

  // 3.3.d- If we reach 0 we declare the winner and set the counter to 0
  // (even if it has finished, if it continues to click the counter
  // does not move to negative. We use <= instead === becouse we need
  // to count the last point.

  if (rounds <= 0) {
    rock.removeEventListener("click", play);
    papper.removeEventListener("click", play);
    scissors.removeEventListener("click", play);
    if (userPoints > computerPoints) {
      winnerMessage.innerHTML = `<h3 class="win-style">🏆  YOU WIN  🏆</h3>`;
    } else if (userPoints < computerPoints) {
      winnerMessage.innerHTML = `<h3 class="lost-style">❌  YOU LOST  ❌</h3>`;
    } else {
      winnerMessage.innerHTML = `<h3 class="tied-style"> TIED </h3>`;
    }
    restartBtn.classList.add("restart-btn-shadow");
  }
};

// 4. we give the function to the 3 buttons
// restartBtn.classList.add("restart-btn-animation")
rock.addEventListener("click", play);
papper.addEventListener("click", play);
scissors.addEventListener("click", play);
