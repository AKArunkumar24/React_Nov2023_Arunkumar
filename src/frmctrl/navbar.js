import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Login from './login';
import SignUp from './signup';
import HomePage from './home';
import Profile from './Profile';



export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: '#FFC0CB', height: '60px' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontSize: '1.5rem' }}>
            <Link to="/a" style={{ textDecoration: 'none', color: 'white' }}>
              <h2>GLAMMART</h2>
            </Link>
          </Typography>
          <div style={{ flexGrow: 1 }} /> 
          <nav>
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: '5px 20px' }}>
              <li style={{ marginRight: 20 }}>
                <a href="/a" style={{ textDecoration: 'none', color: 'white', fontSize: '1rem' }}>
                  <h2>Login</h2>
                </a>
              </li>
              <li style={{ marginRight: 20 }}>
                <a href="/b" style={{ textDecoration: 'none', color: 'white', fontSize: '1rem' }}>
                  <h2>Register</h2>
                </a>
              </li>
            </ul>
          </nav>
          
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            style={{ color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="/Profile" style={{ textDecoration: 'none', color: 'inherit'}}>
                Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/Comments" style={{ textDecoration: 'none', color: 'inherit' }}>
                Comments
              </Link>
              
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/Logout" style={{ textDecoration: 'none', color: 'inherit' }}>
                Logout
              </Link>
              
            </MenuItem>
          </Menu>
          
        </Toolbar>
        
      </AppBar>
      
    </div>
  );
}
