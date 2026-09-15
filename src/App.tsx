import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Chip } from '@mui/material';
import { WifiOff as WifiOffIcon, Wifi as WifiIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import apiService from './services/api';
import './i18n';

// Create a custom Material Design theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#e94560',
      dark: '#c73650',
    },
    secondary: {
      main: '#533483',
    },
    background: {
      default: '#f5f5f7',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [apiConnected, setApiConnected] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Check API connection on mount
    const checkConnection = async () => {
      const connected = await apiService.healthCheck();
      setApiConnected(connected);
    };
    checkConnection();
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'landing':
      default:
        return <Landing onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        {/* Sidebar / Hidden Drawer */}
        <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* API Status Indicator */}
          <Box
            sx={{
              position: 'fixed',
              top: 16,
              right: 16,
              zIndex: 1200,
            }}
          >
            <Chip
              icon={apiConnected ? <WifiIcon /> : <WifiOffIcon />}
              label={apiConnected ? t('api.connected') : t('api.disconnected')}
              color={apiConnected ? 'success' : 'default'}
              size="small"
              variant="outlined"
              sx={{
                backgroundColor: apiConnected ? 'rgba(76, 175, 80, 0.1)' : 'rgba(0,0,0,0.04)',
              }}
            />
          </Box>

          {/* Page Content */}
          <Box sx={{ flexGrow: 1, pt: 4 }}>
            {renderPage()}
          </Box>

          {/* Footer */}
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
