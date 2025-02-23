import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer/Footer';
import { Box } from '@mui/material';

export const metadata = {
  title: "Porfolio",
  description: "Welcome to the home page"
};

export default function Home() {
  return (
    <Box sx={{ 
      pt: '64px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent:'space-between',
      // alignItems:'center'
    }}>
      <Navbar />
      
      <Hero />
      <Footer />
    </Box>
  );
}
