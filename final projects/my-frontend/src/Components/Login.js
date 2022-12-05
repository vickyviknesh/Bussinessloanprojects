import React, { Component } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form,Input, InputGroup, Row } from 'reactstrap';  
class Login extends Component {  
    constructor() {  
        super();  
  
        this.state = {  
            email: '',  
            password: '',
            Hyper: '',
              
        }  
  
        this.password = this.password.bind(this);  
        this.email = this.email.bind(this);  
        this.Login = this.Login.bind(this);  
    }  
  
    email(event) {  
        this.setState({ email: event.target.value })  
    }  
    password(event) {  
        this.setState({ password: event.target.value })  
    }  
    
Hyper(){
    var email=document.getElementById("Uemail ");
    var password=Document.getElementById(" Upassword");
    if(email ==="Admin" && password==="12345")
    {
        alert("Welcome to loginpage");

        return false;
    }
    else{
        alert("Invalid loan user");

    }
}


    Login(event) {  
        // debugger;  
        fetch(` https://localhost:7122/Api/bussinessloans/Logins  `, {  
            method:'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                email: this.state.email,  
                password: this.state.password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.Status === 'Invalid')  
                    alert('Invalid User');  
                else  
                    this.props.history.push("");  
            })  
    }  
  
    render() {  
  
        return (  
            <div class="main">
            <div className="Login-form"> 
            <h2>  Login </h2> 
                <Container>  
                    <Row className="user-box">  
                        <Col md="9" lg="7" xl="6">  
  
                            <CardGroup>  
                                <Card className="p-2">  
                                    <CardBody>  
                                        <Form>  
                                            <div  className="mb-2 pageheading">  
                                                <div href="./Register" className="col-sm-12 btn btn-primary">  
                                                   
                             </div>  
                                            </div>  
                                            <InputGroup className="mb-3">  
  
                                                <Input type="text" id='Uemail' onChange={this.email} placeholder="Enter Email" />  
                                            </InputGroup>  
                                            <InputGroup className="mb-3">  
  
                                                <Input type="password" id='Upassword' onChange={this.password} placeholder="Enter Password" />  
                                            </InputGroup>  
                                            <Button onClick={this.Hyper} color="success" block><Link to="/Login">Login</Link></Button>  
                                        </Form>  
                                    </CardBody>  
                                </Card>  
                            </CardGroup>  
                        </Col>  
                    </Row>  
                </Container>  
            </div> 
            </div> 
        );  
    }  
}  
  
export default Login;