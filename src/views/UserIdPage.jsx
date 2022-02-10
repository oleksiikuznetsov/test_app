import React from 'react';
import {useParams} from 'react-router-dom';
import {Box, Typography} from '@mui/material';

const UserIdPage = () => {

  const params = useParams()
  console.log(params)

  return (
    <Box>
      <Typography>This is page with ID: {params.id}</Typography>
    </Box>
  )
}

export default UserIdPage