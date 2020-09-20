import React from "react";
import "./App.css";
//import LoginForm from "./components/LoginForm";
//import RandomUser from "./components/FetchRandomUser";
//import ImageSlider from "./components/ImageSlider";
//import Counter from "./components/counter";
//import Form from "./components/Form";
import TodoList from "./components/TodoList";

/* class App extends React.Component {
  state = {
    visible: true,
    //    whichComponentToDisplay: "ImageSlider",
  };

  render() {
    return (
      <div>
        <div className="counter">
          <div className={this.state.visible ? "visible" : "hidden"}>
            <Counter />
          </div>
          <button
            onClick={() => {
              this.setState({ visible: !this.state.visible });
            }}
          >
            Toggle Counter
          </button>
        </div>
        <div className="my-form">
          <br />
          <Form />
        </div>
      </div>
    );
  }
} */

/* class App extends React.Component {
  render() {
    return (
      <div className="login-form">
        <LoginForm />
      </div>
    );
  }
} */

/* class App extends React.Component {
  render() {
    return (
      <div className="random-users">
        <RandomUser />
      </div>
    );
  }
} */
class App extends React.Component {
  render() {
    return (
      <div className="my-app">
        <TodoList />
      </div>
    );
  }
}

export default App;
