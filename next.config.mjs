/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Exports static HTML/CSS/JS
  basePath: '',      // Base path for your app (empty for root domain)
  images: {
    unoptimized: true, // For GitHub Pages compatibility
  },
  // Add trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig
