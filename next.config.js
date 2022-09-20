/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["pngimg.com", "fakestoreapi.com", "images.unsplash.com"],
  },
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_KEY: process.env.STRIPE_KEY,
  },
};

module.exports = nextConfig;
