/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*xwlinvsqvuftxmkmkieq.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
