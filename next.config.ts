import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  basePath: '/oppgavestyring-frontend',
  trailingSlash: true,
  reactStrictMode: true,
  output: 'standalone',
  assetPrefix: process.env.ASSET_PREFIX ?? undefined,

  experimental: {
    optimizePackageImports: ['@navikt/ds-react', '@navikt/aksel-icons'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });

    return config;
  },

  images: {
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
