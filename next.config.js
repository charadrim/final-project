// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     typedRoutes: true,
//   },
// };

// module.exports = nextConfig;

// module.exports = {
//   // Other Next.js config options
//   serverActions: true,
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },

  // Other Next.js config options
};

module.exports = nextConfig;
