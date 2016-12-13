import React, { Component } from "react";
import { Heading } from "spectacle";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    this.setState({
      count: this.state.count + 1
    });
  }
  handleSubtract() {
    this.setState({
      count: this.state.count - 1
    });
  }
  render() {
    const containerStyle = {
      margin: 20
    };

    const buttonStyle = {
      padding: 20,
      margin: 20
    };
    return (
      <div style={containerStyle}>
        <Heading size={5}>
          Count: {this.state.count}
        </Heading>
        <button type="button" style={buttonStyle} onClick={this.handleAdd.bind(this)}>Add</button>
        <button type="button" style={buttonStyle} onClick={this.handleSubtract.bind(this)}>Subtract</button>
      </div>
    );
  }
}
