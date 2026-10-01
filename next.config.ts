import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let phones/tablets on the local network load dev assets (e.g. http://192.168.1.x:3000).
  allowedDevOrigins: ["192.168.*.*"],
};

export default nextConfig;
