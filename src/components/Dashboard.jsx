import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

function Dashboard() {
  return (
    <Box sx={{ padding: 2 }}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={3}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Active Sites</Typography>
          <Typography variant="h4">5</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Workers Present</Typography>
          <Typography variant="h4">42</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Low Stock Alerts</Typography>
          <Typography variant="h4">3</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Pending Orders</Typography>
          <Typography variant="h4">7</Typography>
        </Paper>
      </Grid>
      {/* Add more dashboard widgets here */}
    </Grid>
    </Box>
  );
}

export default Dashboard;