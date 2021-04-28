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
    const text = result(choice, comp);
    this.setState({
      playerChoice: choice,
      computerChoice: this.state.choices[num],
      text: text,
    });
  }

  render() {
    const { choices, playerChoice, computerChoice, text } = this.state;
    return (
      <div>
        <div className="gameArea">
          <h2>Please make a choice</h2>
          <div className="choices">
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
          text={text}
        />
      </div>
    );
  }
}

export default Game;
