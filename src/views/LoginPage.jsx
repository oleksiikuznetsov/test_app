import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {Box, Typography, TextField, Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const LoginPage = ({
  setIsLoggedIn,
  setUserName,
  setIsAdmin
}) => {

  const history = useHistory()

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogIn = (e) => {
    e.preventDefault();

    if (login === 'admin') {
      if (password === '1234') setIsAdmin(true);
      else {
        alert('For admin enter pass: 1234');
        return false
      }
    }

    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userName', login);

    setUserName(login);
    setIsLoggedIn(true);
    history.push('/');
  }

  return (
    <Box sx={{padding: '25px 0'}}>
      <Typography sx={{ textAlign: 'center' }} variant="h4">Login page</Typography>
      <form className="form" onSubmit={handleLogIn}>
        <TextField style={{margin: 10}} label="Login" onChange={handleLoginChange} value={login}/>
        <TextField style={{margin: 10}} label="Pass" onChange={handlePasswordChange} value={password}/>
        <Button variant="contained" endIcon={<SendIcon />} type='submit'>LogIn</Button>
      </form>
    </Box>
  )
}

export default LoginPage