import logo from './logo.svg';
import './App.css';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './frmctrl/home';
import Profile from './frmctrl/Profile';
import SignUp from './frmctrl/signup';
import Login from './frmctrl/login';


function App() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a" element={<Login />} />
          <Route path="/b" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
