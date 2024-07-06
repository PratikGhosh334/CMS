import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function Attendance() {
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, name: 'Ayush', checkIn: '08:00', checkOut: '17:00', hours: 9 },
    { id: 2, name: 'Ramesh', checkIn: '08:15', checkOut: '16:45', hours: 8.5 },
  ]);

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentRecord, setCurrentRecord] = useState({ id: '', name: '', checkIn: '', checkOut: '', hours: '' });

  const handleEditClick = (record) => {
    setCurrentRecord(record);
    setOpenEditDialog(true);
  };

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
    setCurrentRecord({ id: '', name: '', checkIn: '', checkOut: '', hours: '' });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRecord({ ...currentRecord, [name]: value });
  };

  const handleEditSubmit = () => {
    setAttendanceRecords(attendanceRecords.map((record) => (record.id === currentRecord.id ? currentRecord : record)));
    handleEditDialogClose();
  };

  const handleAddRecord = () => {
    // Generate a new unique ID (for demonstration purposes, not production-ready)
    const newRecord = {
      id: attendanceRecords.length + 1,
      name: `New Person ${attendanceRecords.length + 1}`,
      checkIn: '08:00',
      checkOut: '17:00',
      hours: 9,
    };
    setAttendanceRecords([...attendanceRecords, newRecord]);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <h2>Attendance Records</h2>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddRecord}>
          Add Record
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Check In</TableCell>
              <TableCell align="right">Check Out</TableCell>
              <TableCell align="right">Hours</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceRecords.map((record) => (
              <TableRow key={record.id}>
                <TableCell component="th" scope="row">
                  {record.name}
                </TableCell>
                <TableCell align="right">{record.checkIn}</TableCell>
                <TableCell align="right">{record.checkOut}</TableCell>
                <TableCell align="right">{record.hours}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" size="small" onClick={() => handleEditClick(record)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openEditDialog} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Record</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={currentRecord.name}
            onChange={handleEditInputChange}
          />
          <TextField
            margin="dense"
            name="checkIn"
            label="Check In"
            type="text"
            fullWidth
            variant="standard"
            value={currentRecord.checkIn}
            onChange={handleEditInputChange}
          />
          <TextField
            margin="dense"
            name="checkOut"
            label="Check Out"
            type="text"
            fullWidth
            variant="standard"
            value={currentRecord.checkOut}
            onChange={handleEditInputChange}
          />
          <TextField
            margin="dense"
            name="hours"
            label="Hours"
            type="text"
            fullWidth
            variant="standard"
            value={currentRecord.hours}
            onChange={handleEditInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>Cancel</Button>
          <Button onClick={handleEditSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Attendance;
