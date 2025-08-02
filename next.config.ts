import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    loader: "default",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/f/**",
      },
      {
        protocol: "https",
        hostname: "p2myfh92qq.ufs.sh",
        pathname: "/f/**",
      }
    ],
  },
};

export default nextConfig;
