/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'filestore.community.support.microsoft.com',
        port: '',
        pathname: '**'
      }
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
