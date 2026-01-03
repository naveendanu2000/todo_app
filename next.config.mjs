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
  basePath,
  assetPrefix,
  // Using trailingSlash makes `next export` emit folder-based routes which work well on GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
