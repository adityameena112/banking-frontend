import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './registrationpage.css'
import * as HttpService from '../util/HttpService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class RegistrationPage extends Component {
    
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleRegister = () => {
        HttpService.registerUser({
            email: this.state.email, 
            login: this.state.email, 
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }).then((response) => {
            toast.success("Register Successful")
        }).catch((error) => {
            toast.error("Unable to register user")
        })
    }


    render() {
        return (
            <div className="page-container">
                <Form className="inner-page-container">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" onChange={(e) => this.setState({ firstName: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" onChange={(e) => this.setState({ lastName: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                    </Form.Group>
                    
                    <Button variant="primary" type="button" onClick={this.handleRegister}>
                        Register
                    </Button>
                </Form>
            </div>
        );
    }
}

export default RegistrationPage;