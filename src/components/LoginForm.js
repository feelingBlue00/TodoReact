import React from "react";

const initialState = {
  email: "",
  userName: "",
  password: "",
  emailError: "",
  userNameError: "",
  passwordError: "",
};

export default class LoginForm extends React.Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    let nameError = "";
    if (!this.state.userName) {
      nameError = "Name cannot be blank";
    }

    let emailError = "";
    if (!this.state.email.includes("@")) {
      emailError = "Invalid email address";
    }

    let passwordError = "";
    if (!this.state.password) {
      passwordError = "Password cannot be blank";
    }

    if (nameError || emailError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div>
          <input
            name="userName"
            type="text"
            placeholder="Username"
            value={this.state.userName}
            onChange={(event) => this.handleChange(event)}
          />
          <div style={{ color: "red", fontSize: 12 }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={(event) => this.handleChange(event)}
          />
          <div style={{ color: "red", fontSize: 12 }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(event) => this.handleChange(event)}
          />
          <div style={{ color: "red", fontSize: 12 }}>
            {this.state.passwordError}
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
