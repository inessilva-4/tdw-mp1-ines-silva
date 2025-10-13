/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: {
    loader: 'custom',
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};
