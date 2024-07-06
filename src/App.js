import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box, useMediaQuery, AppBar } from '@mui/material';

import { createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Attendance from './components/Attendance';
import Sites from './components/Sites';
import Reports from './components/Reports';
import Users from './components/Users';
import Notifications from './components/Notifications';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

const theme = createTheme({
  // Customize your theme here if needed
});

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  React.useEffect(() => {
    setIsSidebarOpen(!isSmallScreen);
  }, [isSmallScreen]);

  const renderContent = () => {
    switch (selectedMenu) {
      case 'dashboard':
        return <Dashboard />;
      case 'inventory':
        return <Inventory />;
      case 'attendance':
        return <Attendance />;
      case 'sites':
        return <Sites />;
      case 'reports':
        return <Reports />;
      case 'users':
        return <Users />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Header 
            currentUser={currentUser} 
            onLoginClick={() => setIsLoginModalOpen(true)}
            onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </AppBar>
        <Box sx={{ display: 'flex', flexGrow: 1, pt: '64px' }}> {/* Adjust pt based on your header height */}
          <Sidebar 
            isOpen={isSidebarOpen}
            selectedMenu={selectedMenu} 
            onMenuSelect={(menu) => {
              setSelectedMenu(menu);
              if (isSmallScreen) setIsSidebarOpen(false);
            }}
          />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1, 
              p: 3, 
              width: '100%', 
              marginLeft: isSmallScreen ? 0 : (isSidebarOpen ? '240px' : 0),
              transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            }}
          >
            {renderContent()}
          </Box>
        </Box>
        <Footer />
        <Notifications />
        <LoginModal 
          open={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onLogin={(user) => {
            setCurrentUser(user);
            setIsLoginModalOpen(false);
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;