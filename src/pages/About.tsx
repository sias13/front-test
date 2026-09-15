import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  Code as CodeIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

const About: React.FC = () => {
  const { t } = useTranslation();
  const features = t('about.features', { returnObjects: true }) as string[];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 3,
        py: 8,
        maxWidth: 800,
        mx: 'auto',
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0f3460 0%, #533483 100%)',
            mb: 3,
            boxShadow: '0 8px 32px rgba(15, 52, 96, 0.3)',
          }}
        >
          <InfoIcon sx={{ fontSize: 32, color: 'white' }} />
        </Box>

        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: 'linear-gradient(135deg, #0f3460 0%, #533483 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('about.title')}
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {t('about.description')}
        </Typography>
      </Box>

      {/* Features List */}
      <Card
        sx={{
          width: '100%',
          mb: 4,
          borderRadius: 3,
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <List>
            {features.map((feature: string, index: number) => (
              <ListItem key={index} sx={{ py: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <CheckIcon sx={{ color: '#e94560' }} />
                </ListItemIcon>
                <ListItemText
                  primary={<span style={{ fontSize: '1rem', fontWeight: 500 }}>{feature}</span>}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Tech Stack */}
      <Card
        sx={{
          width: '100%',
          borderRadius: 3,
          border: '1px solid rgba(0,0,0,0.08)',
          background: 'linear-gradient(135deg, rgba(15, 52, 96, 0.02) 0%, rgba(83, 52, 131, 0.02) 100%)',
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CodeIcon sx={{ mr: 1, color: '#533483' }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Tech Stack
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Chip label="React 18" color="primary" variant="outlined" />
            <Chip label="Material UI" color="secondary" variant="outlined" />
            <Chip label="i18next" variant="outlined" />
            <Chip label="Axios" variant="outlined" />
            <Chip label="TypeScript" color="info" variant="outlined" />
            <Chip label="Vite" color="warning" variant="outlined" />
            <Chip label="Tailwind CSS" color="success" variant="outlined" />
          </Box>
        </CardContent>
      </Card>

      {/* Version Info */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {t('about.version')}: 1.0.0
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {t('about.builtWith')}
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
