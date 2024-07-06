import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme, useMediaQuery, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  { id: 'dashboard', text: 'Dashboard', icon: <DashboardIcon /> },
  { id: 'inventory', text: 'Inventory', icon: <InventoryIcon /> },
  { id: 'attendance', text: 'Attendance', icon: <PeopleIcon /> },
  { id: 'sites', text: 'Sites', icon: <LocationOnIcon /> },
  { id: 'reports', text: 'Reports', icon: <AssessmentIcon /> },
  { id: 'users', text: 'Users', icon: <PersonIcon /> },
];

function Sidebar({ isOpen, selectedMenu, onMenuSelect, onClose }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const drawerContent = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          key={item.id} 
          selected={selectedMenu === item.id}
          onClick={() => {
            onMenuSelect(item.id);
            if (isSmallScreen) onClose();
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  if (isSmallScreen) {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            onClick={() => onClose()}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          {drawerContent}
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          top: '64px', // Adjust this value based on your header height
          height: 'calc(100% - 64px)',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}

export default Sidebar;
