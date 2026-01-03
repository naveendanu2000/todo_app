/** @type {import('next').NextConfig} */
// Read BASE_PATH from env to support deploying to GitHub Pages under a repo subpath.
// Accepts values like `repo-name` or `/repo-name` (with or without leading slash).
const rawBase = process.env.BASE_PATH || '';
const basePath = rawBase
  ? (rawBase.startsWith('/') ? rawBase.replace(/\/$/, '') : '/' + rawBase.replace(/\/$/, ''))
  : '';
const assetPrefix = basePath || '';

const nextConfig = {
  reactStrictMode: true,
  // Use the new static export mode. `output: 'export'` makes `next build` generate a static `out/` directory
  // (replaces the deprecated `next export` command).
  output: 'export',
  basePath,
  assetPrefix,
  // Static export can't use Next's Image Optimization API — disable it for static export
  images: {
    unoptimized: true,
  },
  // Using trailingSlash makes Next generate folder-based routes which work well on GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
