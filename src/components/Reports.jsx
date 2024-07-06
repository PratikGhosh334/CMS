import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox, Button, Paper, Typography } from '@mui/material';

function Reports() {
  const [selectedReports, setSelectedReports] = useState({
    inventory: false,
    attendance: false,
    siteProgress: false,
  });

  const handleChange = (event) => {
    setSelectedReports({ ...selectedReports, [event.target.name]: event.target.checked });
  };

  const generateReport = () => {
    console.log('Generating report with selected options:', selectedReports);
    // Implement report generation logic here
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Generate Reports</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={selectedReports.inventory} onChange={handleChange} name="inventory" />}
          label="Inventory Report"
        />
        <FormControlLabel
          control={<Checkbox checked={selectedReports.attendance} onChange={handleChange} name="attendance" />}
          label="Attendance Report"
        />
        <FormControlLabel
          control={<Checkbox checked={selectedReports.siteProgress} onChange={handleChange} name="siteProgress" />}
          label="Site Progress Report"
        />
      </FormGroup>
      <Button variant="contained" onClick={generateReport} sx={{ mt: 2 }}>
        Generate Report
      </Button>
    </Paper>
  );
}

export default Reports;