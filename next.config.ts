/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    SITE_URL: 'https://tanmaygupta.vercel.app',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  // Enable PWA
  // Image optimization
  images: {
    domains: ['tanmaygupta.vercel.app'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  // Enable React strict mode
  reactStrictMode: true,
  // Enable SWC minification
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable compression
  compress: true,
  // Enable source maps in production
  productionBrowserSourceMaps: false,
  // Enable trailing slashes
  trailingSlash: false,
  // Powered by header
  poweredByHeader: false,
};

export default nextConfig;
