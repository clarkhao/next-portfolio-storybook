/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/400/267/**',
      },
    ],
  },
  output: 'standalone',
}

module.exports = nextConfig
