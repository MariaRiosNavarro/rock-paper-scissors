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

const userChoiceOutput = document.querySelector('[data-js="user-choice"]');
const computerChoiceOutput = document.querySelector('[data-js="computer-choice"]');
const userPointsOutput = document.querySelector('[data-js="user-points"]');
const computerPointsOutput = document.querySelector('[data-js="computer-points"]');

// 2. Functions roundForm

let rounds = 0;
let restRound;

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

const removeRound = () => {
  if (rounds > 0) {
    rounds--;
    restRound = rounds;
    roundsRest.innerHTML = restRound;
  } else {
    rounds = 0;
    roundsRest.innerHTML = 0;
  }
};

rock.addEventListener("click", removeRound);
papper.addEventListener("click", removeRound);
scissors.addEventListener("click", removeRound);

let rockValue = rock.value;
let papperValue = papper.value;
let scissorsValue = scissors.value;

let 

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
  } else if (randomNumber === 1) {
    randomComputerChoice = computerPapper;
  } else {
    randomComputerChoice = computerScissors;
  }

  computerChoice.innerHTML = randomComputerChoice;
  console.log(randomComputerChoice);

 //  3.2 Handle User Choice

 

  // 3.2 Declare the rules
});
