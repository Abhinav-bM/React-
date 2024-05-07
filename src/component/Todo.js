import React, { Component } from 'react'

export default class Todo extends Component {


  render() {
    return (
      <div>
        <h1>todo Component</h1>
        <h1>{this.props.newState1}</h1>
      </div>
    )
  }
}
