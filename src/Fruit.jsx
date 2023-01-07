import React from "react";

class Fruit extends React.Component {
  render() {
    const { name, url } = this.props.fruits;
    return (
      <div className="card">
        <img src={url} alt="" />
        <p>{name}</p>
      </div>
    );
  }
}

export default Fruit;
