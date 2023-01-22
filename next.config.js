const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  // assetPrefix: isProd ? '/adc2023.github.io/' : '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
