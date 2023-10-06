/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['picsum.photos']
  },
  experimental: {
    serverComponents: true,
    serverActions: true
  }
};

module.exports = nextConfig;
