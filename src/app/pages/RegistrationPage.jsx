import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './registrationpage.css'

class RegistrationPage extends Component {
    state = {}
    render() {
        return (
            <div className="page-container">
                <Form className="inner-page-container">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter first name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter last name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="button">
                        Register
                    </Button>
                </Form>
            </div>
        );
    }
}

export default RegistrationPage;