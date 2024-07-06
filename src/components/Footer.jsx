import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Construction Management System
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="#">
          Privacy Policy
        </Link>
        {' | '}
        <Link color="inherit" href="#">
          Terms of Service
        </Link>
        {' | '}
        <Link color="inherit" href="#">
          Help
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;