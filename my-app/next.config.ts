import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    MY_PHONE: process.env.MY_PHONE,
    MY_EMAIL: process.env.MY_EMAIL,
    CV_PUBLIC_URL: process.env.CV_PUBLIC_URL,
    MY_LINKEDIN: process.env.MY_LINKEDIN,
    MY_XING: process.env.MY_XING,
    MY_GITHUB: process.env.MY_GITHUB,
  },
};

export default nextConfig;
