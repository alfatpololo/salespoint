/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix untuk Vercel deployment dengan routing groups di Next.js 15
  experimental: {
    // Memastikan client reference manifest ter-generate dengan benar
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Memastikan build konsisten
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
