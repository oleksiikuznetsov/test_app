import React, {useState} from 'react';
import { Button, TextField, FormControl } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

  // MODAL STYLE
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "calc(100% - 30%)",
  height: "auto",
  bgcolor: "background.paper",
  border: "2px solid #f2f2f2",
  boxShadow: 24,
};

const UserForm = ({users, create}) => {

  // CREATE NEW USER
  const [userForm, setUserForm] = useState({userLogin: '', userPass: ''})
  const addNewUser = (e) => {
    e.preventDefault()
      const newUser = {
        ...userForm, id: users.length + 1
      }
      create(newUser)
      setUserForm({userLogin: '', userPass: ''})
  }

  // MODAL STATE
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      {/* MODAL WINDOW FOR COMPONENT USER FORM */}
      <Box style={{margin: 20, display: "flex", justifyContent: "end"}}>
        <Button 
          startIcon={<ControlPointIcon />} 
          onClick={handleOpen} 
          variant="contained"
        >
          Add User
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{timeout: 500}}
        >
          <Fade in={open}>
            <Box sx={style}>
              <FormControl 
                style={{
                  width: "100%",
                  padding: "38px 15px"
                }}>
                <TextField 
                  style={{margin: 10}} 
                  label="Enter user name" 
                  value={userForm.userLogin} 
                  onChange={e => setUserForm({...userForm, userLogin: e.target.value})}
                  
                />
                <TextField 
                  style={{margin: 10}} 
                  label="Enter user description" 
                  value={userForm.userPass}
                  onChange={e => setUserForm({...userForm, userPass: e.target.value})}
                  required
                />
                <Button 
                  style={{
                    width: "50%",
                    margin: "15px auto"
                  }} 
                  variant="contained" 
                  onClick={addNewUser} 
                  startIcon={<ControlPointIcon 
                />}>Create User</Button>
                <Button 
                  style={{
                    position:"absolute",
                    top: 0,
                    right: 0,
                  }}  
                  variant="outlined" 
                  onClick={handleClose}
                >x</Button>
              </FormControl>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Box>
  )
}

export default UserForm