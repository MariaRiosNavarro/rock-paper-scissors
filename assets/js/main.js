// 1. Save variables

// 1.1 Rounds

const roundWrapper = document.querySelector('[data-js="round-wrapper"]');
const roundForm = document.querySelector('[data-js="rounds-choices"]');
const round3 = document.querySelector('[data-js="round3"]');
const round5 = document.querySelector('[data-js="round5"]');
const round7 = document.querySelector('[data-js="round7"]');
const roundOutut = document.querySelector('[data-js="rounds-output"]');

// 1.2 Play Options

const rock = document.querySelector('[data-js="rock"]');
const papper = document.querySelector('[data-js="rock"]');
const scissors = document.querySelector('[data-js="rock"]');

// 1.3 Outputs

const userChoice = document.querySelector('[data-js="user-choice"]');
const computerChoice = document.querySelector('[data-js="computer-choice"]');
const userPoints = document.querySelector('[data-js="user-points"]');
const computerPoints = document.querySelector('[data-js="computer-points"]');

// 2. Functions startGame()  & restart()

let rounds = 0;

//  2.1 Save Work Values

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
      roundOutut.style.display = "block";
      roundOutut.innerHTML =
        "Please choose the number of rounds you want to play";
      break;
  }
});

const startGame = () => {
  // RESTART
  roundOutut.style.display = "none";
  roundOutut.innerHTML = "";
  let roundContainer;

  // 2.2 After Choice display round Container counter

  roundContainer = document.createElement("span");
  roundContainer.innerHTML = rounds;
  roundOutut.innerHTML = roundContainer;
};
