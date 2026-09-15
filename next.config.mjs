/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  transpilePackages: ["framer-motion"],
  images: {
    unoptimized: true,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
    {
      source: "/llms.txt",
      headers: [
        { key: "Content-Type", value: "text/plain; charset=utf-8" },
        { key: "Cache-Control", value: "public, max-age=86400" },
      ],
    },
    {
      source: "/.well-known/ai-agents.txt",
      headers: [
        { key: "Content-Type", value: "text/plain; charset=utf-8" },
        { key: "Cache-Control", value: "public, max-age=86400" },
      ],
    },
    {
      source: "/ai-plugin.json",
      headers: [
        { key: "Content-Type", value: "application/json; charset=utf-8" },
        { key: "Cache-Control", value: "public, max-age=86400" },
      ],
    },
  ],
};

export default nextConfig;
