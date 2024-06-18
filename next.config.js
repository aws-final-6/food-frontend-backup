/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.foodsafetykorea.go.kr",
      },
      {
        protocol: "https",
        hostname: "www.foodsafetykorea.go.kr",
      },
      {
        protocol: "https",
        hostname: "recipe1.ezmember.co.kr",
      },
      {
        protocol: "https",
        hostname: "mblogthumb-phinf.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "postfiles.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "blogfiles.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "recipe1.ezmember.co.kr",
      },
    ],
  },
};

module.exports = nextConfig;
