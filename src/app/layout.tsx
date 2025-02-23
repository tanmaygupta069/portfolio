import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Tanmay Gupta - Pianist, Programmer, Procrastinator',
  description: 'Personal portfolio of Tanmay Gupta - A passionate pianist, programmer, and eternal learner. Explore my musical journey, coding projects, and more.',
  authors: [{ name: 'Tanmay Gupta' }],
  keywords: ['Tanmay Gupta', 'Pianist', 'Programmer', 'Portfolio', 'Web Developer', 'Music', 'Piano', 'YouTube', 'Software Engineer'],
  creator: 'Tanmay Gupta',
  publisher: 'Tanmay Gupta',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tanmay-gupta-portfolio.vercel.app',
    siteName: 'Tanmay Gupta Portfolio',
    title: 'Tanmay Gupta - Pianist & Programmer',
    description: 'Personal portfolio of Tanmay Gupta - A passionate pianist, programmer, and eternal learner.',
    images: [
      {
        url: 'https://tanmay-gupta-portfolio.vercel.app/pfp.jpg', // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Tanmay Gupta Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanmay Gupta - Pianist & Programmer',
    description: 'Personal portfolio of Tanmay Gupta - A passionate pianist, programmer, and eternal learner.',
    images: ['https://tanmay-gupta-portfolio.vercel.app'], // Same image as OpenGraph
    creator: '@tanmaygupta069',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google verification code
  },
  alternates: {
    canonical: 'https://tanmay-gupta-portfolio.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
