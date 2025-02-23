'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar 
      position="fixed" 
      color="default" 
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography 
          variant="h6" 
          component="div"
          sx={{
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            fontWeight: 'bold',
          }}
        >
          TG
        </Typography>
        <Box>
          <Link href="/" passHref style={{ textDecoration: 'none' }}>
            <Button 
              color="inherit"
              sx={{ 
                fontSize: { xs: '0.875rem', md: '1rem' },
                px: { xs: 1, md: 2 }
              }}
            >
              Home
            </Button>
          </Link>
          <Link href="/about" passHref style={{ textDecoration: 'none' }}>
            <Button 
              color="inherit"
              sx={{ 
                fontSize: { xs: '0.875rem', md: '1rem' },
                px: { xs: 1, md: 2 }
              }}
            >
              About
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;