import React, { Component } from "react";

class List extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "John",
        age: 56,
      },
      {
        id: 2,
        name: "Michel",
        age: 45,
      },
    ],
  };

  componentDidMount() {
    alert()
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((value, index) => {
            return (
              <li key={index}>
                {value.id} - {value.name} - {value.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
