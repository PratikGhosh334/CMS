import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Pratik', role: 'Admin' },
    { id: 2, name: 'Nilabha', role: 'Manager' },
    { id: 3, name: 'Rohit', role: 'Worker' },
  ]);

  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', role: '' });

  const handleAddClick = () => {
    setOpenAddDialog(true);
  };

  const handleAddDialogClose = () => {
    setOpenAddDialog(false);
    setNewUser({ name: '', role: '' });
  };

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddSubmit = () => {
    const newUserId = users.length + 1;
    setUsers([...users, { id: newUserId, ...newUser }]);
    handleAddDialogClose();
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <h2>Users</h2>
        <Button variant="contained" onClick={handleAddClick}>Add User</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.role}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" size="small">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openAddDialog} onClose={handleAddDialogClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
            value={newUser.name}
            onChange={handleAddInputChange}
          />
          <TextField
            margin="dense"
            name="role"
            label="Role"
            type="text"
            fullWidth
            variant="standard"
            value={newUser.role}
            onChange={handleAddInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddDialogClose}>Cancel</Button>
          <Button onClick={handleAddSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Users;
