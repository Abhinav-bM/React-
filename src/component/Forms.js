import React, { Component } from "react";

class Forms extends Component {
  // controlled components
  // state = {
  //   firstName: "",
  //   secondName: "",
  // };
  // onChangeHandle = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // Uncontrolled components
  constructor (props){
    super(props)
    this.state = {
      firstName:"",
      secondName : ""
    }

    this.inputOne = React.createRef()
    this.inputTwo = React.createRef()

  }

  onSubmit = () => {
    console.log(this.inputOne.value);
    console.log(this.inputTwo.value);

  };


  
  render() {
    return (
      <form action="">
        <h2>Form Component</h2>
        <input
          type="text"
          name="firstName"
          // value={this.state.firstName}
          // onChange={this.onChangeHandle}
          ref={input => this.inputOne = input}
        />
        <input
          type="text"
          name="secondName"
          // value={this.state.secondName}
          // onChange={this.onChangeHandle}
          ref={input => this.inputTwo = input}
        />
        <button type="button" onClick={this.onSubmit}>
          Search
        </button>
      </form>
    );
  }
}

export default Forms;
