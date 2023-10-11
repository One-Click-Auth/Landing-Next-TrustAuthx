/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
