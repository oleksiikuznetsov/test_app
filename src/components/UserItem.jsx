import React from 'react';
import {useHistory} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Button, Typography, Box, Container} from '@mui/material';

const UserItem = (props) => {

  const history = useHistory()
  // console.log(history)

  return (
    <Box className="user">
      <Box className="user__content">
        <Container>
          <Typography  variant="h6">User id: {props.user.id}</Typography>
        </Container >
        <Container>
          <Typography  variant="h6">UserLogin: {props.user.userLogin}</Typography>
        </Container >
        <Container>
          <Typography  variant="h6">User pass: {props.user.userPass}</Typography>
        </Container >
      </Box>
      <Box className="user__btns">
        <Button 
          style={{marginRight: 5}} 
          variant="outlined" 
          onClick={() => props.remove(props.user)}
        >
          <DeleteIcon />
        </Button>
        <Button 
          variant="contained" 
          endIcon={<ArrowRightAltIcon />}
          onClick={() => history.push(`/users/${props.user.id}`)}
        >
          Open
        </Button>
      </Box>
    </Box>
  )
}

export default UserItem