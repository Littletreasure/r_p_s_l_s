import React, { Component } from "react";

class Score extends Component {

  render() {
    const { playerChoice, computerChoice, text } = this.props;
    return (
      <div className="score">
        <p>Player chose: {playerChoice}</p>
        <p>Computer chose: {computerChoice}</p>
        <p>{text}</p>
      </div>
    );
  }
}

export default Score;
