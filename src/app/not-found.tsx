import { Box, Container, Typography } from '@mui/material';


export default function notFound() {
    return (
        <Box sx={{
            pt: '64px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            py: { xs: 4, md: 8 },
            justifyContent:'center'

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
}