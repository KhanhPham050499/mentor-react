import React, { Component } from "react";
import AddTodo from "./AddTodo";
import ItemTodo from "./ItemTodo";

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      value: "",
    };
  }

  onHandleChange(value) {
    this.setState({
      value,
    });
  }

  onHandeAddTodo() {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Math.random(),
          title: this.state.value,
          checked: false,
        },
      ],
      value: "",
    });
  }

  onHandleDeleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id),
    });
  }

  onHandleChecked(id, value) {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked: value,
          };
        }

        return item;
      }),
    });
  }

  render() {
    return (
      <div>
        <AddTodo
          value={this.state.value}
          onHandleChange={(value) => this.onHandleChange(value)}
          onHandeAddTodo={() => this.onHandeAddTodo()}
        />
        <ItemTodo
          todos={this.state.todos}
          onHandleDeleteTodo={(id) => this.onHandleDeleteTodo(id)}
          onHandleChecked={(id, value) => this.onHandleChecked(id, value)}
        />
      </div>
    );
  }
}
