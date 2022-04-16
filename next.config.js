const { NEXT_PUBLIC_STORAGE_DOMAIN } = process.env;
const vercelConfig = require('./vercel.json');

const devMode = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [NEXT_PUBLIC_STORAGE_DOMAIN],
  },
  async rewrites() {
    return vercelConfig.rewrites.map((entry) => {
      if (devMode) {
        return {
          ...entry,
          destination: entry.destination.replace('https://i.disy.cyou', `http://${NEXT_PUBLIC_STORAGE_DOMAIN}`),
        };
      }
      return entry;
    });
  },
  async headers() {
    return vercelConfig.headers.reduce((acc, config) => {
      if (config.source === '/(.*)') {
        acc.push({
          ...config,
          source: '/:path*',
        });
        acc.push({
          ...config,
          source: '/',
        });
      } else {
        acc.push(config);
      }
      return acc;
    }, []);
  },
};

module.exports = nextConfig;
