<<<<<<< HEAD
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/media/**',
      },
    ],
  },
};

module.exports = nextConfig;
=======
version https://git-lfs.github.com/spec/v1
oid sha256:614bce25b089c3f19b1e17a6346c74b858034040154c6621e7d35303004767cc
size 133
>>>>>>> origin/main
