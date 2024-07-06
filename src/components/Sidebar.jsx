import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText,useTheme, useMediaQuery } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';

const menuItems = [
  { id: 'dashboard', text: 'Dashboard', icon: <DashboardIcon /> },
  { id: 'inventory', text: 'Inventory', icon: <InventoryIcon /> },
  { id: 'attendance', text: 'Attendance', icon: <PeopleIcon /> },
  { id: 'sites', text: 'Sites', icon: <LocationOnIcon /> },
  { id: 'reports', text: 'Reports', icon: <AssessmentIcon /> },
  { id: 'users', text: 'Users', icon: <PersonIcon /> },
];

function Sidebar({ isOpen, selectedMenu, onMenuSelect }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    return (
      <Drawer 
        variant={isSmallScreen ? "temporary" : "permanent"} 
        open={isOpen}
        onClose={() => onMenuSelect(selectedMenu)}
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
              <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.id} 
            selected={selectedMenu === item.id}
            onClick={() => onMenuSelect(item.id)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        </List>
      </Drawer>
    );
  }
  
  export default Sidebar;