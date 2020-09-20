import React from "react";

export default class Form extends React.Component {
  state = {
    name: "",
    age: "",
    gender: "Male",
    rememberMe: false,
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name..."
          onChange={(event) => this.handleChange(event)}
        ></input>
        <input
          name="age"
          placeholder="Age..."
          onChange={(event) => this.handleChange(event)}
        ></input>
        <select
          name="gender"
          value={this.state.gender}
          onChange={(event) => this.handleChange(event)}
        >
          <option>Male</option>
          <option>Female</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
