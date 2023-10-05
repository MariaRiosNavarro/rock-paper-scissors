//-- 1. Save variables

//-- 1.1 Outputs

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
const playWrapper = document.querySelector('[data-js="play-wrapper"]');
const spiner = document.querySelector('[data-js="spinner"]');

const lostMessage = document.querySelector('[data-js="lost-message"]');

playWrapper.style.display = "none";
spiner.style.display = "block";
lostMessage.style.display = "none";

//-- 1.2 Rounds

const roundWrapper = document.querySelector('[data-js="round-wrapper"]');
const roundsRadio = document.querySelectorAll('input[name="rounds"]');
const roundOutput = document.querySelector('[data-js="rounds-output"]');
const roundsTotal = document.querySelector('[data-js="rounds-total"]');
const roundsRest = document.querySelector('[data-js="rounds-rest"]');
const round3 = document.querySelector('[data-js="round3"]');
const round5 = document.querySelector('[data-js="round5"]');
const round7 = document.querySelector('[data-js="round7"]');

//-- 1.3 Play Options

const playRadio = document.querySelectorAll('input[name="play"]');
const rock = document.querySelector('[data-js="rock"]');
const rockImg = document.querySelector('[data-js="rock-img"]');
const paper = document.querySelector('[data-js="paper"]');
const paperImg = document.querySelector('[data-js="paper-img"]');
const scissors = document.querySelector('[data-js="scissors"]');
const scissorsImg = document.querySelector('[data-js="scissors-img"]');

//-- 1.4 restart

restartBtn.style.display = "none";

const restart = () => {
  location.reload();
  restartBtn.classList.remove("restart-btn-shadow");
  outputWrapper.style.visibility = "hidden";
};

//-- 2. Help Variables

let rounds = 0;
let restRound;
let userPoints = 0;
let computerPoints = 0;
let roundsVal = 0;
let userChoice;
let randomComputerChoice;

// -- 2.1 Rounds

const outputRoundValue = () => {
  for (let i = 0; i < roundsRadio.length; i++) {
    if (roundsRadio[i].checked == true) {
      roundsVal = roundsRadio[i].value;
    }
    //--- 2.2 After Choice display round Container counter
    restartBtn.style.display = "block";
    roundWrapper.style.display = "none";
    roundOutput.style.display = "block";
    spiner.style.display = "none";
    playWrapper.style.display = "block";

    roundsTotal.innerHTML = roundsVal;
    roundsRest.innerHTML = roundsVal;
    rounds = roundsVal;
  }
};

round3.addEventListener("click", outputRoundValue);
round5.addEventListener("click", outputRoundValue);
round7.addEventListener("click", outputRoundValue);

// Extra: Add animation to lost and win message

const winMessage = `<div class="waviy"><span style="--i:1">🏆</span><p></p><span style="--i:2">Y</span><span style="--i:3">O</span><span style="--i:4">U</span><p></p><span class="big" style="--i:5">🏆</span><p></p><span style="--i:6">W</span><span style="--i:7">I</span><span style="--i:8">N</span> <p></p><span style="--i:9">🏆</span></div>`;
const drawMessage = `<div class="draw"><span class="letter letter-1" style="--i:1">D</span><span class="letter letter-2" style="--i:2">R</span><span class="letter letter-3"style="--i:3" >A</span><span class="letter letter-4" style="--i:4">W</span></div>`;

const play = () => {
  // ---3.0 Visibility of results on

  outputWrapper.style.visibility = "visible";

  //--- 3.1 Random formula to have a number from 1 to 3 inclusive for computer choice

  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 3) {
    randomComputerChoice = "rock";
    computerChoiceOutput.src = "assets/imgs/rockFullC.png";
  } else if (randomNumber === 2) {
    randomComputerChoice = "paper";
    computerChoiceOutput.src = "assets/imgs/paperFullC.png";
  } else {
    randomComputerChoice = "scissors";
    computerChoiceOutput.src = "assets/imgs/scissorsFullC.png";
  }

  //--  3.2 Handle User Choice & Play game function

  //#IMPORTANT: with a simple if/else statement with
  //#the play rules, was a bug, and not all choices was accepted.
  //#We need to add the game (rock->win->scissors,
  //#scissors->win->paper, paper->win->scissors etc..) in the loop
  //#I have integrated the game function according
  //#to the player's choice, so that all the options are read,
  //#if I put it out with the if/else only
  //#the first of the conditional options is read it.

  for (let i = 0; i < playRadio.length; i++) {
    if (playRadio[i].checked == true) {
      userChoice = playRadio[i].value;
      if (userChoice === "rock") {
        userChoiceOutput.src = "assets/imgs/rockFull.png";
        scissorsImg.src = "assets/gif/scissors.gif";
        paperImg.src = "assets/gif/paper.gif";
        rockImg.src = "assets/imgs/rockFull.png";
        // !play handler if user choose rock
        if (randomComputerChoice === "scissors") {
          userPoints++;
        } else if (randomComputerChoice === "paper") {
          computerPoints++;
        } else {
          userPoints += 0;
          computerPoints += 0;
        }
      } else if (userChoice === "paper") {
        userChoiceOutput.src = "assets/imgs/paperFull.png";
        scissorsImg.src = "assets/gif/scissors.gif";
        rockImg.src = "assets/gif/rock.gif";
        paperImg.src = "assets/imgs/paperFull.png";
        // !play handler if user choose paper
        if (randomComputerChoice === "rock") {
          userPoints++;
        } else if (randomComputerChoice === "scissors") {
          computerPoints++;
        } else {
          userPoints += 0;
          computerPoints += 0;
        }
      } else {
        userChoiceOutput.src = "assets/imgs/scissorsFull.png";
        rockImg.src = "assets/gif/rock.gif";
        paperImg.src = "assets/gif/paper.gif";
        scissorsImg.src = "assets/imgs/scissorsFull.png";
        //! play handler if user choose scissors
        if (randomComputerChoice === "paper") {
          userPoints++;
        } else if (randomComputerChoice === "rock") {
          computerPoints++;
        } else {
          userPoints += 0;
          computerPoints += 0;
        }
      }
    }
  }

  // --3.3 --Pointshandle

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

  // ---3.4 Rounds Handling after click

  // -3.4.a- We remove -1 only until we reach 0

  if (rounds > 0) {
    rounds--;
  }
  roundsRest.innerHTML = rounds;

  // -3.4.b- If we reach 0 we declare the winner and set the counter to 0
  // -Even if it has finished, if it continues to click the counter
  // -does not move to negative. We use <= instead === becouse we need
  // -to count the last point.

  if (rounds <= 0) {
    rock.removeEventListener("click", play);
    paper.removeEventListener("click", play);
    scissors.removeEventListener("click", play);
    if (userPoints > computerPoints) {
      winnerMessage.innerHTML = winMessage;
    } else if (userPoints < computerPoints) {
      lostMessage.style.display = "block";
    } else {
      winnerMessage.innerHTML = drawMessage;
    }
    restartBtn.classList.add("restart-btn-shadow");
    rockImg.src = "assets/gif/rock.gif";
    paperImg.src = "assets/gif/paper.gif";
    scissorsImg.src = "assets/gif/scissors.gif";
  }
};

//--- 4. we give the function to the 3 buttons
rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);
