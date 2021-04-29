function result(player, computer) {
  switch (true) {
    case player == computer:
      return { text: "Draw. Please choose again", winner: null };
      break;
    case player == "rock" && computer == "paper":
      return { text: "Paper wraps rock. Computer wins", winner: "computer" };
      break;
    case player == "rock" && computer == "scissors":
      return { text: "Rock blunts scissors. You win", winner: "player" };
      break;
    case player == "rock" && computer == "lizard":
      return { text: "Rock crushes lizard. You win", winner: "player" };
      break;
    case player == "rock" && computer == "spock":
      return {
        text: "Spock vaporises rock. Computer wins",
        winner: "computer",
      };
      break;
    case player == "paper" && computer == "rock":
      return { text: "Paper wraps rock. You win", winner: "player" };
      break;
    case player == "paper" && computer == "scissors":
      return { text: "Scissors cut paper. Computer wins", winner: "computer" };
      break;
    case player == "paper" && computer == "lizard":
      return { text: "Lizard eats paper. Computer wins", winner: "computer" };
      break;
    case player == "paper" && computer == "spock":
      return { text: "Paper disproves Spock. You win", winner: "player" };
      break;
    case player == "scissors" && computer == "rock":
      return {
        text: "Rock blunts scissors. Computer wins",
        winner: "computer",
      };
      break;
    case player == "scissors" && computer == "paper":
      return { text: "Scissors cut paper. You win", winner: "player" };
      break;
    case player == "scissors" && computer == "lizard":
      return { text: "Scissors decapitates lizard. You win", winner: "player" };
      break;
    case player == "scissors" && computer == "spock":
      return {
        text: "Spock smashes scissors. Computer wins",
        winner: "computer",
      };
      break;
    case player == "lizard" && computer == "rock":
      return { text: "Rock crushes lizard. Computer wins", winner: "computer" };
      break;
    case player == "lizard" && computer == "paper":
      return { text: "Lizard eats paper. You win", winner: "player" };
      break;
    case player == "lizard" && computer == "scissors":
      return {
        text: "Scissors decapitate lizard. Computer wins",
        winner: "computer",
      };
      break;
    case player == "lizard" && computer == "spock":
      return { text: "Lizard poisons Spock. You win", winner: "player" };
      break;
    case player == "spock" && computer == "rock":
      return { text: "Spock vaporises rock. You win", winner: "player" };
      break;
    case player == "spock" && computer == "paper":
      return {
        text: "Paper disproves Spock. Computer wins",
        winner: "computer",
      };
      break;
    case player == "spock" && computer == "scissors":
      return { text: "Spock smashes scissors. You win", winner: "player" };
      break;
    case player == "spock" && computer == "lizard":
      return {
        text: "Lizard poisons Spock. Computer wins",
        winner: "computer",
      };
      break;
  }
}

export default result;
