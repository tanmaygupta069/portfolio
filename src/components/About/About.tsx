'use client';
import { getAge } from '@/utils/getAge';
import { Box, Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            padding: '12px 24px',
            mb: { xs: 3, md: 4 },
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            lineHeight: { xs: 1.5, md: 1.7 },
          }}
        >
          I am Tanmay Gupta, a {getAge('02-10-2003')}-year-old B.Tech final-year student, juggling code by day and keys by night. A musician at heart, I make melodies on my keyboard and craft logic in my free time—because why choose between art and algorithms? 🎶💻
        </Typography>
      </Container>
    </Box>
  );
};

export default About;