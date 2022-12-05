
import React from "react";

import { Row, Form, Col, Button } from "react-bootstrap";

class Addcilent extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
    ///  bussinessid: "",
      firstName:"",
      lastName:"",
      emailId:"",
      passwords:"",
      MobileNo:"",
      Monthlysales:"",
    };

    if (props.user.bussinessid) {
      this.state = props.user;
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    let pageTitle;
    let actionStatus;
    if (this.state.bussinessid) {
      pageTitle = <h2>Edit cilent</h2>;
      actionStatus = <b>Update cilent</b>;
    } else {
      pageTitle = <h2>Add cilent</h2>;
      actionStatus = <b>Save cilent</b>;
    }

    return (
      <div className="add">
        <h2> {pageTitle}</h2>
        <Row>
          <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="Firstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  type="text"
                  name="Firstname"
                  data-testid="Firstname"
                  value={this.state.Firstname}
                  onChange={this.handleChange}
                  placeholder="First_name"
                />
              </Form.Group>
              <Form.Group controlId="Lastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  name="Lastname"
                  data-testid="Lastname"
                  value={this.state.Lastname}
                  onChange={this.handleChange}
                  placeholder="Last_Name"
                />
              </Form.Group>
              <Form.Group controlId="Emailid">
                <Form.Label>Emailid</Form.Label>
                <Form.Control
                  type="text"
                  name="Emailid"
                  data-testid="Emailid"
                  value={this.state.Emailid}
                  onChange={this.handleChange}
                  placeholder="Email_id"
                />
              </Form.Group>
              <Form.Group controlId="MobileNo">
                <Form.Label>MobileNo</Form.Label>
                <Form.Control
                  type="text"
                  name="MobileNo"
                  data-testid="MobileNo"
                  value={this.state.MobileNo}
                  onChange={this.handleChange}
                  placeholder="Mobile_No"
                />
              </Form.Group>
              <Form.Group controlId="Passwords">
                <Form.Label>Passwords</Form.Label>
                <Form.Control
                  type="password"
                  name="Passwords"
                  data-testid="Passwords"
                  value={this.state.Passwords}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group controlId="Monthly_sales">
                <Form.Label>Monthlysales</Form.Label>
                <Form.Control
                  type="text"
                  name="Monthlysales"
                  data-testid="Monthlysales"
                  value={this.state.Monthlysales}
                  onChange={this.handleChange}
                  placeholder="Monthlysales"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="hidden"
                  name="Bussinessid"
                  value={this.state.bussinessid}
                />
                <Button variant="success" type="submit">
                  {actionStatus}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Addcilent;





