import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: data,
      userEdit:null,
      search:""
    };
  }

  _findIndex = (id) => {
    return this.state.userList.findIndex((item) => {
      return item.id === id;
    });
  };

  handleDeleteUser = (user) => {
    const userList = [...this.state.userList];
    const index = this._findIndex(user.id);

    if (index !== -1) {
      userList.splice(index, 1);
    } else {
      alert("User không tồn tại!!!");
    }

    this.setState({
      userList,
    });
  };

  handleUserSubmit = (user) => {
    let userNew={}
    let userList=[]

    if(user.id){
      const index=this._findIndex(user.id)
      // console.log(index);
      this.state.userList[index]=user;
      // console.log(this.state.userList[index]);
      userList = [...this.state.userList]
    }else{
      userNew = {...user, id:Math.random()}
      userList = [...this.state.userList,userNew]
    }
  
    this.setState({
      userList
    })
  };

  handleGetUserEdit = (user)=>{
    this.setState({
      userEdit:user
    })
  }
  
  handleSearch = (event)=>{
   this.state.search=event
   let userList=[]
   let arrSearch=()=>{
     return this.state.userList.filter(item=>{
       return item.name.toLowerCase().includes(this.state.search.toLowerCase())
     })
   }
  if(this.state.search===""){
    userList=data
  }else{
   userList=arrSearch()
  }
   this.setState({
     userList
   })
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getUserSearch={this.handleSearch}/>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={()=>{
              this.setState({
                userEdit:null
              })
            }}
          >
            Add User
          </button>
        </div>
        <Users
          userList={this.state.userList}
          getUserDelete={this.handleDeleteUser}
          getUserEdit={this.handleGetUserEdit}
        />
        <Modal userEdit={this.state.userEdit} getUserSubmit={this.handleUserSubmit} />
      </div>
    );
  }
}
