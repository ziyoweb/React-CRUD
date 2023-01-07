import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      title: "Muhriddin",
    };
  }

  render() {
    const plus = () => {
      if (this.state.count < 10) {
        this.setState({ count: this.state.count + 1 });
      }
    };
    const minus = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
      }
    };
    const typing = (e) => {
      this.setState({ title: e.target.value });
    };
    const onSelect = (e) => {
      console.log(e.target.value);
    };
    const onCheck = (e) => {
      console.log(e.target.checked);
    };
    return (
      <div>
        <p>{this.state.title}</p>
        <input type="text" onChange={typing} placeholder="Write down" />
        <h1>State: {this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>

        <select onChange={onSelect} name="" id="">
          <option value="male">Male</option>
          <option value="fmale">Fmale</option>
        </select>

        <input type="checkbox" onChange={onCheck} />
      </div>
    );
  }
}
