/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Cache Components for Next.js 16
  cacheComponents: true,

  // Enable View Transitions
  experimental: {
    viewTransition: true,
  },
};

module.exports = nextConfig;
