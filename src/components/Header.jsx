import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header({ currentUser, onLoginClick }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Construction Management System
        </Typography>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        {currentUser ? (
          <Typography>{currentUser.name}</Typography>
        ) : (
          <Button color="inherit" onClick={onLoginClick}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;