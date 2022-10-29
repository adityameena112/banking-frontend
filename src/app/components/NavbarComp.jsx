import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class NavbarComp extends Component {
    state = {
        isLoggedIn: false
    }

    componentDidMount() {

        const token = localStorage.getItem('token')
        if (token) {
            this.setState({ isLoggedIn: true })
        }
        
    }

    handleLogout = () => {
        localStorage.clear()
        window.location.href = "/"
    }

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Easy-Way Bank</Navbar.Brand>
                    <Nav className="me-auto">
                        {!this.state.isLoggedIn && <Nav.Link as={Link} to="/">Home</Nav.Link>}
                        {!this.state.isLoggedIn && <Nav.Link as={Link} to="/register">Register</Nav.Link>}
                        {this.state.isLoggedIn && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
                        {this.state.isLoggedIn && <Nav.Link href="/transcations-history">Transactions History</Nav.Link>}
                        {this.state.isLoggedIn && <Nav.Link href="#" onClick={this.handleLogout}>Logout</Nav.Link>}
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarComp;