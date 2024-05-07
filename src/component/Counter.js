import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 1,
  };

  firstClick = () => {
    console.log("Running");
  };

  increment = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  decrement = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <h4>{this.state.value}</h4>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
