import { Box, Container, Typography } from '@mui/material';

const NotFound = () => {
    return (
        <Box sx={{
            pt: '64px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            py: { xs: 4, md: 8 },
            justifyContent: 'center'

        }}>
            <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 }, textAlign: 'center', alignItems: 'center' }}>
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        padding: '12px 24px',
                        mb: { xs: 3, md: 4 },
                        fontSize: { xs: '2rem', sm: '3rem', md: '4.5rem' },
                        // fontWeight: 'bold',
                        color: 'white', // Black text
                        // WebkitTextStroke: '1px rgba(0, 0, 0, 0.5)', 
                        textShadow: `
                    2px 2px 2px rgba(0, 0, 0, 0.3),
                    4px 4px 4px rgba(0, 0, 0, 0.3),
                    6px 6px 6px rgba(0, 0, 0, 0.3),
                    8px 8px 8px rgba(0, 0, 0, 0.3),
                    10px 10px 10px rgba(0, 0, 0, 0.3)
                    `
                    }}
                >
                    404
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center',
                        color: 'text.secondary',
                        fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                        lineHeight: { xs: 1.5, md: 1.7 },
                    }}
                >The page you are looking for does not exist
                </Typography>
            </Container>
        </Box>
    )
};

export default NotFound;