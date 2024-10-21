/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['via.placeholder.com'],
    unoptimized: true,
  },
  basePath: '/Tech-Congo-site',
  assetPrefix: '/Tech-Congo-site',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  // Exclude the functions directory from the build
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

export default nextConfig
