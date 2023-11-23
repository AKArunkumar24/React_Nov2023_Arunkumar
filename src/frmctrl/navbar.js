import React from 'react';
import { AppBar, Toolbar, Typography} from '@mui/material';
// import { BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Login from './login';
import SignUp from './signup';
import HomePage from './home';

export default function Navbar() {
  return (
  
      <div>
        <AppBar position="fixed" style={{ backgroundColor: '#FFC0CB', height: '60px' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontSize: '1.5rem' }}>
              <label href="/a" style={{ textDecoration: 'none', color: 'white' }}>
                <h2>GLAMMART</h2>
              </label>
            </Typography>
            <nav>
              <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', justifyContent: 'flex-end', padding: '5px 20px' }}>
                <li style={{ marginRight: 20 }}>
                  <a href="/a" style={{ textDecoration: 'none', color: 'white', fontSize: '1rem' }}>
                    <h2>Login</h2>
                  </a>
                </li>
                <li style={{ marginRight: 20 }}>
                  <a href="/b" style={{ textDecoration: 'none', color: 'white', fontSize: '1rem' }}>
                    <h2>SignUp</h2>
                  </a>
                </li>
                <li style={{ marginRight: 20 }}>
                  {/* <Link to="/RegisterPage" style={{ textDecoration: 'none', color: 'white', fontSize: '1rem' }}>
                    <h2>Register</h2>
                  </Link> */}
                </li>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
        </div>
       
  );
}
