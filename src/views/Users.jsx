import React, {useState} from 'react';
import {Box} from '@mui/material';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const Users = () => {
  
  const [users, setUsers] = useState([
    {id: 1, userLogin: 'lara', userPass: 'kaza'},
    {id: 2, userLogin: 'lora', userPass: 'kaza'},
    {id: 3, userLogin: 'lira', userPass: 'kaza'},
    {id: 4, userLogin: 'loza', userPass: 'kaza'},
  ])

// ADD NEW USER
  const addUser = (newUser) => {
    setUsers([...users, newUser])
  }
// REMOVE USER FROM ARRAY
  const removeUser = (user) => {
    setUsers(users.filter(u => u.id !== user.id))
  }

  return (
    <Box>
      <Box>
        <UserForm users={users} create={addUser}/>
        <UserList users={users} remove={removeUser}/>
      </Box>
    </Box>
  )
}

export default Users