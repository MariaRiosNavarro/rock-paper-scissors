// 1. Save variables

// 1.1 Rounds

const roundForm = document.querySelector('[data-js="rounds-choices"]');
const roundWrapper = document.querySelector('[data-js="round-wrapper"]');
const roundsRadio = document.querySelectorAll('input[name="rounds"]');
const roundOutput = document.querySelector('[data-js="rounds-output"]');
const roundsTotal = document.querySelector('[data-js="rounds-total"]');
const roundsRest = document.querySelector('[data-js="rounds-rest"]');
const round3 = document.querySelector('[data-js="round3"]');
const round5 = document.querySelector('[data-js="round5"]');
const round7 = document.querySelector('[data-js="round7"]');

// 1.2 Play Options

const playForm = document.querySelector('[data-js="play-choices"]');
const playRadio = document.querySelectorAll('input[name="play"]');
const rock = document.querySelector('[data-js="rock"]');
const papper = document.querySelector('[data-js="papper"]');
const scissors = document.querySelector('[data-js="scissors"]');

// 1.3 Outputs

const outputWrapper = document.querySelector('[data-js="output-wrapper"]');

const userChoiceOutput = document.querySelector('[data-js="user-choice"]');
const computerChoiceOutput = document.querySelector(
  '[data-js="computer-choice"]'
);
const userPointsOutput = document.querySelector('[data-js="user-points"]');
const computerPointsOutput = document.querySelector(
  '[data-js="computer-points"]'
);

const winnerMessage = document.querySelector('[data-js="win-lost-message"]');

outputWrapper.style.visibility = "hidden";

// 1.4 restart

const restart = () => {
  location.reload();
};

// 2. Functions roundForm & user/computer points

let rounds = 0;
let restRound;
let userPoints = 0;
let computerPoints = 0;
let roundsVal = 0;

//  2.1 Rounds

const outputRoundValue = () => {
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

// 3 play game

const play = () => {
  if (roundsVal === 0) {
    winnerMessage.innerHTML = `<h3 class ="alert">please choose how many rounds you want to play</h3>`;
    return;
  }

  rounds--;
  console.log("r", rounds, typeof rounds);
  console.log("v", roundsVal, typeof roundsVal);
  roundsRest.innerHTML = rounds;

  if (rounds === 0) {
    if (userPoints > computerPoints) {
      winnerMessage.innerHTML = `<h3>🏆  YOU WIN  🏆</h3>`;
    } else if (userPoints < computerPoints) {
      winnerMessage.innerHTML = `<h3>❌  YOU LOST  ❌</h3>`;
    } else {
      winnerMessage.innerHTML = `<h3> TIED </h3>`;
    }
  }

  // // 3.1 Random formula to have a number from 1 to 3 inclusive for computer choice
  outputWrapper.style.visibility = "visible";
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
  userPointsOutput.innerHTML = userPoints;
  computerPointsOutput.innerHTML = computerPoints;
};

rock.addEventListener("click", play);
papper.addEventListener("click", play);
scissors.addEventListener("click", play);

// 2.3 addEventListener in the radio inputs rock, papper and scissors to remove rounds

// const removeRoundAndDeclareWinner = () => {
//   if (rounds > 0) {
//     rounds--;
//     restRound = rounds;
//     roundsRest.innerHTML = restRound;
//     if (rounds === 0) {
//       if (userPoints > computerPoints) {
//         winnerMessage.innerHTML = `<h3>🏆  YOU WIN  🏆</h3>`;
//       } else if (userPoints < computerPoints) {
//         winnerMessage.innerHTML = `<h3>❌  YOU LOST  ❌</h3>`;
//       } else {
//         winnerMessage.innerHTML = `<h3> TIED </h3><br><p>play again</p>`;
//       }
//     }
//   } else {
//     roundsRest.innerHTML = 0;
//     rounds = 0;
//   }
// };

// console.log(rounds);
// rounds--;
// restRound = rounds;
// console.log(restRound);
// roundsRest.innerHTML = restRound;
// rock.addEventListener("click", play);
// papper.addEventListener("click", play);
// scissors.addEventListener("click", play);
// outputWrapper.style.visibility = "visible";
