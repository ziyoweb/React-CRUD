import React from "react";
import TableRow from "./TableRow.jsx";
import { data } from "./mock.js";
import "./tableStyle.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      name: "",
      age: "",
      address: "",
      status: "",
      nickname: "",
      univ: "",
      job: "",
      type: "name",
      active: null,
    };
  }

  render() {
    const onAdd = () => {
      if (
        this.state.name.length > 0 &&
        this.state.age.length > 0 &&
        this.state.address.length > 0
      ) {
        let res = [
          ...data,
          {
            id: Date.now(),
            name: this.state.name,
            age: this.state.age,
            address: this.state.address,
            status: this.state.status,
            nickname: this.state.nickname,
            univ: this.state.univ,
            job: this.state.job,
            edit: "Edit",
            error: false,
          },
        ];
        this.setState({ data: res });
        this.setState({
          name: "",
          age: "",
          address: "",
          status: "",
          nickname: "",
          univ: "",
          job: "",
        });

        this.setState({ error: false });
      } else {
        this.setState({ error: true });
      }
    };

    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    const onSelect = (e) => {
      this.setState({ type: e.target.value });
    };

    const onFilter = (e) => {
      let res = data.filter((value) =>
        `${value[this.state.type]}`
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      this.setState({ data: res });
    };

    const onEdit = (obj, isSave) => {
      console.log(isSave);
      if (isSave) {
        this.setState({ active: null });
      } else {
        this.setState({
          active: { ...obj },
        });
      }
      console.log(this.state.active);
    };

    const onChangeTable = (e, id) => {
      let res = this.state.data.map((value) =>
        value.id === id ? { ...value, [e.target.name]: e.target.value } : value
      );
      this.setState({ data: res });
    };

    return (
      <div className="wrapp">
        <div className="table__wrap ">
          <div className="functions__section">
            <h3>Add data:</h3>
            <div className="func__add">
              <input
                onChange={onChange}
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                required
              />
              <input
                onChange={onChange}
                type="number"
                name="age"
                placeholder="age"
                value={this.state.age}
                required
              />
              <input
                onChange={onChange}
                type="text"
                name="address"
                placeholder="Address"
                value={this.state.address}
              />
              <input
                onChange={onChange}
                type="text"
                name="status"
                placeholder="Status"
                value={this.state.status}
              />
              <input
                onChange={onChange}
                type="text"
                name="nickname"
                placeholder="Nickname"
                value={this.state.nickname}
              />
              <input
                onChange={onChange}
                type="text"
                name="univ"
                placeholder="University"
                value={this.state.univ}
              />
              <input
                onChange={onChange}
                type="text"
                name="job"
                placeholder="Job"
                value={this.state.job}
              />
              <button onClick={onAdd} className="btn" type="submit">
                Add
              </button>
              <p className="error__text">
                {this.state.error && "The form hasn't filled yet"}
              </p>
            </div>
            <div className="search__block">
              <h3>Search:</h3>
              <select name="" onChange={onSelect} id="">
                <option value="name">Name</option>
                <option value="id">Id</option>
                <option value="age">Age</option>
                <option value="address">Address</option>
                <option value="status">Status</option>
                <option value="nickname">Nickname</option>
                <option value="univ">Univ</option>
                <option value="job">Job</option>
              </select>
              <span className="arrow__line">&rarr;</span>
              <input onChange={onFilter} type="text" placeholder="search..." />
            </div>
          </div>

          <table className="mostly-customized-scrollbar">
            <thead className="table__head">
              <tr className="thead__tr">
                <th className="ids head__id">Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Status</th>
                <th>Nickname</th>
                <th>Univ</th>
                <th>Job</th>
                <th className="edits__btn head__edit">Edit</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {this.state.data.map((value) => (
                <TableRow
                  value={value}
                  key={value.id}
                  onEdit={onEdit}
                  active={this.state.active}
                  onChangeTable={onChangeTable}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
