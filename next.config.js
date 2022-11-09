/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER_ENDPOINT: "http://localhost:3333",
  },
}

module.exports = nextConfig
