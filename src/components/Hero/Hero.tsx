'use client';

import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import Piano from '../Piano/Piano';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        pb: { xs: 2, md: 4 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md" sx={{ mt: { xs: 4, md: 'auto' }, mb: { xs: 2, md: 4 } }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '4.5rem' },
            fontWeight: 'bold',
            textAlign: 'center',
            mb: { xs: 1, md: 2 },
            color: 'black',
          }}
        >
          Tanmay Gupta
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
            textAlign: 'center',
            color: 'text.secondary',
          }}
        >
          Pianist, Programmer, Procrastinator
        </Typography>
      </Container>
      <Box sx={{ 
        width: '100%', 
        maxWidth: '100%',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        px: { xs: 1, md: 2 }
      }}>
        <Piano width={isMobile ? window.innerWidth - 32 : 800} />
      </Box>
    </Box>
  );
};

export default Hero;