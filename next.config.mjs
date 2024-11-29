const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    distDir: path.resolve(__dirname, 'build'), // Use absolute path
};

export default nextConfig;
