/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.scdn.co",
      "platform-lookaside.fbsbx.com",
      "scontent-ams2-1.xx.fbcdn.net",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
