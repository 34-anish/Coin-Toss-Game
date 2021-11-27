
const winPercentage = document.querySelector('.score-view');
const tossCoinBtn = document.querySelectorAll('.game-buttons button')[0];
const resetGameBtn = document.querySelectorAll('.game-buttons button')[1];

const totalPlayerWins = document.querySelector('.total-wins .player-wins');
const totalComputerWins = document.querySelector('.total-wins .computer-wins');

const playerLastFiveScores = document.querySelector('.player-last-five-scores');
const computerLastFiveScores = document.querySelector('.computer-last-five-scores');

// All Game Variables
const playerScoreSpan = document.querySelector(".player-wins");
const computerScoreSpan = document.querySelector(".computer-wins");
const winPercetageSpan = document.querySelector(".score-view");


function resetGame() {
  const playerList = document.querySelector('.player-last-five-scores');
  const computerList = document.querySelector('.computer-last-five-scores');

  playerArray = [];
  computerArray = [];

  totalGames = 0;
  playerWins = 0;
  computerWins = 0;

  winPercetageSpan.innerHTML = "0%";
  computerScoreSpan.innerHTML = "0";
  playerScoreSpan.innerHTML = "0";
  playerList.innerHTML = '';
  computerList.innerHTML = "";
}

function tossCoin() {
  const coinOutput = document.querySelector('.coin-div-inner');
  coinOutput.innerHTML = '';
  let coinTossResult;

  const randomNum = Math.floor(Math.random() * 100) + 1; // 1 - 100
  if (randomNum < 51) {
    coinTossResult = 'HEADS';
  } else {
    coinTossResult = 'TAILS';
  }

  setTimeout(() => {
    coinOutput.innerHTML = coinTossResult;
  }, 500);

  return coinTossResult;
}


let playerArray = [];
let computerArray = [];

// 1 - array length is less than 5
// 2 - array length is greater than 5

function insertPlayerResult(playerArray, arrayLength, playerList) {
  for (let i = arrayLength - 1; i >= 0; i--) {
    const playerResultListItem = document.createElement('li');

    if (playerArray[i] == 'Wins') {
      playerResultListItem.classList.add('win-score');
      playerResultListItem.innerHTML = `<span class="score-no">1</span> Heads`;
    } else {
      playerResultListItem.classList.add('lose-score');
      playerResultListItem.innerHTML = `<span class="score-no">1</span> Tails`;
    }

    playerList.append(playerResultListItem);
  }

  for (let i = 5 - arrayLength; i > 0; i--) {
    const playerResultListItem = document.createElement('li');
    playerResultListItem.classList.add('lose-score');
    playerResultListItem.innerHTML = '&nbsp;';
    playerList.append(playerResultListItem);
  }
}

function insertComputerResult(computerArray, arrayLength, computerList) {
  for (let i = arrayLength - 1; i >= 0; i--) {
    const computerResultListItem = document.createElement('li');
    if (computerArray[i] == 'Wins') { 
      computerResultListItem.classList.add('win-score');
      computerResultListItem.innerHTML = `<span class="score-no">1</span> Tails`;
    } else {
      computerResultListItem.classList.add('lose-score');
      computerResultListItem.innerHTML = `<span class="score-no">1</span> Heads`;
    }

    computerList.append(computerResultListItem);
  }

  for (let i = 5 - arrayLength; i > 0; i--) {
    const computerResultListItem = document.createElement('li');
    computerResultListItem.classList.add('lose-score');
    computerResultListItem.innerHTML = '&nbsp;';
    computerList.append(computerResultListItem);
  }
}


resetGameBtn.addEventListener("click", function () {
  resetGame();
});

let totalGames = 0;
let playerWins = 0;
let computerWins = 0;
tossCoinBtn.addEventListener('click', function () {
  
  tossCoinBtn.style.pointerEvents = 'none';
  setTimeout(() => {
    const coinTossResult = tossCoin();
    if (coinTossResult == 'HEADS') {
      // player wins
      playerArray.push('Wins');
      computerArray.push('Loses');
      playerWins++;

      // score-body computer-score-body

      const playerArrayLength = playerArray.length;
      const computerArrayLength = computerArray.length;

      // Player Wins
      const playerList = document.querySelector('.player-last-five-scores');
      playerList.innerHTML = '';

      if (playerArrayLength <= 5) {
        insertPlayerResult(playerArray, playerArrayLength, playerList);
      } else {
        for (let i = 0; i < playerArrayLength - 5; i++) {
          playerArray.shift();
        }

        insertPlayerResult(playerArray, playerArray.length, playerList);
      }

      // Computer Loses

      const computerList = document.querySelector('.computer-last-five-scores');
      computerList.innerHTML = '';

      if (computerArrayLength <= 5) {
        insertComputerResult(computerArray, computerArrayLength, computerList);
      } else {
        for (let i = 0; i < computerArrayLength - 5; i++) {
          computerArray.shift();
        }

        insertComputerResult(computerArray, computerArray.length, computerList);
      }
    } else {
      // computer wins
      computerWins++;
      playerArray.push('Loses');
      computerArray.push('Wins');

      // score-body computer-score-body

      const playerArrayLength = playerArray.length;
      const computerArrayLength = computerArray.length;

      // Player loses
      const playerList = document.querySelector('.player-last-five-scores');
      playerList.innerHTML = '';

      if (playerArrayLength <= 5) {
        insertPlayerResult(playerArray, playerArrayLength, playerList);
      } else {
        for (let i = 0; i < playerArrayLength - 5; i++) {
          playerArray.shift();
        }

        insertPlayerResult(playerArray, playerArray.length, playerList);
      }

      // Computer wins

      const computerList = document.querySelector('.computer-last-five-scores');
      computerList.innerHTML = '';

      if (computerArrayLength <= 5) {
        insertComputerResult(computerArray, computerArrayLength, computerList);
      } else {
        for (let i = 0; i < computerArrayLength - 5; i++) {
          computerArray.shift();
        }

        insertComputerResult(computerArray, computerArray.length, computerList);
      }
    }

    tossCoinBtn.style.pointerEvents = 'all';
    playerScoreSpan.innerHTML = playerWins;
    computerScoreSpan.innerHTML = computerWins;
    winPercetageSpan.innerHTML = (playerWins/totalGames*100).toFixed(1) +"%";
  }, 500);

  totalGames++;

});


/*
total wins / total games * 100

*/
=======
const winPercentage = document.querySelector('.score-view');
const tossCoinBtn = document.querySelectorAll('.game-buttons button')[0];
const resetGameBtn = document.querySelectorAll('.game-buttons button')[1];

const totalPlayerWins = document.querySelector('.total-wins .player-wins');
const totalComputerWins = document.querySelector('.total-wins .computer-wins');

const playerLastFiveScores = document.querySelector('.player-last-five-scores');
const computerLastFiveScores = document.querySelector('.computer-last-five-scores');

function tossCoin() {
  const coinOutput = document.querySelector('.coin-div-inner');
  coinOutput.innerHTML = '';
  let coinTossResult;

  const randomNum = Math.floor(Math.random() * 100) + 1; // 1 - 100
  if (randomNum < 51) {
    coinTossResult = 'HEADS';
  } else {
    coinTossResult = 'TAILS';
  }

  setTimeout(() => {
    coinOutput.innerHTML = coinTossResult;
  }, 500);

  return coinTossResult;
}

const playerArray = [];
const computerArray = [];

// 1 - array length is less than 5
// 2 - array length is greater than 5

function insertPlayerResult(playerArray, arrayLength, playerList) {
  for (let i = arrayLength - 1; i >= 0; i--) {
    const playerResultListItem = document.createElement('li');

    if (playerArray[i] == 'Wins') {
      playerResultListItem.classList.add('win-score');
      playerResultListItem.innerHTML = `<span class="score-no">1</span> Heads`;
    } else {
      playerResultListItem.classList.add('lose-score');
      playerResultListItem.innerHTML = `<span class="score-no">1</span> Tails`;
    }

    playerList.append(playerResultListItem);
  }

  for (let i = 5 - arrayLength; i > 0; i--) {
    const playerResultListItem = document.createElement('li');
    playerResultListItem.classList.add('lose-score');
    playerResultListItem.innerHTML = '&nbsp;';
    playerList.append(playerResultListItem);
  }
}

function insertComputerResult(computerArray, arrayLength, computerList) {
  for (let i = arrayLength - 1; i >= 0; i--) {
    const computerResultListItem = document.createElement('li');

    if (computerArray[i] == 'Wins') {
      computerResultListItem.classList.add('win-score');
      computerResultListItem.innerHTML = `<span class="score-no">1</span> Tails`;
    } else {
      computerResultListItem.classList.add('lose-score');
      computerResultListItem.innerHTML = `<span class="score-no">1</span> Heads`;
    }

    computerList.append(computerResultListItem);
  }

  for (let i = 5 - arrayLength; i > 0; i--) {
    const computerResultListItem = document.createElement('li');
    computerResultListItem.classList.add('lose-score');
    computerResultListItem.innerHTML = '&nbsp;';
    computerList.append(computerResultListItem);
  }
}

let totalGames = 0;

tossCoinBtn.addEventListener('click', function () {
  tossCoinBtn.style.pointerEvents = 'none';
  setTimeout(() => {
    const coinTossResult = tossCoin();

    if (coinTossResult == 'HEADS') {
      // player wins
      playerArray.push('Wins');
      computerArray.push('Loses');

      // score-body computer-score-body

      const playerArrayLength = playerArray.length;
      const computerArrayLength = computerArray.length;

      // Player Wins
      const playerList = document.querySelector('.player-last-five-scores');
      playerList.innerHTML = '';

      if (playerArrayLength <= 5) {
        insertPlayerResult(playerArray, playerArrayLength, playerList);
      } else {
        for (let i = 0; i < playerArrayLength - 5; i++) {
          playerArray.shift();
        }

        insertPlayerResult(playerArray, playerArray.length, playerList);
      }

      // Computer Loses

      const computerList = document.querySelector('.computer-last-five-scores');
      computerList.innerHTML = '';

      if (computerArrayLength <= 5) {
        insertComputerResult(computerArray, computerArrayLength, computerList);
      } else {
        for (let i = 0; i < computerArrayLength - 5; i++) {
          computerArray.shift();
        }

        insertComputerResult(computerArray, computerArray.length, computerList);
      }
    } else {
      // computer wins
      playerArray.push('Loses');
      computerArray.push('Wins');

      // score-body computer-score-body

      const playerArrayLength = playerArray.length;
      const computerArrayLength = computerArray.length;

      // Player loses
      const playerList = document.querySelector('.player-last-five-scores');
      playerList.innerHTML = '';

      if (playerArrayLength <= 5) {
        insertPlayerResult(playerArray, playerArrayLength, playerList);
      } else {
        for (let i = 0; i < playerArrayLength - 5; i++) {
          playerArray.shift();
        }

        insertPlayerResult(playerArray, playerArray.length, playerList);
      }

      // Computer wins

      const computerList = document.querySelector('.computer-last-five-scores');
      computerList.innerHTML = '';

      if (computerArrayLength <= 5) {
        insertComputerResult(computerArray, computerArrayLength, computerList);
      } else {
        for (let i = 0; i < computerArrayLength - 5; i++) {
          computerArray.shift();
        }

        insertComputerResult(computerArray, computerArray.length, computerList);
      }
    }

    tossCoinBtn.style.pointerEvents = 'all';
  }, 500);

  totalGames++;
  console.log(totalGames);
});

/*
total wins / total games * 100

*/