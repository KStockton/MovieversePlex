/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.media-amazon.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
