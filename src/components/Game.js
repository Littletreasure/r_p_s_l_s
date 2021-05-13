import React, { Component } from "react";
import Score from "./Score";
import result from "../utils/result";

class Game extends Component {
  state = {
    playerChoice: "",
    computerChoice: "",
    playerScore: 0,
    computerScore: 0,
    choices: ["rock", "paper", "scissors", "lizard", "spock"],
    text: "",
  };
  componentDidMount() {
    this.setState({ playerChoice: "", computerChoice: "" });
  }

  gameChoice(choice) {
    const num = Math.floor(Math.random() * 5);
    const comp = this.state.choices[num];
    const resultObj = result(choice, comp);
    if (resultObj.winner == "computer") {
      this.setState(prevState => ({
        computerScore: prevState.computerScore + 1
    }))
  } else {
      this.setState((prevState) => ({
        playerScore: prevState.playerScore + 1
      }));
    }
    this.setState({
      playerChoice: choice,
      computerChoice: this.state.choices[num],
      text: resultObj.text,
    });
  }

  reset() {
    this.setState({ playerChoice: "", computerChoice: "", playerScore: 0, computerScore: 0, text: "" });
  }

  render() {
    const {
      choices,
      playerChoice,
      computerChoice,
      playerScore,
      computerScore,
      text,
    } = this.state;
    return (
      <div className='container'>
        <div className="gameArea">
          <h2>Please make a choice</h2>
          <div className="options">
            {choices.map((choice) => {
              return (
                <img
                  className="image"
                  src={require("../images/" + choice + ".png").default}
                  alt={choice}
                  key={choice}
                  onClick={() => this.gameChoice(choice)}
                />
              );
            })}
          </div>
        </div>
        <Score
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          playerScore={playerScore}
          computerScore={computerScore}
          text={text}
          reset={this.reset}
        />
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export default Game;
