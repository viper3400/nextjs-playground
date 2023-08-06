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
        hostname: 'autohub.ir',
        port: '',
        pathname: '**'
      }
    ],
  },
  experimental: {
    appDir: true,
    serverActions: true
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl: process.env.NEXT_PUBLIC_VIDEODB_WEB_API_URL,
  },
}

module.exports = nextConfig
