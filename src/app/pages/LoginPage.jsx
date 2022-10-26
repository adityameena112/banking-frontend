import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './loginpage.css'
import * as HttpService from '../util/HttpService'
import { Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }



    handleLogin = () => {
        HttpService.authenticateUser({
            username: this.state.email,
            password: this.state.password
        }).then((response)=>{
            localStorage.setItem('token', response.data.id_token)
            toast.success("Login Successful")
            window.location.href ='/dashboard'
        }).catch((error)=>{
            toast.error("Incorrect Email & Password")
        })
    }

    render() {
        return (
            <div className="page-container">
                <Form className="inner-page-container">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                    </Form.Group>
                    
                    <Button variant="primary" type="button" onClick={this.handleLogin}>
                        Submit
                    </Button>

                </Form>
                <ToastContainer />
            </div>
        );
    }
}

export default LoginPage;