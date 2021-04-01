import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetKeyword } from "../redux/action";

class Search extends Component {
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

const mapDispatchToProps = (dispatch) => {
  return {
    getKeyword: (keyword) => {
      dispatch(actGetKeyword(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
