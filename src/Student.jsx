import React from "react";

class Student extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <div>
        <h1>Hi Student {title}</h1>
        {children}
        {/* <h4>React is {this.props?.status || "unknown"}</h4>
        <h3>
          {this.props?.data?.status} {this.props?.data?.title}
        </h3> */}
      </div>
    );
  }
}

export default Student;
