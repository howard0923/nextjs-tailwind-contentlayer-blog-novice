import { withContentlayer } from 'next-contentlayer';
import i18nConfig from './next-i18next.config.js';
import withPWA from 'next-pwa';

const { i18n } = i18nConfig;
/** @type {import('next').NextConfig} */
const config = withContentlayer({
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  swcMinify: true,
  i18n,
  // Support svg import
  // ref: https://dev.to/dolearning/importing-svgs-to-next-js-nna
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // 加入以上 custom webpack 設定
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  images: {
    // Enable modern image formats
    formats: ['image/avif', 'image/webp'],
  },
});

const nextConfig = withPWA({
  dest: 'public',
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  register: true,
})(config);

export default nextConfig;
