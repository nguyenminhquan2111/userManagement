import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={(event) => {
          this.props.getKeyword(event.target.value);
        }}
      />
    );
  }
}
