import React from "react"
import { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'
export default function Login(){
    const [showPassword, setShowPassword] = React.useState(false);
    const[usernameInput,setUsernameInput]=useState();
    const[passwordInput,setPasswordInput]=useState();


    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    }
    return(
      <body>

      <div style={{backgroundImage:'url()',border:'3px solid black', padding:'40px'}}>
              <p>
              <AccountCircleIcon style={{fontSize:'50px'}}/>
        <TextField id="outlined-basic" label="username" variant="outlined" fullWidth size="small"/>
        </p>
       
        <p>
        <FormControl sx={{  width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            required
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              
              
            }
          />
           </FormControl>
        </p>
        <p>
          <Link to="/">
        <Button variant="contained" startIcon={<LoginIcon />}>
        Login
      </Button>

          </Link>
        </p>
</div>
            </body>
    )
          }