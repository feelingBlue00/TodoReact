import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementButton = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementButton = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.incrementButton}>Increment</button>
        <button onClick={this.decrementButton}>Decrement</button>
      </div>
    );
  }
}
