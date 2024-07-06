import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function Inventory() {
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: 'Steel Rod', quantity: 500, status: 'OK' },
    { id: 2, name: 'Cement', quantity: 50, status: 'Low' },
    { id: 3, name: 'Bricks', quantity: 1000, status: 'OK' },
    { id: 4, name: 'Iron Nails', quantity: 1000, status: 'OK' },
    { id: 5, name: 'Aluminun Sheets', quantity: 50, status: 'OK' },
    { id: 6, name: 'Brass Fittings', quantity: 500, status: 'OK' },
    { id: 7, name: 'Gravel(Gitti)', quantity: 10, status: 'OK' },
    { id: 7, name: 'Wooden Planks', quantity: 50, status: 'OK' },
    
  ]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentItem, setCurrentItem] = useState({ id: '', name: '', quantity: '', status: '' });

  const handleEditClick = (item) => {
    setCurrentItem(item);
    setOpenEditDialog(true);
  };

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
    setCurrentItem({ id: '', name: '', quantity: '', status: '' });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleEditSubmit = () => {
    setInventoryItems(inventoryItems.map((item) => (item.id === currentItem.id ? currentItem : item)));
    handleEditDialogClose();
  };

  const handleAddItem = () => {
    // Generate a new unique ID (for demonstration purposes, not production-ready)
    const newItem = {
      id: inventoryItems.length + 1,
      name: `New Item ${inventoryItems.length + 1}`,
      quantity: 0,
      status: 'New',
    };
    setInventoryItems([...inventoryItems, newItem]);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <h2>Inventory</h2>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddItem}>
          Add Item
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventoryItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{item.status}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" size="small" onClick={() => handleEditClick(item)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openEditDialog} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Item Name"
            type="text"
            fullWidth
            variant="standard"
            value={currentItem.name}
            onChange={handleEditInputChange}
          />
          <TextField
            margin="dense"
            name="quantity"
            label="Quantity"
            type="number"
            fullWidth
            variant="standard"
            value={currentItem.quantity}
            onChange={handleEditInputChange}
          />
          <TextField
            margin="dense"
            name="status"
            label="Status"
            type="text"
            fullWidth
            variant="standard"
            value={currentItem.status}
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

export default Inventory;
