//** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'kidsrus-ecommerce-swqx.vercel.app',
      },
    ],
  },
}

module.exports = nextConfig
