const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: path.resolve(__dirname, 'build'), // Ensures absolute path
    reactStrictMode: true,
};

module.exports = nextConfig;
