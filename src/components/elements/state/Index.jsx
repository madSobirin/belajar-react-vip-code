import React from "react";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex justify-center">
        <h1 className="mr-10">{this.state.count}</h1>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          className="bg-black text-white p-2"
        >
          +
        </button>
      </div>
    );
  }
}

export default State;
