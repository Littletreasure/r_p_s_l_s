function result(player, computer) {
  switch (true) {
    case player == computer:
      return "Draw. Please choose again";
      break;
    case player == "rock" && computer == "paper":
      return "Paper wraps rock. Computer wins";
      break;
    case player == "rock" && computer == "scissors":
      return "Rock blunts scissors. You win";
      break;
    case player == "rock" && computer == "lizard":
      return "Rock crushes lizard. You win";
      break;
    case player == "rock" && computer == "spock":
      return "Spock vaporises rock. Computer wins";
      break;
    case player == "paper" && computer == "rock":
      return "Paper wraps rock. You win";
      break;
    case player == "paper" && computer == "scissors":
      return "Scissors cut paper. Computer wins";
      break;
    case player == "paper" && computer == "lizard":
      return "Lizard eats paper. Computer wins";
      break;
    case player == "paper" && computer == "spock":
      return "Paper disproves Spock. You win";
      break;
    case player == "scissors" && computer == "rock":
      return "Rock blunts scissors. Computer wins";
      break;
    case player == "scissors" && computer == "paper":
      return "Scissors cut paper. You win";
      break;
    case player == "scissors" && computer == "lizard":
      return "Scissors decapitates lizard. You win";
      break;
    case player == "scissors" && computer == "spock":
      return "Spock smashes scissors. Computer wins";
      break;
    case player == "lizard" && computer == "rock":
      return "Rock crushes lizard. Computer wins";
      break;
    case player == "lizard" && computer == "paper":
      return "Lizard eats paper. You win";
      break;
    case player == "lizard" && computer == "scissors":
      return "Scissors decapitate lizard. Computer wins";
      break;
    case player == "lizard" && computer == "spock":
      return "Lizard poisons Spock. You win";
      break;
    case player == "spock" && computer == "rock":
      return "Spock vaporises rock. You win";
      break;
    case player == "spock" && computer == "paper":
      return "Paper disproves Spock. Computer wins";
      break;
    case player == "spock" && computer == "scissors":
      return "Spock smashes scissors. You win";
      return;
    case player == "spock" && computer == "lizard":
      return "Lizard poisons Spock. Computer wins";
      break;
  }
}

export default result;
