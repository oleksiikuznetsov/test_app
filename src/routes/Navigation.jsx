import React from 'react';
import { NavLink  } from 'react-router-dom';
// MUI IMPORTS
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

const appBarBox = {
  display: "flex", 
  justifyContent: "space-between",
  padding: "20px 0",
  alignItems: "center",
  position: "static",
}
const navBar = {
  justifyContent: "space-around",
  display: "flex",
  alignItems: "center",
  width: "calc(100% - 100px)",
}

const Navigation = ({ isLoggedIn, setIsLoggedIn, userName, setIsAdmin }) => {

  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userName')
    setIsLoggedIn(false);
    setIsAdmin(false);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={appBarBox}>
        {
        
        isLoggedIn ?
        <Box sx={navBar}>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>Welcome: {userName}</Typography>
          <Button variant="outlined" color="secondary">
            <NavLink
              style={{display:"flex"}}
              onClick={handleLogOut}
              exact
              to="/login"
            >
              Logout <LogoutIcon />
            </NavLink>
          </Button>
        </Box>

        : <Typography variant="h6" component="p">Enter to continue</Typography>
      
      }
      </AppBar>
    </Box>
  )
}

export default Navigation