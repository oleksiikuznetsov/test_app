import React from 'react';
import UserItem from './UserItem';
import {Box, Typography} from '@mui/material';

export default function UserList({users, remove}) {
  // console.log("userList component=> users: ", users)

  return (
    <Box>
      <Typography variant="h4" component="h4">User List component</Typography>
        {users.map(user => <UserItem remove={remove} user={user} key={user.id} />)}
    </Box>
    
  )
}
