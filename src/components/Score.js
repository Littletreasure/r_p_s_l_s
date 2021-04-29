import React, { Component } from "react";

class Score extends Component {
  render() {
    const {
      playerChoice,
      computerChoice,
      playerScore,
      computerScore,
      text,
    } = this.props;
    return (
      <div className="result">
        <div className="choices">
          <p>Player chose: {playerChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <p>{text}</p>
        </div>
        <div className="scores">
          <h3>Score</h3>
          <div className="scoreContainer">
            <div className="score">
              <p>Player</p>
              <p className="scoreNum">{playerScore}</p>
            </div>
            <div className="score">
              <p>Computer</p>
              <p className="scoreNum">{computerScore}</p>
            </div>
          </div>
        </div>
        <p>reset</p>
      </div>
    );
  }
}

export default Score;
