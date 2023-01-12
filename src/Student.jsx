import React from "react";
import { students } from "./mock";

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: students,
    };
  }
  render() {
    const onFilter = (e) => {
      console.log(e.target.value);
      let res = students.filter((value) =>
        value.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ data: res });
    };

    const onDelete = (id) => {
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };
    return (
      <div>
        <input type="text" onChange={onFilter} placeholder="Search..." />
        {this.state.data.map(({ id, name, status }) => {
          return (
            <h1 key={id}>
              {id} {name} {status}{" "}
              <button onClick={() => onDelete(id)}>delete</button>
            </h1>
          );
        })}
      </div>
    );
  }
}

export default Student;
