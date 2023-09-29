var scissors = "scissors";
var rock = "rock";
var paper = "paper"; // Fixed the typo here
var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone"; // Fixed the variable name here
var REPLAY_INSTRUCTIONS =
  "Now you can type scissors, paper, or stone to play another round!";

var getRandomObject = function () {
  var randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return scissors;
  } else if (randomNum == 1) {
    return paper; // Fixed variable name here
  } else {
    return rock;
  }
};

var playerBeatComputer = function (player, computer) {
  return (
    (player == scissors && computer == paper) ||
    (player == paper && computer == rock) ||
    (player == rock && computer == scissors) ||
    (player == REVERSED_SCISSORS && computer == rock) || // Fixed variable name here
    (player == REVERSED_PAPER && computer == scissors) || // Fixed variable name here
    (player == REVERSED_STONE && computer == paper) // Fixed variable name here
  );
};

var objectIcon = function (object) {
  if (object == paper) return "🗒"; // Fixed variable name here
  if (object == rock) return "🪨";
  if (object == scissors) return "✂️";
};

var objectMessage = function (player, computer) {
  var playerObjectIcon = objectIcon(player);
  var computerObjectIcon = objectIcon(computer);
  return (
    "the computer choose " +
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
    (player == REVERSED_SCISSORS && computer == scissors) || // Fixed variable name here
    (player == REVERSED_PAPER && computer == paper) || // Fixed variable name here
    (player == REVERSED_STONE && computer == rock) // Fixed variable name here
  );
};

var main = function (input) {
  if (input != scissors && input != paper && input != rock) {
    return "pls input one of scissors, paper, rock"; // Fixed the message here
  }
  var player = input; // Declare the player variable here
  var computer = getRandomObject();
  var defaultObjectMessage = objectMessage(player, computer);

  if (drawLogic(player, computer)) {
    return defaultObjectMessage + "<br></br> it's a draw"; // Fixed the message here
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
      defaultObjectMessage +
      "<br><br> You lose! Bummer <br><br>" +
      REPLAY_INSTRUCTIONS
    );
  }
};
