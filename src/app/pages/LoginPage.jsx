import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './loginpage.css'
import * as HttpService from '../util/HttpService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@mui/material';

class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        loading: false
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            window.location.href = "/dashboard"
        }
    }



    handleLogin = () => {
        this.setState({ loading: true })
        HttpService.authenticateUser({
            username: this.state.email,
            password: this.state.password
        }).then((response)=>{
            localStorage.setItem('token', response.data.id_token)
            toast.success("Login Successful")
            this.setState({ loading: false })
            // this.props.history.push('/dashboard')
            window.location.href ='/dashboard'
            
        }).catch((error)=>{
            toast.error("Incorrect Email & Password")
            this.setState({ loading: false })
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <CircularProgress />
            )
        }
        return (
            <div className="page-container">
                <Form className="inner-page-container">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                    </Form.Group>
                    
                    <Button variant="primary" type="button" onClick={this.handleLogin}>
                        Login
                    </Button>

                </Form>
                <ToastContainer />
            </div>
        );
    }
}

export default LoginPage;