/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  fastRefresh: true,
  concurrentFeatures: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/shadcn.png'
      },
      {
        protocol: 'https',
        hostname: 'openauthx.s3.ap-south-1.amazonaws.com',
      }
    ]
  },
  async headers () {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
