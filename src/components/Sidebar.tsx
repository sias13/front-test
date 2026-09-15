import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Box,
  Typography,
  IconButton,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Menu as MenuIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';

const DRAWER_WIDTH = 260;

interface SidebarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, currentPage }) => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLanguageChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  const menuItems = [
    { text: t('app.home'), icon: <HomeIcon />, page: 'landing' },
    { text: t('app.about'), icon: <InfoIcon />, page: 'about' },
  ];

  return (
    <>
      {/* Floating menu button */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: 'fixed',
          left: open ? `${DRAWER_WIDTH}px` : 16,
          top: 16,
          zIndex: 1300,
          transition: 'left 0.3s ease',
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
          boxShadow: 3,
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: open ? DRAWER_WIDTH : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            backgroundColor: '#1a1a2e',
            color: 'white',
            borderRight: '1px solid rgba(255,255,255,0.1)',
          },
          transition: 'width 0.3s ease',
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', mt: 2 }}>
          {/* App Title */}
          <Box sx={{ px: 3, py: 2, mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#e94560' }}>
              {t('app.title')}
            </Typography>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

          {/* Navigation Items */}
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    onNavigate(item.page);
                    setOpen(false);
                  }}
                  selected={currentPage === item.page}
                  sx={{
                    mx: 1,
                    borderRadius: 2,
                    mb: 0.5,
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(233, 69, 96, 0.2)',
                      '&:hover': {
                        backgroundColor: 'rgba(233, 69, 96, 0.3)',
                      },
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.05)',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: currentPage === item.page ? '#e94560' : 'rgba(255,255,255,0.7)', minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      '& .MuiTypography-root': {
                        color: currentPage === item.page ? '#e94560' : 'rgba(255,255,255,0.9)',
                        fontWeight: currentPage === item.page ? 600 : 400,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 2 }} />

          {/* Language Selector */}
          <Box sx={{ px: 3, py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LanguageIcon sx={{ fontSize: 18, mr: 1, color: 'rgba(255,255,255,0.7)' }} />
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                {t('app.language')}
              </Typography>
            </Box>
            <FormControl size="small" fullWidth>
              <Select
                value={i18n.language}
                onChange={handleLanguageChange}
                sx={{
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255,0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255,0.5)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#e94560',
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'white',
                  },
                }}
              >
                <MenuItem value="it">🇮🇹 Italiano</MenuItem>
                <MenuItem value="en">🇬🇧 English</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
