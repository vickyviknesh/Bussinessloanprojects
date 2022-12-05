import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const apiUrl = "https://localhost:7122/Api/bussinessloans";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
    };
  }
  //https://localhost:7122/Api/bussinessloans/DeleteUserDetails?uid=102


  componentDidMount() {
    axios
      .get(apiUrl + "/viewdetails") // https://localhost:7122/Api/bussinessloans/viewdetails

      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  deleteUser(bussinessid) {
    const { users } = this.state;
    axios.delete(apiUrl + "/DeleteUserDetails/" + bussinessid).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.bussinessid !== bussinessid),
      });
    });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div>
          <Table>
            <thead className="btn-primary">
              <tr>
                <th>First Name</th>
                <th>Last_Name</th>
                <th>Email_Id</th>
                <th>password</th>
                <th>Mobile_No</th>
                <th>Monthly_Sales</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.bussinessid} data-testid="userrow">
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.emailid}</td>
                  <td>{user.passwords}</td>
                  <td>{user.mobileNo}</td>
                  <td>{user.monthlysales}</td>
                  <td>
                    {/* <Button
                      variant="info"
                      onClick={() => this.props.editUser(user.bussinessid)}
                    >
                      Edit
                    </Button> */}
                    <Button
                      variant="danger"
                      onClick={() => this.deleteUser(user.bussinessid)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default UserList;
