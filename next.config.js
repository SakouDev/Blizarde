/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


module.exports = {
  images: {
    remotePatterns: [
      {
        // protocol: 'http',
        hostname: 'media.rawg.io',
      },
    ],
  },
}