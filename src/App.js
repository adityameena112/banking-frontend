import React, { Component } from 'react'
import LoginPage from './app/pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationPage from './app/pages/RegistrationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComp from './app/components/NavbarComp';
import DashboardPage from './app/pages/DashboardPage';

class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;