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
}

export default nextConfig
