import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import {
  WavingHand as WaveIcon,
  Rocket as RocketIcon,
  Public as GlobeIcon,
  Api as ApiIcon,
} from '@mui/icons-material';

interface LandingProps {
  onNavigate: (page: string) => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 200px)',
        px: 3,
        py: 8,
      }}
    >
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', maxWidth: 700, mb: 6 }}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e94560 0%, #0f3460 100%)',
            mb: 3,
            boxShadow: '0 8px 32px rgba(233, 69, 96, 0.3)',
          }}
        >
          <WaveIcon sx={{ fontSize: 40, color: 'white' }} />
        </Box>

        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: 'linear-gradient(135deg, #e94560 0%, #533483 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          {t('landing.welcome')}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          {t('landing.subtitle')}
        </Typography>

        <Button
          variant="contained"
          size="large"
          startIcon={<RocketIcon />}
          onClick={() => onNavigate('about')}
          sx={{
            background: 'linear-gradient(135deg, #e94560 0%, #533483 100%)',
            px: 4,
            py: 1.5,
            borderRadius: 3,
            textTransform: 'none',
            fontSize: '1.1rem',
            fontWeight: 600,
            boxShadow: '0 4px 20px rgba(233, 69, 96, 0.4)',
            '&:hover': {
              boxShadow: '0 6px 24px rgba(233, 69, 96, 0.5)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {t('landing.getStarted')}
        </Button>
      </Box>

      {/* Feature Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
          maxWidth: 800,
          width: '100%',
        }}
      >
        <Card
          sx={{
            background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.05) 0%, rgba(83, 52, 131, 0.05) 100%)',
            border: '1px solid rgba(233, 69, 96, 0.1)',
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <GlobeIcon sx={{ fontSize: 36, color: '#e94560', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              i18n
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('landing.description')}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Chip label="Italiano" size="small" sx={{ mr: 1, mb: 0.5 }} />
              <Chip label="English" size="small" variant="outlined" />
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            background: 'linear-gradient(135deg, rgba(15, 52, 96, 0.05) 0%, rgba(83, 52, 131, 0.05) 100%)',
            border: '1px solid rgba(15, 52, 96, 0.1)',
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <ApiIcon sx={{ fontSize: 36, color: '#0f3460', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              RESTful API
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Open internationalization connection to a backend via RESTful API with Axios client.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Chip label="Axios" size="small" sx={{ mr: 1, mb: 0.5 }} color="primary" variant="outlined" />
              <Chip label="REST" size="small" variant="outlined" />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Landing;
