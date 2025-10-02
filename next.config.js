/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tranktechnologies.com",
      },
    ],
  },
};

module.exports = nextConfig;
