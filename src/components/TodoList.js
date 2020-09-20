import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todo_list: [],
    status: "all",
    all_complete: true,
  };

  //Add todo to the list
  addTodo = (todo) => {
    const new_list = [todo, ...this.state.todo_list];
    this.setState({
      todo_list: new_list,
    });
  };

  //Complete a todo in the list
  toggleComplete = (id) => {
    this.setState({
      todo_list: this.state.todo_list.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  //Set status for todo
  updateStatus = (update_to_status) => {
    this.setState({
      status: update_to_status,
    });
  };

  //Delete todo from list
  handleDeleteTodo = (id) => {
    this.setState((state) => ({
      todo_list: state.todo_list.filter((todo) => todo.id !== id),
    }));
  };

  //Remove those todo that are complete
  removeCompletedTodo = () => {
    this.setState((state) => ({
      todo_list: state.todo_list.filter((todo) => !todo.complete),
    }));
  };

  toggleOnOff = () => {
    this.setState({
      todo_list: this.state.todo_list.map((todo) => ({
        ...todo,
        complete: this.state.all_complete,
      })),
      all_complete: !this.state.all_complete,
    });
  };

  render() {
    let updated_todo_list = [];

    if (this.state.status === "all") {
      updated_todo_list = this.state.todo_list;
    } else if (this.state.status === "active") {
      updated_todo_list = this.state.todo_list.filter((todo) => !todo.complete);
    } else if (this.state.status === "complete") {
      updated_todo_list = this.state.todo_list.filter((todo) => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {updated_todo_list.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
          ></Todo>
        ))}
        <button onClick={() => this.updateStatus("all")}>All</button>
        <button onClick={() => this.updateStatus("active")}>Active</button>
        <button onClick={() => this.updateStatus("complete")}>Complete</button>

        <div>
          {this.state.todo_list.filter((todo) => todo.complete).length ? (
            <button onClick={this.removeCompletedTodo()}>
              Remove completed todo
            </button>
          ) : null}
        </div>
        <div>
          <button onClick={this.toggleOnOff}>On/Off</button>
        </div>
        <hr style={{ width: "50%" }} />
        <div style={{ fontWeight: "bold" }}>
          Number of todo left:{" "}
          {this.state.todo_list.filter((todo) => !todo.complete).length}
        </div>
      </div>
    );
  }
}
