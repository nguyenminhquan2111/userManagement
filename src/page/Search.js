import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.props.getUserSearch(this.state.name);
      }
    );
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        name="name"
        onChange={this.handleOnChange}
      />
    );
  }
}
