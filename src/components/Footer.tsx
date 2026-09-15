import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Divider } from '@mui/material';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a2e',
        color: 'rgba(255,255,255,0.7)',
        py: 2,
        px: 3,
        mt: 'auto',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mb: 2 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
          {t('footer.copyright', { year: currentYear })}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
          v1.0.0
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
