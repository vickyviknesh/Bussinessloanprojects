import React, { Component } from "react";

import { Container, Button } from "react-bootstrap";
import UserList from "./Getcilent";
import axios from "axios";
import Addcilent from "./Addcilent";
import { Link } from "react-router-dom";

const apiUrl = "https://localhost:7122/Api/bussinessloans";

class Cilentaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddcilent: false,
      error: null,
      response: {},
      userData: {},
      isEdituser: false,
      isCilents1s: true,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isAddcilent: true });
    this.setState({ isCilents1s: false });
  }
  onDetails() {
    this.setState({ isCilents1s: true });
    this.setState({isAddcilent: false });
  }

  onFormSubmit(data) {
    this.setState({ isAddcilent: true });
    this.setState({ isCilents1s: false });
    if (this.state.isEdituser) {
      axios.put(apiUrl + "/UpdateEmployeeDetails", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isAddcilent: false,
          isEdituser: false,
        });
      });
    } else {
      axios.post(apiUrl + "/insertmethod", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isAddcilent: false,
          isEdituser: false,
        });
      });
    }
  }

  editUser = (bussinessid) => {
    this.setState({ isUserDetails: false });
    axios.get(apiUrl + "/https://localhost:7122/Api/bussinessloans/getid"+ bussinessid).then(
      (result) => {
        this.setState({
          isEdituser: true,
          isAddcilent: true,
          userData: result.data,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
  };

  render() {
    let userForm;
    if (this.state.isAddcilent || this.state.isEditUser) {
      userForm = (
        <Addcilent
          data-testid="adduser"
          onFormSubmit={this.onFormSubmit}
          user={this.state.userData}
        />
      );
    }
    return (
      <div className="App">
        <button className="logout"><Link to="/" className="logbtn" >Logout</Link></button>
        <Container>
          <h1 style={{ textAlign: "center", fontSize:"20px",color: "red", }}> bussinessloans operation in React</h1>
          <hr></hr>
          {!this.state.isCilents1s && (
            <Button variant="primary" onClick={() => this.onDetails()}>
              {" "}
              User Details
            </Button>
          )}
          {!this.state.isAddcilent && (
            <Button variant="primary" onClick={() => this.onCreate()}>
              Add User
            </Button>
          )}
          <br></br>
          {!this.state.isAddcilent && (
            <UserList data-testid="userlist" editUser={this.editUser} />
          )}
          {userForm}
        </Container>
      </div>
    );
  }
}
export default Cilentaction;
