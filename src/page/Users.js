import React, { Component } from "react";
import UserItem from "./UserItem";

export default class Users extends Component {
  renderListUser = () => {
    const { userList } = this.props;
    return userList.map((item) => {
      return (
        <UserItem
          key={item.id}
          user={item}
          getUserDelete={this.props.getUserDelete}
          getUserEdit={this.props.getUserEdit}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderListUser()}</tbody>
        </table>
      </div>
    );
  }
}
