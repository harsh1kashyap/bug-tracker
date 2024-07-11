import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard'; // Assuming you have a Dashboard component
import User from './components/User/User';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/User" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;