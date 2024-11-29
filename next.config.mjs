import { join } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  distDir: join(__dirname, 'build'),  // This should be correct now
};

export default nextConfig;
