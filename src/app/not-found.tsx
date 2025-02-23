import NotFound from '@/components/Not-Found/Not-Found';
import { Box } from '@mui/material';


export default function notFound() {
    return (
        <Box sx={{
            // pt: '64px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            // py: { xs: 4, md: 8 },
            justifyContent:'center'

        }}>
            <NotFound />

        </Box>
    )
}