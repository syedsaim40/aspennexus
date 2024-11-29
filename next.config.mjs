import path from 'path';

const nextConfig = {
    reactStrictMode: true,
    distDir: path.resolve('./build'), // Use an absolute path for distDir
};

export default nextConfig;
