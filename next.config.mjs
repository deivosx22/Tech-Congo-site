/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  output: 'export', // Use the new output configuration
  distDir: 'out/en', // Specify the output directory here
}

export default nextConfig
