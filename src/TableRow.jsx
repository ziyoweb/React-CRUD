import React from "react";
import "./tableStyle.css";

class TableRow extends React.Component {
  render() {
    const { id, name, age, address, status, nickname, univ, job } =
      this.props.value;

    return (
      <tr>
        <td className="ids">{id}</td>
        <td>
          {this.props.active?.id === id ? (
            <input
              className="table__input"
              onChange={(e) => this.props.onChangeTable(e, id)}
              name="name"
              value={name}
              type="text"
            />
          ) : (
            name
          )}
        </td>
        <td>
          {this.props.active?.id === id ? (
            <input
              className="table__input"
              onChange={(e) => this.props.onChangeTable(e, id)}
              name="age"
              value={age}
              type="number"
            />
          ) : (
            age
          )}
        </td>
        <td>
          {this.props.active?.id === id ? (
            <input
              className="table__input"
              onChange={(e) => this.props.onChangeTable(e, id)}
              name="address"
              value={address}
              type="text"
            />
          ) : (
            address
          )}
        </td>
        <td>
          {this.props.active?.id === id ? (
            <input
              className="table__input"
              onChange={(e) => this.props.onChangeTable(e, id)}
              name="status"
              value={status}
              type="text"
            />
          ) : (
            status || "-"
          )}
        </td>
        <td>
          {this.props.active?.id === id ? (
            <input
              className="table__input"
              onChange={(e) => this.props.onChangeTable(e, id)}
              name="nickname"
              value={nickname}
              type="text"
            />
          ) : (
            nickname || "-"
          )}
        </td>
        <td>
          {this.props.active?.id === id ? (
            <input
              className="table__input"
              onChange={(e) => this.props.onChangeTable(e, id)}
              name="univ"
              value={univ}
              type="text"
            />
          ) : (
            univ || "-"
          )}
        </td>
        <td>
          {this.props.active?.id === id ? (
            <input
              className="table__input"
              onChange={(e) => this.props.onChangeTable(e, id)}
              name="job"
              value={job}
              type="text"
            />
          ) : (
            job || "-"
          )}
        </td>
        <td
          className="edits__btn"
          onClick={() =>
            this.props.onEdit(
              {
                id,
                name,
                age,
                address,
                status,
                nickname,
                univ,
                job,
              },
              this.props.active?.id === id
            )
          }
        >
          {this.props.active?.id === id ? "save" : "edit"}
        </td>
      </tr>
    );
  }
}

export default TableRow;
