import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "Muhriddin",
      surname: "Ziyodulloyev",
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
    // const typing = (e) => {
    //   this.setState({ title: e.target.value });
    // };
    const onSelect = (e) => {
      console.log(e.target.value);
    };
    const onCheck = (e) => {
      console.log(e.target.checked);
    };

    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    // const onNameChange = (e) => {
    //   this.setState({ name: e.target.value });
    // };

    // const onSurnameChange = (e) => {
    //   this.setState({ surname: e?.target?.value });
    // };

    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h1>Surname: {this.state.surname}</h1>
        <h1>State: {this.state.count}</h1>
        <input type="text" onChange={onChange} name="name" placeholder="Name" />
        <input
          type="text"
          onChange={onChange}
          name="surname"
          placeholder="Surname"
        />
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
