// works but we can not use change to change the options- create new branch to put everything together

// 1. Save variables

// 1.1 Rounds

const roundWrapper = document.querySelector('[data-js="round-wrapper"]');
const roundForm = document.querySelector('[data-js="rounds-choices"]');
const round3 = document.querySelector('[data-js="round3"]');
const round5 = document.querySelector('[data-js="round5"]');
const round7 = document.querySelector('[data-js="round7"]');
const roundOutput = document.querySelector('[data-js="rounds-output"]');
const roundsTotal = document.querySelector('[data-js="rounds-total"]');
const roundsRest = document.querySelector('[data-js="rounds-rest"]');

// 1.2 Play Options

const playForm = document.querySelector('[data-js="play-choices"]');
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

//  2.1 roundform / checked values

roundForm.addEventListener("change", (event) => {
  event.preventDefault();
  let round3checked = round3.checked;
  let round5checked = round5.checked;
  let round7checked = round7.checked;

  switch (true) {
    case round3checked:
      rounds = 3;
      break;
    case round5checked:
      rounds = 5;
      break;
    case round7checked:
      rounds = 7;
      break;
    default:
      roundOutput.style.display = "block";
      roundOutput.innerHTML =
        "Please choose the number of rounds you want to play";
      break;
  }

  // 2.2 After Choice display round Container counter
  roundWrapper.style.display = "none";
  roundOutput.style.display = "block";
  roundsTotal.innerHTML = rounds;
  roundsRest.innerHTML = rounds;
});

// 2.3 addEventListener in the radio inputs rock, papper and scissors to remove rounds

const removeRoundAndDeclareWinner = () => {
  if (rounds > 0) {
    rounds--;
    restRound = rounds;
    roundsRest.innerHTML = restRound;
    if (rounds === 0) {
      if (userPoints > computerPoints) {
        winnerMessage.innerHTML = `<h3>🏆  YOU WIN  🏆</h3>`;
      } else if (userPoints < computerPoints) {
        winnerMessage.innerHTML = `<h3>❌  YOU LOST  ❌</h3>`;
      } else {
        winnerMessage.innerHTML = `<h3> TIED </h3><br><p>play again</p>`;
      }
    }
  } else {
    roundsRest.innerHTML = 0;
    rounds = 0;
  }
};

rock.addEventListener("click", removeRoundAndDeclareWinner);
papper.addEventListener("click", removeRoundAndDeclareWinner);
scissors.addEventListener("click", removeRoundAndDeclareWinner);

// 3 play game  & restart()

playForm.addEventListener("change", (event) => {
  event.preventDefault();

  // 3.1 Random formula to have a number from 1 to 3 inclusive for computer choice

  const randomNumber = Math.floor(Math.random() * 3) + 1;

  let randomComputerChoice;
  let computerRock = "rock";
  let computerPapper = "papper";
  let computerScissors = "scissors";

  if (randomNumber === 3) {
    randomComputerChoice = computerRock;
    computerChoiceOutput.src = "assets/img/rockFull.png";
  } else if (randomNumber === 2) {
    randomComputerChoice = computerPapper;
    computerChoiceOutput.src = "assets/img/papperFull.png";
  } else {
    randomComputerChoice = computerScissors;
    computerChoiceOutput.src = "assets/img/scissorsFull.png";
  }

  //   computerChoiceOutput.innerHTML = randomComputerChoice;

  //  3.2 Handle User Choice

  let userChoice;

  if (rock.checked) {
    userChoice = "rock";
    userChoiceOutput.src = "assets/img/rockFull.png";
    console.log("r");
  } else if (papper.checked) {
    userChoice = "papper";
    userChoiceOutput.src = "assets/img/papperFull.png";
    console.log("p");
  } else {
    userChoice = "scissors";
    userChoiceOutput.src = "assets/img/scissorsFull.png";
    console.log("s");
  }

  console.log(userChoice);

  outputWrapper.style.visibility = "visible";

  // 3.2 Declare the rules to win

  if (userChoice === randomComputerChoice) {
    // no win
    userPoints += 0;
    computerPoints += 0;
    console.log("same");
  } else if (
    (userChoice === "rock" && randomComputerChoice === "scissors") ||
    (userChoice === "scissors" && randomComputerChoice === "paper") ||
    (userChoice === "paper" && randomComputerChoice === "rock")
  ) {
    console.log("user");

    // User wins
    userPoints++;
  } else {
    console.log("com");

    // Computer wins
    computerPoints++;
  }

  userPointsOutput.innerHTML = userPoints;
  computerPointsOutput.innerHTML = computerPoints;
});
