'use client';

import { Box, Container, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 2, md: 3 },
        px: { xs: 1, md: 2 },
        mt: 'auto',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Box sx={{ 
          mb: { xs: 1, md: 2 },
          display: 'flex',
          justifyContent: 'center',
          gap: { xs: 1, md: 2 }
        }}>
          <IconButton
            href="https://github.com/tanmaygupta069"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            sx={{ 
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                transform: 'scale(1.1)',
              },
              transition: 'transform 0.2s',
            }}
          >
            <GitHubIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
          </IconButton>
          <IconButton
            href="https://medium.com/@tanmaygupta069"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            sx={{ 
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                transform: 'scale(1.1)',
              },
              transition: 'transform 0.2s',
            }}
          >
            <ArticleIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
          </IconButton>
          <IconButton
            href="https://www.youtube.com/@tanmayplayys"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            sx={{ 
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                transform: 'scale(1.1)',
              },
              transition: 'transform 0.2s',
            }}
          >
            <YouTubeIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
          </IconButton>
        </Box>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            fontSize: { xs: '0.75rem', md: '0.875rem' }
          }}
        >
          © {new Date().getFullYear()} Tanmay Gupta
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;