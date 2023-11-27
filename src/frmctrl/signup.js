import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from "react"
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
import Alert from '@mui/material/Alert';
import {Link} from 'react-router-dom'
const isEmail =(email)=>
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
export default function SignUp(){
    const [showPassword, setShowPassword] = React.useState(false);
    const[usernameInput,setUsernameInput]=useState();
    const[emailInput,setEmailInput]=useState();
    const[passwordInput,setPasswordInput]=useState();
    const[usernameError,setUsernameError]=useState(false);
    const[emailError,setEmailError]=useState(false);
    const[passwordError,setPasswordError]=useState(false);
    const[formValid,setFormValid]=useState();
    const handleUsername=()=>{
        if(usernameInput.length<5||usernameInput.length>22){
        setUsernameError(true)
        return;
        }
        setUsernameError(false)

    };
    
    const handleEmail=()=>{
        if(!isEmail (emailInput)){
            setEmailError(true)
            return;
        }
        setEmailError(false);

    }
   const handleSubmit =(e)=>{
   e.preventDefault();
if(usernameError||usernameInput){
    setFormValid("Please provide UserName  between 5 to 22 characters")
    return;
}
if(emailError||emailInput){
    setFormValid("Please provide a valid email")
    return;
}

   console.log(usernameInput);
   console.log(emailInput);
   console.log(passwordInput);
};

const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    }
    return(
    
    
     <body className="aa">
      <body style={{ margin: 0, padding: "560px", backgroundImage: 'url("https://images.pexels.com/photos/2720447/pexels-photo-2720447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover' }}>
      <div
        style={{
          
          
          padding: '0px',
           
        }}
      >
      <div>
        <div style={{border:'3px solid black', padding:'40px'}}>
            <p>
              <AccountCircleIcon style={{fontSize:'50px'}}/>
        <TextField 
        id="standard-basic" 
        error={usernameError}
        label="username"
        value={usernameInput}
        
        onChange={(event)=> setUsernameInput(event.target.value)} 
        onBlur={handleUsername}
        variant="outlined" 
        fullWidth size="small"/>
        </p>
        <p>
        <TextField id="standard-basic"
        error={emailError}
        label="Email" type="email"
        value={emailInput}
        onChange={(event)=> setEmailInput(event.target.value)} 
        onBlur={handleEmail}
        variant="outlined" fullWidth size="small"/>
        </p>
        <p>
        <FormControl sx={{  width: '100%' }} variant="standard">
          <InputLabel error={passwordError} htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
          fullWidth
          error={passwordError}
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={passwordInput}
            onChange={(event)=> setPasswordInput(event.target.value)} 
            
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
          <a href="/" >

        <Button  fullWidth variant="contained" startIcon={<LoginIcon />}>
        signup
      </Button>
          </a>
        </p>
        <p>{formValid
        &&(<Alert severity="error">{formValid}</Alert>)}</p>
    </div>
    </div>
    </div>
        </body>
        </body>
    )
        }