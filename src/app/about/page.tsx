import About from '@/components/About/About';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Box } from '@mui/material';
import type { Metadata, Viewport } from "next";

export const metadata:Metadata = {
  title: "About Me",
  description: "About Me"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function AboutPage() {
  return (
    <Box sx={{ 
      pt: '64px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar />
      <About />
      <Footer />
    </Box>
  );
}