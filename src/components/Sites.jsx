import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box } from '@mui/material';

function Sites() {
  const [sites, setSites] = useState([
    { id: 1, name: 'Site A', status: 'Active' },
    { id: 2, name: 'Site B', status: 'Paused' },
  ]);

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentSite, setCurrentSite] = useState({ id: '', name: '', status: '' });

  const handleEditClick = (site) => {
    setCurrentSite(site);
    setOpenEditDialog(true);
  };

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
    setCurrentSite({ id: '', name: '', status: '' });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentSite({ ...currentSite, [name]: value });
  };

  const handleEditSubmit = () => {
    setSites(sites.map((site) => (site.id === currentSite.id ? currentSite : site)));
    handleEditDialogClose();
  };

  const handleAddSite = () => {
    // Generate a new unique ID (for demonstration purposes, not production-ready)
    const newSite = {
      id: sites.length + 1,
      name: `New Site ${sites.length + 1}`,
      status: 'Active',
    };
    setSites([...sites, newSite]);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <h2>Sites</h2>
        <Button variant="contained" onClick={handleAddSite}>Add Site</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Site</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sites.map((site) => (
              <TableRow key={site.id}>
                <TableCell component="th" scope="row">
                  {site.name}
                </TableCell>
                <TableCell align="right">{site.status}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" size="small" onClick={() => handleEditClick(site)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openEditDialog} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Site</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Site Name"
            type="text"
            fullWidth
            variant="standard"
            value={currentSite.name}
            onChange={handleEditInputChange}
          />
          <TextField
            margin="dense"
            name="status"
            label="Status"
            type="text"
            fullWidth
            variant="standard"
            value={currentSite.status}
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

export default Sites;
