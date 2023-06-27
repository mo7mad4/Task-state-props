import React, { Component } from "react";
import './style.css'
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = (count) => {
    this.setState((prevState) => {
      return { counter: prevState.counter + count };
    });
  };

  handleDecrement = (count) => {
    this.setState((prevState) => {
      if (prevState.counter > 0) return { counter: prevState.counter - count };
    });
  };

  render() {
    return (
      <div className='counters__Style'>
        <button className='onIncrement' onClick={() => this.handleIncrement(5)}>+</button>
        <span>{this.state.counter}</span>
        <button className='onDecrement' onClick={() => this.handleDecrement(4)}>-</button>
      </div>
    );
  }
}
export default Counter;