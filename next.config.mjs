/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ✅ sabhi images normal <img> ke tarah serve hongi
  },
  // basePath: '/anantraj',
  // assetPrefix: '/anantraj/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', 
};

export default nextConfig;
