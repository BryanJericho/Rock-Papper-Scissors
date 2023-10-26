var scissors = "scissors";
var rock = "rock";
var paper = "paper";
var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone";
var WORD_GAME_MODE = "word game"; // Mode for the secret word game
var REPLAY_INSTRUCTIONS =
  "Now you can type scissors, paper, or stone to play another round!";
var secretWords = ["chicken", "pig", "rabbit"]; // Add your secret words here

var currentSecretWord = null;
var currentComputerChoice = null;

var getRandomObject = function () {
  var randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return scissors;
  } else if (randomNum == 1) {
    return paper;
  } else {
    return rock;
  }
};

var playerBeatComputer = function (player, computer) {
  return (
    (player == scissors && computer == paper) ||
    (player == paper && computer == rock) ||
    (player == rock && computer == scissors) ||
    (player == REVERSED_SCISSORS && computer == rock) ||
    (player == REVERSED_PAPER && computer == scissors) ||
    (player == REVERSED_STONE && computer == paper)
  );
};

var objectIcon = function (object) {
  if (object == paper) return "🗒";
  if (object == rock) return "🪨";
  if (object == scissors) return "✂️";
};

var objectMessage = function (player, computer) {
  var playerObjectIcon = objectIcon(player);
  var computerObjectIcon = objectIcon(computer);
  return (
    "the computer chose " +
    computer +
    computerObjectIcon +
    "<br></br>" +
    "you chose " +
    player +
    playerObjectIcon
  );
};

var drawLogic = function (computer, player) {
  return (
    player == computer ||
    (player == REVERSED_SCISSORS && computer == scissors) ||
    (player == REVERSED_PAPER && computer == paper) ||
    (player == REVERSED_STONE && computer == rock)
  );
};

var main = function (input) {
  if (currentSecretWord !== null) {
    // Check if the user is currently playing the secret word game
    if (input == currentSecretWord) {
      // If the user guesses correctly, they win
      currentSecretWord = null; // Reset the secret word game
      return (
        "Congratulations! You guessed the secret word correctly.<br><br>" +
        REPLAY_INSTRUCTIONS
      );
    } else {
      // If the user guesses incorrectly, they lose
      currentSecretWord = null; // Reset the secret word game
      return (
        "Sorry, you guessed incorrectly. You lose!<br><br>" +
        REPLAY_INSTRUCTIONS
      );
    }
  }

  if (input == WORD_GAME_MODE) {
    // Check if the input is for the secret word game mode
    currentSecretWord =
      secretWords[Math.floor(Math.random() * secretWords.length)]; // Choose a random secret word
    currentComputerChoice = getRandomObject(); // Get computer's choice
    console.log("Computer chose: " + currentSecretWord); // Log computer's choice to the console
    return (
      "You are now in the secret word game mode. Try to guess the secret word. Enter one of: " +
      secretWords.join(", ")
    );
  }

  if (input != scissors && input != paper && input != rock) {
    return "Please input one of scissors, paper, rock, or enter 'word game' to play the secret word game.";
  }

  var player = input;
  var computer = getRandomObject();
  var defaultObjectMessage = objectMessage(player, computer);

  if (drawLogic(player, computer)) {
    return defaultObjectMessage + "<br></br> it's a draw";
  }

  if (playerBeatComputer(player, computer)) {
    return (
      defaultObjectMessage +
      "<br><br>" +
      "You win! <br><br>" +
      REPLAY_INSTRUCTIONS +
      "<br>"
    );
  } else {
    return (
      defaultObjectMessage + "<br><br> You lose!<br><br>" + REPLAY_INSTRUCTIONS
    );
  }
};
